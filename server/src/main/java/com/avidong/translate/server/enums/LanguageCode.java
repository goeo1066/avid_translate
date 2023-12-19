package com.avidong.translate.server.enums;

import lombok.Getter;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
public enum LanguageCode {
    ABKHAZIAN("Abkhazian", "Northwest Caucasian", "аҧсуа бызшәа, аҧсшәа", "ab", "aar", "abk"),
    AFAR("Afar", "Afro-Asiatic", "Afaraf", "aa", "afr", "aar"),
    AFRIKAANS("Afrikaans", "Indo-European", "Afrikaans", "af", "aka", "afr"),
    AKAN("Akan", "Niger–Congo", "Akan", "ak", "sqi", "aka"),
    ALBANIAN("Albanian", "Indo-European", "Shqip", "sq", "amh", "alb"),
    AMHARIC("Amharic", "Afro-Asiatic", "አማርኛ", "am", "ara", "amh"),
    ARABIC("Arabic", "Afro-Asiatic", "العربية", "ar", "arg", "ara"),
    ARAGONESE("Aragonese", "Indo-European", "aragonés", "an", "hye", "arg"),
    ARMENIAN("Armenian", "Indo-European", "Հայերեն", "hy", "asm", "arm"),
    ASSAMESE("Assamese", "Indo-European", "অসমীয়া", "as", "ava", "asm"),
    AVARIC("Avaric", "Northeast Caucasian", "авар мацӀ, магӀарул мацӀ", "av", "ave", "ava"),
    AVESTAN("Avestan", "Indo-European", "avesta", "ae", "aym", "ave"),
    AYMARA("Aymara", "Aymaran", "aymar aru", "ay", "aze", "aym"),
    AZERBAIJANI("Azerbaijani", "Turkic", "azərbaycan dili", "az", "bam", "aze"),
    BAMBARA("Bambara", "Niger–Congo", "bamanankan", "bm", "bak", "bam"),
    BASHKIR("Bashkir", "Turkic", "башҡорт теле", "ba", "eus", "bak"),
    BASQUE("Basque", "고립어 (비교언어학)", "euskara, euskera", "eu", "bel", "baq"),
    BELARUSIAN("Belarusian", "Indo-European", "беларуская мова", "be", "ben", "bel"),
    BENGALI("Bengali", "Indo-European", "বাংলা", "bn", "bis", "ben"),
    BISLAMA("Bislama", "Creole", "Bislama", "bi", "bos", "bis"),
    BOSNIAN("Bosnian", "Indo-European", "bosanski jezik", "bs", "bre", "bos"),
    BRETON("Breton", "Indo-European", "brezhoneg", "br", "bul", "bre"),
    BULGARIAN("Bulgarian", "Indo-European", "български език", "bg", "mya", "bul"),
    BURMESE("Burmese", "Sino-Tibetan", "ဗမာစာ", "my", "cat", "bur"),
    CATALAN("Catalan, Valencian", "Indo-European", "català, valencià", "ca", "cha", "cat"),
    CHAMORRO("Chamorro", "Austronesian", "Chamoru", "ch", "che", "cha"),
    CHECHEN("Chechen", "Northeast Caucasian", "нохчийн мотт", "ce", "nya", "che"),
    CHICHEWA("Chichewa, Chewa, Nyanja", "Niger–Congo", "chiCheŵa, chinyanja", "ny", "zho", "nya"),
    CHINESE("Chinese", "Sino-Tibetan", "中文 (Zhōngwén), 汉语, 漢語", "zh", "chv", "chi"),
    CHUVASH("Chuvash", "Turkic", "чӑваш чӗлхи", "cv", "cor", "chv"),
    CORNISH("Cornish", "Indo-European", "Kernewek", "kw", "cos", "cor"),
    CORSICAN("Corsican", "Indo-European", "corsu, lingua corsa", "co", "cre", "cos"),
    CREE("Cree", "Algonquian", "ᓀᐦᐃᔭᐍᐏᐣ", "cr", "hrv", "cre"),
    CROATIAN("Croatian", "Indo-European", "hrvatski jezik", "hr", "ces", "hrv"),
    CZECH("Czech", "Indo-European", "čeština, český jazyk", "cs", "dan", "cze"),
    DANISH("Danish", "Indo-European", "dansk", "da", "div", "dan"),
    DIVEHI("Divehi, Dhivehi, Maldivian", "Indo-European", "ދިވެހި", "dv", "nld", "div"),
    DUTCH("Dutch, Flemish", "Indo-European", "Nederlands, Vlaams", "nl", "dzo", "dut"),
    DZONGKHA("Dzongkha", "Sino-Tibetan", "རྫོང་ཁ", "dz", "eng", "dzo"),
    ENGLISH("English", "Indo-European", "English", "en", "epo", "eng"),
    ESPERANTO("Esperanto", "Constructed", "Esperanto", "eo", "est", "epo"),
    ESTONIAN("Estonian", "Uralic", "eesti, eesti keel", "et", "ewe", "est"),
    EWE("Ewe", "Niger–Congo", "Eʋegbe", "ee", "fao", "ewe"),
    FAROESE("Faroese", "Indo-European", "føroyskt", "fo", "fij", "fao"),
    FIJIAN("Fijian", "Austronesian", "vosa Vakaviti", "fj", "fin", "fij"),
    FINNISH("Finnish", "Uralic", "suomi, suomen kieli", "fi", "fra", "fin"),
    FRENCH("French", "Indo-European", "français, langue française", "fr", "ful", "fre"),
    FULAH("Fulah", "Niger–Congo", "Fulfulde, Pulaar, Pular", "ff", "glg", "ful"),
    GALICIAN("Galician", "Indo-European", "Galego", "gl", "kat", "glg"),
    GEORGIAN("Georgian", "Kartvelian", "ქართული", "ka", "deu", "geo"),
    GERMAN("German", "Indo-European", "Deutsch", "de", "ell", "ger"),
    GREEK("Greek, Modern (1453–)", "Indo-European", "ελληνικά", "el", "grn", "gre"),
    GUARANI("Guarani", "Tupian", "Avañe'ẽ", "gn", "guj", "grn"),
    GUJARATI("Gujarati", "Indo-European", "ગુજરાતી", "gu", "hat", "guj"),
    HAITIAN("Haitian, Haitian Creole", "Creole", "Kreyòl ayisyen", "ht", "hau", "hat"),
    HAUSA("Hausa", "Afro-Asiatic", "(Hausa) هَوُسَ", "ha", "heb", "hau"),
    HEBREW("Hebrew", "Afro-Asiatic", "עברית", "he", "her", "heb"),
    HERERO("Herero", "Niger–Congo", "Otjiherero", "hz", "hin", "her"),
    HINDI("Hindi", "Indo-European", "हिन्दी, हिंदी", "hi", "hmo", "hin"),
    HIRI_MOTU("Hiri Motu", "Austronesian", "Hiri Motu", "ho", "hun", "hmo"),
    HUNGARIAN("Hungarian", "Uralic", "magyar", "hu", "ina", "hun"),
    INTERLINGUA("Interlingua (International Auxiliary Language Association)", "Constructed", "Interlingua", "ia", "ind", "ina"),
    INDONESIAN("Indonesian", "Austronesian", "Bahasa Indonesia", "id", "ile", "ind"),
    INTERLINGUE("Interlingue, Occidental", "Constructed", "Originally called Occidental; then Interlingue after WWII", "ie", "gle", "ile"),
    IRISH("Irish", "Indo-European", "Gaeilge", "ga", "ibo", "gle"),
    IGBO("Igbo", "Niger–Congo", "Asụsụ Igbo", "ig", "ipk", "ibo"),
    INUPIAQ("Inupiaq", "Eskimo–Aleut", "Iñupiaq, Iñupiatun", "ik", "ido", "ipk"),
    IDO("Ido", "Constructed", "Ido", "io", "isl", "ido"),
    ICELANDIC("Icelandic", "Indo-European", "Íslenska", "is", "ita", "ice"),
    ITALIAN("Italian", "Indo-European", "Italiano", "it", "iku", "ita"),
    INUKTITUT("Inuktitut", "Eskimo–Aleut", "ᐃᓄᒃᑎᑐᑦ", "iu", "jpn", "iku"),
    JAPANESE("Japanese", "일본어족", "日本語 (にほんご)", "ja", "jav", "jpn"),
    JAVANESE("Javanese", "Austronesian", "ꦧꦱꦗꦮ, Basa Jawa", "jv", "kan", "jav"),
    KANNADA("Kannada", "Dravidian", "ಕನ್ನಡ", "kn", "kau", "kan"),
    KANURI("Kanuri", "Nilo-Saharan", "Kanuri", "kr", "kas", "kau"),
    KASHMIRI("Kashmiri", "Indo-European", "कश्मीरी, كشميري‏", "ks", "kaz", "kas"),
    KAZAKH("Kazakh", "Turkic", "қазақ тілі", "kk", "khm", "kaz"),
    CENTRAL_KHMER("Central Khmer", "Austroasiatic", "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ", "km", "kik", "khm"),
    KIKUYU("Kikuyu, Gikuyu", "Niger–Congo", "Gĩkũyũ", "ki", "kin", "kik"),
    KINYARWANDA("Kinyarwanda", "Niger–Congo", "Ikinyarwanda", "rw", "kir", "kin"),
    KIRGHIZ("Kirghiz, Kyrgyz", "Turkic", "Кыргызча, Кыргыз тили", "ky", "kom", "kir"),
    KOMI("Komi", "Uralic", "коми кыв", "kv", "kon", "kom"),
    KONGO("Kongo", "Niger–Congo", "Kikongo", "kg", "kor", "kon"),
    KOREAN("Korean", "한국어족", "한국어", "ko", "kur", "kor"),
    KURDISH("Kurdish", "Indo-European", "Kurdî, کوردی‏", "ku", "kua", "kur"),
    KUANYAMA("Kuanyama, Kwanyama", "Niger–Congo", "Kuanyama", "kj", "lat", "kua"),
    LATIN("Latin", "Indo-European", "latine, lingua latina", "la", "ltz", "lat"),
    LUXEMBOURGISH("Luxembourgish, Letzeburgesch", "Indo-European", "Lëtzebuergesch", "lb", "lim", "ltz"),
    LIMBURGAN("Limburgan, Limburger, Limburgish", "Indo-European", "Limburgs", "li", "lin", "lim"),
    LINGALA("Lingala", "Niger–Congo", "Lingála", "ln", "lao", "lin"),
    LAO("Lao", "Tai–Kadai", "ພາສາລາວ", "lo", "lit", "lao"),
    LITHUANIAN("Lithuanian", "Indo-European", "lietuvių kalba", "lt", "lub", "lit"),
    LUBA_KATANGA("Luba-Katanga", "Niger–Congo", "Kiluba", "lu", "lav", "lub"),
    LATVIAN("Latvian", "Indo-European", "latviešu valoda", "lv", "glv", "lav"),
    MANX("Manx", "Indo-European", "Gaelg, Gailck", "gv", "mkd", "glv"),
    MACEDONIAN("Macedonian", "Indo-European", "македонски јазик", "mk", "mlg", "mac"),
    MALAGASY("Malagasy", "Austronesian", "fiteny malagasy", "mg", "msa", "mlg"),
    MALAY("Malay", "Austronesian", "Bahasa Melayu, بهاس ملايو‏", "ms", "mal", "may"),
    MALAYALAM("Malayalam", "Dravidian", "മലയാളം", "ml", "mlt", "mal"),
    MALTESE("Maltese", "Afro-Asiatic", "Malti", "mt", "mri", "mlt"),
    MAORI("Maori", "Austronesian", "te reo Māori", "mi", "mar", "mao"),
    MARATHI("Marathi", "Indo-European", "मराठी", "mr", "mah", "mar"),
    MARSHALLESE("Marshallese", "Austronesian", "Kajin M̧ajeļ", "mh", "mon", "mah"),
    MONGOLIAN("Mongolian", "Mongolic", "Монгол хэл", "mn", "nau", "mon"),
    NAURU("Nauru", "Austronesian", "Dorerin Naoero", "na", "nav", "nau"),
    NAVAJO("Navajo, Navaho", "Dené–Yeniseian", "Diné bizaad", "nv", "nde", "nav"),
    NORTH_NDEBELE("North Ndebele", "Niger–Congo", "isiNdebele", "nd", "nep", "nde"),
    NEPALI("Nepali", "Indo-European", "नेपाली", "ne", "ndo", "nep"),
    NDONGA("Ndonga", "Niger–Congo", "Owambo", "ng", "nob", "ndo"),
    NORWEGIAN_BOKMÅL("Norwegian Bokmål", "Indo-European", "Norsk Bokmål", "nb", "nno", "nob"),
    NORWEGIAN_NYNORSK("Norwegian Nynorsk", "Indo-European", "Norsk Nynorsk", "nn", "nor", "nno"),
    NORWEGIAN("Norwegian", "Indo-European", "Norsk", "no", "iii", "nor"),
    SICHUAN_YI("Sichuan Yi, Nuosu", "Sino-Tibetan", "ꆈꌠ꒿ Nuosuhxop", "ii", "nbl", "iii"),
    SOUTH_NDEBELE("South Ndebele", "Niger–Congo", "isiNdebele", "nr", "oci", "nbl"),
    OCCITAN("Occitan", "Indo-European", "occitan, lenga d'òc", "oc", "oji", "oci"),
    OJIBWA("Ojibwa", "Algonquian", "ᐊᓂᔑᓈᐯᒧᐎᓐ", "oj", "orm", "oji"),
    OROMO("Oromo", "Afro-Asiatic", "Afaan Oromoo", "om", "ori", "orm"),
    ORIYA("Oriya", "Indo-European", "ଓଡ଼ିଆ", "or", "oss", "ori"),
    OSSETIAN("Ossetian, Ossetic", "Indo-European", "ирон æвзаг", "os", "pan", "oss"),
    PUNJABI("Punjabi, Panjabi", "Indo-European", "ਪੰਜਾਬੀ", "pa", "pli", "pan"),
    PALI("Pali", "Indo-European", "पाऴि", "pi", "fas", "pli"),
    PERSIAN("Persian", "Indo-European", "فارسی", "fa", "pol", "per"),
    POLISH("Polish", "Indo-European", "język polski, polszczyzna", "pl", "pus", "pol"),
    PASHTO("Pashto, Pushto", "Indo-European", "پښتو", "ps", "por", "pus"),
    PORTUGUESE("Portuguese", "Indo-European", "Português", "pt", "que", "por"),
    QUECHUA("Quechua", "Quechuan", "Runa Simi, Kichwa", "qu", "roh", "que"),
    ROMANSH("Romansh", "Indo-European", "Rumantsch Grischun", "rm", "run", "roh"),
    RUNDI("Rundi", "Niger–Congo", "Ikirundi", "rn", "ron", "run"),
    ROMANIAN("Romanian, Moldavian, Moldovan", "Indo-European", "Română", "ro", "rus", "rum"),
    RUSSIAN("Russian", "Indo-European", "русский", "ru", "san", "rus"),
    SANSKRIT("Sanskrit", "Indo-European", "संस्कृतम्", "sa", "srd", "san"),
    SARDINIAN("Sardinian", "Indo-European", "sardu", "sc", "snd", "srd"),
    SINDHI("Sindhi", "Indo-European", "सिन्धी, سنڌي، سندھی‏", "sd", "smo", "snd"),
    SAMOAN("Samoan", "Austronesian", "gagana fa'a Samoa", "sm", "sag", "smo"),
    SANGO("Sango", "Creole", "yângâ tî sängö", "sg", "srp", "sag"),
    SERBIAN("Serbian", "Indo-European", "српски језик", "sr", "sna", "srp"),
    SHONA("Shona", "Niger–Congo", "chiShona", "sn", "sin", "sna"),
    SINHALA("Sinhala, Sinhalese", "Indo-European", "සිංහල", "si", "slk", "sin"),
    SLOVAK("Slovak", "Indo-European", "Slovenčina, Slovenský Jazyk", "sk", "slv", "slo"),
    SLOVENIAN("Slovenian", "Indo-European", "Slovenski Jezik, Slovenščina", "sl", "som", "slv"),
    SOMALI("Somali", "Afro-Asiatic", "Soomaaliga, af Soomaali", "so", "sot", "som"),
    SOUTHERN_SOTHO("Southern Sotho", "Niger–Congo", "Sesotho", "st", "spa", "sot"),
    SPANISH("Spanish, Castilian", "Indo-European", "Español", "es", "sun", "spa"),
    SUNDANESE("Sundanese", "Austronesian", "Basa Sunda", "su", "swa", "sun"),
    SWAHILI("Swahili", "Niger–Congo", "Kiswahili", "sw", "ssw", "swa"),
    SWATI("Swati", "Niger–Congo", "SiSwati", "ss", "swe", "ssw"),
    SWEDISH("Swedish", "Indo-European", "Svenska", "sv", "tam", "swe"),
    TAMIL("Tamil", "Dravidian", "தமிழ்", "ta", "tel", "tam"),
    TELUGU("Telugu", "Dravidian", "తెలుగు", "te", "tgk", "tel"),
    TAJIK("Tajik", "Indo-European", "тоҷикӣ, toçikī, تاجیکی‏", "tg", "tha", "tgk"),
    THAI("Thai", "Tai–Kadai", "ไทย", "th", "tir", "tha"),
    TIGRINYA("Tigrinya", "Afro-Asiatic", "ትግርኛ", "ti", "bod", "tir"),
    TIBETAN("Tibetan", "Sino-Tibetan", "བོད་ཡིག", "bo", "tuk", "tib"),
    TURKMEN("Turkmen", "Turkic", "Türkmen, Түркмен", "tk", "tgl", "tuk"),
    TAGALOG("Tagalog", "Austronesian", "Wikang Tagalog", "tl", "tsn", "tgl"),
    TSWANA("Tswana", "Niger–Congo", "Setswana", "tn", "ton", "tsn"),
    TONGA("Tonga (Tonga Islands)", "Austronesian", "Faka Tonga", "to", "tur", "ton"),
    TURKISH("Turkish", "Turkic", "Türkçe", "tr", "tso", "tur"),
    TSONGA("Tsonga", "Niger–Congo", "Xitsonga", "ts", "tat", "tso"),
    TATAR("Tatar", "Turkic", "татар теле, tatar tele", "tt", "twi", "tat"),
    TWI("Twi", "Niger–Congo", "Twi", "tw", "tah", "twi"),
    TAHITIAN("Tahitian", "Austronesian", "Reo Tahiti", "ty", "uig", "tah"),
    UIGHUR("Uighur, Uyghur", "Turkic", "ئۇيغۇرچە‏, Uyghurche", "ug", "ukr", "uig"),
    UKRAINIAN("Ukrainian", "Indo-European", "Українська", "uk", "urd", "ukr"),
    URDU("Urdu", "Indo-European", "اردو", "ur", "uzb", "urd"),
    UZBEK("Uzbek", "Turkic", "Oʻzbek, Ўзбек, أۇزبېك‏", "uz", "ven", "uzb"),
    VENDA("Venda", "Niger–Congo", "Tshivenḓa", "ve", "vie", "ven"),
    VIETNAMESE("Vietnamese", "Austroasiatic", "Tiếng Việt", "vi", "vol", "vie"),
    VOLAPÜK("Volapük", "Constructed", "Volapük", "vo", "wln", "vol"),
    WALLOON("Walloon", "Indo-European", "Walon", "wa", "cym", "wln"),
    WELSH("Welsh", "Indo-European", "Cymraeg", "cy", "wol", "wel"),
    WOLOF("Wolof", "Niger–Congo", "Wollof", "wo", "xho", "wol"),
    XHOSA("Xhosa", "Niger–Congo", "isiXhosa", "xh", "yid", "xho"),
    YIDDISH("Yiddish", "Indo-European", "ייִדיש", "yi", "yor", "yid"),
    YORUBA("Yoruba", "Niger–Congo", "Yorùbá", "yo", "zha", "yor"),
    ZHUANG("Zhuang, Chuang", "Tai–Kadai", "Saɯ cueŋƅ, Saw cuengh", "za", "zul", "zha"),
    ZULU("Zulu", "Niger–Congo", "isiZulu", "zu", "fry", "zul"),
    WESTERN_FRISIAN("Western Frisian", "Indo-European", "Frysk", "fy", "kal", "fry"),
    KALAALLISUT("Kalaallisut, Greenlandic", "Eskimo–Aleut", "kalaallisut, kalaallit oqaasii", "kl", "lug", "kal"),
    GANDA("Ganda", "Niger–Congo", "Luganda", "lg", "sme", "lug"),
    NORTHERN_SAMI("Northern Sami", "Uralic", "Davvisámegiella", "se", "gla", "sme"),
    GAELIC("Gaelic, Scottish Gaelic", "Indo-European", "Gàidhlig", "gd", "chu", "gla"),
    CHURCH_SLAVIC("Church Slavic, Old Slavonic, Church Slavonic, Old Bulgarian, Old Church Slavonic", "Indo-European", "ѩзыкъ словѣньскъ", "cu", "bih", "chu"),
    BIHAR("Bihar", "Indo-European", "भोजपुरी", "bh", "", "bih");

    private final String languageFamily;
    private final List<String> isoLanguageNames;
    private final List<String> nativeLanguageNames;
    private final String code639_1;
    private final String code639_2_T;
    private final String code639_2_B;

    LanguageCode(String isoLanguageName, String languageFamily, String nativeLanguageName, String code639_1, String code639_2_T, String code639_2_B) {
        this.languageFamily = languageFamily;
        this.isoLanguageNames = Arrays.stream(isoLanguageName.split(","))
                .map(String::trim)
                .toList();
        this.nativeLanguageNames = Arrays.stream(nativeLanguageName.split(","))
                .map(String::trim)
                .toList();
        this.code639_1 = code639_1;
        this.code639_2_T = code639_2_T;
        this.code639_2_B = code639_2_B;
    }

    private static final Map<String, LanguageCode> CODE639_1_MAP;

    static {
        Map<String, LanguageCode> code6391Map = new HashMap<>();

        for (LanguageCode value : LanguageCode.values()) {
            if (!code6391Map.containsKey(value.code639_1)) {
                code6391Map.put(value.code639_1, value);
            }
        }

        CODE639_1_MAP = code6391Map;
    }

    public static LanguageCode fromCode639_1(String code639_1) {
        return CODE639_1_MAP.get(code639_1);
    }
}
