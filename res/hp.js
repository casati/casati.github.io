// Theme toggle
(function ()
{
    const root = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    btn.addEventListener('click', function ()
    {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.classList.add('theme-switch');
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) { }
        setTimeout(function () { root.classList.remove('theme-switch'); }, 300);
    });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e)
    {
        try { if (!localStorage.getItem('theme')) root.setAttribute('data-theme', e.matches ? 'dark' : 'light'); } catch (e) { }
    });
})();

// i18n
var translations = {
    en: {
        'nav.about':      'About',
        'nav.skills':     'Skills',
        'nav.experience': 'Experience',
        'nav.contact':    'Contact',
        'hero.greeting':  "// Hello, I'm",
        'hero.role':      'Full-Stack Developer &amp; IT Consultant<br><strong>25+ years</strong> of digital experience<br><span class="hero-location">@ Milan, Italy</span>',
        'footer.vat':     '&copy; Copyright Matteo Casati &mdash; VAT no. IT 06568450966',
        'hero.cta':       'Explore ↓',
        'hero.scroll':    'scroll',
        'about.label':    '01. About',
        'about.text':     'I am an IT consultant with over <strong>25 years of experience</strong> in full-stack web application development. I oversee every aspect of a project: from requirements analysis to interface design, from architecture planning to the implementation of business logic and data access layers. I specialise in <strong>business process digitalisation</strong>, <strong>MES</strong> systems for industrial production management, and <strong>IoT &amp; Industry 4.0</strong> solutions for field data collection, analysis and valorisation.',
        'skills.label':   '02. Skills',
        'skills.h2':      'What I work with',
        's1.title':       'Frontend, Mobile &amp; UX',
        's1.desc':        'HTML5, CSS3, JavaScript, TypeScript, Vue, Angular, React, PWA, native and hybrid mobile apps — with a focus on UI design, usability, accessibility and mobile-first responsive design.',
        's2.title':       'Backend &amp; Cloud',
        's2.desc':        '.NET / .NET Core, C#, REST API, Docker, Kubernetes, AWS, Azure, Serverless, SOA — scalable on-premise and cloud architectures.',
        's3.title':       'Database &amp; Data',
        's3.desc':        'MySQL, MS SQL Server, NoSQL, ORM, data-centric architectures, integration and data exchange between heterogeneous platforms.',
        's4.title':       'IoT &amp; Industry 4.0',
        's4.desc':        'MES, data collection from sensors and PLCs, S7, MQTT, Modbus, OPC UA protocols, performance analysis and predictive maintenance.',
        's5.title':       'Method &amp; Process',
        's5.desc':        'Agile, Scrum, DevOps, project management, requirements analysis, problem solving, virtualisation and containerisation.',
        's6.title':       'AI &amp; Automation',
        's6.desc':        'LLMs, prompt engineering, AI-assisted development, integration of AI APIs (OpenAI, Anthropic) into applications, RAG pipelines, AI agents and automation of business processes with generative AI.',
        'exp.label':      '03. Experience',
        'exp.h2':         "What I've built",
        'e1.title':       'Business Digitalisation',
        'e1.desc':        'Analysis and development of tailored solutions for the digital transformation of internal business processes.',
        'e2.title':       'MES — Manufacturing Execution System',
        'e2.desc':        'Systems for real-time control and management of industrial production.',
        'e3.title':       'IoT &amp; Industry 4.0',
        'e3.desc':        'Data collection from sensors and PLCs, performance analysis, predictive maintenance algorithms to reduce downtime.',
        'e4.title':       'Integration Systems',
        'e4.desc':        'Data exchange architectures between heterogeneous systems: ERP, CRM, cloud platforms and legacy applications.',
        'e5.title':       'Web &amp; Mobile App',
        'e5.desc':        "Intranets, extranets, e-commerce, corporate websites, PWAs, native and hybrid apps built to the client's specific needs.",
        'e6.title':       'Training &amp; Publishing',
        'e6.desc':        'Lecturer in higher education and corporate training courses, with several editorial projects with publishers such as <a href="https://www.hoepli.it/" target="_blank" rel="noopener">Hoepli</a> and <a href="https://www.manning.com/" target="_blank" rel="noopener">Manning Publications</a>, as both author and technical reviewer.',
        'contact.label':  '04. Contact',
        'contact.h2':     'Get in touch',
        'contact.intro':  'Have a project in mind or just want to chat?',
        'footer.legal':   'All trademarks are the property of their respective owners. This site does not use profiling cookies.'
    },
    it: {
        'nav.about':      'Chi sono',
        'nav.skills':     'Competenze',
        'nav.experience': 'Esperienza',
        'nav.contact':    'Contatti',
        'hero.greeting':  '// Ciao, sono',
        'hero.role':      'Full-Stack Developer &amp; Consulente IT<br><strong>25+ anni</strong> di esperienza digitale<br><span class="hero-location">@ Milano</span>',
        'footer.vat':     '&copy; Copyright Matteo Casati &mdash; P. IVA: IT 06568450966',
        'hero.cta':       'Scopri ↓',
        'hero.scroll':    'scorri',
        'about.label':    '01. Chi sono',
        'about.text':     "Sono un consulente informatico con oltre <strong>25 anni di esperienza</strong> nello sviluppo full-stack di applicazioni web. Mi occupo di ogni aspetto del progetto: dall'analisi dei requisiti al design dell'interfaccia, dalla progettazione dell'architettura all'implementazione della logica di business e degli accessi ai dati. Sono specializzato nella <strong>digitalizzazione dei processi aziendali</strong>, nei sistemi <strong>MES</strong> per la gestione della produzione industriale e nelle soluzioni <strong>IoT &amp; Industria 4.0</strong> per la raccolta, l'analisi e la valorizzazione dei dati sul campo.",
        'skills.label':   '02. Competenze',
        'skills.h2':      'Con cosa lavoro',
        's1.title':       'Frontend, Mobile &amp; UX',
        's1.desc':        "HTML5, CSS3, JavaScript, TypeScript, Vue, Angular, React, PWA, app mobile native e ibride — con attenzione al design dell'interfaccia, usabilità, accessibilità e design responsive mobile-first.",
        's2.title':       'Backend &amp; Cloud',
        's2.desc':        '.NET / .NET Core, C#, REST API, Docker, Kubernetes, AWS, Azure, Serverless, SOA — architetture scalabili on-premise e cloud.',
        's3.title':       'Database &amp; Data',
        's3.desc':        'MySQL, MS SQL Server, NoSQL, ORM, architetture data-centric, integrazione e scambio dati tra piattaforme eterogenee.',
        's4.title':       'IoT &amp; Industry 4.0',
        's4.desc':        'MES, raccolta dati da sensori e PLC, protocolli S7, MQTT, Modbus, OPC UA, analisi delle performance e manutenzione predittiva.',
        's5.title':       'Metodo &amp; Processo',
        's5.desc':        'Agile, Scrum, DevOps, project management, analisi dei requisiti, problem solving, virtualizzazione e containerizzazione.',
        's6.title':       'AI &amp; Automazione',
        's6.desc':        'LLM, prompt engineering, sviluppo AI-assisted, integrazione di API AI (OpenAI, Anthropic) nelle applicazioni, pipeline RAG, agenti AI e automazione dei processi aziendali con AI generativa.',
        'exp.label':      '03. Esperienza',
        'exp.h2':         'Cosa ho realizzato',
        'e1.title':       'Digitalizzazione aziendale',
        'e1.desc':        'Analisi e sviluppo di soluzioni su misura per la trasformazione digitale dei processi aziendali interni.',
        'e2.title':       'MES — Manufacturing Execution System',
        'e2.desc':        'Sistemi per il controllo e la gestione in tempo reale della produzione industriale.',
        'e3.title':       'IoT &amp; Industry 4.0',
        'e3.desc':        'Raccolta dati da sensori e PLC, analisi delle performance, algoritmi di manutenzione predittiva per ridurre i fermi macchina.',
        'e4.title':       'Sistemi di integrazione',
        'e4.desc':        'Architetture di scambio dati tra sistemi eterogenei: ERP, CRM, piattaforme cloud e applicazioni legacy.',
        'e5.title':       'Web &amp; Mobile App',
        'e5.desc':        "Intranet, extranet, e-commerce, siti aziendali, PWA, app native e ibride realizzate sulle esigenze specifiche del cliente.",
        'e6.title':       'Formazione &amp; Editoria',
        'e6.desc':        'Docente in corsi di formazione superiore e aziendale, con diversi progetti editoriali con case editrici come <a href="https://www.hoepli.it/" target="_blank" rel="noopener">Hoepli</a> e <a href="https://www.manning.com/" target="_blank" rel="noopener">Manning Publications</a>, sia come autore che come revisore tecnico.',
        'contact.label':  '04. Contatti',
        'contact.h2':     'Contattami',
        'contact.intro':  'Hai un progetto in mente o vuoi semplicemente fare due chiacchiere?',
        'footer.legal':   'Tutti i marchi sono dei rispettivi proprietari. Questo sito non utilizza cookie di profilazione.'
    }
};

function setLang(lang)
{
    document.documentElement.lang = lang;
    document.title = lang === 'it'
        ? 'Matteo Casati — Full-Stack Developer & Consulente IT'
        : 'Matteo Casati — Full-Stack Developer & IT Consultant';
    document.querySelectorAll('[data-i18n]').forEach(function (el)
    {
        var key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
    });
    document.getElementById('lang-toggle').textContent = lang === 'en' ? 'IT' : 'EN';
    try { localStorage.setItem('lang', lang); } catch (e) { }
}

document.getElementById('lang-toggle').addEventListener('click', function ()
{
    setLang(document.documentElement.lang === 'en' ? 'it' : 'en');
});

(function ()
{
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) { }
    var preferred = saved || (navigator.language.toLowerCase().startsWith('it') ? 'it' : 'en');
    if (preferred !== 'en') setLang(preferred);
})();

// Nav glassmorphism
const nav = document.getElementById('nav');
window.addEventListener('scroll', () =>
{
    nav.classList.toggle('scrolled', scrollY > 60);
}, { passive: true });

// Scroll reveal
const obs = new IntersectionObserver(entries =>
{
    entries.forEach(e =>
    {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) =>
{
    el.style.transitionDelay = (i % 5) * 0.07 + 's';
    obs.observe(el);
});

// Hero particle network
(function ()
{
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const LINK = 160;
    let W, H, dots = [];

    function resize()
    {
        W = canvas.width = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }

    function Dot()
    {
        const a = Math.random() * Math.PI * 2;
        this.spd = 0.22 + Math.random() * 0.18;
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = Math.cos(a) * this.spd;
        this.vy = Math.sin(a) * this.spd;
        this.baseR = Math.random() * 1.2 + 1.1;
        this.phase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.5 + Math.random() * 0.9;
        const t = Math.random();
        this.rgb = [
            Math.round(232 + (245 - 232) * t),
            Math.round(25 + (85 - 25) * t),
            Math.round(63 + (32 - 63) * t),
        ];
    }
    Dot.prototype.update = function ()
    {
        this.vx += (Math.random() - 0.5) * 0.08;
        this.vy += (Math.random() - 0.5) * 0.08;
        const m = 55;
        if (this.x < m) this.vx += (m - this.x) / m * 0.4;
        if (this.x > W - m) this.vx -= (this.x - W + m) / m * 0.4;
        if (this.y < m) this.vy += (m - this.y) / m * 0.4;
        if (this.y > H - m) this.vy -= (this.y - H + m) / m * 0.4;
        const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (spd > 0.01) { this.vx = this.vx / spd * this.spd; this.vy = this.vy / spd * this.spd; }
        this.x += this.vx;
        this.y += this.vy;
        this.x = Math.max(1, Math.min(W - 1, this.x));
        this.y = Math.max(1, Math.min(H - 1, this.y));
    };
    Dot.prototype.draw = function (t)
    {
        const r = this.baseR * (1 + 0.32 * Math.sin(t * this.pulseSpeed + this.phase));
        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + this.rgb + ',0.68)';
        ctx.fill();
    };

    function init()
    {
        resize();
        const count = Math.min(80, Math.max(15, Math.round(W * H * 0.00007)));
        dots = [];
        for (let i = 0; i < count; i++) dots.push(new Dot());
    }

    function frame(ts)
    {
        const t = ts / 1000;
        ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < dots.length; i++) dots[i].update();
        for (let i = 0; i < dots.length; i++)
        {
            for (let j = i + 1; j < dots.length; j++)
            {
                const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < LINK)
                {
                    ctx.beginPath();
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(dots[j].x, dots[j].y);
                    ctx.strokeStyle = 'rgba(220,40,55,' + ((1 - d / LINK) * 0.6) + ')';
                    ctx.lineWidth = 0.9;
                    ctx.stroke();
                }
            }
        }
        for (let i = 0; i < dots.length; i++) dots[i].draw(t);
        requestAnimationFrame(frame);
    }

    window.addEventListener('resize', init);
    init();
    requestAnimationFrame(frame);
})();
