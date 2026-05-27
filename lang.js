/* ============================================================
   City Archivist — i18n + Welcome / Language Modal + Newsletter
   Languages: en (English), de (Deutsch), zh (中文)
   ============================================================ */

/* ── Pretty URLs: hide .html from the address bar ──
   GitHub Pages serves <page>.html when /<page> is requested,
   so we just rewrite what the user sees in the URL bar.       */
(function () {
  try {
    const path = window.location.pathname;
    if (/\.html$/.test(path) && path !== '/404.html') {
      const pretty = path === '/index.html'
        ? '/'
        : path.replace(/\.html$/, '');
      window.history.replaceState(
        null,
        '',
        pretty + window.location.search + window.location.hash
      );
    }
  } catch (e) { /* no-op */ }
})();

/* ════════════════════════════════════════════════════════════
   ✏️  EDIT YOUR DETAILS HERE
   These values are used on the Imprint / Contact page.
   Change them once, they update in all three languages.
   ════════════════════════════════════════════════════════════ */
const SITE_INFO = {
  name:       'Konrad Xu',
  email:      'kontakt@cityarchivist.com',
};
/* ════════════════════════════════════════════════════════════ */


const TRANSLATIONS = {
  en: {
    'nav.home': 'Home',
    'nav.destinations': 'Destinations',
    'nav.wonders': 'Wonders',
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

    'clubs.eyebrow': 'Nightclubs',
    'clubs.h2': 'After<br><em>Dark</em>',
    'clubs.desc': 'Explore the world’s top nightclubs for unmatched beats and unforgettable nights.',
    'clubs.cta': 'Explore the Clubs',
    'clubsFeature.title': 'Best Nightclubs on the <em>Globe</em>',
    'clubsFeature.text': 'From Berlin’s industrial cathedrals to Ibiza’s eternal summer — a curated archive of the rooms that shaped electronic music culture.',
    'wondersFeature.title': 'Seven Wonders of the <em>World</em>',
    'wondersFeature.text': 'The new seven wonders, voted by millions worldwide — a curated archive of the places that shaped humankind’s imagination.',
    'clubsPage.eyebrow': 'The Club Archive',
    'clubsPage.h1': 'After<br><em>Dark</em>',
    'clubsPage.note.label': 'A Note',
    'clubsPage.note.p': 'These are not the loudest clubs nor the largest — they are the ones that shaped electronic music culture. From Berlin’s industrial cathedrals to Ibiza’s eternal summer, every name on this list is a destination in itself.',
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
    'about.why.label': 'The Origin',
    'about.why.h': 'Why <em>City Archivist</em> exists.',
    'about.why.p1': 'During my internship at <em>Le Méridien Munich</em> — part of Marriott Bonvoy — I spent two weeks working in breakfast service. Day after day, I noticed the same thing: guests would ask not about the famous monuments, but about <em>what else</em> there is to a city — the corners that don’t make it into guidebooks, the places locals actually go.',
    'about.why.p2': 'That gap is what I set out to fill. <em>City Archivist</em> is a quiet act of curation — for travellers who want to look beyond the queue lines and find the city that the city actually lives in.',

    'news.eyebrow': 'Newsletter',
    'news.h': 'Stay in <em>the Archive.</em>',
    'news.p': 'Get new destinations, hotel features and city guides — straight to your inbox. No spam, just the good stuff.',
    'news.namePlaceholder': 'Your name',
    'news.emailPlaceholder': 'your@email.com',
    'news.button': 'Subscribe',
    'news.success': 'Thank you — you’re on the list.',
    'news.rateLimit': 'Too many requests — please try again in an hour.',
    'news.errorEmail': 'Please enter a valid email address.',
    'news.errorName': 'Please enter your name.',
    // ── Shanghai page ──
    'sh.hero.eyebrow': 'China · East Asia · City Guide',
    'sh.hero.h1': '<em>Shanghai</em>',
    'sh.hero.tagline': 'Where the Huangpu river splits the city in two: art-deco arcades on one bank, glass towers on the other — and a thousand hidden lanes in between.',
    'sh.tab.spots': 'Hidden Spots',
    'sh.tab.day': 'One Perfect Day',
    'sh.tab.reads': 'Reads',
    'sh.tab.hotels': 'Hotels',
    'sh.tab.clubs': 'Nightclubs',
    'sh.day.eyebrow': 'One Perfect Day',
    'sh.day.h2': 'A day in <em>Shanghai</em>',
    'sh.day.desc': 'Morning dumplings, an afternoon in the lilong lanes, sunset over the Bund — one route, ten stops, twelve hours.',
    'sh.day.routeLabel': 'The Route',
    'sh.day.intro': 'An ideal one-day itinerary built around the rhythm Shanghai actually keeps: the city starts slow, peaks at golden hour, and only really opens up after dark. Below: the full timeline with travel times between each stop.',
    'sh.day.show': 'Show the timeline',
    'sh.day.hide': 'Hide the timeline',
    'sh.day.s1.tag': 'Breakfast',
    'sh.day.s1.name': 'Jia Jia <em>Tang Bao</em>',
    'sh.day.s1.desc': 'A counter-only xiaolongbao spot two minutes from People\'s Square. Order the crab-and-pork basket, eat standing, leave before the line forms.',
    'sh.day.t1': '12 min · taxi to Yu Garden',
    'sh.day.s2.tag': 'Classical Garden',
    'sh.day.s2.name': 'Yu Garden &amp; <em>Old Town</em>',
    'sh.day.s2.desc': 'A five-hundred-year-old Ming-dynasty garden of pavilions, koi ponds and rockeries — get there at opening to have the courtyards almost to yourself.',
    'sh.day.t2': '15 min · walk along Zhongshan Road to the Bund',
    'sh.day.s3.tag': 'The Waterfront',
    'sh.day.s3.name': 'The <em>Bund</em>',
    'sh.day.s3.desc': 'Walk the promenade with the colonial banks on your left and Pudong\'s glass skyline across the Huangpu. Best photographed from the Waibaidu Bridge end.',
    'sh.day.t3': '10 min · taxi to French Concession',
    'sh.day.s4.tag': 'Lunch',
    'sh.day.s4.name': 'Lunch in the <em>French Concession</em>',
    'sh.day.s4.desc': 'Either Lost Heaven for Yunnan cuisine in a former missionary house, or RAC bar for a quiet plateau under plane trees.',
    'sh.day.t4': '8 min · walk through the plane-tree lanes',
    'sh.day.s5.tag': 'Lanes &amp; Studios',
    'sh.day.s5.name': '<em>Tianzifang</em> lanes',
    'sh.day.s5.desc': 'A maze of restored shikumen lane houses turned into independent shops, ateliers and coffee bars. Touristy on the main artery, quietly artisanal one alley over.',
    'sh.day.t5': '15 min · metro Line 9 to Jing\'an Temple',
    'sh.day.s6.tag': 'Coffee Break',
    'sh.day.s6.name': '% Arabica <em>Jing\'an</em>',
    'sh.day.s6.desc': 'The Kyoto-born coffee bar set against the golden Jing\'an Temple — get the iced Kyoto blend, sit on the steps, breathe before the evening starts.',
    'sh.day.t6': '20 min · taxi back toward the Bund',
    'sh.day.s7.tag': 'Sunset',
    'sh.day.s7.name': 'Sundown on a <em>rooftop</em>',
    'sh.day.s7.desc': 'Bar Rouge above the Bund 18 is the postcard — but Heritage by Madison on the eighth floor of the Peninsula has the calmer view and the better negroni.',
    'sh.day.t7': '5 min · short walk to dinner',
    'sh.day.s8.tag': 'Dinner',
    'sh.day.s8.name': 'Dinner at <em>Mr &amp; Mrs Bund</em>',
    'sh.day.s8.desc': 'Paul Pairet\'s playful French brasserie on the sixth floor of Bund 18. Open until 2 am — ask for a window table when you book.',
    'sh.day.t8': '10 min · taxi to Found 158',
    'sh.day.s9.tag': 'Cocktails',
    'sh.day.s9.name': '<em>Speak Low</em>',
    'sh.day.s9.desc': 'A four-floor speakeasy behind a vintage bar-tool shop in Xintiandi. Push the bookshelf on the second floor to find the third bar. Tokyo-trained bartenders, no menu.',
    'sh.day.t9': 'Optional — walk or taxi home',
    'sh.day.s10.tag': 'Late-Night',
    'sh.day.s10.name': 'Noodles at a <em>24-hour stall</em>',
    'sh.day.s10.desc': 'A bowl of scallion-oil noodles or pork wontons at any of the late-night vendors along Yunnan South Road — the city\'s true closing ceremony.',
    'sh.hotels.h2': 'Where to<br><em>Stay</em>',
    'sh.hotels.desc': 'From a Ming-dynasty estate an hour outside the city to a power-plant turned design hotel on Nanjing Road — four addresses that define modern Shanghai luxury.',
    'sh.h.aman.name': 'Aman Yangyun',
    'sh.h.aman.area': 'Min\'hang District · 1 h from city',
    'sh.h.aman.desc': 'Thirteen Ming-dynasty courtyard houses transplanted stone-by-stone from Jiangxi and rebuilt inside a 100-acre camphor forest. The most ambitious resort Aman has ever opened.',
    'sh.h.capella.name': 'Capella Shanghai, Jian Ye Li',
    'sh.h.capella.area': 'French Concession · Xuhui',
    'sh.h.capella.desc': 'Fifty-five restored shikumen lane-houses inside the city\'s last intact lilong. Each villa has its own butler, garden and front door — Shanghai\'s only true lane-house hotel.',
    'sh.h.peninsula.name': 'The Peninsula Shanghai',
    'sh.h.peninsula.area': 'The Bund · Huangpu',
    'sh.h.peninsula.desc': 'Art-deco grandeur at the head of the Bund — the only new building permitted on the historic waterfront in seven decades. Sir Elly\'s rooftop has the city\'s best view of Pudong.',
    'sh.h.bulgari.name': 'Bulgari Hotel Shanghai',
    'sh.h.bulgari.area': 'Suzhou Creek · Zhabei',
    'sh.h.bulgari.desc': "Antonio Citterio's Italian masterpiece on the banks of Suzhou Creek — anchored by the restored 1916 Shanghai Chamber of Commerce. Black-marble bathrooms, a 20-metre spa pool, Il Ristorante by Niko Romito.",
    // ── Shanghai hotel modal — Aman Yangyun ──
    'sh.hm.aman.eyebrow': 'Featured Hotel · Shanghai',
    'sh.hm.aman.h': 'The forest, the dynasty, the resort',
    'sh.hm.aman.p1': 'In 2002, the entrepreneur Ma Dadong rescued <em>fifty Ming-dynasty courtyard houses</em> from the path of a planned reservoir in Jiangxi province. He moved each one — stone by stone, beam by beam — over a thousand kilometres east, and replanted them inside a 100-acre camphor forest on the outskirts of Shanghai.',
    'sh.hm.aman.p2': 'Aman opened the resort in 2018 inside that forest. Twenty-six pool villas were built new in the Aman idiom — low, quiet, Kerry Hill — while thirteen of the original Ming villas were restored as private residences. The spa is the largest Aman has ever built. There is a Nan Shu Fang scholar\'s pavilion, a lakeside tea house, and a courtyard for morning tai chi.',
    'sh.hm.aman.p3': 'It is the only place in China where you can sleep inside an Antique without a museum\'s velvet rope between you and it.',
    'sh.hm.aman.loc': 'Min\'hang District · 1 h from city',
    'sh.hm.label.location': 'Location',
    'sh.hm.label.opened': 'Opened',
    'sh.hm.label.rooms': 'Rooms &amp; villas',
    'sh.hm.label.from': 'From',
    'sh.hm.reserve.h': 'Request a <em>reservation</em>',
    'sh.hm.reserve.p': 'Send a non-binding enquiry. We forward it directly to the hotel\'s reservations desk and reply within 24 hours.',
    'sh.hm.f.name': 'Your name',
    'sh.hm.f.email': 'Email',
    'sh.hm.f.checkin': 'Check-in',
    'sh.hm.f.checkout': 'Check-out',
    'sh.hm.f.guests': 'Guests',
    'sh.hm.f.villa': 'Room type',
    'sh.hm.f.note': 'Additional notes (optional)',
    'sh.hm.f.submit': 'Send enquiry',
    // ── Shanghai hotel modal — Capella, Jian Ye Li ──
    'sh.hm.capella.eyebrow': 'Featured Hotel · Shanghai',
    'sh.hm.capella.h': 'A hotel hidden inside a lane',
    'sh.hm.capella.p1': 'In the heart of the French Concession sits <em>Jian Ye Li</em> — the last fully intact shikumen lilong in Shanghai. Built in 1930 as a private residential development, these grey-brick lane-houses were saved from demolition and meticulously restored over nine years.',
    'sh.hm.capella.p2': 'Capella took fifty-five of them and turned each into a stand-alone villa: its own front door from the lane, its own private courtyard, its own butler. The Auriga Spa runs the indoor swimming pool framed by arched warehouse windows. Le Comptoir de Pierre Gagnaire serves classic French in a former missionary\'s house with the Pierre Yovanovitch chairs and Bourgeois flowers.',
    'sh.hm.capella.p3': 'It is the only address in Shanghai where you sleep <em>inside</em> the city\'s pre-war architecture rather than behind a glass curtain wall above it.',
    'sh.hm.capella.loc': 'French Concession · Xuhui',
    // ── Shanghai hotel modal — Peninsula ──
    'sh.hm.peninsula.eyebrow': 'Featured Hotel · Shanghai',
    'sh.hm.peninsula.h': 'The last building on the Bund',
    'sh.hm.peninsula.p1': 'For seventy years the Shanghai government did not permit a single new building on the Bund. In 2009, that rule was broken once — for The Peninsula. The result is an <em>art-deco volume</em> that picks up the rhythm of the Cathay and the HSBC building beside it, conceived by David Beim of Hirsch Bedner so faithfully that most guests assume it has stood there since 1929.',
    'sh.hm.peninsula.p2': 'Inside: 235 of the largest rooms in Shanghai, every one with a view either of Pudong’s glass skyline or the heritage Bund. The lobby tea ritual is the city’s oldest. Sir Elly’s, on the 14th floor, has the best terrace view of the Pudong skyline in town — telescope included.',
    'sh.hm.peninsula.p3': 'The 25-metre indoor pool sits beneath a stained-glass canopy. The spa runs the original Peninsula Page Boy service: a uniformed page will deliver anything, anywhere, at any hour.',
    'sh.hm.peninsula.loc': 'The Bund · Huangpu',
    // ── Shanghai hotel modal — Bulgari ──
    'sh.hm.bulgari.eyebrow': 'Featured Hotel · Shanghai',
    'sh.hm.bulgari.h': 'An Italian palazzo on Suzhou Creek',
    'sh.hm.bulgari.p1': 'Bulgari\'s eighth hotel sits at the corner where Suzhou Creek meets the Bund — anchored by the meticulously restored <em>1916 Shanghai Chamber of Commerce</em>, which now houses Bulgari Bar, Il Ristorante and Il Cioccolato. The new tower behind it, designed by Antonio Citterio Patricia Viel, rises 48 floors above the river.',
    'sh.hm.bulgari.p2': 'The interior language is unmistakably Italian: chocolate-brown leather, black-marble bathrooms with chequerboard floors, brass detailing, custom Maxalto furniture and B&amp;B Italia in every room. Il Ristorante is led by three-Michelin-starred Niko Romito; the Bulgari Spa wraps a 25-metre indoor pool in a tunnel of warm-wood slats.',
    'sh.hm.bulgari.p3': 'It is the city\'s most explicit statement of <em>European luxury transplanted</em> — a Roman address built into a Chinese skyline.',
    'sh.hm.bulgari.loc': 'Suzhou Creek · Zhabei',



    // ── Shanghai: Spots / Reads / Clubs section headers ──
    'sh.spots.h2': 'Secret<br><em>Shanghai</em>',
    'sh.spots.desc': 'A curated selection of the cafés, ateliers and quiet corners that locals keep to themselves — beyond the Bund, beyond the tourist trail.',
    'sh.reads.h2': 'About<br><em>Shanghai</em>',
    'sh.reads.desc': 'Long-form essays, neighbourhood guides and the occasional history lesson — the kind of writing that takes you below the surface of the city.',
    'sh.clubs.h2': 'After<br><em>Dark</em>',
    'sh.clubs.desc': 'From speakeasies hidden behind bookshelves to riverside megaclubs — where Shanghai actually opens up after midnight.',




    'footer.nav': 'Navigation',
    'footer.info': 'Info',
    'footer.aboutLink': 'About Us',
    'footer.newsletter': 'Newsletter',
    'footer.contact': 'Contact',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
    'footer.copy': '© 2026 City Archivist — All rights reserved',

    'error.eyebrow': 'Page not found',
    'error.h': 'This corner of the archive is <em>still being written.</em>',
    'error.p': 'The page you were looking for may have moved, been renamed, or never existed in the first place. Try the links below — or head back to the front page.',
    'error.home': 'Back to Home',
    'error.explore': 'Browse Destinations',
    'error.quicklinks': 'Quick links',
    'error.link.muenchen': 'Munich',
    'error.link.london': 'London',
    'error.link.shanghai': 'Shanghai',
    'error.link.tokyo': 'Tokyo',
    'error.link.wonders': 'Seven Wonders',
    'error.link.hotels': 'Top Hotels',
    'error.link.clubs': 'Nightclubs',
    'error.link.imprint': 'Imprint',

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

    /* ── Club detail page bodies ── */
    'club.hi.tagline': 'A futuristic temple of sound on the White Isle — voted №1 Club in the World multiple times since opening in 2017.',
    'club.hi.find.h': 'Find <em>the Club</em>',
    'club.hi.story.h': 'A new era of <em>Ibiza</em>',
    'club.hi.story.p1': 'Hï Ibiza opened in May 2017 on the site of the legendary Space Ibiza, marking the beginning of a new chapter for the island that gave the world modern club culture. Backed by The Night League and Ushuaïa Entertainment, the venue was designed from the ground up as a <em>state-of-the-art experience</em> — futuristic visuals, custom-built sound systems and a layout engineered for the world\'s most demanding artists.',
    'club.hi.story.p2': 'Within a single season, Hï climbed to the top of DJ Mag\'s "Top 100 Clubs" list, a ranking it has held repeatedly since. Residencies from artists like Black Coffee, FISHER and David Guetta have made it a global pilgrimage site for electronic music — and a defining stage of the modern Ibiza summer.',
    'club.hi.music.h': 'Sound of <em>Hï</em>',
    'club.hi.music.p': 'Two main rooms — the Theatre and the Club — run parallel programs every night, anchored by world-class residencies. The atmosphere is high-energy, theatrical and visually overwhelming, with a polished crowd that travels from across the globe.',
    'club.hi.visit.h': 'Tickets, residencies<br>& <em>line-ups</em>.',
    'club.hi.visit.p': 'All tickets, the full season calendar and table reservations are handled directly via the official Hï Ibiza website.',

    'club.echo.tagline': 'North America\'s premier electronic music venue — a 30,000-square-foot warehouse purpose-built for the biggest names in dance music.',
    'club.echo.find.h': 'Find <em>the Venue</em>',
    'club.echo.story.h': 'A capital for <em>club culture</em>',
    'club.echo.story.p1': 'Echostage opened in 2012 in Washington D.C.\'s Northeast warehouse district, founded by Club Glow with a mission rare in the United States: to create a venue <em>built around electronic music</em>, not retrofitted from a concert hall or repurposed from a generic nightclub. From day one it was designed for sound, scale and sightlines — a single, clear room with a massive stage and an open dancefloor.',
    'club.echo.story.p2': 'The result has been a steady run as one of the world\'s most-respected club venues, repeatedly placed in DJ Mag\'s "Top 100 Clubs" — and frequently ranked the №1 club in North America. Headliners from Tiësto and Calvin Harris to Eric Prydz and Charlotte de Witte have made it a regular tour stop, and its production values have set the standard for U.S. nightlife.',
    'club.echo.music.h': 'Sound of <em>Echostage</em>',
    'club.echo.music.p': 'Programming runs the full electronic spectrum — from peak-time house and trance to bass, dubstep and hard techno — with an LED wall and rig that turn each show into a full audiovisual production. The crowd is energetic, dance-focused and dressed for the floor rather than for show.',
    'club.echo.visit.h': 'Calendar, tickets<br>& <em>VIP tables</em>.',
    'club.echo.visit.p': 'Find the full event calendar, presale access and table reservations on the official Echostage website.',

    'club.berg.tagline': 'A former East-Berlin power plant turned global temple of techno — uncompromising, monumental, and shrouded in legend.',
    'club.berg.find.h': 'Find <em>the Bunker</em>',
    'club.berg.story.h': 'A <em>cathedral</em> of techno',
    'club.berg.story.p1': 'Berghain opened in 2004 inside a disused heat-and-power plant in former East Berlin, founded by Norbert Thormann and Michael Teufele as the successor to their legendary gay club Ostgut. The cavernous concrete halls, 18-metre ceilings and a custom Funktion-One soundsystem made it instantly unique — and quickly turned it into <em>the global home of techno</em>.',
    'club.berg.story.p2': 'The club\'s ethos is uncompromising: no phones, no photos, no rush. Sets stretch for hours, the weekend Klubnacht runs unbroken from Saturday into Monday morning, and the famously selective door — overseen by Sven Marquardt — has become part of the mythology. Above the main floor sits Panorama Bar, a brighter, house-leaning room with its own cult following.',
    'club.berg.music.h': 'Sound of <em>Berghain</em>',
    'club.berg.music.p': 'The main floor is hard, hypnotic and bass-heavy techno from residents like Marcel Dettmann, Ben Klock and Anastasia Kristensen. Panorama Bar leans into deeper house and disco. Expect long, narrative DJ sets, an open and queer-friendly crowd, and a rule of thumb that "the night really starts in the morning."',
    'club.berg.visit.h': 'Klubnacht, concerts<br>& <em>events</em>.',
    'club.berg.visit.p': 'The current program, ticket sales and information about Halle am Berghain and Säule are published on the official site.',

    'club.fab.tagline': 'Three rooms beneath Smithfield Market and a vibrating bodysonic dancefloor — the institution that put London at the heart of underground dance music.',
    'club.fab.find.h': 'Find <em>the Club</em>',
    'club.fab.story.h': 'London\'s <em>underground</em> home',
    'club.fab.story.p1': 'Fabric opened in October 1999 in the cold-storage cellars beneath the old Smithfield meat market — a labyrinth of bare brick and concrete that immediately felt unlike any other London venue. Founders Keith Reilly and Cameron Leslie wanted a club where the music came first, and built three connected rooms around it, including the now-famous Room One with its <em>bodysonic dancefloor</em> — 450 bass transducers wired into the floor itself, so the room literally moves with the bass.',
    'club.fab.story.p2': 'The club\'s two long-running mix series — Fabric (house, techno) and FABRICLIVE (drum & bass, broken beat, breakbeat) — became required listening for an entire generation. After a brief, high-profile closure in 2016, a campaign backed by the city, the Mayor\'s Office and global artists brought it back; today Fabric continues to be one of the most respected underground clubs in the world.',
    'club.fab.music.h': 'Sound of <em>Fabric</em>',
    'club.fab.music.p': 'Room One is house and techno; Room Two leans deeper, dub and minimal; Room Three is the spiritual home of UK drum & bass and bass music. Expect a serious, music-first crowd, marathon sets from international residents like Craig Richards and Terry Francis, and a soundsystem tuned to feel as much as it is heard.',
    'club.fab.visit.h': 'Line-ups, mixes<br>& <em>tickets</em>.',
    'club.fab.visit.p': 'The full event calendar, advance ticket sales and the long-running fabric / FABRICLIVE mix series live on the official website.',

    'club.pacha.tagline': 'The cherry-logo legend — the club that turned Ibiza into the world\'s nightlife capital, dancing under the same roof since 1973.',
    'club.pacha.find.h': 'Find <em>the Cherry</em>',
    'club.pacha.story.h': 'Where it <em>all began</em>',
    'club.pacha.story.p1': 'Pacha was founded in 1967 in Sitges by Ricardo Urgell and opened its now-iconic Ibiza Town location in 1973 — long before "Ibiza" became shorthand for global club culture. The whitewashed Mediterranean villa, the open-air courtyards, the famous twin cherries: Pacha didn\'t just host a scene, <em>it created one</em>, becoming the bridge between 1970s European disco and the rise of house music in the late \'80s.',
    'club.pacha.story.p2': 'Five decades on, the brand stretches across hotels, restaurants and clubs around the world, but the original Ibiza venue remains the heart of it all. After a major renovation in 2022, Pacha reopened with a redesigned main room, refreshed terraces and a renewed focus on its core idea: glamour, music and community under one Balearic roof.',
    'club.pacha.music.h': 'Sound of <em>Pacha</em>',
    'club.pacha.music.p': 'Pacha is open-format by tradition — house, disco and contemporary club music, with long-running residencies and headline parties like Solomun +1, Pure Pacha and Insane. The crowd is a mix of locals, residents and international travellers, dressed for the night and there to dance until sunrise.',
    'club.pacha.visit.h': 'Calendar, tables<br>& <em>residencies</em>.',
    'club.pacha.visit.p': 'Tickets, seasonal residencies and table reservations are managed via the official Pacha Ibiza website.',

    'club.unvrs.tagline': 'The biggest club in the world — opened summer 2025 on the Privilege site, with two main rooms, a 360° outdoor amphitheatre and a sound stage built for a new era of Ibiza.',
    'club.unvrs.find.h': 'Find <em>the Universe</em>',
    'club.unvrs.story.h': 'A new <em>universe</em>',
    'club.unvrs.story.p1': 'UNVRS opened in May 2025 on the legendary site of Privilege Ibiza — for two decades the largest nightclub in the world, and the venue that hosted Manumission\'s most uninhibited years. After a complete teardown by The Night League, it was rebuilt from the ground up as <em>UNVRS</em>: a multi-room, fully-engineered venue designed by the same team behind Hï Ibiza and Ushuaïa.',
    'club.unvrs.story.p2': 'The architecture pairs an indoor main room with the world\'s first 360° open-air club stage — a circular amphitheatre under the Ibiza sky, programmed independently of the indoor floor. Add a redesigned terrace, a private pool club and a backstage built for arena-scale residencies, and UNVRS arrives as the most ambitious club opening of its decade.',
    'club.unvrs.music.h': 'Sound of <em>UNVRS</em>',
    'club.unvrs.music.p': 'Programming runs the full electronic spectrum — peak-time house, melodic and main-stage techno, big-room EDM and Afro House — anchored by exclusive residencies from headliners that previously called Ushuaïa and Hï home. Production is on a different scale: a wraparound LED ceiling, a custom soundsystem and visuals designed for the indoor and outdoor stages to play in conversation.',
    'club.unvrs.visit.h': 'Tickets, residencies<br>& <em>line-ups</em>.',
    'club.unvrs.visit.p': 'Tickets, the full season calendar and table reservations are handled directly through the official UNVRS website.',

    /* ── Seven Wonders ── */
    'wonders.eyebrow': 'Seven Wonders',
    'wonders.h2': 'Seven Wonders<br>of the <em>World</em>',
    'wonders.desc': 'The new seven wonders, voted by millions worldwide. From Petra to Machu Picchu — the icons that define our shared imagination.',
    'wonders.cta': 'Explore the Seven',
    'wonders.page.eyebrow': 'The New Seven Wonders',
    'wonders.page.h1': 'Seven Wonders<br>of the <em>World</em>',
    'wonders.page.sub': 'A journey across continents and centuries — the seven monuments that humanity voted as its greatest legacy.',
    'wonders.story.label': 'History',
    'wonders.location.label': 'Location',
    'wonders.visit.label': 'Plan a Visit',
    'wonders.meta.built': 'Built',
    'wonders.meta.country': 'Country',
    'wonders.meta.height': 'Height',

    'welcome.greeting': 'Welcome to City Archivist',
    'welcome.sub': 'Choose your language to begin.',
    'welcome.continue': 'Continue',

    /* ── Legal / Imprint ── */
    'legal.eyebrow': 'Legal Notice',
    'legal.title': 'Imprint',
    'legal.contact.label': 'Contact',
    'legal.contact.h': 'How to reach us',
    'legal.contact.country': 'Germany',
    'legal.contact.email.label': 'Email',
    'legal.contact.note': 'For press, partnerships or legal matters, please reach out by email. A postal address can be provided on written request.',
    'legal.responsible.label': 'Responsibility · § 5 TMG',
    'legal.responsible.h': 'Responsible for content',
    'legal.responsible.p': 'Konrad Xu. Postal address available on written request.',
    'legal.editorial.label': '§ 55 Abs. 2 RStV',
    'legal.editorial.h': 'Responsible for journalistic-editorial content',
    'legal.editorial.p': 'Konrad Xu. Contact via email above.',
    'legal.liability.label': 'Liability',
    'legal.liability.h': 'Disclaimer',
    'legal.liability.content': '<strong>Liability for content.</strong> The contents of these pages have been compiled with the greatest care. We cannot, however, accept any liability for the accuracy, completeness or timeliness of the content. As a service provider, we are responsible for our own content under the general laws (§ 7 (1) TMG). Under §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information.',
    'legal.liability.links': '<strong>Liability for links.</strong> Our offer contains links to external websites of third parties whose content we cannot influence. We therefore cannot accept any liability for these external contents. The respective provider or operator of the linked pages is always responsible for the content of the linked pages.',
    'legal.copyright.label': 'Copyright',
    'legal.copyright.h': 'Image rights & content',
    'legal.copyright.p1': 'Content created by the site operator on these pages is subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.',
    'legal.copyright.p2': 'Insofar as the content on this site was not created by the operator, third-party copyrights are respected. In particular, third-party content is identified as such.',
    'legal.privacy.label': 'Privacy',
    'legal.privacy.h': 'Privacy Policy',
    'legal.privacy.intro': 'We process personal data only to the extent necessary to provide this website and the features you request (newsletter, contact).',
    'legal.privacy.hosting.h': 'Hosting',
    'legal.privacy.hosting.p': 'This site is served via GitHub Pages. GitHub records standard technical access logs (IP address, date, user agent) as is normal for any web server. We do not have direct access to these logs.',
    'legal.privacy.cookies.h': 'Cookies & local storage',
    'legal.privacy.cookies.p': 'This site stores only a small set of local items in your browser — your chosen language and, if applicable, your newsletter sign-up — to remember your preference. We use no tracking and no analytics cookies.',
    'legal.privacy.newsletter.h': 'Newsletter',
    'legal.privacy.newsletter.p': 'When you sign up for the newsletter, your name and email are processed via the service Formspree (USA) so that we can send you updates. You can unsubscribe at any time by replying to our email.',
    'legal.privacy.rights.h': 'Your rights',
    'legal.privacy.rights.p': 'You have the right at any time to request access, correction or deletion of your data. Simply email us at the address listed under Contact.',
  },

  de: {
    'nav.home': 'Start',
    'nav.destinations': 'Reiseziele',
    'nav.wonders': 'Weltwunder',
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

    'clubs.eyebrow': 'Nachtclubs',
    'clubs.cta': 'Die Clubs entdecken',
    'clubsFeature.title': 'Die besten Nachtclubs der <em>Welt</em>',
    'clubsFeature.text': 'Von Berlins Industriekathedralen bis zu Ibizas ewigem Sommer — ein kuratiertes Archiv der Räume, die die elektronische Musikkultur geprägt haben.',
    'wondersFeature.title': 'Die sieben Wunder der <em>Welt</em>',
    'wondersFeature.text': 'Die neuen sieben Weltwunder, gewählt von Millionen weltweit — ein kuratiertes Archiv der Orte, die die Vorstellungskraft der Menschheit geprägt haben.',
    'clubsPage.eyebrow': 'Das Club-Archiv',
    'clubsPage.h1': 'After<br><em>Dark</em>',
    'clubsPage.note.label': 'Eine Notiz',
    'clubsPage.note.p': 'Das sind nicht die lautesten oder größten Clubs — sondern jene, die die elektronische Musikkultur geprägt haben. Von Berlins Industriekathedralen bis zu Ibizas ewigem Sommer ist jeder Name auf dieser Liste ein Ziel für sich.',
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
    'about.why.label': 'Der Ursprung',
    'about.why.h': 'Warum es <em>City Archivist</em> gibt.',
    'about.why.p1': 'Während meines Praktikums im <em>Le Méridien München</em> — Teil von Marriott Bonvoy — habe ich zwei Wochen lang im Frühstücksservice gearbeitet. Tag für Tag ist mir dasselbe aufgefallen: Gäste fragten nicht nach den bekannten Sehenswürdigkeiten, sondern danach, <em>was es sonst noch</em> in einer Stadt gibt — die Ecken, die es nicht in Reiseführer schaffen, die Orte, an die Einheimische tatsächlich gehen.',
    'about.why.p2': 'Genau diese Lücke wollte ich schließen. <em>City Archivist</em> ist eine leise Form der Kuration — für Reisende, die hinter die Warteschlangen schauen und die Stadt finden wollen, in der die Stadt tatsächlich lebt.',

    'news.eyebrow': 'Newsletter',
    'news.h': 'Bleib im <em>Archiv.</em>',
    'news.p': 'Neue Reiseziele, Hotel-Features und Stadt-Guides — direkt in dein Postfach. Kein Spam, nur das Gute.',
    'news.namePlaceholder': 'Dein Name',
    'news.emailPlaceholder': 'deine@email.de',
    'news.button': 'Abonnieren',
    'news.success': 'Danke — du bist auf der Liste.',
    'news.rateLimit': 'Zu viele Anfragen — bitte in einer Stunde erneut versuchen.',
    'news.errorEmail': 'Bitte gib eine gültige E-Mail-Adresse ein.',
    'news.errorName': 'Bitte gib deinen Namen ein.',
    // ── Shanghai page ──
    'sh.hero.eyebrow': 'China · Ostasien · City Guide',
    'sh.hero.h1': '<em>Shanghai</em>',
    'sh.hero.tagline': 'Wo der Huangpu die Stadt in zwei Hälften teilt: Art-déco-Arkaden auf der einen, Glastürme auf der anderen Seite — und tausend versteckte Gassen dazwischen.',
    'sh.tab.spots': 'Hidden Spots',
    'sh.tab.day': 'Ein perfekter Tag',
    'sh.tab.reads': 'Lesestoff',
    'sh.tab.hotels': 'Hotels',
    'sh.tab.clubs': 'Nachtclubs',
    'sh.day.eyebrow': 'Ein perfekter Tag',
    'sh.day.h2': 'Ein Tag in <em>Shanghai</em>',
    'sh.day.desc': 'Morgens Dumplings, nachmittags in den Lilong-Gassen, Sonnenuntergang über dem Bund — eine Route, zehn Stationen, zwölf Stunden.',
    'sh.day.routeLabel': 'Die Route',
    'sh.day.intro': 'Eine ideale Tagesroute, gebaut um den Rhythmus den Shanghai tatsächlich lebt: die Stadt startet langsam, erreicht ihren Höhepunkt zur goldenen Stunde, und öffnet sich erst nach Einbruch der Dunkelheit. Unten: der komplette Zeitstrahl mit Reisezeiten zwischen jeder Station.',
    'sh.day.show': 'Zeitstrahl anzeigen',
    'sh.day.hide': 'Zeitstrahl ausblenden',
    'sh.day.s1.tag': 'Frühstück',
    'sh.day.s1.name': 'Jia Jia <em>Tang Bao</em>',
    'sh.day.s1.desc': 'Eine Theken-only Xiaolongbao-Bude zwei Minuten vom People’s Square. Bestell den Krabben-Schwein-Korb, iss im Stehen, geh bevor sich die Schlange bildet.',
    'sh.day.t1': '12 Min · Taxi zum Yu Garden',
    'sh.day.s2.tag': 'Klassischer Garten',
    'sh.day.s2.name': 'Yu Garden &amp; <em>Altstadt</em>',
    'sh.day.s2.desc': 'Ein 500 Jahre alter Ming-Dynastie-Garten aus Pavillons, Koi-Teichen und Felsformationen — sei zur Öffnung da, dann hast du die Höfe fast für dich allein.',
    'sh.day.t2': '15 Min · zu Fuß über die Zhongshan-Straße zum Bund',
    'sh.day.s3.tag': 'Die Uferpromenade',
    'sh.day.s3.name': 'Der <em>Bund</em>',
    'sh.day.s3.desc': 'Geh die Promenade mit den kolonialen Banken links und Pudongs Glas-Skyline auf der anderen Seite des Huangpu. Am besten fotografierbar vom Ende der Waibaidu-Brücke.',
    'sh.day.t3': '10 Min · Taxi zur French Concession',
    'sh.day.s4.tag': 'Mittagessen',
    'sh.day.s4.name': 'Lunch in der <em>French Concession</em>',
    'sh.day.s4.desc': 'Entweder Lost Heaven für Yunnan-Küche in einem ehemaligen Missionarshaus, oder RAC bar für ein ruhiges Plateau unter Platanen.',
    'sh.day.t4': '8 Min · Spaziergang durch die Platanen-Alleen',
    'sh.day.s5.tag': 'Gassen &amp; Ateliers',
    'sh.day.s5.name': '<em>Tianzifang</em> Gassen',
    'sh.day.s5.desc': 'Ein Labyrinth restaurierter Shikumen-Häuser, umgewandelt in unabhängige Läden, Ateliers und Cafés. Touristisch auf der Hauptachse, ruhig-handwerklich eine Gasse weiter.',
    'sh.day.t5': '15 Min · Metro Linie 9 zum Jing’an-Tempel',
    'sh.day.s6.tag': 'Kaffeepause',
    'sh.day.s6.name': '% Arabica <em>Jing’an</em>',
    'sh.day.s6.desc': 'Die Kyoto-stämmige Kaffeebar vor dem goldenen Jing’an-Tempel — bestell den iced Kyoto Blend, setz dich auf die Stufen, atme bevor der Abend beginnt.',
    'sh.day.t6': '20 Min · Taxi zurück Richtung Bund',
    'sh.day.s7.tag': 'Sonnenuntergang',
    'sh.day.s7.name': 'Sundown auf einem <em>Rooftop</em>',
    'sh.day.s7.desc': 'Bar Rouge über dem Bund 18 ist die Postkarte — aber Heritage by Madison im achten Stock des Peninsula hat die ruhigere Aussicht und den besseren Negroni.',
    'sh.day.t7': '5 Min · kurzer Spaziergang zum Dinner',
    'sh.day.s8.tag': 'Abendessen',
    'sh.day.s8.name': 'Dinner im <em>Mr &amp; Mrs Bund</em>',
    'sh.day.s8.desc': 'Paul Pairets verspielte französische Brasserie im sechsten Stock des Bund 18. Bis 2 Uhr morgens geöffnet — frag bei der Reservierung nach einem Fensterplatz.',
    'sh.day.t8': '10 Min · Taxi zum Found 158',
    'sh.day.s9.tag': 'Cocktails',
    'sh.day.s9.name': '<em>Speak Low</em>',
    'sh.day.s9.desc': 'Eine vierstöckige Speakeasy hinter einem Vintage-Bar-Werkzeug-Laden in Xintiandi. Drück das Bücherregal im zweiten Stock, um die dritte Bar zu finden. Tokyo-geschulte Bartender, keine Karte.',
    'sh.day.t9': 'Optional — zu Fuß oder Taxi nach Hause',
    'sh.day.s10.tag': 'Late-Night',
    'sh.day.s10.name': 'Nudeln am <em>24h-Stand</em>',
    'sh.day.s10.desc': 'Eine Schüssel Frühlingszwiebel-Öl-Nudeln oder Schweinefleisch-Wontons bei einem der Nacht-Anbieter entlang der Yunnan South Road — der wahre Schlusspunkt der Stadt.',
    'sh.hotels.h2': 'Wo<br><em>übernachten</em>',
    'sh.hotels.desc': 'Vom Ming-Dynastie-Anwesen eine Stunde außerhalb der Stadt bis zum Kraftwerk-Designhotel an der Nanjing Road — vier Adressen, die modernen Shanghai-Luxus definieren.',
    'sh.h.aman.name': 'Aman Yangyun',
    'sh.h.aman.area': 'Min\'hang District · 1 h von der Stadt',
    'sh.h.aman.desc': 'Dreizehn Ming-Dynastie-Hofhäuser, Stein für Stein aus Jiangxi transportiert und in einem 40-Hektar-Kampferwald wiederaufgebaut. Das ambitionierteste Resort, das Aman je eröffnet hat.',
    'sh.h.capella.name': 'Capella Shanghai, Jian Ye Li',
    'sh.h.capella.area': 'French Concession · Xuhui',
    'sh.h.capella.desc': 'Fünfundfünfzig restaurierte Shikumen-Hofhäuser im letzten intakten Lilong der Stadt. Jede Villa hat ihren eigenen Butler, Garten und Eingang — Shanghais einziges echtes Lane-House-Hotel.',
    'sh.h.peninsula.name': 'The Peninsula Shanghai',
    'sh.h.peninsula.area': 'Der Bund · Huangpu',
    'sh.h.peninsula.desc': 'Art-déco-Pracht am Anfang des Bund — das einzige neue Gebäude, das in sieben Jahrzehnten an der historischen Uferpromenade gebaut werden durfte. Sir Elly’s Rooftop hat den besten Blick auf Pudong in der Stadt.',
    'sh.h.bulgari.name': 'Bulgari Hotel Shanghai',
    'sh.h.bulgari.area': 'Suzhou Creek · Zhabei',
    'sh.h.bulgari.desc': 'Antonio Citterios italienisches Meisterwerk am Ufer des Suzhou Creek — verankert in der restaurierten Shanghai Chamber of Commerce von 1916. Schwarze Marmorbäder, ein 20-Meter-Spa-Pool, Il Ristorante by Niko Romito.',
    // ── Shanghai hotel modal — Aman Yangyun ──
    'sh.hm.aman.eyebrow': 'Featured Hotel · Shanghai',
    'sh.hm.aman.h': 'Der Wald, die Dynastie, das Resort',
    'sh.hm.aman.p1': 'Im Jahr 2002 rettete der Unternehmer Ma Dadong <em>fünfzig Hofhäuser der Ming-Dynastie</em> vor einem geplanten Stausee in der Provinz Jiangxi. Er ließ jedes Haus — Stein für Stein, Balken für Balken — über tausend Kilometer nach Osten transportieren und pflanzte sie in einem 40 Hektar großen Kampferwald am Rande Shanghais wieder ein.',
    'sh.hm.aman.p2': 'Aman eröffnete das Resort 2018 inmitten dieses Waldes. Sechsundzwanzig Pool-Villen wurden im Aman-Idiom neu gebaut — niedrig, ruhig, Kerry Hill — während dreizehn der ursprünglichen Ming-Villen als Privatresidenzen restauriert wurden. Das Spa ist das größte, das Aman je gebaut hat. Es gibt einen Nan-Shu-Fang-Gelehrtenpavillon, ein Teehaus am See und einen Hof für morgendliches Tai-Chi.',
    'sh.hm.aman.p3': 'Es ist der einzige Ort in China, an dem man in einer Antiquität schlafen kann — ohne das Samtseil eines Museums zwischen sich und ihr.',
    'sh.hm.aman.loc': 'Min\'hang District · 1 h von der Stadt',
    'sh.hm.label.location': 'Ort',
    'sh.hm.label.opened': 'Eröffnet',
    'sh.hm.label.rooms': 'Zimmer &amp; Villen',
    'sh.hm.label.from': 'Ab',
    'sh.hm.reserve.h': '<em>Reservierung</em> anfragen',
    'sh.hm.reserve.p': 'Sende eine unverbindliche Anfrage. Wir leiten sie direkt an die Reservierung des Hotels weiter und antworten innerhalb von 24 Stunden.',
    'sh.hm.f.name': 'Dein Name',
    'sh.hm.f.email': 'E-Mail',
    'sh.hm.f.checkin': 'Anreise',
    'sh.hm.f.checkout': 'Abreise',
    'sh.hm.f.guests': 'Gäste',
    'sh.hm.f.villa': 'Zimmertyp',
    'sh.hm.f.note': 'Zusätzliche Hinweise (optional)',
    'sh.hm.f.submit': 'Anfrage senden',
    // ── Shanghai hotel modal — Capella, Jian Ye Li ──
    'sh.hm.capella.eyebrow': 'Featured Hotel · Shanghai',
    'sh.hm.capella.h': 'Ein Hotel, versteckt in einer Gasse',
    'sh.hm.capella.p1': 'Im Herzen der French Concession liegt <em>Jian Ye Li</em> — das letzte vollständig intakte Shikumen-Lilong in Shanghai. 1930 als private Wohnsiedlung erbaut, wurden diese grauen Backsteinhäuser vor dem Abriss gerettet und über neun Jahre minutiös restauriert.',
    'sh.hm.capella.p2': 'Capella verwandelte fünfundfünfzig davon in eigenständige Villen: eigene Haustür zur Gasse, eigener privater Innenhof, eigener Butler. Das Auriga Spa betreibt den Indoor-Pool, gerahmt von bogenförmigen Lagerhausfenstern. Le Comptoir de Pierre Gagnaire serviert klassische französische Küche in einem ehemaligen Missionarshaus — mit Pierre-Yovanovitch-Stühlen und Bourgeois-Blumen.',
    'sh.hm.capella.p3': 'Es ist die einzige Adresse in Shanghai, wo man <em>innerhalb</em> der Vorkriegsarchitektur der Stadt schläft — und nicht hinter einer Glasvorhangwand darüber.',
    'sh.hm.capella.loc': 'French Concession · Xuhui',
    // ── Shanghai hotel modal — Peninsula ──
    'sh.hm.peninsula.eyebrow': 'Featured Hotel · Shanghai',
    'sh.hm.peninsula.h': 'Das letzte Gebäude am Bund',
    'sh.hm.peninsula.p1': 'Siebzig Jahre lang hat die Shanghaier Stadtregierung kein einziges neues Gebäude am Bund erlaubt. 2009 wurde diese Regel ein einziges Mal gebrochen — für das Peninsula. Das Ergebnis ist ein <em>Art-déco-Bau</em>, der den Rhythmus des Cathay und des HSBC-Gebäudes daneben aufnimmt, von David Beim (Hirsch Bedner) so getreu entworfen, dass die meisten Gäste annehmen, er stünde dort seit 1929.',
    'sh.hm.peninsula.p2': 'Innen: 235 der größten Zimmer Shanghais, jedes mit Blick entweder auf Pudongs Glas-Skyline oder den historischen Bund. Das Tee-Ritual in der Lobby ist das älteste der Stadt. Sir Elly’s im 14. Stock hat die beste Terrassen-Aussicht auf die Pudong-Skyline der Stadt — Teleskop inklusive.',
    'sh.hm.peninsula.p3': 'Der 25-Meter-Indoor-Pool liegt unter einem Glaskuppel-Dach. Das Spa führt den originalen Peninsula Page Boy Service: ein uniformierter Page liefert dir alles, überall, zu jeder Stunde.',
    'sh.hm.peninsula.loc': 'Der Bund · Huangpu',
    // ── Shanghai hotel modal — Bulgari ──
    'sh.hm.bulgari.eyebrow': 'Featured Hotel · Shanghai',
    'sh.hm.bulgari.h': 'Ein italienischer Palazzo am Suzhou Creek',
    'sh.hm.bulgari.p1': 'Bulgaris achtes Hotel liegt an der Ecke, wo der Suzhou Creek auf den Bund trifft — verankert durch die minutiös restaurierte <em>Shanghai Chamber of Commerce von 1916</em>, die heute Bulgari Bar, Il Ristorante und Il Cioccolato beherbergt. Der neue Tower dahinter, von Antonio Citterio Patricia Viel entworfen, erhebt sich 48 Stockwerke über dem Fluss.',
    'sh.hm.bulgari.p2': 'Die Innenarchitektur ist unverkennbar italienisch: schokoladenbraunes Leder, schwarze Marmorbäder mit Schachbrett-Boden, Messing-Details, maßgefertigte Maxalto-Möbel und B&amp;B Italia in jedem Zimmer. Il Ristorante wird vom Drei-Michelin-Sterne-Koch Niko Romito geführt; das Bulgari Spa umhüllt einen 25-Meter-Indoor-Pool mit einem Tunnel aus warmen Holzlamellen.',
    'sh.hm.bulgari.p3': 'Es ist die deutlichste Aussage der Stadt zum <em>transplantierten europäischen Luxus</em> — eine römische Adresse, gebaut in eine chinesische Skyline.',
    'sh.hm.bulgari.loc': 'Suzhou Creek · Zhabei',



    // ── Shanghai: Spots / Reads / Clubs section headers ──
    'sh.spots.h2': 'Geheimes<br><em>Shanghai</em>',
    'sh.spots.desc': 'Eine kuratierte Auswahl von Cafés, Ateliers und ruhigen Ecken, die Einheimische für sich behalten — jenseits des Bund, jenseits der Touristenpfade.',
    'sh.reads.h2': 'Über<br><em>Shanghai</em>',
    'sh.reads.desc': 'Längere Essays, Stadtteilführer und gelegentliche Geschichtsstunden — die Art von Texten, die dich unter die Oberfläche der Stadt führen.',
    'sh.clubs.h2': 'After<br><em>Dark</em>',
    'sh.clubs.desc': 'Von Speakeasies hinter Bücherregalen bis zu Megaclubs am Flussufer — wo Shanghai sich wirklich erst nach Mitternacht öffnet.',




    'footer.nav': 'Navigation',
    'footer.info': 'Infos',
    'footer.aboutLink': 'Über uns',
    'footer.newsletter': 'Newsletter',
    'footer.contact': 'Kontakt',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.copy': '© 2026 City Archivist — Alle Rechte vorbehalten',

    'error.eyebrow': 'Seite nicht gefunden',
    'error.h': 'Diese Ecke des Archivs wird <em>gerade noch geschrieben.</em>',
    'error.p': 'Die gesuchte Seite wurde möglicherweise verschoben, umbenannt oder existierte nie. Probier die Links unten — oder geh zurück zur Startseite.',
    'error.home': 'Zurück zur Startseite',
    'error.explore': 'Reiseziele entdecken',
    'error.quicklinks': 'Schnellzugriff',
    'error.link.muenchen': 'München',
    'error.link.london': 'London',
    'error.link.shanghai': 'Shanghai',
    'error.link.tokyo': 'Tokio',
    'error.link.wonders': 'Sieben Weltwunder',
    'error.link.hotels': 'Top Hotels',
    'error.link.clubs': 'Nachtclubs',
    'error.link.imprint': 'Impressum',

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

    /* ── Club detail page bodies ── */
    'club.hi.tagline': 'Ein futuristischer Klangtempel auf der weißen Insel — seit der Eröffnung 2017 mehrfach zum №1-Club der Welt gewählt.',
    'club.hi.find.h': 'Den <em>Club finden</em>',
    'club.hi.story.h': 'Eine neue Ära von <em>Ibiza</em>',
    'club.hi.story.p1': 'Hï Ibiza eröffnete im Mai 2017 am Standort des legendären Space Ibiza und markierte damit den Beginn eines neuen Kapitels für die Insel, die der Welt die moderne Clubkultur schenkte. Hinter The Night League und Ushuaïa Entertainment entwickelt, wurde der Club von Grund auf als <em>State-of-the-Art-Erlebnis</em> konzipiert — futuristische Visuals, maßgeschneiderte Soundsysteme und ein Layout, entworfen für die anspruchsvollsten Künstler der Welt.',
    'club.hi.story.p2': 'Schon in der ersten Saison schnellte Hï an die Spitze von DJ Mags „Top 100 Clubs" — eine Position, die der Club seitdem regelmäßig hält. Residencies von Black Coffee, FISHER und David Guetta haben ihn zum globalen Pilgerort für elektronische Musik gemacht — und zur prägenden Bühne des modernen Ibiza-Sommers.',
    'club.hi.music.h': 'Sound von <em>Hï</em>',
    'club.hi.music.p': 'Zwei Hauptbereiche — das Theatre und der Club — laufen jede Nacht parallel, angeführt von erstklassigen Residencies. Die Atmosphäre ist hochenergetisch, theatralisch und visuell überwältigend, mit einer eleganten Crowd, die aus aller Welt anreist.',
    'club.hi.visit.h': 'Tickets, Residencies<br>& <em>Line-ups</em>.',
    'club.hi.visit.p': 'Tickets, der komplette Saisonkalender und Tischreservierungen werden direkt über die offizielle Hï-Ibiza-Website abgewickelt.',

    'club.echo.tagline': 'Die führende Venue Nordamerikas für elektronische Musik — eine 30.000 Quadratfuß große Halle, eigens für die größten Namen der Dance-Music gebaut.',
    'club.echo.find.h': 'Die <em>Venue finden</em>',
    'club.echo.story.h': 'Eine Hauptstadt für <em>Clubkultur</em>',
    'club.echo.story.p1': 'Echostage eröffnete 2012 im Lagerhausviertel im Nordosten von Washington D.C., gegründet von Club Glow mit einem in den USA seltenen Anspruch: einen Ort zu schaffen, der <em>für elektronische Musik konzipiert</em> ist — nicht aus einer Konzerthalle umgewidmet oder als gewöhnlicher Nachtclub angepasst. Von Anfang an war alles auf Sound, Größe und Sichtlinien ausgelegt — ein klarer Raum mit riesiger Bühne und offener Tanzfläche.',
    'club.echo.story.p2': 'Das Ergebnis: eine konstante Position unter den renommiertesten Clubs der Welt, mehrfach in DJ Mags „Top 100 Clubs" — und häufig als №1 Nordamerikas geführt. Headliner von Tiësto und Calvin Harris bis Eric Prydz und Charlotte de Witte machen Echostage zur regelmäßigen Tourstation, und die Produktionsqualität setzt den Maßstab für US-Nightlife.',
    'club.echo.music.h': 'Sound von <em>Echostage</em>',
    'club.echo.music.p': 'Das Programm deckt das gesamte elektronische Spektrum ab — von Peak-Time House und Trance bis Bass, Dubstep und Hard Techno — mit einer LED-Wand und einem Setup, das jede Show zur audiovisuellen Inszenierung macht. Die Crowd ist energiegeladen, tanzfokussiert und gekleidet für den Floor statt für die Galerie.',
    'club.echo.visit.h': 'Kalender, Tickets<br>& <em>VIP-Tische</em>.',
    'club.echo.visit.p': 'Den vollständigen Eventkalender, Presale-Zugang und Tischreservierungen findest du auf der offiziellen Echostage-Website.',

    'club.berg.tagline': 'Ein ehemaliges Heizkraftwerk Ost-Berlins, heute weltweiter Tempel des Techno — kompromisslos, monumental und von Mythen umrankt.',
    'club.berg.find.h': 'Den <em>Bunker finden</em>',
    'club.berg.story.h': 'Eine <em>Kathedrale</em> des Techno',
    'club.berg.story.p1': 'Berghain eröffnete 2004 in einem stillgelegten Heizkraftwerk im ehemaligen Ost-Berlin, gegründet von Norbert Thormann und Michael Teufele als Nachfolger ihres legendären Schwulenclubs Ostgut. Die kavernösen Betonhallen, 18 Meter hohe Decken und ein maßgefertigtes Funktion-One-Soundsystem machten ihn sofort einzigartig — und schnell zur <em>globalen Heimat des Techno</em>.',
    'club.berg.story.p2': 'Das Ethos des Clubs ist kompromisslos: keine Handys, keine Fotos, keine Eile. Sets dauern stundenlang, die Wochenend-Klubnacht zieht sich ohne Unterbruch von Samstag bis Montagmorgen, und die berühmt-strenge Tür unter Sven Marquardt ist Teil des Mythos. Über dem Hauptfloor liegt die Panorama Bar, ein hellerer, house-lastiger Raum mit eigener Kultanhängerschaft.',
    'club.berg.music.h': 'Sound von <em>Berghain</em>',
    'club.berg.music.p': 'Der Hauptfloor ist harter, hypnotischer und basslastiger Techno von Residents wie Marcel Dettmann, Ben Klock und Anastasia Kristensen. Die Panorama Bar geht in Richtung Deep House und Disco. Erwarte lange, erzählerische DJ-Sets, eine offene und queer-freundliche Crowd und die Faustregel: „Die Nacht beginnt erst am Morgen."',
    'club.berg.visit.h': 'Klubnacht, Konzerte<br>& <em>Events</em>.',
    'club.berg.visit.p': 'Das aktuelle Programm, Ticketverkäufe sowie Informationen zu Halle am Berghain und Säule findest du auf der offiziellen Seite.',

    'club.fab.tagline': 'Drei Räume unter dem Smithfield Market und ein vibrierender Bodysonic-Floor — die Institution, die London ins Zentrum der Underground-Dance-Music gestellt hat.',
    'club.fab.find.h': 'Den <em>Club finden</em>',
    'club.fab.story.h': 'Londons <em>Underground</em>-Zuhause',
    'club.fab.story.p1': 'Fabric eröffnete im Oktober 1999 in den Kühlkellern unter dem alten Smithfield-Fleischmarkt — ein Labyrinth aus blankem Backstein und Beton, das sich sofort von allen anderen Locations Londons unterschied. Die Gründer Keith Reilly und Cameron Leslie wollten einen Club, in dem die Musik an erster Stelle steht, und bauten drei verbundene Räume rund herum, darunter den nun berühmten Room One mit seinem <em>Bodysonic-Dancefloor</em> — 450 Bass-Transducer im Boden, sodass der Raum wörtlich mit dem Bass mitvibriert.',
    'club.fab.story.p2': 'Die beiden langjährigen Mix-Reihen — Fabric (House, Techno) und FABRICLIVE (Drum & Bass, Broken Beat, Breakbeat) — waren Pflichthören für eine ganze Generation. Nach kurzer, viel beachteter Schließung 2016 brachte eine Kampagne von Stadt, Bürgermeisteramt und internationalen Künstlern den Club zurück; heute ist Fabric weiterhin einer der renommiertesten Underground-Clubs der Welt.',
    'club.fab.music.h': 'Sound von <em>Fabric</em>',
    'club.fab.music.p': 'Room One ist House und Techno; Room Two geht tiefer, Dub und Minimal; Room Three ist die spirituelle Heimat von UK Drum & Bass und Bass-Music. Erwarte eine ernsthafte, musikorientierte Crowd, Marathon-Sets internationaler Residents wie Craig Richards und Terry Francis, und ein Soundsystem, das man fühlt mehr als hört.',
    'club.fab.visit.h': 'Line-ups, Mixes<br>& <em>Tickets</em>.',
    'club.fab.visit.p': 'Den vollständigen Eventkalender, Vorverkauf und die langjährigen fabric- / FABRICLIVE-Mix-Reihen findest du auf der offiziellen Website.',

    'club.pacha.tagline': 'Die Legende mit dem Kirschen-Logo — der Club, der Ibiza zur Welthauptstadt des Nachtlebens machte, seit 1973 unter demselben Dach.',
    'club.pacha.find.h': 'Die <em>Kirsche finden</em>',
    'club.pacha.story.h': 'Wo <em>alles begann</em>',
    'club.pacha.story.p1': 'Pacha wurde 1967 in Sitges von Ricardo Urgell gegründet und eröffnete 1973 seinen heute ikonischen Standort in Ibiza-Stadt — lange bevor „Ibiza" Synonym für globale Clubkultur wurde. Die weiß getünchte mediterrane Villa, die Open-Air-Höfe, die berühmten Zwillingskirschen: Pacha hat nicht nur eine Szene beherbergt, <em>er hat sie erschaffen</em>, als Brücke zwischen der europäischen Disco der 1970er und dem Aufstieg von House Ende der 80er.',
    'club.pacha.story.p2': 'Fünf Jahrzehnte später erstreckt sich die Marke über Hotels, Restaurants und Clubs weltweit, aber der originale Standort auf Ibiza bleibt das Herzstück. Nach einer großen Renovierung 2022 öffnete Pacha mit umgestaltetem Hauptraum, erfrischten Terrassen und neuer Konzentration auf die Kernidee: Glamour, Musik und Community unter einem balearischen Dach.',
    'club.pacha.music.h': 'Sound von <em>Pacha</em>',
    'club.pacha.music.p': 'Pacha ist von Tradition her Open-Format — House, Disco und zeitgenössische Clubmusik, mit langjährigen Residencies und Headliner-Parties wie Solomun +1, Pure Pacha und Insane. Die Crowd mischt Locals, Residents und internationale Reisende, gekleidet für die Nacht und bereit, bis zum Sonnenaufgang zu tanzen.',
    'club.pacha.visit.h': 'Kalender, Tische<br>& <em>Residencies</em>.',
    'club.pacha.visit.p': 'Tickets, Saison-Residencies und Tischreservierungen werden über die offizielle Pacha-Ibiza-Website verwaltet.',

    'club.unvrs.tagline': 'Der größte Club der Welt — eröffnet im Sommer 2025 auf dem Privilege-Gelände, mit zwei Hauptbereichen, einem 360°-Open-Air-Amphitheater und einer Bühne, die eine neue Ära für Ibiza einläutet.',
    'club.unvrs.find.h': 'Das <em>Universum finden</em>',
    'club.unvrs.story.h': 'Ein neues <em>Universum</em>',
    'club.unvrs.story.p1': 'UNVRS eröffnete im Mai 2025 am legendären Standort von Privilege Ibiza — zwei Jahrzehnte lang der größte Nachtclub der Welt und Schauplatz der hemmungslosesten Jahre von Manumission. Nach kompletter Entkernung durch The Night League wurde der Ort von Grund auf als <em>UNVRS</em> neu errichtet: eine Mehrraum-Venue mit komplett durchgeplantem Engineering, entworfen vom selben Team hinter Hï Ibiza und Ushuaïa.',
    'club.unvrs.story.p2': 'Die Architektur kombiniert einen Indoor-Hauptraum mit der weltweit ersten 360°-Open-Air-Clubbühne — ein kreisförmiges Amphitheater unter dem Himmel Ibizas, programmatisch unabhängig vom Indoor-Floor. Dazu eine neu gestaltete Terrasse, ein privater Pool-Club und ein Backstage für arena-große Residencies — UNVRS ist das ehrgeizigste Club-Opening seines Jahrzehnts.',
    'club.unvrs.music.h': 'Sound von <em>UNVRS</em>',
    'club.unvrs.music.p': 'Das Programm deckt das gesamte elektronische Spektrum ab — Peak-Time House, melodischer und Main-Stage-Techno, großflächiger EDM und Afro House — getragen von exklusiven Residencies der Headliner, die zuvor Ushuaïa und Hï ihr Zuhause nannten. Die Produktion spielt in einer eigenen Liga: eine umlaufende LED-Decke, ein maßgefertigtes Soundsystem und Visuals, die Indoor- und Outdoor-Bühne in einen Dialog setzen.',
    'club.unvrs.visit.h': 'Tickets, Residencies<br>& <em>Line-ups</em>.',
    'club.unvrs.visit.p': 'Tickets, der vollständige Saisonkalender und Tischreservierungen werden direkt über die offizielle UNVRS-Website abgewickelt.',

    /* ── Sieben Weltwunder ── */
    'wonders.eyebrow': 'Sieben Weltwunder',
    'wonders.h2': 'Die sieben<br>Welt<em>wunder</em>',
    'wonders.desc': 'Die neuen sieben Weltwunder, gewählt von Millionen weltweit. Von Petra bis Machu Picchu — die Ikonen, die unsere gemeinsame Vorstellungskraft prägen.',
    'wonders.cta': 'Die sieben entdecken',
    'wonders.page.eyebrow': 'Die neuen sieben Weltwunder',
    'wonders.page.h1': 'Die sieben<br><em>Weltwunder</em>',
    'wonders.page.sub': 'Eine Reise durch Kontinente und Jahrhunderte — die sieben Monumente, die die Menschheit zu ihrem größten Vermächtnis gewählt hat.',
    'wonders.story.label': 'Geschichte',
    'wonders.location.label': 'Lage',
    'wonders.visit.label': 'Besuch planen',
    'wonders.meta.built': 'Erbaut',
    'wonders.meta.country': 'Land',
    'wonders.meta.height': 'Höhe',

    'welcome.greeting': 'Willkommen bei City Archivist',
    'welcome.sub': 'Wähle deine Sprache, um zu beginnen.',
    'welcome.continue': 'Fortfahren',

    /* ── Legal / Imprint ── */
    'legal.eyebrow': 'Rechtliches',
    'legal.title': 'Impressum',
    'legal.contact.label': 'Kontakt',
    'legal.contact.h': 'So erreichst du uns',
    'legal.contact.country': 'Deutschland',
    'legal.contact.email.label': 'E-Mail',
    'legal.contact.note': 'Für Anfragen aus Presse, Partnerschaften oder rechtlichen Themen bitte per E-Mail melden. Eine ladungsfähige Anschrift wird auf schriftliche Anfrage zur Verfügung gestellt.',
    'legal.responsible.label': 'Angaben gemäß § 5 TMG',
    'legal.responsible.h': 'Verantwortlich für den Inhalt',
    'legal.responsible.p': 'Konrad Xu. Ladungsfähige Anschrift auf schriftliche Anfrage.',
    'legal.editorial.label': '§ 55 Abs. 2 RStV',
    'legal.editorial.h': 'Verantwortlich für journalistisch-redaktionelle Inhalte',
    'legal.editorial.p': 'Konrad Xu. Kontakt über die E-Mail-Adresse oben.',
    'legal.liability.label': 'Haftung',
    'legal.liability.h': 'Haftungsausschluss',
    'legal.liability.content': '<strong>Haftung für Inhalte.</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.',
    'legal.liability.links': '<strong>Haftung für Links.</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
    'legal.copyright.label': 'Urheberrecht',
    'legal.copyright.h': 'Bildrechte und Inhalte',
    'legal.copyright.p1': 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
    'legal.copyright.p2': 'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.',
    'legal.privacy.label': 'Datenschutz',
    'legal.privacy.h': 'Datenschutzerklärung',
    'legal.privacy.intro': 'Wir verarbeiten personenbezogene Daten nur soweit es für die Bereitstellung dieser Website und die von dir angefragten Funktionen (Newsletter, Kontaktaufnahme) erforderlich ist.',
    'legal.privacy.hosting.h': 'Hosting',
    'legal.privacy.hosting.p': 'Diese Website wird über GitHub Pages bereitgestellt. GitHub speichert beim Aufruf technische Zugriffsdaten (IP-Adresse, Datum, User-Agent), wie es für den Betrieb einer Website üblich ist. Wir selbst haben keinen direkten Zugriff auf diese Logs.',
    'legal.privacy.cookies.h': 'Cookies & lokaler Speicher',
    'legal.privacy.cookies.p': 'Diese Website speichert nur wenige lokale Einträge in deinem Browser — deine gewählte Sprache und ggf. deine Newsletter-Anmeldung — um deine Präferenzen zu merken. Es gibt kein Tracking und keine Analyse-Cookies.',
    'legal.privacy.newsletter.h': 'Newsletter',
    'legal.privacy.newsletter.p': 'Trägst du dich für unseren Newsletter ein, werden dein Name und deine E-Mail-Adresse über den Dienst Formspree (USA) verarbeitet, um dir Aktualisierungen zukommen zu lassen. Du kannst dich jederzeit per Antwort-E-Mail abmelden.',
    'legal.privacy.rights.h': 'Deine Rechte',
    'legal.privacy.rights.p': 'Du hast jederzeit das Recht auf Auskunft, Berichtigung oder Löschung deiner Daten. Schreib uns einfach an die im Kontakt angegebene E-Mail-Adresse.',
  },

  zh: {
    'nav.home': '首页',
    'nav.destinations': '目的地',
    'nav.wonders': '七大奇迹',
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

    'clubs.eyebrow': '夜店',
    'clubs.cta': '探索夜店',
    'clubsFeature.title': '全球顶级<em>夜店</em>',
    'clubsFeature.text': '从柏林的工业殿堂到伊比萨的永恒夏日 — 一份精心策划的档案，收录了塑造电子音乐文化的传奇空间。',
    'wondersFeature.title': '世界<em>七大奇迹</em>',
    'wondersFeature.text': '由全球数百万人投票选出的新七大奇迹 — 一份精心策划的档案，收录了塑造人类想象力的地方。',
    'clubsPage.eyebrow': '夜店档案',
    'clubsPage.h1': '夜色<br><em>之后</em>',
    'clubsPage.note.label': '说明',
    'clubsPage.note.p': '这些不是最吵或最大的夜店——而是塑造了电子音乐文化的地方。从柏林的工业殿堂到伊比萨的永恒夏日，这份名单上的每一个名字本身都是一个目的地。',
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
    'about.why.label': '初衷',
    'about.why.h': '为什么会有 <em>City Archivist</em>。',
    'about.why.p1': '在<em>慕尼黑艾美酒店</em>（万豪旅享家旗下）的实习期间，我在早餐服务部门工作了整整两周。日复一日，我注意到同样的事情：客人问的不是著名景点，而是一座城市<em>还有什么</em>——那些没有出现在旅行指南里的角落，本地人真正会去的地方。',
    'about.why.p2': '正是这个空白让我决定去填补。<em>City Archivist</em> 是一份安静的精选——为那些想穿过排队人群、找到这座城市真正生活其中的地方的旅人而存在。',

    'news.eyebrow': '订阅',
    'news.h': '留在 <em>档案中。</em>',
    'news.p': '新目的地、酒店专题与城市指南 — 直接送达你的邮箱。无垃圾邮件,只有精选内容。',
    'news.namePlaceholder': '你的姓名',
    'news.emailPlaceholder': 'you@email.com',
    'news.button': '订阅',
    'news.success': '感谢 — 你已加入名单。',
    'news.rateLimit': '请求过于频繁——请一小时后再试。',
    'news.errorEmail': '请输入有效的电子邮件地址。',
    'news.errorName': '请输入你的姓名。',
    // ── Shanghai page ──
    'sh.hero.eyebrow': '中国 · 东亚 · 城市指南',
    'sh.hero.h1': '<em>上海</em>',
    'sh.hero.tagline': '黄浦江将这座城市一分为二：一岸是装饰艺术拱廊，另一岸是玻璃高塔——而在它们之间，藏着一千条隐秘的弄堂。',
    'sh.tab.spots': '隐秘之地',
    'sh.tab.day': '完美一日',
    'sh.tab.reads': '阅读',
    'sh.tab.hotels': '酒店',
    'sh.tab.clubs': '夜店',
    'sh.day.eyebrow': '完美一日',
    'sh.day.h2': '上海<em>一日</em>',
    'sh.day.desc': '清晨的小笼包，午后的里弄漫步，外滩的日落——一条路线，十个站点，十二个小时。',
    'sh.day.routeLabel': '行程',
    'sh.day.intro': '一份理想的一日行程，跟随上海真正的节奏：城市从慢启动，在金色时刻达到高峰，真正展开是在天黑之后。下方：包含每段路程时间的完整时间线。',
    'sh.day.show': '显示时间线',
    'sh.day.hide': '隐藏时间线',
    'sh.day.s1.tag': '早餐',
    'sh.day.s1.name': '佳家<em>汤包</em>',
    'sh.day.s1.desc': '人民广场旁边只有柜台的小笼包店，距离仅两分钟。点蟹粉小笼，站着吃完，在排队之前离开。',
    'sh.day.t1': '12 分钟 · 出租车到豫园',
    'sh.day.s2.tag': '古典园林',
    'sh.day.s2.name': '豫园 &amp; <em>老城</em>',
    'sh.day.s2.desc': '一座有五百年历史的明代园林，亭台、锦鲤池、假山——在开园时到达，几乎可以独享这些庭院。',
    'sh.day.t2': '15 分钟 · 沿中山路步行至外滩',
    'sh.day.s3.tag': '滨水大道',
    'sh.day.s3.name': '<em>外滩</em>',
    'sh.day.s3.desc': '沿着滨江大道走，左边是殖民时期的银行建筑，浦东的玻璃天际线在黄浦江对岸。从外白渡桥端拍照最美。',
    'sh.day.t3': '10 分钟 · 出租车到法租界',
    'sh.day.s4.tag': '午餐',
    'sh.day.s4.name': '法租界<em>午餐</em>',
    'sh.day.s4.desc': '要么去 Lost Heaven 在前传教士住宅中享用云南菜，要么去 RAC bar 在梧桐树下品尝静谧的法式餐点。',
    'sh.day.t4': '8 分钟 · 穿过梧桐树荫的小巷散步',
    'sh.day.s5.tag': '弄堂 &amp; 工作室',
    'sh.day.s5.name': '<em>田子坊</em>弄堂',
    'sh.day.s5.desc': '一个由石库门弄堂改造成独立商店、工作室和咖啡馆的迷宫。主干道上充满游客，但一条弄堂之外便是安静的手工艺世界。',
    'sh.day.t5': '15 分钟 · 地铁 9 号线到静安寺',
    'sh.day.s6.tag': '咖啡时刻',
    'sh.day.s6.name': '% Arabica <em>静安</em>',
    'sh.day.s6.desc': '京都起家的咖啡馆，背靠金色的静安寺——点一杯冰京都拼配，坐在台阶上，在夜晚开始前深呼吸。',
    'sh.day.t6': '20 分钟 · 出租车返回外滩方向',
    'sh.day.s7.tag': '日落',
    'sh.day.s7.name': '<em>屋顶</em>看落日',
    'sh.day.s7.desc': '外滩 18 号上的 Bar Rouge 是明信片——但半岛酒店八楼的 Heritage by Madison 视野更宁静，内格罗尼也更好。',
    'sh.day.t7': '5 分钟 · 短步行到晚餐地',
    'sh.day.s8.tag': '晚餐',
    'sh.day.s8.name': '<em>Mr &amp; Mrs Bund</em>晚餐',
    'sh.day.s8.desc': 'Paul Pairet 在外滩 18 号六楼的俏皮法式 brasserie。营业至凌晨 2 点——预订时记得要靠窗的桌子。',
    'sh.day.t8': '10 分钟 · 出租车到 Found 158',
    'sh.day.s9.tag': '鸡尾酒',
    'sh.day.s9.name': '<em>Speak Low</em>',
    'sh.day.s9.desc': '新天地一家四层楼的私酿酒吧，藏在一家复古调酒工具店后面。推开二楼的书架，找到第三层酒吧。东京训练的调酒师，没有菜单。',
    'sh.day.t9': '可选 — 步行或出租车回家',
    'sh.day.s10.tag': '深夜',
    'sh.day.s10.name': '<em>24 小时摊位</em>面条',
    'sh.day.s10.desc': '在云南南路任何一家深夜摊位点一碗葱油面或猪肉馄饨——这座城市真正的收尾仪式。',
    'sh.hotels.h2': '在哪里<br><em>过夜</em>',
    'sh.hotels.desc': '从城外一小时车程的明代庄园，到南京路上由发电厂改造的设计酒店——四个定义现代上海奢华的地址。',
    'sh.h.aman.name': '安缦养云',
    'sh.h.aman.area': '闵行区 · 距市中心 1 小时',
    'sh.h.aman.desc': '十三栋明代庭院民居，从江西一砖一瓦运来，在 40 公顷的樟树林中重建。安缦有史以来最雄心勃勃的度假村。',
    'sh.h.capella.name': '上海建业里嘉佩乐酒店',
    'sh.h.capella.area': '法租界 · 徐汇',
    'sh.h.capella.desc': '城市最后一个完整里弄中的 55 栋修复石库门弄堂房屋。每栋别墅都有自己的管家、花园和入口——上海唯一真正的弄堂酒店。',
    'sh.h.peninsula.name': '上海半岛酒店',
    'sh.h.peninsula.area': '外滩 · 黄浦',
    'sh.h.peninsula.desc': '外滩起点的装饰艺术大气派——七十年来历史滨水区唯一获准新建的建筑。Sir Elly’s 屋顶拥有城中观赏浦东的最佳视角。',
    'sh.h.bulgari.name': '上海宝格丽酒店',
    'sh.h.bulgari.area': '苏州河 · 闸北',
    'sh.h.bulgari.desc': 'Antonio Citterio 在苏州河畔的意大利杰作——以修复后的 1916 年上海总商会大楼为核心。黑色大理石浴室、20 米水疗泳池、Niko Romito 主理的 Il Ristorante。',
    // ── Shanghai hotel modal — Aman Yangyun ──
    'sh.hm.aman.eyebrow': '推荐酒店 · 上海',
    'sh.hm.aman.h': '森林、王朝、度假村',
    'sh.hm.aman.p1': '2002 年，企业家马达东从江西省一座规划水库的工地上抢救出 <em>五十栋明代庭院民居</em>。他将每一栋——一砖一瓦、一梁一椽——向东运输了一千多公里，重新安置在上海郊外一片 40 公顷的樟树林中。',
    'sh.hm.aman.p2': '安缦于 2018 年在那片森林中开业。二十六栋泳池别墅以安缦的语言新建——低矮、宁静、Kerry Hill 风格——而其中十三栋原始的明代别墅则被修复为私人宅邸。这是安缦有史以来建造的最大水疗中心。还有一座南书房文人亭、一个湖畔茶室，以及一个用于晨练太极的庭院。',
    'sh.hm.aman.p3': '这是中国唯一一个让你能在古董中入睡的地方——之间没有任何博物馆的红绳。',
    'sh.hm.aman.loc': '闵行区 · 距市中心 1 小时',
    'sh.hm.label.location': '位置',
    'sh.hm.label.opened': '开业',
    'sh.hm.label.rooms': '客房 &amp; 别墅',
    'sh.hm.label.from': '起价',
    'sh.hm.reserve.h': '申请<em>预订</em>',
    'sh.hm.reserve.p': '发送一份无约束力的咨询。我们将直接转发给酒店的预订部门，并在 24 小时内回复。',
    'sh.hm.f.name': '你的姓名',
    'sh.hm.f.email': '邮箱',
    'sh.hm.f.checkin': '入住日期',
    'sh.hm.f.checkout': '退房日期',
    'sh.hm.f.guests': '入住人数',
    'sh.hm.f.villa': '房型',
    'sh.hm.f.note': '其他备注（选填）',
    'sh.hm.f.submit': '发送咨询',
    // ── Shanghai hotel modal — Capella, Jian Ye Li ──
    'sh.hm.capella.eyebrow': '推荐酒店 · 上海',
    'sh.hm.capella.h': '藏在弄堂里的酒店',
    'sh.hm.capella.p1': '法租界腹地坐落着 <em>建业里</em> — 上海最后一片完整的石库门里弄。1930 年作为私人住宅区建成，这些灰砖弄堂房屋从拆迁中被抢救下来，历经九年精心修复。',
    'sh.hm.capella.p2': '嘉佩乐将其中五十五栋改造成独立的别墅：每栋有自己面向弄堂的入口、自己的私人庭院、自己的管家。Auriga Spa 经营着拱形仓库窗户环绕的室内泳池。Le Comptoir de Pierre Gagnaire 在一栋前传教士住宅里供应经典法式料理——配以 Pierre Yovanovitch 的椅子和 Bourgeois 的鲜花。',
    'sh.hm.capella.p3': '这是上海唯一一个让你睡在这座城市战前建筑<em>之中</em>的地址——而不是躲在它上方的玻璃幕墙后面。',
    'sh.hm.capella.loc': '法租界 · 徐汇',
    // ── Shanghai hotel modal — Peninsula ──
    'sh.hm.peninsula.eyebrow': '推荐酒店 · 上海',
    'sh.hm.peninsula.h': '外滩上最后一座新建筑',
    'sh.hm.peninsula.p1': '七十年来上海市政府没有批准过外滩上任何一栋新建筑。2009 年这条规则被打破了一次——为了半岛酒店。成果是一座<em>装饰艺术建筑</em>，承接了旁边华懋饭店和汇丰银行大楼的节奏，由 David Beim（Hirsch Bedner）忠实设计，以至于大多数客人以为它从 1929 年就矗立在那里。',
    'sh.hm.peninsula.p2': '内部：上海最大的 235 间客房，每一间都拥有浦东玻璃天际线或历史外滩的景观。大堂下午茶仪式是这座城市最古老的。十四楼的 Sir Elly’s 拥有全城观赏浦东天际线最好的露台视角——配有望远镜。',
    'sh.hm.peninsula.p3': '25 米室内泳池位于彩色玻璃天棚之下。水疗中心延续了半岛酒店原创的 Page Boy 服务：穿制服的传讯员会在任何时刻将任何东西送到任何地方。',
    'sh.hm.peninsula.loc': '外滩 · 黄浦',
    // ── Shanghai hotel modal — Bulgari ──
    'sh.hm.bulgari.eyebrow': '推荐酒店 · 上海',
    'sh.hm.bulgari.h': '苏州河畔的意大利宫殿',
    'sh.hm.bulgari.p1': '宝格丽旗下第八家酒店坐落在苏州河与外滩交汇之处——以精心修复的 <em>1916 年上海总商会</em>为核心，如今容纳着宝格丽酒吧、Il Ristorante 和 Il Cioccolato。后方由 Antonio Citterio Patricia Viel 设计的新塔楼高耸 48 层，俯瞰整条河流。',
    'sh.hm.bulgari.p2': '室内语言无可挑剔地意式：巧克力棕皮革、黑色大理石浴室配棋盘地砖、黄铜细节、定制 Maxalto 家具和每间客房的 B&amp;B Italia。Il Ristorante 由三星米其林大厨 Niko Romito 主理；宝格丽水疗中心用一条温暖木条隧道环绕 25 米室内泳池。',
    'sh.hm.bulgari.p3': '这是这座城市对<em>移植的欧洲奢华</em>最明确的宣言——一个建在中国天际线上的罗马地址。',
    'sh.hm.bulgari.loc': '苏州河 · 闸北',



    // ── Shanghai: Spots / Reads / Clubs section headers ──
    'sh.spots.h2': '隐秘的<br><em>上海</em>',
    'sh.spots.desc': '一份精心策划的咖啡馆、工作室和宁静角落清单——本地人不对外分享的地方，外滩之外，游客路线之外。',
    'sh.reads.h2': '关于<br><em>上海</em>',
    'sh.reads.desc': '长篇随笔、街区指南，以及偶尔的历史课——这种写作会带你深入这座城市的表面之下。',
    'sh.clubs.h2': '夜<br><em>幕降临</em>',
    'sh.clubs.desc': '从藏在书架后的私酿酒吧到江边的大型夜店——上海真正展开是在午夜之后。',




    'footer.nav': '导航',
    'footer.info': '信息',
    'footer.aboutLink': '关于我们',
    'footer.newsletter': '订阅',
    'footer.contact': '联系',
    'footer.imprint': '版权信息',
    'footer.privacy': '隐私政策',
    'footer.copy': '© 2026 City Archivist — 版权所有',

    'error.eyebrow': '页面未找到',
    'error.h': '档案的这个角落<em>仍在书写中。</em>',
    'error.p': '你要找的页面可能已被移动、重命名，或从未存在。试试下方的链接 — 或返回首页。',
    'error.home': '返回首页',
    'error.explore': '浏览目的地',
    'error.quicklinks': '快速链接',
    'error.link.muenchen': '慕尼黑',
    'error.link.london': '伦敦',
    'error.link.shanghai': '上海',
    'error.link.tokyo': '东京',
    'error.link.wonders': '世界七大奇迹',
    'error.link.hotels': '顶级酒店',
    'error.link.clubs': '夜店',
    'error.link.imprint': '版权信息',

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

    /* ── Club detail page bodies ── */
    'club.hi.tagline': '伊比萨白色岛屿上的未来派音响殿堂 — 自 2017 年开业以来,多次被评为全球第一夜店。',
    'club.hi.find.h': '找到 <em>这家俱乐部</em>',
    'club.hi.story.h': '伊比萨的<em>新纪元</em>',
    'club.hi.story.p1': 'Hï Ibiza 于 2017 年 5 月在传奇的 Space Ibiza 旧址开业,为这座向世界输出现代俱乐部文化的岛屿翻开了新篇章。由 The Night League 和 Ushuaïa Entertainment 支持,这座场所从零开始被打造为<em>顶尖体验</em> — 未来派视觉、定制音响系统,以及为世界上最挑剔的艺术家而设计的空间布局。',
    'club.hi.story.p2': '仅在第一个赛季,Hï 就跃居 DJ Mag "全球百大俱乐部" 榜首,并多次蝉联。Black Coffee、FISHER 和 David Guetta 等艺术家的驻场表演,使其成为电子音乐的全球朝圣之地 — 现代伊比萨夏季的标志性舞台。',
    'club.hi.music.h': '<em>Hï</em> 之声',
    'club.hi.music.p': '两个主舞池 — Theatre 和 Club — 每晚平行运行,由世界顶级驻场艺人坐镇。氛围充满活力、戏剧性与视觉震撼,客群衣着精致,来自全球各地。',
    'club.hi.visit.h': '门票、驻场<br>与 <em>阵容</em>。',
    'club.hi.visit.p': '所有门票、完整赛季日程与餐桌预订,均通过 Hï Ibiza 官方网站办理。',

    'club.echo.tagline': '北美顶级电子音乐场地 — 一座 30,000 平方英尺的仓库,专为舞曲音乐界的顶级巨星而建。',
    'club.echo.find.h': '找到 <em>这家场地</em>',
    'club.echo.story.h': '俱乐部文化的<em>首都</em>',
    'club.echo.story.p1': 'Echostage 于 2012 年在华盛顿特区东北部的仓库区开业,由 Club Glow 创立,带着一份在美国少见的使命:打造一个<em>围绕电子音乐建造</em>的场所,而非由音乐厅改造或由普通夜店改装。从第一天起,它就是为音响、规模与视线设计的 — 一个清晰的单一空间,巨大的舞台和开放的舞池。',
    'club.echo.story.p2': '结果是它持续位列全球最受尊敬的俱乐部之一,多次出现在 DJ Mag "全球百大" 名单中,并经常被评为北美第一。从 Tiësto、Calvin Harris 到 Eric Prydz、Charlotte de Witte 等顶级艺人,都将其列为常规巡演站,其制作水准为美国夜生活树立了标杆。',
    'club.echo.music.h': '<em>Echostage</em> 之声',
    'club.echo.music.p': '节目覆盖整个电子频谱 — 从高峰时段 House 与 Trance 到 Bass、Dubstep 与硬核 Techno — LED 墙与全套灯光设备将每场演出变成完整的视听演出。客群充满活力,以跳舞为核心,衣着为舞池而非为秀。',
    'club.echo.visit.h': '日程、门票<br>与 <em>VIP 餐桌</em>。',
    'club.echo.visit.p': '完整活动日程、提前购票及餐桌预订请见 Echostage 官方网站。',

    'club.berg.tagline': '前东柏林发电厂改造成的全球 Techno 殿堂 — 不妥协、宏伟,神话萦绕。',
    'club.berg.find.h': '找到 <em>这座地堡</em>',
    'club.berg.story.h': 'Techno 的<em>大教堂</em>',
    'club.berg.story.p1': 'Berghain 于 2004 年在前东柏林一座废弃的供热发电厂中开业,由 Norbert Thormann 和 Michael Teufele 创办,作为其传奇同志俱乐部 Ostgut 的继任者。空旷的混凝土大厅、18 米高的天花板和定制的 Funktion-One 音响系统让它立刻独树一帜 — 并迅速成为<em>全球 Techno 之家</em>。',
    'club.berg.story.p2': '俱乐部的精神不妥协:不允许手机、不允许拍照、不催促。表演持续数小时,周末 Klubnacht 从周六不间断延续至周一清晨,由 Sven Marquardt 监督的著名严苛大门已是神话的一部分。主舞池之上是 Panorama Bar — 更明亮、偏 House 的房间,有自己的狂热追随者。',
    'club.berg.music.h': '<em>Berghain</em> 之声',
    'club.berg.music.p': '主舞池是来自 Marcel Dettmann、Ben Klock 和 Anastasia Kristensen 等驻场 DJ 的硬核、催眠且重低音的 Techno。Panorama Bar 偏向 Deep House 与 Disco。期待长篇叙事 DJ Set、开放且 queer 友好的客群,以及一条不成文的规则:"夜晚真正开始于早晨。"',
    'club.berg.visit.h': 'Klubnacht、演唱会<br>与 <em>活动</em>。',
    'club.berg.visit.p': '当前节目、门票销售以及 Halle am Berghain 和 Säule 的资讯,均在官方网站发布。',

    'club.fab.tagline': 'Smithfield 市场之下的三个房间,加上震动的 Bodysonic 舞池 — 让伦敦成为地下舞曲音乐核心的传奇机构。',
    'club.fab.find.h': '找到 <em>这家俱乐部</em>',
    'club.fab.story.h': '伦敦的<em>地下</em>之家',
    'club.fab.story.p1': 'Fabric 于 1999 年 10 月在旧 Smithfield 肉类市场地下的冷藏库中开业 — 由裸砖与混凝土组成的迷宫,从一开始就与伦敦任何其他场所都不同。创办人 Keith Reilly 和 Cameron Leslie 想要一个以音乐为先的俱乐部,围绕它建造了三个相连的房间,包括现今著名的 Room One 与其<em>Bodysonic 舞池</em> — 450 个低音换能器嵌入地板,房间真正与低音一同震动。',
    'club.fab.story.p2': '俱乐部的两个长期 Mix 系列 — Fabric(House、Techno)与 FABRICLIVE(Drum & Bass、Broken Beat、Breakbeat) — 成为整整一代人的必听清单。2016 年短暂、高调地关闭后,在伦敦市、市长办公室与全球艺术家支持下重新开张;如今 Fabric 仍是全球最受尊敬的地下俱乐部之一。',
    'club.fab.music.h': '<em>Fabric</em> 之声',
    'club.fab.music.p': 'Room One 是 House 与 Techno;Room Two 偏深沉、Dub 与 Minimal;Room Three 是英国 Drum & Bass 与 Bass Music 的精神之家。期待认真、以音乐为先的客群,Craig Richards 和 Terry Francis 等国际驻场艺人的马拉松级演出,以及一套调校成"以感受为先"的音响系统。',
    'club.fab.visit.h': '阵容、Mix<br>与 <em>门票</em>。',
    'club.fab.visit.p': '完整活动日程、预售门票以及长期运行的 fabric / FABRICLIVE Mix 系列均在官方网站。',

    'club.pacha.tagline': '樱桃标志的传奇 — 让伊比萨成为世界夜生活之都的俱乐部,自 1973 年起在同一屋檐下舞动。',
    'club.pacha.find.h': '找到 <em>这颗樱桃</em>',
    'club.pacha.story.h': '<em>一切</em>开始的地方',
    'club.pacha.story.p1': 'Pacha 于 1967 年由 Ricardo Urgell 在锡切斯创办,并于 1973 年开设了如今标志性的伊比萨城选址 — 远在"伊比萨"成为全球俱乐部文化代名词之前。粉刷洁白的地中海别墅、露天庭院、著名的双樱桃:Pacha 不只是承载场景,<em>它创造了一个场景</em>,成为 1970 年代欧洲 Disco 与 1980 年代末 House 兴起之间的桥梁。',
    'club.pacha.story.p2': '五十年过去了,品牌延展至全球的酒店、餐厅与俱乐部,但伊比萨原址仍是核心。经过 2022 年的大规模翻新,Pacha 重新开业,重塑主舞池、刷新露台,重新聚焦其核心理念:在一个巴利阿里屋檐下的魅力、音乐与社群。',
    'club.pacha.music.h': '<em>Pacha</em> 之声',
    'club.pacha.music.p': 'Pacha 传统上是 Open-Format — House、Disco 与当代俱乐部音乐,长期驻场和如 Solomun +1、Pure Pacha、Insane 等头牌派对。客群混合本地人、驻场居民与国际旅客,衣着精致,准备跳到日出。',
    'club.pacha.visit.h': '日程、餐桌<br>与 <em>驻场</em>。',
    'club.pacha.visit.p': '门票、季度驻场与餐桌预订通过 Pacha Ibiza 官方网站管理。',

    'club.unvrs.tagline': '世界上最大的俱乐部 — 2025 年夏天在 Privilege 旧址开业,拥有两个主厅、360° 露天圆形剧场和为伊比萨新时代建造的音乐舞台。',
    'club.unvrs.find.h': '找到 <em>这个宇宙</em>',
    'club.unvrs.story.h': '一个新的<em>宇宙</em>',
    'club.unvrs.story.p1': 'UNVRS 于 2025 年 5 月在传奇的 Privilege Ibiza 旧址开业 — 这里曾在二十年里是世界最大的夜店,也是 Manumission 最无拘无束岁月的发生地。在 The Night League 完成完全拆除后,该场所被从零重建为 <em>UNVRS</em>:一个多厅、全工程化的场所,由打造 Hï Ibiza 和 Ushuaïa 的同一团队设计。',
    'club.unvrs.story.p2': '建筑结构将室内主厅与全球首个 360° 露天俱乐部舞台结合 — 在伊比萨天空下的圆形剧场,独立于室内舞池编排。再加上重新设计的露台、私人泳池俱乐部和适合体育馆级驻场的后台,UNVRS 成为本十年最雄心勃勃的俱乐部开张。',
    'club.unvrs.music.h': '<em>UNVRS</em> 之声',
    'club.unvrs.music.p': '节目覆盖整个电子频谱 — 高峰时段 House、旋律与主舞台 Techno、大舞台 EDM 与 Afro House — 由之前在 Ushuaïa 和 Hï 落户的头牌驻场艺人独家加持。制作规模在另一个层级:环绕 LED 天花板、定制音响系统,以及为室内与室外舞台对话设计的视觉。',
    'club.unvrs.visit.h': '门票、驻场<br>与 <em>阵容</em>。',
    'club.unvrs.visit.p': '门票、完整赛季日程和餐桌预订均通过 UNVRS 官方网站直接办理。',

    /* ── 世界七大奇迹 ── */
    'wonders.eyebrow': '世界七大奇迹',
    'wonders.h2': '世界<br><em>七大奇迹</em>',
    'wonders.desc': '由全球数百万人投票选出的新七大奇迹。从佩特拉到马丘比丘 — 定义我们共同想象力的标志。',
    'wonders.cta': '探索七大奇迹',
    'wonders.page.eyebrow': '新世界七大奇迹',
    'wonders.page.h1': '世界<br><em>七大奇迹</em>',
    'wonders.page.sub': '跨越大陆与世纪的旅程 — 人类投票选出的七座最伟大的遗产。',
    'wonders.story.label': '历史',
    'wonders.location.label': '位置',
    'wonders.visit.label': '计划访问',
    'wonders.meta.built': '建造',
    'wonders.meta.country': '国家',
    'wonders.meta.height': '高度',

    'welcome.greeting': '欢迎来到 City Archivist',
    'welcome.sub': '请选择你的语言开始浏览。',
    'welcome.continue': '继续',

    /* ── Legal / Imprint ── */
    'legal.eyebrow': '法律声明',
    'legal.title': '法律声明',
    'legal.contact.label': '联系',
    'legal.contact.h': '联系方式',
    'legal.contact.country': '德国',
    'legal.contact.email.label': '电子邮件',
    'legal.contact.note': '媒体、合作或法律事务请通过电子邮件联系。书面请求可提供邮政地址。',
    'legal.responsible.label': '《电信媒体法》第 5 条',
    'legal.responsible.h': '内容负责人',
    'legal.responsible.p': 'Konrad Xu。书面请求可提供邮政地址。',
    'legal.editorial.label': '《广播电视国家协议》第 55 条第 2 款',
    'legal.editorial.h': '编辑内容负责人',
    'legal.editorial.p': 'Konrad Xu。请通过上述电子邮件联系。',
    'legal.liability.label': '责任',
    'legal.liability.h': '免责声明',
    'legal.liability.content': '<strong>内容责任。</strong>我们以最大的谨慎编制了本网站的内容。但我们不能对内容的准确性、完整性和时效性承担任何责任。作为服务提供商,根据《电信媒体法》第 7 条第 1 款,我们对本网站的自有内容依照一般法律负责。但根据《电信媒体法》第 8 至 10 条,作为服务提供商,我们没有义务监控传输或存储的第三方信息。',
    'legal.liability.links': '<strong>链接责任。</strong>本网站包含指向第三方外部网站的链接,我们对其内容没有影响力,因此也无法对这些外部内容承担任何责任。链接页面的内容始终由相应的提供商或运营商负责。',
    'legal.copyright.label': '著作权',
    'legal.copyright.h': '图像权利与内容',
    'legal.copyright.p1': '本网站由网站运营者创建的内容和作品受德国著作权法保护。在著作权法范围之外的复制、加工、传播和任何形式的使用均需获得相应作者或创作者的书面同意。本站的下载和复制仅限于个人非商业用途。',
    'legal.copyright.p2': '若本网站内容并非由运营者创建,则尊重第三方著作权。特别地,第三方内容会被标注为如此。',
    'legal.privacy.label': '隐私',
    'legal.privacy.h': '隐私政策',
    'legal.privacy.intro': '我们仅在为您提供本网站及您所请求的功能(订阅、联系)所必需的范围内处理个人数据。',
    'legal.privacy.hosting.h': '托管',
    'legal.privacy.hosting.p': '本网站通过 GitHub Pages 托管。GitHub 在访问时记录标准技术日志(IP 地址、日期、用户代理),这对任何 Web 服务器都是常规做法。我们本身无法直接访问这些日志。',
    'legal.privacy.cookies.h': 'Cookies 与本地存储',
    'legal.privacy.cookies.p': '本网站仅在您的浏览器中存储少量本地项 — 您选择的语言以及您的新闻订阅信息 — 用于记住您的偏好。我们不进行跟踪,也不使用分析 Cookie。',
    'legal.privacy.newsletter.h': '新闻订阅',
    'legal.privacy.newsletter.p': '当您订阅我们的新闻邮件时,您的姓名和电子邮件地址将通过 Formspree(美国)服务进行处理,以便我们向您发送更新。您可以随时通过回复我们的邮件取消订阅。',
    'legal.privacy.rights.h': '您的权利',
    'legal.privacy.rights.p': '您有权随时要求访问、更正或删除您的数据。只需通过联系信息中提供的电子邮件地址写信给我们即可。',
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

  // ── Fill SITE_INFO into any [data-info] elements ──
  document.querySelectorAll('[data-info="email"]').forEach(el => {
    el.textContent = SITE_INFO.email;
  });
  document.querySelectorAll('[data-info="email-link"]').forEach(el => {
    el.setAttribute('href', 'mailto:' + SITE_INFO.email);
  });
  document.querySelectorAll('[data-info="name"]').forEach(el => {
    el.textContent = SITE_INFO.name;
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
    /* ── 3D card highlight — apply class="card-3d" (light) or .card-3d.dark ── */
    .card-3d {
      position: relative;
      background: #fdfcf9;
      border: 1px solid rgba(184,153,90,0.08);
      border-radius: 4px;
      box-shadow:
        0 1px 3px rgba(0,0,0,0.04),
        0 10px 28px rgba(58,52,45,0.07);
      transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1),
                  box-shadow 0.55s ease,
                  border-color 0.4s ease;
      will-change: transform;
    }
    .card-3d:hover {
      transform: translateY(-6px);
      border-color: rgba(184,153,90,0.28);
      box-shadow:
        0 4px 12px rgba(0,0,0,0.05),
        0 28px 64px rgba(58,52,45,0.14);
    }
    .card-3d:active {
      transform: translateY(-1px);
      transition-duration: 0.15s;
    }
    .card-3d.dark {
      background: #2a2620;
      border-color: rgba(212,188,138,0.10);
      box-shadow:
        0 1px 3px rgba(0,0,0,0.45),
        0 14px 36px rgba(0,0,0,0.45);
    }
    .card-3d.dark:hover {
      border-color: rgba(212,188,138,0.32);
      box-shadow:
        0 4px 12px rgba(0,0,0,0.55),
        0 30px 66px rgba(0,0,0,0.6);
    }
    /* Touch devices: skip hover lift, just gentle press */
    @media (hover: none) {
      .card-3d:hover { transform: none; box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 10px 28px rgba(58,52,45,0.07); }
      .card-3d.dark:hover { box-shadow: 0 1px 3px rgba(0,0,0,0.45), 0 14px 36px rgba(0,0,0,0.45); }
      .card-3d:active { transform: scale(0.99); }
    }

    /* ── Nav links (tabs) — injected globally so every page renders them ── */
    nav .nav-links {
      display: flex; gap: 3rem;
      list-style: none; padding: 0; margin: 0;
    }
    nav .nav-links a {
      font-size: 10px; font-weight: 300;
      letter-spacing: 0.24em; text-transform: uppercase;
      color: inherit; opacity: 0.65;
      text-decoration: none;
      position: relative;
      transition: opacity 0.25s;
    }
    nav .nav-links a:hover { opacity: 1; }
    nav .nav-links a::after {
      content: ''; position: absolute;
      bottom: -3px; left: 0;
      width: 0; height: 1px;
      background: currentColor; opacity: 0.5;
      transition: width 0.3s;
    }
    nav .nav-links a:hover::after { width: 100%; }
    @media (max-width: 768px) {
      nav .nav-links { display: none; }
    }

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
      background: rgba(18,16,12,0.98);
      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      z-index: 99999;
      padding: 6rem 3rem 3rem;
      display: block;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior: contain;
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
    .ca-menu-section {
      display: block;
      font-family: 'Jost', sans-serif;
      font-size: 11px; font-weight: 400;
      letter-spacing: 0.32em; text-transform: uppercase;
      color: rgba(212,188,138,0.95);
      padding: 1.8rem 0 0.6rem;
      border-bottom: 1px solid rgba(212,188,138,0.18);
      margin-bottom: 0.3rem;
    }
    .ca-menu-section:first-of-type { padding-top: 0.4rem; }
    .ca-menu-item {
      display: block;
      width: 100%;
      background: transparent; border: none; cursor: pointer;
      text-align: left;
      padding: 0.85rem 0;
      border-bottom: 1px solid rgba(248,245,239,0.07);
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.5rem; font-weight: 300;
      line-height: 1.2; color: rgba(248,245,239,0.92);
      text-decoration: none;
      transition: color 0.25s, padding-left 0.25s;
    }
    .ca-menu-item:hover { color: rgba(212,188,138,1); padding-left: 6px; }
    .ca-menu-item.solo {
      font-size: 1.65rem; padding: 1.1rem 0;
    }

    .ca-menu-item > span { pointer-events: none; }

    .ca-menu-backdrop {
      position: fixed; inset: 0;
      background: rgba(12,10,8,0.85);
      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
      z-index: 99998;
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

  const destLinks = MENU_DESTINATIONS.map(d => `<a class="ca-menu-item" href="${d.href}">${d.name}</a>`).join('');
  const clubLinks = MENU_NIGHTCLUBS.map(c => `<a class="ca-menu-item" href="${c.href}">${c.name}</a>`).join('');

  panel.innerHTML = `
    <button class="ca-menu-close" aria-label="Close" data-close-menu>✕</button>
    <div class="ca-menu-mark">✦</div>
    <nav class="ca-menu-nav">
      <div class="ca-menu-section">${dict['nav.destinations']}</div>
      ${destLinks}

      <div class="ca-menu-section">${dict['nav.hotels']}</div>
      <a class="ca-menu-item" href="hotels.html">${dict['hotelsFeature.eyebrow'] || 'Top Hotel Chains'}</a>

      <div class="ca-menu-section">${dict['nav.nightclubs']}</div>
      ${clubLinks}

      <div class="ca-menu-section">${dict['nav.about']}</div>
      <a class="ca-menu-item" href="index.html#about">${dict['nav.about']}</a>
    </nav>
  `;

  document.body.appendChild(backdrop);
  document.body.appendChild(panel);
  document.body.style.overflow = 'hidden';

  // Hide the page nav while menu is open (avoids the white strip behind)
  const pageNav = document.querySelector('nav#top-nav') || document.querySelector('body > nav');
  if (pageNav) {
    pageNav.style.visibility = 'hidden';
    pageNav.style.display = 'none';
  }

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
  const pageNav = document.querySelector('nav#top-nav') || document.querySelector('body > nav');
  if (pageNav) {
    pageNav.style.visibility = '';
    pageNav.style.display = '';
  }
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

/* ── Anti-bot helpers ────────────────────────────────────────
   1. Honeypot: hidden field named "_gotcha" — bots fill it.
   2. Time-trap: if the form is submitted < 3s after load → bot.
   3. Rate limit: max 3 submissions / hour per browser.
   ──────────────────────────────────────────────────────────── */
const RATE_LIMIT_KEY = 'cityArchivistRateLimit';
const RATE_LIMIT_MAX = 3;              // submissions per window
const RATE_LIMIT_WINDOW_MS = 3600000;  // 1 hour
const MIN_FORM_TIME_MS = 3000;         // min 3s between page-load and submit

function stampFormLoadTime(form) {
  const stamp = form.querySelector('[name="_form_loaded_at"]');
  if (stamp) stamp.value = Date.now().toString();
}

function isHoneypotTripped(form) {
  const hp = form.querySelector('[name="_gotcha"]');
  return !!(hp && hp.value && hp.value.trim() !== '');
}

function isTooFast(form) {
  const stamp = form.querySelector('[name="_form_loaded_at"]');
  if (!stamp || !stamp.value) return false;
  const loaded = parseInt(stamp.value, 10);
  if (!loaded) return false;
  return (Date.now() - loaded) < MIN_FORM_TIME_MS;
}

function hitRateLimit() {
  const now = Date.now();
  let log;
  try { log = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY) || '[]'); }
  catch (_) { log = []; }
  log = log.filter(t => (now - t) < RATE_LIMIT_WINDOW_MS);
  if (log.length >= RATE_LIMIT_MAX) return true;
  log.push(now);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(log));
  return false;
}

function bindNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  stampFormLoadTime(form);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = getCurrentLang() || 'en';
    const dict = TRANSLATIONS[lang];
    const nameEl  = form.querySelector('[name="name"]');
    const emailEl = form.querySelector('[name="email"]');
    const msgEl   = document.getElementById('newsletter-msg');

    // ── SECURITY: silently drop bot submissions ──
    if (isHoneypotTripped(form) || isTooFast(form)) {
      msgEl.textContent = dict['news.success'];  // fake success — bots learn nothing
      msgEl.dataset.state = 'ok';
      form.reset();
      stampFormLoadTime(form);
      return;
    }
    // ── SECURITY: rate-limit ──
    if (hitRateLimit()) {
      msgEl.textContent = dict['news.rateLimit'] || 'Too many requests. Try again later.';
      msgEl.dataset.state = 'error';
      return;
    }

    const name  = nameEl.value.trim();
    const email = emailEl.value.trim();
    const ok    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // ── INPUT SANITISATION: limit length, strip control chars ──
    if (name.length > 100 || email.length > 200) {
      msgEl.textContent = dict['news.errorName'];
      msgEl.dataset.state = 'error';
      return;
    }
    const safeName = name.replace(/[ -<>]/g, '').slice(0, 100);

    if (!safeName) { msgEl.textContent = dict['news.errorName'];  msgEl.dataset.state = 'error'; return; }
    if (!ok)       { msgEl.textContent = dict['news.errorEmail']; msgEl.dataset.state = 'error'; return; }

    const payload = { name: safeName, email, lang, ts: new Date().toISOString() };

    // Local backup
    const list = JSON.parse(localStorage.getItem(NEWSLETTER_KEY) || '[]');
    list.push(payload);
    localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(list));

    // Remote endpoint (Formspree etc.) if configured
    const endpoint = form.getAttribute('data-endpoint');
    const valid = endpoint && /^https:\/\//.test(endpoint) && !/PLACEHOLDER/i.test(endpoint);
    if (valid) await postToEndpoint(endpoint, payload);

    msgEl.textContent = dict['news.success'];
    msgEl.dataset.state = 'ok';
    form.reset();
    stampFormLoadTime(form);
  });
}

/* ── Same anti-bot logic for Baaria reservation form ── */
function bindBaariaForm() {
  const form = document.getElementById('baaria-form');
  if (!form) return;
  stampFormLoadTime(form);
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

  bindNewsletter();
  bindBaariaForm();
});
