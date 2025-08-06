"use client"

interface CountryInfo {
  name: string
  flag: string
  capital: string
  language: string[]
  currency: string
  description: string
  whyChoose: string[]
  popularCourses: string[]
  jobProspects: {
    duringStudy: string
    afterGraduation: string
    averageSalary: string
  }
  livingCosts: string
  visaRequirements: {
    type: string
    processingTime: string
    successRate: string
    documents: string[]
  }
  studentLife: {
    climate: string
    culture: string
    transportation: string
    accommodation: string[]
  }
  scholarships: string[]
}

const countryInfo: { [key: string]: CountryInfo } = {
  france: {
    name: "France",
    flag: "/flags/fr.png",
    capital: "Paris",
    language: ["French", "English (international programs)"],
    currency: "Euro (€)",
    description:
      "France offers world-class education with rich cultural heritage, making it one of Europe's most sought-after study destinations.",
    whyChoose: [
      "Home to world-renowned universities and business schools",
      "Affordable tuition fees compared to other Western countries",
      "Rich cultural heritage and diverse student life",
      "Strong job market with excellent career opportunities",
      "Gateway to Europe with excellent connectivity",
    ],
    popularCourses: [
      "Business & Management (MBA, International Business, Finance)",
      "Engineering & Technology (Computer Science, Mechanical Engineering)",
      "Arts & Humanities (Fashion Design, Art History, International Relations)",
      "Sciences (Medicine, Biotechnology, Environmental Science)",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies, full-time during holidays. Average wage: €10-15/hour",
      afterGraduation: "12 months post-graduation visa for job search",
      averageSalary: "€35,000 - €55,000/year with 85% employment rate",
    },
    livingCosts: "€800-1,575/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (VLS-TS)",
      processingTime: "2-4 weeks",
      successRate: "95%",
      documents: ["Acceptance letter", "Financial proof (€615/month)", "Health insurance", "Accommodation proof"],
    },
    studentLife: {
      climate: "Temperate oceanic climate with mild winters and warm summers",
      culture: "Rich cultural scene with museums, galleries, festivals, and culinary experiences",
      transportation: "Excellent public transport system including metro, buses, and high-speed trains",
      accommodation: [
        "University dormitories (€200-400/month)",
        "Private apartments (€400-800/month)",
        "Shared housing (€300-600/month)",
      ],
    },
    scholarships: [
      "Eiffel Excellence Scholarship (€1,181-1,700/month)",
      "Charpak Scholarship for Indian students (€700/month)",
      "Campus France scholarships",
      "University-specific merit scholarships",
    ],
  },
  germany: {
    name: "Germany",
    flag: "/flags/de.png",
    capital: "Berlin",
    language: ["German", "English (international programs)"],
    currency: "Euro (€)",
    description:
      "Germany is Europe's economic powerhouse, offering world-class education, especially in engineering and technology.",
    whyChoose: [
      "No tuition fees at public universities",
      "World-renowned engineering and technology programs",
      "Strong economy with excellent job opportunities",
      "Central location in Europe",
      "High quality of life and safety",
    ],
    popularCourses: [
      "Engineering & Technology (Mechanical, Automotive, Computer Science)",
      "Business & Economics (MBA, International Business, Economics)",
      "Sciences (Medicine, Biotechnology, Chemistry, Physics)",
      "Arts & Social Sciences (International Relations, Philosophy)",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies, full-time during breaks. Average wage: €12-18/hour",
      afterGraduation: "18 months post-graduation visa for job search",
      averageSalary: "€45,000 - €70,000/year with 90% employment rate",
    },
    livingCosts: "€610-1,290/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (Aufenthaltserlaubnis)",
      processingTime: "4-8 weeks",
      successRate: "92%",
      documents: ["Acceptance letter", "Financial proof (€11,208/year)", "Health insurance", "APS Certificate"],
    },
    studentLife: {
      climate: "Temperate seasonal climate with cold winters and warm summers",
      culture: "Rich history, beer gardens, festivals, classical music, and modern architecture",
      transportation: "Excellent public transport and cycling infrastructure",
      accommodation: [
        "Student dormitories (€200-400/month)",
        "Private apartments (€300-700/month)",
        "WG (shared flats) (€250-500/month)",
      ],
    },
    scholarships: [
      "DAAD Scholarships (€850-1,200/month)",
      "Deutschland Stipendium (€300/month)",
      "Heinrich Böll Foundation scholarships",
      "Konrad-Adenauer-Stiftung scholarships",
    ],
  },
  ireland: {
    name: "Ireland",
    flag: "/flags/ie.png",
    capital: "Dublin",
    language: ["English"],
    currency: "Euro (€)",
    description: "English-speaking education hub with globally recognized degrees and vibrant student life.",
    whyChoose: [
      "English-speaking country",
      "Globally recognized degrees",
      "Strong tech industry presence",
      "Friendly and welcoming culture",
      "Gateway to Europe",
    ],
    popularCourses: [
      "Technology & Computer Science",
      "Business & Finance",
      "Medicine & Healthcare",
      "Engineering",
      "Arts & Humanities",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies, full-time during holidays. Average wage: €10-14/hour",
      afterGraduation: "24 months post-graduation visa for job search",
      averageSalary: "€30,000 - €50,000/year with 82% employment rate",
    },
    livingCosts: "€900-1,400/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Study Visa (Stamp 2)",
      processingTime: "4-8 weeks",
      successRate: "90%",
      documents: ["Letter of acceptance", "Financial evidence (€7,000)", "Medical insurance", "English proficiency"],
    },
    studentLife: {
      climate: "Mild oceanic climate with cool summers and mild winters",
      culture: "Vibrant pub culture, traditional music, literature, and friendly locals",
      transportation: "Good public transport in cities, cycling-friendly infrastructure",
      accommodation: [
        "On-campus housing (€400-600/month)",
        "Private rentals (€500-900/month)",
        "Homestay (€400-700/month)",
      ],
    },
    scholarships: [
      "Government of Ireland International Education Scholarships",
      "Trinity College Dublin scholarships",
      "UCD Global Excellence scholarships",
      "Irish Research Council scholarships",
    ],
  },
  spain: {
    name: "Spain",
    flag: "/flags/es.png",
    capital: "Madrid",
    language: ["Spanish", "English (international programs)"],
    currency: "Euro (€)",
    description:
      "Discover Mediterranean lifestyle while pursuing quality education in one of Europe's most welcoming countries.",
    whyChoose: [
      "Mediterranean lifestyle and climate",
      "Affordable cost of living",
      "Rich cultural heritage",
      "Growing startup ecosystem",
      "Beautiful cities and landscapes",
    ],
    popularCourses: [
      "Business & Management",
      "Tourism & Hospitality",
      "Arts & Design",
      "Engineering",
      "Language Studies",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies. Average wage: €8-12/hour",
      afterGraduation: "12 months post-graduation visa for job search",
      averageSalary: "€25,000 - €40,000/year with 75% employment rate",
    },
    livingCosts: "€600-1,100/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (Visado de Estudios)",
      processingTime: "2-4 weeks",
      successRate: "88%",
      documents: [
        "University acceptance",
        "Financial proof (€532/month)",
        "Health insurance",
        "Criminal background check",
      ],
    },
    studentLife: {
      climate: "Mediterranean climate with hot summers and mild winters",
      culture: "Vibrant nightlife, flamenco, festivals, excellent cuisine, and siesta culture",
      transportation: "Excellent high-speed rail network and urban public transport",
      accommodation: [
        "University residences (€300-500/month)",
        "Shared apartments (€250-450/month)",
        "Private studios (€400-700/month)",
      ],
    },
    scholarships: [
      "Spanish government scholarships",
      "Fundación Carolina scholarships",
      "Erasmus+ grants",
      "University-specific scholarships",
    ],
  },
  cyprus: {
    name: "Cyprus",
    flag: "/flags/cy.png",
    capital: "Nicosia",
    language: ["Greek", "Turkish", "English"],
    currency: "Euro (€)",
    description:
      "Island nation offering European education with beautiful Mediterranean climate and modern facilities.",
    whyChoose: [
      "Beautiful Mediterranean island location",
      "English-taught programs available",
      "EU member with European standards",
      "Safe and peaceful environment",
      "Affordable tuition and living costs",
    ],
    popularCourses: [
      "Business Administration",
      "Tourism & Hospitality Management",
      "Computer Science & IT",
      "Medicine & Healthcare",
      "Marine Studies",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies. Average wage: €7-10/hour",
      afterGraduation: "12 months post-graduation visa for job search",
      averageSalary: "€20,000 - €35,000/year with 70% employment rate",
    },
    livingCosts: "€500-900/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (National Visa)",
      processingTime: "2-3 weeks",
      successRate: "85%",
      documents: [
        "University acceptance",
        "Financial proof (€8,500/year)",
        "Health insurance",
        "Clean criminal record",
      ],
    },
    studentLife: {
      climate: "Mediterranean climate with hot, dry summers and mild winters",
      culture: "Blend of Greek and Turkish cultures, beach lifestyle, ancient history",
      transportation: "Limited public transport, car rental or cycling recommended",
      accommodation: [
        "University dormitories (€200-350/month)",
        "Private apartments (€300-600/month)",
        "Shared housing (€250-450/month)",
      ],
    },
    scholarships: [
      "Cyprus government scholarships",
      "University of Cyprus scholarships",
      "EU Erasmus+ grants",
      "Private foundation scholarships",
    ],
  },
  malta: {
    name: "Malta",
    flag: "/flags/mt.png",
    capital: "Valletta",
    language: ["Maltese", "English"],
    currency: "Euro (€)",
    description:
      "Small island nation with big opportunities - English-speaking education in the heart of the Mediterranean.",
    whyChoose: [
      "English-speaking country",
      "Small class sizes and personalized attention",
      "EU member state",
      "Beautiful Mediterranean location",
      "Growing financial services sector",
    ],
    popularCourses: [
      "Business & Finance",
      "Information Technology",
      "Tourism & Hospitality",
      "Maritime Studies",
      "English Language Studies",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies. Average wage: €8-12/hour",
      afterGraduation: "12 months post-graduation visa for job search",
      averageSalary: "€18,000 - €30,000/year with 68% employment rate",
    },
    livingCosts: "€600-1,000/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (National Visa)",
      processingTime: "2-4 weeks",
      successRate: "82%",
      documents: ["University acceptance", "Financial proof (€14,000/year)", "Health insurance", "Accommodation proof"],
    },
    studentLife: {
      climate: "Mediterranean climate with hot summers and mild winters",
      culture: "Rich history, festivals, English-speaking environment, island lifestyle",
      transportation: "Bus network covers the island, walking and cycling friendly",
      accommodation: [
        "University halls (€300-500/month)",
        "Private rentals (€400-700/month)",
        "Homestay (€350-600/month)",
      ],
    },
    scholarships: [
      "Malta government scholarships",
      "University of Malta scholarships",
      "Commonwealth scholarships",
      "EU mobility grants",
    ],
  },
  netherlands: {
    name: "Netherlands",
    flag: "/flags/nl.png",
    capital: "Amsterdam",
    language: ["Dutch", "English (widely used in international programs)"],
    currency: "Euro (€)",
    description:
      "Progressive education system with innovative programs taught in English in one of Europe's most international countries.",
    whyChoose: [
      "Over 2,100 English-taught programs",
      "Highly innovative and research-focused education",
      "Multicultural and international environment",
      "Strong economy and job market",
      "Excellent work-life balance culture",
      "Strategic location in Europe",
    ],
    popularCourses: [
      "Engineering & Technology (Aerospace, Civil, Electrical Engineering)",
      "Business & Economics (International Business, Finance, Marketing)",
      "Social Sciences (Psychology, International Relations, Law)",
      "Life Sciences (Medicine, Biotechnology, Environmental Science)",
      "Arts & Design (Architecture, Fine Arts, Media Studies)",
    ],
    jobProspects: {
      duringStudy: "16 hours/week during studies, full-time during holidays. Average wage: €12-16/hour",
      afterGraduation: "12 months post-graduation visa (orientation year)",
      averageSalary: "€35,000 - €60,000/year with 88% employment rate",
    },
    livingCosts: "€800-1,400/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (MVV)",
      processingTime: "4-6 weeks",
      successRate: "90%",
      documents: ["University acceptance", "Financial proof (€10,800/year)", "Health insurance", "TB test certificate"],
    },
    studentLife: {
      climate: "Temperate oceanic climate with mild summers and cool winters",
      culture: "Liberal, tolerant society with cycling culture, canals, and vibrant nightlife",
      transportation: "Excellent cycling infrastructure and public transport network",
      accommodation: [
        "Student housing (€300-600/month)",
        "Private rentals (€500-900/month)",
        "Shared apartments (€400-700/month)",
      ],
    },
    scholarships: [
      "Holland Scholarship (€5,000)",
      "Orange Tulip Scholarship",
      "University-specific scholarships",
      "Erasmus+ grants",
    ],
  },
  italy: {
    name: "Italy",
    flag: "/flags/it.png",
    capital: "Rome",
    language: ["Italian", "English (international programs)"],
    currency: "Euro (€)",
    description:
      "Study in the birthplace of Renaissance with world-renowned universities, rich history, and exceptional cuisine.",
    whyChoose: [
      "Rich cultural heritage and history",
      "World-renowned art, fashion, and design programs",
      "Affordable tuition fees at public universities",
      "Beautiful cities and Mediterranean lifestyle",
      "Strong programs in arts, architecture, and engineering",
      "Excellent cuisine and quality of life",
    ],
    popularCourses: [
      "Arts & Design (Fashion Design, Fine Arts, Architecture)",
      "Engineering (Mechanical, Civil, Automotive Engineering)",
      "Business & Economics (International Business, Economics)",
      "Humanities (History, Literature, Philosophy, Archaeology)",
      "Sciences (Medicine, Agriculture, Food Science)",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies. Average wage: €8-12/hour",
      afterGraduation: "12 months post-graduation visa for job search",
      averageSalary: "€25,000 - €45,000/year with 78% employment rate",
    },
    livingCosts: "€700-1,200/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (Visto per Studio)",
      processingTime: "3-6 weeks",
      successRate: "87%",
      documents: ["University acceptance", "Financial proof (€458/month)", "Health insurance", "Accommodation proof"],
    },
    studentLife: {
      climate: "Mediterranean climate with hot summers and mild winters",
      culture: "Rich art, history, fashion, excellent cuisine, and passionate lifestyle",
      transportation: "Good public transport in cities, extensive rail network",
      accommodation: [
        "University residences (€250-450/month)",
        "Private apartments (€400-800/month)",
        "Shared housing (€300-600/month)",
      ],
    },
    scholarships: [
      "Italian government scholarships",
      "Regional scholarships (DSU)",
      "University merit scholarships",
      "Erasmus+ mobility grants",
    ],
  },
  poland: {
    name: "Poland",
    flag: "/flags/pl.png",
    capital: "Warsaw",
    language: ["Polish", "English (international programs)"],
    currency: "Polish Złoty (PLN)",
    description:
      "Emerging education destination with high-quality programs, affordable costs, and growing international recognition.",
    whyChoose: [
      "Very affordable tuition and living costs",
      "Growing number of English-taught programs",
      "Central European location",
      "Rich history and cultural heritage",
      "Rapidly developing economy",
      "Safe and welcoming environment",
    ],
    popularCourses: [
      "Engineering & Technology (Computer Science, Mechanical Engineering)",
      "Medicine & Healthcare (Medicine, Dentistry, Pharmacy)",
      "Business & Economics (International Business, Finance)",
      "Sciences (Biotechnology, Chemistry, Physics)",
      "Arts & Humanities (History, Literature, Fine Arts)",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies. Average wage: €4-8/hour",
      afterGraduation: "12 months post-graduation visa for job search",
      averageSalary: "€15,000 - €30,000/year with 75% employment rate",
    },
    livingCosts: "€400-800/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (National Visa)",
      processingTime: "2-4 weeks",
      successRate: "85%",
      documents: ["University acceptance", "Financial proof (€500/month)", "Health insurance", "Clean criminal record"],
    },
    studentLife: {
      climate: "Continental climate with cold winters and warm summers",
      culture: "Rich history, traditional festivals, hearty cuisine, and strong academic traditions",
      transportation: "Good public transport in cities, affordable travel",
      accommodation: [
        "Student dormitories (€100-250/month)",
        "Private apartments (€200-500/month)",
        "Shared housing (€150-350/month)",
      ],
    },
    scholarships: [
      "Polish government scholarships",
      "Erasmus+ grants",
      "University merit scholarships",
      "Visegrad Fund scholarships",
    ],
  },
  portugal: {
    name: "Portugal",
    flag: "/flags/pt.png",
    capital: "Lisbon",
    language: ["Portuguese", "English (international programs)"],
    currency: "Euro (€)",
    description:
      "Beautiful coastal country offering quality education with warm climate, friendly culture, and affordable living.",
    whyChoose: [
      "Beautiful Atlantic coastline and mild climate",
      "Affordable cost of living and tuition",
      "Friendly and welcoming culture",
      "Growing tech and startup ecosystem",
      "Rich maritime history and culture",
      "Gateway to both Europe and Atlantic",
    ],
    popularCourses: [
      "Engineering & Technology (Civil, Electrical, Computer Engineering)",
      "Business & Management (International Business, Tourism Management)",
      "Sciences (Marine Sciences, Environmental Science, Medicine)",
      "Arts & Humanities (History, Literature, Fine Arts)",
      "Social Sciences (Psychology, International Relations)",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies. Average wage: €6-10/hour",
      afterGraduation: "12 months post-graduation visa for job search",
      averageSalary: "€18,000 - €35,000/year with 72% employment rate",
    },
    livingCosts: "€500-900/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (Visto de Estudo)",
      processingTime: "2-4 weeks",
      successRate: "88%",
      documents: ["University acceptance", "Financial proof (€760/month)", "Health insurance", "Accommodation proof"],
    },
    studentLife: {
      climate: "Mediterranean climate with mild winters and warm summers",
      culture: "Laid-back lifestyle, beautiful beaches, traditional music (Fado), excellent seafood",
      transportation: "Good public transport, beautiful coastal and mountain regions",
      accommodation: [
        "University residences (€200-400/month)",
        "Private apartments (€300-600/month)",
        "Shared housing (€250-450/month)",
      ],
    },
    scholarships: [
      "Portuguese government scholarships",
      "Camões Institute scholarships",
      "University merit scholarships",
      "Erasmus+ mobility grants",
    ],
  },
  "czech republic": {
    name: "Czech Republic",
    flag: "/flags/cz.png",
    capital: "Prague",
    language: ["Czech", "English (international programs)"],
    currency: "Czech Koruna (CZK)",
    description:
      "Central European gem with prestigious universities, stunning architecture, and excellent value for education.",
    whyChoose: [
      "Beautiful historic cities, especially Prague",
      "Very affordable tuition and living costs",
      "Central European location",
      "Rich cultural heritage and architecture",
      "Growing international programs",
      "Safe and student-friendly environment",
    ],
    popularCourses: [
      "Engineering & Technology (Mechanical, Civil, Computer Engineering)",
      "Medicine & Healthcare (Medicine, Dentistry, Pharmacy)",
      "Business & Economics (International Business, Economics)",
      "Arts & Humanities (History, Fine Arts, Architecture)",
      "Sciences (Chemistry, Physics, Mathematics)",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies. Average wage: €4-7/hour",
      afterGraduation: "9 months post-graduation visa for job search",
      averageSalary: "€12,000 - €25,000/year with 70% employment rate",
    },
    livingCosts: "€400-700/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Long-term Student Visa",
      processingTime: "2-3 weeks",
      successRate: "80%",
      documents: ["University acceptance", "Financial proof (€350/month)", "Health insurance", "Clean criminal record"],
    },
    studentLife: {
      climate: "Continental climate with cold winters and warm summers",
      culture: "Rich history, beautiful architecture, famous beer culture, classical music",
      transportation: "Excellent public transport, especially in Prague",
      accommodation: [
        "Student dormitories (€100-200/month)",
        "Private apartments (€200-450/month)",
        "Shared housing (€150-300/month)",
      ],
    },
    scholarships: [
      "Czech government scholarships",
      "Visegrad Fund scholarships",
      "University merit scholarships",
      "Erasmus+ grants",
    ],
  },
  austria: {
    name: "Austria",
    flag: "/flags/at.png",
    capital: "Vienna",
    language: ["German", "English (international programs)"],
    currency: "Euro (€)",
    description:
      "Alpine nation known for music, culture, and high-quality education with strong emphasis on research and innovation.",
    whyChoose: [
      "Rich musical and cultural heritage",
      "Beautiful Alpine landscapes",
      "High quality of life and safety",
      "Strong research and innovation focus",
      "Central European location",
      "Excellent public transportation",
    ],
    popularCourses: [
      "Engineering & Technology (Mechanical, Electrical, Computer Engineering)",
      "Business & Management (International Business, Finance)",
      "Arts & Music (Music, Fine Arts, Performing Arts)",
      "Sciences (Medicine, Environmental Science, Physics)",
      "Social Sciences (Psychology, International Relations)",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies. Average wage: €10-14/hour",
      afterGraduation: "12 months post-graduation visa for job search",
      averageSalary: "€30,000 - €50,000/year with 82% employment rate",
    },
    livingCosts: "€700-1,200/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (Aufenthaltstitel)",
      processingTime: "4-8 weeks",
      successRate: "85%",
      documents: [
        "University acceptance",
        "Financial proof (€6,000/year)",
        "Health insurance",
        "German proficiency (if required)",
      ],
    },
    studentLife: {
      climate: "Continental climate with cold winters and warm summers",
      culture: "Classical music, opera, coffee house culture, Alpine traditions",
      transportation: "Excellent public transport and rail connections",
      accommodation: [
        "Student dormitories (€250-450/month)",
        "Private apartments (€400-800/month)",
        "Shared housing (€300-600/month)",
      ],
    },
    scholarships: [
      "Austrian government scholarships (OeAD)",
      "University merit scholarships",
      "Erasmus+ grants",
      "Private foundation scholarships",
    ],
  },
  belgium: {
    name: "Belgium",
    flag: "/flags/be.png",
    capital: "Brussels",
    language: ["Dutch", "French", "German", "English (international programs)"],
    currency: "Euro (€)",
    description:
      "Heart of Europe offering multilingual education, EU institutions proximity, and excellent chocolate and waffles.",
    whyChoose: [
      "Heart of European Union with EU institutions",
      "Multilingual environment (Dutch, French, German)",
      "High-quality education system",
      "Rich cultural heritage and history",
      "Excellent location in Western Europe",
      "Strong international business connections",
    ],
    popularCourses: [
      "European Studies & International Relations",
      "Business & Management (International Business, EU Law)",
      "Engineering & Technology (Chemical, Civil Engineering)",
      "Sciences (Medicine, Biotechnology, Environmental Science)",
      "Arts & Humanities (History, Fine Arts, Languages)",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies. Average wage: €10-15/hour",
      afterGraduation: "12 months post-graduation visa for job search",
      averageSalary: "€32,000 - €55,000/year with 85% employment rate",
    },
    livingCosts: "€800-1,300/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (Type D)",
      processingTime: "3-6 weeks",
      successRate: "88%",
      documents: ["University acceptance", "Financial proof (€670/month)", "Health insurance", "Clean criminal record"],
    },
    studentLife: {
      climate: "Temperate oceanic climate with mild summers and cool winters",
      culture: "Multilingual culture, famous for chocolate, beer, waffles, and EU politics",
      transportation: "Excellent public transport and rail connections throughout Europe",
      accommodation: [
        "Student housing (€300-500/month)",
        "Private apartments (€500-900/month)",
        "Shared housing (€400-700/month)",
      ],
    },
    scholarships: [
      "Belgian government scholarships",
      "VLIR-UOS scholarships",
      "University merit scholarships",
      "Erasmus+ grants",
    ],
  },
  hungary: {
    name: "Hungary",
    flag: "/flags/hu.png",
    capital: "Budapest",
    language: ["Hungarian", "English (international programs)"],
    currency: "Hungarian Forint (HUF)",
    description:
      "Central European country with strong medical and engineering programs, thermal baths, and rich cultural heritage.",
    whyChoose: [
      "Excellent medical and dental programs",
      "Very affordable tuition and living costs",
      "Beautiful capital city Budapest",
      "Rich thermal bath culture",
      "Strong engineering and technology programs",
      "Central European location",
    ],
    popularCourses: [
      "Medicine & Healthcare (Medicine, Dentistry, Veterinary Medicine)",
      "Engineering & Technology (Mechanical, Civil, Computer Engineering)",
      "Business & Economics (International Business, Economics)",
      "Sciences (Biotechnology, Chemistry, Physics)",
      "Arts & Humanities (History, Fine Arts, Music)",
    ],
    jobProspects: {
      duringStudy: "24 hours/week during studies. Average wage: €3-6/hour",
      afterGraduation: "9 months post-graduation visa for job search",
      averageSalary: "€10,000 - €22,000/year with 68% employment rate",
    },
    livingCosts: "€350-650/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (National Visa)",
      processingTime: "2-4 weeks",
      successRate: "82%",
      documents: ["University acceptance", "Financial proof (€340/month)", "Health insurance", "Clean criminal record"],
    },
    studentLife: {
      climate: "Continental climate with hot summers and cold winters",
      culture: "Rich history, thermal baths, traditional cuisine, vibrant nightlife in Budapest",
      transportation: "Good public transport in Budapest, affordable travel",
      accommodation: [
        "Student dormitories (€80-200/month)",
        "Private apartments (€200-450/month)",
        "Shared housing (€120-300/month)",
      ],
    },
    scholarships: [
      "Hungarian government scholarships (Stipendium Hungaricum)",
      "University merit scholarships",
      "Erasmus+ grants",
      "Visegrad Fund scholarships",
    ],
  },
  denmark: {
    name: "Denmark",
    flag: "/flags/dk.png",
    capital: "Copenhagen",
    language: ["Danish", "English (widely spoken)"],
    currency: "Danish Krone (DKK)",
    description:
      "Scandinavian country known for happiness, design, and innovative education system with strong work-life balance.",
    whyChoose: [
      "Consistently ranked among world's happiest countries",
      "Strong focus on sustainability and green technology",
      "Excellent work-life balance culture",
      "High-quality education and research",
      "Beautiful coastal landscapes",
      "Progressive and inclusive society",
    ],
    popularCourses: [
      "Engineering & Technology (Renewable Energy, Computer Science)",
      "Design & Architecture (Industrial Design, Architecture)",
      "Business & Management (International Business, Sustainability)",
      "Social Sciences (Psychology, Social Work, Education)",
      "Sciences (Environmental Science, Biotechnology, Medicine)",
    ],
    jobProspects: {
      duringStudy: "20 hours/week during studies. Average wage: €15-20/hour",
      afterGraduation: "24 months post-graduation visa for job search",
      averageSalary: "€45,000 - €70,000/year with 90% employment rate",
    },
    livingCosts: "€1,000-1,600/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (Residence Permit)",
      processingTime: "2-3 months",
      successRate: "85%",
      documents: ["University acceptance", "Financial proof (€1,000/month)", "Health insurance", "English proficiency"],
    },
    studentLife: {
      climate: "Temperate oceanic climate with mild summers and cool winters",
      culture: "Hygge lifestyle, design culture, cycling, sustainability focus, work-life balance",
      transportation: "Excellent cycling infrastructure and public transport",
      accommodation: [
        "Student housing (€400-700/month)",
        "Private apartments (€600-1,200/month)",
        "Shared housing (€500-900/month)",
      ],
    },
    scholarships: [
      "Danish government scholarships",
      "University merit scholarships",
      "Erasmus+ grants",
      "Nordic scholarship programs",
    ],
  },
  sweden: {
    name: "Sweden",
    flag: "/flags/se.png",
    capital: "Stockholm",
    language: ["Swedish", "English (widely spoken)"],
    currency: "Swedish Krona (SEK)",
    description:
      "Nordic country offering cutting-edge technology programs, sustainability focus, and high quality of life.",
    whyChoose: [
      "World leader in innovation and technology",
      "Strong focus on sustainability and environment",
      "High quality of life and social benefits",
      "Beautiful natural landscapes",
      "Progressive and inclusive society",
      "Home to global companies like IKEA, Volvo, Spotify",
    ],
    popularCourses: [
      "Engineering & Technology (Software Engineering, Automotive, Telecommunications)",
      "Environmental Studies & Sustainability",
      "Business & Management (International Business, Innovation Management)",
      "Design & Arts (Industrial Design, Game Design, Fine Arts)",
      "Sciences (Medicine, Biotechnology, Materials Science)",
    ],
    jobProspects: {
      duringStudy: "Limited work opportunities during studies",
      afterGraduation: "12 months post-graduation visa for job search",
      averageSalary: "€40,000 - €65,000/year with 88% employment rate",
    },
    livingCosts: "€900-1,500/month (including accommodation, food, transport)",
    visaRequirements: {
      type: "Student Visa (Residence Permit)",
      processingTime: "1-3 months",
      successRate: "80%",
      documents: ["University acceptance", "Financial proof (€8,370/year)", "Health insurance", "English proficiency"],
    },
    studentLife: {
      climate: "Continental climate with cold winters and mild summers",
      culture: "Innovation culture, sustainability focus, outdoor activities, design, and equality",
      transportation: "Excellent public transport and cycling infrastructure",
      accommodation: [
        "Student housing (€300-600/month)",
        "Private apartments (€500-1,000/month)",
        "Shared housing (€400-800/month)",
      ],
    },
    scholarships: [
      "Swedish Institute scholarships",
      "University merit scholarships",
      "Erasmus+ grants",
      "Nordic scholarship programs",
    ],
  },
}

interface CountryInfoModalProps {
  country: string
  isOpen: boolean
  onClose: () => void
}

export default function CountryInfoModal({ country, isOpen, onClose }: CountryInfoModalProps) {
  if (!isOpen) return null

  const info = countryInfo[country.toLowerCase()]
  if (!info) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <span className="text-4xl mr-4">{info.flag}</span>
              <div>
                <h2 className="text-3xl font-bold">Study in {info.name}</h2>
                <p className="text-indigo-100">
                  Capital: {info.capital} | Currency: {info.currency}
                </p>
              </div>
            </div>
            <button onClick={onClose} className="text-white hover:text-indigo-200 text-2xl">
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">{info.description}</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <span className="text-2xl mb-2 block">🗣️</span>
              <div className="text-sm font-semibold text-blue-600">Languages</div>
              <div className="text-xs text-gray-600">{info.language.join(", ")}</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <span className="text-2xl mb-2 block">💰</span>
              <div className="text-sm font-semibold text-green-600">Living Costs</div>
              <div className="text-xs text-gray-600">{info.livingCosts}</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <span className="text-2xl mb-2 block">💼</span>
              <div className="text-sm font-semibold text-purple-600">Avg. Salary</div>
              <div className="text-xs text-gray-600">{info.jobProspects.averageSalary}</div>
            </div>
          </div>

          {/* Why Choose */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Why Choose {info.name}?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {info.whyChoose.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 text-sm">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Popular Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {info.popularCourses.map((course, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <span className="text-gray-700 text-sm font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Job Prospects */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Job Prospects & Career Opportunities</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">During Study</h4>
                <p className="text-blue-700 text-sm">{info.jobProspects.duringStudy}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">After Graduation</h4>
                <p className="text-green-700 text-sm">{info.jobProspects.afterGraduation}</p>
                <p className="text-green-700 text-sm mt-1">Average Salary: {info.jobProspects.averageSalary}</p>
              </div>
            </div>
          </div>

          {/* Visa Requirements */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Visa Requirements</h3>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600">{info.visaRequirements.type}</div>
                  <div className="text-xs text-gray-600">Visa Type</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600">{info.visaRequirements.processingTime}</div>
                  <div className="text-xs text-gray-600">Processing Time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600">{info.visaRequirements.successRate}</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">Required Documents:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  {info.visaRequirements.documents.map((doc, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <span className="text-orange-500 mr-2">📄</span>
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Student Life */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Student Life & Culture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-pink-50 rounded-lg p-4">
                <h4 className="font-semibold text-pink-800 mb-2 flex items-center">
                  <span className="mr-2">🌤️</span>Climate
                </h4>
                <p className="text-pink-700 text-sm">{info.studentLife.climate}</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-800 mb-2 flex items-center">
                  <span className="mr-2">🎭</span>Culture
                </h4>
                <p className="text-indigo-700 text-sm">{info.studentLife.culture}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <span className="mr-2">🚌</span>Transportation
                </h4>
                <p className="text-green-700 text-sm">{info.studentLife.transportation}</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                  <span className="mr-2">🏠</span>Accommodation Options
                </h4>
                <div className="space-y-1">
                  {info.studentLife.accommodation.map((option, index) => (
                    <div key={index} className="text-yellow-700 text-sm">
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scholarships */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Available Scholarships</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {info.scholarships.map((scholarship, index) => (
                <div key={index} className="bg-yellow-50 rounded-lg p-3 flex items-center">
                  <span className="text-yellow-500 mr-3">🎓</span>
                  <span className="text-gray-700 text-sm font-medium">{scholarship}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-3">Ready to Start Your Journey to {info.name}?</h3>
            <p className="text-indigo-100 mb-4">Get personalized guidance from our education experts</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onClose}
                className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
              >
                Get Free Consultation
              </button>
              <button
                onClick={onClose}
                className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Submit Your Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
