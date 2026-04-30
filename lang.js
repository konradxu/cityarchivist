/* ============================================================
   City Archivist — i18n + Welcome / Language Modal + Newsletter
   Languages: en (English), de (Deutsch), zh (中文)
   ============================================================ */

const TRANSLATIONS = {
  en: {
    'nav.home': 'Home',
    'nav.destinations': 'Destinations',
    'nav.hotels': 'Hotels',
    'nav.nightclubs': 'Nightclubs',
    'nav.about': 'About Us',
    'nav.search': 'Search',
    'nav.back': 'Back to Home',
    'nav.allClubs': 'All Clubs',
    'nav.allCities': 'All Cities',
    'nav.language': 'Language',
    'nav.spots': 'Hidden Spots',
    'nav.reads': 'Reads',
    'city.spots.eyebrow': 'Hidden Spots',
    'city.reads.eyebrow': 'Reads',
    'city.hotels.eyebrow': 'Hotels',
    'city.nightclubs.eyebrow': 'Nightclubs',
    'spots.filter.all': 'All',
    'spots.filter.cafes': 'Cafés',
    'spots.filter.bars': 'Bars',
    'spots.filter.parks': 'Parks',
    'spots.filter.culture': 'Culture',
    'spots.filter.shopping': 'Shopping',
    'spots.filter.foodspots': 'Foodspots',
    'spot.readmore': 'Read more',
    'feat.readmore': 'Read more',
    'feat.featured': 'Featured Read',
    'hotel.from': 'from',
    'hotel.night': '/ night',
    'hotel.discover': 'Discover',

    'hero.eyebrow': 'The Urban Archive',
    'hero.h1': 'Discover<br>the <em>Hidden</em><br>City',
    'hero.sub': 'Go beyond the familiar. Discover what others miss.',
    'hero.cta': 'Explore Now',
    'hero.scroll': 'Scroll',

    'intro.label': 'The Archive',
    'intro.h2': 'A collection of <em>hidden places.</em>',
    'intro.p': 'Handpicked hotels, hidden gems and destinations across the globe — chosen for their character, atmosphere and uniqueness.',

    'ov.destinations': 'Destinations',
    'ov.destinations.sub': 'Cities & Hidden Spots',
    'ov.hotels': 'Hotels',
    'ov.hotels.sub': 'Top Hotel Chains on the Globe',
    'ov.nightclubs': 'Nightclubs',
    'ov.nightclubs.sub': 'After Dark',
    'ov.about': 'About Us',
    'ov.about.sub': 'The Story',

    'dest.eyebrow': 'Destinations',
    'dest.h2': 'Explore<br><em>the Cities</em>',
    'dest.munich.tag': 'Germany · Bavaria',
    'dest.munich.city': 'Munich',
    'dest.munich.sub': 'Bavaria’s capital, where tradition, culture and lifestyle come together.',
    'dest.shanghai.tag': 'China · East Asia',
    'dest.shanghai.city': 'Shanghai',
    'dest.shanghai.sub': 'China’s largest city, defined by skyline, culture and nonstop energy.',
    'dest.london.tag': 'United Kingdom · England',
    'dest.london.city': 'London',
    'dest.london.sub': 'A capital of layers — royal pageantry, underground sound and quiet corners between.',
    'dest.tokyo.tag': 'Japan · Kantō',
    'dest.tokyo.city': 'Tokyo',
    'dest.tokyo.sub': 'Where neon and ritual coexist — a city of small streets and immense scale.',
    'dest.explore': 'Explore →',
    'dest.soon': 'Coming Soon',
    'dest.readmore': 'More cities',
    'dest.comingsoon.title': 'Coming <em>Soon</em>',
    'dest.comingsoon.sub': 'More cities arriving in the archive',

    'hotelsFeature.eyebrow': 'Hotels',
    'hotelsFeature.title': 'Top Hotel Chains on the <em>Globe</em>',
    'hotelsFeature.text': 'From legendary heritage houses to remote sanctuaries — a curated selection of the names that define what luxury hospitality means today. Each chain stands for a different philosophy: design, place, wellness, or pure grandeur.',
    'hotelsFeature.cta': 'Discover the Chains',

    'clubs.eyebrow': 'Best Nightclubs on the Globe',
    'clubs.h2': 'After<br><em>Dark</em>',
    'clubs.desc': 'Explore the world’s top nightclubs for unmatched beats and unforgettable nights.',
    'clubs.hi.name': 'Hï Ibiza',
    'clubs.hi.genre': 'Ibiza, Spain · Techno · House · EDM',
    'clubs.hi.desc': 'Voted the world’s №1 club multiple times — futuristic design, two main rooms and the most in-demand DJs of the decade.',
    'clubs.echo.name': 'Echostage',
    'clubs.echo.genre': 'Washington D.C., USA · House · Trance · Bass',
    'clubs.echo.desc': 'North America’s largest concert venue dedicated to electronic music — vast warehouse space, immersive light shows, headline residencies.',
    'clubs.berg.name': 'Berghain',
    'clubs.berg.genre': 'Berlin, Germany · Techno · Industrial',
    'clubs.berg.desc': 'A former power plant turned temple of techno. Famous for its uncompromising door, marathon sets and a sound system that defines the genre.',
    'clubs.fab.name': 'Fabric',
    'clubs.fab.genre': 'London, UK · House · Techno · Drum & Bass',
    'clubs.fab.desc': 'Three rooms beneath Smithfield Market and a bodysonic dancefloor that moves with the bass — a London institution for over two decades.',
    'clubs.pacha.name': 'Pacha',
    'clubs.pacha.genre': 'Ibiza, Spain · House · Disco · Open Format',
    'clubs.pacha.desc': 'The cherry-logo legend. Open since 1973, Pacha turned Ibiza into the global capital of nightlife — glamour, history and endless summers.',
    'clubs.unvrs.name': 'UNVRS',
    'clubs.unvrs.genre': 'Ibiza, Spain · Techno · House · EDM',
    'clubs.unvrs.desc': 'Opened summer 2025 on the legendary Privilege site — a multi-room mega-venue with the world’s first 360° open-air club stage and the most ambitious production on the island.',

    'about.eyebrow': 'About Us',
    'about.h': 'Built from passion for <em>hospitality and tourism.</em>',
    'about.p': 'Hi, I’m Konrad Xu. My passion for hotels and hospitality started when I was just 12 years old, and over time it grew into a deep interest in how places can create truly memorable experiences. I created this platform to help people discover unique hotels, hidden spots and inspiring locations across Europe that go beyond standard travel guides.',

    'news.eyebrow': 'Newsletter',
    'news.h': 'Stay in <em>the Archive.</em>',
    'news.p': 'Get new destinations, hotel features and city guides — straight to your inbox. No spam, just the good stuff.',
    'news.namePlaceholder': 'Your name',
    'news.emailPlaceholder': 'your@email.com',
    'news.button': 'Subscribe',
    'news.success': 'Thank you — you’re on the list.',
    'news.errorEmail': 'Please enter a valid email address.',
    'news.errorName': 'Please enter your name.',

    'footer.nav': 'Navigation',
    'footer.info': 'Info',
    'footer.aboutLink': 'About Us',
    'footer.newsletter': 'Newsletter',
    'footer.contact': 'Contact',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
    'footer.copy': '© 2026 City Archivist — All rights reserved',

    'hotelsPage.eyebrow': 'The Hotel Archive',
    'hotelsPage.h1': 'Top Hotel Chains<br>on the <em>Globe</em>',
    'hotelsPage.sub': 'Six names that define modern luxury hospitality.',
    'hotelsPage.note.label': 'A Note',
    'hotelsPage.note.p': 'This list is a starting point, not a ranking. Each of these groups represents a different philosophy of hospitality — and the best one is simply the one that speaks to how you like to travel.',
    'hotels.aman.identity': 'Ultra-Luxury · Remote Sanctuaries',
    'hotels.aman.origin': 'Founded 1988 · Phuket, Thailand',
    'hotels.aman.desc': 'Aman pioneered the small, intensely private resort. Each property is built into its landscape — temples in Bhutan, dunes in Utah, palaces in Venice — with an unmistakable architectural language of stone, water and quiet. The brand stands for solitude, ritual and discretion.',
    'hotels.fs.identity': 'Luxury · Global Scale',
    'hotels.fs.origin': 'Founded 1960 · Toronto, Canada',
    'hotels.fs.desc': 'The benchmark for consistent five-star service across more than 50 countries. From the historic George V in Paris to over-water bungalows in Bora Bora, Four Seasons defines what reliable, generous luxury feels like — anywhere in the world.',
    'hotels.six.identity': 'Wellness · Sustainability',
    'hotels.six.origin': 'Founded 1995 · Maldives',
    'hotels.six.desc': 'A different definition of luxury — barefoot, conscious, deeply restorative. Six Senses pairs world-class wellness programs with serious sustainability practice, set in the planet’s most beautiful coastal and mountain landscapes.',
    'hotels.stregis.identity': 'Grand Luxury · Heritage',
    'hotels.stregis.origin': 'Founded 1904 · New York, USA',
    'hotels.stregis.desc': 'Old-world grandeur with a modern address book. Born from John Jacob Astor IV’s vision in 1904, St. Regis is known for its butler service, rich interiors and signature rituals — the evening sabering of champagne included.',
    'hotels.rosewood.identity': 'Sense of Place · Culture',
    'hotels.rosewood.origin': 'Founded 1979 · Dallas, USA',
    'hotels.rosewood.desc': 'Rosewood’s "A Sense of Place" philosophy means no two hotels feel the same. Each property — from Hôtel de Crillon in Paris to The Carlyle in New York — is rooted in the architecture, art and culture of its city.',
    'hotels.belmond.identity': 'Iconic Journeys · Rail & Sea',
    'hotels.belmond.origin': 'Founded 1976 · Orient-Express',
    'hotels.belmond.desc': 'Where the journey is the destination. Belmond began with the revival of the Venice Simplon-Orient-Express and has since gathered the most romantic experiences in the world — Italian cliffside hotels, Peruvian sleeper trains, river barges through Burgundy.',
    'hotels.visit': 'Visit',

    'club.location.eyebrow': 'Location',
    'club.location.h': 'Find <em>the Club</em>',
    'club.location.address': 'Address',
    'club.location.season': 'Season',
    'club.location.schedule': 'Schedule',
    'club.location.hours': 'Hours',
    'club.location.door': 'Door Policy',
    'club.story.label': 'The Story',
    'club.music.label': 'Music & Vibe',
    'club.visit.eyebrow': 'Visit',
    'club.visit.cta': 'Visit Website',
    'club.map.placeholder': 'Map / Photo',
    'club.meta.opened': 'Opened',
    'club.meta.capacity': 'Capacity',
    'club.meta.season': 'Season',
    'club.meta.weekend': 'Weekend',
    'club.meta.rooms': 'Rooms',
    'club.meta.years': 'Years',

    'welcome.greeting': 'Welcome to City Archivist',
    'welcome.sub': 'Choose your language to begin.',
    'welcome.continue': 'Continue',
  },

  de: {
    'nav.home': 'Start',
    'nav.destinations': 'Reiseziele',
    'nav.hotels': 'Hotels',
    'nav.nightclubs': 'Nachtclubs',
    'nav.about': 'Über uns',
    'nav.search': 'Suche',
    'nav.back': 'Zurück zum Start',
    'nav.allClubs': 'Alle Clubs',
    'nav.allCities': 'Alle Städte',
    'nav.language': 'Sprache',
    'nav.spots': 'Versteckte Orte',
    'nav.reads': 'Lesestoff',
    'city.spots.eyebrow': 'Versteckte Orte',
    'city.reads.eyebrow': 'Lesestoff',
    'city.hotels.eyebrow': 'Hotels',
    'city.nightclubs.eyebrow': 'Nachtclubs',
    'spots.filter.all': 'Alle',
    'spots.filter.cafes': 'Cafés',
    'spots.filter.bars': 'Bars',
    'spots.filter.parks': 'Parks',
    'spots.filter.culture': 'Kultur',
    'spots.filter.shopping': 'Shopping',
    'spots.filter.foodspots': 'Foodspots',
    'spot.readmore': 'Mehr lesen',
    'feat.readmore': 'Mehr lesen',
    'feat.featured': 'Empfohlener Beitrag',
    'hotel.from': 'ab',
    'hotel.night': '/ Nacht',
    'hotel.discover': 'Entdecken',

    'hero.eyebrow': 'Das städtische Archiv',
    'hero.h1': 'Entdecke<br>die <em>verborgene</em><br>Stadt',
    'hero.sub': 'Geh über das Bekannte hinaus. Entdecke, was andere übersehen.',
    'hero.cta': 'Jetzt entdecken',
    'hero.scroll': 'Scrollen',

    'intro.label': 'Das Archiv',
    'intro.h2': 'Eine Sammlung <em>verborgener Orte.</em>',
    'intro.p': 'Handverlesene Hotels, versteckte Schätze und Reiseziele rund um den Globus — ausgewählt nach Charakter, Atmosphäre und Einzigartigkeit.',

    'ov.destinations': 'Reiseziele',
    'ov.destinations.sub': 'Städte & versteckte Orte',
    'ov.hotels': 'Hotels',
    'ov.hotels.sub': 'Top Hotelketten der Welt',
    'ov.nightclubs': 'Nachtclubs',
    'ov.nightclubs.sub': 'After Dark',
    'ov.about': 'Über uns',
    'ov.about.sub': 'Die Geschichte',

    'dest.eyebrow': 'Reiseziele',
    'dest.h2': 'Entdecke<br><em>die Städte</em>',
    'dest.munich.tag': 'Deutschland · Bayern',
    'dest.munich.city': 'München',
    'dest.munich.sub': 'Bayerns Hauptstadt — wo Tradition, Kultur und Lebensgefühl zusammenkommen.',
    'dest.shanghai.tag': 'China · Ostasien',
    'dest.shanghai.city': 'Shanghai',
    'dest.shanghai.sub': 'Chinas größte Stadt — geprägt von Skyline, Kultur und endloser Energie.',
    'dest.london.tag': 'Großbritannien · England',
    'dest.london.city': 'London',
    'dest.london.sub': 'Eine Hauptstadt der Schichten — königlicher Pomp, Underground-Sound und stille Ecken dazwischen.',
    'dest.tokyo.tag': 'Japan · Kantō',
    'dest.tokyo.city': 'Tokio',
    'dest.tokyo.sub': 'Wo Neon und Ritual nebeneinander bestehen — eine Stadt der kleinen Gassen und der riesigen Maßstäbe.',
    'dest.explore': 'Entdecken →',
    'dest.soon': 'Bald verfügbar',
    'dest.readmore': 'Weitere Städte',
    'dest.comingsoon.title': 'Bald <em>verfügbar</em>',
    'dest.comingsoon.sub': 'Weitere Städte folgen bald im Archiv',

    'hotelsFeature.eyebrow': 'Hotels',
    'hotelsFeature.title': 'Top Hotelketten der <em>Welt</em>',
    'hotelsFeature.text': 'Von legendären Traditionshäusern bis zu abgelegenen Refugien — eine kuratierte Auswahl der Namen, die heute definieren, was luxuriöse Gastfreundschaft bedeutet. Jede Kette steht für eine andere Philosophie: Design, Ort, Wellness oder pure Größe.',
    'hotelsFeature.cta': 'Die Ketten entdecken',

    'clubs.eyebrow': 'Die besten Nachtclubs der Welt',
    'clubs.h2': 'After<br><em>Dark</em>',
    'clubs.desc': 'Entdecke die Top-Nachtclubs der Welt — für unvergleichliche Beats und unvergessliche Nächte.',
    'clubs.hi.name': 'Hï Ibiza',
    'clubs.hi.genre': 'Ibiza, Spanien · Techno · House · EDM',
    'clubs.hi.desc': 'Mehrfach zum №1-Club der Welt gewählt — futuristisches Design, zwei Hauptbereiche und die gefragtesten DJs des Jahrzehnts.',
    'clubs.echo.name': 'Echostage',
    'clubs.echo.genre': 'Washington D.C., USA · House · Trance · Bass',
    'clubs.echo.desc': 'Nordamerikas größte Konzertlocation für elektronische Musik — riesige Warehouse-Fläche, immersive Lichtshows, Headline-Residencies.',
    'clubs.berg.name': 'Berghain',
    'clubs.berg.genre': 'Berlin, Deutschland · Techno · Industrial',
    'clubs.berg.desc': 'Ein ehemaliges Heizkraftwerk, heute Tempel des Techno. Berühmt für seine kompromisslose Tür, Marathon-Sets und ein Soundsystem, das das Genre prägt.',
    'clubs.fab.name': 'Fabric',
    'clubs.fab.genre': 'London, UK · House · Techno · Drum & Bass',
    'clubs.fab.desc': 'Drei Räume unter dem Smithfield Market und ein Bodysonic-Floor, der mit dem Bass mitvibriert — eine Londoner Institution seit über zwei Jahrzehnten.',
    'clubs.pacha.name': 'Pacha',
    'clubs.pacha.genre': 'Ibiza, Spanien · House · Disco · Open Format',
    'clubs.pacha.desc': 'Die Legende mit den Kirschen. Seit 1973 geöffnet — Pacha hat Ibiza zur globalen Hauptstadt des Nachtlebens gemacht. Glamour, Geschichte, endlose Sommer.',
    'clubs.unvrs.name': 'UNVRS',
    'clubs.unvrs.genre': 'Ibiza, Spanien · Techno · House · EDM',
    'clubs.unvrs.desc': 'Eröffnet im Sommer 2025 auf dem legendären Privilege-Gelände — ein Mehrraum-Mega-Venue mit der weltweit ersten 360°-Open-Air-Bühne und der ambitioniertesten Produktion der Insel.',

    'about.eyebrow': 'Über uns',
    'about.h': 'Aus Leidenschaft für <em>Hotellerie und Tourismus.</em>',
    'about.p': 'Hi, ich bin Konrad Xu. Meine Leidenschaft für Hotels und Gastfreundschaft begann mit zwölf Jahren — und wuchs mit der Zeit zu einem tiefen Interesse daran, wie Orte wirklich denkwürdige Erlebnisse schaffen können. Ich habe diese Plattform geschaffen, um einzigartige Hotels, versteckte Orte und inspirierende Plätze in ganz Europa zu zeigen, jenseits der Standard-Reiseführer.',

    'news.eyebrow': 'Newsletter',
    'news.h': 'Bleib im <em>Archiv.</em>',
    'news.p': 'Neue Reiseziele, Hotel-Features und Stadt-Guides — direkt in dein Postfach. Kein Spam, nur das Gute.',
    'news.namePlaceholder': 'Dein Name',
    'news.emailPlaceholder': 'deine@email.de',
    'news.button': 'Abonnieren',
    'news.success': 'Danke — du bist auf der Liste.',
    'news.errorEmail': 'Bitte gib eine gültige E-Mail-Adresse ein.',
    'news.errorName': 'Bitte gib deinen Namen ein.',

    'footer.nav': 'Navigation',
    'footer.info': 'Infos',
    'footer.aboutLink': 'Über uns',
    'footer.newsletter': 'Newsletter',
    'footer.contact': 'Kontakt',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.copy': '© 2026 City Archivist — Alle Rechte vorbehalten',

    'hotelsPage.eyebrow': 'Das Hotel-Archiv',
    'hotelsPage.h1': 'Top Hotelketten<br>der <em>Welt</em>',
    'hotelsPage.sub': 'Sechs Namen, die moderne Luxushotellerie prägen.',
    'hotelsPage.note.label': 'Ein Hinweis',
    'hotelsPage.note.p': 'Diese Liste ist ein Ausgangspunkt, kein Ranking. Jede dieser Gruppen steht für eine eigene Philosophie der Gastfreundschaft — und die beste ist schlicht die, die zu deiner Art zu reisen passt.',
    'hotels.aman.identity': 'Ultra-Luxus · Abgelegene Refugien',
    'hotels.aman.origin': 'Gegründet 1988 · Phuket, Thailand',
    'hotels.aman.desc': 'Aman hat das Konzept des kleinen, intensiv privaten Resorts geprägt. Jedes Haus fügt sich in seine Landschaft — Tempel in Bhutan, Dünen in Utah, Paläste in Venedig — mit einer unverwechselbaren Architektur aus Stein, Wasser und Stille. Die Marke steht für Einsamkeit, Ritual und Diskretion.',
    'hotels.fs.identity': 'Luxus · Globale Reichweite',
    'hotels.fs.origin': 'Gegründet 1960 · Toronto, Kanada',
    'hotels.fs.desc': 'Der Maßstab für konstanten Fünf-Sterne-Service in über 50 Ländern. Vom historischen George V in Paris bis zu Wasservillen in Bora Bora — Four Seasons definiert, wie verlässlicher, großzügiger Luxus sich anfühlt. Überall.',
    'hotels.six.identity': 'Wellness · Nachhaltigkeit',
    'hotels.six.origin': 'Gegründet 1995 · Malediven',
    'hotels.six.desc': 'Eine andere Definition von Luxus — barfuß, bewusst, tief regenerierend. Six Senses verbindet Wellness der Spitzenklasse mit ernsthafter Nachhaltigkeit, in den schönsten Küsten- und Berglandschaften der Welt.',
    'hotels.stregis.identity': 'Grand Luxury · Tradition',
    'hotels.stregis.origin': 'Gegründet 1904 · New York, USA',
    'hotels.stregis.desc': 'Glanz aus alter Welt mit modernem Adressbuch. Aus der Vision von John Jacob Astor IV im Jahr 1904 entstanden, ist St. Regis bekannt für seinen Butler-Service, opulente Interieurs und Rituale wie das abendliche Säbeln der Champagner-Flasche.',
    'hotels.rosewood.identity': 'Sense of Place · Kultur',
    'hotels.rosewood.origin': 'Gegründet 1979 · Dallas, USA',
    'hotels.rosewood.desc': 'Rosewoods Philosophie "A Sense of Place" bedeutet: kein Haus fühlt sich wie das andere an. Jedes Hotel — vom Hôtel de Crillon in Paris bis zum Carlyle in New York — ist tief in Architektur, Kunst und Kultur seiner Stadt verankert.',
    'hotels.belmond.identity': 'Ikonische Reisen · Schiene & See',
    'hotels.belmond.origin': 'Gegründet 1976 · Orient-Express',
    'hotels.belmond.desc': 'Wo der Weg das Ziel ist. Belmond begann mit der Wiederbelebung des Venice Simplon-Orient-Express und versammelt heute die romantischsten Erlebnisse der Welt — italienische Klippenhotels, peruanische Schlafzüge, Kanalbarken durch das Burgund.',
    'hotels.visit': 'Besuchen',

    'club.location.eyebrow': 'Lage',
    'club.location.h': 'Den <em>Club finden</em>',
    'club.location.address': 'Adresse',
    'club.location.season': 'Saison',
    'club.location.schedule': 'Programm',
    'club.location.hours': 'Öffnungszeiten',
    'club.location.door': 'Türpolitik',
    'club.story.label': 'Die Geschichte',
    'club.music.label': 'Musik & Vibe',
    'club.visit.eyebrow': 'Besuchen',
    'club.visit.cta': 'Website besuchen',
    'club.map.placeholder': 'Karte / Foto',
    'club.meta.opened': 'Eröffnet',
    'club.meta.capacity': 'Kapazität',
    'club.meta.season': 'Saison',
    'club.meta.weekend': 'Wochenende',
    'club.meta.rooms': 'Räume',
    'club.meta.years': 'Jahre',

    'welcome.greeting': 'Willkommen bei City Archivist',
    'welcome.sub': 'Wähle deine Sprache, um zu beginnen.',
    'welcome.continue': 'Fortfahren',
  },

  zh: {
    'nav.home': '首页',
    'nav.destinations': '目的地',
    'nav.hotels': '酒店',
    'nav.nightclubs': '夜店',
    'nav.about': '关于我们',
    'nav.search': '搜索',
    'nav.back': '返回首页',
    'nav.allClubs': '所有夜店',
    'nav.allCities': '所有城市',
    'nav.language': '语言',
    'nav.spots': '隐秘之地',
    'nav.reads': '阅读',
    'city.spots.eyebrow': '隐秘之地',
    'city.reads.eyebrow': '阅读',
    'city.hotels.eyebrow': '酒店',
    'city.nightclubs.eyebrow': '夜店',
    'spots.filter.all': '全部',
    'spots.filter.cafes': '咖啡馆',
    'spots.filter.bars': '酒吧',
    'spots.filter.parks': '公园',
    'spots.filter.culture': '文化',
    'spots.filter.shopping': '购物',
    'spots.filter.foodspots': '美食',
    'spot.readmore': '阅读更多',
    'feat.readmore': '阅读更多',
    'feat.featured': '精选文章',
    'hotel.from': '起价',
    'hotel.night': '/ 晚',
    'hotel.discover': '查看',

    'hero.eyebrow': '城市档案',
    'hero.h1': '探索<br><em>隐藏的</em><br>城市',
    'hero.sub': '走出熟悉的范围,发现别人忽略的精彩。',
    'hero.cta': '立即探索',
    'hero.scroll': '向下滚动',

    'intro.label': '档案',
    'intro.h2': '一份<em>隐秘之地</em>的收藏。',
    'intro.p': '精挑细选的酒店、隐秘瑰宝与全球目的地 — 因其独特气质、氛围与个性而入选。',

    'ov.destinations': '目的地',
    'ov.destinations.sub': '城市与隐秘之地',
    'ov.hotels': '酒店',
    'ov.hotels.sub': '全球顶级酒店集团',
    'ov.nightclubs': '夜店',
    'ov.nightclubs.sub': '夜幕之后',
    'ov.about': '关于我们',
    'ov.about.sub': '故事',

    'dest.eyebrow': '目的地',
    'dest.h2': '探索<br><em>城市</em>',
    'dest.munich.tag': '德国 · 巴伐利亚',
    'dest.munich.city': '慕尼黑',
    'dest.munich.sub': '巴伐利亚的首府 — 传统、文化与生活方式在此交织。',
    'dest.shanghai.tag': '中国 · 东亚',
    'dest.shanghai.city': '上海',
    'dest.shanghai.sub': '中国最大的城市 — 由天际线、文化与不停歇的活力定义。',
    'dest.london.tag': '英国 · 英格兰',
    'dest.london.city': '伦敦',
    'dest.london.sub': '层次丰富的首都 — 王室典礼、地下乐声,以及之间的安静角落。',
    'dest.tokyo.tag': '日本 · 关东',
    'dest.tokyo.city': '东京',
    'dest.tokyo.sub': '霓虹与仪式并存的城市 — 小巷与宏大尺度交织。',
    'dest.explore': '探索 →',
    'dest.soon': '即将推出',
    'dest.readmore': '更多城市',
    'dest.comingsoon.title': '即将<em>推出</em>',
    'dest.comingsoon.sub': '更多城市即将加入档案',

    'hotelsFeature.eyebrow': '酒店',
    'hotelsFeature.title': '全球顶级<em>酒店集团</em>',
    'hotelsFeature.text': '从传奇的传承酒店到偏远的庇护所 — 一份精心策划的名单,定义了今天奢华待客之道的真正含义。每个集团代表一种不同的理念:设计、地方、健康或纯粹的辉煌。',
    'hotelsFeature.cta': '探索酒店集团',

    'clubs.eyebrow': '世界顶级夜店',
    'clubs.h2': '夜<br><em>幕降临</em>',
    'clubs.desc': '探索世界顶级夜店 — 无与伦比的节奏,难忘的夜晚。',
    'clubs.hi.name': 'Hï Ibiza',
    'clubs.hi.genre': '伊比萨, 西班牙 · Techno · House · EDM',
    'clubs.hi.desc': '多次被评为全球第一夜店 — 未来主义设计、两个主舞池,以及当今最炙手可热的 DJ 阵容。',
    'clubs.echo.name': 'Echostage',
    'clubs.echo.genre': '华盛顿特区, 美国 · House · Trance · Bass',
    'clubs.echo.desc': '北美规模最大的电子音乐场地 — 巨型仓库空间、沉浸式灯光秀、头牌驻场表演。',
    'clubs.berg.name': 'Berghain',
    'clubs.berg.genre': '柏林, 德国 · Techno · Industrial',
    'clubs.berg.desc': '由旧发电厂改造而成的 Techno 殿堂。以严苛的入场门槛、马拉松级 DJ 演出和定义流派的音响系统闻名。',
    'clubs.fab.name': 'Fabric',
    'clubs.fab.genre': '伦敦, 英国 · House · Techno · Drum & Bass',
    'clubs.fab.desc': '三个房间藏于 Smithfield 市场之下,Bodysonic 舞池随低音震动 — 二十多年来的伦敦地标。',
    'clubs.pacha.name': 'Pacha',
    'clubs.pacha.genre': '伊比萨, 西班牙 · House · Disco · Open Format',
    'clubs.pacha.desc': '樱桃标志的传奇。1973 年开业至今,Pacha 让伊比萨成为全球夜生活之都 — 魅力、历史与永恒的夏天。',
    'clubs.unvrs.name': 'UNVRS',
    'clubs.unvrs.genre': '伊比萨, 西班牙 · Techno · House · EDM',
    'clubs.unvrs.desc': '2025 年夏天在传奇的 Privilege 旧址开业 — 多厅巨型场地,拥有全球首个 360° 露天舞池,以及全岛最雄心勃勃的制作。',

    'about.eyebrow': '关于我们',
    'about.h': '源于对<em>酒店与旅游业</em>的热爱。',
    'about.p': '你好,我是 Konrad Xu。我对酒店与待客之道的热爱始于十二岁,逐渐演变为对"地方如何创造真正难忘的体验"的深入兴趣。我创建了这个平台,帮助大家发现独特的酒店、隐秘之地和富有灵感的所在,超越普通旅行指南。',

    'news.eyebrow': '订阅',
    'news.h': '留在 <em>档案中。</em>',
    'news.p': '新目的地、酒店专题与城市指南 — 直接送达你的邮箱。无垃圾邮件,只有精选内容。',
    'news.namePlaceholder': '你的姓名',
    'news.emailPlaceholder': 'you@email.com',
    'news.button': '订阅',
    'news.success': '感谢 — 你已加入名单。',
    'news.errorEmail': '请输入有效的电子邮件地址。',
    'news.errorName': '请输入你的姓名。',

    'footer.nav': '导航',
    'footer.info': '信息',
    'footer.aboutLink': '关于我们',
    'footer.newsletter': '订阅',
    'footer.contact': '联系',
    'footer.imprint': '版权信息',
    'footer.privacy': '隐私政策',
    'footer.copy': '© 2026 City Archivist — 版权所有',

    'hotelsPage.eyebrow': '酒店档案',
    'hotelsPage.h1': '全球顶级<br><em>酒店集团</em>',
    'hotelsPage.sub': '六个定义现代奢华待客之道的名字。',
    'hotelsPage.note.label': '说明',
    'hotelsPage.note.p': '这份名单是一个起点,而非排名。每个集团都代表一种不同的待客哲学 — 最好的那一个,就是最贴近你旅行方式的那一个。',
    'hotels.aman.identity': '极致奢华 · 偏远庇护所',
    'hotels.aman.origin': '创立于 1988 · 普吉, 泰国',
    'hotels.aman.desc': 'Aman 开创了小型、极度私密度假村的概念。每一处都嵌入其所在的地景之中 — 不丹的寺庙、犹他的沙丘、威尼斯的宫殿 — 拥有独特的石、水、静谧建筑语言。品牌代表孤独、仪式与低调。',
    'hotels.fs.identity': '奢华 · 全球规模',
    'hotels.fs.origin': '创立于 1960 · 多伦多, 加拿大',
    'hotels.fs.desc': '在 50 多个国家始终如一的五星服务的标杆。从巴黎历史悠久的乔治五世到博拉博拉的水上别墅 — Four Seasons 定义了可靠而慷慨的奢华,无论身在何处。',
    'hotels.six.identity': '健康 · 可持续',
    'hotels.six.origin': '创立于 1995 · 马尔代夫',
    'hotels.six.desc': '另一种奢华定义 — 赤足、用心、深度修复。Six Senses 将世界级的健康项目与认真的可持续实践相结合,坐落于地球上最美丽的海岸与山地之间。',
    'hotels.stregis.identity': '宏伟奢华 · 传承',
    'hotels.stregis.origin': '创立于 1904 · 纽约, 美国',
    'hotels.stregis.desc': '旧世界的辉煌,与现代地址簿的结合。源自 John Jacob Astor IV 在 1904 年的愿景,St. Regis 以其管家服务、华丽内饰和经典仪式 — 包括夜晚的香槟开瓶仪式 — 闻名世界。',
    'hotels.rosewood.identity': '场所感 · 文化',
    'hotels.rosewood.origin': '创立于 1979 · 达拉斯, 美国',
    'hotels.rosewood.desc': 'Rosewood "A Sense of Place" 的理念意味着没有两家酒店感觉相同。从巴黎的 Hôtel de Crillon 到纽约的 The Carlyle — 每一处都根植于所在城市的建筑、艺术与文化。',
    'hotels.belmond.identity': '标志性旅程 · 铁路与海洋',
    'hotels.belmond.origin': '创立于 1976 · 东方快车',
    'hotels.belmond.desc': '在这里,旅程即目的地。Belmond 始于威尼斯辛普伦东方快车的复兴,如今汇集了世界上最浪漫的体验 — 意大利悬崖酒店、秘鲁卧铺列车、勃艮第运河船。',
    'hotels.visit': '访问',

    'club.location.eyebrow': '地点',
    'club.location.h': '找到 <em>这家俱乐部</em>',
    'club.location.address': '地址',
    'club.location.season': '季节',
    'club.location.schedule': '安排',
    'club.location.hours': '开放时间',
    'club.location.door': '入场政策',
    'club.story.label': '故事',
    'club.music.label': '音乐与氛围',
    'club.visit.eyebrow': '访问',
    'club.visit.cta': '访问官网',
    'club.map.placeholder': '地图 / 照片',
    'club.meta.opened': '开业',
    'club.meta.capacity': '容量',
    'club.meta.season': '季节',
    'club.meta.weekend': '周末',
    'club.meta.rooms': '房间',
    'club.meta.years': '年',

    'welcome.greeting': '欢迎来到 City Archivist',
    'welcome.sub': '请选择你的语言开始浏览。',
    'welcome.continue': '继续',
  }
};

const SUPPORTED_LANGS = ['en', 'de', 'zh'];
const LANG_KEY = 'cityArchivistLang';
const NEWSLETTER_KEY = 'cityArchivistNewsletter';

// Display labels per language
const LANG_LABELS = {
  en: { native: 'English', code: 'EN', english: 'English' },
  de: { native: 'Deutsch', code: 'DE', english: 'German'  },
  zh: { native: '中文',     code: '中文', english: 'Chinese' },
};

function getCurrentLang() {
  const saved = localStorage.getItem(LANG_KEY);
  return SUPPORTED_LANGS.includes(saved) ? saved : null;
}

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  applyLang(lang);
  closeLangModal();
}

function applyLang(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const config = el.getAttribute('data-i18n-attr');
    config.split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (attr && key && dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });
  });

  // Update the lang-trigger label(s)
  document.querySelectorAll('[data-lang-current]').forEach(el => {
    el.textContent = LANG_LABELS[lang]?.code || 'EN';
  });
}

/* ============================================================
   Inject all popup styles once
   ============================================================ */
function injectPopupStyles() {
  if (document.getElementById('ca-popup-styles')) return;
  const style = document.createElement('style');
  style.id = 'ca-popup-styles';
  style.textContent = `
    /* ── Nav language trigger ── */
    .ca-lang-trigger {
      display: inline-flex; align-items: baseline; gap: 8px;
      background: transparent; border: none; cursor: pointer;
      padding: 4px 0;
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1rem; font-weight: 400;
      letter-spacing: 0.06em;
      color: inherit; opacity: 0.75;
      transition: opacity 0.3s;
      position: relative;
    }
    .ca-lang-trigger:hover { opacity: 1; }
    .ca-lang-trigger::after {
      content: ''; position: absolute;
      bottom: -2px; left: 0;
      width: 100%; height: 1px;
      background: currentColor; opacity: 0;
      transition: opacity 0.3s;
    }
    .ca-lang-trigger:hover::after { opacity: 0.4; }

    /* ── Full-screen overlay (welcome + language) ── */
    .ca-modal {
      position: fixed; inset: 0; z-index: 1100;
      background: rgba(18,16,12,0.94);
      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      display: flex; align-items: center; justify-content: center;
      padding: 3rem 2rem;
      animation: caFadeIn 0.5s ease;
      color: rgba(248,245,239,0.9);
    }
    @keyframes caFadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes caRise   { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }

    /* No card chrome — pure typography centered */
    .ca-modal-card {
      position: relative;
      width: 100%; max-width: 460px;
      text-align: center;
      animation: caRise 0.7s ease both;
    }
    .ca-modal-mark {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1rem;
      color: rgba(212,188,138,0.55);
      margin-bottom: 1.6rem;
      letter-spacing: 0.04em;
    }
    .ca-modal-eyebrow {
      font-family: 'Jost', sans-serif;
      font-size: 9px; font-weight: 300;
      letter-spacing: 0.36em; text-transform: uppercase;
      color: rgba(248,245,239,0.4);
      margin-bottom: 1rem;
    }
    .ca-modal-title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 2rem; font-weight: 300;
      line-height: 1.25; color: rgba(248,245,239,0.95);
      margin-bottom: 0.6rem;
      letter-spacing: 0.01em;
    }
    .ca-modal-title em { font-style: normal; color: rgba(212,188,138,0.92); }
    .ca-modal-sub {
      font-family: 'Jost', sans-serif;
      font-size: 11px; font-weight: 300;
      letter-spacing: 0.08em;
      color: rgba(248,245,239,0.38);
      margin-bottom: 3.5rem;
    }
    .ca-modal-close {
      position: absolute; top: -3rem; right: 0;
      background: transparent; border: none;
      width: 36px; height: 36px;
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.7rem; line-height: 1;
      color: rgba(248,245,239,0.45);
      cursor: pointer;
      transition: color 0.25s, transform 0.4s;
    }
    .ca-modal-close:hover { color: rgba(212,188,138,1); transform: rotate(90deg); }

    /* ── Language list (no boxes, just type) ── */
    .ca-lang-list {
      list-style: none; padding: 0; margin: 0;
      display: flex; flex-direction: column; gap: 1.8rem;
    }
    .ca-lang-list button {
      background: transparent; border: none; cursor: pointer;
      width: 100%; padding: 0;
      display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
      color: inherit;
      position: relative;
    }
    .ca-lang-list .native {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 2rem; font-weight: 300;
      line-height: 1; color: rgba(248,245,239,0.9);
      transition: color 0.3s;
    }
    .ca-lang-list .english {
      font-family: 'Jost', sans-serif;
      font-size: 9.5px; font-weight: 300;
      letter-spacing: 0.28em; text-transform: uppercase;
      color: rgba(248,245,239,0.35);
      transition: color 0.3s;
    }
    /* subtle gold underline on hover/active — no italic */
    .ca-lang-list button::after {
      content: ''; position: absolute;
      bottom: -10px; left: 50%;
      width: 0; height: 1px;
      background: rgba(212,188,138,0.7);
      transition: width 0.35s, left 0.35s;
    }
    .ca-lang-list button:hover::after,
    .ca-lang-list button.active::after {
      width: 60px; left: calc(50% - 30px);
    }
    .ca-lang-list button:hover .native,
    .ca-lang-list button.active .native {
      color: rgba(212,188,138,1);
    }
    .ca-lang-list button:hover .english,
    .ca-lang-list button.active .english {
      color: rgba(248,245,239,0.65);
    }

    /* ── Coming Soon list (same modal frame) ── */
    .ca-coming-list {
      list-style: none; padding: 0; margin: 0;
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 1.6rem 2.5rem;
      text-align: left;
    }
    .ca-coming-list li {
      display: flex; flex-direction: column; gap: 0.3rem;
      padding-bottom: 0.9rem;
      border-bottom: 1px solid rgba(248,245,239,0.08);
    }
    .ca-coming-list .name {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.35rem; font-weight: 300;
      color: rgba(248,245,239,0.85);
      line-height: 1;
    }
    .ca-coming-list .country {
      font-family: 'Jost', sans-serif;
      font-size: 8.5px; letter-spacing: 0.28em;
      text-transform: uppercase;
      color: rgba(212,188,138,0.55);
    }

    /* ── Hamburger trigger (3 lines) ── */
    .ca-menu-trigger {
      background: transparent; border: none; cursor: pointer;
      width: 30px; height: 24px;
      padding: 0;
      display: flex; flex-direction: column; justify-content: space-between;
      color: inherit;
      transition: opacity 0.2s;
    }
    .ca-menu-trigger:hover { opacity: 0.65; }
    .ca-menu-trigger span {
      display: block;
      width: 100%; height: 1px;
      background: currentColor;
      transition: transform 0.35s ease, opacity 0.25s, width 0.3s;
    }
    .ca-menu-trigger:hover span:nth-child(2) { width: 70%; margin-left: auto; }

    /* ── Menu panel (slides in from right) ── */
    .ca-menu-panel {
      position: fixed; top: 0; right: 0;
      width: 400px; max-width: 100vw;
      height: 100vh; height: 100dvh;
      background: rgba(18,16,12,0.97);
      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      z-index: 1100;
      padding: 5rem 3rem 3rem;
      display: flex; flex-direction: column;
      overflow-y: auto;
      animation: caMenuIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      color: rgba(248,245,239,0.9);
    }
    @keyframes caMenuIn {
      from { transform: translateX(100%); }
      to   { transform: translateX(0); }
    }
    .ca-menu-close {
      position: absolute; top: 1rem; right: 1rem;
      z-index: 10;
      background: transparent;
      border: 1px solid rgba(248,245,239,0.25);
      width: 52px; height: 52px;
      font-family: 'Jost', sans-serif;
      font-size: 1.6rem; font-weight: 200; line-height: 1;
      color: rgba(248,245,239,0.95);
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: border-color 0.25s, color 0.25s, background 0.25s, transform 0.4s;
      -webkit-tap-highlight-color: transparent;
    }
    .ca-menu-close:hover, .ca-menu-close:active {
      color: rgba(212,188,138,1);
      border-color: rgba(212,188,138,0.7);
      background: rgba(212,188,138,0.08);
      transform: rotate(90deg);
    }

    .ca-menu-mark {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1rem; color: rgba(212,188,138,0.55);
      margin-bottom: 2.4rem;
      letter-spacing: 0.04em;
    }

    .ca-menu-nav {
      display: flex; flex-direction: column;
      gap: 0;
      flex: 1;
    }
    .ca-menu-item, summary.ca-menu-item {
      display: flex; align-items: center; justify-content: space-between;
      gap: 1rem;
      width: 100%;
      background: transparent; border: none; cursor: pointer;
      text-align: left;
      padding: 1.1rem 0;
      border-bottom: 1px solid rgba(248,245,239,0.07);
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.65rem; font-weight: 300;
      line-height: 1; color: rgba(248,245,239,0.92);
      text-decoration: none;
      transition: color 0.25s, padding-left 0.25s;
      list-style: none;
    }
    summary.ca-menu-item::-webkit-details-marker,
    summary.ca-menu-item::marker { display: none; content: ''; }
    .ca-menu-item:hover { color: rgba(212,188,138,1); padding-left: 6px; }
    .ca-menu-chevron {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.1rem;
      color: rgba(212,188,138,0.55);
      transition: transform 0.35s ease;
    }
    details.ca-menu-group[open] .ca-menu-chevron { transform: rotate(180deg); }

    .ca-menu-sub {
      list-style: none; padding: 0; margin: 0;
      animation: caSubFade 0.3s ease;
    }
    @keyframes caSubFade {
      from { opacity: 0; transform: translateY(-4px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .ca-menu-sub li { border-bottom: 1px solid rgba(248,245,239,0.05); }
    .ca-menu-sub a {
      display: block;
      padding: 0.85rem 0 0.85rem 1.2rem;
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.05rem; font-weight: 300;
      color: rgba(248,245,239,0.6);
      text-decoration: none;
      transition: color 0.25s, padding-left 0.25s;
    }
    .ca-menu-sub a:hover { color: rgba(212,188,138,1); padding-left: 1.6rem; }

    .ca-menu-item > span { pointer-events: none; }

    .ca-menu-backdrop {
      position: fixed; inset: 0;
      background: rgba(12,10,8,0.78);
      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
      z-index: 1099;
      animation: caFadeIn 0.4s ease;
    }

    @media (max-width: 480px) {
      .ca-modal-title { font-size: 1.7rem; }
      .ca-lang-list .native { font-size: 1.85rem; }
      .ca-modal-close { top: -2.5rem; }
      .ca-coming-list { grid-template-columns: 1fr; gap: 1.2rem; }
      .ca-menu-panel { width: 88vw; padding: 5rem 2rem 2rem; }
      .ca-menu-item { font-size: 1.45rem; padding: 1rem 0; }
    }
  `;
  document.head.appendChild(style);
}

/* ============================================================
   Welcome popup (first visit)
   ============================================================ */
function showWelcomePopup() {
  injectPopupStyles();
  if (document.getElementById('ca-welcome')) return;

  const overlay = document.createElement('div');
  overlay.id = 'ca-welcome';
  overlay.className = 'ca-modal';
  overlay.innerHTML = `
    <div class="ca-modal-card" role="dialog" aria-modal="true" aria-label="Welcome">
      <div class="ca-modal-mark">✦</div>
      <div class="ca-modal-eyebrow">City Archivist</div>
      <h2 class="ca-modal-title"><em>Welcome</em></h2>
      <p class="ca-modal-sub">Choose your language to begin</p>
      <ul class="ca-lang-list">
        <li><button data-lang-pick="de"><span class="native">Deutsch</span><span class="english">German</span></button></li>
        <li><button data-lang-pick="en"><span class="native">English</span><span class="english">English</span></button></li>
        <li><button data-lang-pick="zh"><span class="native">中文</span><span class="english">Chinese</span></button></li>
      </ul>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelectorAll('[data-lang-pick]').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.getAttribute('data-lang-pick'));
      hideWelcomePopup();
    });
  });
}

function hideWelcomePopup() {
  const el = document.getElementById('ca-welcome');
  if (el) el.remove();
}

/* ============================================================
   Language modal (triggered from nav)
   ============================================================ */
function showLangModal() {
  injectPopupStyles();
  if (document.getElementById('ca-langmodal')) return;
  const current = getCurrentLang() || 'en';
  const dict = TRANSLATIONS[current];

  const overlay = document.createElement('div');
  overlay.id = 'ca-langmodal';
  overlay.className = 'ca-modal';
  overlay.innerHTML = `
    <div class="ca-modal-card" role="dialog" aria-modal="true" aria-label="Language">
      <button class="ca-modal-close" aria-label="Close" data-close-modal>×</button>
      <div class="ca-modal-mark">✦</div>
      <h2 class="ca-modal-title"><em>${dict['nav.language']}</em></h2>
      <p class="ca-modal-sub">Choose your preferred language</p>
      <ul class="ca-lang-list">
        <li><button data-lang-pick="de" class="${current==='de'?'active':''}"><span class="native">Deutsch</span><span class="english">German</span></button></li>
        <li><button data-lang-pick="en" class="${current==='en'?'active':''}"><span class="native">English</span><span class="english">English</span></button></li>
        <li><button data-lang-pick="zh" class="${current==='zh'?'active':''}"><span class="native">中文</span><span class="english">Chinese</span></button></li>
      </ul>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelectorAll('[data-lang-pick]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang-pick')));
  });

  // Click outside card → close
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.hasAttribute('data-close-modal')) closeLangModal();
  });
  document.addEventListener('keydown', escClose);
}

function closeLangModal() {
  const el = document.getElementById('ca-langmodal');
  if (el) el.remove();
  document.removeEventListener('keydown', escClose);
}
function escClose(e) { if (e.key === 'Escape') closeLangModal(); }

/* ============================================================
   Coming Soon modal (more cities on the destinations section)
   ============================================================ */
const COMING_SOON_CITIES = [
  { name: 'Paris',     country: 'France' },
  { name: 'New York',  country: 'USA' },
  { name: 'Rome',      country: 'Italy' },
  { name: 'Milan',     country: 'Italy' },
  { name: 'Barcelona', country: 'Spain' },
  { name: 'Dubai',     country: 'UAE' },
  { name: 'Singapore', country: 'Singapore' },
  { name: 'Hong Kong', country: 'China' },
];

function showComingSoonModal() {
  injectPopupStyles();
  if (document.getElementById('ca-coming')) return;
  const lang = getCurrentLang() || 'en';
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const overlay = document.createElement('div');
  overlay.id = 'ca-coming';
  overlay.className = 'ca-modal';
  overlay.innerHTML = `
    <div class="ca-modal-card" role="dialog" aria-modal="true" aria-label="Coming soon">
      <button class="ca-modal-close" aria-label="Close" data-close-modal>×</button>
      <div class="ca-modal-mark">✦</div>
      <h2 class="ca-modal-title">${dict['dest.comingsoon.title']}</h2>
      <p class="ca-modal-sub">${dict['dest.comingsoon.sub']}</p>
      <ul class="ca-coming-list">
        ${COMING_SOON_CITIES.map(c => `<li><span class="name">${c.name}</span><span class="country">${c.country}</span></li>`).join('')}
      </ul>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.hasAttribute('data-close-modal')) closeComingSoonModal();
  });
  document.addEventListener('keydown', escCloseComing);
}

function closeComingSoonModal() {
  const el = document.getElementById('ca-coming');
  if (el) el.remove();
  document.removeEventListener('keydown', escCloseComing);
}
function escCloseComing(e) { if (e.key === 'Escape') closeComingSoonModal(); }

/* ============================================================
   Hamburger menu (slide-out from right)
   ============================================================ */
const MENU_DESTINATIONS = [
  { name: 'Munich',   href: 'muenchen.html' },
  { name: 'Shanghai', href: 'shanghai.html' },
  { name: 'London',   href: 'london.html' },
  { name: 'Tokyo',    href: 'tokyo.html' },
];
const MENU_NIGHTCLUBS = [
  { name: 'Hï Ibiza',  href: 'hi-ibiza.html' },
  { name: 'Echostage', href: 'echostage.html' },
  { name: 'Berghain',  href: 'berghain.html' },
  { name: 'Fabric',    href: 'fabric.html' },
  { name: 'Pacha',     href: 'pacha.html' },
  { name: 'UNVRS',     href: 'unvrs.html' },
];

function showMenu() {
  injectPopupStyles();
  if (document.getElementById('ca-menu')) return;
  const lang = getCurrentLang() || 'en';
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const backdrop = document.createElement('div');
  backdrop.id = 'ca-menu-backdrop';
  backdrop.className = 'ca-menu-backdrop';

  const panel = document.createElement('aside');
  panel.id = 'ca-menu';
  panel.className = 'ca-menu-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-label', 'Site menu');

  const destItems = MENU_DESTINATIONS.map(d => `<li><a href="${d.href}">${d.name}</a></li>`).join('');
  const clubItems = MENU_NIGHTCLUBS.map(c => `<li><a href="${c.href}">${c.name}</a></li>`).join('');

  panel.innerHTML = `
    <button class="ca-menu-close" aria-label="Close" data-close-menu>✕</button>
    <div class="ca-menu-mark">✦</div>
    <nav class="ca-menu-nav">
      <details class="ca-menu-group">
        <summary class="ca-menu-item">
          <span>${dict['nav.destinations']}</span>
          <span class="ca-menu-chevron">↓</span>
        </summary>
        <ul class="ca-menu-sub">${destItems}</ul>
      </details>

      <a class="ca-menu-item" href="hotels.html">${dict['nav.hotels']}</a>

      <details class="ca-menu-group">
        <summary class="ca-menu-item">
          <span>${dict['nav.nightclubs']}</span>
          <span class="ca-menu-chevron">↓</span>
        </summary>
        <ul class="ca-menu-sub">${clubItems}</ul>
      </details>

      <a class="ca-menu-item" href="index.html#about">${dict['nav.about']}</a>
    </nav>
  `;

  document.body.appendChild(backdrop);
  document.body.appendChild(panel);
  document.body.style.overflow = 'hidden';

  // Hide the page nav while menu is open (avoids the white strip behind)
  const pageNav = document.querySelector('nav#top-nav') || document.querySelector('nav');
  if (pageNav) pageNav.style.visibility = 'hidden';

  // Auto-close menu on any link click — fixes anchor-scroll + ensures body overflow gets reset.
  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { closeMenu(); });
  });
  panel.querySelectorAll('[data-close-menu]').forEach(btn => btn.addEventListener('click', closeMenu));
  backdrop.addEventListener('click', closeMenu);
  document.addEventListener('keydown', escCloseMenu);
}

function closeMenu() {
  const el = document.getElementById('ca-menu');
  const bd = document.getElementById('ca-menu-backdrop');
  if (el) el.remove();
  if (bd) bd.remove();
  document.body.style.overflow = '';
  const pageNav = document.querySelector('nav#top-nav') || document.querySelector('nav');
  if (pageNav) pageNav.style.visibility = '';
  document.removeEventListener('keydown', escCloseMenu);
}
function escCloseMenu(e) { if (e.key === 'Escape') closeMenu(); }

/* ============================================================
   Newsletter
   ----------------------------------------------------------------
   How submissions are handled, in priority order:
   1. If <form> has data-endpoint="https://..." (e.g. Formspree),
      POST to that URL. This is what actually delivers the data
      to YOU, the site owner.
   2. Always also write to localStorage as a local backup so
      nothing is lost if the network fails.
   ============================================================ */
async function postToEndpoint(endpoint, payload) {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch (_) { return false; }
}

function bindNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = getCurrentLang() || 'en';
    const dict = TRANSLATIONS[lang];
    const nameEl  = form.querySelector('[name="name"]');
    const emailEl = form.querySelector('[name="email"]');
    const msgEl   = document.getElementById('newsletter-msg');

    const name  = nameEl.value.trim();
    const email = emailEl.value.trim();
    const ok    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name) { msgEl.textContent = dict['news.errorName'];  msgEl.dataset.state = 'error'; return; }
    if (!ok)   { msgEl.textContent = dict['news.errorEmail']; msgEl.dataset.state = 'error'; return; }

    const payload = { name, email, lang, ts: new Date().toISOString() };

    // Local backup
    const list = JSON.parse(localStorage.getItem(NEWSLETTER_KEY) || '[]');
    list.push(payload);
    localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(list));

    // Remote endpoint (Formspree etc.) if configured
    const endpoint = form.getAttribute('data-endpoint');
    const valid = endpoint && /^https?:\/\//.test(endpoint) && !/PLACEHOLDER/i.test(endpoint);
    if (valid) await postToEndpoint(endpoint, payload);

    msgEl.textContent = dict['news.success'];
    msgEl.dataset.state = 'ok';
    form.reset();
  });
}

/* ============================================================
   Boot
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  injectPopupStyles();
  const lang = getCurrentLang();
  if (!lang) {
    applyLang('en');
    document.documentElement.lang = 'en';
    showWelcomePopup();
  } else {
    applyLang(lang);
    document.documentElement.lang = lang;
  }

  // Wire any language-trigger buttons
  document.querySelectorAll('[data-lang-trigger]').forEach(btn => {
    btn.addEventListener('click', showLangModal);
  });

  // Wire any "more cities" / Coming Soon triggers
  document.querySelectorAll('[data-coming-soon]').forEach(btn => {
    btn.addEventListener('click', showComingSoonModal);
  });

  // Wire hamburger menu trigger(s)
  document.querySelectorAll('[data-menu-trigger]').forEach(btn => {
    btn.addEventListener('click', showMenu);
  });

  bindNewsletter();
});
