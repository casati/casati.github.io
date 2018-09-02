
var app = {};

var $page, $splash, $panel, $panelContent, $target, $playButton, $pauseButton, $camera, $cameraCanvas, cameraCanvas, cameraContext, video;

app.refreshingCameraInterval = 100;

app.init = function ()
{    
    $splash = $(".splash");
    $panel = $("#panel").hide();
    $target = $("#target").hide();
    $camera = $(".camera").hide();
    $page = $("#page").show(); // hidden via css
    $splash.find(".button.start").on("click", app.initCamera);
    $panelContent = $panel.find(".content");
    $panel.find(".close-button").on("click", function()
    {
        $panel.slideUp("slow", function ()
        {
            $panelContent.empty();        
        });        
    });

    // TODO: remove debug code
    // $splash.hide();
    // $camera.show();
    // $target.css({ top: 200, left: 400 }).addClass("LAPTOP").attr("data-id", "MC-MBP1").html('<span class="name">MacBook Pro (15-inch, Late 2013)</span><span class="description">S/N: D3MQ7DRKB42</span>').show();
    // app.showLaptopDemoPanel("MC-MBP1", "MacBook Pro (15-inch, Late 2013)", "S/N: D3MQ7DRKB42");    
};

app.initCamera = function ()
{
    $splash.html("<h1>Waiting for video stream...</h1>");
    video = document.createElement("video");
    var constraints = { 
        audio: false, 
        video: 
        { 
            facingMode: "environment", 
            width: { ideal: 1280 }, 
            height: { ideal: 720 }            
        } 
    };    
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) 
        {
            $splash.html("<h1>Loading...</h1>");
            video.srcObject = stream;
            video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
            video.onloadedmetadata = function(e) 
            {
                video.play();                
                $cameraCanvas = $("<canvas>").appendTo($camera);
                cameraCanvas = $cameraCanvas[0];
                cameraContext = cameraCanvas.getContext("2d");
                $playButton = $("<span>").addClass("camera-control play").appendTo($camera).hide().on("click", app.play);
                $pauseButton = $("<span>").addClass("camera-control pause").appendTo($camera).on("click", app.pause);
                $("<input>").attr("type", "range").appendTo($camera).attr("min", 0).attr("max", 300).attr("step", 100).val(app.refreshingCameraInterval).on("change", function ()
                {
                    app.refreshingCameraInterval = parseInt($(this).val(), 10);
                });
                requestAnimationFrame(app.drawCameraImage);
                $splash.hide();
                $camera.show();
            };            
            
        })
        .catch(function(err) 
        {
            $splash.addClass("error").html('<h1>' + err.message + '</h1>');
            $("<span>").addClass("button").appendTo($splash).html("Retry").on("click", function ()
            {
                document.location.reload(true);        
            });
        });
};

app.cameraPaused = false;
app.pause = function ()
{
    video.pause();
    $playButton.show();
    $pauseButton.hide();
    app.cameraPaused = true;
};
app.play = function ()
{    
    video.play();
    $playButton.hide();
    $pauseButton.show();
    app.cameraPaused = false;
    app.drawCameraImage();
};

app.drawCameraImage = function ()
{
    if (app.cameraPaused)
        return;
    var videoWidth = video.videoWidth;
    var videoHeight = video.videoHeight;
    var containerWidth = $camera.width();
    var containerHeight = $camera.height();
    var ratio = Math.min(containerWidth / videoWidth, containerHeight / videoHeight);
    var canvasWidth = videoWidth * ratio;
    var canvasHeight = videoHeight * ratio;
    var left = (containerWidth - canvasWidth) / 2;
    var top = 0; //(containerHeight - canvasHeight) / 2;
    cameraCanvas.width = canvasWidth;
    cameraCanvas.height = canvasHeight;
    
    $cameraCanvas.css({ top: top, left: left });
    cameraContext.drawImage(video, 0, 0, cameraCanvas.width, cameraCanvas.height);
    var imageData = cameraContext.getImageData(0, 0, cameraCanvas.width, cameraCanvas.height);
    var code = jsQR(imageData.data, imageData.width, imageData.height);
    
    if (code) 
    {
        $target.css({ top: top + code.location.topLeftCorner.y, left: left + code.location.topLeftCorner.x }).show();
        app.processQR(code.data);
    }
    else
        $target.fadeOut();
    
    if (app.refreshingCameraInterval === 0)
        requestAnimationFrame(app.drawCameraImage);
    else
        setTimeout(app.drawCameraImage, app.refreshingCameraInterval);
};

app.processQR = function (data)
{    
    try
    {
        var item = JSON.parse(data);
        if (!item.type || !item.id || !item.name || !item.description)
            throw new Error();
        if ($target.hasClass("item.type") && $target.attr("data-id") === item.id)
            return;
        
        var action;
        switch (item.type.toUpperCase())
        {
            case "LAPTOP":
                action = app.showLaptopDemoPanel;                   
                break;
            default:
                throw new Error();
        }
        $target.addClass("LAPTOP").attr("data-id", item.id).html('<span class="name">' + item.name + '</span><span class="description">' + item.description + '</span>').off("click").on("click", function ()
        {
            action(item.id, item.name, item.description);
            app.pause();
            $target.hide(); 
        });
    }
    catch(ex)
    {
        $target.removeClass().attr("data-id", "").html('<span class="name">Unknown</span><span class="description">Unrecognized QR Code</span>').off("click");
    }

};

app.showLaptopDemoPanel = function (id, name, description)
{
    $panel.hide();
    $panelContent.empty().html(
        '<h1>' + name + '</h1>' +
        '<p class="description">' + description + '</p>' +
        '<p class="description">ID: ' + id + '</p>' +
        '<hr>' +
        '<div class="loader"></div>');        
    $panel.slideDown("slow", function ()
    {
        setTimeout(drawData, 2000);        
    });
    
    var drawData = function ()
    {
        $panelContent.find(".loader").remove();
        var $info = $("<div>").appendTo($panelContent).html(
            '<div class="row">' +
            '    <div class="col1-2"><img class="thumbnail" src="img/macbook.png"></div>' +
            '    <div class="col1-2">' +
            '        <div class="label l">macOS High Sierra</div>' +
            '        <div class="label xs">Version 10.13.6</div>' +
            '        <div class="row">' +
            '            <div class="col1-2">' +
            '                <div class="label s gray">Memory</div>' +
            '                <div class="label xl">16 <span class="label l"> GB</span></div>' +
            '                <div class="label xs">1600 MHz DDR3</div>' +
            '            </div>' +
            '            <div class="col1-2">' +
            '                <div class="label s gray">Processor</div>' +
            '                <div class="label xl">2.3 <span class="label l"> GHz</span></div>' +
            '                <div class="label xs">Intel Core i7</div>' +
            '            </div>' +
            '        </div>' +
            '        <div class="label s gray">Graphics</div>' +
            '        <div class="label s">NVIDIA GeForce GT 750M 2048 MB<br>Intel Iris Pro 1536 MB</div>' +
            '    </div>' +
            '</div>' +

            '<h2>CPU</h2>' +
            '<div class="chart cpu" id="container"></div>' +

            '<h2>Memory</h2>' +
            '<div class="chart ram" id="container"></div>' +

            '<div class="row">' +
            '    <div class="col2-3">' +
            '        <h2>Storage</h2>' +
            '        <div class="label xl">98.54<span class="label l"> GB</span></div>' +
            '        <div class="label s">available of 500 GB</div>' +  
            '        <br><br>' +
            '        <div class="label m">Macintosh HD</div>' +
            '        <div class="progress">' +
            '            <span class="bar" style="width: 35%; background: #fdca42;"></span>' +
            '            <span class="bar" style="width: 17%; background: #ca7add;"></span>' +
            '            <span class="bar" style="width: 14%; background: #35aff2;"></span>' +
            '            <span class="bar" style="width: 8%; background: #f9346c;"></span>' +
            '            <span class="bar" style="width: 6%; background: #8e8e91;"></span>' +                                                     
            '        </div>' +
            '        <div class="row">' +
            '            <div class="col1-2">' +
            '                <div class="label s" style="color: #fdca42">35% System</div>' +
            '                <div class="label s" style="color: #ca7add">17% Documents</div>' +
            '                <div class="label s" style="color: #35aff2">14% Applications</div>' +
            '            </div>' +
            '            <div class="col1-2">' +
            '                <div class="label s" style="color: #f9346c"> 8% Multimedia</div>' +
            '                <div class="label s" style="color: #8e8e91"> 6% Trash</div>' +
            '                <div class="label s" style="color: #fff"><strong>20% Free Space</strong></div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '    <div class="col1-3">' +
            '        <h2>Battery</h2>' +
            '        <div class="label xl">73<span class="label l"> %</span></div>' +
            '        <div class="label s">Power Supply Unplugged</div>' +
            '        <div class="battery"><div class="status"></div></div>' +
            '    </div>' +                    
            '</div>');

            var drawLaptopDemoChart = function ($chart, lineColor, refreshingInterval)
            {
                var chart = null;
                var addRandomData = function ()
                {
                    chart.series[0].addPoint(Math.random() * 100, true, true);
                    if ($panel.find($chart).length > 0)
                        setTimeout(addRandomData, refreshingInterval);
                };
                var chartSettings = {
                    tooltip: { enabled: false },
                    credits: { enabled: false },    
                    legend: { enabled: false },
                    title: null,
                    plotOptions: 
                    {
                        column: 
                        {
                            dataLabels: { enabled: false }
                        },
                        areaspline: 
                        {
                            fillOpacity: 0.5
                        },
                        series: 
                        {
                            enableMouseTracking: false
                        }
                    },
                    chart: 
                    { 
                        type: "areaspline",
                        backgroundColor: null,
                        margin: [10, 10, 10, 50],
                        style: { fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif' },
                        events: 
                        {
                            load: function () 
                            {
                                chart = this;
                                addRandomData();                    
                            }
                        } 
                    },
                    xAxis: { 
                        visible: false
                    },
                    yAxis: [            
                        { 
                            title: { text: "" },
                            gridLineColor: "rgba(255,255,255,.1)", 
                            gridLineDashStyle: "ShortDash",
                            min: 0,
                            max: 100,
                            tickInterval: 25,
                            labels: 
                            {
                                format: "{value}%",
                                style: { color: "rgba(255,255,255,.2)" }
                            }                
                        }            
                    ],
                    series: [{
                        color: lineColor,
                        fillOpacity: .2,
                        marker: { enabled: false },
                        zIndex: 1,
                        data: (function () 
                        {
                            var data = [];
                            for (var i = 0; i < 50; i++) 
                                data.push(Math.random() * 100);
                            return data;
                        }())
                    }]
                };
                $chart.highcharts(chartSettings);
            }; 

            drawLaptopDemoChart($info.find(".chart.cpu"), "#03a9f4", 600);
            drawLaptopDemoChart($info.find(".chart.ram"), "#e91e63", 1200);   
    };        
};