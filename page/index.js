import { useState } from "react";

export default function SaintLouisUniversityOfNationsSite() {
  const languages = {
    fr: {
      siteCode: "StL-UNI",
      founded: "1988",
      navHome: "Accueil",
      navMission: "Mission",
      navBranches: "Instituts et centres",
      navPrograms: "Enseignement et recherche",
      navGovernance: "Gouvernance",
      navContact: "Relations institutionnelles",
      heroKicker: "Université internationale d'enseignement supérieur, de recherche et de formation",
      heroTitle: "Saint Louis Université des Nations",
      heroSubtitle: "Université ordonnée pour l'étude, la recherche, la formation et la coopération internationale",
      heroBody: "Saint Louis Université des Nations est une université ordonnée pour l'enseignement supérieur, la recherche, la formation et la coopération académique internationale. Les affaires étrangères, la diplomatie, les mondes stratégiques et les relations internationales y occupent une place maîtresse, comme l'une des voies principales d'une intelligence plus ample de la personne, des pouvoirs, des sociétés, des civilisations et des formes du gouvernement.",
      heroMotto: "Nobilitas obligat · Traditio manet · Sapientia ad altiora",
      ctaPrimary: "Voir les instituts et centres",
      ctaSecondary: "Lire la mission",
      institutionLabel: "Déclaration institutionnelle",
      institutionTitle: "Une université de fondation, de rayonnement et de service",
      institutionBody: "L'établissement ne se présente ni comme une simple école, ni comme une maison d'études séparée, mais comme une université rassemblant instituts, écoles, centres de recherche, bureaux de coopération, cycles d'enseignement et centres de formation. Sa tenue procède d'un même principe: joindre la culture de l'esprit, la discipline des études, l'exercice du jugement et la préparation aux charges publiques, académiques, diplomatiques, administratives et professionnelles.",
      mottoLabel: "Devise et esprit",
      mottoTitle: "Une devise de conduite et non d'apparat",
      mottoBody: "La devise, placée au seuil de l'institution, unit l'obligation de dignité, la fidélité à l'héritage et l'élévation de l'intelligence. Cicéron rappelle que la noblesse véritable tient moins au rang reçu qu'au devoir qu'il impose; Ibn Khaldoun enseigne qu'aucune œuvre durable ne subsiste sans transmission savante; Sun Tzu fait entendre que la sagesse la plus haute réside dans la prévoyance, l'ordre des moyens et la juste lecture des situations.",
      missionIndex: "01",
      missionTitle: "Mission",
      missionBody: "Former, rechercher, publier, conseiller, relier: telle est l'économie générale de Saint Louis Université des Nations. L'université entend développer des enseignements supérieurs, des travaux de recherche, des publications, des formations de cadres, des coopérations internationales et des cycles spécialisés dans les domaines diplomatiques, historiques, stratégiques, linguistiques, institutionnels, administratifs et civils.",
      branchesIndex: "02",
      branchesTitle: "Instituts, centres et ramifications",
      branchesIntro: "Les ramifications internes sont tenues comme des organes solidaires. Chacune possède son office propre, ses travaux, ses relais et sa place dans l'unité de l'université.",
      structureLabel: "Structure universitaire",
      branches: [
        { title: "Institut souverain des études stratégiques et internationales", text: "Institut principal voué aux affaires étrangères, à la diplomatie, aux études stratégiques, aux relations internationales et aux questions de souveraineté." },
        { title: "École des études historiques et stratégiques", text: "École consacrée à l'histoire diplomatique, militaire, politique et institutionnelle, aux archives, aux sources et à la longue durée des puissances." },
        { title: "École des langues, du protocole et des civilisations", text: "École destinée aux langues de travail, au protocole, à l'ordre cérémoniel, aux usages de représentation et à l'intelligence comparée des civilisations." },
        { title: "Bureau des partenariats méditerranéens et africains", text: "Bureau chargé des conventions, des implantations, des délégations, des coopérations académiques et des réseaux en Europe, en Méditerranée et en Afrique." },
        { title: "Institut Montpensier", text: "Ramification académique et intellectuelle destinée aux travaux, colloques, programmes et publications placés sous le signe de la culture supérieure et de la formation doctrinale." },
        { title: "LAHRA INTELEN", text: "Centre de recherche et d'analyse destiné aux études historiques, stratégiques, géopolitiques et documentaires, avec vocation de dossiers, notes, observatoires et travaux appliqués." },
        { title: "Centres de formation professionnelle et exécutive", text: "Ensemble de centres de formation continue et professionnelle pouvant porter, en leur nom propre, les certifications et qualifications requises par les ordres réglementaires applicables." }
      ],
      instituteKicker: "Institut principal",
      instituteTitle: "Institut souverain des études stratégiques et internationales",
      instituteBody: "Cet institut constitue le noyau majeur de l'université pour les affaires étrangères, la diplomatie, les études stratégiques, les pratiques de négociation, l'analyse des puissances, les questions de souveraineté et la lecture des grands ensembles régionaux.",
      instituteBody2: "Il peut recevoir des chaires, des séminaires, des certificats, des cycles exécutifs, des ateliers diplomatiques, des simulations, des programmes régionaux et des coopérations universitaires.",
      instituteFocus: "Champs principaux : affaires étrangères, diplomatie, études stratégiques, négociation, analyse régionale, coopération internationale et conseil institutionnel.",
      historyKicker: "École de longue durée",
      historyTitle: "École des études historiques et stratégiques",
      historyBody: "Cette école donne à l'université son assise de profondeur. Elle rassemble l'histoire internationale, l'histoire diplomatique, l'histoire militaire, l'histoire institutionnelle, la pensée stratégique, la lecture des archives et la critique des pièces.",
      historyBody2: "Elle peut porter des séminaires, des groupes de lecture, des séries éditoriales, des colloques, des dossiers documentaires, des observatoires historiques et des modules avancés.",
      historyFocus: "Champs principaux : histoire diplomatique, histoire militaire et stratégique, archives, méthode documentaire, pensée politique et mémoire institutionnelle.",
      languagesKicker: "Langues, protocole et civilisations",
      languagesTitle: "École des langues, du protocole et des civilisations",
      languagesBody: "Cette école réunit les langues de travail, les usages de représentation, l'ordre protocolaire, les disciplines de l'expression et l'étude comparée des aires civilisationnelles.",
      languagesBody2: "On y cultive ensemble la tenue du langage, l'intelligence des formes, la lecture des codes diplomatiques, la connaissance des traditions politiques et l'aptitude à se mouvoir entre plusieurs mondes.",
      languagesFocus: "Champs principaux : langues, protocole, représentation, civilisation, culture générale supérieure et communication diplomatique.",
      partnershipsKicker: "Coopération et implantation",
      partnershipsTitle: "Bureau des partenariats méditerranéens et africains",
      partnershipsBody: "Ce bureau veille aux conventions, aux délégations, aux implantations, aux accords universitaires, aux partenariats territoriaux et aux réseaux de coopération.",
      partnershipsBody2: "Son office regarde particulièrement l'Europe, la Méditerranée, l'Afrique et les zones où les échanges intellectuels, diplomatiques, professionnels et stratégiques appellent une institution capable de tenir ensemble étude, représentation et formation.",
      partnershipsFocus: "Champs principaux : conventions, délégations, implantations, coopération académique, réseaux internationaux et développement institutionnel.",
      montpensierKicker: "Ramification académique et intellectuelle",
      montpensierTitle: "Institut Montpensier",
      montpensierBody: "L'Institut Montpensier est destiné aux travaux, colloques, programmes et publications placés sous le signe de la culture supérieure, de la formation doctrinale et de l'étude exigeante des questions historiques, politiques et institutionnelles.",
      montpensierBody2: "Il peut organiser des rencontres savantes, des cycles de lecture, des éditions, des programmes de réflexion et des initiatives destinées à fortifier la vie intellectuelle de l'université.",
      montpensierFocus: "Champs principaux : culture supérieure, formation doctrinale, colloques, éditions, programmes savants et publications d'érudition.",
      lahraKicker: "Centre de recherche et d'analyse",
      lahraTitle: "LAHRA INTELEN",
      lahraBody: "LAHRA INTELEN est un centre de recherche et d'analyse destiné aux études historiques, stratégiques, géopolitiques et documentaires. Il produit des dossiers, des notes, des observatoires et des travaux appliqués.",
      lahraBody2: "Il maintient une activité de veille, de synthèse et d'expertise qui soutient les différents organes de l'université.",
      lahraFocus: "Champs principaux : études historiques et stratégiques, géopolitique, analyse documentaire, notes institutionnelles, observatoires et travaux appliqués.",
      trainingKicker: "Formation continue et professionnelle",
      trainingTitle: "Centres de formation professionnelle et exécutive",
      trainingBody: "L'université peut comprendre en son sein divers centres de formation continue, exécutive et professionnelle, chargés de modules appliqués, de certificats, d'actions ciblées et de formations contractuelles.",
      trainingBody2: "Les certifications et qualifications réglementaires demeurent attachées aux centres qui les portent dans leur cadre propre; elles ne se confondent pas avec la personne universitaire elle-même.",
      trainingFocus: "Champs principaux : formation continue, cycles exécutifs, enseignement appliqué, certificats professionnels, perfectionnement institutionnel et partenariats territoriaux.",
      programsIndex: "03",
      programsTitle: "Enseignement, recherche et publications",
      programsBody: "L'offre de l'université peut comprendre diplômes internes, certificats, cycles brefs, séminaires, chaires, colloques, dossiers, notes, revues, publications et formations exécutives.",
      trilingualLabel: "Langues du site",
      trilingualTitle: "Version trilingue",
      trilingualBody: "Le site est tenu en français, en anglais et en espagnol, afin de conserver la dignité institutionnelle du français, l'intelligibilité internationale de l'anglais et l'ouverture ibérique et hispanique nécessaire à son rayonnement.",
      governanceIndex: "04",
      governanceTitle: "Gouvernance et architecture universitaire",
      governanceBody: "Saint Louis Université des Nations est ordonnée autour d'une présidence, d'une direction générale, d'un secrétariat général, d'instances académiques, d'instituts, d'écoles, de centres de recherche, de bureaux de coopération et de centres de formation.",
      contactIndex: "05",
      contactTitle: "Relations institutionnelles et coopération extérieure",
      contactBody: "Les relations extérieures de l'université concernent les partenariats académiques, les conventions, les programmes conjoints, les formations exécutives, les projets de recherche, les implantations et les coopérations internationales.",
      contactEmail: "contact@stl-uni.org",
      contactCardsLabel: "Office institutionnel",
      contactCards: [
        { title: "Conventions et partenariats universitaires", body: "Accords académiques, chaires, programmes communs, échanges institutionnels, colloques et coopérations de recherche." },
        { title: "Formation exécutive et perfectionnement", body: "Cycles de cadres, modules spécialisés, actions contractuelles, formations continues et programmes à destination des institutions et des partenaires." },
        { title: "Recherche, publications et observatoires", body: "Dossiers, notes, revues, programmes scientifiques, centres de recherche et travaux appliqués, notamment par l'intermédiaire de LAHRA INTELEN." }
      ],
      footer: "Saint Louis Université des Nations · StL-UNI · 1988",
      languagesFooter: "Français · English · Español"
    },
    en: {
      siteCode: "StL-UNI",
      founded: "1988",
      navHome: "Home",
      navMission: "Mission",
      navBranches: "Institutes and centres",
      navPrograms: "Teaching and research",
      navGovernance: "Governance",
      navContact: "Institutional relations",
      heroKicker: "International university of higher learning, research, and formation",
      heroTitle: "Saint Louis University of Nations",
      heroSubtitle: "An ordered university for study, research, formation, and international cooperation",
      heroBody: "Saint Louis University of Nations is an international university ordered around higher learning, research, executive formation, publication, and academic cooperation. Foreign affairs, diplomacy, strategic worlds, and international relations hold a principal place within it, as one of the chief paths toward a broader understanding of the person, of powers, of societies, of civilizations, and of the forms of government.",
      heroMotto: "Nobilitas obligat · Traditio manet · Sapientia ad altiora",
      ctaPrimary: "View institutes and centres",
      ctaSecondary: "Read the mission",
      institutionLabel: "Institutional statement",
      institutionTitle: "A university of foundation, influence, and service",
      institutionBody: "The institution presents itself neither as a mere school nor as a detached house of studies, but as a university body gathering institutes, schools, research centres, cooperation offices, teaching cycles, and training structures. Its bearing proceeds from a single principle: to join cultivation of mind, discipline of study, exercise of judgment, and preparation for public, academic, diplomatic, administrative, and professional charge.",
      mottoLabel: "Motto and spirit",
      mottoTitle: "A motto of conduct rather than display",
      mottoBody: "The motto, placed at the threshold of the institution, joins duty of dignity, fidelity to inheritance, and elevation of intelligence. Cicero recalls that true nobility lies less in rank received than in the obligation it imposes; Ibn Khaldoun teaches that no durable work stands without learned transmission; Sun Tzu makes plain that the highest wisdom resides in foresight, in the right ordering of means, and in the just reading of situations.",
      missionIndex: "01",
      missionTitle: "Mission",
      missionBody: "To form, to research, to publish, to advise, and to connect: such is the general economy of Saint Louis University of Nations. The university seeks to develop higher teaching, research work, publications, executive formation, international cooperation, and specialised cycles in diplomatic, historical, strategic, linguistic, institutional, administrative, and civil fields.",
      branchesIndex: "02",
      branchesTitle: "Institutes, centres, and ramifications",
      branchesIntro: "The internal ramifications are held as solidary organs. Each possesses its own office, works, relays, and place within the unity of the university.",
      structureLabel: "University structure",
      branches: [
        { title: "Sovereign Institute of Strategic and International Studies", text: "Principal institute devoted to foreign affairs, diplomacy, strategic studies, international relations, and questions of sovereignty." },
        { title: "School of Historical and Strategic Studies", text: "School dedicated to diplomatic, military, political, and institutional history, to archives, to sources, and to the long duration of powers." },
        { title: "School of Languages, Protocol, and Civilizational Studies", text: "School devoted to working languages, protocol, ceremonial order, representative usages, and the comparative understanding of civilizations." },
        { title: "Mediterranean and African Partnerships Office", text: "Office entrusted with conventions, implantations, delegations, academic cooperation, and networks in Europe, the Mediterranean, and Africa." },
        { title: "Montpensier Institute", text: "Academic and intellectual ramification devoted to works, conferences, programmes, and publications under the sign of higher culture and doctrinal formation." },
        { title: "LAHRA INTELEN", text: "Research and analytical centre dedicated to historical, strategic, geopolitical, and documentary studies, with a vocation for dossiers, notes, observatories, and applied work." },
        { title: "Professional and Executive Training Centres", text: "Set of continuing and professional training centres able to bear, in their own name, the certifications and qualifications required by the applicable regulatory orders." }
      ],
      instituteKicker: "Principal institute",
      instituteTitle: "Sovereign Institute of Strategic and International Studies",
      instituteBody: "This institute forms the principal core of the university for foreign affairs, diplomacy, strategic studies, negotiation practices, analysis of powers, questions of sovereignty, and the reading of the great regional ensembles.",
      instituteBody2: "It may receive chairs, seminars, certificates, executive cycles, diplomatic workshops, simulations, regional programmes, and university cooperation.",
      instituteFocus: "Main fields: foreign affairs, diplomacy, strategic studies, negotiation, regional analysis, international cooperation, and institutional counsel.",
      historyKicker: "School of long duration",
      historyTitle: "School of Historical and Strategic Studies",
      historyBody: "This school gives the university its depth of foundation. It gathers international history, diplomatic history, military history, institutional history, strategic thought, archival reading, and documentary criticism.",
      historyBody2: "It may carry seminars, reading groups, editorial series, conferences, documentary dossiers, historical observatories, and advanced modules.",
      historyFocus: "Main fields: diplomatic history, military and strategic history, archives, documentary method, political thought, and institutional memory.",
      languagesKicker: "Languages, protocol, and civilizations",
      languagesTitle: "School of Languages, Protocol, and Civilizational Studies",
      languagesBody: "This school joins working languages, representative usages, protocol, ceremonial order, disciplines of expression, and the comparative study of civilizational areas.",
      languagesBody2: "Within it are cultivated the bearing of language, the intelligence of forms, the reading of diplomatic codes, and the ability to move across several worlds without losing firmness of judgment.",
      languagesFocus: "Main fields: languages, protocol, representation, civilization, higher general culture, and diplomatic communication.",
      partnershipsKicker: "Cooperation and implantation",
      partnershipsTitle: "Mediterranean and African Partnerships Office",
      partnershipsBody: "This office watches over conventions, delegations, implantations, university agreements, territorial partnerships, and cooperation networks.",
      partnershipsBody2: "Its office concerns especially Europe, the Mediterranean, Africa, and the zones where intellectual, diplomatic, professional, and strategic exchanges call for an institution able to hold together study, representation, and formation.",
      partnershipsFocus: "Main fields: conventions, delegations, implantations, academic cooperation, international networks, and institutional development.",
      montpensierKicker: "Academic and intellectual ramification",
      montpensierTitle: "Montpensier Institute",
      montpensierBody: "The Montpensier Institute is devoted to works, conferences, programmes, and publications placed under the sign of higher culture, doctrinal formation, and the demanding study of historical, political, and institutional questions.",
      montpensierBody2: "It may organise learned meetings, reading cycles, editions, programmes of reflection, and initiatives designed to strengthen the intellectual life of the university.",
      montpensierFocus: "Main fields: higher culture, doctrinal formation, conferences, editions, learned programmes, and scholarly publications.",
      lahraKicker: "Research and analytical centre",
      lahraTitle: "LAHRA INTELEN",
      lahraBody: "LAHRA INTELEN is a research and analytical centre devoted to historical, strategic, geopolitical, and documentary studies. It produces dossiers, notes, observatories, and applied works.",
      lahraBody2: "It maintains a continuous activity of watch, synthesis, and expertise that supports the different organs of the university.",
      lahraFocus: "Main fields: historical and strategic studies, geopolitics, documentary analysis, institutional notes, observatories, and applied work.",
      trainingKicker: "Continuing and professional training",
      trainingTitle: "Professional and Executive Training Centres",
      trainingBody: "The university may comprise several centres of continuing, executive, and professional training entrusted with applied modules, certificates, targeted actions, and contractual programmes.",
      trainingBody2: "Certifications and regulatory qualifications remain attached to the centres that bear them within their own framework; they are not confused with the university person itself.",
      trainingFocus: "Main fields: continuing training, executive cycles, applied teaching, professional certificates, institutional upskilling, and territorial partnerships.",
      programsIndex: "03",
      programsTitle: "Teaching, research, and publications",
      programsBody: "The university's offer may include internal degrees, certificates, short cycles, seminars, chairs, conferences, dossiers, notes, journals, publications, and executive programmes.",
      trilingualLabel: "Languages of the site",
      trilingualTitle: "Trilingual version",
      trilingualBody: "The website is held in French, English, and Spanish so as to preserve the institutional dignity of French, the international intelligibility of English, and the Iberian and Hispanic opening required for its influence.",
      governanceIndex: "04",
      governanceTitle: "Governance and university architecture",
      governanceBody: "Saint Louis University of Nations is ordered around a presidency, a general directorate, a secretariat-general, academic instances, institutes, schools, research centres, cooperation offices, and training centres.",
      contactIndex: "05",
      contactTitle: "Institutional relations and external cooperation",
      contactBody: "The university's external relations concern academic partnerships, conventions, joint programmes, executive training, research projects, implantations, and international cooperation.",
      contactEmail: "contact@stl-uni.org",
      contactCardsLabel: "Institutional office",
      contactCards: [
        { title: "University conventions and partnerships", body: "Academic agreements, chairs, common programmes, institutional exchanges, conferences, and research cooperation." },
        { title: "Executive training and advanced instruction", body: "Cycles for cadres, specialised modules, contractual actions, continuing training, and programmes intended for institutions and partners." },
        { title: "Research, publications, and observatories", body: "Dossiers, notes, journals, scientific programmes, research centres, and applied works, notably through LAHRA INTELEN." }
      ],
      footer: "Saint Louis University of Nations · StL-UNI · 1988",
      languagesFooter: "Français · English · Español"
    },
    es: {
      siteCode: "StL-UNI",
      founded: "1988",
      navHome: "Inicio",
      navMission: "Misión",
      navBranches: "Institutos y centros",
      navPrograms: "Enseñanza e investigación",
      navGovernance: "Gobernanza",
      navContact: "Relaciones institucionales",
      heroKicker: "Universidad internacional de enseñanza superior, investigación y formación",
      heroTitle: "Saint Louis Universidad de las Naciones",
      heroSubtitle: "Universidad ordenada para el estudio, la investigación, la formación y la cooperación internacional",
      heroBody: "Saint Louis Universidad de las Naciones es una universidad internacional ordenada en torno a la enseñanza superior, la investigación, la formación ejecutiva, la publicación y la cooperación académica. Los asuntos exteriores, la diplomacia, los mundos estratégicos y las relaciones internacionales ocupan en ella un lugar principal, como una de las vías mayores hacia una comprensión más amplia de la persona, de los poderes, de las sociedades, de las civilizaciones y de las formas de gobierno.",
      heroMotto: "Nobilitas obligat · Traditio manet · Sapientia ad altiora",
      ctaPrimary: "Ver los institutos y centros",
      ctaSecondary: "Leer la misión",
      institutionLabel: "Declaración institucional",
      institutionTitle: "Una universidad de fundación, irradiación y servicio",
      institutionBody: "La institución no se presenta ni como simple escuela ni como casa de estudios separada, sino como universidad que reúne institutos, escuelas, centros de investigación, oficinas de cooperación, ciclos de enseñanza y estructuras de formación.",
      mottoLabel: "Divisa y espíritu",
      mottoTitle: "Una divisa de conducta y no de ornamento",
      mottoBody: "La divisa, colocada en el umbral de la institución, une deber de dignidad, fidelidad a la herencia y elevación de la inteligencia. Cicerón, Ibn Jaldún y Sun Tzu en gouvernent l'enseignement, la recherche et le service.",
      missionIndex: "01",
      missionTitle: "Misión",
      missionBody: "Formar, investigar, publicar, aconsejar y vincular: tal es la economía general de Saint Louis Universidad de las Naciones. La universidad busca desarrollar enseñanzas superiores, trabajos de investigación, publicaciones, formación de cuadros y cooperaciones internacionales.",
      branchesIndex: "02",
      branchesTitle: "Institutos, centros y ramificaciones",
      branchesIntro: "Las ramificaciones internas se mantienen como órganos solidarios. Cada una posee su oficio propio, sus trabajos, sus relevos y su lugar dentro de la unidad de la universidad.",
      structureLabel: "Estructura universitaria",
      branches: [
        { title: "Instituto soberano de estudios estratégicos e internacionales", text: "Instituto principal dedicado a los asuntos exteriores, la diplomacia, los estudios estratégicos, las relaciones internacionales y las cuestiones de soberanía." },
        { title: "Escuela de estudios históricos y estratégicos", text: "Escuela dedicada a la historia diplomática, militar, política e institucional, a los archivos y a la larga duración de los poderes." },
        { title: "Escuela de lenguas, protocolo y civilizaciones", text: "Escuela destinada a las lenguas de trabajo, al protocolo, al orden ceremonial y a la comprensión comparada de las civilizaciones." },
        { title: "Oficina de alianzas mediterráneas y africanas", text: "Oficina encargada de convenios, implantaciones, delegaciones, cooperación académica y redes en Europa, el Mediterráneo y África." },
        { title: "Instituto Montpensier", text: "Ramificación académica e intelectual dedicada a trabajos, coloquios, programas y publicaciones bajo el signo de la cultura superior y de la formación doctrinal." },
        { title: "LAHRA INTELEN", text: "Centro de investigación y de análisis dedicado a estudios históricos, estratégicos, geopolíticos y documentales." },
        { title: "Centros de formación profesional y ejecutiva", text: "Conjunto de centros de formación continua y profesional capaces de llevar las certificaciones y calificaciones exigidas por los regímenes reglamentarios aplicables." }
      ],
      instituteKicker: "Instituto principal",
      instituteTitle: "Instituto soberano de estudios estratégicos e internacionales",
      instituteBody: "Este instituto constituye el núcleo mayor de la universidad para los asuntos exteriores, la diplomacia, los estudios estratégicos, las prácticas de negociación y la lectura de los grandes conjuntos regionales.",
      instituteBody2: "Puede acoger cátedras, seminarios, certificados, ciclos ejecutivos, talleres diplomáticos, simulaciones y cooperaciones universitarias.",
      instituteFocus: "Campos principales: asuntos exteriores, diplomacia, estudios estratégicos, negociación, análisis regional y cooperación internacional.",
      historyKicker: "Escuela de larga duración",
      historyTitle: "Escuela de estudios históricos y estratégicos",
      historyBody: "Esta escuela da a la universidad su fundamento de profundidad. Reúne la historia internacional, diplomática, militar e institucional, el pensamiento estratégico y la crítica documental.",
      historyBody2: "Puede sostener seminarios, grupos de lectura, series editoriales, coloquios y módulos avanzados.",
      historyFocus: "Campos principales: historia diplomática, historia militar y estratégica, archivos, método documental y memoria institucional.",
      languagesKicker: "Lenguas, protocolo y civilizaciones",
      languagesTitle: "Escuela de lenguas, protocolo y civilizaciones",
      languagesBody: "Esta escuela reúne las lenguas de trabajo, los usos de representación, el orden protocolario y el estudio comparado de las áreas civilizacionales.",
      languagesBody2: "En ella se cultivan el porte del lenguaje, la inteligencia de las formas y la capacidad de moverse entre varios mundos sin perder firmeza de juicio.",
      languagesFocus: "Campos principales: lenguas, protocolo, representación, civilización y comunicación diplomática.",
      partnershipsKicker: "Cooperación e implantación",
      partnershipsTitle: "Oficina de alianzas mediterráneas y africanas",
      partnershipsBody: "Esta oficina vela por los convenios, las delegaciones, las implantaciones, los acuerdos universitarios y las redes de cooperación.",
      partnershipsBody2: "Su oficio concierne especialmente a Europa, al Mediterráneo y a África.",
      partnershipsFocus: "Campos principales: convenios, delegaciones, implantaciones, cooperación académica y redes internacionales.",
      montpensierKicker: "Ramificación académica e intelectual",
      montpensierTitle: "Instituto Montpensier",
      montpensierBody: "El Instituto Montpensier está dedicado a trabajos, coloquios, programas y publicaciones bajo el signo de la cultura superior y de la formación doctrinal.",
      montpensierBody2: "Puede organizar encuentros eruditos, ciclos de lectura, ediciones y programas de reflexión.",
      montpensierFocus: "Campos principales: cultura superior, formación doctrinal, coloquios, ediciones y publicaciones académicas.",
      lahraKicker: "Centro de investigación y análisis",
      lahraTitle: "LAHRA INTELEN",
      lahraBody: "LAHRA INTELEN es un centro de investigación y de análisis dedicado a estudios históricos, estratégicos, geopolíticos y documentales.",
      lahraBody2: "Mantiene una actividad continua de vigilancia, síntesis y pericia que sostiene los diferentes órganos de la universidad.",
      lahraFocus: "Campos principales: estudios históricos y estratégicos, geopolítica, análisis documental y trabajos aplicados.",
      trainingKicker: "Formación continua y profesional",
      trainingTitle: "Centros de formación profesional y ejecutiva",
      trainingBody: "La universidad puede comprender varios centros de formación continua, ejecutiva y profesional encargados de módulos aplicados, certificados y programas contractuales.",
      trainingBody2: "Las certificaciones reglamentarias permanecen unidas a los centros que las portan dentro de su propio marco.",
      trainingFocus: "Campos principales: formación continua, ciclos ejecutivos, certificados profesionales y alianzas territoriales.",
      programsIndex: "03",
      programsTitle: "Enseñanza, investigación y publicaciones",
      programsBody: "La oferta de la universidad puede comprender títulos internos, certificados, ciclos breves, seminarios, cátedras, coloquios, revistas, publicaciones y programas ejecutivos.",
      trilingualLabel: "Lenguas del sitio",
      trilingualTitle: "Versión trilingüe",
      trilingualBody: "El sitio se mantiene en francés, inglés y español, conservando la dignidad institucional del francés, la inteligibilidad internacional del inglés y la apertura ibérica e hispánica.",
      governanceIndex: "04",
      governanceTitle: "Gobernanza y arquitectura universitaria",
      governanceBody: "Saint Louis Universidad de las Naciones se ordena en torno a una presidencia, una dirección general, una secretaría general, instancias académicas, institutos, escuelas, centros de investigación y oficinas de cooperación.",
      contactIndex: "05",
      contactTitle: "Relaciones institucionales y cooperación exterior",
      contactBody: "Las relaciones exteriores de la universidad se refieren a alianzas académicas, convenios, programas conjuntos, formación ejecutiva y cooperación internacional.",
      contactEmail: "contact@stl-uni.org",
      contactCardsLabel: "Oficina institucional",
      contactCards: [
        { title: "Convenios y alianzas universitarias", body: "Acuerdos académicos, cátedras, programas comunes, intercambios institucionales y cooperación de investigación." },
        { title: "Formación ejecutiva y perfeccionamiento", body: "Ciclos para cuadros, módulos especializados, acciones contractuales y programas destinados a instituciones y socios." },
        { title: "Investigación, publicaciones y observatorios", body: "Dosieres, notas, revistas, programas científicos y trabajos aplicados por medio de LAHRA INTELEN." }
      ],
      footer: "Saint Louis Universidad de las Naciones · StL-UNI · 1988",
      languagesFooter: "Français · English · Español"
    }
  };

  const [lang, setLang] = useState("fr");
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = languages[lang];

  const navItems = [
    { href: "#home", label: t.navHome },
    { href: "#mission", label: t.navMission },
    { href: "#branches", label: t.navBranches },
    { href: "#programs", label: t.navPrograms },
    { href: "#governance", label: t.navGovernance },
    { href: "#contact", label: t.navContact }
  ];

  const Logo = () => (
    <div style={{ width: 56, height: 56, borderRadius: 12, border: "1.5px solid #c9b96e", background: "#0f172a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ color: "#e8d48b", fontSize: 13, fontWeight: 700, letterSpacing: 1, lineHeight: 1 }}>StL-UNI</span>
      <span style={{ color: "#94a3b8", fontSize: 9, letterSpacing: 1, marginTop: 3 }}>1988</span>
    </div>
  );

  const FocusTag = ({ text }) => (
    <div style={{ marginTop: "1.5rem", borderRadius: 12, border: "1px solid #e2e8f0", background: "#f8fafc", padding: "0.75rem 1rem", fontSize: 13, fontWeight: 500, lineHeight: 1.7, color: "#475569" }}>
      {text}
    </div>
  );

  const sections = [
    { kicker: t.instituteKicker, title: t.instituteTitle, body: t.instituteBody, body2: t.instituteBody2, focus: t.instituteFocus, bg: "#f8fafc" },
    { kicker: t.historyKicker, title: t.historyTitle, body: t.historyBody, body2: t.historyBody2, focus: t.historyFocus, bg: "#fff" },
    { kicker: t.languagesKicker, title: t.languagesTitle, body: t.languagesBody, body2: t.languagesBody2, focus: t.languagesFocus, bg: "#f8fafc" },
    { kicker: t.partnershipsKicker, title: t.partnershipsTitle, body: t.partnershipsBody, body2: t.partnershipsBody2, focus: t.partnershipsFocus, bg: "#fff" },
    { kicker: t.montpensierKicker, title: t.montpensierTitle, body: t.montpensierBody, body2: t.montpensierBody2, focus: t.montpensierFocus, bg: "#f8fafc" },
    { kicker: t.lahraKicker, title: t.lahraTitle, body: t.lahraBody, body2: t.lahraBody2, focus: t.lahraFocus, bg: "#fff" },
    { kicker: t.trainingKicker, title: t.trainingTitle, body: t.trainingBody, body2: t.trainingBody2, focus: t.trainingFocus, bg: "#f8fafc" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", color: "#0f172a", fontFamily: "Georgia, 'Times New Roman', serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid #e2e8f0", background: "rgba(255,255,255,0.97)", backdropFilter: "blur(8px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0.875rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Logo />
            <div>
              <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", color: "#94a3b8", marginBottom: 2 }}>{t.founded} · {t.siteCode}</div>
              <div style={{ fontSize: 17, fontWeight: 600, color: "#0f172a", letterSpacing: "0.02em" }}>{t.heroTitle}</div>
            </div>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 13, color: "#475569" }}>
            {navItems.map(item => (
              <a key={item.href} href={item.href} style={{ color: "#475569", textDecoration: "none" }}>{item.label}</a>
            ))}
            <div style={{ display: "flex", gap: 4, borderRadius: 999, border: "1px solid #e2e8f0", background: "#f8fafc", padding: "3px 4px" }}>
              {["fr","en","es"].map(l => (
                <button key={l} onClick={() => setLang(l)} style={{ borderRadius: 999, padding: "4px 12px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", border: "none", cursor: "pointer", background: lang === l ? "#0f172a" : "transparent", color: lang === l ? "#fff" : "#64748b" }}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f2240 100%)", borderBottom: "1px solid #1e293b", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(circle at 80% 20%, rgba(212,175,55,0.15) 0%, transparent 40%)" }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 48, position: "relative" }}>
            <div>
              <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.35em", color: "rgba(212,175,55,0.9)", marginBottom: 16 }}>{t.heroKicker}</div>
              <h1 style={{ fontSize: 48, fontWeight: 600, lineHeight: 1.12, color: "#fff", margin: "0 0 16px", letterSpacing: "-0.02em" }}>{t.heroTitle}</h1>
              <div style={{ fontSize: 18, color: "#cbd5e1", marginBottom: 24 }}>{t.heroSubtitle}</div>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "#cbd5e1", marginBottom: 20 }}>{t.heroBody}</p>
              <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.25em", color: "rgba(212,175,55,0.8)", marginBottom: 32 }}>{t.heroMotto}</div>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="#branches" style={{ borderRadius: 999, background: "#d4af37", padding: "12px 24px", fontSize: 13, fontWeight: 600, color: "#0f172a", textDecoration: "none" }}>{t.ctaPrimary}</a>
                <a href="#mission" style={{ borderRadius: 999, border: "1px solid rgba(255,255,255,0.25)", padding: "12px 24px", fontSize: 13, fontWeight: 600, color: "#fff", textDecoration: "none" }}>{t.ctaSecondary}</a>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[{ label: t.institutionLabel, title: t.institutionTitle, body: t.institutionBody }, { label: t.mottoLabel, title: t.mottoTitle, body: t.mottoBody }].map((card, i) => (
                <div key={i} style={{ borderRadius: 24, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.08)", padding: "1.75rem" }}>
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.28em", color: "#d4af37" }}>{card.label}</div>
                  <h2 style={{ marginTop: 12, fontSize: 18, fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{card.title}</h2>
                  <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.8, color: "#cbd5e1" }}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mission" style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 32 }}>
            <div>
              <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.28em", color: "#94a3b8" }}>{t.missionIndex}</div>
              <h2 style={{ marginTop: 12, fontSize: 34, fontWeight: 600, color: "#0f172a" }}>{t.missionTitle}</h2>
            </div>
            <div style={{ borderRadius: 20, border: "1px solid #e2e8f0", background: "#fff", padding: "1.75rem" }}>
              <p style={{ fontSize: 15, lineHeight: 1.9, color: "#334155" }}>{t.missionBody}</p>
            </div>
          </div>
        </section>

        <section id="branches" style={{ borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", background: "#fff" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem" }}>
            <div style={{ maxWidth: 720, marginBottom: 48 }}>
              <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.28em", color: "#94a3b8" }}>{t.branchesIndex}</div>
              <h2 style={{ marginTop: 12, fontSize: 34, fontWeight: 600, color: "#0f172a" }}>{t.branchesTitle}</h2>
              <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.9, color: "#475569" }}>{t.branchesIntro}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {t.branches.map(branch => (
                <div key={branch.title} style={{ borderRadius: 20, border: "1px solid #e2e8f0", background: "#f8fafc", padding: "1.75rem" }}>
                  <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.28em", color: "#94a3b8" }}>{t.structureLabel}</div>
                  <h3 style={{ marginTop: 12, fontSize: 15, fontWeight: 600, color: "#0f172a", lineHeight: 1.4 }}>{branch.title}</h3>
                  <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.8, color: "#475569" }}>{branch.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {sections.map((sec, i) => (
          <section key={i} style={{ background: sec.bg, borderTop: "1px solid #e2e8f0" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 32 }}>
                <div>
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.28em", color: "#94a3b8" }}>{sec.kicker}</div>
                  <h2 style={{ marginTop: 12, fontSize: 26, fontWeight: 600, color: "#0f172a", lineHeight: 1.25 }}>{sec.title}</h2>
                </div>
                <div style={{ borderRadius: 20, border: "1px solid #e2e8f0", background: "#fff", padding: "1.75rem" }}>
                  <p style={{ fontSize: 15, lineHeight: 1.9, color: "#334155" }}>{sec.body}</p>
                  {sec.body2 && <p style={{ marginTop: 20, fontSize: 15, lineHeight: 1.9, color: "#334155" }}>{sec.body2}</p>}
                  <FocusTag text={sec.focus} />
                </div>
              </div>
            </div>
          </section>
        ))}

        <section id="programs" style={{ borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div style={{ borderRadius: 20, border: "1px solid #e2e8f0", background: "#fff", padding: "2rem" }}>
                <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.28em", color: "#94a3b8" }}>{t.programsIndex}</div>
                <h2 style={{ marginTop: 12, fontSize: 28, fontWeight: 600, color: "#0f172a" }}>{t.programsTitle}</h2>
                <p style={{ marginTop: 20, fontSize: 15, lineHeight: 1.9, color: "#334155" }}>{t.programsBody}</p>
              </div>
              <div style={{ borderRadius: 20, background: "#0f172a", padding: "2rem" }}>
                <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.28em", color: "#d4af37" }}>{t.trilingualLabel}</div>
                <h2 style={{ marginTop: 12, fontSize: 28, fontWeight: 600, color: "#fff" }}>{t.trilingualTitle}</h2>
                <p style={{ marginTop: 20, fontSize: 15, lineHeight: 1.9, color: "#cbd5e1" }}>{t.trilingualBody}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="governance" style={{ borderTop: "1px solid #e2e8f0", background: "#f1f5f9" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <div>
                <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.28em", color: "#94a3b8" }}>{t.governanceIndex}</div>
                <h2 style={{ marginTop: 12, fontSize: 34, fontWeight: 600, color: "#0f172a" }}>{t.governanceTitle}</h2>
              </div>
              <div style={{ borderRadius: 20, border: "1px solid #e2e8f0", background: "#fff", padding: "1.75rem" }}>
                <p style={{ fontSize: 15, lineHeight: 1.9, color: "#334155" }}>{t.governanceBody}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" style={{ borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.5rem" }}>
            <div style={{ borderRadius: 28, border: "1px solid #e2e8f0", background: "#fff", padding: "3rem" }}>
              <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.28em", color: "#94a3b8" }}>{t.contactIndex}</div>
              <h2 style={{ marginTop: 12, fontSize: 34, fontWeight: 600, color: "#0f172a" }}>{t.contactTitle}</h2>
              <p style={{ marginTop: 16, maxWidth: 760, fontSize: 15, lineHeight: 1.9, color: "#475569" }}>{t.contactBody}</p>
              <div style={{ marginTop: 8, fontSize: 13, color: "#94a3b8" }}>{t.contactEmail}</div>
              <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
                {t.contactCards.map(card => (
                  <div key={card.title} style={{ borderRadius: 20, border: "1px solid #e2e8f0", background: "#f8fafc", padding: "1.5rem" }}>
                    <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.24em", color: "#94a3b8" }}>{t.contactCardsLabel}</div>
                    <h3 style={{ marginTop: 12, fontSize: 15, fontWeight: 600, color: "#0f172a", lineHeight: 1.4 }}>{card.title}</h3>
                    <p style={{ marginTop: 12, fontSize: 13, lineHeight: 1.8, color: "#475569" }}>{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid #1e293b", background: "#0f172a", color: "#94a3b8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13 }}>
          <div style={{ color: "#cbd5e1" }}>{t.footer}</div>
          <div>{t.languagesFooter}</div>
        </div>
      </footer>
    </div>
  );
}
