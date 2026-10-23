/**
 * GUIDE-ENSTP - Système Trilingue (Français, Anglais, Arabe) & Internationalisation
 * École Nationale Supérieure des Travaux Publics (Kouba, Alger)
 */

const I18N = {
  currentLang: localStorage.getItem('enstp_lang') || 'fr',

  translations: {
    fr: {
      // Navigation
      navSectionTitle: "Navigation Principale",
      navSupportTitle: "Support & Contact",
      navHome: "Accueil & Présentation",
      navMap: "Carte du Campus",
      navLife: "Vie Pratique & Adresses",
      navTransport: "Transports & Déplacements",
      navSport: "Sport & Club SSC",
      navSchedule: "Emplois du Temps",
      navContacts: "Services & Contacts",
      badgeMap: "3D/2D",
      badgeLife: "19 spots",
      badgeSport: "SSC",
      badgeSchedule: "S5 PDF",
      sscClubTitle: "School Sport Club",

      // Header
      searchPlaceholder: "Rechercher fast-food, amphi, bus, matière...",
      searchShortcut: "CTRL K",
      btnCampusMap: "Carte Campus",
      btnMySchedule: "Emplois du Temps",
      themeDarkTooltip: "Mode Sombre",
      themeLightTooltip: "Mode Clair",

      // Accueil
      heroBadge: "Grande École Nationale d'Ingénieurs d'État",
      heroTitle: "Portail & Guide de l'Étudiant ENSTP",
      heroSubtitle: "Bienvenue sur la plateforme numérique centralisée de l'École Nationale Supérieure des Travaux Publics de Kouba, Alger. Accédez instantanément à vos emplois du temps officiels, à la carte interactive du campus et à toutes les bonnes adresses de Kouba et Garidi.",
      btnHeroMap: "Explorer la Carte Interactive",
      btnHeroSchedule: "Consulter les Emplois du Temps",
      btnHeroLife: "Guide Pratique Kouba & Garidi",

      // Stats
      statFoundationVal: "1970",
      statFoundationLabel: "Année de Fondation",
      statFoundationDesc: "+54 ans d'excellence en génie civil",
      statDeptsVal: "2 Pôles",
      statDeptsLabel: "Départements d'Élite",
      statDeptsDesc: "DIB (Infrastructures) & DMS (Structures)",
      statCycleVal: "5 Ans",
      statCycleLabel: "Cycle d'Ingénieur",
      statCycleDesc: "2 ans Prépa + 3 ans Spécialisation",
      statLabsVal: "12+",
      statLabsLabel: "Laboratoires d'Essais",
      statLabsDesc: "Géotechnique, Bétons, Matériaux, VRD",
      statEngineersVal: "+12 000",
      statEngineersLabel: "Ingénieurs Diplômés",
      statEngineersDesc: "Bâtisseurs des grands chantiers nationaux",
      statInsertVal: "95%",
      statInsertLabel: "Taux d'Insertion",
      statInsertDesc: "Plébiscités par les entreprises du BTPH",

      // About
      aboutVocationTitle: "Histoire & Vocation Nationale",
      aboutVocationText1: "Implantée sur les hauteurs de <strong>Sidi Garidi à Kouba</strong>, l'<strong>École Nationale Supérieure des Travaux Publics (ENSTP)</strong> est l'établissement universitaire d'élite algérien dédié à la formation d'ingénieurs d'État, de chercheurs et de décideurs dans les domaines des infrastructures de transport, du génie civil et de l'aménagement du territoire.",
      aboutVocationText2: "Depuis plus d'un demi-siècle, les ingénieurs diplômés de l'ENSTP conçoivent et pilotent les méga-projets structurants de la nation : <em>l'Autoroute Est-Ouest, l'Autoroute des Hauts Plateaux, le Réseau Ferroviaire National, les grandes gares aéroportuaires, les ports commerciaux, les ponts et viaducs à grande portée</em> ainsi que le renforcement parasismique des structures.",
      aboutDeptsTitle: "Les Deux Départements Majeurs",
      deptDibTitle: "Département Infrastructures de Base (DIB)",
      deptDibDesc: "Voies de communication terrestres, tracés autoroutiers, géométrie routière, aérodromes, voies ferrées, travaux maritimes & portuaires et géotechnique appliquée.",
      deptDmsTitle: "Département Matériaux & Structures (DMS)",
      deptDmsDesc: "Calcul avancé des structures, béton armé & béton précontraint, charpentes métalliques, dynamique des structures, génie parasismique (RPA) et durabilité des matériaux.",

      // Hub
      hubTag: "Accès Rapide",
      hubTitle: "Tout votre quotidien ENSTP à portée de clic",
      hubMapTitle: "Carte Interactive du Campus",
      hubMapDesc: "Visualisez tous les amphithéâtres, laboratoires de géotechnique et pavillons administratifs.",
      hubMapCta: "Explorer le campus",
      hubLifeTitle: "Vie Pratique & Fast-Food",
      hubLifeDesc: "Adresses précises, distances et itinéraires Google Maps pour vos pauses déjeuners à Garidi.",
      hubLifeCta: "Voir les 19 adresses",
      hubSchedTitle: "Emplois du Temps Officiels",
      hubSchedDesc: "Consultez directement le PDF officiel 3A DIB S5 et suivez la publication progressive des autres promotions.",
      hubSchedCta: "Consulter l'emploi du temps",
      hubTransTitle: "Transports & Bus Cous",
      hubTransDesc: "Lignes ETUSA, navettes métro, stations de taxis et horaires de ramassage universitaire ONOU.",
      hubTransCta: "Voir les trajets",

      // Carte Interactive
      mapTag: "Campus ENSTP",
      mapTitle: "Carte Interactive & Guide des Bâtiments",
      mapDesc: "Explorez le campus de l'ENSTP, repérez vos amphithéâtres, vos laboratoires d'essais et accédez à la carte dynamique en ligne.",
      mapHeroTag: "Visualisation Interactive",
      mapHeroTitle: "Carte Interactive Officielle du Campus",
      mapHeroDesc: "Naviguez en immersion dans l'enceinte de l'ENSTP : repérez les accès aux salles de cours, la scolarité, la bibliothèque centrale et les ateliers techniques.",
      btnOpenMapFullscreen: "Ouvrir la carte interactive en plein écran",
      mapStatusLive: "Carte interactive connectée en direct",
      btnReloadMap: "Actualiser",
      btnFullscreen: "Plein écran",
      btnExternalLink: "Lien externe",
      mapDirectoryTag: "Répertoire",
      mapDirectoryTitle: "Lieux et Services Clés au sein du Campus",
      filterAllPlaces: "Tous les lieux",
      filterAmphis: "Amphithéâtres",
      filterLabs: "Laboratoires Spécialisés",
      filterDepts: "Bâtiments DIB & DMS",
      filterServices: "Administration & Vie Étudiante",

      // Vie Pratique
      lifeTag: "Garidi & Kouba",
      lifeTitle: "Vie Pratique & Commerces Autour de l'École",
      lifeDesc: "Toutes les adresses incontournables à proximité directe du campus : supérettes, fast-foods réputés, boulangeries artisanales et pharmacies de garde avec itinéraires Google Maps en 1 clic.",
      catAll: "Toutes les adresses",
      catSuperettes: "Supérettes",
      catFood: "Fast-Food & Restauration",
      catPharma: "Pharmacies",
      catBakeries: "Boulangeries",
      catFavs: "Mes Favoris",
      searchLifePlaceholder: "Filtrer un nom, tacos, pain...",
      distanceWalkLabel: "Rayon à pied :",
      distAll: "Toutes distances",
      dist350: "≤ 350 m (< 4 min)",
      dist500: "≤ 500 m (< 7 min)",
      dist1000: "≤ 1 km (< 15 min)",
      countAddresses: "adresses",
      btnViewMaps: "Voir sur Google Maps",
      btnCopyAddress: "Copier l'adresse",
      noResultsLifeTitle: "Aucun commerce ou service trouvé",
      noResultsLifeDesc: "Essayez d'ajuster vos critères de recherche ou réinitialisez les filtres.",

      // Transports
      transTag: "Mobilité Étudiante",
      transTitle: "Transports & Déplacements vers l'ENSTP",
      transDesc: "Comment rejoindre facilement le campus depuis Alger-Centre, les cités universitaires ou les stations de métro via le réseau de bus ETUSA, les taxis et le transport universitaire (Cous).",
      transEtusaTitle: "Réseau ETUSA",
      transEtusaDesc: "Plusieurs lignes directes desservent la station de bus de Sidi Garidi et Vieux Kouba, reliant directement l'école à la Place du 1er Mai, Ben Aknoun et au métro.",
      transTaxiTitle: "Taxis & Métro",
      transTaxiDesc: "Stations de taxis collectifs permanentes à Garidi 1 & Vieux Kouba vers la station Métro Haï El Badr (à seulement 5 min) et Les Fusillés / Ruisseau.",
      transCousTitle: "Transport Universitaire (Cous)",
      transCousDesc: "Arrêt officiel devant le grand portail de l'ENSTP. Navettes gratuites régulières vers les cités universitaires de Garidi 1 & 2, Ben Aknoun et Bab Ezzouar.",
      etusaHeadingTag: "Lignes Principales",
      etusaHeadingTitle: "Lignes de Bus ETUSA desservant Garidi & Kouba",
      cousOfficialStop: "Arrêt officiel : Devant l'entrée principale de l'ENSTP (Portail d'honneur)",
      cousRulesTitle: "Consignes Importantes pour le Cous :",

      // Sport
      sportTag: "Vie Associative",
      sportTitle: "School Sport Club (SSC ENSTP)",
      sportDesc: "Le club sportif historique de l'école : tournois inter-promotions, entraînements collectifs et esprit de camaraderie entre futurs ingénieurs.",
      sscOfficialBadge: "Club Sportif Officiel",
      sscHeroTitle: "School Sport Club ENSTP",
      sscHeroDesc: "\"L'Esprit d'Équipe au-delà de l'Ingénierie\". Le SSC rassemble chaque année les élèves-ingénieurs autour de disciplines sportives de premier plan, organise le mythique Tournoi Inter-Promos et défend fièrement les couleurs de l'école lors des championnats universitaires nationaux.",
      btnSscInstagram: "Suivre le SSC ENSTP sur Instagram",
      disciplinesTag: "Pratiques",
      disciplinesTitle: "Disciplines & Activités Pratiquées",
      eventsTag: "Compétitions",
      eventsTitle: "Les Grands Rendez-vous Annuels du SSC",

      // Emplois du Temps (PDF Unique 3A DIB S5 + Attente)
      scheduleTag: "Planning Pédagogique",
      scheduleTitle: "Module de Consultation des Emplois du Temps",
      scheduleDesc: "Sélectionnez votre promotion. Actuellement, seul l'emploi du temps officiel des 3ème Année Ingénieur - Département DIB (Semestre 5 / S5) est disponible au format PDF.",
      selectCycleLabel: "1. Choisissez le Cycle d'Études",
      selectLevelLabel: "2. Choisissez la Promotion & Département",
      cyclePrepa: "Cycle Préparatoire (CP)",
      cycleIngenieur: "Cycle Ingénieur d'État",
      btnDownloadPdf: "Télécharger en PDF",
      btnPrintSchedule: "Imprimer le PDF",
      btnViewPdfOnline: "Ouvrir en Plein Écran",

      // État 3A DIB Disponible
      availableBadge: "Document Officiel Validé • Semestre 5 (S5)",
      availableDibTitle: "Emploi du Temps : 3ème Année Ingénieur - Département DIB",
      availableDibDesc: "Document officiel validé par la Direction des Études et le Département Infrastructures de Base (DIB). Consultez la prévisualisation ci-dessous ou téléchargez le fichier PDF officiel.",
      pdfPreviewTitle: "Prévisualisation du Document Officiel (S5 DIB)",

      // État Bientôt Disponible
      pendingBadge: "Emploi du temps bientôt disponible / En attente de publication",
      pendingTitle: "Emploi du temps en cours d'élaboration",
      pendingDesc: "L'emploi du temps officiel de cette section est actuellement en cours de finalisation par la direction des études et les départements pédagogiques. Il sera mis en ligne progressivement dès sa validation officielle.",
      pendingNotice: "ℹ️ Pour le moment, seul l'emploi du temps des <strong>3ème Année Ingénieur - Département DIB (Semestre 5 / S5)</strong> est disponible sous format PDF.",
      btnSwitchTo3aDib: "Consulter l'emploi du temps 3A DIB (S5 Disponible)",

      // Contacts
      contactsTag: "Administration & Écoute",
      contactsTitle: "Services Pédagogiques & Contacts Utiles",
      contactsDesc: "Tous les numéros, courriels officiels, bureaux et horaires d'ouverture des guichets de la scolarité, des départements et de la bibliothèque.",
      contactFormTitle: "Formulaire de Contact & Signalement Rapide",
      contactFormDesc: "Une question administrative, un signalement logistique ou une réclamation pédagogique ? Remplissez ce formulaire pour notifier directement les services de l'école.",
      formName: "Nom et Prénom *",
      formEmail: "Email Universitaire / Personnel *",
      formPromo: "Promotion Actuelle *",
      formRequestType: "Objet de la Demande *",
      formMessage: "Votre Message ou Signalement *",
      btnSubmitForm: "Transmettre la demande",

      // Footer
      footerAddress: "Rue Sidi Garidi, BP 32, Kouba, 16051 Alger - Algérie",
      footerTop: "Haut de page ↑",

      // Recherche Modale
      modalNoResults: "Aucun résultat pour"
    },

    en: {
      // Navigation
      navSectionTitle: "Main Navigation",
      navSupportTitle: "Support & Contact",
      navHome: "Home & Overview",
      navMap: "Campus Map",
      navLife: "Practical Life & Places",
      navTransport: "Transport & Mobility",
      navSport: "Sports & SSC Club",
      navSchedule: "Timetables",
      navContacts: "Services & Contacts",
      badgeMap: "3D/2D",
      badgeLife: "19 spots",
      badgeSport: "SSC",
      badgeSchedule: "S5 PDF",
      sscClubTitle: "School Sport Club",

      // Header
      searchPlaceholder: "Search fast-food, lecture hall, bus line, course...",
      searchShortcut: "CTRL K",
      btnCampusMap: "Campus Map",
      btnMySchedule: "Timetables",
      themeDarkTooltip: "Dark Mode",
      themeLightTooltip: "Light Mode",

      // Accueil
      heroBadge: "National Higher School of State Engineers",
      heroTitle: "ENSTP Student Portal & Guide",
      heroSubtitle: "Welcome to the centralized digital platform of the National Higher School of Public Works in Kouba, Algiers. Instantly access your official timetables, interactive campus map, and all local spots in Kouba and Garidi.",
      btnHeroMap: "Explore Interactive Map",
      btnHeroSchedule: "View Timetables",
      btnHeroLife: "Kouba & Garidi Practical Guide",

      // Stats
      statFoundationVal: "1970",
      statFoundationLabel: "Foundation Year",
      statFoundationDesc: "+54 years of excellence in civil engineering",
      statDeptsVal: "2 Poles",
      statDeptsLabel: "Elite Departments",
      statDeptsDesc: "DIB (Infrastructure) & DMS (Structures)",
      statCycleVal: "5 Years",
      statCycleLabel: "Engineering Curriculum",
      statCycleDesc: "2 years Prep + 3 years Specialization",
      statLabsVal: "12+",
      statLabsLabel: "Testing Laboratories",
      statLabsDesc: "Geotechnics, Concrete, Materials, Roads",
      statEngineersVal: "+12,000",
      statEngineersLabel: "Graduated Engineers",
      statEngineersDesc: "Builders of major national infrastructure",
      statInsertVal: "95%",
      statInsertLabel: "Employment Rate",
      statInsertDesc: "Highly sought after by major construction firms",

      // About
      aboutVocationTitle: "History & National Mission",
      aboutVocationText1: "Located on the heights of <strong>Sidi Garidi in Kouba</strong>, the <strong>National Higher School of Public Works (ENSTP)</strong> is Algeria's leading elite academic institution dedicated to educating State Engineers, researchers, and decision-makers in civil engineering, transportation infrastructure, and territorial planning.",
      aboutVocationText2: "For over half a century, ENSTP engineering graduates have designed and led the nation's major mega-projects: <em>East-West Highway, High Plateaus Highway, National Railway Network, international airport terminals, deep-sea ports, long-span bridges and viaducts</em> as well as seismic-resistant structural design.",
      aboutDeptsTitle: "The Two Major Departments",
      deptDibTitle: "Department of Basic Infrastructure (DIB)",
      deptDibDesc: "Ground transportation links, highway geometric design, airports, railway lines, maritime and port facilities, and applied geotechnics.",
      deptDmsTitle: "Department of Materials & Structures (DMS)",
      deptDmsDesc: "Advanced structural analysis, reinforced and prestressed concrete, steel construction, structural dynamics, seismic design (RPA), and materials durability.",

      // Hub
      hubTag: "Quick Access",
      hubTitle: "Your entire ENSTP student life in one click",
      hubMapTitle: "Interactive Campus Map",
      hubMapDesc: "Locate all lecture halls, geotechnics labs, and administrative pavilions.",
      hubMapCta: "Explore campus",
      hubLifeTitle: "Practical Life & Dining",
      hubLifeDesc: "Precise addresses, distances, and Google Maps directions for lunch breaks in Garidi.",
      hubLifeCta: "View all 19 spots",
      hubSchedTitle: "Official Timetables",
      hubSchedDesc: "Access the official 3A DIB S5 PDF schedule and track progressive updates for other classes.",
      hubSchedCta: "Check schedule",
      hubTransTitle: "Transport & Cous Buses",
      hubTransDesc: "ETUSA bus routes, metro connections, taxi stations, and ONOU student bus shuttles.",
      hubTransCta: "View routes",

      // Carte Interactive
      mapTag: "ENSTP Campus",
      mapTitle: "Interactive Map & Buildings Directory",
      mapDesc: "Explore the ENSTP campus, locate lecture halls, testing labs, and navigate the live interactive map.",
      mapHeroTag: "Interactive Visualization",
      mapHeroTitle: "Official Interactive Campus Map",
      mapHeroDesc: "Immerse yourself inside ENSTP grounds: find paths to classrooms, academic registry, central library, and technical workshops.",
      btnOpenMapFullscreen: "Open interactive map in full screen",
      mapStatusLive: "Interactive map live connected",
      btnReloadMap: "Reload",
      btnFullscreen: "Full Screen",
      btnExternalLink: "External Link",
      mapDirectoryTag: "Directory",
      mapDirectoryTitle: "Key Locations & Campus Facilities",
      filterAllPlaces: "All places",
      filterAmphis: "Lecture Halls",
      filterLabs: "Specialized Labs",
      filterDepts: "DIB & DMS Buildings",
      filterServices: "Administration & Student Life",

      // Vie Pratique
      lifeTag: "Garidi & Kouba",
      lifeTitle: "Practical Life & Neighborhood Spots",
      lifeDesc: "Essential places around the campus: grocery markets, top-rated fast-foods, bakeries, and on-call pharmacies with 1-click Google Maps directions.",
      catAll: "All places",
      catSuperettes: "Grocery Stores",
      catFood: "Fast-Food & Dining",
      catPharma: "Pharmacies",
      catBakeries: "Bakeries",
      catFavs: "My Favorites",
      searchLifePlaceholder: "Filter name, tacos, bread...",
      distanceWalkLabel: "Walking radius:",
      distAll: "All distances",
      dist350: "≤ 350 m (< 4 min)",
      dist500: "≤ 500 m (< 7 min)",
      dist1000: "≤ 1 km (< 15 min)",
      countAddresses: "addresses",
      btnViewMaps: "Open Google Maps",
      btnCopyAddress: "Copy address",
      noResultsLifeTitle: "No places found",
      noResultsLifeDesc: "Try adjusting your search criteria or resetting filters.",

      // Transports
      transTag: "Student Mobility",
      transTitle: "Transport & Getting to ENSTP",
      transDesc: "How to easily reach campus from Algiers City Center, university dorms, or metro stations via ETUSA buses, taxis, and university shuttles (Cous).",
      transEtusaTitle: "ETUSA Bus Network",
      transEtusaDesc: "Direct lines serving Sidi Garidi and Old Kouba bus stops, linking the school directly to May 1st Square, Ben Aknoun, and the Metro.",
      transTaxiTitle: "Taxis & Metro",
      transTaxiDesc: "Permanent collective taxi stations at Garidi 1 & Old Kouba toward Haï El Badr Metro (5 min away) and Les Fusillés / Ruisseau.",
      transCousTitle: "University Transport (Cous)",
      transCousDesc: "Official bus stop right in front of the main ENSTP gate. Free regular shuttles toward Garidi 1 & 2, Ben Aknoun, and Bab Ezzouar dorms.",
      etusaHeadingTag: "Main Lines",
      etusaHeadingTitle: "ETUSA Bus Lines Serving Garidi & Kouba",
      cousOfficialStop: "Official bus stop: Directly in front of ENSTP main entrance",
      cousRulesTitle: "Important Guidelines for University Shuttles:",

      // Sport
      sportTag: "Student Life",
      sportTitle: "School Sport Club (SSC ENSTP)",
      sportDesc: "The school's historic sports club: inter-promotion tournaments, team workouts, and camaraderie among future engineers.",
      sscOfficialBadge: "Official Sports Club",
      sscHeroTitle: "School Sport Club ENSTP",
      sscHeroDesc: "\"Team Spirit Beyond Engineering\". SSC unites engineering students around high-caliber sports, hosts the legendary Inter-Promos Tournament, and represents ENSTP in national university competitions.",
      btnSscInstagram: "Follow SSC ENSTP on Instagram",
      disciplinesTag: "Sports",
      disciplinesTitle: "Sports & Activities Offered",
      eventsTag: "Competitions",
      eventsTitle: "Major Annual Events by SSC",

      // Emplois du Temps
      scheduleTag: "Academic Timetable",
      scheduleTitle: "Course Schedules Consultation Module",
      scheduleDesc: "Select your level. Currently, only the official 3rd Year Engineering - DIB Department (Semester 5 / S5) timetable is available in PDF format.",
      selectCycleLabel: "1. Select Study Cycle",
      selectLevelLabel: "2. Select Cohort & Department",
      cyclePrepa: "Preparatory Cycle (CP)",
      cycleIngenieur: "State Engineering Cycle",
      btnDownloadPdf: "Download Official PDF",
      btnPrintSchedule: "Print Document",
      btnViewPdfOnline: "Open in Full Screen",

      // État 3A DIB
      availableBadge: "Official Validated Document • Semester 5 (S5)",
      availableDibTitle: "Course Timetable: 3rd Year Engineering - DIB Department",
      availableDibDesc: "Official document validated by the Dean of Studies and the Basic Infrastructure Department (DIB). View the embedded preview below or download the official PDF file.",
      pdfPreviewTitle: "Official Document Preview (S5 DIB)",

      // État Bientôt Disponible
      pendingBadge: "Timetable Coming Soon / Pending Publication",
      pendingTitle: "Timetable currently being prepared",
      pendingDesc: "The official timetable for this section is currently being finalized by academic administration and will be published progressively once validated.",
      pendingNotice: "ℹ️ Currently, only the <strong>3rd Year Engineering - DIB Department (Semester 5 / S5)</strong> schedule is available in PDF format.",
      btnSwitchTo3aDib: "Switch to 3A DIB Schedule (Available S5)",

      // Contacts
      contactsTag: "Administration & Support",
      contactsTitle: "Academic Services & Useful Contacts",
      contactsDesc: "Direct phone numbers, official emails, office locations, and opening hours for student desks, departments, and library.",
      contactFormTitle: "Quick Contact & Campus Inquiry Form",
      contactFormDesc: "Have an administrative question, campus inquiry, or academic feedback? Fill in this form to notify school services directly.",
      formName: "Full Name *",
      formEmail: "University / Personal Email *",
      formPromo: "Current Cohort *",
      formRequestType: "Subject / Purpose *",
      formMessage: "Your Message or Inquiry *",
      btnSubmitForm: "Send Inquiry",

      // Footer
      footerAddress: "Sidi Garidi St, PO Box 32, Kouba, 16051 Algiers - Algeria",
      footerTop: "Back to top ↑",

      // Recherche Modale
      modalNoResults: "No results found for"
    },

    ar: {
      // Navigation
      navSectionTitle: "التنقل الرئيسي",
      navSupportTitle: "المساعدة والتواصل",
      navHome: "الرئيسية والتعريف بالمدرسة",
      navMap: "خريطة الحرم الجامعي",
      navLife: "الحياة اليومية والأماكن",
      navTransport: "النقل والمواصلات",
      navSport: "الرياضة ونادي SSC",
      navSchedule: "جداول التوقيت",
      navContacts: "المصالح وجهات الاتصال",
      badgeMap: "3D/2D",
      badgeLife: "19 موقع",
      badgeSport: "SSC",
      badgeSchedule: "S5 PDF",
      sscClubTitle: "النادي الرياضي للمدرسة",

      // Header
      searchPlaceholder: "ابحث عن مطعم، مدرج، خط حافلة، مادة...",
      searchShortcut: "CTRL K",
      btnCampusMap: "خريطة الحرم",
      btnMySchedule: "جداول التوقيت",
      themeDarkTooltip: "الوضع الليلي",
      themeLightTooltip: "الوضع النهاري",

      // Accueil
      heroBadge: "المدرسة الوطنية العليا لمهندسي الدولة",
      heroTitle: "بوابة ودليل طالب المدرسة الوطنية العليا للأشغال العمومية",
      heroSubtitle: "مرحباً بكم في المنصة الرقمية الموحدة للمدرسة الوطنية العليا للأشغال العمومية بالقبة، الجزائر. تصفحوا جداول التوقيت الرسمية، الخريطة التفاعلية للحرم، وكافة العناوين والخدمات المحيطة بالقبة وقاريدي.",
      btnHeroMap: "استكشاف الخريطة التفاعلية",
      btnHeroSchedule: "تصفح جداول التوقيت",
      btnHeroLife: "دليل القبة وقاريدي",

      // Stats
      statFoundationVal: "1970",
      statFoundationLabel: "سنة التأسيس",
      statFoundationDesc: "+54 عاماً من التميز في الهندسة المدنية",
      statDeptsVal: "قسمان",
      statDeptsLabel: "أقسام التميز",
      statDeptsDesc: "الهياكل الأساسية (DIB) والمواد والمنشآت (DMS)",
      statCycleVal: "5 سنوات",
      statCycleLabel: "مسار التكوين الهندسي",
      statCycleDesc: "سنتان تحضيريتان + 3 سنوات تخصص",
      statLabsVal: "+12",
      statLabsLabel: "مخابر تجارب وبحث",
      statLabsDesc: "ميكانيك التربة، الخرسانة، المواد، الطرقات",
      statEngineersVal: "+12,000",
      statEngineersLabel: "مهندس متخرج",
      statEngineersDesc: "بناة المشاريع الكبرى والبنية التحتية الوطنية",
      statInsertVal: "95%",
      statInsertLabel: "نسبة الإدماج المهني",
      statInsertDesc: "طلب قياسي من كبرى شركات البناء والأشغال",

      // About
      aboutVocationTitle: "التاريخ والرسالة الوطنية",
      aboutVocationText1: "تقع <strong>المدرسة الوطنية العليا للأشغال العمومية (ENSTP)</strong> بأعالي <strong>سيدي قاريدي بالقبة</strong>، وتعد الصرح الجامعي الرائد في الجزائر لتكوين مهندسي الدولة والباحثين والكوادر القيادية في مجالات البنية التحتية للنقل، الهندسة المدنية والمنشآت الكبرى.",
      aboutVocationText2: "على مدى أكثر من نصف قرن، ساهم مهندسو المدرسة في تصميم وإنجاز أضخم المشاريع الإستراتيجية للوطن: <em>الطريق السيار شرق-غرب، طريق الهضاب العليا، شبكة السكك الحديدية الوطنية، المحطات الجوية والمطارات، الموانئ، والجسور والأنفاق الكبرى</em> بالإضافة إلى الهندسة الزلزالية وتدعيم المنشآت.",
      aboutDeptsTitle: "القسمان الرئيسيان بالمدرسة",
      deptDibTitle: "قسم الهياكل الأساسية (DIB)",
      deptDibDesc: "مسارات الطرقات، هندسة الطرق السريعة، المطارات، خطوط السكك الحديدية، المنشآت البحرية والموانئ وميكانيك التربة التطبيقية.",
      deptDmsTitle: "قسم المواد والمنشآت (DMS)",
      deptDmsDesc: "الحساب المتقدم للمنشآت، الخرسانة المسلحة والمسبقة الإجهاد، المنشآت المعدنية، ديناميكا المنشآت، الهندسة المضادة للزلازل (RPA) واستدامة المواد.",

      // Hub
      hubTag: "الوصول السريع",
      hubTitle: "كل احتياجاتك اليومية بالمدرسة بنقرة واحدة",
      hubMapTitle: "الخريطة التفاعلية للحرم",
      hubMapDesc: "حدد مواقع جميع المدرجات، مخابر الجيوتقنيك والمباني الإدارية بدقة.",
      hubMapCta: "استكشف الحرم الجامعي",
      hubLifeTitle: "الحياة اليومية والمطاعم",
      hubLifeDesc: "عناوين دقيقة، المسافات ومسارات خرائط Google لفترات الراحة والغداء بقاريدي.",
      hubLifeCta: "تصفح 19 موقعاً",
      hubSchedTitle: "جداول التوقيت الرسمية",
      hubSchedDesc: "اطّلع مباشرة على جدول توقيت السنة الثالثة DIB بصيغة PDF وتابع النشر التدريجي لبقية الدفعات.",
      hubSchedCta: "عرض جدول التوقيت",
      hubTransTitle: "النقل وحافلات الإقامة",
      hubTransDesc: "خطوط حافلات إيتوزا، الربط بالمترو، محطات سيارات الأجرة ومواعيد النقل الجامعي (كوس).",
      hubTransCta: "معرفة الخطوط",

      // Carte Interactive
      mapTag: "حرم المدرسة",
      mapTitle: "الخريطة التفاعلية ودليل المباني",
      mapDesc: "استكشف حرم المدرسة الوطنية العليا للأشغال العمومية، وتعرف على مواقع المدرجات والمخابر عبر الخريطة التفاعلية المباشرة.",
      mapHeroTag: "معاينة تفاعلية",
      mapHeroTitle: "الخريطة التفاعلية الرسمية للحرم الجامعي",
      mapHeroDesc: "تنقل افتراضياً داخل مرافق المدرسة: حدد مسارات الوصول إلى قاعات التدريس، مصلحة التمدرس، المكتبة المركزية والورشات التقنية.",
      btnOpenMapFullscreen: "فتح الخريطة التفاعلية في شاشة كاملة",
      mapStatusLive: "الخريطة التفاعلية متصلة مباشرة",
      btnReloadMap: "تحديث",
      btnFullscreen: "شاشة كاملة",
      btnExternalLink: "رابط خارجي",
      mapDirectoryTag: "دليل المواقع",
      mapDirectoryTitle: "المواقع والمصالح الرئيسية داخل الحرم",
      filterAllPlaces: "جميع المواقع",
      filterAmphis: "المدرجات",
      filterLabs: "المخابر المتخصصة",
      filterDepts: "مباني الأقسام DIB و DMS",
      filterServices: "الإدارة والحياة الطلابية",

      // Vie Pratique
      lifeTag: "قاريدي والقبة",
      lifeTitle: "الحياة اليومية والمحلات المجاورة للمدرسة",
      lifeDesc: "أهم العناوين الضرورية بجوار الحرم مباشرة: محلات السوبرماركت، أشهر مطاعم الوجبات السريعة، المخابز والصيدليات المناوبة مع مسارات خرائط Google بنقرة واحدة.",
      catAll: "جميع العناوين",
      catSuperettes: "محلات السوبرماركت",
      catFood: "مطاعم ووجبات سريعة",
      catPharma: "الصيدليات",
      catBakeries: "المخابز والحلويات",
      catFavs: "مفضلاتي",
      searchLifePlaceholder: "بحث عن اسم، طاكوس، خبز...",
      distanceWalkLabel: "نطاق المشي :",
      distAll: "جميع المسافات",
      dist350: "≤ 350 م (< 4 دقائق)",
      dist500: "≤ 500 م (< 7 دقائق)",
      dist1000: "≤ 1 كم (< 15 دقيقة)",
      countAddresses: "عنوان",
      btnViewMaps: "عرض على خرائط Google",
      btnCopyAddress: "نسخ العنوان",
      noResultsLifeTitle: "لم يتم العثور على أي عنوان",
      noResultsLifeDesc: "يرجى تعديل معايير البحث أو إعادة ضبط خيارات التصفية.",

      // Transports
      transTag: "تنقل الطلاب",
      transTitle: "النقل والمواصلات نحو المدرسة",
      transDesc: "كيفية الوصول بسهولة إلى الحرم من وسط الجزائر العاصمة، الإقامات الجامعية ومحطات المترو عبر شبكة حافلات إيتوزا، سيارات الأجرة والنقل الجامعي.",
      transEtusaTitle: "شبكة حافلات إيتوزا (ETUSA)",
      transEtusaDesc: "خطوط مباشرة تمر بمحطات سيدي قاريدي والقبة القديمة، وتربط المدرسة مباشرة بساحة أول ماي، بن عكنون ومحطة المترو.",
      transTaxiTitle: "سيارات الأجرة والمترو",
      transTaxiDesc: "محطات دائمة لسيارات الأجرة الجماعية بقاريدي 1 والقبة نحو محطة مترو حي البدر (على بعد 5 دقائق) والرويسو.",
      transCousTitle: "النقل الجامعي (كوس - ONOU)",
      transCousDesc: "محطة مخصصة مباشرة أمام المدخل الرئيسي للمدرسة. حافلات منتظمة نحو إقامات قاريدي 1 و 2، بن عكنون وباب الزوار.",
      etusaHeadingTag: "الخطوط الرئيسية",
      etusaHeadingTitle: "حافلات إيتوزا التي تخدم قاريدي والقبة",
      cousOfficialStop: "الموقف الرسمي: أمام البوابة الرئيسية للمدرسة الوطنية العليا للأشغال العمومية",
      cousRulesTitle: "تعليمات وإرشادات النقل الجامعي :",

      // Sport
      sportTag: "النشاط الرياضي والطلابي",
      sportTitle: "النادي الرياضي للمدرسة (SSC ENSTP)",
      sportDesc: "النادي الرياضي العريق بالمدرسة: دوريات ما بين الدفعات، تدريبات جماعية وروح التضامن والتعاون بين مهندسي المستقبل.",
      sscOfficialBadge: "النادي الرياضي الرسمي",
      sscHeroTitle: "School Sport Club ENSTP",
      sscHeroDesc: "\"الروح الرياضية والعمل الجماعي إلى جانب الهندسة\". يجمع النادي طلبة المدرسة سنوياً في رياضات متنوعة، وينظم الدورة الكروية الشهيرة، ويمثل المدرسة في البطولات الجامعية.",
      btnSscInstagram: "متابعة نادي SSC على إنستغرام",
      disciplinesTag: "الأنشطة",
      disciplinesTitle: "الرياضات والأنشطة المتاحة",
      eventsTag: "المنافسات",
      eventsTitle: "أبرز المواعيد الرياضية السنوية للنادي",

      // Emplois du Temps
      scheduleTag: "التنظيم البيداغوجي",
      scheduleTitle: "وحدة الاطلاع على جداول التوقيت",
      scheduleDesc: "اختر الدفعة المطلوبة. حالياً، يتوفر فقط جدول التوقيت الرسمي لطلبة السنة الثالثة مهندسين - قسم الهياكل الأساسية (السداسي 5 / S5) بصيغة PDF.",
      selectCycleLabel: "1. اختر المسار الدراسي",
      selectLevelLabel: "2. اختر الدفعة والقسم",
      cyclePrepa: "الطور التحضيري (CP)",
      cycleIngenieur: "طور تكوين المهندسين",
      btnDownloadPdf: "تحميل بصيغة PDF",
      btnPrintSchedule: "طباعة الوثيقة",
      btnViewPdfOnline: "فتح في شاشة كاملة",

      // État 3A DIB
      availableBadge: "وثيقة رسمية معتمدة • السداسي 5 (S5)",
      availableDibTitle: "جدول التوقيت: السنة الثالثة مهندسين - قسم الهياكل الأساسية (DIB)",
      availableDibDesc: "الوثيقة الرسمية المعتمدة من طرف مديرية الدراسات وقسم الهياكل الأساسية (DIB). يمكنكم تصفح المعاينة المباشرة أدناه أو تحميل ملف PDF الرسمي.",
      pdfPreviewTitle: "المعاينة المباشرة للوثيقة الرسمية (S5 DIB)",

      // État Bientôt Disponible
      pendingBadge: "جدول التوقيت سيتوفر قريباً / قيد النشر والمصادقة",
      pendingTitle: "جدول التوقيت قيد الإعداد والمصادقة",
      pendingDesc: "جدول التوقيت الرسمي لهذه الدفعة قيد المراجعة والمصادقة حالياً من طرف إدارة الدراسات والأقسام البيداغوجية. سيتم نشره تدريجياً فور اعتماده رسمياً.",
      pendingNotice: "ℹ️ حالياً، يتوفر فقط جدول توقيت <strong>السنة الثالثة مهندسين - قسم الهياكل الأساسية (السداسي 5 / S5)</strong> بصيغة PDF.",
      btnSwitchTo3aDib: "الانتقال إلى جدول 3A DIB المتوفر (السداسي 5)",

      // Contacts
      contactsTag: "الإدارة والتوجيه",
      contactsTitle: "المصالح البيداغوجية وجهات الاتصال",
      contactsDesc: "أرقام الهاتف المباشرة، العناوين الإلكترونية الرسمية، مواقع المكاتب ومواقيت استقبال الطلبة بمصالح التمدرس والأقسام والمكتبة.",
      contactFormTitle: "استمارة التواصل والإخطار السريع",
      contactFormDesc: "لديك استفسار إداري، ملاحظة لوجستية أو طلب بيداغوجي؟ املأ هذه الاستمارة لإخطار مصالح المدرسة المعنية مباشرة.",
      formName: "الاسم واللقب *",
      formEmail: "البريد الإلكتروني الجامعي أو الشخصي *",
      formPromo: "الدفعة الحالية *",
      formRequestType: "موضوع الطلب *",
      formMessage: "رسالتك أو ملاحظتك *",
      btnSubmitForm: "إرسال الطلب",

      // Footer
      footerAddress: "شارع سيدي قاريدي، ص.ب 32، القبة، 16051 الجزائر العاصمة - الجزائر",
      footerTop: "إلى أعلى الصفحة ↑",

      // Recherche Modale
      modalNoResults: "لا توجد نتائج لـ"
    }
  },

  t(key) {
    const lang = this.currentLang;
    if (this.translations[lang] && this.translations[lang][key] !== undefined) {
      return this.translations[lang][key];
    }
    if (this.translations.fr && this.translations.fr[key] !== undefined) {
      return this.translations.fr[key];
    }
    return key;
  },

  setLanguage(lang) {
    if (!['fr', 'en', 'ar'].includes(lang)) lang = 'fr';
    this.currentLang = lang;
    localStorage.setItem('enstp_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' ? 'rtl' : 'ltr');

    // Mettre à jour tous les éléments statiques avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) {
        if (text.includes('<') && text.includes('>')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Mettre à jour les placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = this.t(key);
      if (text) el.setAttribute('placeholder', text);
    });

    // Mettre à jour les tooltips / title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const text = this.t(key);
      if (text) el.setAttribute('title', text);
    });

    // Mettre à jour les boutons du sélecteur de langue dans l'UI
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Déclencher un événement personnalisé
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }
};
