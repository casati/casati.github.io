// Emoji JavaScript Library by mcasati.com | v. 3.0 (02.2017) - see: http://emoji.codes/ for icons download and descriptions

var emoji = {};
var Emoji = emoji; // alias for old desktop version

emoji.baseIconUrl = "img/emoji/";

emoji.list = [
    
    // 1 - Smileys & People
    { unicode: "😀", id: "1f600", shortcuts: [":grinning:"], category: 1 }
    ,{ unicode: "😁", id: "1f601", shortcuts: [":|", ":grin:", ":-|"], category: 1 }
    ,{ unicode: "😂", id: "1f602", shortcuts: ["(lol)", ":joy:", ":-)))", ":)))"], category: 1 }
    ,{ unicode: "🤣", id: "1f923", shortcuts: ["(rotfl)", ":rofl:", ":rotfl"], category: 1 }
    ,{ unicode: "😃", id: "1f603", shortcuts: [":D", ":smiley:", ":lol", ":-D", ":-))", ":))"], category: 1 }
    ,{ unicode: "😄", id: "1f604", shortcuts: [":)", ":smile:", ":-)", ":smile"], category: 1 }
    ,{ unicode: "😅", id: "1f605", shortcuts: [":sweat_smile:", ":')"], category: 1 }
    ,{ unicode: "😆", id: "1f606", shortcuts: [":laughing:"], category: 1 }
    ,{ unicode: "😉", id: "1f609", shortcuts: [";)", ":wink:", ";-)"], category: 1 }
    ,{ unicode: "😊", id: "1f60a", shortcuts: [":blush:"], category: 1 }
    ,{ unicode: "😋", id: "1f60b", shortcuts: [":yum:"], category: 1 }
    ,{ unicode: "😎", id: "1f60e", shortcuts: ["8)", ":sunglasses:", "8-)", "(cool)"], category: 1 }
    ,{ unicode: "😍", id: "1f60d", shortcuts: [":]", ":heart_eyes:", ":-]", "%-)", ":bono", ":slurp"], category: 1 }
    ,{ unicode: "😘", id: "1f618", shortcuts: [":*", ":kissing_heart:", "(k)", ":-*"], category: 1 }
    ,{ unicode: "😗", id: "1f617", shortcuts: [":kissing:"], category: 1 }
    ,{ unicode: "😙", id: "1f619", shortcuts: [":kissing_smiling_eyes:"], category: 1 }
    ,{ unicode: "😚", id: "1f61a", shortcuts: [":-v", ":kissing_closed_eyes:"], category: 1 }
    ,{ unicode: "☺", id: "263a", shortcuts: [":relaxed:", ":shy", "$-)"], category: 1 }
    ,{ unicode: "🙂", id: "1f642", shortcuts: [":slight_smile:"], category: 1 }
    ,{ unicode: "🤗", id: "1f917", shortcuts: [":hugging:"], category: 1 }
    ,{ unicode: "🤔", id: "1f914", shortcuts: [":thinking:"], category: 1 }
    ,{ unicode: "😐", id: "1f610", shortcuts: ["-_-", ":neutral_face:"], category: 1 }
    ,{ unicode: "😑", id: "1f611", shortcuts: [":expressionless:"], category: 1 }
    ,{ unicode: "😶", id: "1f636", shortcuts: [":no_mouth:"], category: 1 }
    ,{ unicode: "🙄", id: "1f644", shortcuts: [":rolling_eyes:"], category: 1 }
    ,{ unicode: "😏", id: "1f60f", shortcuts: [":smirk:", "*-)", ":firuli"], category: 1 }
    ,{ unicode: "😣", id: "1f623", shortcuts: ["x(", ":persevere:", "x-("], category: 1 }
    ,{ unicode: "😥", id: "1f625", shortcuts: [":'(", ":disappointed_relieved:"], category: 1 }
    ,{ unicode: "😮", id: "1f62e", shortcuts: [":o", ":open_mouth:", ":-o"], category: 1 }
    ,{ unicode: "🤐", id: "1f910", shortcuts: [":zipper_mouth:"], category: 1 }
    ,{ unicode: "😯", id: "1f62f", shortcuts: [":hushed:"], category: 1 }
    ,{ unicode: "😪", id: "1f62a", shortcuts: [":sleepy:", ":'|"], category: 1 }
    ,{ unicode: "😫", id: "1f62b", shortcuts: [":tired_face:"], category: 1 }
    ,{ unicode: "😴", id: "1f634", shortcuts: [":sleeping:"], category: 1 }
    ,{ unicode: "😌", id: "1f60c", shortcuts: ["(fm)", ":relieved:", ":ehm", ":uhm"], category: 1 }
    ,{ unicode: "🤓", id: "1f913", shortcuts: [":nerd:"], category: 1 }
    ,{ unicode: "😛", id: "1f61b", shortcuts: [":stuck_out_tongue:"], category: 1 }
    ,{ unicode: "😜", id: "1f61c", shortcuts: [":P", ":stuck_out_tongue_winking_eye:", ":-p", ":sbav"], category: 1 }
    ,{ unicode: "😝", id: "1f61d", shortcuts: ["x-P", ":stuck_out_tongue_closed_eyes:", ":prr"], category: 1 }
    ,{ unicode: "🤤", id: "1f924", shortcuts: [":drooling_face:"], category: 1 }
    ,{ unicode: "😒", id: "1f612", shortcuts: ["|(", ":unamused:", "|-(", ":bah"], category: 1 }
    ,{ unicode: "😓", id: "1f613", shortcuts: ["')", ":sweat:", "'-)", ":fiu"], category: 1 }
    ,{ unicode: "😔", id: "1f614", shortcuts: [":(", ":pensive:", ":-("], category: 1 }
    ,{ unicode: "😕", id: "1f615", shortcuts: [":confused:"], category: 1 }
    ,{ unicode: "🙃", id: "1f643", shortcuts: [":upside_down:"], category: 1 }
    ,{ unicode: "🤑", id: "1f911", shortcuts: [":money_mouth:"], category: 1 }
    ,{ unicode: "😲", id: "1f632", shortcuts: [":doh", ":astonished:", "x-o"], category: 1 }
    ,{ unicode: "☹️", id: "2639", shortcuts: [":frowning2:"], category: 1 }
    ,{ unicode: "🙁", id: "1f641", shortcuts: [":slight_frown:"], category: 1 }
    ,{ unicode: "😖", id: "1f616", shortcuts: ["|z", ":confounded:", "|-z"], category: 1 }
    ,{ unicode: "😞", id: "1f61e", shortcuts: [":disappointed:"], category: 1 }
    ,{ unicode: "😟", id: "1f61f", shortcuts: [":worried:"], category: 1 }
    ,{ unicode: "😤", id: "1f624", shortcuts: [":triumph:"], category: 1 }
    ,{ unicode: "😢", id: "1f622", shortcuts: [":cry:", ":cry", ":'("], category: 1 }
    ,{ unicode: "😭", id: "1f62d", shortcuts: [";-(", ":sob:"], category: 1 }
    ,{ unicode: "😦", id: "1f626", shortcuts: [":frowning:"], category: 1 }
    ,{ unicode: "😧", id: "1f627", shortcuts: [":anguished:"], category: 1 }
    ,{ unicode: "😨", id: "1f628", shortcuts: [":fearful:"], category: 1 }
    ,{ unicode: "😩", id: "1f629", shortcuts: [":weary:", "^_^"], category: 1 }
    ,{ unicode: "😬", id: "1f62c", shortcuts: [":grimacing:"], category: 1 }
    ,{ unicode: "😰", id: "1f630", shortcuts: [":'o", ":cold_sweat:", ":puke"], category: 1 }
    ,{ unicode: "😱", id: "1f631", shortcuts: ["(boo)", ":scream:", ":azz", ":paura"], category: 1 }
    ,{ unicode: "😳", id: "1f633", shortcuts: ["8|", ":flushed:", "8-|", ":sbong"], category: 1 }
    ,{ unicode: "😵", id: "1f635", shortcuts: [":dizzy_face:"], category: 1 }
    ,{ unicode: "😡", id: "1f621", shortcuts: [":@", ":rage:", ":-@"], category: 1 }
    ,{ unicode: "😠", id: "1f620", shortcuts: [":angry:"], category: 1 }
    ,{ unicode: "😇", id: "1f607", shortcuts: [":innocent:"], category: 1 }
    ,{ unicode: "🤠", id: "1f920", shortcuts: [":cowboy:"], category: 1 }
    ,{ unicode: "🤡", id: "1f921", shortcuts: [":clown:"], category: 1 }
    ,{ unicode: "🤥", id: "1f925", shortcuts: [":lying_face:"], category: 1 }
    ,{ unicode: "😷", id: "1f637", shortcuts: [":#", ":mask:", ":-#", ":-x"], category: 1 }
    ,{ unicode: "🤒", id: "1f912", shortcuts: [":thermometer_face:"], category: 1 }
    ,{ unicode: "🤕", id: "1f915", shortcuts: [":head_bandage:"], category: 1 }
    ,{ unicode: "🤢", id: "1f922", shortcuts: [":nauseated_face:"], category: 1 }
    ,{ unicode: "🤧", id: "1f927", shortcuts: [":sneezing_face:"], category: 1 }
    ,{ unicode: "😈", id: "1f608", shortcuts: [":smiling_imp:"], category: 1 }
    ,{ unicode: "👿", id: "1f47f", shortcuts: ["(6)", ":imp:", ":devil", ":-w", "w:-)"], category: 1 }
    ,{ unicode: "👹", id: "1f479", shortcuts: [":japanese_ogre:"], category: 1 }
    ,{ unicode: "👺", id: "1f47a", shortcuts: [":japanese_goblin:"], category: 1 }
    ,{ unicode: "💀", id: "1f480", shortcuts: [":skull:"], category: 1 }
    ,{ unicode: "👻", id: "1f47b", shortcuts: [":ghost:"], category: 1 }
    ,{ unicode: "👽", id: "1f47d", shortcuts: [":alien:"], category: 1 }
    ,{ unicode: "🤖", id: "1f916", shortcuts: [":robot:"], category: 1 }
    ,{ unicode: "💩", id: "1f4a9", shortcuts: [":poop:", ":dirt", ":cacca"], category: 1 }
    ,{ unicode: "😺", id: "1f63a", shortcuts: [":smiley_cat:"], category: 1 }
    ,{ unicode: "😸", id: "1f638", shortcuts: [":smile_cat:"], category: 1 }
    ,{ unicode: "😹", id: "1f639", shortcuts: [":joy_cat:"], category: 1 }
    ,{ unicode: "😻", id: "1f63b", shortcuts: [":heart_eyes_cat:"], category: 1 }
    ,{ unicode: "😼", id: "1f63c", shortcuts: [":smirk_cat:"], category: 1 }
    ,{ unicode: "😽", id: "1f63d", shortcuts: [":kissing_cat:"], category: 1 }
    ,{ unicode: "🙀", id: "1f640", shortcuts: [":scream_cat:"], category: 1 }
    ,{ unicode: "😿", id: "1f63f", shortcuts: [":crying_cat_face:"], category: 1 }
    ,{ unicode: "😾", id: "1f63e", shortcuts: [":pouting_cat:"], category: 1 }
    ,{ unicode: "👦", id: "1f466", shortcuts: [":boy:"], category: 1 }
    ,{ unicode: "👧", id: "1f467", shortcuts: [":girl:"], category: 1 }
    ,{ unicode: "👨", id: "1f468", shortcuts: [":man:"], category: 1 }
    ,{ unicode: "👩", id: "1f469", shortcuts: [":woman:"], category: 1 }
    ,{ unicode: "👴", id: "1f474", shortcuts: [":older_man:"], category: 1 }
    ,{ unicode: "👵", id: "1f475", shortcuts: [":older_woman:"], category: 1 }
    ,{ unicode: "👶", id: "1f476", shortcuts: [":baby:"], category: 1 }
    ,{ unicode: "👼", id: "1f47c", shortcuts: ["o:)", ":angel:", "(a)", "o:-)"], category: 1 }
    ,{ unicode: "👮", id: "1f46e", shortcuts: [":cop:", ":policeman"], category: 1 }
    ,{ unicode: "🕵", id: "1f575", shortcuts: [":spy:"], category: 1 }
    ,{ unicode: "💂", id: "1f482", shortcuts: [":guardsman:"], category: 1 }
    ,{ unicode: "👷", id: "1f477", shortcuts: [":construction_worker:"], category: 1 }
    ,{ unicode: "👳", id: "1f473", shortcuts: [":man_with_turban:"], category: 1 }
    ,{ unicode: "👱", id: "1f471", shortcuts: [":person_with_blond_hair:"], category: 1 }
    ,{ unicode: "🎅", id: "1f385", shortcuts: [":santa:"], category: 1 }
    ,{ unicode: "🤶", id: "1f936", shortcuts: [":mrs_claus:"], category: 1 }
    ,{ unicode: "👸", id: "1f478", shortcuts: [":princess:"], category: 1 }
    ,{ unicode: "🤴", id: "1f934", shortcuts: [":prince:"], category: 1 }
    ,{ unicode: "👰", id: "1f470", shortcuts: [":bride_with_veil:"], category: 1 }
    ,{ unicode: "🤵", id: "1f935", shortcuts: [":man_in_tuxedo:"], category: 1 }
    ,{ unicode: "🤰", id: "1f930", shortcuts: [":pregnant_woman:"], category: 1 }
    ,{ unicode: "👲", id: "1f472", shortcuts: [":man_with_gua_pi_mao:"], category: 1 }
    ,{ unicode: "🙍", id: "1f64d", shortcuts: [":person_frowning:"], category: 1 }
    ,{ unicode: "🙎", id: "1f64e", shortcuts: [":person_with_pouting_face:"], category: 1 }
    ,{ unicode: "🙅", id: "1f645", shortcuts: [":no_good:"], category: 1 }
    ,{ unicode: "🙆", id: "1f646", shortcuts: [":ok_woman:"], category: 1 }
    ,{ unicode: "💁", id: "1f481", shortcuts: [":information_desk_person:"], category: 1 }
    ,{ unicode: "🙋", id: "1f64b", shortcuts: [":raising_hand:"], category: 1 }
    ,{ unicode: "🙇", id: "1f647", shortcuts: [":bow:"], category: 1 }
    ,{ unicode: "🤦‍♂️", id: "1f926", shortcuts: [":face_palm:"], category: 1 }
    ,{ unicode: "🤷‍♀️", id: "1f937", shortcuts: [":shrug:"], category: 1 }
    ,{ unicode: "💆", id: "1f486", shortcuts: [":massage:"], category: 1 }
    ,{ unicode: "💇", id: "1f487", shortcuts: [":haircut:"], category: 1 }
    ,{ unicode: "🚶", id: "1f6b6", shortcuts: [":walking:"], category: 1 }
    ,{ unicode: "🏃", id: "1f3c3", shortcuts: [":runner:"], category: 1 }
    ,{ unicode: "💃", id: "1f483", shortcuts: [":dancer:"], category: 1 }
    ,{ unicode: "🕺", id: "1f57a", shortcuts: [":man_dancing:"], category: 1 }
    ,{ unicode: "👯", id: "1f46f", shortcuts: [":dancers:"], category: 1 }
    ,{ unicode: "🗣", id: "1f5e3", shortcuts: [":speaking_head:"], category: 1 }
    ,{ unicode: "👤", id: "1f464", shortcuts: [":bust_in_silhouette:"], category: 1 }
    ,{ unicode: "👥", id: "1f465", shortcuts: [":busts_in_silhouette:"], category: 1 }
    ,{ unicode: "👫", id: "1f46b", shortcuts: [":couple:"], category: 1 }
    ,{ unicode: "👬", id: "1f46c", shortcuts: [":two_men_holding_hands:"], category: 1 }
    ,{ unicode: "👭", id: "1f46d", shortcuts: [":two_women_holding_hands:"], category: 1 }
    ,{ unicode: "💏", id: "1f48f", shortcuts: [":couplekiss:"], category: 1 }
    ,{ unicode: "👨‍❤️‍💋‍👨", id: "1f468-2764-1f48b-1f468", shortcuts: [":kiss_mm:"], category: 1 }
    ,{ unicode: "👩‍❤️‍💋‍👩", id: "1f469-2764-1f48b-1f469", shortcuts: [":kiss_ww:"], category: 1 }
    ,{ unicode: "💑", id: "1f491", shortcuts: [":couple_with_heart:"], category: 1 }
    ,{ unicode: "👨‍❤️‍👨", id: "1f468-2764-1f468", shortcuts: [":couple_mm:"], category: 1 }
    ,{ unicode: "👩‍❤️‍👩", id: "1f469-2764-1f469", shortcuts: [":couple_ww:"], category: 1 }
    ,{ unicode: "👪", id: "1f46a", shortcuts: [":family:"], category: 1 }
    ,{ unicode: "👨‍👩‍👧", id: "1f468-1f469-1f467", shortcuts: [":family_mwg:"], category: 1 }
    ,{ unicode: "👨‍👩‍👧‍👦", id: "1f468-1f469-1f467-1f466", shortcuts: [":family_mwgb:"], category: 1 }
    ,{ unicode: "👨‍👩‍👦‍👦", id: "1f468-1f469-1f466-1f466", shortcuts: [":family_mwbb:"], category: 1 }
    ,{ unicode: "👨‍👩‍👧‍👧", id: "1f468-1f469-1f467-1f467", shortcuts: [":family_mwgg:"], category: 1 }
    ,{ unicode: "👨‍👨‍👦", id: "1f468-1f468-1f466", shortcuts: [":family_mmb:"], category: 1 }
    ,{ unicode: "👨‍👨‍👧", id: "1f468-1f468-1f467", shortcuts: [":family_mmg:"], category: 1 }
    ,{ unicode: "👨‍👨‍👧‍👦", id: "1f468-1f468-1f467-1f466", shortcuts: [":family_mmgb:"], category: 1 }
    ,{ unicode: "👨‍👨‍👦‍👦", id: "1f468-1f468-1f466-1f466", shortcuts: [":family_mmbb:"], category: 1 }
    ,{ unicode: "👨‍👨‍👧‍👧", id: "1f468-1f468-1f467-1f467", shortcuts: [":family_mmgg:"], category: 1 }
    ,{ unicode: "👩‍👩‍👦", id: "1f469-1f469-1f466", shortcuts: [":family_wwb:"], category: 1 }
    ,{ unicode: "👩‍👩‍👧", id: "1f469-1f469-1f467", shortcuts: [":family_wwg:"], category: 1 }
    ,{ unicode: "👩‍👩‍👧‍👦", id: "1f469-1f469-1f467-1f466", shortcuts: [":family_wwgb:"], category: 1 }
    ,{ unicode: "👩‍👩‍👦‍👦", id: "1f469-1f469-1f466-1f466", shortcuts: [":family_wwbb:"], category: 1 }
    ,{ unicode: "👩‍👩‍👧‍👧", id: "1f469-1f469-1f467-1f467", shortcuts: [":family_wwgg:"], category: 1 }
    ,{ unicode: "💪", id: "1f4aa", shortcuts: [":muscle:"], category: 1 }
    ,{ unicode: "🤳", id: "1f933", shortcuts: [":selfie:"], category: 1 }
    ,{ unicode: "👈", id: "1f448", shortcuts: [":point_left:", ":left"], category: 1 }
    ,{ unicode: "👉", id: "1f449", shortcuts: [":point_right:", ":right"], category: 1 }
    ,{ unicode: "☝", id: "261d", shortcuts: [":point_up:"], category: 1 }
    ,{ unicode: "👆", id: "1f446", shortcuts: [":point_up_2:"], category: 1 }
    ,{ unicode: "🖕", id: "1f595", shortcuts: [":finger:", ":middle_finger:"], category: 1 }
    ,{ unicode: "👇", id: "1f447", shortcuts: [":point_down:"], category: 1 }
    ,{ unicode: "✌", id: "270c", shortcuts: [":v:", "(v)", ":winner"], category: 1 }
    ,{ unicode: "🤞", id: "1f91e", shortcuts: [":fingers_crossed:"], category: 1 }
    ,{ unicode: "🖖", id: "1f596", shortcuts: [":vulcan:"], category: 1 }
    ,{ unicode: "🤘", id: "1f918", shortcuts: [":metal:"], category: 1 }
    ,{ unicode: "🤙", id: "1f919", shortcuts: [":call_me:"], category: 1 }
    ,{ unicode: "🖐", id: "1f590", shortcuts: [":hand_splayed:"], category: 1 }
    ,{ unicode: "✋", id: "270b", shortcuts: [":raised_hand:", ":wait"], category: 1 }
    ,{ unicode: "👌", id: "1f44c", shortcuts: [":ok", ":ok_hand:", ":siii"], category: 1 }
    ,{ unicode: "👍", id: "1f44d", shortcuts: ["(y)", ":thumbsup:"], category: 1 }
    ,{ unicode: "👎", id: "1f44e", shortcuts: ["(n)", ":thumbsdown:", ":nono"], category: 1 }
    ,{ unicode: "✊", id: "270a", shortcuts: [":fist:"], category: 1 }
    ,{ unicode: "👊", id: "1f44a", shortcuts: [":punch:", "*-|", "*|"], category: 1 }
    ,{ unicode: "🤛", id: "1f91b", shortcuts: [":left_facing_fist:"], category: 1 }
    ,{ unicode: "🤜", id: "1f91c", shortcuts: [":right_facing_fist:"], category: 1 }
    ,{ unicode: "🤚", id: "1f91a", shortcuts: [":raised_back_of_hand:"], category: 1 }
    ,{ unicode: "👋", id: "1f44b", shortcuts: [":wave:", ":five", ":bye"], category: 1 }
    ,{ unicode: "👏", id: "1f44f", shortcuts: [":clap:"], category: 1 }
    ,{ unicode: "✍️", id: "270d", shortcuts: [":writing_hand:"], category: 1 }
    ,{ unicode: "👐", id: "1f450", shortcuts: [":open_hands:"], category: 1 }
    ,{ unicode: "🙌", id: "1f64c", shortcuts: [":raised_hands:"], category: 1 }
    ,{ unicode: "🙏", id: "1f64f", shortcuts: [":pray:"], category: 1 }
    ,{ unicode: "🤝", id: "1f91d", shortcuts: [":handshake:"], category: 1 }
    ,{ unicode: "💅", id: "1f485", shortcuts: [":nail_care:"], category: 1 }
    ,{ unicode: "👂", id: "1f442", shortcuts: [":ear:"], category: 1 }
    ,{ unicode: "👃", id: "1f443", shortcuts: [":nose:"], category: 1 }
    ,{ unicode: "👣", id: "1f463", shortcuts: [":footprints:"], category: 1 }
    ,{ unicode: "👀", id: "1f440", shortcuts: [":eyes:"], category: 1 }
    ,{ unicode: "👁", id: "1f441", shortcuts: [":eye:"], category: 1 }
    ,{ unicode: "👅", id: "1f445", shortcuts: [":tongue:"], category: 1 }
    ,{ unicode: "👄", id: "1f444", shortcuts: [":lips:", ":lips", ":mouth"], category: 1 }
    ,{ unicode: "💋", id: "1f48b", shortcuts: [":kiss:"], category: 1 }
    ,{ unicode: "💤", id: "1f4a4", shortcuts: [":zzz:", ":zzz"], category: 1 }
    ,{ unicode: "👓", id: "1f453", shortcuts: [":eyeglasses:"], category: 1 }
    ,{ unicode: "🕶", id: "1f576", shortcuts: [":dark_sunglasses:"], category: 1 }
    ,{ unicode: "👔", id: "1f454", shortcuts: [":necktie:"], category: 1 }
    ,{ unicode: "👕", id: "1f455", shortcuts: [":shirt:"], category: 1 }
    ,{ unicode: "👖", id: "1f456", shortcuts: [":jeans:"], category: 1 }
    ,{ unicode: "👗", id: "1f457", shortcuts: [":dress:"], category: 1 }
    ,{ unicode: "👘", id: "1f458", shortcuts: [":kimono:"], category: 1 }
    ,{ unicode: "👙", id: "1f459", shortcuts: [":bikini:"], category: 1 }
    ,{ unicode: "👚", id: "1f45a", shortcuts: [":womans_clothes:"], category: 1 }
    ,{ unicode: "👛", id: "1f45b", shortcuts: [":purse:"], category: 1 }
    ,{ unicode: "👜", id: "1f45c", shortcuts: [":handbag:"], category: 1 }
    ,{ unicode: "👝", id: "1f45d", shortcuts: [":pouch:"], category: 1 }
    ,{ unicode: "🎒", id: "1f392", shortcuts: [":school_satchel:"], category: 1 }
    ,{ unicode: "👞", id: "1f45e", shortcuts: [":mans_shoe:"], category: 1 }
    ,{ unicode: "👟", id: "1f45f", shortcuts: [":athletic_shoe:"], category: 1 }
    ,{ unicode: "👠", id: "1f460", shortcuts: [":high_heel:"], category: 1 }
    ,{ unicode: "👡", id: "1f461", shortcuts: [":sandal:"], category: 1 }
    ,{ unicode: "👢", id: "1f462", shortcuts: [":boot:"], category: 1 }
    ,{ unicode: "👑", id: "1f451", shortcuts: [":crown:", ":king", ":princi", "x:-)"], category: 1 }
    ,{ unicode: "👒", id: "1f452", shortcuts: [":womans_hat:"], category: 1 }
    ,{ unicode: "🎩", id: "1f3a9", shortcuts: [":tophat:"], category: 1 }
    ,{ unicode: "🎓", id: "1f393", shortcuts: [":mortar_board:"], category: 1 }
    ,{ unicode: "⛑", id: "26d1", shortcuts: [":helmet_with_cross:"], category: 1 }
    ,{ unicode: "💄", id: "1f484", shortcuts: [":lipstick:"], category: 1 }
    ,{ unicode: "💍", id: "1f48d", shortcuts: [":ring:"], category: 1 }
    ,{ unicode: "🌂", id: "1f302", shortcuts: [":closed_umbrella:"], category: 1 }
    ,{ unicode: "💼", id: "1f4bc", shortcuts: [":briefcase:"], category: 1 }
        
    // 2 - Nature & Animals
    ,{ unicode: "🙈", id: "1f648", shortcuts: [":see_no_evil:"], category: 2 }
    ,{ unicode: "🙉", id: "1f649", shortcuts: [":hear_no_evil:"], category: 2 }
    ,{ unicode: "🙊", id: "1f64a", shortcuts: [":speak_no_evil:"], category: 2 }
    ,{ unicode: "💦", id: "1f4a6", shortcuts: [":sweat_drops:"], category: 2 }
    ,{ unicode: "💨", id: "1f4a8", shortcuts: [":dash:", ":windy", ":prot"], category: 2 }
    ,{ unicode: "🐵", id: "1f435", shortcuts: [":monkey_face:"], category: 2 }
    ,{ unicode: "🐒", id: "1f412", shortcuts: [":monkey:"], category: 2 }
    ,{ unicode: "🦍", id: "1f98d", shortcuts: [":gorilla:"], category: 2 }
    ,{ unicode: "🐶", id: "1f436", shortcuts: [":dog:"], category: 2 }
    ,{ unicode: "🐕", id: "1f415", shortcuts: [":dog2:"], category: 2 }
    ,{ unicode: "🐩", id: "1f429", shortcuts: [":poodle:"], category: 2 }
    ,{ unicode: "🐺", id: "1f43a", shortcuts: [":wolf:"], category: 2 }
    ,{ unicode: "🦊", id: "1f98a", shortcuts: [":fox:"], category: 2 }
    ,{ unicode: "🐱", id: "1f431", shortcuts: [":cat:"], category: 2 }
    ,{ unicode: "🐈", id: "1f408", shortcuts: [":cat2:"], category: 2 }
    ,{ unicode: "🦁", id: "1f981", shortcuts: [":lion_face:"], category: 2 }
    ,{ unicode: "🐯", id: "1f42f", shortcuts: [":tiger:"], category: 2 }
    ,{ unicode: "🐅", id: "1f405", shortcuts: [":tiger2:"], category: 2 }
    ,{ unicode: "🐆", id: "1f406", shortcuts: [":leopard:"], category: 2 }
    ,{ unicode: "🐴", id: "1f434", shortcuts: [":horse:"], category: 2 }
    ,{ unicode: "🐎", id: "1f40e", shortcuts: [":racehorse:"], category: 2 }
    ,{ unicode: "🦌", id: "1f98c", shortcuts: [":deer:"], category: 2 }
    ,{ unicode: "🦄", id: "1f984", shortcuts: [":unicorn:"], category: 2 }
    ,{ unicode: "🐮", id: "1f42e", shortcuts: [":cow:"], category: 2 }
    ,{ unicode: "🐂", id: "1f402", shortcuts: [":ox:"], category: 2 }
    ,{ unicode: "🐃", id: "1f403", shortcuts: [":water_buffalo:"], category: 2 }
    ,{ unicode: "🐄", id: "1f404", shortcuts: [":cow2:"], category: 2 }
    ,{ unicode: "🐷", id: "1f437", shortcuts: [":pig:"], category: 2 }
    ,{ unicode: "🐖", id: "1f416", shortcuts: [":pig2:"], category: 2 }
    ,{ unicode: "🐗", id: "1f417", shortcuts: [":boar:"], category: 2 }
    ,{ unicode: "🐽", id: "1f43d", shortcuts: [":pig_nose:"], category: 2 }
    ,{ unicode: "🐏", id: "1f40f", shortcuts: [":ram:"], category: 2 }
    ,{ unicode: "🐑", id: "1f411", shortcuts: [":sheep:"], category: 2 }
    ,{ unicode: "🐐", id: "1f410", shortcuts: [":goat:"], category: 2 }
    ,{ unicode: "🐪", id: "1f42a", shortcuts: [":dromedary_camel:"], category: 2 }
    ,{ unicode: "🐫", id: "1f42b", shortcuts: [":camel:"], category: 2 }
    ,{ unicode: "🐘", id: "1f418", shortcuts: [":elephant:"], category: 2 }
    ,{ unicode: "🦏", id: "1f98f", shortcuts: [":rhino:"], category: 2 }
    ,{ unicode: "🐭", id: "1f42d", shortcuts: [":mouse:"], category: 2 }
    ,{ unicode: "🐁", id: "1f401", shortcuts: [":mouse2:"], category: 2 }
    ,{ unicode: "🐀", id: "1f400", shortcuts: [":rat:"], category: 2 }
    ,{ unicode: "🐹", id: "1f439", shortcuts: [":hamster:"], category: 2 }
    ,{ unicode: "🐰", id: "1f430", shortcuts: [":rabbit:"], category: 2 }
    ,{ unicode: "🐇", id: "1f407", shortcuts: [":rabbit2:"], category: 2 }
    ,{ unicode: "🐿", id: "1f43f", shortcuts: [":chipmunk:"], category: 2 }
    ,{ unicode: "🦇", id: "1f987", shortcuts: [":bat:"], category: 2 }
    ,{ unicode: "🐻", id: "1f43b", shortcuts: [":bear:"], category: 2 }
    ,{ unicode: "🐨", id: "1f428", shortcuts: [":koala:"], category: 2 }
    ,{ unicode: "🐼", id: "1f43c", shortcuts: [":panda_face:"], category: 2 }
    ,{ unicode: "🐾", id: "1f43e", shortcuts: [":feet:"], category: 2 }
    ,{ unicode: "🦃", id: "1f983", shortcuts: [":turkey:"], category: 2 }
    ,{ unicode: "🐔", id: "1f414", shortcuts: [":chicken:"], category: 2 }
    ,{ unicode: "🐓", id: "1f413", shortcuts: [":rooster:"], category: 2 }
    ,{ unicode: "🐣", id: "1f423", shortcuts: [":hatching_chick:"], category: 2 }
    ,{ unicode: "🐤", id: "1f424", shortcuts: [":baby_chick:"], category: 2 }
    ,{ unicode: "🐥", id: "1f425", shortcuts: [":hatched_chick:"], category: 2 }
    ,{ unicode: "🐦", id: "1f426", shortcuts: [":bird:"], category: 2 }
    ,{ unicode: "🐧", id: "1f427", shortcuts: [":penguin:"], category: 2 }
    ,{ unicode: "🕊", id: "1f54a", shortcuts: [":dove:"], category: 2 }
    ,{ unicode: "🦅", id: "1f985", shortcuts: [":eagle:"], category: 2 }
    ,{ unicode: "🦆", id: "1f986", shortcuts: [":duck:"], category: 2 }
    ,{ unicode: "🦉", id: "1f989", shortcuts: [":owl:"], category: 2 }
    ,{ unicode: "🐸", id: "1f438", shortcuts: [":frog:"], category: 2 }
    ,{ unicode: "🐊", id: "1f40a", shortcuts: [":crocodile:"], category: 2 }
    ,{ unicode: "🐢", id: "1f422", shortcuts: [":turtle:"], category: 2 }
    ,{ unicode: "🦎", id: "1f98e", shortcuts: [":lizard:"], category: 2 }
    ,{ unicode: "🐍", id: "1f40d", shortcuts: [":snake:"], category: 2 }
    ,{ unicode: "🐲", id: "1f432", shortcuts: [":dragon_face:"], category: 2 }
    ,{ unicode: "🐉", id: "1f409", shortcuts: [":dragon:"], category: 2 }
    ,{ unicode: "🐳", id: "1f433", shortcuts: [":whale:"], category: 2 }
    ,{ unicode: "🐋", id: "1f40b", shortcuts: [":whale2:"], category: 2 }
    ,{ unicode: "🐬", id: "1f42c", shortcuts: [":dolphin:"], category: 2 }
    ,{ unicode: "🐟", id: "1f41f", shortcuts: [":fish:"], category: 2 }
    ,{ unicode: "🐠", id: "1f420", shortcuts: [":tropical_fish:"], category: 2 }
    ,{ unicode: "🐡", id: "1f421", shortcuts: [":blowfish:"], category: 2 }
    ,{ unicode: "🦈", id: "1f988", shortcuts: [":shark:"], category: 2 }
    ,{ unicode: "🐙", id: "1f419", shortcuts: [":octopus:"], category: 2 }
    ,{ unicode: "🐚", id: "1f41a", shortcuts: [":shell:"], category: 2 }
    ,{ unicode: "🦀", id: "1f980", shortcuts: [":crab:"], category: 2 }
    ,{ unicode: "🦐", id: "1f990", shortcuts: [":shrimp:"], category: 2 }
    ,{ unicode: "🦑", id: "1f991", shortcuts: [":squid:"], category: 2 }
    ,{ unicode: "🦋", id: "1f98b", shortcuts: [":butterfly:"], category: 2 }
    ,{ unicode: "🐌", id: "1f40c", shortcuts: [":snail:"], category: 2 }
    ,{ unicode: "🐛", id: "1f41b", shortcuts: [":bug:"], category: 2 }
    ,{ unicode: "🐜", id: "1f41c", shortcuts: [":ant:"], category: 2 }
    ,{ unicode: "🐝", id: "1f41d", shortcuts: [":bee:"], category: 2 }
    ,{ unicode: "🐞", id: "1f41e", shortcuts: [":beetle:"], category: 2 }
    ,{ unicode: "🕷", id: "1f577", shortcuts: [":spider:"], category: 2 }
    ,{ unicode: "🕸", id: "1f578", shortcuts: [":spider_web:"], category: 2 }
    ,{ unicode: "🦂", id: "1f982", shortcuts: [":scorpion:"], category: 2 }
    ,{ unicode: "💐", id: "1f490", shortcuts: [":bouquet:"], category: 2 }
    ,{ unicode: "🌸", id: "1f338", shortcuts: [":cherry_blossom:"], category: 2 }
    ,{ unicode: "🏵", id: "1f3f5", shortcuts: [":rosette:"], category: 2 }
    ,{ unicode: "🌹", id: "1f339", shortcuts: [":rose:"], category: 2 }
    ,{ unicode: "🥀", id: "1f940", shortcuts: [":wilted_rose:"], category: 2 }
    ,{ unicode: "🌺", id: "1f33a", shortcuts: [":hibiscus:"], category: 2 }
    ,{ unicode: "🌻", id: "1f33b", shortcuts: [":sunflower:"], category: 2 }
    ,{ unicode: "🌼", id: "1f33c", shortcuts: [":blossom:"], category: 2 }
    ,{ unicode: "🌷", id: "1f337", shortcuts: [":tulip:"], category: 2 }
    ,{ unicode: "🌱", id: "1f331", shortcuts: [":seedling:"], category: 2 }
    ,{ unicode: "🌲", id: "1f332", shortcuts: [":evergreen_tree:"], category: 2 }
    ,{ unicode: "🌳", id: "1f333", shortcuts: [":deciduous_tree:"], category: 2 }
    ,{ unicode: "🌴", id: "1f334", shortcuts: [":palm_tree:"], category: 2 }
    ,{ unicode: "🌵", id: "1f335", shortcuts: [":cactus:"], category: 2 }
    ,{ unicode: "🌾", id: "1f33e", shortcuts: [":ear_of_rice:"], category: 2 }
    ,{ unicode: "🌿", id: "1f33f", shortcuts: [":herb:"], category: 2 }
    ,{ unicode: "☘️", id: "2618", shortcuts: [":shamrock:"], category: 2 }
    ,{ unicode: "🍀", id: "1f340", shortcuts: [":four_leaf_clover:"], category: 2 }
    ,{ unicode: "🍁", id: "1f341", shortcuts: [":maple_leaf:"], category: 2 }
    ,{ unicode: "🍂", id: "1f342", shortcuts: [":fallen_leaf:"], category: 2 }
    ,{ unicode: "🍃", id: "1f343", shortcuts: [":leaves:"], category: 2 }
    ,{ unicode: "🍄", id: "1f344", shortcuts: [":mushroom:"], category: 2 }
    ,{ unicode: "🌰", id: "1f330", shortcuts: [":chestnut:"], category: 2 }
    ,{ unicode: "🌍", id: "1f30d", shortcuts: [":earth_africa:"], category: 2 }
    ,{ unicode: "🌎", id: "1f30e", shortcuts: [":earth_americas:"], category: 2 }
    ,{ unicode: "🌏", id: "1f30f", shortcuts: [":earth_asia:"], category: 2 }
    ,{ unicode: "🌑", id: "1f311", shortcuts: [":new_moon:"], category: 2 }
    ,{ unicode: "🌒", id: "1f312", shortcuts: [":waxing_crescent_moon:"], category: 2 }
    ,{ unicode: "🌓", id: "1f313", shortcuts: [":first_quarter_moon:"], category: 2 }
    ,{ unicode: "🌔", id: "1f314", shortcuts: [":waxing_gibbous_moon:"], category: 2 }
    ,{ unicode: "🌕", id: "1f315", shortcuts: [":full_moon:"], category: 2 }
    ,{ unicode: "🌖", id: "1f316", shortcuts: [":waning_gibbous_moon:"], category: 2 }
    ,{ unicode: "🌗", id: "1f317", shortcuts: [":last_quarter_moon:"], category: 2 }
    ,{ unicode: "🌘", id: "1f318", shortcuts: [":waning_crescent_moon:"], category: 2 }
    ,{ unicode: "🌙", id: "1f319", shortcuts: ["(s)", ":crescent_moon:"], category: 2 }
    ,{ unicode: "🌚", id: "1f31a", shortcuts: [":new_moon_with_face:"], category: 2 }
    ,{ unicode: "🌛", id: "1f31b", shortcuts: [":first_quarter_moon_with_face:"], category: 2 }
    ,{ unicode: "🌜", id: "1f31c", shortcuts: [":last_quarter_moon_with_face:"], category: 2 }
    ,{ unicode: "☀", id: "2600", shortcuts: ["(#)", ":sunny:"], category: 2 }
    ,{ unicode: "🌝", id: "1f31d", shortcuts: [":full_moon_with_face:"], category: 2 }
    ,{ unicode: "🌞", id: "1f31e", shortcuts: [":sun_with_face:"], category: 2 }
    ,{ unicode: "⭐", id: "2b50", shortcuts: ["(*)", ":star:"], category: 2 }
    ,{ unicode: "🌟", id: "1f31f", shortcuts: [":star2:"], category: 2 }
    ,{ unicode: "☁", id: "2601", shortcuts: [":cloud:"], category: 2 }
    ,{ unicode: "⛅", id: "26c5", shortcuts: [":partly_sunny:"], category: 2 }
    ,{ unicode: "⛈", id: "26c8", shortcuts: [":thunder_cloud_rain:"], category: 2 }
    ,{ unicode: "🌤", id: "1f324", shortcuts: [":white_sun_small_cloud:"], category: 2 }
    ,{ unicode: "🌥", id: "1f325", shortcuts: [":white_sun_cloud:"], category: 2 }
    ,{ unicode: "🌦", id: "1f326", shortcuts: [":white_sun_rain_cloud:"], category: 2 }
    ,{ unicode: "🌧", id: "1f327", shortcuts: [":cloud_rain:"], category: 2 }
    ,{ unicode: "🌨", id: "1f328", shortcuts: [":cloud_snow:"], category: 2 }
    ,{ unicode: "🌩", id: "1f329", shortcuts: [":cloud_lightning:"], category: 2 }
    ,{ unicode: "🌪", id: "1f32a", shortcuts: [":cloud_tornado:"], category: 2 }
    ,{ unicode: "🌫", id: "1f32b", shortcuts: [":fog:"], category: 2 }
    ,{ unicode: "🌬", id: "1f32c", shortcuts: [":wind_blowing_face:"], category: 2 }
    ,{ unicode: "☂️", id: "2602", shortcuts: [":umbrella2:"], category: 2 }
    ,{ unicode: "☔", id: "2614", shortcuts: [":umbrella:"], category: 2 }
    ,{ unicode: "⚡", id: "26a1", shortcuts: [":zap:"], category: 2 }
    ,{ unicode: "❄", id: "2744", shortcuts: [":snowflake:"], category: 2 }
    ,{ unicode: "☃️", id: "2603", shortcuts: [":snowman2:"], category: 2 }
    ,{ unicode: "⛄", id: "26c4", shortcuts: [":snowman:"], category: 2 }
    ,{ unicode: "☄️", id: "2604", shortcuts: [":comet:"], category: 2 }
    ,{ unicode: "🔥", id: "1f525", shortcuts: [":fire:", ":flame"], category: 2 }
    ,{ unicode: "💧", id: "1f4a7", shortcuts: [":droplet:"], category: 2 }
    ,{ unicode: "🌊", id: "1f30a", shortcuts: [":ocean:"], category: 2 }
    ,{ unicode: "🎃", id: "1f383", shortcuts: [":jack_o_lantern:"], category: 2 }
    ,{ unicode: "🎄", id: "1f384", shortcuts: [":christmas_tree:"], category: 2 }
    ,{ unicode: "✨", id: "2728", shortcuts: [":sparkles:"], category: 2 }
    ,{ unicode: "🎋", id: "1f38b", shortcuts: [":tanabata_tree:"], category: 2 }
    ,{ unicode: "🎍", id: "1f38d", shortcuts: [":bamboo:"], category: 2 }
        
    // 3 - Food & Drink
    ,{ unicode: "🍇", id: "1f347", shortcuts: [":grapes:"], category: 3 }
    ,{ unicode: "🍈", id: "1f348", shortcuts: [":melon:"], category: 3 }
    ,{ unicode: "🍉", id: "1f349", shortcuts: [":watermelon:"], category: 3 }
    ,{ unicode: "🍊", id: "1f34a", shortcuts: [":tangerine:"], category: 3 }
    ,{ unicode: "🍋", id: "1f34b", shortcuts: [":lemon:"], category: 3 }
    ,{ unicode: "🍌", id: "1f34c", shortcuts: [":banana:"], category: 3 }
    ,{ unicode: "🍍", id: "1f34d", shortcuts: [":pineapple:"], category: 3 }
    ,{ unicode: "🍎", id: "1f34e", shortcuts: [":apple:"], category: 3 }
    ,{ unicode: "🍏", id: "1f34f", shortcuts: [":green_apple:"], category: 3 }
    ,{ unicode: "🍐", id: "1f350", shortcuts: [":pear:"], category: 3 }
    ,{ unicode: "🍑", id: "1f351", shortcuts: [":peach:"], category: 3 }
    ,{ unicode: "🍒", id: "1f352", shortcuts: [":cherries:"], category: 3 }
    ,{ unicode: "🍓", id: "1f353", shortcuts: [":strawberry:"], category: 3 }
    ,{ unicode: "🥝", id: "1f95d", shortcuts: [":kiwi:"], category: 3 }
    ,{ unicode: "🍅", id: "1f345", shortcuts: [":tomato:"], category: 3 }
    ,{ unicode: "🥑", id: "1f951", shortcuts: [":avocado:"], category: 3 }
    ,{ unicode: "🍆", id: "1f346", shortcuts: [":eggplant:"], category: 3 }
    ,{ unicode: "🥔", id: "1f954", shortcuts: [":potato:"], category: 3 }
    ,{ unicode: "🥕", id: "1f955", shortcuts: [":carrot:"], category: 3 }
    ,{ unicode: "🌽", id: "1f33d", shortcuts: [":corn:"], category: 3 }
    ,{ unicode: "🌶", id: "1f336", shortcuts: [":hot_pepper:"], category: 3 }
    ,{ unicode: "🥒", id: "1f952", shortcuts: [":cucumber:"], category: 3 }
    ,{ unicode: "🥜", id: "1f95c", shortcuts: [":peanuts:"], category: 3 }
    ,{ unicode: "🍞", id: "1f35e", shortcuts: [":bread:"], category: 3 }
    ,{ unicode: "🥐", id: "1f950", shortcuts: [":croissant:"], category: 3 }
    ,{ unicode: "🥖", id: "1f956", shortcuts: [":french_bread:"], category: 3 }
    ,{ unicode: "🥞", id: "1f95e", shortcuts: [":pancakes:"], category: 3 }
    ,{ unicode: "🧀", id: "1f9c0", shortcuts: [":cheese:"], category: 3 }
    ,{ unicode: "🍖", id: "1f356", shortcuts: [":meat_on_bone:"], category: 3 }
    ,{ unicode: "🍗", id: "1f357", shortcuts: [":poultry_leg:"], category: 3 }
    ,{ unicode: "🥓", id: "1f953", shortcuts: [":bacon:"], category: 3 }
    ,{ unicode: "🍔", id: "1f354", shortcuts: [":hamburger:"], category: 3 }
    ,{ unicode: "🍟", id: "1f35f", shortcuts: [":fries:"], category: 3 }
    ,{ unicode: "🍕", id: "1f355", shortcuts: [":pizza:"], category: 3 }
    ,{ unicode: "🌭", id: "1f32d", shortcuts: [":hotdog:"], category: 3 }
    ,{ unicode: "🌮", id: "1f32e", shortcuts: [":taco:"], category: 3 }
    ,{ unicode: "🌯", id: "1f32f", shortcuts: [":burrito:"], category: 3 }
    ,{ unicode: "🥙", id: "1f959", shortcuts: [":stuffed_flatbread:"], category: 3 }
    ,{ unicode: "🥚", id: "1f95a", shortcuts: [":egg:"], category: 3 }
    ,{ unicode: "🍳", id: "1f373", shortcuts: [":cooking:"], category: 3 }
    ,{ unicode: "🥘", id: "1f958", shortcuts: [":shallow_pan_of_food:"], category: 3 }
    ,{ unicode: "🍲", id: "1f372", shortcuts: [":stew:"], category: 3 }
    ,{ unicode: "🥗", id: "1f957", shortcuts: [":salad:"], category: 3 }
    ,{ unicode: "🍿", id: "1f37f", shortcuts: [":popcorn:"], category: 3 }
    ,{ unicode: "🍱", id: "1f371", shortcuts: [":bento:"], category: 3 }
    ,{ unicode: "🍘", id: "1f358", shortcuts: [":rice_cracker:"], category: 3 }
    ,{ unicode: "🍙", id: "1f359", shortcuts: [":rice_ball:"], category: 3 }
    ,{ unicode: "🍚", id: "1f35a", shortcuts: [":rice:"], category: 3 }
    ,{ unicode: "🍛", id: "1f35b", shortcuts: [":curry:"], category: 3 }
    ,{ unicode: "🍜", id: "1f35c", shortcuts: [":ramen:"], category: 3 }
    ,{ unicode: "🍝", id: "1f35d", shortcuts: [":spaghetti:"], category: 3 }
    ,{ unicode: "🍠", id: "1f360", shortcuts: [":sweet_potato:"], category: 3 }
    ,{ unicode: "🍢", id: "1f362", shortcuts: [":oden:"], category: 3 }
    ,{ unicode: "🍣", id: "1f363", shortcuts: [":sushi:"], category: 3 }
    ,{ unicode: "🍤", id: "1f364", shortcuts: [":fried_shrimp:"], category: 3 }
    ,{ unicode: "🍥", id: "1f365", shortcuts: [":fish_cake:"], category: 3 }
    ,{ unicode: "🍡", id: "1f361", shortcuts: [":dango:"], category: 3 }
    ,{ unicode: "🍦", id: "1f366", shortcuts: [":icecream:"], category: 3 }
    ,{ unicode: "🍧", id: "1f367", shortcuts: [":shaved_ice:"], category: 3 }
    ,{ unicode: "🍨", id: "1f368", shortcuts: [":ice_cream:"], category: 3 }
    ,{ unicode: "🍩", id: "1f369", shortcuts: [":doughnut:"], category: 3 }
    ,{ unicode: "🍪", id: "1f36a", shortcuts: [":cookie:"], category: 3 }
    ,{ unicode: "🎂", id: "1f382", shortcuts: [":birthday:"], category: 3 }
    ,{ unicode: "🍰", id: "1f370", shortcuts: [":cake:"], category: 3 }
    ,{ unicode: "🍫", id: "1f36b", shortcuts: [":chocolate_bar:"], category: 3 }
    ,{ unicode: "🍬", id: "1f36c", shortcuts: [":candy:"], category: 3 }
    ,{ unicode: "🍭", id: "1f36d", shortcuts: [":lollipop:"], category: 3 }
    ,{ unicode: "🍮", id: "1f36e", shortcuts: [":custard:"], category: 3 }
    ,{ unicode: "🍯", id: "1f36f", shortcuts: [":honey_pot:"], category: 3 }
    ,{ unicode: "🍼", id: "1f37c", shortcuts: [":baby_bottle:"], category: 3 }
    ,{ unicode: "🥛", id: "1f95b", shortcuts: [":milk:"], category: 3 }
    ,{ unicode: "☕", id: "2615", shortcuts: ["(c)", ":coffee:"], category: 3 }
    ,{ unicode: "🍵", id: "1f375", shortcuts: [":tea:"], category: 3 }
    ,{ unicode: "🍶", id: "1f376", shortcuts: [":sake:"], category: 3 }
    ,{ unicode: "🍾", id: "1f37e", shortcuts: [":champagne:"], category: 3 }
    ,{ unicode: "🍷", id: "1f377", shortcuts: [":wine_glass:"], category: 3 }
    ,{ unicode: "🍸", id: "1f378", shortcuts: ["(d)", ":cocktail:"], category: 3 }
    ,{ unicode: "🍹", id: "1f379", shortcuts: [":tropical_drink:"], category: 3 }
    ,{ unicode: "🍺", id: "1f37a", shortcuts: ["(b)", ":beer:"], category: 3 }
    ,{ unicode: "🍻", id: "1f37b", shortcuts: [":beers:"], category: 3 }
    ,{ unicode: "🥂", id: "1f942", shortcuts: [":champagne_glass:"], category: 3 }
    ,{ unicode: "🥃", id: "1f943", shortcuts: [":tumbler_glass:"], category: 3 }
    ,{ unicode: "🍽", id: "1f37d", shortcuts: [":fork_knife_plate:"], category: 3 }
    ,{ unicode: "🍴", id: "1f374", shortcuts: [":fork_and_knife:"], category: 3 }
    ,{ unicode: "🥄", id: "1f944", shortcuts: [":spoon:"], category: 3 }
    
    // 4 - Activity
    ,{ unicode: "👾", id: "1f47e", shortcuts: [":space_invader:"], category: 4 }
    ,{ unicode: "🕴", id: "1f574", shortcuts: [":levitate:"], category: 4 }
    ,{ unicode: "🤺", id: "1f93a", shortcuts: [":fencer:"], category: 4 }
    ,{ unicode: "🏇", id: "1f3c7", shortcuts: [":horse_racing:"], category: 4 }
    ,{ unicode: "⛷", id: "26f7", shortcuts: [":skier:"], category: 4 }
    ,{ unicode: "🏂", id: "1f3c2", shortcuts: [":snowboarder:"], category: 4 }
    ,{ unicode: "🏌️", id: "1f3cc", shortcuts: [":golfer:"], category: 4 }
    ,{ unicode: "🏄", id: "1f3c4", shortcuts: [":surfer:"], category: 4 }
    ,{ unicode: "🚣", id: "1f6a3", shortcuts: [":rowboat:"], category: 4 }
    ,{ unicode: "🏊", id: "1f3ca", shortcuts: [":swimmer:"], category: 4 }
    ,{ unicode: "⛹️", id: "26f9", shortcuts: [":basketball_player:"], category: 4 }
    ,{ unicode: "🏋️", id: "1f3cb", shortcuts: [":lifter:"], category: 4 }
    ,{ unicode: "🚴", id: "1f6b4", shortcuts: [":bicyclist:"], category: 4 }
    ,{ unicode: "🚵", id: "1f6b5", shortcuts: [":mountain_bicyclist:"], category: 4 }
    ,{ unicode: "🤸‍♂️", id: "1f938", shortcuts: [":cartwheel:"], category: 4 }
    ,{ unicode: "🤼‍♂️", id: "1f93c", shortcuts: [":wrestlers:"], category: 4 }
    ,{ unicode: "🤽‍♂️", id: "1f93d", shortcuts: [":water_polo:"], category: 4 }
    ,{ unicode: "🤾‍♂️", id: "1f93e", shortcuts: [":handball:"], category: 4 }
    ,{ unicode: "🤹‍♂️", id: "1f939", shortcuts: [":juggling:"], category: 4 }
    ,{ unicode: "🎪", id: "1f3aa", shortcuts: [":circus_tent:"], category: 4 }
    ,{ unicode: "🎭", id: "1f3ad", shortcuts: [":performing_arts:"], category: 4 }
    ,{ unicode: "🎨", id: "1f3a8", shortcuts: [":art:"], category: 4 }
    ,{ unicode: "🎰", id: "1f3b0", shortcuts: [":slot_machine:"], category: 4 }
    ,{ unicode: "🛀", id: "1f6c0", shortcuts: [":bath:"], category: 4 }
    ,{ unicode: "🎗", id: "1f397", shortcuts: [":reminder_ribbon:"], category: 4 }
    ,{ unicode: "🎟", id: "1f39f", shortcuts: [":tickets:"], category: 4 }
    ,{ unicode: "🎫", id: "1f3ab", shortcuts: [":ticket:"], category: 4 }
    ,{ unicode: "🎖", id: "1f396", shortcuts: [":military_medal:"], category: 4 }
    ,{ unicode: "🏆", id: "1f3c6", shortcuts: [":trophy:"], category: 4 }
    ,{ unicode: "🏅", id: "1f3c5", shortcuts: [":medal:"], category: 4 }
    ,{ unicode: "🥇", id: "1f947", shortcuts: [":first_place:"], category: 4 }
    ,{ unicode: "🥈", id: "1f948", shortcuts: [":second_place:"], category: 4 }
    ,{ unicode: "🥉", id: "1f949", shortcuts: [":third_place:"], category: 4 }
    ,{ unicode: "⚽", id: "26bd", shortcuts: ["(so)", ":soccer:"], category: 4 }
    ,{ unicode: "⚾", id: "26be", shortcuts: [":baseball:"], category: 4 }
    ,{ unicode: "🏀", id: "1f3c0", shortcuts: [":basketball:"], category: 4 }
    ,{ unicode: "🏐", id: "1f3d0", shortcuts: [":volleyball:"], category: 4 }
    ,{ unicode: "🏈", id: "1f3c8", shortcuts: [":football:"], category: 4 }
    ,{ unicode: "🏉", id: "1f3c9", shortcuts: [":rugby_football:"], category: 4 }
    ,{ unicode: "🎾", id: "1f3be", shortcuts: [":tennis:"], category: 4 }
    ,{ unicode: "🎱", id: "1f3b1", shortcuts: [":8ball:"], category: 4 }
    ,{ unicode: "🎳", id: "1f3b3", shortcuts: [":bowling:"], category: 4 }
    ,{ unicode: "🏏", id: "1f3cf", shortcuts: [":cricket:"], category: 4 }
    ,{ unicode: "🏑", id: "1f3d1", shortcuts: [":field_hockey:"], category: 4 }
    ,{ unicode: "🏒", id: "1f3d2", shortcuts: [":hockey:"], category: 4 }
    ,{ unicode: "🏓", id: "1f3d3", shortcuts: [":ping_pong:"], category: 4 }
    ,{ unicode: "🏸", id: "1f3f8", shortcuts: [":badminton:"], category: 4 }
    ,{ unicode: "🥊", id: "1f94a", shortcuts: [":boxing_glove:"], category: 4 }
    ,{ unicode: "🥋", id: "1f94b", shortcuts: [":martial_arts_uniform:"], category: 4 }
    ,{ unicode: "🥅", id: "1f945", shortcuts: [":goal:"], category: 4 }
    ,{ unicode: "🎯", id: "1f3af", shortcuts: [":dart:"], category: 4 }
    ,{ unicode: "⛳", id: "26f3", shortcuts: [":golf:"], category: 4 }
    ,{ unicode: "⛸", id: "26f8", shortcuts: [":ice_skate:"], category: 4 }
    ,{ unicode: "🎣", id: "1f3a3", shortcuts: [":fishing_pole_and_fish:"], category: 4 }
    ,{ unicode: "🎽", id: "1f3bd", shortcuts: [":running_shirt_with_sash:"], category: 4 }
    ,{ unicode: "🎿", id: "1f3bf", shortcuts: [":ski:"], category: 4 }
    ,{ unicode: "🎮", id: "1f3ae", shortcuts: [":video_game:"], category: 4 }
    ,{ unicode: "🎲", id: "1f3b2", shortcuts: [":game_die:"], category: 4 }
    ,{ unicode: "🎼", id: "1f3bc", shortcuts: [":musical_score:"], category: 4 }
    ,{ unicode: "🎤", id: "1f3a4", shortcuts: [":microphone:"], category: 4 }
    ,{ unicode: "🎧", id: "1f3a7", shortcuts: [":headphones:"], category: 4 }
    ,{ unicode: "🎷", id: "1f3b7", shortcuts: [":saxophone:"], category: 4 }
    ,{ unicode: "🎸", id: "1f3b8", shortcuts: [":guitar:"], category: 4 }
    ,{ unicode: "🎹", id: "1f3b9", shortcuts: [":musical_keyboard:"], category: 4 }
    ,{ unicode: "🎺", id: "1f3ba", shortcuts: [":trumpet:"], category: 4 }
    ,{ unicode: "🎻", id: "1f3bb", shortcuts: [":violin:"], category: 4 }
    ,{ unicode: "🥁", id: "1f941", shortcuts: [":drum:"], category: 4 }
    ,{ unicode: "🎬", id: "1f3ac", shortcuts: [":clapper:"], category: 4 }
    ,{ unicode: "🏹", id: "1f3f9", shortcuts: [":bow_and_arrow:"], category: 4 }
    
    // 5 - Travel & Places
    ,{ unicode: "🏎", id: "1f3ce", shortcuts: [":race_car:"], category: 5 }
    ,{ unicode: "🏍", id: "1f3cd", shortcuts: [":motorcycle:"], category: 5 }
    ,{ unicode: "🗾", id: "1f5fe", shortcuts: [":japan:"], category: 5 }
    ,{ unicode: "🏔", id: "1f3d4", shortcuts: [":mountain_snow:"], category: 5 }
    ,{ unicode: "⛰", id: "26f0", shortcuts: [":mountain:"], category: 5 }
    ,{ unicode: "🌋", id: "1f30b", shortcuts: [":volcano:"], category: 5 }
    ,{ unicode: "🗻", id: "1f5fb", shortcuts: [":mount_fuji:"], category: 5 }
    ,{ unicode: "🏕", id: "1f3d5", shortcuts: [":camping:"], category: 5 }
    ,{ unicode: "🏖", id: "1f3d6", shortcuts: [":beach:"], category: 5 }
    ,{ unicode: "🏜", id: "1f3dc", shortcuts: [":desert:"], category: 5 }
    ,{ unicode: "🏝", id: "1f3dd", shortcuts: [":island:"], category: 5 }
    ,{ unicode: "🏞", id: "1f3de", shortcuts: [":park:"], category: 5 }
    ,{ unicode: "🏟", id: "1f3df", shortcuts: [":stadium:"], category: 5 }
    ,{ unicode: "🏛", id: "1f3db", shortcuts: [":classical_building:"], category: 5 }
    ,{ unicode: "🏗", id: "1f3d7", shortcuts: [":construction_site:"], category: 5 }
    ,{ unicode: "🏘", id: "1f3d8", shortcuts: [":homes:"], category: 5 }
    ,{ unicode: "🏙", id: "1f3d9", shortcuts: [":cityscape:"], category: 5 }
    ,{ unicode: "🏚", id: "1f3da", shortcuts: [":house_abandoned:"], category: 5 }
    ,{ unicode: "🏠", id: "1f3e0", shortcuts: [":house:"], category: 5 }
    ,{ unicode: "🏡", id: "1f3e1", shortcuts: [":house_with_garden:"], category: 5 }
    ,{ unicode: "🏢", id: "1f3e2", shortcuts: [":office:"], category: 5 }
    ,{ unicode: "🏣", id: "1f3e3", shortcuts: [":post_office:"], category: 5 }
    ,{ unicode: "🏤", id: "1f3e4", shortcuts: [":european_post_office:"], category: 5 }
    ,{ unicode: "🏥", id: "1f3e5", shortcuts: [":hospital:"], category: 5 }
    ,{ unicode: "🏦", id: "1f3e6", shortcuts: [":bank:"], category: 5 }
    ,{ unicode: "🏨", id: "1f3e8", shortcuts: [":hotel:"], category: 5 }
    ,{ unicode: "🏩", id: "1f3e9", shortcuts: [":love_hotel:"], category: 5 }
    ,{ unicode: "🏪", id: "1f3ea", shortcuts: [":convenience_store:"], category: 5 }
    ,{ unicode: "🏫", id: "1f3eb", shortcuts: [":school:"], category: 5 }
    ,{ unicode: "🏬", id: "1f3ec", shortcuts: [":department_store:"], category: 5 }
    ,{ unicode: "🏭", id: "1f3ed", shortcuts: [":factory:"], category: 5 }
    ,{ unicode: "🏯", id: "1f3ef", shortcuts: [":japanese_castle:"], category: 5 }
    ,{ unicode: "🏰", id: "1f3f0", shortcuts: [":european_castle:"], category: 5 }
    ,{ unicode: "💒", id: "1f492", shortcuts: [":wedding:"], category: 5 }
    ,{ unicode: "🗼", id: "1f5fc", shortcuts: [":tokyo_tower:"], category: 5 }
    ,{ unicode: "🗽", id: "1f5fd", shortcuts: [":statue_of_liberty:"], category: 5 }
    ,{ unicode: "⛪", id: "26ea", shortcuts: [":church:"], category: 5 }
    ,{ unicode: "🕌", id: "1f54c", shortcuts: [":mosque:"], category: 5 }
    ,{ unicode: "🕍", id: "1f54d", shortcuts: [":synagogue:"], category: 5 }
    ,{ unicode: "⛩", id: "26e9", shortcuts: [":shinto_shrine:"], category: 5 }
    ,{ unicode: "🕋", id: "1f54b", shortcuts: [":kaaba:"], category: 5 }
    ,{ unicode: "⛲", id: "26f2", shortcuts: [":fountain:"], category: 5 }
    ,{ unicode: "⛺", id: "26fa", shortcuts: [":tent:"], category: 5 }
    ,{ unicode: "🌁", id: "1f301", shortcuts: [":foggy:"], category: 5 }
    ,{ unicode: "🌃", id: "1f303", shortcuts: [":night_with_stars:"], category: 5 }
    ,{ unicode: "🌄", id: "1f304", shortcuts: [":sunrise_over_mountains:"], category: 5 }
    ,{ unicode: "🌅", id: "1f305", shortcuts: [":sunrise:"], category: 5 }
    ,{ unicode: "🌆", id: "1f306", shortcuts: [":city_dusk:"], category: 5 }
    ,{ unicode: "🌇", id: "1f307", shortcuts: [":city_sunset:"], category: 5 }
    ,{ unicode: "🌉", id: "1f309", shortcuts: [":bridge_at_night:"], category: 5 }
    ,{ unicode: "🌌", id: "1f30c", shortcuts: [":milky_way:"], category: 5 }
    ,{ unicode: "🎠", id: "1f3a0", shortcuts: [":carousel_horse:"], category: 5 }
    ,{ unicode: "🎡", id: "1f3a1", shortcuts: [":ferris_wheel:"], category: 5 }
    ,{ unicode: "🎢", id: "1f3a2", shortcuts: [":roller_coaster:"], category: 5 }
    ,{ unicode: "🚂", id: "1f682", shortcuts: [":steam_locomotive:"], category: 5 }
    ,{ unicode: "🚃", id: "1f683", shortcuts: [":railway_car:"], category: 5 }
    ,{ unicode: "🚄", id: "1f684", shortcuts: [":bullettrain_side:"], category: 5 }
    ,{ unicode: "🚅", id: "1f685", shortcuts: [":bullettrain_front:"], category: 5 }
    ,{ unicode: "🚆", id: "1f686", shortcuts: [":train2:"], category: 5 }
    ,{ unicode: "🚇", id: "1f687", shortcuts: [":metro:"], category: 5 }
    ,{ unicode: "🚈", id: "1f688", shortcuts: [":light_rail:"], category: 5 }
    ,{ unicode: "🚉", id: "1f689", shortcuts: [":station:"], category: 5 }
    ,{ unicode: "🚊", id: "1f68a", shortcuts: [":tram:"], category: 5 }
    ,{ unicode: "🚝", id: "1f69d", shortcuts: [":monorail:"], category: 5 }
    ,{ unicode: "🚞", id: "1f69e", shortcuts: [":mountain_railway:"], category: 5 }
    ,{ unicode: "🚋", id: "1f68b", shortcuts: [":train:"], category: 5 }
    ,{ unicode: "🚌", id: "1f68c", shortcuts: [":bus:"], category: 5 }
    ,{ unicode: "🚍", id: "1f68d", shortcuts: [":oncoming_bus:"], category: 5 }
    ,{ unicode: "🚎", id: "1f68e", shortcuts: [":trolleybus:"], category: 5 }
    ,{ unicode: "🚐", id: "1f690", shortcuts: [":minibus:"], category: 5 }
    ,{ unicode: "🚑", id: "1f691", shortcuts: [":ambulance:"], category: 5 }
    ,{ unicode: "🚒", id: "1f692", shortcuts: [":fire_engine:"], category: 5 }
    ,{ unicode: "🚓", id: "1f693", shortcuts: [":police_car:"], category: 5 }
    ,{ unicode: "🚔", id: "1f694", shortcuts: [":oncoming_police_car:"], category: 5 }
    ,{ unicode: "🚕", id: "1f695", shortcuts: [":taxi:"], category: 5 }
    ,{ unicode: "🚖", id: "1f696", shortcuts: [":oncoming_taxi:"], category: 5 }
    ,{ unicode: "🚗", id: "1f697", shortcuts: [":red_car:"], category: 5 }
    ,{ unicode: "🚘", id: "1f698", shortcuts: [":oncoming_automobile:"], category: 5 }
    ,{ unicode: "🚙", id: "1f699", shortcuts: [":blue_car:"], category: 5 }
    ,{ unicode: "🚚", id: "1f69a", shortcuts: [":truck:"], category: 5 }
    ,{ unicode: "🚛", id: "1f69b", shortcuts: [":articulated_lorry:"], category: 5 }
    ,{ unicode: "🚜", id: "1f69c", shortcuts: [":tractor:"], category: 5 }
    ,{ unicode: "🚲", id: "1f6b2", shortcuts: [":bike:"], category: 5 }
    ,{ unicode: "🛴", id: "1f6f4", shortcuts: [":scooter:"], category: 5 }
    ,{ unicode: "🛵", id: "1f6f5", shortcuts: [":motor_scooter:"], category: 5 }
    ,{ unicode: "🚏", id: "1f68f", shortcuts: [":busstop:"], category: 5 }
    ,{ unicode: "🛣", id: "1f6e3", shortcuts: [":motorway:"], category: 5 }
    ,{ unicode: "🛤", id: "1f6e4", shortcuts: [":railway_track:"], category: 5 }
    ,{ unicode: "⛽", id: "26fd", shortcuts: [":fuelpump:"], category: 5 }
    ,{ unicode: "🚨", id: "1f6a8", shortcuts: [":rotating_light:"], category: 5 }
    ,{ unicode: "🚥", id: "1f6a5", shortcuts: [":traffic_light:"], category: 5 }
    ,{ unicode: "🚦", id: "1f6a6", shortcuts: [":vertical_traffic_light:"], category: 5 }
    ,{ unicode: "🚧", id: "1f6a7", shortcuts: [":construction:"], category: 5 }
    ,{ unicode: "⚓", id: "2693", shortcuts: [":anchor:"], category: 5 }
    ,{ unicode: "⛵", id: "26f5", shortcuts: [":sailboat:"], category: 5 }
    ,{ unicode: "🛶", id: "1f6f6", shortcuts: [":canoe:"], category: 5 }
    ,{ unicode: "🚤", id: "1f6a4", shortcuts: [":speedboat:"], category: 5 }
    ,{ unicode: "🛳", id: "1f6f3", shortcuts: [":cruise_ship:"], category: 5 }
    ,{ unicode: "⛴", id: "26f4", shortcuts: [":ferry:"], category: 5 }
    ,{ unicode: "🛥", id: "1f6e5", shortcuts: [":motorboat:"], category: 5 }
    ,{ unicode: "🚢", id: "1f6a2", shortcuts: [":ship:"], category: 5 }
    ,{ unicode: "✈", id: "2708", shortcuts: [":airplane:"], category: 5 }
    ,{ unicode: "🛩", id: "1f6e9", shortcuts: [":airplane_small:"], category: 5 }
    ,{ unicode: "🛫", id: "1f6eb", shortcuts: [":airplane_departure:"], category: 5 }
    ,{ unicode: "🛬", id: "1f6ec", shortcuts: [":airplane_arriving:"], category: 5 }
    ,{ unicode: "💺", id: "1f4ba", shortcuts: [":seat:"], category: 5 }
    ,{ unicode: "🚁", id: "1f681", shortcuts: [":helicopter:"], category: 5 }
    ,{ unicode: "🚟", id: "1f69f", shortcuts: [":suspension_railway:"], category: 5 }
    ,{ unicode: "🚠", id: "1f6a0", shortcuts: [":mountain_cableway:"], category: 5 }
    ,{ unicode: "🚡", id: "1f6a1", shortcuts: [":aerial_tramway:"], category: 5 }
    ,{ unicode: "🚀", id: "1f680", shortcuts: [":rocket:"], category: 5 }
    ,{ unicode: "🛰", id: "1f6f0", shortcuts: [":satellite_orbital:"], category: 5 }
    ,{ unicode: "🌠", id: "1f320", shortcuts: [":stars:"], category: 5 }
    ,{ unicode: "🌈", id: "1f308", shortcuts: [":rainbow:"], category: 5 }
    ,{ unicode: "🎆", id: "1f386", shortcuts: [":fireworks:"], category: 5 }
    ,{ unicode: "🎇", id: "1f387", shortcuts: [":sparkler:"], category: 5 }
    ,{ unicode: "🎑", id: "1f391", shortcuts: [":rice_scene:"], category: 5 }
    ,{ unicode: "🏁", id: "1f3c1", shortcuts: [":checkered_flag:"], category: 5 }
    
    // 6 - Objects
    ,{ unicode: "☠️", id: "2620", shortcuts: [":skull_crossbones:"], category: 6 }
    ,{ unicode: "💌", id: "1f48c", shortcuts: [":love_letter:"], category: 6 }
    ,{ unicode: "💣", id: "1f4a3", shortcuts: [":bomb:"], category: 6 }
    ,{ unicode: "🕳", id: "1f573", shortcuts: [":hole:"], category: 6 }
    ,{ unicode: "🛍", id: "1f6cd", shortcuts: [":shopping_bags:"], category: 6 }
    ,{ unicode: "📿", id: "1f4ff", shortcuts: [":prayer_beads:"], category: 6 }
    ,{ unicode: "💎", id: "1f48e", shortcuts: [":gem:"], category: 6 }
    ,{ unicode: "🔪", id: "1f52a", shortcuts: [":knife:"], category: 6 }
    ,{ unicode: "🏺", id: "1f3fa", shortcuts: [":amphora:"], category: 6 }
    ,{ unicode: "🗺", id: "1f5fa", shortcuts: [":map:"], category: 6 }
    ,{ unicode: "💈", id: "1f488", shortcuts: [":barber:"], category: 6 }
    ,{ unicode: "🖼", id: "1f5bc", shortcuts: [":frame_photo:"], category: 6 }
    ,{ unicode: "🛎", id: "1f6ce", shortcuts: [":bellhop:"], category: 6 }
    ,{ unicode: "🚪", id: "1f6aa", shortcuts: [":door:"], category: 6 }
    ,{ unicode: "🛌", id: "1f6cc", shortcuts: [":sleeping_accommodation:"], category: 6 }
    ,{ unicode: "🛏", id: "1f6cf", shortcuts: [":bed:"], category: 6 }
    ,{ unicode: "🛋", id: "1f6cb", shortcuts: [":couch:"], category: 6 }
    ,{ unicode: "🚽", id: "1f6bd", shortcuts: [":toilet:"], category: 6 }
    ,{ unicode: "🚿", id: "1f6bf", shortcuts: [":shower:"], category: 6 }
    ,{ unicode: "🛁", id: "1f6c1", shortcuts: [":bathtub:"], category: 6 }
    ,{ unicode: "⌛", id: "231b", shortcuts: [":hourglass:"], category: 6 }
    ,{ unicode: "⏳", id: "23f3", shortcuts: [":hourglass_flowing_sand:"], category: 6 }
    ,{ unicode: "⌚", id: "231a", shortcuts: [":watch:"], category: 6 }
    ,{ unicode: "⏰", id: "23f0", shortcuts: [":alarm_clock:"], category: 6 }
    ,{ unicode: "⏱", id: "23f1", shortcuts: [":stopwatch:"], category: 6 }
    ,{ unicode: "⏲", id: "23f2", shortcuts: [":timer:"], category: 6 }
    ,{ unicode: "🕰", id: "1f570", shortcuts: [":clock:"], category: 6 }
    ,{ unicode: "🌡", id: "1f321", shortcuts: [":thermometer:"], category: 6 }
    ,{ unicode: "⛱", id: "26f1", shortcuts: [":beach_umbrella:"], category: 6 }
    ,{ unicode: "🎈", id: "1f388", shortcuts: [":balloon:"], category: 6 }
    ,{ unicode: "🎉", id: "1f389", shortcuts: [":tada:"], category: 6 }
    ,{ unicode: "🎊", id: "1f38a", shortcuts: [":confetti_ball:"], category: 6 }
    ,{ unicode: "🎎", id: "1f38e", shortcuts: [":dolls:"], category: 6 }
    ,{ unicode: "🎏", id: "1f38f", shortcuts: [":flags:"], category: 6 }
    ,{ unicode: "🎐", id: "1f390", shortcuts: [":wind_chime:"], category: 6 }
    ,{ unicode: "🎀", id: "1f380", shortcuts: [":ribbon:"], category: 6 }
    ,{ unicode: "🎁", id: "1f381", shortcuts: [":gift:", "(g)"], category: 6 }
    ,{ unicode: "🕹", id: "1f579", shortcuts: [":joystick:"], category: 6 }
    ,{ unicode: "📯", id: "1f4ef", shortcuts: [":postal_horn:"], category: 6 }
    ,{ unicode: "🎙", id: "1f399", shortcuts: [":microphone2:"], category: 6 }
    ,{ unicode: "🎚", id: "1f39a", shortcuts: [":level_slider:"], category: 6 }
    ,{ unicode: "🎛", id: "1f39b", shortcuts: [":control_knobs:"], category: 6 }
    ,{ unicode: "📻", id: "1f4fb", shortcuts: [":radio:"], category: 6 }
    ,{ unicode: "📱", id: "1f4f1", shortcuts: [":iphone:"], category: 6 }
    ,{ unicode: "📲", id: "1f4f2", shortcuts: [":calling:"], category: 6 }
    ,{ unicode: "☎", id: "260e", shortcuts: [":telephone:"], category: 6 }
    ,{ unicode: "📞", id: "1f4de", shortcuts: [":telephone_receiver:"], category: 6 }
    ,{ unicode: "📟", id: "1f4df", shortcuts: [":pager:"], category: 6 }
    ,{ unicode: "📠", id: "1f4e0", shortcuts: [":fax:"], category: 6 }
    ,{ unicode: "🔋", id: "1f50b", shortcuts: [":battery:"], category: 6 }
    ,{ unicode: "🔌", id: "1f50c", shortcuts: [":electric_plug:"], category: 6 }
    ,{ unicode: "💻", id: "1f4bb", shortcuts: [":computer:"], category: 6 }
    ,{ unicode: "🖥", id: "1f5a5", shortcuts: [":desktop:"], category: 6 }
    ,{ unicode: "🖨", id: "1f5a8", shortcuts: [":printer:"], category: 6 }
    ,{ unicode: "⌨️", id: "2328", shortcuts: [":keyboard:"], category: 6 }
    ,{ unicode: "🖱", id: "1f5b1", shortcuts: [":mouse_three_button:"], category: 6 }
    ,{ unicode: "🖲", id: "1f5b2", shortcuts: [":trackball:"], category: 6 }
    ,{ unicode: "💽", id: "1f4bd", shortcuts: [":minidisc:"], category: 6 }
    ,{ unicode: "💾", id: "1f4be", shortcuts: [":floppy_disk:"], category: 6 }
    ,{ unicode: "💿", id: "1f4bf", shortcuts: [":cd:"], category: 6 }
    ,{ unicode: "📀", id: "1f4c0", shortcuts: [":dvd:"], category: 6 }
    ,{ unicode: "🎥", id: "1f3a5", shortcuts: [":movie_camera:"], category: 6 }
    ,{ unicode: "🎞", id: "1f39e", shortcuts: [":film_frames:"], category: 6 }
    ,{ unicode: "📽", id: "1f4fd", shortcuts: [":projector:"], category: 6 }
    ,{ unicode: "📺", id: "1f4fa", shortcuts: [":tv:"], category: 6 }
    ,{ unicode: "📷", id: "1f4f7", shortcuts: [":camera:"], category: 6 }
    ,{ unicode: "📸", id: "1f4f8", shortcuts: [":camera_with_flash:"], category: 6 }
    ,{ unicode: "📹", id: "1f4f9", shortcuts: [":video_camera:"], category: 6 }
    ,{ unicode: "📼", id: "1f4fc", shortcuts: [":vhs:"], category: 6 }
    ,{ unicode: "🔍", id: "1f50d", shortcuts: [":mag:"], category: 6 }
    ,{ unicode: "🔎", id: "1f50e", shortcuts: [":mag_right:"], category: 6 }
    ,{ unicode: "🔬", id: "1f52c", shortcuts: [":microscope:"], category: 6 }
    ,{ unicode: "🔭", id: "1f52d", shortcuts: [":telescope:"], category: 6 }
    ,{ unicode: "📡", id: "1f4e1", shortcuts: [":satellite:"], category: 6 }
    ,{ unicode: "🕯", id: "1f56f", shortcuts: [":candle:"], category: 6 }
    ,{ unicode: "💡", id: "1f4a1", shortcuts: [":bulb:", "(i)"], category: 6 }
    ,{ unicode: "🔦", id: "1f526", shortcuts: [":flashlight:"], category: 6 }
    ,{ unicode: "🏮", id: "1f3ee", shortcuts: [":izakaya_lantern:"], category: 6 }
    ,{ unicode: "📔", id: "1f4d4", shortcuts: [":notebook_with_decorative_cover:"], category: 6 }
    ,{ unicode: "📕", id: "1f4d5", shortcuts: [":closed_book:"], category: 6 }
    ,{ unicode: "📖", id: "1f4d6", shortcuts: [":book:"], category: 6 }
    ,{ unicode: "📗", id: "1f4d7", shortcuts: [":green_book:"], category: 6 }
    ,{ unicode: "📘", id: "1f4d8", shortcuts: [":blue_book:"], category: 6 }
    ,{ unicode: "📙", id: "1f4d9", shortcuts: [":orange_book:"], category: 6 }
    ,{ unicode: "📚", id: "1f4da", shortcuts: [":books:"], category: 6 }
    ,{ unicode: "📓", id: "1f4d3", shortcuts: [":notebook:"], category: 6 }
    ,{ unicode: "📒", id: "1f4d2", shortcuts: [":ledger:"], category: 6 }
    ,{ unicode: "📃", id: "1f4c3", shortcuts: [":page_with_curl:"], category: 6 }
    ,{ unicode: "📜", id: "1f4dc", shortcuts: [":scroll:"], category: 6 }
    ,{ unicode: "📄", id: "1f4c4", shortcuts: [":page_facing_up:"], category: 6 }
    ,{ unicode: "📰", id: "1f4f0", shortcuts: [":newspaper:"], category: 6 }
    ,{ unicode: "🗞", id: "1f5de", shortcuts: [":newspaper2:"], category: 6 }
    ,{ unicode: "📑", id: "1f4d1", shortcuts: [":bookmark_tabs:"], category: 6 }
    ,{ unicode: "🔖", id: "1f516", shortcuts: [":bookmark:"], category: 6 }
    ,{ unicode: "🏷", id: "1f3f7", shortcuts: [":label:"], category: 6 }
    ,{ unicode: "💰", id: "1f4b0", shortcuts: [":moneybag:"], category: 6 }
    ,{ unicode: "💴", id: "1f4b4", shortcuts: [":yen:"], category: 6 }
    ,{ unicode: "💵", id: "1f4b5", shortcuts: [":dollar:"], category: 6 }
    ,{ unicode: "💶", id: "1f4b6", shortcuts: [":euro:"], category: 6 }
    ,{ unicode: "💷", id: "1f4b7", shortcuts: [":pound:"], category: 6 }
    ,{ unicode: "💸", id: "1f4b8", shortcuts: [":money_with_wings:"], category: 6 }
    ,{ unicode: "💳", id: "1f4b3", shortcuts: [":credit_card:"], category: 6 }
    ,{ unicode: "✉", id: "2709", shortcuts: [":envelope:", "(e)"], category: 6 }
    ,{ unicode: "📧", id: "1f4e7", shortcuts: [":e-mail:"], category: 6 }
    ,{ unicode: "📨", id: "1f4e8", shortcuts: [":incoming_envelope:"], category: 6 }
    ,{ unicode: "📩", id: "1f4e9", shortcuts: [":envelope_with_arrow:"], category: 6 }
    ,{ unicode: "📤", id: "1f4e4", shortcuts: [":outbox_tray:"], category: 6 }
    ,{ unicode: "📥", id: "1f4e5", shortcuts: [":inbox_tray:"], category: 6 }
    ,{ unicode: "📦", id: "1f4e6", shortcuts: [":package:"], category: 6 }
    ,{ unicode: "📫", id: "1f4eb", shortcuts: [":mailbox:"], category: 6 }
    ,{ unicode: "📪", id: "1f4ea", shortcuts: [":mailbox_closed:"], category: 6 }
    ,{ unicode: "📬", id: "1f4ec", shortcuts: [":mailbox_with_mail:"], category: 6 }
    ,{ unicode: "📭", id: "1f4ed", shortcuts: [":mailbox_with_no_mail:"], category: 6 }
    ,{ unicode: "📮", id: "1f4ee", shortcuts: [":postbox:"], category: 6 }
    ,{ unicode: "🗳", id: "1f5f3", shortcuts: [":ballot_box:"], category: 6 }
    ,{ unicode: "✏", id: "270f", shortcuts: [":pencil2:"], category: 6 }
    ,{ unicode: "✒", id: "2712", shortcuts: [":black_nib:"], category: 6 }
    ,{ unicode: "🖋", id: "1f58b", shortcuts: [":pen_fountain:"], category: 6 }
    ,{ unicode: "🖊", id: "1f58a", shortcuts: [":pen_ballpoint:"], category: 6 }
    ,{ unicode: "🖌", id: "1f58c", shortcuts: [":paintbrush:"], category: 6 }
    ,{ unicode: "🖍", id: "1f58d", shortcuts: [":crayon:"], category: 6 }
    ,{ unicode: "📝", id: "1f4dd", shortcuts: [":pencil:"], category: 6 }
    ,{ unicode: "📁", id: "1f4c1", shortcuts: [":file_folder:"], category: 6 }
    ,{ unicode: "📂", id: "1f4c2", shortcuts: [":open_file_folder:"], category: 6 }
    ,{ unicode: "🗂", id: "1f5c2", shortcuts: [":dividers:"], category: 6 }
    ,{ unicode: "📅", id: "1f4c5", shortcuts: [":date:"], category: 6 }
    ,{ unicode: "📆", id: "1f4c6", shortcuts: [":calendar:"], category: 6 }
    ,{ unicode: "🗒", id: "1f5d2", shortcuts: [":notepad_spiral:"], category: 6 }
    ,{ unicode: "🗓", id: "1f5d3", shortcuts: [":calendar_spiral:"], category: 6 }
    ,{ unicode: "📇", id: "1f4c7", shortcuts: [":card_index:"], category: 6 }
    ,{ unicode: "📈", id: "1f4c8", shortcuts: [":chart_with_upwards_trend:"], category: 6 }
    ,{ unicode: "📉", id: "1f4c9", shortcuts: [":chart_with_downwards_trend:"], category: 6 }
    ,{ unicode: "📊", id: "1f4ca", shortcuts: [":bar_chart:"], category: 6 }
    ,{ unicode: "📋", id: "1f4cb", shortcuts: [":clipboard:"], category: 6 }
    ,{ unicode: "📌", id: "1f4cc", shortcuts: [":pushpin:"], category: 6 }
    ,{ unicode: "📍", id: "1f4cd", shortcuts: [":round_pushpin:"], category: 6 }
    ,{ unicode: "📎", id: "1f4ce", shortcuts: [":paperclip:"], category: 6 }
    ,{ unicode: "🖇", id: "1f587", shortcuts: [":paperclips:"], category: 6 }
    ,{ unicode: "📏", id: "1f4cf", shortcuts: [":straight_ruler:"], category: 6 }
    ,{ unicode: "📐", id: "1f4d0", shortcuts: [":triangular_ruler:"], category: 6 }
    ,{ unicode: "✂", id: "2702", shortcuts: [":scissors:"], category: 6 }
    ,{ unicode: "🗃", id: "1f5c3", shortcuts: [":card_box:"], category: 6 }
    ,{ unicode: "🗄", id: "1f5c4", shortcuts: [":file_cabinet:"], category: 6 }
    ,{ unicode: "🗑", id: "1f5d1", shortcuts: [":wastebasket:"], category: 6 }
    ,{ unicode: "🔒", id: "1f512", shortcuts: [":lock:"], category: 6 }
    ,{ unicode: "🔓", id: "1f513", shortcuts: [":unlock:"], category: 6 }
    ,{ unicode: "🔏", id: "1f50f", shortcuts: [":lock_with_ink_pen:"], category: 6 }
    ,{ unicode: "🔐", id: "1f510", shortcuts: [":closed_lock_with_key:"], category: 6 }
    ,{ unicode: "🔑", id: "1f511", shortcuts: [":key:"], category: 6 }
    ,{ unicode: "🗝", id: "1f5dd", shortcuts: [":key2:"], category: 6 }
    ,{ unicode: "🔨", id: "1f528", shortcuts: [":hammer:"], category: 6 }
    ,{ unicode: "⛏", id: "26cf", shortcuts: [":pick:"], category: 6 }
    ,{ unicode: "⚒", id: "2692", shortcuts: [":hammer_pick:"], category: 6 }
    ,{ unicode: "🛠", id: "1f6e0", shortcuts: [":tools:"], category: 6 }
    ,{ unicode: "🗡", id: "1f5e1", shortcuts: [":dagger:"], category: 6 }
    ,{ unicode: "⚔️", id: "2694", shortcuts: [":crossed_swords:"], category: 6 }
    ,{ unicode: "🔫", id: "1f52b", shortcuts: [":gun:"], category: 6 }
    ,{ unicode: "🛡", id: "1f6e1", shortcuts: [":shield:"], category: 6 }
    ,{ unicode: "🔧", id: "1f527", shortcuts: [":wrench:"], category: 6 }
    ,{ unicode: "🔩", id: "1f529", shortcuts: [":nut_and_bolt:"], category: 6 }
    ,{ unicode: "⚙️", id: "2699", shortcuts: [":gear:"], category: 6 }
    ,{ unicode: "🗜", id: "1f5dc", shortcuts: [":compression:"], category: 6 }
    ,{ unicode: "⚗️", id: "2697", shortcuts: [":alembic:"], category: 6 }
    ,{ unicode: "⚖️", id: "2696", shortcuts: [":scales:"], category: 6 }
    ,{ unicode: "🔗", id: "1f517", shortcuts: [":link:"], category: 6 }
    ,{ unicode: "⛓", id: "26d3", shortcuts: [":chains:"], category: 6 }
    ,{ unicode: "💉", id: "1f489", shortcuts: [":syringe:"], category: 6 }
    ,{ unicode: "💊", id: "1f48a", shortcuts: [":pill:"], category: 6 }
    ,{ unicode: "🚬", id: "1f6ac", shortcuts: [":smoking:", "(ci)"], category: 6 }
    ,{ unicode: "⚰️", id: "26b0", shortcuts: [":coffin:"], category: 6 }
    ,{ unicode: "⚱️", id: "26b1", shortcuts: [":urn:"], category: 6 }
    ,{ unicode: "🗿", id: "1f5ff", shortcuts: [":moyai:"], category: 6 }
    ,{ unicode: "🛢", id: "1f6e2", shortcuts: [":oil:"], category: 6 }
    ,{ unicode: "🔮", id: "1f52e", shortcuts: [":crystal_ball:"], category: 6 }
    ,{ unicode: "🛒", id: "1f6d2", shortcuts: [":shopping_cart:"], category: 6 }
    ,{ unicode: "🚩", id: "1f6a9", shortcuts: [":triangular_flag_on_post:"], category: 6 }
    ,{ unicode: "🎌", id: "1f38c", shortcuts: [":crossed_flags:"], category: 6 }
    ,{ unicode: "🏴", id: "1f3f4", shortcuts: [":flag_black:"], category: 6 }
    ,{ unicode: "🏳", id: "1f3f3", shortcuts: [":flag_white:"], category: 6 }
    ,{ unicode: "🏳️‍🌈", id: "1f3f3-1f308", shortcuts: [":rainbow_flag:"], category: 6 }
    
    // 7 - Symbols
    ,{ unicode: "👁‍🗨", id: "1f441-1f5e8", shortcuts: [":eye_in_speech_bubble:"], category: 7 }
    ,{ unicode: "💘", id: "1f498", shortcuts: [":cupid:"], category: 7 }
    ,{ unicode: "❤", id: "2764", shortcuts: ["(L)", ":heart:", "&lt;3", "<3", ":love", ":cuore"], category: 7 }
    ,{ unicode: "💓", id: "1f493", shortcuts: [":heartbeat:"], category: 7 }
    ,{ unicode: "💔", id: "1f494", shortcuts: ["(U)", ":broken_heart:"], category: 7 }
    ,{ unicode: "💕", id: "1f495", shortcuts: [":two_hearts:"], category: 7 }
    ,{ unicode: "💖", id: "1f496", shortcuts: ["(L*)", ":sparkling_heart:"], category: 7 }
    ,{ unicode: "💗", id: "1f497", shortcuts: [":heartpulse:"], category: 7 }
    ,{ unicode: "💙", id: "1f499", shortcuts: [":blue_heart:"], category: 7 }
    ,{ unicode: "💚", id: "1f49a", shortcuts: [":green_heart:"], category: 7 }
    ,{ unicode: "💛", id: "1f49b", shortcuts: [":yellow_heart:"], category: 7 }
    ,{ unicode: "💜", id: "1f49c", shortcuts: [":purple_heart:"], category: 7 }
    ,{ unicode: "🖤", id: "1f5a4", shortcuts: [":black_heart:"], category: 7 }
    ,{ unicode: "💝", id: "1f49d", shortcuts: [":gift_heart:"], category: 7 }
    ,{ unicode: "💞", id: "1f49e", shortcuts: [":revolving_hearts:"], category: 7 }
    ,{ unicode: "💟", id: "1f49f", shortcuts: [":heart_decoration:"], category: 7 }
    ,{ unicode: "❣️", id: "2763", shortcuts: [":heart_exclamation:"], category: 7 }
    ,{ unicode: "💢", id: "1f4a2", shortcuts: [":anger:"], category: 7 }
    ,{ unicode: "💥", id: "1f4a5", shortcuts: [":boom:"], category: 7 }
    ,{ unicode: "💫", id: "1f4ab", shortcuts: [":dizzy:"], category: 7 }
    ,{ unicode: "💬", id: "1f4ac", shortcuts: [":speech_balloon:"], category: 7 }
    ,{ unicode: "🗨", id: "1f5e8", shortcuts: [":speech_left:"], category: 7 }
    ,{ unicode: "🗯", id: "1f5ef", shortcuts: [":anger_right:"], category: 7 }
    ,{ unicode: "💭", id: "1f4ad", shortcuts: [":thought_balloon:"], category: 7 }
    ,{ unicode: "💮", id: "1f4ae", shortcuts: [":white_flower:"], category: 7 }
    ,{ unicode: "🌐", id: "1f310", shortcuts: [":globe_with_meridians:"], category: 7 }
    ,{ unicode: "♨", id: "2668", shortcuts: [":hotsprings:"], category: 7 }
    ,{ unicode: "🛑", id: "1f6d1", shortcuts: [":octagonal_sign:"], category: 7 }
    ,{ unicode: "🕛", id: "1f55b", shortcuts: [":clock12:"], category: 7 }
    ,{ unicode: "🕧", id: "1f567", shortcuts: [":clock1230:"], category: 7 }
    ,{ unicode: "🕐", id: "1f550", shortcuts: [":clock1:"], category: 7 }
    ,{ unicode: "🕜", id: "1f55c", shortcuts: [":clock130:"], category: 7 }
    ,{ unicode: "🕑", id: "1f551", shortcuts: [":clock2:"], category: 7 }
    ,{ unicode: "🕝", id: "1f55d", shortcuts: [":clock230:"], category: 7 }
    ,{ unicode: "🕒", id: "1f552", shortcuts: [":clock3:"], category: 7 }
    ,{ unicode: "🕞", id: "1f55e", shortcuts: [":clock330:"], category: 7 }
    ,{ unicode: "🕓", id: "1f553", shortcuts: [":clock4:"], category: 7 }
    ,{ unicode: "🕟", id: "1f55f", shortcuts: [":clock430:"], category: 7 }
    ,{ unicode: "🕔", id: "1f554", shortcuts: [":clock5:"], category: 7 }
    ,{ unicode: "🕠", id: "1f560", shortcuts: [":clock530:"], category: 7 }
    ,{ unicode: "🕕", id: "1f555", shortcuts: [":clock6:"], category: 7 }
    ,{ unicode: "🕖", id: "1f556", shortcuts: [":clock7:"], category: 7 }
    ,{ unicode: "🕗", id: "1f557", shortcuts: [":clock8:"], category: 7 }
    ,{ unicode: "🕘", id: "1f558", shortcuts: [":clock9:"], category: 7 }
    ,{ unicode: "🕙", id: "1f559", shortcuts: [":clock10:"], category: 7 }
    ,{ unicode: "🕚", id: "1f55a", shortcuts: [":clock11:"], category: 7 }
    ,{ unicode: "🕡", id: "1f561", shortcuts: [":clock630:"], category: 7 }
    ,{ unicode: "🕢", id: "1f562", shortcuts: [":clock730:"], category: 7 }
    ,{ unicode: "🕣", id: "1f563", shortcuts: [":clock830:"], category: 7 }
    ,{ unicode: "🕤", id: "1f564", shortcuts: [":clock930:"], category: 7 }
    ,{ unicode: "🕥", id: "1f565", shortcuts: [":clock1030:"], category: 7 }
    ,{ unicode: "🕦", id: "1f566", shortcuts: [":clock1130:"], category: 7 }
    ,{ unicode: "🌀", id: "1f300", shortcuts: [":cyclone:"], category: 7 }
    ,{ unicode: "♠", id: "2660", shortcuts: [":spades:"], category: 7 }
    ,{ unicode: "♥", id: "2665", shortcuts: [":hearts:"], category: 7 }
    ,{ unicode: "♦", id: "2666", shortcuts: [":diamonds:"], category: 7 }
    ,{ unicode: "♣", id: "2663", shortcuts: [":clubs:"], category: 7 }
    ,{ unicode: "🃏", id: "1f0cf", shortcuts: [":black_joker:"], category: 7 }
    ,{ unicode: "🀄", id: "1f004", shortcuts: [":mahjong:"], category: 7 }
    ,{ unicode: "🎴", id: "1f3b4", shortcuts: [":flower_playing_cards:"], category: 7 }
    ,{ unicode: "🔇", id: "1f507", shortcuts: [":mute:"], category: 7 }
    ,{ unicode: "🔈", id: "1f508", shortcuts: [":speaker:"], category: 7 }
    ,{ unicode: "🔉", id: "1f509", shortcuts: [":sound:"], category: 7 }
    ,{ unicode: "🔊", id: "1f50a", shortcuts: [":loud_sound:"], category: 7 }
    ,{ unicode: "📢", id: "1f4e2", shortcuts: [":loudspeaker:"], category: 7 }
    ,{ unicode: "📣", id: "1f4e3", shortcuts: [":mega:"], category: 7 }
    ,{ unicode: "🔔", id: "1f514", shortcuts: [":bell:"], category: 7 }
    ,{ unicode: "🔕", id: "1f515", shortcuts: [":no_bell:"], category: 7 }
    ,{ unicode: "🎵", id: "1f3b5", shortcuts: [":musical_note:"], category: 7 }
    ,{ unicode: "🎶", id: "1f3b6", shortcuts: [":notes:"], category: 7 }
    ,{ unicode: "💹", id: "1f4b9", shortcuts: [":chart:"], category: 7 }
    ,{ unicode: "💱", id: "1f4b1", shortcuts: [":currency_exchange:"], category: 7 }
    ,{ unicode: "💲", id: "1f4b2", shortcuts: [":heavy_dollar_sign:"], category: 7 }
    ,{ unicode: "🏧", id: "1f3e7", shortcuts: [":atm:"], category: 7 }
    ,{ unicode: "🚮", id: "1f6ae", shortcuts: [":put_litter_in_its_place:"], category: 7 }
    ,{ unicode: "🚰", id: "1f6b0", shortcuts: [":potable_water:"], category: 7 }
    ,{ unicode: "♿", id: "267f", shortcuts: [":wheelchair:"], category: 7 }
    ,{ unicode: "🚹", id: "1f6b9", shortcuts: [":mens:"], category: 7 }
    ,{ unicode: "🚺", id: "1f6ba", shortcuts: [":womens:"], category: 7 }
    ,{ unicode: "🚻", id: "1f6bb", shortcuts: [":restroom:"], category: 7 }
    ,{ unicode: "🚼", id: "1f6bc", shortcuts: [":baby_symbol:"], category: 7 }
    ,{ unicode: "🚾", id: "1f6be", shortcuts: [":wc:"], category: 7 }
    ,{ unicode: "🛂", id: "1f6c2", shortcuts: [":passport_control:"], category: 7 }
    ,{ unicode: "🛃", id: "1f6c3", shortcuts: [":customs:"], category: 7 }
    ,{ unicode: "🛄", id: "1f6c4", shortcuts: [":baggage_claim:"], category: 7 }
    ,{ unicode: "🛅", id: "1f6c5", shortcuts: [":left_luggage:"], category: 7 }
    ,{ unicode: "⚠", id: "26a0", shortcuts: [":warning:"], category: 7 }
    ,{ unicode: "🚸", id: "1f6b8", shortcuts: [":children_crossing:"], category: 7 }
    ,{ unicode: "⛔", id: "26d4", shortcuts: [":no_entry:"], category: 7 }
    ,{ unicode: "🚫", id: "1f6ab", shortcuts: [":no_entry_sign:"], category: 7 }
    ,{ unicode: "🚳", id: "1f6b3", shortcuts: [":no_bicycles:"], category: 7 }
    ,{ unicode: "🚭", id: "1f6ad", shortcuts: [":no_smoking:"], category: 7 }
    ,{ unicode: "🚯", id: "1f6af", shortcuts: [":do_not_litter:"], category: 7 }
    ,{ unicode: "🚱", id: "1f6b1", shortcuts: [":non-potable_water:"], category: 7 }
    ,{ unicode: "🚷", id: "1f6b7", shortcuts: [":no_pedestrians:"], category: 7 }
    ,{ unicode: "📵", id: "1f4f5", shortcuts: [":no_mobile_phones:"], category: 7 }
    ,{ unicode: "🔞", id: "1f51e", shortcuts: [":underage:"], category: 7 }
    ,{ unicode: "☢️", id: "2622", shortcuts: [":radioactive:"], category: 7 }
    ,{ unicode: "☣️", id: "2623", shortcuts: [":biohazard:"], category: 7 }
    ,{ unicode: "⬆", id: "2b06", shortcuts: [":arrow_up:"], category: 7 }
    ,{ unicode: "↗", id: "2197", shortcuts: [":arrow_upper_right:"], category: 7 }
    ,{ unicode: "➡", id: "27a1", shortcuts: [":arrow_right:"], category: 7 }
    ,{ unicode: "↘", id: "2198", shortcuts: [":arrow_lower_right:"], category: 7 }
    ,{ unicode: "⬇", id: "2b07", shortcuts: [":arrow_down:"], category: 7 }
    ,{ unicode: "↙", id: "2199", shortcuts: [":arrow_lower_left:"], category: 7 }
    ,{ unicode: "⬅", id: "2b05", shortcuts: [":arrow_left:"], category: 7 }
    ,{ unicode: "↖", id: "2196", shortcuts: [":arrow_upper_left:"], category: 7 }
    ,{ unicode: "↕", id: "2195", shortcuts: [":arrow_up_down:"], category: 7 }
    ,{ unicode: "↔", id: "2194", shortcuts: [":left_right_arrow:"], category: 7 }
    ,{ unicode: "↩", id: "21a9", shortcuts: [":leftwards_arrow_with_hook:"], category: 7 }
    ,{ unicode: "↪", id: "21aa", shortcuts: [":arrow_right_hook:"], category: 7 }
    ,{ unicode: "⤴", id: "2934", shortcuts: [":arrow_heading_up:"], category: 7 }
    ,{ unicode: "⤵", id: "2935", shortcuts: [":arrow_heading_down:"], category: 7 }
    ,{ unicode: "🔃", id: "1f503", shortcuts: [":arrows_clockwise:"], category: 7 }
    ,{ unicode: "🔄", id: "1f504", shortcuts: [":arrows_counterclockwise:"], category: 7 }
    ,{ unicode: "🔙", id: "1f519", shortcuts: [":back:"], category: 7 }
    ,{ unicode: "🔚", id: "1f51a", shortcuts: [":end:"], category: 7 }
    ,{ unicode: "🔛", id: "1f51b", shortcuts: [":on:"], category: 7 }
    ,{ unicode: "🔜", id: "1f51c", shortcuts: [":soon:"], category: 7 }
    ,{ unicode: "🔝", id: "1f51d", shortcuts: [":top:"], category: 7 }
    ,{ unicode: "🛐", id: "1f6d0", shortcuts: [":place_of_worship:"], category: 7 }
    ,{ unicode: "⚛️", id: "269b", shortcuts: [":atom:"], category: 7 }
    ,{ unicode: "🕉", id: "1f549", shortcuts: [":om_symbol:"], category: 7 }
    ,{ unicode: "✡️", id: "2721", shortcuts: [":star_of_david:"], category: 7 }
    ,{ unicode: "☸️", id: "2638", shortcuts: [":wheel_of_dharma:"], category: 7 }
    ,{ unicode: "☯️", id: "262f", shortcuts: [":yin_yang:"], category: 7 }
    ,{ unicode: "✝️", id: "271d", shortcuts: [":cross:"], category: 7 }
    ,{ unicode: "☦️", id: "2626", shortcuts: [":orthodox_cross:"], category: 7 }
    ,{ unicode: "☪️", id: "262a", shortcuts: [":star_and_crescent:"], category: 7 }
    ,{ unicode: "☮️", id: "262e", shortcuts: [":peace:"], category: 7 }
    ,{ unicode: "🕎", id: "1f54e", shortcuts: [":menorah:"], category: 7 }
    ,{ unicode: "🔯", id: "1f52f", shortcuts: [":six_pointed_star:"], category: 7 }
    ,{ unicode: "♈", id: "2648", shortcuts: [":aries:"], category: 7 }
    ,{ unicode: "♉", id: "2649", shortcuts: [":taurus:"], category: 7 }
    ,{ unicode: "♊", id: "264a", shortcuts: [":gemini:"], category: 7 }
    ,{ unicode: "♋", id: "264b", shortcuts: [":cancer:"], category: 7 }
    ,{ unicode: "♌", id: "264c", shortcuts: [":leo:"], category: 7 }
    ,{ unicode: "♍", id: "264d", shortcuts: [":virgo:"], category: 7 }
    ,{ unicode: "♎", id: "264e", shortcuts: [":libra:"], category: 7 }
    ,{ unicode: "♏", id: "264f", shortcuts: [":scorpius:"], category: 7 }
    ,{ unicode: "♐", id: "2650", shortcuts: [":sagittarius:"], category: 7 }
    ,{ unicode: "♑", id: "2651", shortcuts: [":capricorn:"], category: 7 }
    ,{ unicode: "♒", id: "2652", shortcuts: [":aquarius:"], category: 7 }
    ,{ unicode: "♓", id: "2653", shortcuts: [":pisces:"], category: 7 }
    ,{ unicode: "⛎", id: "26ce", shortcuts: [":ophiuchus:"], category: 7 }
    ,{ unicode: "🔀", id: "1f500", shortcuts: [":twisted_rightwards_arrows:"], category: 7 }
    ,{ unicode: "🔁", id: "1f501", shortcuts: [":repeat:"], category: 7 }
    ,{ unicode: "🔂", id: "1f502", shortcuts: [":repeat_one:"], category: 7 }
    ,{ unicode: "▶", id: "25b6", shortcuts: [":arrow_forward:"], category: 7 }
    ,{ unicode: "⏩", id: "23e9", shortcuts: [":fast_forward:"], category: 7 }
    ,{ unicode: "⏭", id: "23ed", shortcuts: [":track_next:"], category: 7 }
    ,{ unicode: "⏯", id: "23ef", shortcuts: [":play_pause:"], category: 7 }
    ,{ unicode: "◀", id: "25c0", shortcuts: [":arrow_backward:"], category: 7 }
    ,{ unicode: "⏪", id: "23ea", shortcuts: [":rewind:"], category: 7 }
    ,{ unicode: "⏮", id: "23ee", shortcuts: [":track_previous:"], category: 7 }
    ,{ unicode: "🔼", id: "1f53c", shortcuts: [":arrow_up_small:"], category: 7 }
    ,{ unicode: "⏫", id: "23eb", shortcuts: [":arrow_double_up:"], category: 7 }
    ,{ unicode: "🔽", id: "1f53d", shortcuts: [":arrow_down_small:"], category: 7 }
    ,{ unicode: "⏬", id: "23ec", shortcuts: [":arrow_double_down:"], category: 7 }
    ,{ unicode: "⏸", id: "23f8", shortcuts: [":pause_button:"], category: 7 }
    ,{ unicode: "⏹", id: "23f9", shortcuts: [":stop_button:"], category: 7 }
    ,{ unicode: "⏺", id: "23fa", shortcuts: [":record_button:"], category: 7 }
    // :eject: (23cf) - no PNG available in Apple icon set on emoji.codes
    ,{ unicode: "🎦", id: "1f3a6", shortcuts: [":cinema:"], category: 7 }
    ,{ unicode: "🔅", id: "1f505", shortcuts: [":low_brightness:"], category: 7 }
    ,{ unicode: "🔆", id: "1f506", shortcuts: [":high_brightness:"], category: 7 }
    ,{ unicode: "📶", id: "1f4f6", shortcuts: [":signal_strength:"], category: 7 }
    ,{ unicode: "📳", id: "1f4f3", shortcuts: [":vibration_mode:"], category: 7 }
    ,{ unicode: "📴", id: "1f4f4", shortcuts: [":mobile_phone_off:"], category: 7 }
    ,{ unicode: "♻", id: "267b", shortcuts: [":recycle:"], category: 7 }
    ,{ unicode: "📛", id: "1f4db", shortcuts: [":name_badge:"], category: 7 }
    ,{ unicode: "⚜️", id: "269c", shortcuts: [":fleur-de-lis:"], category: 7 }
    ,{ unicode: "🔰", id: "1f530", shortcuts: [":beginner:"], category: 7 }
    ,{ unicode: "🔱", id: "1f531", shortcuts: [":trident:"], category: 7 }
    ,{ unicode: "⭕", id: "2b55", shortcuts: [":o:"], category: 7 }
    ,{ unicode: "✅", id: "2705", shortcuts: [":white_check_mark:"], category: 7 }
    ,{ unicode: "☑", id: "2611", shortcuts: [":ballot_box_with_check:"], category: 7 }
    ,{ unicode: "✔", id: "2714", shortcuts: [":heavy_check_mark:"], category: 7 }
    ,{ unicode: "✖", id: "2716", shortcuts: [":heavy_multiplication_x:"], category: 7 }
    ,{ unicode: "❌", id: "274c", shortcuts: [":x:"], category: 7 }
    ,{ unicode: "❎", id: "274e", shortcuts: [":negative_squared_cross_mark:"], category: 7 }
    ,{ unicode: "➕", id: "2795", shortcuts: [":heavy_plus_sign:"], category: 7 }
    ,{ unicode: "➖", id: "2796", shortcuts: [":heavy_minus_sign:"], category: 7 }
    ,{ unicode: "➗", id: "2797", shortcuts: [":heavy_division_sign:"], category: 7 }
    ,{ unicode: "➰", id: "27b0", shortcuts: [":curly_loop:"], category: 7 }
    ,{ unicode: "➿", id: "27bf", shortcuts: [":loop:"], category: 7 }
    ,{ unicode: "〽", id: "303d", shortcuts: [":part_alternation_mark:"], category: 7 }
    ,{ unicode: "✳", id: "2733", shortcuts: [":eight_spoked_asterisk:"], category: 7 }
    ,{ unicode: "✴", id: "2734", shortcuts: [":eight_pointed_black_star:"], category: 7 }
    ,{ unicode: "❇", id: "2747", shortcuts: [":sparkle:"], category: 7 }
    ,{ unicode: "‼", id: "203c", shortcuts: [":bangbang:"], category: 7 }
    ,{ unicode: "⁉", id: "2049", shortcuts: [":interrobang:"], category: 7 }
    ,{ unicode: "❓", id: "2753", shortcuts: [":question:"], category: 7 }
    ,{ unicode: "❔", id: "2754", shortcuts: [":grey_question:"], category: 7 }
    ,{ unicode: "❕", id: "2755", shortcuts: [":grey_exclamation:"], category: 7 }
    ,{ unicode: "❗", id: "2757", shortcuts: [":exclamation:"], category: 7 }
    ,{ unicode: "〰", id: "3030", shortcuts: [":wavy_dash:"], category: 7 }
    ,{ unicode: "©", id: "00a9", shortcuts: [":copyright:"], category: 7 }
    ,{ unicode: "®", id: "00ae", shortcuts: [":registered:"], category: 7 }
    ,{ unicode: "™", id: "2122", shortcuts: [":tm:"], category: 7 }
    ,{ unicode: "#⃣", id: "0023-20e3", shortcuts: [":hash:"], category: 7 }
    // TODO: buuum! ,{ unicode: "*️⃣", id: "002a-20e3", shortcuts: [":asterisk:"], category: 7 }
    ,{ unicode: "0⃣", id: "0030-20e3", shortcuts: [":zero:"], category: 7 }
    ,{ unicode: "1⃣", id: "0031-20e3", shortcuts: [":one:"], category: 7 }
    ,{ unicode: "2⃣", id: "0032-20e3", shortcuts: [":two:"], category: 7 }
    ,{ unicode: "3⃣", id: "0033-20e3", shortcuts: [":three:"], category: 7 }
    ,{ unicode: "4⃣", id: "0034-20e3", shortcuts: [":four:"], category: 7 }
    ,{ unicode: "5⃣", id: "0035-20e3", shortcuts: [":five:"], category: 7 }
    ,{ unicode: "6⃣", id: "0036-20e3", shortcuts: [":six:"], category: 7 }
    ,{ unicode: "7⃣", id: "0037-20e3", shortcuts: [":seven:"], category: 7 }
    ,{ unicode: "8⃣", id: "0038-20e3", shortcuts: [":eight:"], category: 7 }
    ,{ unicode: "9⃣", id: "0039-20e3", shortcuts: [":nine:"], category: 7 }
    ,{ unicode: "🔟", id: "1f51f", shortcuts: [":keycap_ten:"], category: 7 }
    ,{ unicode: "💯", id: "1f4af", shortcuts: [":100:"], category: 7 }
    ,{ unicode: "🔠", id: "1f520", shortcuts: [":capital_abcd:"], category: 7 }
    ,{ unicode: "🔡", id: "1f521", shortcuts: [":abcd:"], category: 7 }
    ,{ unicode: "🔢", id: "1f522", shortcuts: [":1234:"], category: 7 }
    ,{ unicode: "🔣", id: "1f523", shortcuts: [":symbols:"], category: 7 }
    ,{ unicode: "🔤", id: "1f524", shortcuts: [":abc:"], category: 7 }
    ,{ unicode: "🅰", id: "1f170", shortcuts: [":a:"], category: 7 }
    ,{ unicode: "🆎", id: "1f18e", shortcuts: [":ab:"], category: 7 }
    ,{ unicode: "🅱", id: "1f171", shortcuts: [":b:"], category: 7 }
    ,{ unicode: "🆑", id: "1f191", shortcuts: [":cl:"], category: 7 }
    ,{ unicode: "🆒", id: "1f192", shortcuts: [":cool:"], category: 7 }
    ,{ unicode: "🆓", id: "1f193", shortcuts: [":free:"], category: 7 }
    ,{ unicode: "ℹ", id: "2139", shortcuts: [":information_source:"], category: 7 }
    ,{ unicode: "🆔", id: "1f194", shortcuts: [":id:"], category: 7 }
    ,{ unicode: "Ⓜ", id: "24c2", shortcuts: [":m:"], category: 7 }
    ,{ unicode: "🆕", id: "1f195", shortcuts: [":new:"], category: 7 }
    ,{ unicode: "🆖", id: "1f196", shortcuts: [":ng:"], category: 7 }
    ,{ unicode: "🅾", id: "1f17e", shortcuts: [":o2:"], category: 7 }
    ,{ unicode: "🆗", id: "1f197", shortcuts: [":ok:"], category: 7 }
    ,{ unicode: "🅿", id: "1f17f", shortcuts: [":parking:"], category: 7 }
    ,{ unicode: "🆘", id: "1f198", shortcuts: [":sos:"], category: 7 }
    ,{ unicode: "🆙", id: "1f199", shortcuts: [":up:"], category: 7 }
    ,{ unicode: "🆚", id: "1f19a", shortcuts: [":vs:"], category: 7 }
    ,{ unicode: "🈁", id: "1f201", shortcuts: [":koko:"], category: 7 }
    ,{ unicode: "🈂", id: "1f202", shortcuts: [":sa:"], category: 7 }
    ,{ unicode: "🈷", id: "1f237", shortcuts: [":u6708:"], category: 7 }
    ,{ unicode: "🈶", id: "1f236", shortcuts: [":u6709:"], category: 7 }
    ,{ unicode: "🈯", id: "1f22f", shortcuts: [":u6307:"], category: 7 }
    ,{ unicode: "🉐", id: "1f250", shortcuts: [":ideograph_advantage:"], category: 7 }
    ,{ unicode: "🈹", id: "1f239", shortcuts: [":u5272:"], category: 7 }
    ,{ unicode: "🈚", id: "1f21a", shortcuts: [":u7121:"], category: 7 }
    ,{ unicode: "🈲", id: "1f232", shortcuts: [":u7981:"], category: 7 }
    ,{ unicode: "🉑", id: "1f251", shortcuts: [":accept:"], category: 7 }
    ,{ unicode: "🈸", id: "1f238", shortcuts: [":u7533:"], category: 7 }
    ,{ unicode: "🈴", id: "1f234", shortcuts: [":u5408:"], category: 7 }
    ,{ unicode: "🈳", id: "1f233", shortcuts: [":u7a7a:"], category: 7 }
    ,{ unicode: "㊗", id: "3297", shortcuts: [":congratulations:"], category: 7 }
    ,{ unicode: "㊙", id: "3299", shortcuts: [":secret:"], category: 7 }
    ,{ unicode: "🈺", id: "1f23a", shortcuts: [":u55b6:"], category: 7 }
    ,{ unicode: "🈵", id: "1f235", shortcuts: [":u6e80:"], category: 7 }
    ,{ unicode: "▪", id: "25aa", shortcuts: [":black_small_square:"], category: 7 }
    ,{ unicode: "▫", id: "25ab", shortcuts: [":white_small_square:"], category: 7 }
    ,{ unicode: "◻", id: "25fb", shortcuts: [":white_medium_square:"], category: 7 }
    ,{ unicode: "◼", id: "25fc", shortcuts: [":black_medium_square:"], category: 7 }
    ,{ unicode: "◽", id: "25fd", shortcuts: [":white_medium_small_square:"], category: 7 }
    ,{ unicode: "◾", id: "25fe", shortcuts: [":black_medium_small_square:"], category: 7 }
    ,{ unicode: "⬛", id: "2b1b", shortcuts: [":black_large_square:"], category: 7 }
    ,{ unicode: "⬜", id: "2b1c", shortcuts: [":white_large_square:"], category: 7 }
    ,{ unicode: "🔶", id: "1f536", shortcuts: [":large_orange_diamond:"], category: 7 }
    ,{ unicode: "🔷", id: "1f537", shortcuts: [":large_blue_diamond:"], category: 7 }
    ,{ unicode: "🔸", id: "1f538", shortcuts: [":small_orange_diamond:"], category: 7 }
    ,{ unicode: "🔹", id: "1f539", shortcuts: [":small_blue_diamond:"], category: 7 }
    ,{ unicode: "🔺", id: "1f53a", shortcuts: [":small_red_triangle:"], category: 7 }
    ,{ unicode: "🔻", id: "1f53b", shortcuts: [":small_red_triangle_down:"], category: 7 }
    ,{ unicode: "💠", id: "1f4a0", shortcuts: [":diamond_shape_with_a_dot_inside:"], category: 7 }
    ,{ unicode: "🔘", id: "1f518", shortcuts: [":radio_button:"], category: 7 }
    ,{ unicode: "🔲", id: "1f532", shortcuts: [":black_square_button:"], category: 7 }
    ,{ unicode: "🔳", id: "1f533", shortcuts: [":white_square_button:"], category: 7 }
    ,{ unicode: "⚪", id: "26aa", shortcuts: [":white_circle:"], category: 7 }
    ,{ unicode: "⚫", id: "26ab", shortcuts: [":black_circle:"], category: 7 }
    ,{ unicode: "🔴", id: "1f534", shortcuts: [":red_circle:"], category: 7 }
    ,{ unicode: "🔵", id: "1f535", shortcuts: [":blue_circle:"], category: 7 }
    
    // 8 - Flags
    ,{ unicode: "🇸🇭", id: "1f1e6-1f1e8", shortcuts: [":flag_ac:"], category: 8 }
    ,{ unicode: "🇦🇩", id: "1f1e6-1f1e9", shortcuts: [":flag_ad:"], category: 8 }
    ,{ unicode: "🇦🇪", id: "1f1e6-1f1ea", shortcuts: [":flag_ae:"], category: 8 }
    ,{ unicode: "🇦🇫", id: "1f1e6-1f1eb", shortcuts: [":flag_af:"], category: 8 }
    ,{ unicode: "🇦🇬", id: "1f1e6-1f1ec", shortcuts: [":flag_ag:"], category: 8 }
    ,{ unicode: "🇦🇮", id: "1f1e6-1f1ee", shortcuts: [":flag_ai:"], category: 8 }
    ,{ unicode: "🇦🇱", id: "1f1e6-1f1f1", shortcuts: [":flag_al:"], category: 8 }
    ,{ unicode: "🇦🇲", id: "1f1e6-1f1f2", shortcuts: [":flag_am:"], category: 8 }
    ,{ unicode: "🇦🇴", id: "1f1e6-1f1f4", shortcuts: [":flag_ao:"], category: 8 }
    ,{ unicode: "🇦🇶", id: "1f1e6-1f1f6", shortcuts: [":flag_aq:"], category: 8 }
    ,{ unicode: "🇦🇷", id: "1f1e6-1f1f7", shortcuts: [":flag_ar:"], category: 8 }
    ,{ unicode: "🇦🇸", id: "1f1e6-1f1f8", shortcuts: [":flag_as:"], category: 8 }
    ,{ unicode: "🇦🇹", id: "1f1e6-1f1f9", shortcuts: [":flag_at:"], category: 8 }
    ,{ unicode: "🇦🇺", id: "1f1e6-1f1fa", shortcuts: [":flag_au:"], category: 8 }
    ,{ unicode: "🇦🇼", id: "1f1e6-1f1fc", shortcuts: [":flag_aw:"], category: 8 }
    ,{ unicode: "🇦🇽", id: "1f1e6-1f1fd", shortcuts: [":flag_ax:"], category: 8 }
    ,{ unicode: "🇦🇿", id: "1f1e6-1f1ff", shortcuts: [":flag_az:"], category: 8 }
    ,{ unicode: "🇧🇦", id: "1f1e7-1f1e6", shortcuts: [":flag_ba:"], category: 8 }
    ,{ unicode: "🇧🇧", id: "1f1e7-1f1e7", shortcuts: [":flag_bb:"], category: 8 }
    ,{ unicode: "🇧🇩", id: "1f1e7-1f1e9", shortcuts: [":flag_bd:"], category: 8 }
    ,{ unicode: "🇧🇪", id: "1f1e7-1f1ea", shortcuts: [":flag_be:"], category: 8 }
    ,{ unicode: "🇧🇫", id: "1f1e7-1f1eb", shortcuts: [":flag_bf:"], category: 8 }
    ,{ unicode: "🇧🇬", id: "1f1e7-1f1ec", shortcuts: [":flag_bg:"], category: 8 }
    ,{ unicode: "🇧🇭", id: "1f1e7-1f1ed", shortcuts: [":flag_bh:"], category: 8 }
    ,{ unicode: "🇧🇮", id: "1f1e7-1f1ee", shortcuts: [":flag_bi:"], category: 8 }
    ,{ unicode: "🇧🇯", id: "1f1e7-1f1ef", shortcuts: [":flag_bj:"], category: 8 }
    ,{ unicode: "🇧🇱", id: "1f1e7-1f1f1", shortcuts: [":flag_bl:"], category: 8 }
    ,{ unicode: "🇧🇲", id: "1f1e7-1f1f2", shortcuts: [":flag_bm:"], category: 8 }
    ,{ unicode: "🇧🇳", id: "1f1e7-1f1f3", shortcuts: [":flag_bn:"], category: 8 }
    ,{ unicode: "🇧🇴", id: "1f1e7-1f1f4", shortcuts: [":flag_bo:"], category: 8 }
    ,{ unicode: "🇧🇶", id: "1f1e7-1f1f6", shortcuts: [":flag_bq:"], category: 8 }
    ,{ unicode: "🇧🇷", id: "1f1e7-1f1f7", shortcuts: [":flag_br:"], category: 8 }
    ,{ unicode: "🇧🇸", id: "1f1e7-1f1f8", shortcuts: [":flag_bs:"], category: 8 }
    ,{ unicode: "🇧🇹", id: "1f1e7-1f1f9", shortcuts: [":flag_bt:"], category: 8 }
    ,{ unicode: "🇧🇻", id: "1f1e7-1f1fb", shortcuts: [":flag_bv:"], category: 8 }
    ,{ unicode: "🇧🇼", id: "1f1e7-1f1fc", shortcuts: [":flag_bw:"], category: 8 }
    ,{ unicode: "🇧🇾", id: "1f1e7-1f1fe", shortcuts: [":flag_by:"], category: 8 }
    ,{ unicode: "🇧🇿", id: "1f1e7-1f1ff", shortcuts: [":flag_bz:"], category: 8 }
    ,{ unicode: "🇨🇦", id: "1f1e8-1f1e6", shortcuts: [":flag_ca:"], category: 8 }
    ,{ unicode: "🇨🇨", id: "1f1e8-1f1e8", shortcuts: [":flag_cc:"], category: 8 }
    ,{ unicode: "🇨🇩", id: "1f1e8-1f1e9", shortcuts: [":flag_cd:"], category: 8 }
    ,{ unicode: "🇨🇫", id: "1f1e8-1f1eb", shortcuts: [":flag_cf:"], category: 8 }
    ,{ unicode: "🇨🇬", id: "1f1e8-1f1ec", shortcuts: [":flag_cg:"], category: 8 }
    ,{ unicode: "🇨🇭", id: "1f1e8-1f1ed", shortcuts: [":flag_ch:"], category: 8 }
    ,{ unicode: "🇨🇮", id: "1f1e8-1f1ee", shortcuts: [":flag_ci:"], category: 8 }
    ,{ unicode: "🇨🇰", id: "1f1e8-1f1f0", shortcuts: [":flag_ck:"], category: 8 }
    ,{ unicode: "🇨🇱", id: "1f1e8-1f1f1", shortcuts: [":flag_cl:"], category: 8 }
    ,{ unicode: "🇨🇲", id: "1f1e8-1f1f2", shortcuts: [":flag_cm:"], category: 8 }
    ,{ unicode: "🇨🇳", id: "1f1e8-1f1f3", shortcuts: [":flag_cn:"], category: 8 }
    ,{ unicode: "🇨🇴", id: "1f1e8-1f1f4", shortcuts: [":flag_co:"], category: 8 }
    ,{ unicode: "🇨🇵", id: "1f1e8-1f1f5", shortcuts: [":flag_cp:"], category: 8 }
    ,{ unicode: "🇨🇷", id: "1f1e8-1f1f7", shortcuts: [":flag_cr:"], category: 8 }
    ,{ unicode: "🇨🇺", id: "1f1e8-1f1fa", shortcuts: [":flag_cu:"], category: 8 }
    ,{ unicode: "🇨🇻", id: "1f1e8-1f1fb", shortcuts: [":flag_cv:"], category: 8 }
    ,{ unicode: "🇨🇼", id: "1f1e8-1f1fc", shortcuts: [":flag_cw:"], category: 8 }
    ,{ unicode: "🇨🇽", id: "1f1e8-1f1fd", shortcuts: [":flag_cx:"], category: 8 }
    ,{ unicode: "🇨🇾", id: "1f1e8-1f1fe", shortcuts: [":flag_cy:"], category: 8 }
    ,{ unicode: "🇨🇿", id: "1f1e8-1f1ff", shortcuts: [":flag_cz:"], category: 8 }
    ,{ unicode: "🇩🇪", id: "1f1e9-1f1ea", shortcuts: [":flag_de:"], category: 8 }
    ,{ unicode: "🇩🇬", id: "1f1e9-1f1ec", shortcuts: [":flag_dg:"], category: 8 }
    ,{ unicode: "🇩🇯", id: "1f1e9-1f1ef", shortcuts: [":flag_dj:"], category: 8 }
    ,{ unicode: "🇩🇰", id: "1f1e9-1f1f0", shortcuts: [":flag_dk:"], category: 8 }
    ,{ unicode: "🇩🇲", id: "1f1e9-1f1f2", shortcuts: [":flag_dm:"], category: 8 }
    ,{ unicode: "🇩🇴", id: "1f1e9-1f1f4", shortcuts: [":flag_do:"], category: 8 }
    ,{ unicode: "🇩🇿", id: "1f1e9-1f1ff", shortcuts: [":flag_dz:"], category: 8 }
    ,{ unicode: "🇪🇦", id: "1f1ea-1f1e6", shortcuts: [":flag_ea:"], category: 8 }
    ,{ unicode: "🇪🇨", id: "1f1ea-1f1e8", shortcuts: [":flag_ec:"], category: 8 }
    ,{ unicode: "🇪🇪", id: "1f1ea-1f1ea", shortcuts: [":flag_ee:"], category: 8 }
    ,{ unicode: "🇪🇬", id: "1f1ea-1f1ec", shortcuts: [":flag_eg:"], category: 8 }
    ,{ unicode: "🇪🇭", id: "1f1ea-1f1ed", shortcuts: [":flag_eh:"], category: 8 }
    ,{ unicode: "🇪🇷", id: "1f1ea-1f1f7", shortcuts: [":flag_er:"], category: 8 }
    ,{ unicode: "🇪🇸", id: "1f1ea-1f1f8", shortcuts: [":flag_es:"], category: 8 }
    ,{ unicode: "🇪🇹", id: "1f1ea-1f1f9", shortcuts: [":flag_et:"], category: 8 }
    ,{ unicode: "🇪🇺", id: "1f1ea-1f1fa", shortcuts: [":flag_eu:"], category: 8 }
    ,{ unicode: "🇫🇮", id: "1f1eb-1f1ee", shortcuts: [":flag_fi:"], category: 8 }
    ,{ unicode: "🇫🇯", id: "1f1eb-1f1ef", shortcuts: [":flag_fj:"], category: 8 }
    ,{ unicode: "🇫🇰", id: "1f1eb-1f1f0", shortcuts: [":flag_fk:"], category: 8 }
    ,{ unicode: "🇫🇲", id: "1f1eb-1f1f2", shortcuts: [":flag_fm:"], category: 8 }
    ,{ unicode: "🇫🇴", id: "1f1eb-1f1f4", shortcuts: [":flag_fo:"], category: 8 }
    ,{ unicode: "🇫🇷", id: "1f1eb-1f1f7", shortcuts: [":flag_fr:"], category: 8 }
    ,{ unicode: "🇬🇦", id: "1f1ec-1f1e6", shortcuts: [":flag_ga:"], category: 8 }
    ,{ unicode: "🇬🇧", id: "1f1ec-1f1e7", shortcuts: [":flag_gb:"], category: 8 }
    ,{ unicode: "🇬🇩", id: "1f1ec-1f1e9", shortcuts: [":flag_gd:"], category: 8 }
    ,{ unicode: "🇬🇪", id: "1f1ec-1f1ea", shortcuts: [":flag_ge:"], category: 8 }
    ,{ unicode: "🇬🇫", id: "1f1ec-1f1eb", shortcuts: [":flag_gf:"], category: 8 }
    ,{ unicode: "🇬🇬", id: "1f1ec-1f1ec", shortcuts: [":flag_gg:"], category: 8 }
    ,{ unicode: "🇬🇭", id: "1f1ec-1f1ed", shortcuts: [":flag_gh:"], category: 8 }
    ,{ unicode: "🇬🇮", id: "1f1ec-1f1ee", shortcuts: [":flag_gi:"], category: 8 }
    ,{ unicode: "🇬🇱", id: "1f1ec-1f1f1", shortcuts: [":flag_gl:"], category: 8 }
    ,{ unicode: "🇬🇲", id: "1f1ec-1f1f2", shortcuts: [":flag_gm:"], category: 8 }
    ,{ unicode: "🇬🇳", id: "1f1ec-1f1f3", shortcuts: [":flag_gn:"], category: 8 }
    ,{ unicode: "🇬🇵", id: "1f1ec-1f1f5", shortcuts: [":flag_gp:"], category: 8 }
    ,{ unicode: "🇬🇶", id: "1f1ec-1f1f6", shortcuts: [":flag_gq:"], category: 8 }
    ,{ unicode: "🇬🇷", id: "1f1ec-1f1f7", shortcuts: [":flag_gr:"], category: 8 }
    ,{ unicode: "🇬🇸", id: "1f1ec-1f1f8", shortcuts: [":flag_gs:"], category: 8 }
    ,{ unicode: "🇬🇹", id: "1f1ec-1f1f9", shortcuts: [":flag_gt:"], category: 8 }
    ,{ unicode: "🇬🇺", id: "1f1ec-1f1fa", shortcuts: [":flag_gu:"], category: 8 }
    ,{ unicode: "🇬🇼", id: "1f1ec-1f1fc", shortcuts: [":flag_gw:"], category: 8 }
    ,{ unicode: "🇬🇾", id: "1f1ec-1f1fe", shortcuts: [":flag_gy:"], category: 8 }
    ,{ unicode: "🇭🇰", id: "1f1ed-1f1f0", shortcuts: [":flag_hk:"], category: 8 }
    ,{ unicode: "🇭🇲", id: "1f1ed-1f1f2", shortcuts: [":flag_hm:"], category: 8 }
    ,{ unicode: "🇭🇳", id: "1f1ed-1f1f3", shortcuts: [":flag_hn:"], category: 8 }
    ,{ unicode: "🇭🇷", id: "1f1ed-1f1f7", shortcuts: [":flag_hr:"], category: 8 }
    ,{ unicode: "🇭🇹", id: "1f1ed-1f1f9", shortcuts: [":flag_ht:"], category: 8 }
    ,{ unicode: "🇭🇺", id: "1f1ed-1f1fa", shortcuts: [":flag_hu:"], category: 8 }
    ,{ unicode: "🇮🇨", id: "1f1ee-1f1e8", shortcuts: [":flag_ic:"], category: 8 }
    ,{ unicode: "🇮🇩", id: "1f1ee-1f1e9", shortcuts: [":flag_id:"], category: 8 }
    ,{ unicode: "🇮🇪", id: "1f1ee-1f1ea", shortcuts: [":flag_ie:"], category: 8 }
    ,{ unicode: "🇮🇱", id: "1f1ee-1f1f1", shortcuts: [":flag_il:"], category: 8 }
    ,{ unicode: "🇮🇲", id: "1f1ee-1f1f2", shortcuts: [":flag_im:"], category: 8 }
    ,{ unicode: "🇮🇳", id: "1f1ee-1f1f3", shortcuts: [":flag_in:"], category: 8 }
    ,{ unicode: "🇮🇴", id: "1f1ee-1f1f4", shortcuts: [":flag_io:"], category: 8 }
    ,{ unicode: "🇮🇶", id: "1f1ee-1f1f6", shortcuts: [":flag_iq:"], category: 8 }
    ,{ unicode: "🇮🇷", id: "1f1ee-1f1f7", shortcuts: [":flag_ir:"], category: 8 }
    ,{ unicode: "🇮🇸", id: "1f1ee-1f1f8", shortcuts: [":flag_is:"], category: 8 }
    ,{ unicode: "🇮🇹", id: "1f1ee-1f1f9", shortcuts: [":flag_it:"], category: 8 }
    ,{ unicode: "🇯🇪", id: "1f1ef-1f1ea", shortcuts: [":flag_je:"], category: 8 }
    ,{ unicode: "🇯🇲", id: "1f1ef-1f1f2", shortcuts: [":flag_jm:"], category: 8 }
    ,{ unicode: "🇯🇴", id: "1f1ef-1f1f4", shortcuts: [":flag_jo:"], category: 8 }
    ,{ unicode: "🇯🇵", id: "1f1ef-1f1f5", shortcuts: [":flag_jp:"], category: 8 }
    ,{ unicode: "🇰🇪", id: "1f1f0-1f1ea", shortcuts: [":flag_ke:"], category: 8 }
    ,{ unicode: "🇰🇬", id: "1f1f0-1f1ec", shortcuts: [":flag_kg:"], category: 8 }
    ,{ unicode: "🇰🇭", id: "1f1f0-1f1ed", shortcuts: [":flag_kh:"], category: 8 }
    ,{ unicode: "🇰🇮", id: "1f1f0-1f1ee", shortcuts: [":flag_ki:"], category: 8 }
    ,{ unicode: "🇰🇲", id: "1f1f0-1f1f2", shortcuts: [":flag_km:"], category: 8 }
    ,{ unicode: "🇰🇳", id: "1f1f0-1f1f3", shortcuts: [":flag_kn:"], category: 8 }
    ,{ unicode: "🇰🇵", id: "1f1f0-1f1f5", shortcuts: [":flag_kp:"], category: 8 }
    ,{ unicode: "🇰🇷", id: "1f1f0-1f1f7", shortcuts: [":flag_kr:"], category: 8 }
    ,{ unicode: "🇰🇼", id: "1f1f0-1f1fc", shortcuts: [":flag_kw:"], category: 8 }
    ,{ unicode: "🇰🇾", id: "1f1f0-1f1fe", shortcuts: [":flag_ky:"], category: 8 }
    ,{ unicode: "🇰🇿", id: "1f1f0-1f1ff", shortcuts: [":flag_kz:"], category: 8 }
    ,{ unicode: "🇱🇦", id: "1f1f1-1f1e6", shortcuts: [":flag_la:"], category: 8 }
    ,{ unicode: "🇱🇧", id: "1f1f1-1f1e7", shortcuts: [":flag_lb:"], category: 8 }
    ,{ unicode: "🇱🇨", id: "1f1f1-1f1e8", shortcuts: [":flag_lc:"], category: 8 }
    ,{ unicode: "🇱🇮", id: "1f1f1-1f1ee", shortcuts: [":flag_li:"], category: 8 }
    ,{ unicode: "🇱🇰", id: "1f1f1-1f1f0", shortcuts: [":flag_lk:"], category: 8 }
    ,{ unicode: "🇱🇷", id: "1f1f1-1f1f7", shortcuts: [":flag_lr:"], category: 8 }
    ,{ unicode: "🇱🇸", id: "1f1f1-1f1f8", shortcuts: [":flag_ls:"], category: 8 }
    ,{ unicode: "🇱🇹", id: "1f1f1-1f1f9", shortcuts: [":flag_lt:"], category: 8 }
    ,{ unicode: "🇱🇺", id: "1f1f1-1f1fa", shortcuts: [":flag_lu:"], category: 8 }
    ,{ unicode: "🇱🇻", id: "1f1f1-1f1fb", shortcuts: [":flag_lv:"], category: 8 }
    ,{ unicode: "🇱🇾", id: "1f1f1-1f1fe", shortcuts: [":flag_ly:"], category: 8 }
    ,{ unicode: "🇲🇦", id: "1f1f2-1f1e6", shortcuts: [":flag_ma:"], category: 8 }
    ,{ unicode: "🇲🇨", id: "1f1f2-1f1e8", shortcuts: [":flag_mc:"], category: 8 }
    ,{ unicode: "🇲🇩", id: "1f1f2-1f1e9", shortcuts: [":flag_md:"], category: 8 }
    ,{ unicode: "🇲🇪", id: "1f1f2-1f1ea", shortcuts: [":flag_me:"], category: 8 }
    ,{ unicode: "🇲🇫", id: "1f1f2-1f1eb", shortcuts: [":flag_mf:"], category: 8 }
    ,{ unicode: "🇲🇬", id: "1f1f2-1f1ec", shortcuts: [":flag_mg:"], category: 8 }
    ,{ unicode: "🇲🇭", id: "1f1f2-1f1ed", shortcuts: [":flag_mh:"], category: 8 }
    ,{ unicode: "🇲🇰", id: "1f1f2-1f1f0", shortcuts: [":flag_mk:"], category: 8 }
    ,{ unicode: "🇲🇱", id: "1f1f2-1f1f1", shortcuts: [":flag_ml:"], category: 8 }
    ,{ unicode: "🇲🇲", id: "1f1f2-1f1f2", shortcuts: [":flag_mm:"], category: 8 }
    ,{ unicode: "🇲🇳", id: "1f1f2-1f1f3", shortcuts: [":flag_mn:"], category: 8 }
    ,{ unicode: "🇲🇴", id: "1f1f2-1f1f4", shortcuts: [":flag_mo:"], category: 8 }
    ,{ unicode: "🇲🇵", id: "1f1f2-1f1f5", shortcuts: [":flag_mp:"], category: 8 }
    ,{ unicode: "🇲🇶", id: "1f1f2-1f1f6", shortcuts: [":flag_mq:"], category: 8 }
    ,{ unicode: "🇲🇷", id: "1f1f2-1f1f7", shortcuts: [":flag_mr:"], category: 8 }
    ,{ unicode: "🇲🇸", id: "1f1f2-1f1f8", shortcuts: [":flag_ms:"], category: 8 }
    ,{ unicode: "🇲🇹", id: "1f1f2-1f1f9", shortcuts: [":flag_mt:"], category: 8 }
    ,{ unicode: "🇲🇺", id: "1f1f2-1f1fa", shortcuts: [":flag_mu:"], category: 8 }
    ,{ unicode: "🇲🇻", id: "1f1f2-1f1fb", shortcuts: [":flag_mv:"], category: 8 }
    ,{ unicode: "🇲🇼", id: "1f1f2-1f1fc", shortcuts: [":flag_mw:"], category: 8 }
    ,{ unicode: "🇲🇽", id: "1f1f2-1f1fd", shortcuts: [":flag_mx:"], category: 8 }
    ,{ unicode: "🇲🇾", id: "1f1f2-1f1fe", shortcuts: [":flag_my:"], category: 8 }
    ,{ unicode: "🇲🇿", id: "1f1f2-1f1ff", shortcuts: [":flag_mz:"], category: 8 }
    ,{ unicode: "🇳🇦", id: "1f1f3-1f1e6", shortcuts: [":flag_na:"], category: 8 }
    ,{ unicode: "🇳🇨", id: "1f1f3-1f1e8", shortcuts: [":flag_nc:"], category: 8 }
    ,{ unicode: "🇳🇪", id: "1f1f3-1f1ea", shortcuts: [":flag_ne:"], category: 8 }
    ,{ unicode: "🇳🇫", id: "1f1f3-1f1eb", shortcuts: [":flag_nf:"], category: 8 }
    ,{ unicode: "🇳🇬", id: "1f1f3-1f1ec", shortcuts: [":flag_ng:"], category: 8 }
    ,{ unicode: "🇳🇮", id: "1f1f3-1f1ee", shortcuts: [":flag_ni:"], category: 8 }
    ,{ unicode: "🇳🇱", id: "1f1f3-1f1f1", shortcuts: [":flag_nl:"], category: 8 }
    ,{ unicode: "🇳🇴", id: "1f1f3-1f1f4", shortcuts: [":flag_no:"], category: 8 }
    ,{ unicode: "🇳🇵", id: "1f1f3-1f1f5", shortcuts: [":flag_np:"], category: 8 }
    ,{ unicode: "🇳🇷", id: "1f1f3-1f1f7", shortcuts: [":flag_nr:"], category: 8 }
    ,{ unicode: "🇳🇺", id: "1f1f3-1f1fa", shortcuts: [":flag_nu:"], category: 8 }
    ,{ unicode: "🇳🇿", id: "1f1f3-1f1ff", shortcuts: [":flag_nz:"], category: 8 }
    ,{ unicode: "🇴🇲", id: "1f1f4-1f1f2", shortcuts: [":flag_om:"], category: 8 }
    ,{ unicode: "🇵🇦", id: "1f1f5-1f1e6", shortcuts: [":flag_pa:"], category: 8 }
    ,{ unicode: "🇵🇪", id: "1f1f5-1f1ea", shortcuts: [":flag_pe:"], category: 8 }
    ,{ unicode: "🇵🇫", id: "1f1f5-1f1eb", shortcuts: [":flag_pf:"], category: 8 }
    ,{ unicode: "🇵🇬", id: "1f1f5-1f1ec", shortcuts: [":flag_pg:"], category: 8 }
    ,{ unicode: "🇵🇭", id: "1f1f5-1f1ed", shortcuts: [":flag_ph:"], category: 8 }
    ,{ unicode: "🇵🇰", id: "1f1f5-1f1f0", shortcuts: [":flag_pk:"], category: 8 }
    ,{ unicode: "🇵🇱", id: "1f1f5-1f1f1", shortcuts: [":flag_pl:"], category: 8 }
    ,{ unicode: "🇵🇲", id: "1f1f5-1f1f2", shortcuts: [":flag_pm:"], category: 8 }
    ,{ unicode: "🇵🇳", id: "1f1f5-1f1f3", shortcuts: [":flag_pn:"], category: 8 }
    ,{ unicode: "🇵🇷", id: "1f1f5-1f1f7", shortcuts: [":flag_pr:"], category: 8 }
    ,{ unicode: "🇵🇸", id: "1f1f5-1f1f8", shortcuts: [":flag_ps:"], category: 8 }
    ,{ unicode: "🇵🇹", id: "1f1f5-1f1f9", shortcuts: [":flag_pt:"], category: 8 }
    ,{ unicode: "🇵🇼", id: "1f1f5-1f1fc", shortcuts: [":flag_pw:"], category: 8 }
    ,{ unicode: "🇵🇾", id: "1f1f5-1f1fe", shortcuts: [":flag_py:"], category: 8 }
    ,{ unicode: "🇶🇦", id: "1f1f6-1f1e6", shortcuts: [":flag_qa:"], category: 8 }
    ,{ unicode: "🇷🇪", id: "1f1f7-1f1ea", shortcuts: [":flag_re:"], category: 8 }
    ,{ unicode: "🇷🇴", id: "1f1f7-1f1f4", shortcuts: [":flag_ro:"], category: 8 }
    ,{ unicode: "🇷🇸", id: "1f1f7-1f1f8", shortcuts: [":flag_rs:"], category: 8 }
    ,{ unicode: "🇷🇺", id: "1f1f7-1f1fa", shortcuts: [":flag_ru:"], category: 8 }
    ,{ unicode: "🇷🇼", id: "1f1f7-1f1fc", shortcuts: [":flag_rw:"], category: 8 }
    ,{ unicode: "🇸🇦", id: "1f1f8-1f1e6", shortcuts: [":flag_sa:"], category: 8 }
    ,{ unicode: "🇸🇧", id: "1f1f8-1f1e7", shortcuts: [":flag_sb:"], category: 8 }
    ,{ unicode: "🇸🇨", id: "1f1f8-1f1e8", shortcuts: [":flag_sc:"], category: 8 }
    ,{ unicode: "🇸🇩", id: "1f1f8-1f1e9", shortcuts: [":flag_sd:"], category: 8 }
    ,{ unicode: "🇸🇪", id: "1f1f8-1f1ea", shortcuts: [":flag_se:"], category: 8 }
    ,{ unicode: "🇸🇬", id: "1f1f8-1f1ec", shortcuts: [":flag_sg:"], category: 8 }
    ,{ unicode: "🇸🇭", id: "1f1f8-1f1ed", shortcuts: [":flag_sh:"], category: 8 }
    ,{ unicode: "🇸🇮", id: "1f1f8-1f1ee", shortcuts: [":flag_si:"], category: 8 }
    ,{ unicode: "🇸🇯", id: "1f1f8-1f1ef", shortcuts: [":flag_sj:"], category: 8 }
    ,{ unicode: "🇸🇰", id: "1f1f8-1f1f0", shortcuts: [":flag_sk:"], category: 8 }
    ,{ unicode: "🇸🇱", id: "1f1f8-1f1f1", shortcuts: [":flag_sl:"], category: 8 }
    ,{ unicode: "🇸🇲", id: "1f1f8-1f1f2", shortcuts: [":flag_sm:"], category: 8 }
    ,{ unicode: "🇸🇳", id: "1f1f8-1f1f3", shortcuts: [":flag_sn:"], category: 8 }
    ,{ unicode: "🇸🇴", id: "1f1f8-1f1f4", shortcuts: [":flag_so:"], category: 8 }
    ,{ unicode: "🇸🇷", id: "1f1f8-1f1f7", shortcuts: [":flag_sr:"], category: 8 }
    ,{ unicode: "🇸🇸", id: "1f1f8-1f1f8", shortcuts: [":flag_ss:"], category: 8 }
    ,{ unicode: "🇸🇹", id: "1f1f8-1f1f9", shortcuts: [":flag_st:"], category: 8 }
    ,{ unicode: "🇸🇻", id: "1f1f8-1f1fb", shortcuts: [":flag_sv:"], category: 8 }
    ,{ unicode: "🇸🇽", id: "1f1f8-1f1fd", shortcuts: [":flag_sx:"], category: 8 }
    ,{ unicode: "🇸🇾", id: "1f1f8-1f1fe", shortcuts: [":flag_sy:"], category: 8 }
    ,{ unicode: "🇸🇿", id: "1f1f8-1f1ff", shortcuts: [":flag_sz:"], category: 8 }
    ,{ unicode: "🇹🇦", id: "1f1f9-1f1e6", shortcuts: [":flag_ta:"], category: 8 }
    ,{ unicode: "🇹🇨", id: "1f1f9-1f1e8", shortcuts: [":flag_tc:"], category: 8 }
    ,{ unicode: "🇹🇩", id: "1f1f9-1f1e9", shortcuts: [":flag_td:"], category: 8 }
    ,{ unicode: "🇹🇫", id: "1f1f9-1f1eb", shortcuts: [":flag_tf:"], category: 8 }
    ,{ unicode: "🇹🇬", id: "1f1f9-1f1ec", shortcuts: [":flag_tg:"], category: 8 }
    ,{ unicode: "🇹🇭", id: "1f1f9-1f1ed", shortcuts: [":flag_th:"], category: 8 }
    ,{ unicode: "🇹🇯", id: "1f1f9-1f1ef", shortcuts: [":flag_tj:"], category: 8 }
    ,{ unicode: "🇹🇰", id: "1f1f9-1f1f0", shortcuts: [":flag_tk:"], category: 8 }
    ,{ unicode: "🇹🇱", id: "1f1f9-1f1f1", shortcuts: [":flag_tl:"], category: 8 }
    ,{ unicode: "🇹🇲", id: "1f1f9-1f1f2", shortcuts: [":flag_tm:"], category: 8 }
    ,{ unicode: "🇹🇳", id: "1f1f9-1f1f3", shortcuts: [":flag_tn:"], category: 8 }
    ,{ unicode: "🇹🇴", id: "1f1f9-1f1f4", shortcuts: [":flag_to:"], category: 8 }
    ,{ unicode: "🇹🇷", id: "1f1f9-1f1f7", shortcuts: [":flag_tr:"], category: 8 }
    ,{ unicode: "🇹🇹", id: "1f1f9-1f1f9", shortcuts: [":flag_tt:"], category: 8 }
    ,{ unicode: "🇹🇻", id: "1f1f9-1f1fb", shortcuts: [":flag_tv:"], category: 8 }
    ,{ unicode: "🇹🇼", id: "1f1f9-1f1fc", shortcuts: [":flag_tw:"], category: 8 }
    ,{ unicode: "🇹🇿", id: "1f1f9-1f1ff", shortcuts: [":flag_tz:"], category: 8 }
    ,{ unicode: "🇺🇦", id: "1f1fa-1f1e6", shortcuts: [":flag_ua:"], category: 8 }
    ,{ unicode: "🇺🇬", id: "1f1fa-1f1ec", shortcuts: [":flag_ug:"], category: 8 }
    ,{ unicode: "🇺🇲", id: "1f1fa-1f1f2", shortcuts: [":flag_um:"], category: 8 }
    ,{ unicode: "🇺🇸", id: "1f1fa-1f1f8", shortcuts: [":flag_us:"], category: 8 }
    ,{ unicode: "🇺🇾", id: "1f1fa-1f1fe", shortcuts: [":flag_uy:"], category: 8 }
    ,{ unicode: "🇺🇿", id: "1f1fa-1f1ff", shortcuts: [":flag_uz:"], category: 8 }
    ,{ unicode: "🇻🇦", id: "1f1fb-1f1e6", shortcuts: [":flag_va:"], category: 8 }
    ,{ unicode: "🇻🇨", id: "1f1fb-1f1e8", shortcuts: [":flag_vc:"], category: 8 }
    ,{ unicode: "🇻🇪", id: "1f1fb-1f1ea", shortcuts: [":flag_ve:"], category: 8 }
    ,{ unicode: "🇻🇬", id: "1f1fb-1f1ec", shortcuts: [":flag_vg:"], category: 8 }
    ,{ unicode: "🇻🇮", id: "1f1fb-1f1ee", shortcuts: [":flag_vi:"], category: 8 }
    ,{ unicode: "🇻🇳", id: "1f1fb-1f1f3", shortcuts: [":flag_vn:"], category: 8 }
    ,{ unicode: "🇻🇺", id: "1f1fb-1f1fa", shortcuts: [":flag_vu:"], category: 8 }
    ,{ unicode: "🇼🇫", id: "1f1fc-1f1eb", shortcuts: [":flag_wf:"], category: 8 }
    ,{ unicode: "🇼🇸", id: "1f1fc-1f1f8", shortcuts: [":flag_ws:"], category: 8 }
    ,{ unicode: "🇽🇰", id: "1f1fd-1f1f0", shortcuts: [":flag_xk:"], category: 8 }
    ,{ unicode: "🇾🇪", id: "1f1fe-1f1ea", shortcuts: [":flag_ye:"], category: 8 }
    ,{ unicode: "🇾🇹", id: "1f1fe-1f1f9", shortcuts: [":flag_yt:"], category: 8 }
    ,{ unicode: "🇿🇦", id: "1f1ff-1f1e6", shortcuts: [":flag_za:"], category: 8 }
    ,{ unicode: "🇿🇲", id: "1f1ff-1f1f2", shortcuts: [":flag_zm:"], category: 8 }
    ,{ unicode: "🇿🇼", id: "1f1ff-1f1fc", shortcuts: [":flag_zw:"], category: 8 }
    
    // [9 - Diversity - not available via editor/selector]
    ,{ unicode: "👦🏻", id: "1f466-1f3fb", shortcuts: [":boy_tone1:"], category: 9 }
    ,{ unicode: "👦🏼", id: "1f466-1f3fc", shortcuts: [":boy_tone2:"], category: 9 }
    ,{ unicode: "👦🏽", id: "1f466-1f3fd", shortcuts: [":boy_tone3:"], category: 9 }
    ,{ unicode: "👦🏾", id: "1f466-1f3fe", shortcuts: [":boy_tone4:"], category: 9 }
    ,{ unicode: "👦🏿", id: "1f466-1f3ff", shortcuts: [":boy_tone5:"], category: 9 }
    ,{ unicode: "👧🏻", id: "1f467-1f3fb", shortcuts: [":girl_tone1:"], category: 9 }
    ,{ unicode: "👧🏼", id: "1f467-1f3fc", shortcuts: [":girl_tone2:"], category: 9 }
    ,{ unicode: "👧🏽", id: "1f467-1f3fd", shortcuts: [":girl_tone3:"], category: 9 }
    ,{ unicode: "👧🏾", id: "1f467-1f3fe", shortcuts: [":girl_tone4:"], category: 9 }
    ,{ unicode: "👧🏿", id: "1f467-1f3ff", shortcuts: [":girl_tone5:"], category: 9 }
    ,{ unicode: "👨🏻", id: "1f468-1f3fb", shortcuts: [":man_tone1:"], category: 9 }
    ,{ unicode: "👨🏼", id: "1f468-1f3fc", shortcuts: [":man_tone2:"], category: 9 }
    ,{ unicode: "👨🏽", id: "1f468-1f3fd", shortcuts: [":man_tone3:"], category: 9 }
    ,{ unicode: "👨🏾", id: "1f468-1f3fe", shortcuts: [":man_tone4:"], category: 9 }
    ,{ unicode: "👨🏿", id: "1f468-1f3ff", shortcuts: [":man_tone5:"], category: 9 }    
    ,{ unicode: "👩🏻", id: "1f469-1f3fb", shortcuts: [":woman_tone1:"], category: 9 }
    ,{ unicode: "👩🏼", id: "1f469-1f3fc", shortcuts: [":woman_tone2:"], category: 9 }
    ,{ unicode: "👩🏽", id: "1f469-1f3fd", shortcuts: [":woman_tone3:"], category: 9 }
    ,{ unicode: "👩🏾", id: "1f469-1f3fe", shortcuts: [":woman_tone4:"], category: 9 }
    ,{ unicode: "👩🏿", id: "1f469-1f3ff", shortcuts: [":woman_tone5:"], category: 9 }
    ,{ unicode: "👴🏻", id: "1f474-1f3fb", shortcuts: [":older_man_tone1:"], category: 9 }
    ,{ unicode: "👴🏼", id: "1f474-1f3fc", shortcuts: [":older_man_tone2:"], category: 9 }
    ,{ unicode: "👴🏽", id: "1f474-1f3fd", shortcuts: [":older_man_tone3:"], category: 9 }
    ,{ unicode: "👴🏾", id: "1f474-1f3fe", shortcuts: [":older_man_tone4:"], category: 9 }
    ,{ unicode: "👴🏿", id: "1f474-1f3ff", shortcuts: [":older_man_tone5:"], category: 9 }
    ,{ unicode: "👵🏻", id: "1f475-1f3fb", shortcuts: [":older_woman_tone1:"], category: 9 }
    ,{ unicode: "👵🏼", id: "1f475-1f3fc", shortcuts: [":older_woman_tone2:"], category: 9 }
    ,{ unicode: "👵🏽", id: "1f475-1f3fd", shortcuts: [":older_woman_tone3:"], category: 9 }
    ,{ unicode: "👵🏾", id: "1f475-1f3fe", shortcuts: [":older_woman_tone4:"], category: 9 }
    ,{ unicode: "👵🏿", id: "1f475-1f3ff", shortcuts: [":older_woman_tone5:"], category: 9 }
    ,{ unicode: "👶🏻", id: "1f476-1f3fb", shortcuts: [":baby_tone1:"], category: 9 }
    ,{ unicode: "👶🏼", id: "1f476-1f3fc", shortcuts: [":baby_tone2:"], category: 9 }
    ,{ unicode: "👶🏽", id: "1f476-1f3fd", shortcuts: [":baby_tone3:"], category: 9 }
    ,{ unicode: "👶🏾", id: "1f476-1f3fe", shortcuts: [":baby_tone4:"], category: 9 }
    ,{ unicode: "👶🏿", id: "1f476-1f3ff", shortcuts: [":baby_tone5:"], category: 9 }
    ,{ unicode: "👼🏻", id: "1f47c-1f3fb", shortcuts: [":angel_tone1:"], category: 9 }
    ,{ unicode: "👼🏼", id: "1f47c-1f3fc", shortcuts: [":angel_tone2:"], category: 9 }
    ,{ unicode: "👼🏽", id: "1f47c-1f3fd", shortcuts: [":angel_tone3:"], category: 9 }
    ,{ unicode: "👼🏾", id: "1f47c-1f3fe", shortcuts: [":angel_tone4:"], category: 9 }
    ,{ unicode: "👼🏿", id: "1f47c-1f3ff", shortcuts: [":angel_tone5:"], category: 9 }
    ,{ unicode: "👮🏻", id: "1f46e-1f3fb", shortcuts: [":cop_tone1:"], category: 9 }
    ,{ unicode: "👮🏼", id: "1f46e-1f3fc", shortcuts: [":cop_tone2:"], category: 9 }
    ,{ unicode: "👮🏽", id: "1f46e-1f3fd", shortcuts: [":cop_tone3:"], category: 9 }
    ,{ unicode: "👮🏾", id: "1f46e-1f3fe", shortcuts: [":cop_tone4:"], category: 9 }
    ,{ unicode: "👮🏿", id: "1f46e-1f3ff", shortcuts: ["cop:_tone5:"], category: 9 }
    ,{ unicode: "🕵🏻", id: "1f575-1f3fb", shortcuts: [":spy_tone1:"], category: 9 }
    ,{ unicode: "🕵🏼", id: "1f575-1f3fc", shortcuts: [":spy_tone2:"], category: 9 }
    ,{ unicode: "🕵🏽", id: "1f575-1f3fd", shortcuts: [":spy_tone3:"], category: 9 }
    ,{ unicode: "🕵🏾", id: "1f575-1f3fe", shortcuts: [":spy_tone4:"], category: 9 }
    ,{ unicode: "🕵🏿", id: "1f575-1f3ff", shortcuts: [":spy_tone5:"], category: 9 }
    ,{ unicode: "💂🏻", id: "1f482-1f3fb", shortcuts: [":guardsman_tone1:"], category: 9 }
    ,{ unicode: "💂🏼", id: "1f482-1f3fc", shortcuts: [":guardsman_tone2:"], category: 9 }
    ,{ unicode: "💂🏽", id: "1f482-1f3fd", shortcuts: [":guardsman_tone3:"], category: 9 }
    ,{ unicode: "💂🏾", id: "1f482-1f3fe", shortcuts: [":guardsman_tone4:"], category: 9 }
    ,{ unicode: "💂🏿", id: "1f482-1f3ff", shortcuts: [":guardsman_tone5:"], category: 9 }
    ,{ unicode: "👷🏻", id: "1f477-1f3fb", shortcuts: [":construction_worker_tone1:"], category: 9 }
    ,{ unicode: "👷🏼", id: "1f477-1f3fc", shortcuts: [":construction_worker_tone2:"], category: 9 }
    ,{ unicode: "👷🏽", id: "1f477-1f3fd", shortcuts: [":construction_worker_tone3:"], category: 9 }
    ,{ unicode: "👷🏾", id: "1f477-1f3fe", shortcuts: [":construction_worker_tone4:"], category: 9 }
    ,{ unicode: "👷🏿", id: "1f477-1f3ff", shortcuts: [":construction_worker_tone5:"], category: 9 }
    ,{ unicode: "👳🏻", id: "1f473-1f3fb", shortcuts: [":man_with_turban_tone1:"], category: 9 }
    ,{ unicode: "👳🏼", id: "1f473-1f3fc", shortcuts: [":man_with_turban_tone2:"], category: 9 }
    ,{ unicode: "👳🏽", id: "1f473-1f3fd", shortcuts: [":man_with_turban_tone3:"], category: 9 }
    ,{ unicode: "👳🏾", id: "1f473-1f3fe", shortcuts: [":man_with_turban_tone4:"], category: 9 }
    ,{ unicode: "👳🏿", id: "1f473-1f3ff", shortcuts: [":man_with_turban_tone5:"], category: 9 }
    ,{ unicode: "👱🏻", id: "1f471-1f3fb", shortcuts: [":person_with_blond_hair_tone1:"], category: 9 }
    ,{ unicode: "👱🏼", id: "1f471-1f3fc", shortcuts: [":person_with_blond_hair_tone2:"], category: 9 }
    ,{ unicode: "👱🏽", id: "1f471-1f3fd", shortcuts: [":person_with_blond_hair_tone3:"], category: 9 }
    ,{ unicode: "👱🏾", id: "1f471-1f3fe", shortcuts: [":person_with_blond_hair_tone4:"], category: 9 }
    ,{ unicode: "👱🏿", id: "1f471-1f3ff", shortcuts: [":person_with_blond_hair_tone5:"], category: 9 }
    ,{ unicode: "🎅🏻", id: "1f385-1f3fb", shortcuts: [":santa_tone1:"], category: 9 }
    ,{ unicode: "🎅🏼", id: "1f385-1f3fc", shortcuts: [":santa_tone2:"], category: 9 }
    ,{ unicode: "🎅🏽", id: "1f385-1f3fd", shortcuts: [":santa_tone3:"], category: 9 }
    ,{ unicode: "🎅🏾", id: "1f385-1f3fe", shortcuts: [":santa_tone4:"], category: 9 }
    ,{ unicode: "🎅🏿", id: "1f385-1f3ff", shortcuts: ["santa:_tone5:"], category: 9 }
    ,{ unicode: "🤶🏻", id: "1f936-1f3fb", shortcuts: [":mrs_claus_tone1:"], category: 9 }
    ,{ unicode: "🤶🏼", id: "1f936-1f3fc", shortcuts: [":mrs_claus_tone2:"], category: 9 }
    ,{ unicode: "🤶🏽", id: "1f936-1f3fd", shortcuts: [":mrs_claus_tone3:"], category: 9 }
    ,{ unicode: "🤶🏾", id: "1f936-1f3fe", shortcuts: [":mrs_claus_tone4:"], category: 9 }
    ,{ unicode: "🤶🏿", id: "1f936-1f3ff", shortcuts: [":mrs_claus_tone5:"], category: 9 }
    ,{ unicode: "👸🏻", id: "1f478-1f3fb", shortcuts: [":princess_tone1:"], category: 9 }
    ,{ unicode: "👸🏼", id: "1f478-1f3fc", shortcuts: [":princess_tone2:"], category: 9 }
    ,{ unicode: "👸🏽", id: "1f478-1f3fd", shortcuts: [":princess_tone3:"], category: 9 }
    ,{ unicode: "👸🏾", id: "1f478-1f3fe", shortcuts: [":princess_tone4:"], category: 9 }
    ,{ unicode: "👸🏿", id: "1f478-1f3ff", shortcuts: [":princess_tone5:"], category: 9 }
    ,{ unicode: "🤴🏻", id: "1f934-1f3fb", shortcuts: [":prince_tone1:"], category: 9 }
    ,{ unicode: "🤴🏼", id: "1f934-1f3fc", shortcuts: [":prince_tone2:"], category: 9 }
    ,{ unicode: "🤴🏽", id: "1f934-1f3fd", shortcuts: [":prince_tone3:"], category: 9 }
    ,{ unicode: "🤴🏾", id: "1f934-1f3fe", shortcuts: [":prince_tone4:"], category: 9 }
    ,{ unicode: "🤴🏿", id: "1f934-1f3ff", shortcuts: [":prince_tone5:"], category: 9 }
    ,{ unicode: "👰🏻", id: "1f470-1f3fb", shortcuts: [":bride_with_veil_tone1:"], category: 9 }
    ,{ unicode: "👰🏼", id: "1f470-1f3fc", shortcuts: [":bride_with_veil_tone2:"], category: 9 }
    ,{ unicode: "👰🏽", id: "1f470-1f3fd", shortcuts: [":bride_with_veil_tone3:"], category: 9 }
    ,{ unicode: "👰🏾", id: "1f470-1f3fe", shortcuts: [":bride_with_veil_tone4:"], category: 9 }
    ,{ unicode: "👰🏿", id: "1f470-1f3ff", shortcuts: [":bride_with_veil_tone5:"], category: 9 }
    ,{ unicode: "🤵🏻", id: "1f935-1f3fb", shortcuts: [":man_in_tuxedo_tone1:"], category: 9 }
    ,{ unicode: "🤵🏼", id: "1f935-1f3fc", shortcuts: [":man_in_tuxedo_tone2:"], category: 9 }
    ,{ unicode: "🤵🏽", id: "1f935-1f3fd", shortcuts: [":man_in_tuxedo_tone3:"], category: 9 }
    ,{ unicode: "🤵🏾", id: "1f935-1f3fe", shortcuts: [":man_in_tuxedo_tone4:"], category: 9 }
    ,{ unicode: "🤵🏿", id: "1f935-1f3ff", shortcuts: [":man_in_tuxedo_tone5:"], category: 9 }
    ,{ unicode: "🤰🏻", id: "1f930-1f3fb", shortcuts: [":pregnant_woman_tone1:"], category: 9 }
    ,{ unicode: "🤰🏼", id: "1f930-1f3fc", shortcuts: [":pregnant_woman_tone2:"], category: 9 }
    ,{ unicode: "🤰🏽", id: "1f930-1f3fd", shortcuts: [":pregnant_woman_tone3:"], category: 9 }
    ,{ unicode: "🤰🏾", id: "1f930-1f3fe", shortcuts: [":pregnant_woman_tone4:"], category: 9 }
    ,{ unicode: "🤰🏿", id: "1f930-1f3ff", shortcuts: [":pregnant_woman_tone5:"], category: 9 }
    ,{ unicode: "👲🏻", id: "1f472-1f3fb", shortcuts: [":man_with_gua_pi_mao_tone1:"], category: 9 }
    ,{ unicode: "👲🏼", id: "1f472-1f3fc", shortcuts: [":man_with_gua_pi_mao_tone2:"], category: 9 }
    ,{ unicode: "👲🏽", id: "1f472-1f3fd", shortcuts: [":man_with_gua_pi_mao_tone3:"], category: 9 }
    ,{ unicode: "👲🏾", id: "1f472-1f3fe", shortcuts: [":man_with_gua_pi_mao_tone4:"], category: 9 }
    ,{ unicode: "👲🏿", id: "1f472-1f3ff", shortcuts: [":man_with_gua_pi_mao_tone5:"], category: 9 }
    ,{ unicode: "🙍🏻", id: "1f64d-1f3fb", shortcuts: [":person_frowning_tone1:"], category: 9 }
    ,{ unicode: "🙍🏼", id: "1f64d-1f3fc", shortcuts: [":person_frowning_tone2:"], category: 9 }
    ,{ unicode: "🙍🏽", id: "1f64d-1f3fd", shortcuts: [":person_frowning_tone3:"], category: 9 }
    ,{ unicode: "🙍🏾", id: "1f64d-1f3fe", shortcuts: [":person_frowning_tone4:"], category: 9 }
    ,{ unicode: "🙍🏿", id: "1f64d-1f3ff", shortcuts: [":person_frowning_tone5:"], category: 9 }
    ,{ unicode: "🙎🏻", id: "1f64e-1f3fb", shortcuts: [":person_with_pouting_face_tone1:"], category: 9 }
    ,{ unicode: "🙎🏼", id: "1f64e-1f3fc", shortcuts: [":person_with_pouting_face_tone2:"], category: 9 }
    ,{ unicode: "🙎🏽", id: "1f64e-1f3fd", shortcuts: [":person_with_pouting_face_tone3:"], category: 9 }
    ,{ unicode: "🙎🏾", id: "1f64e-1f3fe", shortcuts: [":person_with_pouting_face_tone4:"], category: 9 }
    ,{ unicode: "🙎🏿", id: "1f64e-1f3ff", shortcuts: [":person_with_pouting_face_tone5:"], category: 9 }
    ,{ unicode: "🙅🏻", id: "1f645-1f3fb", shortcuts: [":no_good_tone1:"], category: 9 }
    ,{ unicode: "🙅🏼", id: "1f645-1f3fc", shortcuts: [":no_good_tone2:"], category: 9 }
    ,{ unicode: "🙅🏽", id: "1f645-1f3fd", shortcuts: [":no_good_tone3:"], category: 9 }
    ,{ unicode: "🙅🏾", id: "1f645-1f3fe", shortcuts: [":no_good_tone4:"], category: 9 }
    ,{ unicode: "🙅🏿", id: "1f645-1f3ff", shortcuts: [":no_good_tone5:"], category: 9 }
    ,{ unicode: "🙆🏻", id: "1f646-1f3fb", shortcuts: [":ok_woman_tone1:"], category: 9 }
    ,{ unicode: "🙆🏼", id: "1f646-1f3fc", shortcuts: [":ok_woman_tone2:"], category: 9 }
    ,{ unicode: "🙆🏽", id: "1f646-1f3fd", shortcuts: [":ok_woman_tone3:"], category: 9 }
    ,{ unicode: "🙆🏾", id: "1f646-1f3fe", shortcuts: [":ok_woman_tone4:"], category: 9 }
    ,{ unicode: "🙆🏿", id: "1f646-1f3ff", shortcuts: [":ok_woman_tone5:"], category: 9 }
    ,{ unicode: "💁🏻", id: "1f481-1f3fb", shortcuts: [":information_desk_person_tone1:"], category: 9 }
    ,{ unicode: "💁🏼", id: "1f481-1f3fc", shortcuts: [":information_desk_person_tone2:"], category: 9 }
    ,{ unicode: "💁🏽", id: "1f481-1f3fd", shortcuts: [":information_desk_person_tone3:"], category: 9 }
    ,{ unicode: "💁🏾", id: "1f481-1f3fe", shortcuts: [":information_desk_person_tone4:"], category: 9 }
    ,{ unicode: "💁🏿", id: "1f481-1f3ff", shortcuts: [":information_desk_person_tone5:"], category: 9 }
    ,{ unicode: "🙋🏻", id: "1f64b-1f3fb", shortcuts: [":raising_hand_tone1:"], category: 9 }
    ,{ unicode: "🙋🏼", id: "1f64b-1f3fc", shortcuts: [":raising_hand_tone2:"], category: 9 }
    ,{ unicode: "🙋🏽", id: "1f64b-1f3fd", shortcuts: [":raising_hand_tone3:"], category: 9 }
    ,{ unicode: "🙋🏾", id: "1f64b-1f3fe", shortcuts: [":raising_hand_tone4:"], category: 9 }
    ,{ unicode: "🙋🏿", id: "1f64b-1f3ff", shortcuts: [":raising_hand_tone5:"], category: 9 }
    ,{ unicode: "🙇🏻", id: "1f647-1f3fb", shortcuts: [":bow_tone1:"], category: 9 }
    ,{ unicode: "🙇🏼", id: "1f647-1f3fc", shortcuts: [":bow_tone2:"], category: 9 }
    ,{ unicode: "🙇🏽", id: "1f647-1f3fd", shortcuts: [":bow_tone3:"], category: 9 }
    ,{ unicode: "🙇🏾", id: "1f647-1f3fe", shortcuts: [":bow_tone4:"], category: 9 }
    ,{ unicode: "🙇🏿", id: "1f647-1f3ff", shortcuts: [":bow_tone5:"], category: 9 }
    ,{ unicode: "🤦🏻", id: "1f926-1f3fb", shortcuts: [":face_palm_tone1:"], category: 9 }
    ,{ unicode: "🤦🏼", id: "1f926-1f3fc", shortcuts: [":face_palm_tone2:"], category: 9 }
    ,{ unicode: "🤦🏽", id: "1f926-1f3fd", shortcuts: [":face_palm_tone3:"], category: 9 }
    ,{ unicode: "🤦🏾", id: "1f926-1f3fe", shortcuts: [":face_palm_tone4:"], category: 9 }
    ,{ unicode: "🤦🏿", id: "1f926-1f3ff", shortcuts: [":face_palm_tone5:"], category: 9 }
    ,{ unicode: "🤷🏻", id: "1f937-1f3fb", shortcuts: [":shrug_tone1:"], category: 9 }
    ,{ unicode: "🤷🏼", id: "1f937-1f3fc", shortcuts: [":shrug_tone2:"], category: 9 }
    ,{ unicode: "🤷🏽", id: "1f937-1f3fd", shortcuts: [":shrug_tone3:"], category: 9 }
    ,{ unicode: "🤷🏾", id: "1f937-1f3fe", shortcuts: [":shrug_tone4:"], category: 9 }
    ,{ unicode: "🤷🏿", id: "1f937-1f3ff", shortcuts: [":shrug_tone5:"], category: 9 }
    ,{ unicode: "💆🏻", id: "1f486-1f3fb", shortcuts: [":massage_tone1:"], category: 9 }
    ,{ unicode: "💆🏼", id: "1f486-1f3fc", shortcuts: [":massage_tone2:"], category: 9 }
    ,{ unicode: "💆🏽", id: "1f486-1f3fd", shortcuts: [":massage_tone3:"], category: 9 }
    ,{ unicode: "💆🏾", id: "1f486-1f3fe", shortcuts: [":massage_tone4:"], category: 9 }
    ,{ unicode: "💆🏿", id: "1f486-1f3ff", shortcuts: [":massage_tone5:"], category: 9 }
    ,{ unicode: "💇🏻", id: "1f487-1f3fb", shortcuts: [":haircut_tone1:"], category: 9 }
    ,{ unicode: "💇🏼", id: "1f487-1f3fc", shortcuts: [":haircut_tone2:"], category: 9 }
    ,{ unicode: "💇🏽", id: "1f487-1f3fd", shortcuts: [":haircut_tone3:"], category: 9 }
    ,{ unicode: "💇🏾", id: "1f487-1f3fe", shortcuts: [":haircut_tone4:"], category: 9 }
    ,{ unicode: "💇🏿", id: "1f487-1f3ff", shortcuts: [":haircut_tone5:"], category: 9 }
    ,{ unicode: "🚶🏻", id: "1f6b6-1f3fb", shortcuts: [":walking_tone1:"], category: 9 }
    ,{ unicode: "🚶🏼", id: "1f6b6-1f3fc", shortcuts: [":walking_tone2:"], category: 9 }
    ,{ unicode: "🚶🏽", id: "1f6b6-1f3fd", shortcuts: [":walking_tone3:"], category: 9 }
    ,{ unicode: "🚶🏾", id: "1f6b6-1f3fe", shortcuts: [":walking_tone4:"], category: 9 }
    ,{ unicode: "🚶🏿", id: "1f6b6-1f3ff", shortcuts: [":walking_tone5:"], category: 9 }
    ,{ unicode: "🏃🏻", id: "1f3c3-1f3fb", shortcuts: [":runner_tone1:"], category: 9 }
    ,{ unicode: "🏃🏼", id: "1f3c3-1f3fc", shortcuts: [":runner_tone2:"], category: 9 }
    ,{ unicode: "🏃🏽", id: "1f3c3-1f3fd", shortcuts: [":runner_tone3:"], category: 9 }
    ,{ unicode: "🏃🏾", id: "1f3c3-1f3fe", shortcuts: [":runner_tone4:"], category: 9 }
    ,{ unicode: "🏃🏿", id: "1f3c3-1f3ff", shortcuts: [":runner_tone5:"], category: 9 }
    ,{ unicode: "💃🏻", id: "1f483-1f3fb", shortcuts: [":dancer_tone1:"], category: 9 }
    ,{ unicode: "💃🏼", id: "1f483-1f3fc", shortcuts: [":dancer_tone2:"], category: 9 }
    ,{ unicode: "💃🏽", id: "1f483-1f3fd", shortcuts: [":dancer_tone3:"], category: 9 }
    ,{ unicode: "💃🏾", id: "1f483-1f3fe", shortcuts: [":dancer_tone4:"], category: 9 }
    ,{ unicode: "💃🏿", id: "1f483-1f3ff", shortcuts: [":dancer_tone5:"], category: 9 }
    ,{ unicode: "🕺🏻", id: "1f57a-1f3fb", shortcuts: [":man_dancing_tone1:"], category: 9 }
    ,{ unicode: "🕺🏼", id: "1f57a-1f3fc", shortcuts: [":man_dancing_tone2:"], category: 9 }
    ,{ unicode: "🕺🏽", id: "1f57a-1f3fd", shortcuts: [":man_dancing_tone3:"], category: 9 }
    ,{ unicode: "🕺🏾", id: "1f57a-1f3fe", shortcuts: [":man_dancing_tone4:"], category: 9 }
    ,{ unicode: "🕺🏿", id: "1f57a-1f3ff", shortcuts: [":man_dancing_tone5:"], category: 9 }
    ,{ unicode: "🏇🏻", id: "1f3c7-1f3fb", shortcuts: [":horse_racing_tone1:"], category: 9 }
    ,{ unicode: "🏇🏼", id: "1f3c7-1f3fc", shortcuts: [":horse_racing_tone2:"], category: 9 }
    ,{ unicode: "🏇🏽", id: "1f3c7-1f3fd", shortcuts: [":horse_racing_tone3:"], category: 9 }
    ,{ unicode: "🏇🏾", id: "1f3c7-1f3fe", shortcuts: [":horse_racing_tone4:"], category: 9 }
    ,{ unicode: "🏇🏿", id: "1f3c7-1f3ff", shortcuts: [":horse_racing_tone5:"], category: 9 }
    ,{ unicode: "🏄🏻", id: "1f3c4-1f3fb", shortcuts: [":surfer_tone1:"], category: 9 }
    ,{ unicode: "🏄🏼", id: "1f3c4-1f3fc", shortcuts: [":surfer_tone2:"], category: 9 }
    ,{ unicode: "🏄🏽", id: "1f3c4-1f3fd", shortcuts: [":surfer_tone3:"], category: 9 }
    ,{ unicode: "🏄🏾", id: "1f3c4-1f3fe", shortcuts: [":surfer_tone4:"], category: 9 }
    ,{ unicode: "🏄🏿", id: "1f3c4-1f3ff", shortcuts: [":surfer_tone5:"], category: 9 }
    ,{ unicode: "🚣🏻", id: "1f6a3-1f3fb", shortcuts: [":rowboat_tone1:"], category: 9 }
    ,{ unicode: "🚣🏼", id: "1f6a3-1f3fc", shortcuts: [":rowboat_tone2:"], category: 9 }
    ,{ unicode: "🚣🏽", id: "1f6a3-1f3fd", shortcuts: [":rowboat_tone3:"], category: 9 }
    ,{ unicode: "🚣🏾", id: "1f6a3-1f3fe", shortcuts: [":rowboat_tone4:"], category: 9 }
    ,{ unicode: "🚣🏿", id: "1f6a3-1f3ff", shortcuts: [":rowboat_tone5:"], category: 9 }
    ,{ unicode: "🏊🏻", id: "1f3ca-1f3fb", shortcuts: [":swimmer_tone1:"], category: 9 }
    ,{ unicode: "🏊🏼", id: "1f3ca-1f3fc", shortcuts: [":swimmer_tone2:"], category: 9 }
    ,{ unicode: "🏊🏽", id: "1f3ca-1f3fd", shortcuts: [":swimmer_tone3:"], category: 9 }
    ,{ unicode: "🏊🏾", id: "1f3ca-1f3fe", shortcuts: [":swimmer_tone4:"], category: 9 }
    ,{ unicode: "🏊🏿", id: "1f3ca-1f3ff", shortcuts: [":swimmer_tone5:"], category: 9 }
    ,{ unicode: "⛹🏻", id: "26f9-1f3fb", shortcuts: [":basketball_player_tone1:"], category: 9 }
    ,{ unicode: "⛹🏼", id: "26f9-1f3fc", shortcuts: [":basketball_player_tone2:"], category: 9 }
    ,{ unicode: "⛹🏽", id: "26f9-1f3fd", shortcuts: [":basketball_player_tone3:"], category: 9 }
    ,{ unicode: "⛹🏾", id: "26f9-1f3fe", shortcuts: [":basketball_player_tone4:"], category: 9 }
    ,{ unicode: "⛹🏿", id: "26f9-1f3ff", shortcuts: [":basketball_player_tone5:"], category: 9 }
    ,{ unicode: "🏋🏻", id: "1f3cb-1f3fb", shortcuts: [":lifter_tone1:"], category: 9 }
    ,{ unicode: "🏋🏼", id: "1f3cb-1f3fc", shortcuts: [":lifter_tone2:"], category: 9 }
    ,{ unicode: "🏋🏽", id: "1f3cb-1f3fd", shortcuts: [":lifter_tone3:"], category: 9 }
    ,{ unicode: "🏋🏾", id: "1f3cb-1f3fe", shortcuts: [":lifter_tone4:"], category: 9 }
    ,{ unicode: "🏋🏿", id: "1f3cb-1f3ff", shortcuts: [":lifter_tone5:"], category: 9 }
    ,{ unicode: "🚴🏻", id: "1f6b4-1f3fb", shortcuts: [":bicyclist_tone1:"], category: 9 }
    ,{ unicode: "🚴🏼", id: "1f6b4-1f3fc", shortcuts: [":bicyclist_tone2:"], category: 9 }
    ,{ unicode: "🚴🏽", id: "1f6b4-1f3fd", shortcuts: [":bicyclist_tone3:"], category: 9 }
    ,{ unicode: "🚴🏾", id: "1f6b4-1f3fe", shortcuts: [":bicyclist_tone4:"], category: 9 }
    ,{ unicode: "🚴🏿", id: "1f6b4-1f3ff", shortcuts: [":bicyclist_tone5:"], category: 9 }
    ,{ unicode: "🚵🏻", id: "1f6b5-1f3fb", shortcuts: [":mountain_bicyclist_tone1:"], category: 9 }
    ,{ unicode: "🚵🏼", id: "1f6b5-1f3fc", shortcuts: [":mountain_bicyclist_tone2:"], category: 9 }
    ,{ unicode: "🚵🏽", id: "1f6b5-1f3fd", shortcuts: [":mountain_bicyclist_tone3:"], category: 9 }
    ,{ unicode: "🚵🏾", id: "1f6b5-1f3fe", shortcuts: [":mountain_bicyclist_tone4:"], category: 9 }
    ,{ unicode: "🚵🏿", id: "1f6b5-1f3ff", shortcuts: [":mountain_bicyclist_tone5:"], category: 9 }
    ,{ unicode: "🤸🏻", id: "1f938-1f3fb", shortcuts: [":cartwheel_tone1:"], category: 9 }
    ,{ unicode: "🤸🏼", id: "1f938-1f3fc", shortcuts: [":cartwheel_tone2:"], category: 9 }
    ,{ unicode: "🤸🏽", id: "1f938-1f3fd", shortcuts: [":cartwheel_tone3:"], category: 9 }
    ,{ unicode: "🤸🏾", id: "1f938-1f3fe", shortcuts: [":cartwheel_tone4:"], category: 9 }
    ,{ unicode: "🤸🏿", id: "1f938-1f3ff", shortcuts: [":cartwheel_tone5:"], category: 9 }    
    //,{ unicode: "🤼🏻", id: "1f93c-1f3fb", shortcuts: [":wrestlers_tone1:"], category: 9 } // :wrestlers_XXX: - no PNG available in Apple icon set on emoji.codes 
    //,{ unicode: "🤼🏼", id: "1f93c-1f3fc", shortcuts: [":wrestlers_tone2:"], category: 9 }
    //,{ unicode: "🤼🏽", id: "1f93c-1f3fd", shortcuts: [":wrestlers_tone3:"], category: 9 }
    //,{ unicode: "🤼🏾", id: "1f93c-1f3fe", shortcuts: [":wrestlers_tone4:"], category: 9 }
    //,{ unicode: "🤼🏿", id: "1f93c-1f3ff", shortcuts: [":wrestlers_tone5:"], category: 9 }
    ,{ unicode: "🤽🏻", id: "1f93d-1f3fb", shortcuts: [":water_polo_tone1:"], category: 9 }
    ,{ unicode: "🤽🏼", id: "1f93d-1f3fc", shortcuts: [":water_polo_tone2:"], category: 9 }
    ,{ unicode: "🤽🏽", id: "1f93d-1f3fd", shortcuts: [":water_polo_tone3:"], category: 9 }
    ,{ unicode: "🤽🏾", id: "1f93d-1f3fe", shortcuts: [":water_polo_tone4:"], category: 9 }
    ,{ unicode: "🤽🏿", id: "1f93d-1f3ff", shortcuts: [":water_polo_tone5:"], category: 9 }
    ,{ unicode: "🤾🏻", id: "1f93e-1f3fb", shortcuts: [":handball_tone1:"], category: 9 }
    ,{ unicode: "🤾🏼", id: "1f93e-1f3fc", shortcuts: [":handball_tone2:"], category: 9 }
    ,{ unicode: "🤾🏽", id: "1f93e-1f3fd", shortcuts: [":handball_tone3:"], category: 9 }
    ,{ unicode: "🤾🏾", id: "1f93e-1f3fe", shortcuts: [":handball_tone4:"], category: 9 }
    ,{ unicode: "🤾🏿", id: "1f93e-1f3ff", shortcuts: [":handball_tone5:"], category: 9 }
    ,{ unicode: "🤹🏻", id: "1f939-1f3fb", shortcuts: [":juggling_tone1:"], category: 9 }
    ,{ unicode: "🤹🏼", id: "1f939-1f3fc", shortcuts: [":juggling_tone2:"], category: 9 }
    ,{ unicode: "🤹🏽", id: "1f939-1f3fd", shortcuts: [":juggling_tone3:"], category: 9 }
    ,{ unicode: "🤹🏾", id: "1f939-1f3fe", shortcuts: [":juggling_tone4:"], category: 9 }
    ,{ unicode: "🤹🏿", id: "1f939-1f3ff", shortcuts: [":juggling_tone5:"], category: 9 }
    ,{ unicode: "💪🏻", id: "1f4aa-1f3fb", shortcuts: [":muscle_tone1:"], category: 9 }
    ,{ unicode: "💪🏼", id: "1f4aa-1f3fc", shortcuts: [":muscle_tone2:"], category: 9 }
    ,{ unicode: "💪🏽", id: "1f4aa-1f3fd", shortcuts: [":muscle_tone3:"], category: 9 }
    ,{ unicode: "💪🏾", id: "1f4aa-1f3fe", shortcuts: [":muscle_tone4:"], category: 9 }
    ,{ unicode: "💪🏿", id: "1f4aa-1f3ff", shortcuts: [":muscle_tone5:"], category: 9 }
    ,{ unicode: "🤳🏻", id: "1f933-1f3fb", shortcuts: [":selfie_tone1:"], category: 9 }
    ,{ unicode: "🤳🏼", id: "1f933-1f3fc", shortcuts: [":selfie_tone2:"], category: 9 }
    ,{ unicode: "🤳🏽", id: "1f933-1f3fd", shortcuts: [":selfie_tone3:"], category: 9 }
    ,{ unicode: "🤳🏾", id: "1f933-1f3fe", shortcuts: [":selfie_tone4:"], category: 9 }
    ,{ unicode: "🤳🏿", id: "1f933-1f3ff", shortcuts: [":selfie_tone5:"], category: 9 }
    ,{ unicode: "👈🏻", id: "1f448-1f3fb", shortcuts: [":point_left_tone1:"], category: 9 }
    ,{ unicode: "👈🏼", id: "1f448-1f3fc", shortcuts: [":point_left_tone2:"], category: 9 }
    ,{ unicode: "👈🏽", id: "1f448-1f3fd", shortcuts: [":point_left_tone3:"], category: 9 }
    ,{ unicode: "👈🏾", id: "1f448-1f3fe", shortcuts: [":point_left_tone4:"], category: 9 }
    ,{ unicode: "👈🏿", id: "1f448-1f3ff", shortcuts: [":point_left_tone5:"], category: 9 }
    ,{ unicode: "👉🏻", id: "1f449-1f3fb", shortcuts: [":point_right_tone1:"], category: 9 }
    ,{ unicode: "👉🏼", id: "1f449-1f3fc", shortcuts: [":point_right_tone2:"], category: 9 }
    ,{ unicode: "👉🏽", id: "1f449-1f3fd", shortcuts: [":point_right_tone3:"], category: 9 }
    ,{ unicode: "👉🏾", id: "1f449-1f3fe", shortcuts: [":point_right_tone4:"], category: 9 }
    ,{ unicode: "👉🏿", id: "1f449-1f3ff", shortcuts: [":point_right_tone5:"], category: 9 }
    ,{ unicode: "☝🏻", id: "261d-1f3fb", shortcuts: [":point_up_tone1:"], category: 9 }
    ,{ unicode: "☝🏼", id: "261d-1f3fc", shortcuts: [":point_up_tone2:"], category: 9 }
    ,{ unicode: "☝🏽", id: "261d-1f3fd", shortcuts: [":point_up_tone3:"], category: 9 }
    ,{ unicode: "☝🏾", id: "261d-1f3fe", shortcuts: [":point_up_tone4:"], category: 9 }
    ,{ unicode: "☝🏿", id: "261d-1f3ff", shortcuts: [":point_up_tone5:"], category: 9 }
    ,{ unicode: "👆🏻", id: "1f446-1f3fb", shortcuts: [":point_up_2_tone1:"], category: 9 }
    ,{ unicode: "👆🏼", id: "1f446-1f3fc", shortcuts: [":point_up_2_tone2:"], category: 9 }
    ,{ unicode: "👆🏽", id: "1f446-1f3fd", shortcuts: [":point_up_2_tone3:"], category: 9 }
    ,{ unicode: "👆🏾", id: "1f446-1f3fe", shortcuts: [":point_up_2_tone4:"], category: 9 }
    ,{ unicode: "👆🏿", id: "1f446-1f3ff", shortcuts: [":point_up_2_tone5:"], category: 9 }
    ,{ unicode: "🖕🏻", id: "1f595-1f3fb", shortcuts: [":middle_finger_tone1:"], category: 9 }
    ,{ unicode: "🖕🏼", id: "1f595-1f3fc", shortcuts: [":middle_finger_tone2:"], category: 9 }
    ,{ unicode: "🖕🏽", id: "1f595-1f3fd", shortcuts: [":middle_finger_tone3:"], category: 9 }
    ,{ unicode: "🖕🏾", id: "1f595-1f3fe", shortcuts: [":middle_finger_tone4:"], category: 9 }
    ,{ unicode: "🖕🏿", id: "1f595-1f3ff", shortcuts: [":middle_finger_tone5:"], category: 9 }
    ,{ unicode: "👇🏻", id: "1f447-1f3fb", shortcuts: [":point_down_tone1:"], category: 9 }
    ,{ unicode: "👇🏼", id: "1f447-1f3fc", shortcuts: [":point_down_tone2:"], category: 9 }
    ,{ unicode: "👇🏽", id: "1f447-1f3fd", shortcuts: [":point_down_tone3:"], category: 9 }
    ,{ unicode: "👇🏾", id: "1f447-1f3fe", shortcuts: [":point_down_tone4:"], category: 9 }
    ,{ unicode: "👇🏿", id: "1f447-1f3ff", shortcuts: [":point_down_tone5:"], category: 9 }
    ,{ unicode: "✌🏻", id: "270c-1f3fb", shortcuts: [":v_tone1:"], category: 9 }
    ,{ unicode: "✌🏼", id: "270c-1f3fc", shortcuts: [":v_tone2:"], category: 9 }
    ,{ unicode: "✌🏽", id: "270c-1f3fd", shortcuts: [":v_tone3:"], category: 9 }
    ,{ unicode: "✌🏾", id: "270c-1f3fe", shortcuts: [":v_tone4:"], category: 9 }
    ,{ unicode: "✌🏿", id: "270c-1f3ff", shortcuts: [":v_tone5:"], category: 9 }
    ,{ unicode: "🤞🏻", id: "1f91e-1f3fb", shortcuts: [":fingers_crossed_tone1:"], category: 9 }
    ,{ unicode: "🤞🏼", id: "1f91e-1f3fc", shortcuts: [":fingers_crossed_tone2:"], category: 9 }
    ,{ unicode: "🤞🏽", id: "1f91e-1f3fd", shortcuts: [":fingers_crossed_tone3:"], category: 9 }
    ,{ unicode: "🤞🏾", id: "1f91e-1f3fe", shortcuts: [":fingers_crossed_tone4:"], category: 9 }
    ,{ unicode: "🤞🏿", id: "1f91e-1f3ff", shortcuts: [":fingers_crossed_tone5:"], category: 9 }
    ,{ unicode: "🖖🏻", id: "1f596-1f3fb", shortcuts: [":vulcan_tone1:"], category: 9 }
    ,{ unicode: "🖖🏼", id: "1f596-1f3fc", shortcuts: [":vulcan_tone2:"], category: 9 }
    ,{ unicode: "🖖🏽", id: "1f596-1f3fd", shortcuts: [":vulcan_tone3:"], category: 9 }
    ,{ unicode: "🖖🏾", id: "1f596-1f3fe", shortcuts: [":vulcan_tone4:"], category: 9 }
    ,{ unicode: "🖖🏿", id: "1f596-1f3ff", shortcuts: [":vulcan_tone5:"], category: 9 }
    ,{ unicode: "🤘🏻", id: "1f918-1f3fb", shortcuts: [":metal_tone1:"], category: 9 }
    ,{ unicode: "🤘🏼", id: "1f918-1f3fc", shortcuts: [":metal_tone2:"], category: 9 }
    ,{ unicode: "🤘🏽", id: "1f918-1f3fd", shortcuts: [":metal_tone3:"], category: 9 }
    ,{ unicode: "🤘🏾", id: "1f918-1f3fe", shortcuts: [":metal_tone4:"], category: 9 }
    ,{ unicode: "🤘🏿", id: "1f918-1f3ff", shortcuts: [":metal_tone5:"], category: 9 }
    ,{ unicode: "🤙🏻", id: "1f919-1f3fb", shortcuts: [":call_me_tone1:"], category: 9 }
    ,{ unicode: "🤙🏼", id: "1f919-1f3fc", shortcuts: [":call_me_tone2:"], category: 9 }
    ,{ unicode: "🤙🏽", id: "1f919-1f3fd", shortcuts: [":call_me_tone3:"], category: 9 }
    ,{ unicode: "🤙🏾", id: "1f919-1f3fe", shortcuts: [":call_me_tone4:"], category: 9 }
    ,{ unicode: "🤙🏿", id: "1f919-1f3ff", shortcuts: [":call_me_tone5:"], category: 9 }
    ,{ unicode: "🖐🏻", id: "1f590-1f3fb", shortcuts: [":hand_splayed_tone1:"], category: 9 }
    ,{ unicode: "🖐🏼", id: "1f590-1f3fc", shortcuts: [":hand_splayed_tone2:"], category: 9 }
    ,{ unicode: "🖐🏽", id: "1f590-1f3fd", shortcuts: [":hand_splayed_tone3:"], category: 9 }
    ,{ unicode: "🖐🏾", id: "1f590-1f3fe", shortcuts: [":hand_splayed_tone4:"], category: 9 }
    ,{ unicode: "🖐🏿", id: "1f590-1f3ff", shortcuts: [":hand_splayed_tone5:"], category: 9 }
    ,{ unicode: "✋🏻", id: "270b-1f3fb", shortcuts: [":raised_hand_tone1:"], category: 9 }
    ,{ unicode: "✋🏼", id: "270b-1f3fc", shortcuts: [":raised_hand_tone2:"], category: 9 }
    ,{ unicode: "✋🏽", id: "270b-1f3fd", shortcuts: [":raised_hand_tone3:"], category: 9 }
    ,{ unicode: "✋🏾", id: "270b-1f3fe", shortcuts: [":raised_hand_tone4:"], category: 9 }
    ,{ unicode: "✋🏿", id: "270b-1f3ff", shortcuts: [":raised_hand_tone5:"], category: 9 }
    ,{ unicode: "👌🏻", id: "1f44c-1f3fb", shortcuts: [":ok_hand_tone1:"], category: 9 }
    ,{ unicode: "👌🏼", id: "1f44c-1f3fc", shortcuts: [":ok_hand_tone2:"], category: 9 }
    ,{ unicode: "👌🏽", id: "1f44c-1f3fd", shortcuts: [":ok_hand_tone3:"], category: 9 }
    ,{ unicode: "👌🏾", id: "1f44c-1f3fe", shortcuts: [":ok_hand_tone4:"], category: 9 }
    ,{ unicode: "👌🏿", id: "1f44c-1f3ff", shortcuts: [":ok_hand_tone5:"], category: 9 }
    ,{ unicode: "👍🏻", id: "1f44d-1f3fb", shortcuts: [":thumbsup_tone1:"], category: 9 }
    ,{ unicode: "👍🏼", id: "1f44d-1f3fc", shortcuts: [":thumbsup_tone2:"], category: 9 }
    ,{ unicode: "👍🏽", id: "1f44d-1f3fd", shortcuts: [":thumbsup_tone3:"], category: 9 }
    ,{ unicode: "👍🏾", id: "1f44d-1f3fe", shortcuts: [":thumbsup_tone4:"], category: 9 }
    ,{ unicode: "👍🏿", id: "1f44d-1f3ff", shortcuts: [":thumbsup_tone5:"], category: 9 }
    ,{ unicode: "👎🏻", id: "1f44e-1f3fb", shortcuts: [":thumbsdown_tone1:"], category: 9 }
    ,{ unicode: "👎🏼", id: "1f44e-1f3fc", shortcuts: [":thumbsdown_tone2:"], category: 9 }
    ,{ unicode: "👎🏽", id: "1f44e-1f3fd", shortcuts: [":thumbsdown_tone3:"], category: 9 }
    ,{ unicode: "👎🏾", id: "1f44e-1f3fe", shortcuts: [":thumbsdown_tone4:"], category: 9 }
    ,{ unicode: "👎🏿", id: "1f44e-1f3ff", shortcuts: [":thumbsdown_tone5:"], category: 9 }
    ,{ unicode: "✊🏻", id: "270a-1f3fb", shortcuts: [":fist_tone1:"], category: 9 }
    ,{ unicode: "✊🏼", id: "270a-1f3fc", shortcuts: [":fist_tone2:"], category: 9 }
    ,{ unicode: "✊🏽", id: "270a-1f3fd", shortcuts: [":fist_tone3:"], category: 9 }
    ,{ unicode: "✊🏾", id: "270a-1f3fe", shortcuts: [":fist_tone4:"], category: 9 }
    ,{ unicode: "✊🏿", id: "270a-1f3ff", shortcuts: [":fist_tone5:"], category: 9 }
    ,{ unicode: "👊🏻", id: "1f44a-1f3fb", shortcuts: [":punch_tone1:"], category: 9 }
    ,{ unicode: "👊🏼", id: "1f44a-1f3fc", shortcuts: [":punch_tone2:"], category: 9 }
    ,{ unicode: "👊🏽", id: "1f44a-1f3fd", shortcuts: [":punch_tone3:"], category: 9 }
    ,{ unicode: "👊🏾", id: "1f44a-1f3fe", shortcuts: [":punch_tone4:"], category: 9 }
    ,{ unicode: "👊🏿", id: "1f44a-1f3ff", shortcuts: [":punch_tone5:"], category: 9 }
    ,{ unicode: "🤛🏻", id: "1f91b-1f3fb", shortcuts: [":left_facing_fist_tone1:"], category: 9 }
    ,{ unicode: "🤛🏼", id: "1f91b-1f3fc", shortcuts: [":left_facing_fist_tone2:"], category: 9 }
    ,{ unicode: "🤛🏽", id: "1f91b-1f3fd", shortcuts: [":left_facing_fist_tone3:"], category: 9 }
    ,{ unicode: "🤛🏾", id: "1f91b-1f3fe", shortcuts: [":left_facing_fist_tone4:"], category: 9 }
    ,{ unicode: "🤛🏿", id: "1f91b-1f3ff", shortcuts: [":left_facing_fist_tone5:"], category: 9 }
    ,{ unicode: "🤜🏻", id: "1f91c-1f3fb", shortcuts: [":right_facing_fist_tone1:"], category: 9 }
    ,{ unicode: "🤜🏼", id: "1f91c-1f3fc", shortcuts: [":right_facing_fist_tone2:"], category: 9 }
    ,{ unicode: "🤜🏽", id: "1f91c-1f3fd", shortcuts: [":right_facing_fist_tone3:"], category: 9 }
    ,{ unicode: "🤜🏾", id: "1f91c-1f3fe", shortcuts: [":right_facing_fist_tone4:"], category: 9 }
    ,{ unicode: "🤜🏿", id: "1f91c-1f3ff", shortcuts: [":right_facing_fist_tone5:"], category: 9 }
    ,{ unicode: "🤚🏻", id: "1f91a-1f3fb", shortcuts: [":raised_back_of_hand_tone1:"], category: 9 }
    ,{ unicode: "🤚🏼", id: "1f91a-1f3fc", shortcuts: [":raised_back_of_hand_tone2:"], category: 9 }
    ,{ unicode: "🤚🏽", id: "1f91a-1f3fd", shortcuts: [":raised_back_of_hand_tone3:"], category: 9 }
    ,{ unicode: "🤚🏾", id: "1f91a-1f3fe", shortcuts: [":raised_back_of_hand_tone4:"], category: 9 }
    ,{ unicode: "🤚🏿", id: "1f91a-1f3ff", shortcuts: [":raised_back_of_hand_tone5:"], category: 9 }
    ,{ unicode: "👋🏻", id: "1f44b-1f3fb", shortcuts: [":wave_tone1:"], category: 9 }
    ,{ unicode: "👋🏼", id: "1f44b-1f3fc", shortcuts: [":wave_tone2:"], category: 9 }
    ,{ unicode: "👋🏽", id: "1f44b-1f3fd", shortcuts: [":wave_tone3:"], category: 9 }
    ,{ unicode: "👋🏾", id: "1f44b-1f3fe", shortcuts: [":wave_tone4:"], category: 9 }
    ,{ unicode: "👋🏿", id: "1f44b-1f3ff", shortcuts: [":wave_tone5:"], category: 9 }
    ,{ unicode: "👏🏻", id: "1f44f-1f3fb", shortcuts: [":clap_tone1:"], category: 9 }
    ,{ unicode: "👏🏼", id: "1f44f-1f3fc", shortcuts: [":clap_tone2:"], category: 9 }
    ,{ unicode: "👏🏽", id: "1f44f-1f3fd", shortcuts: [":clap_tone3:"], category: 9 }
    ,{ unicode: "👏🏾", id: "1f44f-1f3fe", shortcuts: [":clap_tone4:"], category: 9 }
    ,{ unicode: "👏🏿", id: "1f44f-1f3ff", shortcuts: [":clap_tone5:"], category: 9 }
    ,{ unicode: "✍🏻", id: "270d-1f3fb", shortcuts: [":writing_hand_tone1:"], category: 9 }
    ,{ unicode: "✍🏼", id: "270d-1f3fc", shortcuts: [":writing_hand_tone2:"], category: 9 }
    ,{ unicode: "✍🏽", id: "270d-1f3fd", shortcuts: [":writing_hand_tone3:"], category: 9 }
    ,{ unicode: "✍🏾", id: "270d-1f3fe", shortcuts: [":writing_hand_tone4:"], category: 9 }
    ,{ unicode: "✍🏿", id: "270d-1f3ff", shortcuts: [":writing_hand_tone5:"], category: 9 }
    ,{ unicode: "👐🏻", id: "1f450-1f3fb", shortcuts: [":open_hands_tone1:"], category: 9 }
    ,{ unicode: "👐🏼", id: "1f450-1f3fc", shortcuts: [":open_hands_tone2:"], category: 9 }
    ,{ unicode: "👐🏽", id: "1f450-1f3fd", shortcuts: [":open_hands_tone3:"], category: 9 }
    ,{ unicode: "👐🏾", id: "1f450-1f3fe", shortcuts: [":open_hands_tone4:"], category: 9 }
    ,{ unicode: "👐🏿", id: "1f450-1f3ff", shortcuts: [":open_hands_tone5:"], category: 9 }
    ,{ unicode: "🙌🏻", id: "1f64c-1f3fb", shortcuts: [":raised_hands_tone1:"], category: 9 }
    ,{ unicode: "🙌🏼", id: "1f64c-1f3fc", shortcuts: [":raised_hands_tone2:"], category: 9 }
    ,{ unicode: "🙌🏽", id: "1f64c-1f3fd", shortcuts: [":raised_hands_tone3:"], category: 9 }
    ,{ unicode: "🙌🏾", id: "1f64c-1f3fe", shortcuts: [":raised_hands_tone4:"], category: 9 }
    ,{ unicode: "🙌🏿", id: "1f64c-1f3ff", shortcuts: [":raised_hands_tone5:"], category: 9 }
    ,{ unicode: "🙏🏻", id: "1f64f-1f3fb", shortcuts: [":pray_tone1:"], category: 9 }
    ,{ unicode: "🙏🏼", id: "1f64f-1f3fc", shortcuts: [":pray_tone2:"], category: 9 }
    ,{ unicode: "🙏🏽", id: "1f64f-1f3fd", shortcuts: [":pray_tone3:"], category: 9 }
    ,{ unicode: "🙏🏾", id: "1f64f-1f3fe", shortcuts: [":pray_tone4:"], category: 9 }
    ,{ unicode: "🙏🏿", id: "1f64f-1f3ff", shortcuts: [":pray_tone5:"], category: 9 }
    //,{ unicode: "🤝🏻", id: "1f91d-1f3fb", shortcuts: [":handshake_tone1:"], category: 9 } // :handshake_XXX: - no PNG available in Apple icon set on emoji.codes 
    //,{ unicode: "🤝🏼", id: "1f91d-1f3fc", shortcuts: [":handshake_tone2:"], category: 9 }
    //,{ unicode: "🤝🏽", id: "1f91d-1f3fd", shortcuts: [":handshake_tone3:"], category: 9 }
    //,{ unicode: "🤝🏾", id: "1f91d-1f3fe", shortcuts: [":handshake_tone4:"], category: 9 }
    //,{ unicode: "🤝🏿", id: "1f91d-1f3ff", shortcuts: [":handshake_tone5:"], category: 9 }
    ,{ unicode: "💅🏻", id: "1f485-1f3fb", shortcuts: [":nail_care_tone1:"], category: 9 }
    ,{ unicode: "💅🏼", id: "1f485-1f3fc", shortcuts: [":nail_care_tone2:"], category: 9 }
    ,{ unicode: "💅🏽", id: "1f485-1f3fd", shortcuts: [":nail_care_tone3:"], category: 9 }
    ,{ unicode: "💅🏾", id: "1f485-1f3fe", shortcuts: [":nail_care_tone4:"], category: 9 }
    ,{ unicode: "💅🏿", id: "1f485-1f3ff", shortcuts: [":nail_care_tone5:"], category: 9 }
    ,{ unicode: "👂🏻", id: "1f442-1f3fb", shortcuts: [":ear_tone1:"], category: 9 }
    ,{ unicode: "👂🏼", id: "1f442-1f3fc", shortcuts: [":ear_tone2:"], category: 9 }
    ,{ unicode: "👂🏽", id: "1f442-1f3fd", shortcuts: [":ear_tone3:"], category: 9 }
    ,{ unicode: "👂🏾", id: "1f442-1f3fe", shortcuts: [":ear_tone4:"], category: 9 }
    ,{ unicode: "👂🏿", id: "1f442-1f3ff", shortcuts: [":ear_tone5:"], category: 9 }
    ,{ unicode: "👃🏻", id: "1f443-1f3fb", shortcuts: [":nose_tone1:"], category: 9 }
    ,{ unicode: "👃🏼", id: "1f443-1f3fc", shortcuts: [":nose_tone2:"], category: 9 }
    ,{ unicode: "👃🏽", id: "1f443-1f3fd", shortcuts: [":nose_tone3:"], category: 9 }
    ,{ unicode: "👃🏾", id: "1f443-1f3fe", shortcuts: [":nose_tone4:"], category: 9 }
    ,{ unicode: "👃🏿", id: "1f443-1f3ff", shortcuts: [":nose_tone5:"], category: 9 }    
    ,{ unicode: "🛀🏻", id: "1f6c0-1f3fb", shortcuts: [":bath_tone1:"], category: 9 }
    ,{ unicode: "🛀🏼", id: "1f6c0-1f3fc", shortcuts: [":bath_tone2:"], category: 9 }
    ,{ unicode: "🛀🏽", id: "1f6c0-1f3fd", shortcuts: [":bath_tone3:"], category: 9 }
    ,{ unicode: "🛀🏾", id: "1f6c0-1f3fe", shortcuts: [":bath_tone4:"], category: 9 }
    ,{ unicode: "🛀🏿", id: "1f6c0-1f3ff", shortcuts: [":bath_tone5:"], category: 9 }

];


//
// Utils
//
emoji.getIconUrl = function (id, checkIfExists) 
{
    if (checkIfExists && emoji.find(id) == null)
        return null;
    return emoji.baseIconUrl + id.toLowerCase() + ".png";
};

emoji.getIcon = function (e)
{
    return '<img class="emoji" src="' + emoji.getIconUrl(e.id) + '" draggable="false" alt="" title="" />';
};

emoji.find = function (id)
{
    for (var i = 0; i < emoji.list.length; i++)
        if (emoji.list[i].id === id)
            return emoji.list[i];
    return null;
};


//
// Init indexes
//
emoji._shortcutsIndex = [];
emoji._shortcuts = {};
emoji._unicodesIndex = [];
emoji._unicodes = {};
emoji._initIndexes = function ()
{
    var getPattern = function (shortcut)
    {
        var pattern = shortcut
            .replace(/\(/gi, "\\(")
            .replace(/\)/gi, "\\)")
            .replace(/\[/gi, "\\[")
            .replace(/\]/gi, "\\]")
            .replace(/\{/gi, "\\{")
            .replace(/\}/gi, "\\}")
            .replace(/\|/gi, "\\|")
            .replace(/\*/gi, "\\*")
            .replace(/\$/gi, "\\$")
            .replace(/\'/gi, "\\'")
            .replace(/\^/gi, "\\^")
            .replace(/\./gi, "\\.")
            .replace(/\+/gi, "\\+")
            .replace(/\?/gi, "\\?");
        return new RegExp("(" + pattern + ")", "gi");
    };
    for (var i = 0; i < emoji.list.length; i++)
    {
        var e = emoji.list[i];
        for (var j = 0; j < e.shortcuts.length; j++)
        {
            emoji._shortcutsIndex.push(e.shortcuts[j]);
            emoji._shortcuts[e.shortcuts[j]] = { pattern: getPattern(e.shortcuts[j]), replacement: emoji.getIcon(e), unicode: e.unicode };
        }
        emoji._unicodesIndex.push(e.unicode);        
        emoji._unicodes[e.unicode] = e.shortcuts[0];
    }
    emoji._shortcutsIndex.sort(function (a, b) // sort by length (desc) to avoid conflicts (i.e. ":D" vs. ":Dart")
    {
        return b.length - a.length; // ASC -> a - b; DESC -> b - a
    });
    emoji._unicodesIndex.sort(function (a, b) // sort by length (desc) to avoid conflicts
    {
        return b.length - a.length; // ASC -> a - b; DESC -> b - a
    });
};
emoji._initIndexes();

//
// Methods
//
emoji.shortcutToImage = emoji.replaceShortcutWithIcons = function (text)
{
    var t = text;
    if (!t || t == "")
        return t;
    for (var i = 0; i < emoji._shortcutsIndex.length; i++)
    {
        var shortcut = emoji._shortcuts[emoji._shortcutsIndex[i]];
        t = t.replace(shortcut.pattern, shortcut.replacement)
    }
    return t;
};

emoji.shortcutToUnicode = function (text)
{
    var t = text;
    if (!t || t == "")
        return t;
    for (var i = 0; i < emoji._shortcutsIndex.length; i++)
    {
        var shortcut = emoji._shortcuts[emoji._shortcutsIndex[i]];
        t = t.replace(shortcut.pattern, shortcut.unicode)
    }
    return t;
};

emoji.unicodeToShortcut = emoji.replaceUnicodeCharacterWithShortcut = function (text)   // i.e. from iPhone emoji text (unicode) to shortcut
{
    var t = text;
//    t = t.replace(new RegExp("️", "gim"), ""); // there's a character (U+FE0F - http://codepoints.net/U+FE0F) in regex pattern, trust me :)
    for (var i = 0; i < emoji._unicodesIndex.length; i++)
        t = t.replace(new RegExp(emoji._unicodesIndex[i], "gim"), emoji._unicodes[emoji._unicodesIndex[i]]);    
    return t;
};

emoji.textToImage = function (text) 
{
    var t = emoji.unicodeToShortcut(text);
    t = emoji.shortcutToImage(t);
    return t;
};

emoji.textContainsOnlyEmoji = function (text)
{
    var t = emoji.shortcutToUnicode(text);
//    t.replace(new RegExp("️", "gim"), ""); // there's a character (U+FE0F - http://codepoints.net/U+FE0F) in regex pattern, trust me :)
    t = t.replace(/\s/gim, ""); // remove any space
    for (var i = 0; i < emoji._unicodesIndex.length; i++)
        t = t.replace(new RegExp(emoji._unicodesIndex[i], "gim"), "");
    return (t.length === 0);
};

//
// UI - Editor/selector
//
emoji.recentlyUsed = [];
emoji._loadRecentlyUsed = function ()
{
    //
    // TODO: use cookies instead of localStorage
    //
//    var c = BaseLibrary.getCookie("ChattaRecentlyUsedEmoji");
    var c = localStorage.getItem("ChattaRecentlyUsedEmoji");
    if (!c)
        return;
    var recently = c.split(",");
    // cleanup missing/removed items
    for (var i = 0; i < recently.length; i++)
    {
        var id = recently[i];
        if (emoji.find(id))
            emoji.recentlyUsed.push(id);
    }        
};
emoji._loadRecentlyUsed();
emoji._saveRecentlyUsed = function ()
{
    //
    // TODO: use cookies instead of localStorage
    //
//    var expiration = new Date();
//    expiration.setFullYear(expiration.getFullYear() + 1);
//    document.cookie = "ChattaRecentlyUsedEmoji=" + (emoji.recentlyUsed.join(",")) + ";path=/;domain=." + par_SITE_DOMAIN + ";expires=" + expiration.toUTCString();
    localStorage.setItem("ChattaRecentlyUsedEmoji", emoji.recentlyUsed.join(","));
};

emoji.getSelector = function (onSelect)
{
    var getEmoji = function (e, addToRecentlyUsedOnSelect)
    {
        return $("<span />").addClass("emoji").html(emoji.getIcon(e)).on("click", function ()
        {
            if (addToRecentlyUsedOnSelect)
                addToRecentlyUsed(e);
            if (onSelect instanceof Function)
                onSelect(e.shortcuts[0], emoji);
        });
    };
    var setCurrentTab = function (name)
    {
        $tabButtons.find("div.emoji-selector-tab-button").removeClass("active");
        $container.find("div.emoji-selector-tab").hide();

        $tabButtons.find("div.emoji-selector-tab-button." + name).addClass("active");
        $container.find("div.emoji-selector-tab." + name).show();
    };
    var addToRecentlyUsed = function (e)
    {
        if (!e)
            return;
        for (var i = 0; i < emoji.recentlyUsed.length; i++)
        {
            if (emoji.recentlyUsed[i] === e.id)
                return;
        }
        var count = emoji.recentlyUsed.unshift(e.id);
        if (count > 50)
            emoji.recentlyUsed.pop();
        createRecentlyUsedTabContent();
        emoji._saveRecentlyUsed();
    };
    var createRecentlyUsedTabContent = function ()
    {
        $tabRecentlyUsed.empty();
        for (var i = 0; i < emoji.recentlyUsed.length; i++)
        {
            var e = emoji.find(emoji.recentlyUsed[i]);
            getEmoji(e, false).appendTo($tabRecentlyUsed);
        }
    };
    var createCategoryEmojiTabContent = function ($tab, category)
    {
        for (var i = 0; i < emoji.list.length; i++)
        {
            var e = emoji.list[i];
            if (e.category !== category)
                continue;
            getEmoji(e, true).appendTo($tab);
        }
    };

    var $container = $("<div>").addClass("emoji-selector-container");

    var $tabRecentlyUsed = $("<div>").addClass("emoji-selector-tab emoji-recently-used").appendTo($container);
    createRecentlyUsedTabContent();

    var $tabSmileysAndPeople = $("<div>").addClass("emoji-selector-tab emoji-smileys-and-people").appendTo($container);
    createCategoryEmojiTabContent($tabSmileysAndPeople, 1);

    var $tabNatureAndAnimals = $("<div>").addClass("emoji-selector-tab emoji-nature-and-animals").appendTo($container);
    createCategoryEmojiTabContent($tabNatureAndAnimals, 2);

    var $tabFoodAndDrink = $("<div>").addClass("emoji-selector-tab emoji-food-and-drink").appendTo($container);
    createCategoryEmojiTabContent($tabFoodAndDrink, 3);
    
    var $tabActivity = $("<div>").addClass("emoji-selector-tab emoji-activity").appendTo($container);
    createCategoryEmojiTabContent($tabActivity, 4);        
    
    var $tabTravelAndPlaces = $("<div>").addClass("emoji-selector-tab emoji-travel-and-places").appendTo($container);
    createCategoryEmojiTabContent($tabTravelAndPlaces, 5);
    
    var $tabObjects = $("<div>").addClass("emoji-selector-tab emoji-objects").appendTo($container);
    createCategoryEmojiTabContent($tabObjects, 6);
    
    var $tabSymbols = $("<div>").addClass("emoji-selector-tab emoji-symbols").appendTo($container);
    createCategoryEmojiTabContent($tabSymbols, 7);

    var $tabFlags = $("<div>").addClass("emoji-selector-tab emoji-flags").appendTo($container);
    createCategoryEmojiTabContent($tabFlags, 8);
    
    var $tabButtons = $("<div>").addClass("emoji-selector-tab-buttons").appendTo($container);
    $("<div>").addClass("emoji-selector-tab-button emoji-recently-used").appendTo($tabButtons).attr("title", "Utilizzate di recente").on("click", function () { setCurrentTab("emoji-recently-used"); });
    $("<div>").addClass("emoji-selector-tab-button emoji-smileys-and-people").appendTo($tabButtons).attr("title", "Faccine e persone").on("click", function () { setCurrentTab("emoji-smileys-and-people"); });
    $("<div>").addClass("emoji-selector-tab-button emoji-nature-and-animals").appendTo($tabButtons).attr("title", "Natura e animali").on("click", function () { setCurrentTab("emoji-nature-and-animals"); });
    $("<div>").addClass("emoji-selector-tab-button emoji-food-and-drink").appendTo($tabButtons).attr("title", "Cibo e bevande").on("click", function () { setCurrentTab("emoji-food-and-drink"); });
    $("<div>").addClass("emoji-selector-tab-button emoji-activity").appendTo($tabButtons).attr("title", "Attività").on("click", function () { setCurrentTab("emoji-activity"); });
    $("<div>").addClass("emoji-selector-tab-button emoji-travel-and-places").appendTo($tabButtons).attr("title", "Viaggi e luoghi").on("click", function () { setCurrentTab("emoji-travel-and-places"); });
    $("<div>").addClass("emoji-selector-tab-button emoji-objects").appendTo($tabButtons).attr("title", "Oggetti").on("click", function () { setCurrentTab("emoji-objects"); });
    $("<div>").addClass("emoji-selector-tab-button emoji-symbols").appendTo($tabButtons).attr("title", "Simboli").on("click", function () { setCurrentTab("emoji-symbols"); });
    $("<div>").addClass("emoji-selector-tab-button emoji-flags").appendTo($tabButtons).attr("title", "Bandiere").on("click", function () { setCurrentTab("emoji-flags"); });
        
    setCurrentTab(emoji.recentlyUsed.length > 0 ? "emoji-recently-used" : "emoji-smileys-and-people");
    return $container;
};


//
// jQuery plugin
//
(function ($)
{
    $.fn.emojize = function ()
    {
        return this.each(function ()
        {
            var html = $(this).html();
            html = emoji.textToImage(html);
            $(this).html(html);
        });
    };
})(jQuery);