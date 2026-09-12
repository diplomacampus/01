// Diploma Campus — Global Structured Data (assets/js/global-data.js)

window.DC_DATA = {
    meta: {
        siteName: "Diploma Campus",
        tagline: "Jharkhand Polytechnic, JUT Semesters & D2D Lateral Entry Hub",
        version: "2026.1",
        updatedAt: "2026-03-01"
    },

    announcements: [
        {
            id: "ann-01",
            type: "urgent",
            icon: "fa-bullhorn",
            badge: "Exam Alert",
            title: "Jharkhand Polytechnic (PECE 2026) Official Notification & Online Application forms released! Check dates & eligibility.",
            link: "exam-detail.html?id=jharkhand-polytechnic",
            active: true
        },
        {
            id: "ann-02",
            type: "info",
            icon: "fa-graduation-cap",
            badge: "D2D 2026",
            title: "BIT Sindri Lateral Entry (D2D) Syllabus, Previous 5-Year Question Papers & Mock Tests now available.",
            link: "d2d.html",
            active: true
        }
    ],

    community: {
        whatsapp_2025_28: "https://chat.whatsapp.com/BB67PLuAj3vIZs4jbF0SKc?mode=gi_t",
        whatsapp_2024_27: "https://chat.whatsapp.com/LFGSEy4uJsL4GcOL1rN2ui?mode=gi_t",
        whatsapp_channel: "https://whatsapp.com/channel/0029Vb7izReKAwEfwz7Ixl1q",
        telegram_channel: "https://t.me/diplomacampus",
        admin_email: "diplomacampus@gmail.com"
    },

    updates: [
        {
            id: "upd-01",
            title: "JCECEB PECE 2026 Polytechnic Entrance Examination Dates Announced",
            category: "Exam",
            date: "March 02, 2026",
            excerpt: "Jharkhand Combined Entrance Competitive Examination Board (JCECEB) has announced the tentative schedule for PECE 2026 for 1st Year Diploma admissions.",
            link: "exam-detail.html?id=jharkhand-polytechnic",
            badgeColor: "emerald"
        },
        {
            id: "upd-02",
            title: "JUT Ranchi Diploma Odd Semester (1st, 3rd, 5th) Exam Results Live",
            category: "Result",
            date: "February 24, 2026",
            excerpt: "Jharkhand University of Technology (JUT) has published the official gazette results for all polytechnic colleges. Students can check marks sheets now.",
            link: "resources.html",
            badgeColor: "blue"
        },
        {
            id: "upd-03",
            title: "Jharkhand D2D 2026: BIT Sindri & Govt Engineering College Seat Matrix",
            category: "Admission",
            date: "February 18, 2026",
            excerpt: "Detailed branch-wise seat distribution released for Diploma to Degree (Lateral Entry) admissions across government engineering colleges.",
            link: "d2d.html",
            badgeColor: "amber"
        },
        {
            id: "upd-04",
            title: "New Semester 4 & 6 Updated Model Syllabus & Question Bank Added",
            category: "Resource",
            date: "February 10, 2026",
            excerpt: "Complete updated syllabus modules and previous board question solutions have been organized for CSE, Mechanical, Civil, and Electrical streams.",
            link: "question-papers.html",
            badgeColor: "purple"
        },
        {
            id: "upd-05",
            title: "Government Polytechnic Adityapur Campus Placement Drive 2026",
            category: "College",
            date: "January 28, 2026",
            excerpt: "Tata Steel, L&T Construction, and JSW Steel successfully conducted campus recruitment for final year mechanical and electrical diploma students.",
            link: "college-detail.html?id=gp-adityapur",
            badgeColor: "teal"
        },
        {
            id: "upd-06",
            title: "PECE & D2D Full-Length Mock Test Series 2026 Launched",
            category: "Exam",
            date: "January 15, 2026",
            excerpt: "Practice with real exam timers, negative marking (-0.25), dynamic rank prediction, and instant answer explanations on our CBT test engine.",
            link: "test-series.html",
            badgeColor: "rose"
        }
    ],

    branches: [
        { id: "cse", name: "Computer Science & Engineering", short: "CSE", icon: "fa-laptop-code", color: "blue", count: 48, desc: "Programming in C/C++, Data Structures, DBMS, OS, Web Technologies, Computer Networks & AI.", page: "cse.html" },
        { id: "mech", name: "Mechanical Engineering", short: "MECH", icon: "fa-gears", color: "orange", count: 54, desc: "Thermodynamics, Strength of Materials (SOM), Fluid Mechanics, Theory of Machines & CAD/CAM.", page: "mech.html" },
        { id: "civil", name: "Civil Engineering", short: "CIVIL", icon: "fa-bridge", color: "stone", count: 62, desc: "Surveying, Building Materials, Concrete Technology, Hydraulics, Soil Mechanics & RCC Design.", page: "civil.html" },
        { id: "ee", name: "Electrical Engineering", short: "EE", icon: "fa-bolt", color: "yellow", count: 50, desc: "Electrical Circuits, AC/DC Machines, Power Systems, Transmission & Distribution & Switchgear.", page: "ee.html" },
        { id: "ece", name: "Electronics & Comm. Engineering", short: "ECE", icon: "fa-microchip", color: "emerald", count: 42, desc: "Digital Electronics, Microprocessors, Signals & Systems, Wireless Communication & Embedded IoT.", page: "ece.html" },
        { id: "eee", name: "Electrical & Electronics Engineering", short: "EEE", icon: "fa-plug", color: "violet", count: 38, desc: "Power Electronics, Control Systems, Microcontrollers, Electrical Drives & Instrumentation.", page: "eee.html" },
        { id: "auto", name: "Automobile Engineering", short: "AUTO", icon: "fa-car", color: "red", count: 26, desc: "IC Engines, Automotive Chassis & Transmission, EV Battery Tech, Vehicle Dynamics & Diagnosis.", page: "auto.html" },
        { id: "mining", name: "Mining Engineering", short: "MINING", icon: "fa-helmet-safety", color: "amber", count: 30, desc: "Surface & Underground Mining, Mine Surveying, Drilling & Blasting, Ventilation & Mine Safety.", page: "resources.html?branch=mining" },
        { id: "chem", name: "Chemical Engineering", short: "CHEM", icon: "fa-flask", color: "purple", count: 22, desc: "Process Calculations, Heat & Mass Transfer, Chemical Reaction Engg & Industrial Pollution.", page: "resources.html?branch=chem" },
        { id: "arch", name: "Architecture Assistantship", short: "ARCH", icon: "fa-pen-ruler", color: "teal", count: 18, desc: "Architectural Drawing, Building Construction, CAD Drafting, Landscape & Interior Design.", page: "resources.html?branch=arch" },
        { id: "common", name: "1st Year (Common to All)", short: "COMMON", icon: "fa-book-open-reader", color: "teal", count: 65, desc: "Applied Physics, Applied Chemistry, Engineering Mathematics 1 & 2, Engg Graphics & Communication.", page: "resources.html?branch=common" }
    ],

        colleges: [
    {
        "id": "gp-ranchi",
        "slug": "government-polytechnic-ranchi",
        "name": "Government Polytechnic, Ranchi",
        "shortName": "GP Ranchi",
        "rank": 1,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 23.3619,
        "lng": 85.334,
        "established": 1955,
        "district": "Ranchi",
        "location": "Opp. Barnabas Hospital, Church Rd, Bahu Bazar, Konka, Ranchi - 834001",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.9,
        "reviewsCount": 184,
        "image": "assets/images/colleges/gp-ranchi.jpg",
        "featured": true,
        "totalIntake": 300,
        "hostel": "Available (Boys & Girls)",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpranchi.org",
        "overview": "Premier #1 ranked government polytechnic institution of Jharkhand located at Church Road, Ranchi. Renowned for top merit rankers, state-of-the-art labs, and consistent placement drives in Tata Steel, JSW, and L&T.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 580,
                "cutoffCategory": 1400
            },
            {
                "name": "Computer Science & Engineering",
                "seats": 60,
                "cutoffGeneral": 240,
                "cutoffCategory": 780
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 450,
                "cutoffCategory": 1200
            },
            {
                "name": "Electronics & Communication Engineering",
                "seats": 60,
                "cutoffGeneral": 850,
                "cutoffCategory": 2100
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 620,
                "cutoffCategory": 1550
            }
        ],
        "facilities": [
            "Digital Library",
            "Modern CAD/CAM Lab",
            "Hostels with Mess",
            "High-speed Wi-Fi",
            "Sports Ground",
            "Auditorium",
            "Engineering Drawing Hall"
        ]
    },
    {
        "id": "gp-dhanbad",
        "slug": "government-polytechnic-dhanbad",
        "name": "Government Polytechnic, Dhanbad",
        "shortName": "GP Dhanbad",
        "rank": 2,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 23.7885,
        "lng": 86.4172,
        "established": 1958,
        "district": "Dhanbad",
        "location": "Polytechnic Road, Dhanbad, Jharkhand - 828130",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.8,
        "reviewsCount": 156,
        "image": "assets/images/colleges/gp-dhanbad.jpg",
        "featured": true,
        "totalIntake": 300,
        "hostel": "Available (Boys & Girls)",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpdhanbad.ac.in",
        "overview": "Situated in the coal and energy capital of India, GP Dhanbad offers 5 core engineering streams with premier workshop facilities and strong PSU connections.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 610,
                "cutoffCategory": 1480
            },
            {
                "name": "Computer Science and Engineering",
                "seats": 60,
                "cutoffGeneral": 410,
                "cutoffCategory": 1100
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 480,
                "cutoffCategory": 1250
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 520,
                "cutoffCategory": 1350
            },
            {
                "name": "Metallurgical Engineering",
                "seats": 60,
                "cutoffGeneral": 1100,
                "cutoffCategory": 2800
            }
        ],
        "facilities": [
            "Metallurgy Testing Labs",
            "Central Workshop",
            "Hostel",
            "Computer Center",
            "Gymnasium"
        ]
    },
    {
        "id": "gp-adityapur",
        "slug": "government-polytechnic-adityapur",
        "name": "Government Polytechnic, Adityapur",
        "shortName": "GP Adityapur",
        "rank": 3,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 22.7876,
        "lng": 86.1689,
        "established": 1980,
        "district": "Seraikela Kharsawan",
        "location": "Adityapur Industrial Area, Seraikela-Kharsawan, Jamshedpur - 832109",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.9,
        "reviewsCount": 192,
        "image": "assets/images/colleges/gp-adityapur.jpg",
        "featured": true,
        "totalIntake": 240,
        "hostel": "Available (Boys & Girls)",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpadityapur.ac.in",
        "overview": "Located adjacent to the Adityapur Industrial Area and Jamshedpur auto hub, GP Adityapur holds the highest placement record in eastern India for diploma engineers.",
        "branches": [
            {
                "name": "Computer Science and Engineering",
                "seats": 60,
                "cutoffGeneral": 320,
                "cutoffCategory": 850
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 260,
                "cutoffCategory": 690
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 180,
                "cutoffCategory": 520
            },
            {
                "name": "Metallurgical Engineering",
                "seats": 60,
                "cutoffGeneral": 650,
                "cutoffCategory": 1600
            }
        ],
        "facilities": [
            "Siemens Center of Excellence",
            "Modern CNC Labs",
            "Industrial Automation Lab",
            "Hostel",
            "Central Auditorium",
            "Computing Labs"
        ]
    },
    {
        "id": "gp-bhaga",
        "slug": "government-polytechnic-bhaga",
        "name": "Government Polytechnic Bhaga, Dhanbad",
        "shortName": "GP Bhaga",
        "rank": 4,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 23.712,
        "lng": 86.448,
        "established": 1905,
        "district": "Dhanbad",
        "location": "BIT Sindri Campus, PO: Motinagar, Dist: Dhanbad - 828120",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.7,
        "reviewsCount": 110,
        "image": "assets/images/colleges/gp-bhaga.jpg",
        "featured": true,
        "totalIntake": 240,
        "hostel": "Available (Boys & Girls)",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpbhaga.ac.in",
        "overview": "Established in 1905, GP Bhaga is one of India's oldest institutions for Mining and Core Engineering, featuring exclusive sponsored seats for Bharat Coking Coal Limited (BCCL) candidates.",
        "branches": [
            {
                "name": "Computer Engineering",
                "seats": 60,
                "cutoffGeneral": 520,
                "cutoffCategory": 1390
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 680,
                "cutoffCategory": 1750
            },
            {
                "name": "Mining Engineering",
                "seats": 60,
                "cutoffGeneral": 380,
                "cutoffCategory": 980
            },
            {
                "name": "Mining Engineering (For BCCL Candidates)",
                "seats": 60,
                "cutoffGeneral": 850,
                "cutoffCategory": 2200
            }
        ],
        "facilities": [
            "Advance Mine Surveying Lab",
            "Geological Museum",
            "Mining Models Center",
            "Computer Center",
            "Hostels"
        ]
    },
    {
        "id": "gp-bokaro",
        "slug": "government-polytechnic-khutri-bokaro",
        "name": "Government Polytechnic, Khutri (Bokaro)",
        "shortName": "GP Khutri",
        "rank": 5,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 23.684,
        "lng": 85.986,
        "established": 1984,
        "district": "Bokaro",
        "location": "Jainmore-Phusro Road, Khutri, Bokaro, Jharkhand - 829301",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.6,
        "reviewsCount": 98,
        "image": "assets/images/colleges/gp-bokaro.jpg",
        "featured": true,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpbokaro.ac.in",
        "overview": "Situated near Bokaro Steel City on Jainmore-Phusro Road, specializing in Automobile, Computer, and Mechanical streams with hands-on industrial workshops.",
        "branches": [
            {
                "name": "Automobile Engineering",
                "seats": 60,
                "cutoffGeneral": 1100,
                "cutoffCategory": 2900
            },
            {
                "name": "Computer Engineering",
                "seats": 60,
                "cutoffGeneral": 590,
                "cutoffCategory": 1450
            },
            {
                "name": "Mechanical Engineering (Automobile)",
                "seats": 60,
                "cutoffGeneral": 750,
                "cutoffCategory": 1900
            }
        ],
        "facilities": [
            "Automobile Workshop",
            "Engine Overhaul Lab",
            "Hostel",
            "Digital Library"
        ]
    },
    {
        "id": "gp-nirsa",
        "slug": "government-polytechnic-nirsa",
        "name": "Government Polytechnic Nirsa, Dhanbad",
        "shortName": "GP Nirsa",
        "rank": 6,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 23.7845,
        "lng": 86.711,
        "established": 2011,
        "district": "Dhanbad",
        "location": "Gopalganj, Post: Debiyana, Nirsa, Dhanbad - 828205",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.5,
        "reviewsCount": 88,
        "image": "assets/images/colleges/gp-nirsa.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available (Boys & Girls)",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpnirsa.gov.in",
        "overview": "Premier government institution in Dhanbad district offering prestigious courses in Mining Engineering, Civil, and Mechanical with direct ECL/BCCL field exposure.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 920,
                "cutoffCategory": 2450
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 850,
                "cutoffCategory": 2200
            },
            {
                "name": "Mining Engineering",
                "seats": 60,
                "cutoffGeneral": 450,
                "cutoffCategory": 1200
            }
        ],
        "facilities": [
            "Mine Surveying Lab",
            "Geology Gallery",
            "Sports Facility",
            "Hostel"
        ]
    },
    {
        "id": "gp-dumka",
        "slug": "government-polytechnic-dumka",
        "name": "Government Polytechnic, Dumka",
        "shortName": "GP Dumka",
        "rank": 7,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 24.2685,
        "lng": 87.251,
        "established": 1962,
        "district": "Dumka",
        "location": "At-Sonwadngal, PO-Shivpahar, PS-Dumka (M), Dist-Dumka - 814101",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.5,
        "reviewsCount": 79,
        "image": "assets/images/colleges/gp-dumka.jpg",
        "featured": false,
        "totalIntake": 240,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpdumka.in",
        "overview": "Key technical institution of Santhal Pargana offering standard diploma engineering in Civil, CSE, Electrical, and Mechanical disciplines.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 980,
                "cutoffCategory": 2600
            },
            {
                "name": "Computer Science and Engineering",
                "seats": 60,
                "cutoffGeneral": 750,
                "cutoffCategory": 1950
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1050,
                "cutoffCategory": 2800
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1200,
                "cutoffCategory": 3100
            }
        ],
        "facilities": [
            "Workshops",
            "Hostel",
            "Computer Lab",
            "Library"
        ]
    },
    {
        "id": "gp-koderma",
        "slug": "government-polytechnic-koderma",
        "name": "Government Polytechnic, Koderma",
        "shortName": "GP Koderma",
        "rank": 8,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 24.412,
        "lng": 85.765,
        "established": 2011,
        "district": "Koderma",
        "location": "Gohal, Jainagar (Near Parsabad Stn), Koderma - 825410",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.5,
        "reviewsCount": 72,
        "image": "assets/images/colleges/gp-koderma.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available (Boys & Girls)",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpkoderma.in",
        "overview": "Known for specialized streams in Mining, Computer, and Electronics & Communication engineering.",
        "branches": [
            {
                "name": "Computer Engineering",
                "seats": 60,
                "cutoffGeneral": 690,
                "cutoffCategory": 1750
            },
            {
                "name": "Electronics and Communication Engineering",
                "seats": 60,
                "cutoffGeneral": 1400,
                "cutoffCategory": 3500
            },
            {
                "name": "Mining Engineering",
                "seats": 60,
                "cutoffGeneral": 650,
                "cutoffCategory": 1700
            }
        ],
        "facilities": [
            "Mining Labs",
            "Electronics Circuit Lab",
            "Hostel",
            "Library"
        ]
    },
    {
        "id": "gp-latehar",
        "slug": "government-polytechnic-latehar",
        "name": "Government Polytechnic, Latehar",
        "shortName": "GP Latehar",
        "rank": 11,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 23.745,
        "lng": 84.498,
        "established": 2013,
        "district": "Latehar",
        "location": "Karamdih, Latehar, Jharkhand - 829206",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.4,
        "reviewsCount": 65,
        "image": "assets/images/colleges/gp-latehar.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gplatehar.org",
        "overview": "Modern government polytechnic equipped with state-of-the-art engineering laboratories in Civil, Electrical, and Mechanical streams.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1150,
                "cutoffCategory": 2900
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1200,
                "cutoffCategory": 3100
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1350,
                "cutoffCategory": 3400
            }
        ],
        "facilities": [
            "Modern Labs",
            "Hostel",
            "Library",
            "Playground"
        ]
    },
    {
        "id": "gp-khunti",
        "slug": "government-polytechnic-khunti",
        "name": "Government Polytechnic, Khunti",
        "shortName": "GP Khunti",
        "rank": 12,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 23.068,
        "lng": 85.275,
        "established": 2013,
        "district": "Khunti",
        "location": "Kala Mati Road, Khunti, Jharkhand - 835210",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.4,
        "reviewsCount": 58,
        "image": "assets/images/colleges/gp-khunti.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpkhunti.org",
        "overview": "Located near Ranchi capital zone, offering high quality technical diploma courses with modern campus infrastructure.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1050,
                "cutoffCategory": 2700
            },
            {
                "name": "Computer Science & Engineering",
                "seats": 60,
                "cutoffGeneral": 680,
                "cutoffCategory": 1750
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1250,
                "cutoffCategory": 3200
            }
        ],
        "facilities": [
            "Computer Lab",
            "Workshops",
            "Library",
            "Hostels"
        ]
    },
    {
        "id": "gp-simdega",
        "slug": "government-polytechnic-simdega",
        "name": "Government Polytechnic, Simdega",
        "shortName": "GP Simdega",
        "rank": 13,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 22.621,
        "lng": 84.512,
        "established": 2013,
        "district": "Simdega",
        "location": "Paikpara, Simdega, Jharkhand - 835223",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.3,
        "reviewsCount": 52,
        "image": "assets/images/colleges/gp-simdega.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpsimdega.org",
        "overview": "Dedicated government institute promoting engineering talent in southern Jharkhand with core engineering disciplines.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1250,
                "cutoffCategory": 3200
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1300,
                "cutoffCategory": 3300
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1400,
                "cutoffCategory": 3600
            }
        ],
        "facilities": [
            "Science & Technical Labs",
            "Hostel",
            "Library"
        ]
    },
    {
        "id": "gp-gumla",
        "slug": "government-polytechnic-gumla",
        "name": "Government Polytechnic, Gumla",
        "shortName": "GP Gumla",
        "rank": 14,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 23.042,
        "lng": 84.538,
        "established": 2013,
        "district": "Gumla",
        "location": "Kargil Chowk Road, Gumla, Jharkhand - 835207",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.4,
        "reviewsCount": 60,
        "image": "assets/images/colleges/gp-gumla.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpgumla.org",
        "overview": "Focusing on Civil, Electrical, and Automobile engineering education for tribal and general merit candidates.",
        "branches": [
            {
                "name": "Automobile Engineering",
                "seats": 60,
                "cutoffGeneral": 1350,
                "cutoffCategory": 3500
            },
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1100,
                "cutoffCategory": 2800
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1200,
                "cutoffCategory": 3050
            }
        ],
        "facilities": [
            "Auto Lab",
            "Electrical Machine Lab",
            "Hostels"
        ]
    },
    {
        "id": "gp-lohardaga",
        "slug": "government-polytechnic-lohardaga",
        "name": "Government Polytechnic, Lohardaga",
        "shortName": "GP Lohardaga",
        "rank": 15,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 23.438,
        "lng": 84.675,
        "established": 2014,
        "district": "Lohardaga",
        "location": "Kisko Road, Lohardaga, Jharkhand - 835302",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.3,
        "reviewsCount": 48,
        "image": "assets/images/colleges/gp-lohardaga.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gplohardaga.org",
        "overview": "Modern academic campus with high technology workshops and training centers.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1180,
                "cutoffCategory": 3000
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1320,
                "cutoffCategory": 3350
            },
            {
                "name": "Mining Engineering",
                "seats": 60,
                "cutoffGeneral": 850,
                "cutoffCategory": 2200
            }
        ],
        "facilities": [
            "Workshops",
            "Library",
            "Hostel"
        ]
    },
    {
        "id": "gp-garhwa",
        "slug": "government-polytechnic-garhwa",
        "name": "Government Polytechnic, Garhwa",
        "shortName": "GP Garhwa",
        "rank": 16,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 24.158,
        "lng": 83.805,
        "established": 2014,
        "district": "Garhwa",
        "location": "Karamdih, Garhwa, Jharkhand - 822114",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.3,
        "reviewsCount": 45,
        "image": "assets/images/colleges/gp-garhwa.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpgarhwa.org",
        "overview": "North-western Jharkhand government technical institution offering core branches.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1200,
                "cutoffCategory": 3100
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1280,
                "cutoffCategory": 3250
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1380,
                "cutoffCategory": 3500
            }
        ],
        "facilities": [
            "Modern CAD Lab",
            "Hostel",
            "Sports Complex"
        ]
    },
    {
        "id": "gp-godda",
        "slug": "government-polytechnic-godda",
        "name": "Government Polytechnic, Godda",
        "shortName": "GP Godda",
        "rank": 17,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 24.831,
        "lng": 87.218,
        "established": 2015,
        "district": "Godda",
        "location": "Sikatia, Godda, Jharkhand - 814133",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.3,
        "reviewsCount": 50,
        "image": "assets/images/colleges/gp-godda.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpgodda.org",
        "overview": "Located in Santhal Pargana region with modern academic infrastructure.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1150,
                "cutoffCategory": 2950
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1220,
                "cutoffCategory": 3100
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1350,
                "cutoffCategory": 3450
            }
        ],
        "facilities": [
            "Library",
            "Computer Lab",
            "Hostel"
        ]
    },
    {
        "id": "gp-sahebganj",
        "slug": "government-polytechnic-sahebganj",
        "name": "Government Polytechnic, Sahebganj",
        "shortName": "GP Sahebganj",
        "rank": 18,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 25.239,
        "lng": 87.638,
        "established": 2015,
        "district": "Sahebganj",
        "location": "Sakrogarh, Sahebganj, Jharkhand - 816109",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.4,
        "reviewsCount": 54,
        "image": "assets/images/colleges/gp-sahebganj.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpsahebganj.org",
        "overview": "Situated along the Ganges river valley offering standard technical diploma programs.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1100,
                "cutoffCategory": 2850
            },
            {
                "name": "Computer Science & Engineering",
                "seats": 60,
                "cutoffGeneral": 780,
                "cutoffCategory": 1980
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1200,
                "cutoffCategory": 3050
            }
        ],
        "facilities": [
            "High-speed Wi-Fi",
            "Computer Labs",
            "Hostels"
        ]
    },
    {
        "id": "gp-pakur",
        "slug": "government-polytechnic-pakur",
        "name": "Government Polytechnic, Pakur",
        "shortName": "GP Pakur",
        "rank": 19,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 24.63,
        "lng": 87.842,
        "established": 2015,
        "district": "Pakur",
        "location": "Pakur-Dumka Highway, Pakur, Jharkhand - 816107",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.2,
        "reviewsCount": 42,
        "image": "assets/images/colleges/gp-pakur.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gppakur.org",
        "overview": "Government polytechnic in Pakur district offering engineering diploma courses.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1220,
                "cutoffCategory": 3100
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1300,
                "cutoffCategory": 3300
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1420,
                "cutoffCategory": 3600
            }
        ],
        "facilities": [
            "Library",
            "Workshop",
            "Hostel"
        ]
    },
    {
        "id": "gp-jamtara",
        "slug": "government-polytechnic-jamtara",
        "name": "Government Polytechnic, Jamtara",
        "shortName": "GP Jamtara",
        "rank": 20,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 23.958,
        "lng": 86.798,
        "established": 2016,
        "district": "Jamtara",
        "location": "Karmatanr Road, Jamtara, Jharkhand - 815351",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.3,
        "reviewsCount": 49,
        "image": "assets/images/colleges/gp-jamtara.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpjamtara.org",
        "overview": "Modern polytechnic offering CSE, Civil, and Mechanical engineering.",
        "branches": [
            {
                "name": "Computer Science & Engineering",
                "seats": 60,
                "cutoffGeneral": 720,
                "cutoffCategory": 1850
            },
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1140,
                "cutoffCategory": 2900
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1340,
                "cutoffCategory": 3400
            }
        ],
        "facilities": [
            "Computer Center",
            "Workshops",
            "Library"
        ]
    },
    {
        "id": "gp-jagannathpur",
        "slug": "government-polytechnic-jagannathpur",
        "name": "Government Polytechnic, Jagannathpur",
        "shortName": "GP Jagannathpur",
        "rank": 21,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "emerald",
        "lat": 22.228,
        "lng": 85.648,
        "established": 2015,
        "district": "West Singhbhum",
        "location": "Jagannathpur, Chaibasa, West Singhbhum - 833214",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.3,
        "reviewsCount": 46,
        "image": "assets/images/colleges/gp-jagannathpur.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 2,050 / Year",
        "website": "https://gpjagannathpur.org",
        "overview": "Government technical institute catering to West Singhbhum mining and industrial corridor.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1180,
                "cutoffCategory": 3000
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1320,
                "cutoffCategory": 3350
            },
            {
                "name": "Mining Engineering",
                "seats": 60,
                "cutoffGeneral": 820,
                "cutoffCategory": 2100
            }
        ],
        "facilities": [
            "Mining Models Lab",
            "Hostel",
            "Central Library"
        ]
    },
    {
        "id": "wp-ranchi",
        "slug": "government-womens-polytechnic-ranchi",
        "name": "Government Women's Polytechnic, Ranchi",
        "shortName": "GWP Ranchi",
        "rank": 9,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "purple",
        "lat": 23.332,
        "lng": 85.318,
        "established": 1988,
        "district": "Ranchi",
        "location": "At-Tharpakhna Near Plaza Chowk Jail Road, Ranchi - 834001",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.7,
        "reviewsCount": 104,
        "image": "assets/images/colleges/wp-ranchi.jpg",
        "featured": true,
        "totalIntake": 180,
        "hostel": "Available (Dedicated Girls Hostel)",
        "feesAnnual": "₹ 1,800 / Year",
        "website": "https://gwpranchi.org",
        "overview": "Premier women's technical institute in Jharkhand providing top notch education in Computer Science, Electrical, and Electronics & Communication.",
        "branches": [
            {
                "name": "Computer Science and Engineering",
                "seats": 60,
                "cutoffGeneral": 600,
                "cutoffCategory": 1500
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1100,
                "cutoffCategory": 2600
            },
            {
                "name": "Electronics and Communication Engineering",
                "seats": 60,
                "cutoffGeneral": 1250,
                "cutoffCategory": 3100
            }
        ],
        "facilities": [
            "Girls Hostel with Security",
            "Software Labs",
            "Digital Drawing Studios",
            "Library"
        ]
    },
    {
        "id": "wp-gamharia",
        "slug": "government-womens-polytechnic-jamshedpur-gamharia",
        "name": "Government Women's Polytechnic, Jamshedpur (Gamharia)",
        "shortName": "GWP Gamharia",
        "rank": 10,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "purple",
        "lat": 22.812,
        "lng": 86.096,
        "established": 2011,
        "district": "Seraikela Kharsawan",
        "location": "Near Thana More, Gamharia, Jamshedpur - 832108",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.6,
        "reviewsCount": 85,
        "image": "assets/images/colleges/wp-gamharia.jpg",
        "featured": false,
        "totalIntake": 240,
        "hostel": "Available (Girls Hostel)",
        "feesAnnual": "₹ 1,800 / Year",
        "website": "https://gwpgamharia.org",
        "overview": "Situated in the Jamshedpur auto hub, offering top core placements for female diploma engineers in Civil, CSE, ECE, and Mechanical.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1100,
                "cutoffCategory": 2800
            },
            {
                "name": "Computer Science and Engineering",
                "seats": 60,
                "cutoffGeneral": 550,
                "cutoffCategory": 1400
            },
            {
                "name": "Electronics and Communication Engineering",
                "seats": 60,
                "cutoffGeneral": 1250,
                "cutoffCategory": 3100
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 950,
                "cutoffCategory": 2400
            }
        ],
        "facilities": [
            "Girls Hostel",
            "Modern Computer Labs",
            "Placement Cell"
        ]
    },
    {
        "id": "wp-bokaro",
        "slug": "government-womens-polytechnic-bokaro",
        "name": "Government Women's Polytechnic, Bokaro",
        "shortName": "GWP Bokaro",
        "rank": 22,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "purple",
        "lat": 23.672,
        "lng": 86.143,
        "established": 2014,
        "district": "Bokaro",
        "location": "Sector 3, Bokaro Steel City, Jharkhand - 827003",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.5,
        "reviewsCount": 71,
        "image": "assets/images/colleges/wp-bokaro.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 1,800 / Year",
        "website": "https://gwpbokaro.org",
        "overview": "Exclusive women's technical college in Bokaro Steel City offering CSE, ECE, and Electrical.",
        "branches": [
            {
                "name": "Computer Science & Engineering",
                "seats": 60,
                "cutoffGeneral": 620,
                "cutoffCategory": 1550
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1150,
                "cutoffCategory": 2750
            },
            {
                "name": "Electronics & Communication",
                "seats": 60,
                "cutoffGeneral": 1300,
                "cutoffCategory": 3200
            }
        ],
        "facilities": [
            "Secure Hostel",
            "Computer Lab",
            "Library"
        ]
    },
    {
        "id": "wp-dumka",
        "slug": "government-womens-polytechnic-dumka",
        "name": "Government Women's Polytechnic, Dumka",
        "shortName": "GWP Dumka",
        "rank": 23,
        "category": "Polytechnic",
        "type": "Government",
        "markerColor": "purple",
        "lat": 24.275,
        "lng": 87.24,
        "established": 2015,
        "district": "Dumka",
        "location": "Kathikund Road, Dumka, Jharkhand - 814101",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.4,
        "reviewsCount": 56,
        "image": "assets/images/colleges/wp-dumka.jpg",
        "featured": false,
        "totalIntake": 180,
        "hostel": "Available",
        "feesAnnual": "₹ 1,800 / Year",
        "website": "https://gwpdumka.org",
        "overview": "Empowering female technical candidates in Santhal Pargana division.",
        "branches": [
            {
                "name": "Computer Science & Engineering",
                "seats": 60,
                "cutoffGeneral": 700,
                "cutoffCategory": 1800
            },
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1120,
                "cutoffCategory": 2850
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1220,
                "cutoffCategory": 3080
            }
        ],
        "facilities": [
            "Hostel",
            "Modern Classrooms",
            "IT Lab"
        ]
    },
    {
        "id": "gp-baharagora",
        "slug": "government-polytechnic-baharagora",
        "name": "Government Polytechnic, Baharagora (PPP Model)",
        "shortName": "GP Baharagora",
        "rank": 24,
        "category": "Polytechnic",
        "type": "PPP",
        "markerColor": "blue",
        "lat": 22.278,
        "lng": 86.715,
        "established": 2017,
        "district": "East Singhbhum",
        "location": "Baharagora, East Singhbhum, Jharkhand - 832101",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.5,
        "reviewsCount": 68,
        "image": "assets/images/colleges/gp-baharagora.jpg",
        "featured": false,
        "totalIntake": 300,
        "hostel": "Available (Boys & Girls)",
        "feesAnnual": "Govt Quota: ₹ 2,050 / Year • Management: ₹ 35,000 / Year",
        "website": "https://gpbaharagora.edu.in",
        "overview": "Run under Public-Private Partnership offering top infrastructure with corporate training tie-ups.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1400,
                "cutoffCategory": 3600
            },
            {
                "name": "Computer Science & Engineering",
                "seats": 60,
                "cutoffGeneral": 880,
                "cutoffCategory": 2200
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1450,
                "cutoffCategory": 3700
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1500,
                "cutoffCategory": 3900
            },
            {
                "name": "Mining Engineering",
                "seats": 60,
                "cutoffGeneral": 920,
                "cutoffCategory": 2400
            }
        ],
        "facilities": [
            "Modern CAD Labs",
            "Hostels",
            "Sports Ground",
            "Wi-Fi Campus"
        ]
    },
    {
        "id": "gp-chandil",
        "slug": "government-polytechnic-chandil",
        "name": "Government Polytechnic, Chandil (PPP Model)",
        "shortName": "GP Chandil",
        "rank": 25,
        "category": "Polytechnic",
        "type": "PPP",
        "markerColor": "blue",
        "lat": 22.965,
        "lng": 86.05,
        "established": 2017,
        "district": "Seraikela Kharsawan",
        "location": "Chandil, Seraikela-Kharsawan, Jharkhand - 832401",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.4,
        "reviewsCount": 62,
        "image": "assets/images/colleges/gp-chandil.jpg",
        "featured": false,
        "totalIntake": 300,
        "hostel": "Available",
        "feesAnnual": "Govt Quota: ₹ 2,050 / Year • Management: ₹ 35,000 / Year",
        "website": "https://gpchandil.edu.in",
        "overview": "PPP institution located near Jamshedpur industrial area with strong core engineering focus.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1380,
                "cutoffCategory": 3500
            },
            {
                "name": "Computer Science & Engineering",
                "seats": 60,
                "cutoffGeneral": 850,
                "cutoffCategory": 2150
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1420,
                "cutoffCategory": 3650
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1480,
                "cutoffCategory": 3800
            }
        ],
        "facilities": [
            "Robotics Center",
            "Hostel",
            "Central Library"
        ]
    },
    {
        "id": "gp-silli",
        "slug": "government-polytechnic-silli",
        "name": "Government Polytechnic, Silli (PPP Model)",
        "shortName": "GP Silli",
        "rank": 26,
        "category": "Polytechnic",
        "type": "PPP",
        "markerColor": "blue",
        "lat": 23.3512,
        "lng": 85.852,
        "established": 2013,
        "district": "Ranchi",
        "location": "Muri-Silli Road, Silli, Ranchi, Jharkhand - 835102",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.5,
        "reviewsCount": 75,
        "image": "assets/images/colleges/gp-silli.jpg",
        "featured": false,
        "totalIntake": 300,
        "hostel": "Available",
        "feesAnnual": "Govt Quota: ₹ 2,050 / Year • Management: ₹ 35,000 / Year",
        "website": "https://gpsilli.org",
        "overview": "Reputed PPP institute near Ranchi known for CSE, ECE, Civil, and Mechanical diploma training.",
        "branches": [
            {
                "name": "Computer Science & Engineering",
                "seats": 60,
                "cutoffGeneral": 790,
                "cutoffCategory": 2050
            },
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1300,
                "cutoffCategory": 3400
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1350,
                "cutoffCategory": 3500
            },
            {
                "name": "Electronics & Comm.",
                "seats": 60,
                "cutoffGeneral": 1600,
                "cutoffCategory": 4100
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1420,
                "cutoffCategory": 3700
            }
        ],
        "facilities": [
            "Modern IT Labs",
            "Central Workshop",
            "Hostels"
        ]
    },
    {
        "id": "gp-madhupur",
        "slug": "government-polytechnic-madhupur",
        "name": "Government Polytechnic, Madhupur (PPP Model)",
        "shortName": "GP Madhupur",
        "rank": 27,
        "category": "Polytechnic",
        "type": "PPP",
        "markerColor": "blue",
        "lat": 24.262,
        "lng": 86.645,
        "established": 2017,
        "district": "Deoghar",
        "location": "Madhupur, Deoghar, Jharkhand - 815353",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.3,
        "reviewsCount": 54,
        "image": "assets/images/colleges/gp-madhupur.jpg",
        "featured": false,
        "totalIntake": 300,
        "hostel": "Available",
        "feesAnnual": "Govt Quota: ₹ 2,050 / Year • Management: ₹ 35,000 / Year",
        "website": "https://gpmadhupur.edu.in",
        "overview": "PPP polytechnic in Deoghar district providing career-ready engineering diplomas.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1420,
                "cutoffCategory": 3600
            },
            {
                "name": "Computer Science & Engineering",
                "seats": 60,
                "cutoffGeneral": 890,
                "cutoffCategory": 2250
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1460,
                "cutoffCategory": 3750
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1520,
                "cutoffCategory": 3950
            }
        ],
        "facilities": [
            "Library",
            "Computer Lab",
            "Hostel"
        ]
    },
    {
        "id": "gp-gola",
        "slug": "government-polytechnic-gola",
        "name": "Government Polytechnic, Gola (PPP Model)",
        "shortName": "GP Gola",
        "rank": 28,
        "category": "Polytechnic",
        "type": "PPP",
        "markerColor": "blue",
        "lat": 23.535,
        "lng": 85.718,
        "established": 2017,
        "district": "Ramgarh",
        "location": "Gola, Ramgarh, Jharkhand - 829110",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.4,
        "reviewsCount": 59,
        "image": "assets/images/colleges/gp-gola.jpg",
        "featured": false,
        "totalIntake": 300,
        "hostel": "Available",
        "feesAnnual": "Govt Quota: ₹ 2,050 / Year • Management: ₹ 35,000 / Year",
        "website": "https://gpgola.edu.in",
        "overview": "Located in the industrial coal-mining belt of Ramgarh offering high placement linkages.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 60,
                "cutoffGeneral": 1350,
                "cutoffCategory": 3450
            },
            {
                "name": "Electrical Engineering",
                "seats": 60,
                "cutoffGeneral": 1380,
                "cutoffCategory": 3550
            },
            {
                "name": "Mechanical Engineering",
                "seats": 60,
                "cutoffGeneral": 1450,
                "cutoffCategory": 3750
            },
            {
                "name": "Mining Engineering",
                "seats": 60,
                "cutoffGeneral": 950,
                "cutoffCategory": 2450
            }
        ],
        "facilities": [
            "Mining Labs",
            "Hostels",
            "Sports Ground"
        ]
    },
    {
        "id": "alkabir-jamshedpur",
        "slug": "al-kabir-polytechnic-jamshedpur",
        "name": "Al-Kabir Polytechnic, Jamshedpur",
        "shortName": "Al Kabir",
        "rank": 29,
        "category": "Polytechnic",
        "type": "Private",
        "markerColor": "amber",
        "lat": 22.825,
        "lng": 86.218,
        "established": 1990,
        "district": "East Singhbhum",
        "location": "Kabirnagar, Mango, Jamshedpur, Jharkhand - 831012",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.7,
        "reviewsCount": 165,
        "image": "assets/images/colleges/alkabir-jamshedpur.jpg",
        "featured": true,
        "totalIntake": 540,
        "hostel": "Available (Boys & Girls)",
        "feesAnnual": "₹ 55,000 / Year",
        "website": "https://alkabir.in",
        "overview": "Top ranked private polytechnic in Jharkhand with phenomenal placements in Tata Group, Jindal, and multinationals.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 120,
                "cutoffGeneral": 1800,
                "cutoffCategory": 4500
            },
            {
                "name": "Computer Science & Engineering",
                "seats": 120,
                "cutoffGeneral": 1200,
                "cutoffCategory": 3100
            },
            {
                "name": "Electrical Engineering",
                "seats": 120,
                "cutoffGeneral": 1600,
                "cutoffCategory": 4000
            },
            {
                "name": "Electronics Engineering",
                "seats": 60,
                "cutoffGeneral": 2200,
                "cutoffCategory": 5500
            },
            {
                "name": "Mechanical Engineering",
                "seats": 120,
                "cutoffGeneral": 1700,
                "cutoffCategory": 4200
            }
        ],
        "facilities": [
            "Advanced CNC Center",
            "High-Tech Computer Labs",
            "Hostels",
            "Mega Auditorium",
            "Sports Arena"
        ]
    },
    {
        "id": "kk-polytechnic-dhanbad",
        "slug": "kk-polytechnic-govindpur-dhanbad",
        "name": "K.K. Polytechnic, Govindpur (Dhanbad)",
        "shortName": "KK Polytechnic",
        "rank": 30,
        "category": "Polytechnic",
        "type": "Private",
        "markerColor": "amber",
        "lat": 23.834,
        "lng": 86.512,
        "established": 2006,
        "district": "Dhanbad",
        "location": "Nagnagar, Govindpur, Dhanbad, Jharkhand - 828109",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.5,
        "reviewsCount": 120,
        "image": "assets/images/colleges/kk-polytechnic.jpg",
        "featured": false,
        "totalIntake": 480,
        "hostel": "Available",
        "feesAnnual": "₹ 48,000 / Year",
        "website": "https://kkpolytechnic.ac.in",
        "overview": "Prominent private polytechnic in Dhanbad offering Civil, Mechanical, Electrical, Mining, and Automobile streams.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 120,
                "cutoffGeneral": 2100,
                "cutoffCategory": 5000
            },
            {
                "name": "Mechanical Engineering",
                "seats": 120,
                "cutoffGeneral": 2200,
                "cutoffCategory": 5200
            },
            {
                "name": "Electrical Engineering",
                "seats": 120,
                "cutoffGeneral": 2000,
                "cutoffCategory": 4900
            },
            {
                "name": "Mining Engineering",
                "seats": 60,
                "cutoffGeneral": 1500,
                "cutoffCategory": 3800
            },
            {
                "name": "Automobile Engineering",
                "seats": 60,
                "cutoffGeneral": 2500,
                "cutoffCategory": 5800
            }
        ],
        "facilities": [
            "Central Workshop",
            "Hostel",
            "Transport Bus Service",
            "Library"
        ]
    },
    {
        "id": "ramgovind-koderma",
        "slug": "ramgovind-institute-of-technology-koderma",
        "name": "Ramgovind Institute of Technology, Koderma",
        "shortName": "Ramgovind Koderma",
        "rank": 31,
        "category": "Polytechnic",
        "type": "Private",
        "markerColor": "amber",
        "lat": 24.432,
        "lng": 85.621,
        "established": 2008,
        "district": "Koderma",
        "location": "Mahuatanr, Karma, Jhumri Telaiya, Koderma - 825409",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.3,
        "reviewsCount": 80,
        "image": "assets/images/colleges/ramgovind-koderma.jpg",
        "featured": false,
        "totalIntake": 360,
        "hostel": "Available",
        "feesAnnual": "₹ 45,000 / Year",
        "website": "https://rgit.ac.in",
        "overview": "Private technical campus in Jhumri Telaiya offering Diploma in Engineering and B.Tech degrees.",
        "branches": [
            {
                "name": "Civil Engineering",
                "seats": 90,
                "cutoffGeneral": 2300,
                "cutoffCategory": 5400
            },
            {
                "name": "Computer Science & Engineering",
                "seats": 60,
                "cutoffGeneral": 1600,
                "cutoffCategory": 4100
            },
            {
                "name": "Electrical Engineering",
                "seats": 90,
                "cutoffGeneral": 2200,
                "cutoffCategory": 5200
            },
            {
                "name": "Mechanical Engineering",
                "seats": 120,
                "cutoffGeneral": 2400,
                "cutoffCategory": 5600
            }
        ],
        "facilities": [
            "Hostels",
            "Library",
            "Workshops"
        ]
    },
    {
        "id": "bit-sindri-d2d",
        "slug": "bit-sindri-lateral-entry",
        "name": "BIT Sindri (D2D / B.Tech Lateral Entry)",
        "shortName": "BIT Sindri",
        "rank": 1,
        "category": "B.Tech Lateral Entry",
        "type": "Government",
        "markerColor": "rose",
        "lat": 23.6534,
        "lng": 86.474,
        "established": 1949,
        "district": "Dhanbad",
        "location": "Sindri, Dhanbad, Jharkhand - 828123",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.9,
        "reviewsCount": 350,
        "image": "assets/images/colleges/bit-sindri.jpg",
        "featured": true,
        "totalIntake": 68,
        "hostel": "Available for all lateral students",
        "feesAnnual": "₹ 15,000 / Year",
        "website": "https://bitsindri.ac.in",
        "overview": "The #1 choice for Diploma to Degree (D2D) lateral entry in Jharkhand. 10% supernumerary seats in all B.Tech branches for top polytechnic rankers with average placement of ₹ 7.5 LPA.",
        "branches": [
            {
                "name": "B.Tech Computer Science & Engg (Lateral)",
                "seats": 8,
                "cutoffGeneral": 15,
                "cutoffCategory": 45
            },
            {
                "name": "B.Tech Information Technology (Lateral)",
                "seats": 6,
                "cutoffGeneral": 25,
                "cutoffCategory": 60
            },
            {
                "name": "B.Tech Electrical Engineering (Lateral)",
                "seats": 10,
                "cutoffGeneral": 30,
                "cutoffCategory": 85
            },
            {
                "name": "B.Tech Mechanical Engineering (Lateral)",
                "seats": 12,
                "cutoffGeneral": 25,
                "cutoffCategory": 70
            },
            {
                "name": "B.Tech Civil Engineering (Lateral)",
                "seats": 10,
                "cutoffGeneral": 35,
                "cutoffCategory": 95
            },
            {
                "name": "B.Tech Electronics & Comm. (Lateral)",
                "seats": 8,
                "cutoffGeneral": 35,
                "cutoffCategory": 90
            },
            {
                "name": "B.Tech Mining Engineering (Lateral)",
                "seats": 6,
                "cutoffGeneral": 40,
                "cutoffCategory": 110
            },
            {
                "name": "B.Tech Metallurgical Engineering (Lateral)",
                "seats": 6,
                "cutoffGeneral": 50,
                "cutoffCategory": 130
            },
            {
                "name": "B.Tech Chemical Engineering (Lateral)",
                "seats": 6,
                "cutoffGeneral": 50,
                "cutoffCategory": 130
            },
            {
                "name": "B.Tech Production Engineering (Lateral)",
                "seats": 6,
                "cutoffGeneral": 65,
                "cutoffCategory": 160
            }
        ],
        "facilities": [
            "Siemens Center of Excellence & Robotics Lab",
            "Central Research Labs",
            "Supercomputing Center",
            "Hostels (25+)",
            "Alumni Network"
        ],
        "gallery": [
            {
                "title": "450-Acre Campus Aerial Panorama",
                "image": "assets/images/colleges/bit-sindri-aerial.jpg",
                "icon": "fa-plane-departure"
            },
            {
                "title": "Lush Green Academic Complex Panorama",
                "image": "assets/images/colleges/bit-sindri-campus-lush.jpg",
                "icon": "fa-mountain-sun"
            },
            {
                "title": "Iconic Main Academic Building",
                "image": "assets/images/colleges/bit-sindri-academic.jpg",
                "icon": "fa-building-columns"
            },
            {
                "title": "Siemens Centre of Excellence & Robotics Lab",
                "image": "assets/images/colleges/bit-sindri-robotics.jpg",
                "icon": "fa-robot"
            },
            {
                "title": "Electrical Engineering Society Seminar Hall",
                "image": "assets/images/colleges/bit-sindri-seminar.jpg",
                "icon": "fa-users-line"
            },
            {
                "title": "Executive Seminar & Audio-Visual Conference Hall",
                "image": "assets/images/colleges/bit-sindri-conference-hall.jpg",
                "icon": "fa-microphone"
            },
            {
                "title": "Smart Classroom & Technical Lecture Hall",
                "image": "assets/images/colleges/bit-sindri-classroom.jpg",
                "icon": "fa-chalkboard-user"
            },
            {
                "title": "Annual Convocation & Cultural Mega Stage",
                "image": "assets/images/colleges/bit-sindri-annual-fest.jpg",
                "icon": "fa-award"
            }
        ]
    },
    {
        "id": "ucet-hazaribag",
        "slug": "ucet-vinoba-bhave-university",
        "name": "University College of Engineering & Tech (UCET VBU Hazaribag)",
        "shortName": "UCET Hazaribag",
        "rank": 2,
        "category": "B.Tech Lateral Entry",
        "type": "Government",
        "markerColor": "rose",
        "lat": 23.998,
        "lng": 85.358,
        "established": 2009,
        "district": "Hazaribag",
        "location": "VBU Campus, Hazaribag, Jharkhand - 825301",
        "affiliation": "Vinoba Bhave University (VBU)",
        "approval": "AICTE Approved",
        "rating": 4.6,
        "reviewsCount": 145,
        "image": "assets/images/colleges/ucet-hazaribag.jpg",
        "featured": true,
        "totalIntake": 45,
        "hostel": "Available (Boys & Girls)",
        "feesAnnual": "₹ 45,000 / Year",
        "website": "https://ucetvbu.ac.in",
        "overview": "Premier constituent government university engineering college of Vinoba Bhave University offering prestigious B.Tech Lateral Entry seats for diploma holders.",
        "branches": [
            {
                "name": "B.Tech Computer Science & Engg (Lateral)",
                "seats": 12,
                "cutoffGeneral": 120,
                "cutoffCategory": 320
            },
            {
                "name": "B.Tech Information Technology (Lateral)",
                "seats": 10,
                "cutoffGeneral": 160,
                "cutoffCategory": 380
            },
            {
                "name": "B.Tech Electronics & Comm. (Lateral)",
                "seats": 12,
                "cutoffGeneral": 190,
                "cutoffCategory": 420
            },
            {
                "name": "B.Tech Mechanical Engineering (Lateral)",
                "seats": 11,
                "cutoffGeneral": 220,
                "cutoffCategory": 480
            }
        ],
        "facilities": [
            "University Central Library",
            "Advanced IT Labs",
            "University Hostels",
            "Placement Cell",
            "Mechanical Workshops"
        ]
    },
    {
        "id": "dumka-engg-d2d",
        "slug": "dumka-engineering-college-d2d",
        "name": "Dumka Engineering College (Govt. Established D2D)",
        "shortName": "Dumka Engg (D2D)",
        "rank": 3,
        "category": "B.Tech Lateral Entry",
        "type": "Government",
        "markerColor": "rose",
        "lat": 24.282,
        "lng": 87.228,
        "established": 2013,
        "district": "Dumka",
        "location": "Near Shivpahar, Dumka, Jharkhand - 814101",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.5,
        "reviewsCount": 112,
        "image": "assets/images/colleges/dumka-engg.jpg",
        "featured": true,
        "totalIntake": 60,
        "hostel": "Available (Boys & Girls)",
        "feesAnnual": "Free Quota: ₹ 25,000 / Year • Regular Quota: ₹ 55,000 / Year",
        "website": "https://dumkaengg.edu.in",
        "overview": "Established by Government of Jharkhand under TEQIP-III initiative, offering top B.Tech Lateral Entry degree programs with modern academic infrastructure and campus placements.",
        "branches": [
            {
                "name": "B.Tech Computer Science & Engg (Lateral)",
                "seats": 12,
                "cutoffGeneral": 180,
                "cutoffCategory": 450
            },
            {
                "name": "B.Tech Civil Engineering (Lateral)",
                "seats": 12,
                "cutoffGeneral": 210,
                "cutoffCategory": 520
            },
            {
                "name": "B.Tech Electrical Engineering (Lateral)",
                "seats": 12,
                "cutoffGeneral": 230,
                "cutoffCategory": 560
            },
            {
                "name": "B.Tech Mechanical Engineering (Lateral)",
                "seats": 12,
                "cutoffGeneral": 240,
                "cutoffCategory": 590
            },
            {
                "name": "B.Tech Electronics & Comm. (Lateral)",
                "seats": 12,
                "cutoffGeneral": 260,
                "cutoffCategory": 620
            }
        ],
        "facilities": [
            "Smart Engineering Classrooms",
            "Modern Robotics Lab",
            "Hostels",
            "Campus Placement Cell",
            "Central Auditorium",
            "Central Library"
        ]
    },
    {
        "id": "chaibasa-engg-d2d",
        "slug": "chaibasa-engineering-college-d2d",
        "name": "Chaibasa Engineering College (Govt. Established D2D)",
        "shortName": "Chaibasa Engg (D2D)",
        "rank": 4,
        "category": "B.Tech Lateral Entry",
        "type": "Government",
        "markerColor": "rose",
        "lat": 22.56,
        "lng": 85.815,
        "established": 2013,
        "district": "West Singhbhum",
        "location": "Jhikpani, Chaibasa, West Singhbhum - 833215",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.5,
        "reviewsCount": 95,
        "image": "assets/images/colleges/chaibasa-engg.jpg",
        "featured": false,
        "totalIntake": 60,
        "hostel": "Available",
        "feesAnnual": "Free Quota: ₹ 25,000 / Year • Regular: ₹ 55,000 / Year",
        "website": "https://chaibasaengg.edu.in",
        "overview": "Govt established engineering college offering premier lateral entry degree courses.",
        "branches": [
            {
                "name": "B.Tech Computer Science (Lateral)",
                "seats": 12,
                "cutoffGeneral": 190,
                "cutoffCategory": 480
            },
            {
                "name": "B.Tech Civil Engineering (Lateral)",
                "seats": 12,
                "cutoffGeneral": 220,
                "cutoffCategory": 540
            },
            {
                "name": "B.Tech Electrical Engineering (Lateral)",
                "seats": 12,
                "cutoffGeneral": 235,
                "cutoffCategory": 570
            },
            {
                "name": "B.Tech Mechanical Engineering (Lateral)",
                "seats": 12,
                "cutoffGeneral": 245,
                "cutoffCategory": 600
            },
            {
                "name": "B.Tech Electronics & Comm. (Lateral)",
                "seats": 12,
                "cutoffGeneral": 270,
                "cutoffCategory": 640
            }
        ],
        "facilities": [
            "Hostels",
            "Central Library",
            "Workshops"
        ]
    },
    {
        "id": "ramgarh-engg-d2d",
        "slug": "ramgarh-engineering-college-d2d",
        "name": "Ramgarh Engineering College (Govt. Established D2D)",
        "shortName": "Ramgarh Engg (D2D)",
        "rank": 5,
        "category": "B.Tech Lateral Entry",
        "type": "Government",
        "markerColor": "rose",
        "lat": 23.618,
        "lng": 85.524,
        "established": 2013,
        "district": "Ramgarh",
        "location": "Murubanda, Near NH-33, Ramgarh, Jharkhand - 825101",
        "affiliation": "Jharkhand University of Technology (JUT)",
        "approval": "AICTE Approved",
        "rating": 4.5,
        "reviewsCount": 98,
        "image": "assets/images/colleges/ramgarh-engg.jpg",
        "featured": false,
        "totalIntake": 60,
        "hostel": "Available",
        "feesAnnual": "Free Quota: ₹ 25,000 / Year • Regular: ₹ 55,000 / Year",
        "website": "https://ramgarhengg.edu.in",
        "overview": "Govt established degree institute with top modern laboratories and D2D seats.",
        "branches": [
            {
                "name": "B.Tech Computer Science (Lateral)",
                "seats": 12,
                "cutoffGeneral": 185,
                "cutoffCategory": 460
            },
            {
                "name": "B.Tech Civil Engineering (Lateral)",
                "seats": 12,
                "cutoffGeneral": 215,
                "cutoffCategory": 530
            },
            {
                "name": "B.Tech Electrical Engineering (Lateral)",
                "seats": 12,
                "cutoffGeneral": 230,
                "cutoffCategory": 560
            },
            {
                "name": "B.Tech Mechanical Engineering (Lateral)",
                "seats": 12,
                "cutoffGeneral": 240,
                "cutoffCategory": 590
            },
            {
                "name": "B.Tech Electronics & Comm. (Lateral)",
                "seats": 12,
                "cutoffGeneral": 265,
                "cutoffCategory": 630
            }
        ],
        "facilities": [
            "High Speed Computing",
            "Hostel",
            "Sports Complex"
        ]
    }
],

    questionPapers: [
        {
                "id": "pyq-physics-1-2024",
                "title": "Applied Physics - I (JUT Board Final 2024)",
                "subject": "Applied Physics - I",
                "semester": 1,
                "branch": "Common to All",
                "year": "2024",
                "examType": "JUT Board Final",
                "downloadUrl": "Uploads/PYQs/Sem1/PHYSICS-1ST-SEM-PYQ-2024-DIPLOMACAMPUS.pdf",
                "pdfUrl": "Uploads/PYQs/Sem1/PHYSICS-1ST-SEM-PYQ-2024-DIPLOMACAMPUS.pdf",
                "size": "227 KB",
                "rating": 4.9
        },
        {
                "id": "pyq-physics-1-2023",
                "title": "Applied Physics - I (JUT Board Final 2023)",
                "subject": "Applied Physics - I",
                "semester": 1,
                "branch": "Common to All",
                "year": "2023",
                "examType": "JUT Board Final",
                "downloadUrl": "Uploads/PYQs/Sem1/PHYSICS-1ST-SEM-PYQ-2023-DIPLOMACAMPUS.pdf",
                "pdfUrl": "Uploads/PYQs/Sem1/PHYSICS-1ST-SEM-PYQ-2023-DIPLOMACAMPUS.pdf",
                "size": "422 KB",
                "rating": 4.8
        },
        {
                "id": "pyq-foeee-2-2025",
                "title": "Fundamentals of Electrical & Electronics Engineering (FOEEE 2025)",
                "subject": "Fundamentals of Electrical & Electronics",
                "semester": 2,
                "branch": "Common to All",
                "year": "2025",
                "examType": "JUT Board Final",
                "downloadUrl": "Uploads/PYQs/Sem2/FOEEE-2ND-SEM-PYQ-2025-DIPLOMACAMPUS.pdf",
                "pdfUrl": "Uploads/PYQs/Sem2/FOEEE-2ND-SEM-PYQ-2025-DIPLOMACAMPUS.pdf",
                "size": "413 KB",
                "rating": 4.9
        },
        {
                "id": "pyq-pms-2-2025",
                "title": "Production Management System & Maintenance (PMS 2025)",
                "subject": "Production Management System",
                "semester": 2,
                "branch": "Common to All",
                "year": "2025",
                "examType": "JUT Board Final",
                "downloadUrl": "Uploads/PYQs/Sem2/PMS-2ND-SEM-PYQ-2025-DIPLOMACAMPUS.pdf",
                "pdfUrl": "Uploads/PYQs/Sem2/PMS-2ND-SEM-PYQ-2025-DIPLOMACAMPUS.pdf",
                "size": "304 KB",
                "rating": 4.9
        },
        {
                "id": "pyq-python-2-2024",
                "title": "Python Programming (JUT Board Final 2024)",
                "subject": "Python Programming",
                "semester": 2,
                "branch": "Common to All",
                "year": "2024",
                "examType": "JUT Board Final",
                "downloadUrl": "Uploads/PYQs/Sem2/PYTHON-PROG.-2ND-SEM-PYQ-2024-DIPLOMACAMPUS.pdf",
                "pdfUrl": "Uploads/PYQs/Sem2/PYTHON-PROG.-2ND-SEM-PYQ-2024-DIPLOMACAMPUS.pdf",
                "size": "5.3 MB",
                "rating": 4.9
        },
        {
                "id": "pyq-sa-2-2025",
                "title": "Statistics & Analytics (S&A JUT Board Final 2025)",
                "subject": "Statistics & Analytics",
                "semester": 2,
                "branch": "Common to All",
                "year": "2025",
                "examType": "JUT Board Final",
                "downloadUrl": "Uploads/PYQs/Sem2/S&A-2ND-SEM-PYQ-2025-DIPLOMACAMPUS.pdf",
                "pdfUrl": "Uploads/PYQs/Sem2/S&A-2ND-SEM-PYQ-2025-DIPLOMACAMPUS.pdf",
                "size": "344 KB",
                "rating": 4.9
        },
        {
                "id": "pyq-sa-2-2024",
                "title": "Statistics & Analytics (S&A JUT Board Final 2024)",
                "subject": "Statistics & Analytics",
                "semester": 2,
                "branch": "Common to All",
                "year": "2024",
                "examType": "JUT Board Final",
                "downloadUrl": "Uploads/PYQs/Sem2/S&A-2ND-SEM-PYQ-2024-DIPLOMACAMPUS.pdf",
                "pdfUrl": "Uploads/PYQs/Sem2/S&A-2ND-SEM-PYQ-2024-DIPLOMACAMPUS.pdf",
                "size": "847 KB",
                "rating": 4.8
        },
        {
                "id": "pyq-sepp-3-2026",
                "title": "Software Engineering & Project Practice (SEPP 2026 Paper)",
                "subject": "Software Engineering & Practice (SEPP)",
                "semester": 3,
                "branch": "Computer Science & Engineering",
                "year": "2026",
                "examType": "Diploma Campus Final",
                "downloadUrl": "Uploads/PYQs/Sem4/SEPP-3rd-Sem-Pyq-2026-DiplomaCampus.pdf",
                "pdfUrl": "Uploads/PYQs/Sem4/SEPP-3rd-Sem-Pyq-2026-DiplomaCampus.pdf",
                "size": "1.3 MB",
                "rating": 4.9
        }
],

    exams: [
        {
            id: "pece",
            slug: "jharkhand-polytechnic",
            alias: ["pece", "jharkhand-polytechnic", "polytechnic-entrance"],
            title: "Jharkhand Polytechnic Entrance Exam (PECE 2025)",
            badge: "Polytechnic Entrance",
            targetAudience: "Class 10th / Matric Pass or Appearing Students",
            admissionTo: "1st Year Diploma (All Government & Private Polytechnics)",
            conductingBody: "Jharkhand Combined Entrance Competitive Examination Board (JCECEB, Ranchi)",
            frequency: "Annual (April - May 2025)",
            examMode: "Offline OMR-based Objective MCQ",
            language: "Bilingual (English & Hindi)",
            duration: "150 Minutes (2 Hours 30 Mins)",
            totalMarks: 150,
            totalQuestions: 150,
            markingScheme: "+1 Mark for each correct answer • -0.25 Negative marking for wrong answer • 0 for unattempted",
            eligibility: "Must have passed Class 10th (Matriculation) or equivalent examination from a recognized board with minimum 35% aggregate marks. Candidates appearing in 10th board exams are also eligible.",
            ageLimit: "Minimum 17 years for Mining Engineering branch (as on 1st July of exam year). No age limit for all other engineering branches.",
            domicile: "Jharkhand State Residential Certificate (Local/Permanent) is required for availing Government seat reservation and fee concessions.",
            overview: "Polytechnic Entrance Competitive Examination (PECE) is the single state-level entrance test conducted by JCECEB for admission into 3-year Diploma in Engineering courses across 17+ Government, Semi-Govt, and top Private Polytechnic colleges in Jharkhand.",
            subjectBreakdown: [
                { subject: "Mathematics", questions: 50, marks: 50, level: "Class 9th & 10th standard" },
                { subject: "Physics", questions: 50, marks: 50, level: "Class 9th & 10th standard" },
                { subject: "Chemistry", questions: 50, marks: 50, level: "Class 9th & 10th standard" }
            ],
            importantDates: [
                { event: "Official PECE Notification Release", date: "February 2025" },
                { event: "Online Application Window", date: "February - March 2025" },
                { event: "Admit Card Download", date: "April 2025 (4 days prior to exam)" },
                { event: "PECE Entrance Exam Date", date: "April / May 2025" },
                { event: "Result & State Rank Merit List", date: "May / June 2025" },
                { event: "Online Counselling & College Allotment", date: "June - July 2025 (3 Rounds)" }
            ],
                        syllabus: [
                { 
                    subject: "Engineering Physics (50 Marks)", 
                    subtitle: "Diploma 1st & 2nd Semester",
                    topics: [
                        "Units & Measurements",
                        "Kinematics & Newton's Laws of Motion",
                        "Angular Motion & Simple Harmonic Motion",
                        "Work, Power & Energy",
                        "Elasticity & Surface Tension",
                        "Viscosity & Fluid Mechanics",
                        "Heat, Temperature & Thermal Expansion",
                        "Sound & Acoustics of Buildings",
                        "Properties of Light & Optics",
                        "Electrostatics & Electric Potential",
                        "Modern Physics & Band Theory",
                        "Photo Electricity, LASER & X-rays",
                        "Nanotechnology & Non-Conventional Energy"
                    ] 
                },
                { 
                    subject: "Engineering Chemistry (50 Marks)", 
                    subtitle: "Diploma 1st & 2nd Semester",
                    topics: [
                        "Atomic Structure",
                        "Electro Chemistry",
                        "Water — Sources, Hardness & Treatment",
                        "Metallurgy — Ore, Extraction & Alloys",
                        "Corrosion — Types & Prevention Methods",
                        "Atmospheric & Electrochemical Corrosion",
                        "Paints & Varnishes",
                        "Lubricants — Types & Properties",
                        "Plastics — Thermosetting & Thermoplastic",
                        "Rubber — Natural & Synthetic",
                        "Insulating & Non-Metallic Materials",
                        "Fuels — Classification & Properties",
                        "Pollution & Environmental Chemistry"
                    ] 
                },
                { 
                    subject: "Engineering Mathematics (50 Marks)", 
                    subtitle: "Diploma 1st & 2nd Semester",
                    topics: [
                        "AP, GP, HP & Quadratic Equations",
                        "Logarithms & Partial Fractions",
                        "Determinants & Matrices",
                        "Binomial Theorem",
                        "Trigonometry — Ratios & Identities",
                        "Compound & Multiple Angles",
                        "Inverse Trigonometric Ratios",
                        "Coordinate Geometry — Point & Line",
                        "Circles & Their Equations",
                        "Vectors — Dot & Cross Product",
                        "Functions, Limits & Continuity",
                        "Differentiation & Its Applications",
                        "Integration & Its Applications"
                    ] 
                }
            ],
            cutoffs: [
                { college: "Government Polytechnic Ranchi", cse: "Rank 1 - 250", ee: "Rank 1 - 450", me: "Rank 1 - 620", ce: "Rank 1 - 580", ece: "Rank 1 - 850" },
                { college: "Government Polytechnic Dhanbad", cse: "Rank 1 - 380", ee: "Rank 1 - 550", me: "Rank 1 - 520", ce: "Rank 1 - 610", ece: "Rank 1 - 980 (Metallurgy: 1-980)" },
                { college: "Government Polytechnic Adityapur", cse: "Rank 1 - 210", ee: "Rank 1 - 320", me: "Rank 1 - 280", ce: "N/A", ece: "Rank 1 - 490 (Metallurgy: 1-490)" },
                { college: "Government Polytechnic Bokaro", cse: "Rank 1 - 700", ee: "Rank 1 - 680", me: "Rank 1 - 750", ce: "Rank 1 - 820", ece: "Rank 1 - 1200 (Auto: 1-1200)" },
                { college: "Government Polytechnic Nirsa", cse: "N/A", ee: "N/A", me: "Rank 1 - 890", ce: "Rank 1 - 920", ece: "Rank 1 - 420 (Mining: 1-420)" },
                { college: "Government Polytechnic Dumka", cse: "Rank 1 - 1050", ee: "Rank 1 - 1150", me: "Rank 1 - 1250", ce: "Rank 1 - 1100", ece: "N/A" }
            ],
            strategy: [
                { phase: "Phase 1: NCERT Concept Foundations (Days 1-30)", desc: "Thoroughly read Class 9th and 10th NCERT science and math textbooks. Make concise formula sheets for electricity, optics, algebra, and trigonometry." },
                { phase: "Phase 2: Chapterwise MCQ Question Drill (Days 31-60)", desc: "Solve 100+ objective questions for each individual chapter to build calculation accuracy and eliminate theoretical confusion." },
                { phase: "Phase 3: Speed & Time-Management CBT Drills (Days 61-80)", desc: "Practice timed 150-minute mock tests on Diploma Campus test series to target solving 150 questions with minimal negative marks." },
                { phase: "Phase 4: 10-Year PYQ Solving & Final Revision (Days 81-90)", desc: "Solve official 2015-2024 PECE question papers under exam conditions and revise mistakes log." }
            ],
            books: [
                { name: "Arihant Jharkhand Polytechnic PECE Entrance Guide", desc: "Comprehensive chapterwise theory with solved past 10 years papers." },
                { name: "NCERT Class 9 & 10 Mathematics and Science", desc: "The core foundational source from which 90%+ concepts and numerical patterns originate." },
                { name: "Diploma Campus Online Mock Test Series & PYQs", desc: "Real-time CBT simulated test series with instant analysis and rank prediction." }
            ]
        },
                {
            id: "d2d",
            slug: "jharkhand-d2d",
            alias: ["d2d", "jharkhand-d2d", "lateral-entry", "dece-le"],
            title: "Jharkhand D2D (Diploma to Degree B.Tech Lateral Entry 2025)",
            badge: "B.Tech Lateral Entry",
            targetAudience: "Final Year Diploma Students & Diploma Passouts (All Branches)",
            admissionTo: "Direct 2nd Year (3rd Semester) B.Tech at BIT Sindri & Govt Engg Colleges",
            conductingBody: "Jharkhand Combined Entrance Competitive Examination Board (JCECEB, Ranchi)",
            frequency: "Annual (June - July 2025)",
            examMode: "Offline OMR-based Objective MCQ",
            language: "Bilingual (English & Hindi)",
            duration: "150 Minutes (2 Hours 30 Mins)",
            totalMarks: 150,
            totalQuestions: 150,
            markingScheme: "+1 Mark for each correct answer • -0.25 Negative marking for wrong answer • 0 for unattempted",
            eligibility: "Must have passed 3-Year Diploma in Engineering/Technology from JUT Ranchi or state board with minimum 45% marks (40% for reserved SC/ST/OBC candidates). Final semester students appearing in diploma board exams can also appear.",
            ageLimit: "No upper age limit for core engineering branches. Maximum 20 years (as of exam year) for Mining Engineering.",
            domicile: "Jharkhand State Residential Certificate is mandatory to qualify for Government quota seats at BIT Sindri and State Engineering Colleges.",
            overview: "Jharkhand D2D (Diploma to Degree Lateral Entry Entrance Exam) is the prestigious competitive gateway through which top Diploma holders secure direct 2nd Year B.Tech admissions into BIT Sindri (Jharkhand's premier Govt Engineering College) and other premier state institutes.",
            subjectBreakdown: [
                { subject: "Applied Mathematics", questions: 50, marks: 50, level: "Engineering Diploma 1st & 2nd Year Standard" },
                { subject: "Applied Physics", questions: 50, marks: 50, level: "Applied Physics & Engineering Mechanics" },
                { subject: "Applied Chemistry", questions: 50, marks: 50, level: "Applied Engineering Chemistry" }
            ],
            importantDates: [
                { event: "Official D2D Notification Release", date: "April / May 2025" },
                { event: "Online Application Window", date: "May - June 2025" },
                { event: "D2D Admit Card Release", date: "June 2025" },
                { event: "D2D Entrance Exam Date", date: "June / July 2025" },
                { event: "D2D State Rank Merit List", date: "July 2025" },
                { event: "BIT Sindri Lateral Entry Counselling", date: "July - August 2025" }
            ],
            syllabus: [
                {
                    subject: "Applied Mathematics (50 Marks)",
                    topics: [
                        "Differential Calculus: Successive Differentiation, Leibnitz Theorem, Partial Derivatives, Euler's Theorem on Homogeneous Functions",
                        "Integral Calculus: Definite Integrals, Properties, Beta and Gamma Functions, Area Under Curves, Double & Triple Integrals",
                        "Matrices & Determinants: Rank of Matrix, System of Linear Equations, Eigenvalues & Eigenvectors, Cayley-Hamilton Theorem, Matrix Inverses",
                        "Differential Equations: 1st Order & 1st Degree ODE (Separable, Homogeneous, Linear, Exact), Higher Order Linear ODE with Constant Coefficients",
                        "Vector Calculus: Dot, Cross and Scalar Triple Products, Vector Differentiation, Gradient, Divergence, Curl, Line & Surface Integrals",
                        "Complex Numbers: Modulus, Amplitude, Polar Form, De Moivre's Theorem, Roots of Complex Numbers, Exponential Form",
                        "Fourier Series: Periodic Functions, Dirichlet Conditions, Fourier Expansion of Even & Odd Functions, Half-range Sine/Cosine Series"
                    ]
                },
                {
                    subject: "Applied Physics (50 Marks)",
                    topics: [
                        "Engineering Mechanics: Resolution of Forces, Resultant, Lami's Theorem, Friction (Laws, Angle & Cone of Friction), Center of Gravity & Moment of Inertia",
                        "Dynamics: Newton's Laws of Motion, Linear & Angular Momentum, Projectile Motion, Circular Motion, Work-Energy Principle",
                        "Wave Optics: Interference of Light (Young's Double Slit), Diffraction (Single Slit), Polarization of Light (Brewster's Law, Malus Law)",
                        "Lasers & Fiber Optics: Spontaneous & Stimulated Emission, Population Inversion, Optical Fibers, Acceptance Angle & Numerical Aperture",
                        "Electromagnetism: Coulomb's Law, Gauss's Divergence Law, Biot-Savart Law, Ampere's Law, Faraday's Electromagnetic Induction & Lenz's Law",
                        "Semiconductor & Modern Physics: Energy Bands in Solids, Intrinsic & Extrinsic Semiconductors, PN Junction Diode, Zener Diode, Transistors, Photoelectric Effect"
                    ]
                },
                {
                    subject: "Applied Chemistry (50 Marks)",
                    topics: [
                        "Atomic Structure & Chemical Bonding: Quantum Numbers, Aufbau Principle, Pauli Exclusion, Hund's Rule, Hybridization (sp, sp2, sp3), Molecular Orbital Theory",
                        "Electrochemistry & Corrosion: Nernst Equation, Electrochemical Cells, EMF, Types of Corrosion (Dry & Wet), Galvanic Cell, Corrosion Prevention & Cathodic Protection",
                        "Water Treatment Technology: Hardness of Water (Temporary & Permanent), EDTA Titration Method, Boiler Problems (Scale, Sludge, Priming, Foaming), Softening Methods (Zeolite & Ion Exchange)",
                        "Polymers & Engineering Plastics: Thermoplastics vs Thermosets, Addition vs Condensation Polymerization, Synthesis & Uses of Nylon-6,6, Bakelite, Teflon, PVC, Conducting Polymers",
                        "Fuels & Combustion: Classification, Calorific Value (Gross & Net), Determination by Bomb Calorimeter, Proximate & Ultimate Analysis of Coal, Knocking & Octane/Cetane Numbers",
                        "Lubricants & Engineering Materials: Mechanism of Lubrication, Properties (Viscosity, Flash Point, Fire Point, Pour Point), Refractories, Abrasives, Composite Materials"
                    ]
                }
            ],
            cutoffs: [
                { college: "BIT Sindri (Computer Science - CSE)", cse: "Rank 1 - 15", ee: "N/A", me: "N/A", ce: "N/A", ece: "N/A", notes: "Top priority branch, closing rank < 15 for General, < 45 for OBC/SC/ST" },
                { college: "BIT Sindri (Information Technology - IT)", cse: "Rank 1 - 25", ee: "N/A", me: "N/A", ce: "N/A", ece: "N/A", notes: "Closing rank < 25 for General" },
                { college: "BIT Sindri (Electrical Engineering - EE)", cse: "N/A", ee: "Rank 1 - 40", me: "N/A", ce: "N/A", ece: "N/A", notes: "Core electrical seats close by rank 40" },
                { college: "BIT Sindri (Mechanical Engineering - ME)", cse: "N/A", ee: "N/A", me: "Rank 1 - 65", ce: "N/A", ece: "N/A", notes: "Top core branch with strong placement records" },
                { college: "BIT Sindri (Civil Engineering - CE)", cse: "N/A", ee: "N/A", me: "N/A", ce: "Rank 1 - 90", ece: "N/A", notes: "Highest demand for Govt PSU & SSC JE aspirants" },
                { college: "BIT Sindri (Electronics & Comm - ECE)", cse: "N/A", ee: "N/A", me: "N/A", ce: "N/A", ece: "Rank 1 - 55", notes: "Excellent core & IT dual placement options" },
                { college: "BIT Sindri (Mining Engineering)", cse: "N/A", ee: "N/A", me: "N/A", ce: "N/A", ece: "Rank 1 - 140", notes: "Exclusive to mining diploma holders; CIL recruiters" },
                { college: "BIT Sindri (Metallurgical & Chemical)", cse: "N/A", ee: "N/A", me: "N/A", ce: "N/A", ece: "Rank 1 - 180", notes: "Top core recruiters (Tata Steel, Vedanta, JSW)" },
                { college: "BIT Sindri (Production Engineering)", cse: "N/A", ee: "N/A", me: "N/A", ce: "N/A", ece: "Rank 1 - 210", notes: "Automobile & manufacturing sector recruiters" },
                { college: "UCET VBU Hazaribagh & CIT Ranchi", cse: "Rank 50 - 350", ee: "Rank 70 - 450", me: "Rank 80 - 550", ce: "Rank 100 - 600", ece: "Rank 120 - 650", notes: "State Govt & Semi-Govt B.Tech Lateral Entry Colleges" }
            ],
            strategy: [
                { phase: "Rule 1: Master Engineering Mathematics (50 Marks)", desc: "Applied Maths carries 50 marks out of 150. Scoring 40+ in Maths significantly boosts your BIT Sindri lateral entry ranking. Master Matrices, Calculus, and Differential Equations." },
                { phase: "Rule 2: Master Engineering Mechanics & Physics Numericals (50 Marks)", desc: "In Physics (50 marks), practice numerical problems in forces, friction, Lami's theorem, optics, and electrostatics with standard formulas." },
                { phase: "Rule 3: Score High in Applied Chemistry & Materials (50 Marks)", desc: "Chemistry (50 marks) is high-scoring: Water technology, Polymers, Electrochemistry, and Engineering materials have direct theory & numerical questions." },
                { phase: "Rule 4: Target Solving 110+ Questions with High Accuracy", desc: "Because of -0.25 negative marking, aim for 110+ high-confidence answers across 150 questions to target single-digit state CML rank." }
            ],
            books: [
                { name: "Higher Engineering Mathematics by B.S. Grewal", desc: "The definitive reference for Matrices, Calculus, and Differential Equations required for D2D." },
                { name: "Arihant DECE LE (Lateral Entry to B.Tech) Entrance Guide", desc: "Comprehensive chapter-wise MCQs for Physics, Chemistry, and Mathematics." },
                { name: "Diploma Campus D2D Solved PYQs (2015-2024)", desc: "10-year official question papers with detailed step-by-step solutions and CBT test series." }
            ]
        },
        {
            id: "jut-semester-exams",
            slug: "jut-semester-exams",
            title: "JUT Diploma Semester Examinations (Sem 1 to 6)",
            badge: "Semester Examination",
            conductingBody: "Jharkhand University of Technology (JUT)",
            frequency: "Bi-annual (Odd Sem: Jan-Feb, Even Sem: June-July)",
            eligibility: "Regularly enrolled polytechnic students with min 75% attendance",
            overview: "JUT conducts centralized semester exams for all polytechnic colleges across Jharkhand following the official Model Curriculum with internal sessional marks (20) and external theory (80/70).",
            pattern: "Subject-wise written exam • 70 or 80 Marks External + 20/30 Marks Sessional • 3 Hours duration per subject.",
            importantDates: [
                { event: "Odd Semester Form Fillup", date: "December / January" },
                { event: "Odd Sem Exams", date: "January / February" },
                { event: "Even Semester Form Fillup", date: "May / June" },
                { event: "Even Sem Exams", date: "June / July" }
            ],
            syllabus: [
                { subject: "1st & 2nd Semester", topics: ["Applied Physics, Applied Chemistry, Maths 1 & 2, Engg Drawing, Communication Skills, Fundamentals of Computer"] },
                { subject: "3rd to 6th Semester", topics: ["Core discipline subjects according to branch (CSE, ME, CE, EE, ECE, Mining)"] }
            ]
        }
    ],

    mockTests: [
        {
            id: "test-d2d-physics-01",
            title: "D2D Engineering Physics Subject Mock Test",
            category: "D2D Physics",
            timeLimit: 45,
            totalMarks: 50,
            questionCount: 10,
            difficulty: "Medium",
            questions: [
                {
                    q: "What are the dimensional formula of Planck's constant (h)?",
                    options: ["[M L² T⁻¹]", "[M L T⁻²]", "[M L² T⁻²]", "[M L⁻¹ T⁻¹]"],
                    correct: "[M L² T⁻¹]",
                    ans: 0,
                    explanation: "E = h·ν ⇒ h = Energy / Frequency = [M L² T⁻²] / [T⁻¹] = [M L² T⁻¹]."
                },
                {
                    q: "According to Bernoulli's equation, in a streamline flow of an ideal fluid, the sum of which energies remains constant?",
                    options: ["Pressure, Kinetic, and Potential energies per unit volume", "Only Kinetic and Potential energies", "Thermal and Pressure energies", "Viscous and Kinetic energies"],
                    correct: "Pressure, Kinetic, and Potential energies per unit volume",
                    ans: 0,
                    explanation: "Bernoulli's Theorem: P + ½ρv² + ρgh = Constant along any streamline."
                },
                {
                    q: "The SI unit of Young's Modulus of Elasticity (Y) is:",
                    options: ["N/m² (Pascal)", "N·m", "N/m", "Joule/m"],
                    correct: "N/m² (Pascal)",
                    ans: 0,
                    explanation: "Young's Modulus Y = Longitudinal Stress / Longitudinal Strain. Since strain is dimensionless, unit of Y is N/m² (Pa)."
                },
                {
                    q: "The efficiency (η) of a Carnot heat engine operating between temperatures T1 (source) and T2 (sink) is given by:",
                    options: ["1 - (T2 / T1)", "1 - (T1 / T2)", "(T1 - T2) / T2", "T2 / T1"],
                    correct: "1 - (T2 / T1)",
                    ans: 0,
                    explanation: "Carnot Engine efficiency η = (T1 - T2) / T1 = 1 - (T2 / T1) where temperatures are in Kelvin."
                },
                {
                    q: "Total internal reflection (TIR) takes place when light travels from:",
                    options: ["Denser medium to rarer medium with angle of incidence > critical angle", "Rarer medium to denser medium with angle of incidence < critical angle", "Air to water at normal incidence", "Vacuum to glass at 45°"],
                    correct: "Denser medium to rarer medium with angle of incidence > critical angle",
                    ans: 0,
                    explanation: "Conditions for TIR: (1) Light must travel from optically denser to rarer medium, (2) Angle of incidence i > Critical angle C."
                },
                {
                    q: "The de Broglie wavelength (λ) associated with a particle of mass m moving with velocity v is:",
                    options: ["h / (m·v)", "m·v / h", "h·m / v", "h·v / m"],
                    correct: "h / (m·v)",
                    ans: 0,
                    explanation: "De Broglie relation: λ = h / p = h / (m·v), where p is linear momentum."
                },
                {
                    q: "According to Gauss's Law in electrostatics, the net electric flux through any closed surface is equal to:",
                    options: ["q_enclosed / ε₀", "q_enclosed × ε₀", "Zero always", "4π × q_enclosed"],
                    correct: "q_enclosed / ε₀",
                    ans: 0,
                    explanation: "Gauss's Law states: ∮ E·dA = q_net / ε₀."
                },
                {
                    q: "The magnetic Lorentz force on a charge q moving with velocity v in a magnetic field B is:",
                    options: ["F = q(v × B)", "F = q(v · B)", "F = q·v·B", "F = (q / v) × B"],
                    correct: "F = q(v × B)",
                    ans: 0,
                    explanation: "Magnetic force vector F = q(v × B) with magnitude F = q·v·B·sin(θ)."
                },
                {
                    q: "The moment of inertia of a solid cylinder of mass M and radius R about its central longitudinal axis is:",
                    options: ["½ M R²", "M R²", "⅔ M R²", "¼ M R²"],
                    correct: "½ M R²",
                    ans: 0,
                    explanation: "For a solid cylinder (or uniform solid disc), I = ½ M R²."
                },
                {
                    q: "In an adiabatic process of an ideal gas, the relationship between pressure P and volume V is:",
                    options: ["P · V^γ = Constant", "P · V = Constant", "P / V^γ = Constant", "P^γ · V = Constant"],
                    correct: "P · V^γ = Constant",
                    ans: 0,
                    explanation: "For a reversible adiabatic (isentropic) process, P·V^γ = Constant, where γ = Cp / Cv."
                }
            ]
        },
        {
            id: "test-d2d-chem-01",
            title: "D2D Engineering Chemistry Subject Mock Test",
            category: "D2D Chemistry",
            timeLimit: 45,
            totalMarks: 50,
            questionCount: 10,
            difficulty: "Medium",
            questions: [
                {
                    q: "Which of the following is the monomer of Teflon (PTFE)?",
                    options: ["Tetrafluoroethylene (CF2=CF2)", "Vinyl chloride (CH2=CHCl)", "Ethylene (CH2=CH2)", "Styrene (C6H5CH=CH2)"],
                    correct: "Tetrafluoroethylene (CF2=CF2)",
                    ans: 0,
                    explanation: "Teflon (Polytetrafluoroethylene) is prepared by free-radical polymerization of Tetrafluoroethylene (CF2=CF2)."
                },
                {
                    q: "According to Faraday's first law of electrolysis, the mass (m) of substance deposited is proportional to:",
                    options: ["Quantity of electricity passed (Q = I·t)", "Temperature of electrolyte", "Voltage applied squared", "Resistance of cell"],
                    correct: "Quantity of electricity passed (Q = I·t)",
                    ans: 0,
                    explanation: "m = Z·Q = Z·I·t, where Z is the electrochemical equivalent."
                },
                {
                    q: "In water treatment, Calgon conditioning removes permanent hardness by forming soluble complex with:",
                    options: ["Ca²⁺ and Mg²⁺ ions", "Na⁺ and K⁺ ions", "SO4²⁻ ions", "Cl⁻ ions"],
                    correct: "Ca²⁺ and Mg²⁺ ions",
                    ans: 0,
                    explanation: "Calgon (Sodium hexametaphosphate, (NaPO3)6) complexes Ca²⁺ and Mg²⁺ into highly soluble non-scale forming anionic complexes."
                },
                {
                    q: "Which fuel has the highest calorific value (Higher Heating Value)?",
                    options: ["Hydrogen gas (H2)", "Methane (CH4)", "Petrol (Gasoline)", "Coal"],
                    correct: "Hydrogen gas (H2)",
                    ans: 0,
                    explanation: "Hydrogen has the highest gravimetric calorific value (~142,000 kJ/kg)."
                },
                {
                    q: "Galvanization is the process of coating iron or steel with a protective layer of:",
                    options: ["Zinc (Zn)", "Tin (Sn)", "Copper (Cu)", "Chromium (Cr)"],
                    correct: "Zinc (Zn)",
                    ans: 0,
                    explanation: "Zinc provides sacrificial cathodic protection to iron against rusting even if the coating is scratched."
                },
                {
                    q: "The Nernst equation for a single electrode reduction potential E(Mⁿ⁺/M) at 298 K is:",
                    options: ["E = E° - (0.0591 / n) log [1 / [Mⁿ⁺]]", "E = E° + (0.0591 / n) log [1 / [Mⁿ⁺]]", "E = E° - (0.0591 × n) ln [Mⁿ⁺]", "E = E° / (n × 0.0591)"],
                    correct: "E = E° - (0.0591 / n) log [1 / [Mⁿ⁺]]",
                    ans: 0,
                    explanation: "E = E° - (2.303 RT / nF) log(1/[Mⁿ⁺]) = E° - (0.0591 / n) log(1/[Mⁿ⁺]) at 25°C."
                },
                {
                    q: "The major constituent gas present in Biogas and Natural Gas is:",
                    options: ["Methane (CH4)", "Ethane (C2H6)", "Carbon Monoxide (CO)", "Propane (C3H8)"],
                    correct: "Methane (CH4)",
                    ans: 0,
                    explanation: "Biogas contains 55-70% Methane (CH4), and Natural Gas is ~85-95% Methane."
                },
                {
                    q: "In proximate analysis of coal, which parameters are quantitatively determined?",
                    options: ["Moisture, Volatile Matter, Ash, and Fixed Carbon", "Carbon, Hydrogen, Nitrogen, and Sulphur", "Calorific Value and Octane Number", "Viscosity and Flash Point"],
                    correct: "Moisture, Volatile Matter, Ash, and Fixed Carbon",
                    ans: 0,
                    explanation: "Proximate analysis determines Moisture %, Volatile Matter %, Ash %, and Fixed Carbon % (by difference)."
                },
                {
                    q: "Which catalyst is traditionally used in Haber's Process for manufacturing ammonia?",
                    options: ["Finely divided Iron (Fe) with Molybdenum (Mo) promoter", "Platinum wire mesh", "Vanadium pentoxide (V2O5)", "Nickel powder"],
                    correct: "Finely divided Iron (Fe) with Molybdenum (Mo) promoter",
                    ans: 0,
                    explanation: "N2 + 3H2 ⇌ 2NH3 uses porous iron catalyst with Mo / K2O-Al2O3 promoters at 450-500°C."
                },
                {
                    q: "A buffer solution consists of a mixture of:",
                    options: ["A weak acid and its salt with a strong base", "A strong acid and a strong base", "Two strong acids", "Pure neutral salts only"],
                    correct: "A weak acid and its salt with a strong base",
                    ans: 0,
                    explanation: "An acidic buffer contains a weak acid (e.g. CH3COOH) and its conjugate salt (e.g. CH3COONa)."
                }
            ]
        },
        {
            id: "test-d2d-math-01",
            title: "D2D Engineering Mathematics Subject Mock Test",
            category: "D2D Mathematics",
            timeLimit: 50,
            totalMarks: 50,
            questionCount: 10,
            difficulty: "Hard",
            questions: [
                {
                    q: "The value of limit (x→0) (sin 5x / x) is equal to:",
                    options: ["5", "1", "0", "1/5"],
                    correct: "5",
                    ans: 0,
                    explanation: "lim(x→0) [5 × (sin 5x / 5x)] = 5 × 1 = 5."
                },
                {
                    q: "The eigenvalues of a diagonal matrix are always equal to its:",
                    options: ["Diagonal elements", "Trace of matrix", "Determinant", "Zeroes"],
                    correct: "Diagonal elements",
                    ans: 0,
                    explanation: "For any diagonal or triangular matrix, the characteristic roots (eigenvalues) are precisely the principal diagonal entries."
                },
                {
                    q: "The order and degree of the differential equation (d²y/dx²)³ + (dy/dx)⁴ + y = 0 are:",
                    options: ["Order = 2, Degree = 3", "Order = 3, Degree = 2", "Order = 2, Degree = 4", "Order = 4, Degree = 3"],
                    correct: "Order = 2, Degree = 3",
                    ans: 0,
                    explanation: "Highest derivative is d²y/dx² (Order 2), and its highest exponent is 3 (Degree 3)."
                },
                {
                    q: "The integral ∫ (e^(2x) + cos 3x) dx is equal to:",
                    options: ["½ e^(2x) + ⅓ sin 3x + C", "2e^(2x) - 3sin 3x + C", "e^(2x) + sin 3x + C", "½ e^(2x) - ⅓ sin 3x + C"],
                    correct: "½ e^(2x) + ⅓ sin 3x + C",
                    ans: 0,
                    explanation: "∫ e^(2x) dx = ½ e^(2x), and ∫ cos 3x dx = ⅓ sin 3x."
                },
                {
                    q: "If vector A = 2i + 3j - k and vector B = 4i + 6j - 2k, then the angle between vectors A and B is:",
                    options: ["0° (Collinear / Parallel)", "90° (Perpendicular)", "45°", "180°"],
                    correct: "0° (Collinear / Parallel)",
                    ans: 0,
                    explanation: "Vector B = 2 × Vector A. Since B is a positive scalar multiple of A, they are parallel (θ = 0°)."
                },
                {
                    q: "The Laplace transform of f(t) = sin(at) is:",
                    options: ["a / (s² + a²)", "s / (s² + a²)", "a / (s² - a²)", "1 / (s + a)"],
                    correct: "a / (s² + a²)",
                    ans: 0,
                    explanation: "Standard Laplace transform: L{sin(at)} = a / (s² + a²), for s > 0."
                },
                {
                    q: "If A is an invertible square matrix of order n, then det(adj A) is equal to:",
                    options: ["(det A)^(n - 1)", "(det A)^n", "det A", "1 / (det A)"],
                    correct: "(det A)^(n - 1)",
                    ans: 0,
                    explanation: "Standard matrix property: |adj A| = |A|^(n - 1)."
                },
                {
                    q: "The rank of a 3 × 3 non-singular identity matrix I₃ is:",
                    options: ["3", "1", "0", "9"],
                    correct: "3",
                    ans: 0,
                    explanation: "The identity matrix I₃ has 3 linearly independent rows/columns and determinant = 1 ≠ 0, so Rank = 3."
                },
                {
                    q: "A card is drawn from a well-shuffled pack of 52 cards. The probability of getting a King or an Ace is:",
                    options: ["2 / 13", "1 / 13", "4 / 13", "1 / 26"],
                    correct: "2 / 13",
                    ans: 0,
                    explanation: "Total Kings = 4, Total Aces = 4. Favorable = 8. Probability = 8 / 52 = 2 / 13."
                },
                {
                    q: "The vector differential operator ∇ (Del) applied to a scalar function φ (i.e. ∇φ) produces a:",
                    options: ["Vector quantity (Gradient)", "Scalar quantity (Divergence)", "Zero always", "Tensor of rank 2"],
                    correct: "Vector quantity (Gradient)",
                    ans: 0,
                    explanation: "Gradient of a scalar field ∇φ = (∂φ/∂x)i + (∂φ/∂y)j + (∂φ/∂z)k is a vector."
                }
            ]
        },
        {
            id: "test-d2d-grand-01",
            title: "BIT Sindri D2D Grand Full-Length Mock Test 2026",
            category: "D2D Full Mock",
            timeLimit: 150,
            totalMarks: 150,
            questionCount: 15,
            difficulty: "Hard",
            questions: [
                {
                    q: "PHYSICS: The escape velocity from the surface of the Earth is approximately:",
                    options: ["11.2 km/s", "9.8 km/s", "8.0 km/s", "15.4 km/s"],
                    correct: "11.2 km/s",
                    ans: 0,
                    explanation: "v_escape = √(2·G·M / R) ≈ 11.2 km/s for Earth."
                },
                {
                    q: "PHYSICS: In a pure inductive AC circuit, the current lags behind the voltage by a phase angle of:",
                    options: ["90° (π/2 radians)", "180° (π radians)", "0° (In phase)", "45°"],
                    correct: "90° (π/2 radians)",
                    ans: 0,
                    explanation: "In an ideal inductor, voltage leads current by 90° (current lags by π/2)."
                },
                {
                    q: "PHYSICS: When two coherent light waves of equal amplitude 'a' interfere constructively, the resultant intensity is proportional to:",
                    options: ["4 a²", "2 a²", "a²", "16 a²"],
                    correct: "4 a²",
                    ans: 0,
                    explanation: "Constructive amplitude A_max = a + a = 2a. Intensity I ∝ A² = (2a)² = 4a²."
                },
                {
                    q: "PHYSICS: Two bodies of masses 1 kg and 4 kg have equal kinetic energies. The ratio of their linear momentums is:",
                    options: ["1 : 2", "2 : 1", "1 : 4", "1 : 16"],
                    correct: "1 : 2",
                    ans: 0,
                    explanation: "p = √(2·m·K). Since K is same, p1 / p2 = √(m1 / m2) = √(1 / 4) = 1/2."
                },
                {
                    q: "PHYSICS: A step-up transformer converts:",
                    options: ["Low voltage AC at high current into high voltage AC at low current", "High voltage AC into low voltage AC", "AC into DC", "DC into AC"],
                    correct: "Low voltage AC at high current into high voltage AC at low current",
                    ans: 0,
                    explanation: "Step-up transformer increases secondary voltage while decreasing secondary current (conserving power V·I)."
                },
                {
                    q: "CHEMISTRY: The pH of a 0.001 M HCl aqueous solution is:",
                    options: ["3", "1", "11", "7"],
                    correct: "3",
                    ans: 0,
                    explanation: "[H⁺] = 10⁻³ M ⇒ pH = -log(10⁻³) = 3."
                },
                {
                    q: "CHEMISTRY: Rusting of iron is chemically an electrochemical process of:",
                    options: ["Hydrated Ferric Oxide formation (Fe2O3 · xH2O)", "Pure Ferrous Chloride formation", "Reduction of iron metal", "Carbonate precipitation"],
                    correct: "Hydrated Ferric Oxide formation (Fe2O3 · xH2O)",
                    ans: 0,
                    explanation: "Rust is hydrated iron(III) oxide: Fe2O3 · xH2O formed via anodic oxidation of iron in presence of moisture and O2."
                },
                {
                    q: "CHEMISTRY: Which polymer is known for its excellent self-lubricating non-stick properties?",
                    options: ["Polytetrafluoroethylene (Teflon)", "Bakelite", "Nylon 6,6", "Polystyrene"],
                    correct: "Polytetrafluoroethylene (Teflon)",
                    ans: 0,
                    explanation: "Teflon has low coefficient of friction and is chemically inert."
                },
                {
                    q: "CHEMISTRY: The unit of equivalent conductance (Λ_eq) is:",
                    options: ["Ohm⁻¹ · cm² · eq⁻¹ (Siemens·cm²·eq⁻¹)", "Ohm · cm", "Siemens / cm", "Ohm⁻¹ · cm⁻¹"],
                    correct: "Ohm⁻¹ · cm² · eq⁻¹ (Siemens·cm²·eq⁻¹)",
                    ans: 0,
                    explanation: "Λ_eq = (1000 × κ) / Normality ⇒ Unit is Ω⁻¹·cm²·eq⁻¹ (S·cm²·eq⁻¹)."
                },
                {
                    q: "CHEMISTRY: Zeolite process for water softening exchanges hard water cations with:",
                    options: ["Na⁺ ions of Sodium Zeolite", "H⁺ ions of acid", "Cl⁻ ions", "Ca²⁺ ions"],
                    correct: "Na⁺ ions of Sodium Zeolite",
                    ans: 0,
                    explanation: "Na2Ze + Ca²⁺ → CaZe + 2Na⁺, replacing hardness ions Ca²⁺/Mg²⁺ with harmless Na⁺."
                },
                {
                    q: "MATHS: If matrix A = [[3, 1], [0, 2]], the eigenvalues of A are:",
                    options: ["3 and 2", "1 and 0", "5 and 6", "1 and 5"],
                    correct: "3 and 2",
                    ans: 0,
                    explanation: "Since A is an upper triangular matrix, its eigenvalues are the diagonal entries 3 and 2."
                },
                {
                    q: "MATHS: The value of definite integral ∫ (from 0 to π/2) [sin x / (sin x + cos x)] dx is:",
                    options: ["π / 4", "π / 2", "1", "0"],
                    correct: "π / 4",
                    ans: 0,
                    explanation: "Using property ∫ f(x)dx = ∫ f(a-x)dx: 2I = ∫ 1 dx = π/2 ⇒ I = π/4."
                },
                {
                    q: "MATHS: The solution of differential equation dy/dx = y / x is:",
                    options: ["y = C · x", "y = x² + C", "y · x = C", "y = ln x + C"],
                    correct: "y = C · x",
                    ans: 0,
                    explanation: "dy/y = dx/x ⇒ ln y = ln x + ln C ⇒ y = C·x."
                },
                {
                    q: "MATHS: If two unbiased dice are thrown simultaneously, the probability that the sum of numbers is 7 is:",
                    options: ["6 / 36 = 1 / 6", "1 / 12", "5 / 36", "7 / 36"],
                    correct: "6 / 36 = 1 / 6",
                    ans: 0,
                    explanation: "Combinations giving sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 out of 36 = 1/6."
                },
                {
                    q: "MATHS: The divergence of the curl of any twice differentiable vector field V (i.e. ∇ · (∇ × V)) is always:",
                    options: ["0 (Identically Zero)", "1", "∇² V", "V itself"],
                    correct: "0 (Identically Zero)",
                    ans: 0,
                    explanation: "Fundamental vector identity: div(curl V) = 0."
                }
            ]
        },
                {
        "id": "test-pece-full-01",
        "title": "Jharkhand Polytechnic (PECE) Grand Full Mock Test 2026",
        "category": "Polytechnic Entrance",
        "timeLimit": 150,
        "totalMarks": 150,
        "questionCount": 150,
        "difficulty": "Medium",
        "questions": [
                {
                        "q": "PHYSICS: What is the focal length of a plane mirror?",
                        "options": [
                                "Zero",
                                "Infinity",
                                "25 cm",
                                "100 cm"
                        ],
                        "correct": "Infinity",
                        "ans": 1,
                        "explanation": "A plane mirror has an infinite radius of curvature, so f = R/2 = Infinity."
                },
                {
                        "q": "PHYSICS: The SI unit of electrical resistivity is:",
                        "options": [
                                "Ohm",
                                "Ohm-meter (Ω·m)",
                                "Ohm/meter",
                                "Siemens"
                        ],
                        "correct": "Ohm-meter (Ω·m)",
                        "ans": 1,
                        "explanation": "Resistivity ρ = R·A/L ⇒ Unit = (Ω·m²)/m = Ω·m."
                },
                {
                        "q": "PHYSICS: The power of a convex lens of focal length 50 cm is:",
                        "options": [
                                "+2 D",
                                "-2 D",
                                "+0.5 D",
                                "+5 D"
                        ],
                        "correct": "+2 D",
                        "ans": 0,
                        "explanation": "Power P = 1 / f(in m) = 1 / 0.5 = +2 Diopters (+2 D)."
                },
                {
                        "q": "PHYSICS: Newton's first law of motion provides the definition/concept of:",
                        "options": [
                                "Inertia",
                                "Force magnitude",
                                "Momentum",
                                "Energy"
                        ],
                        "correct": "Inertia",
                        "ans": 0,
                        "explanation": "Newton's first law states the property of inertia: bodies resist change in state of rest or uniform motion."
                },
                {
                        "q": "PHYSICS: The refractive index of diamond with respect to air is approximately:",
                        "options": [
                                "2.42",
                                "1.33",
                                "1.50",
                                "1.00"
                        ],
                        "correct": "2.42",
                        "ans": 0,
                        "explanation": "Diamond has the highest optical density and refractive index among common solids (μ ≈ 2.42)."
                },
                {
                        "q": "PHYSICS: Which defect of the human eye is corrected using a concave lens?",
                        "options": [
                                "Myopia (Short-sightedness)",
                                "Hypermetropia (Long-sightedness)",
                                "Presbyopia",
                                "Astigmatism"
                        ],
                        "correct": "Myopia (Short-sightedness)",
                        "ans": 0,
                        "explanation": "Myopia brings image focus in front of retina, which is diverged backwards onto retina using concave lens."
                },
                {
                        "q": "PHYSICS: The value of universal gravitational constant 'G' in SI units is:",
                        "options": [
                                "6.67 × 10⁻¹¹ N·m²/kg²",
                                "9.8 m/s²",
                                "6.67 × 10¹¹ N·m²/kg²",
                                "3.0 × 10⁸ m/s"
                        ],
                        "correct": "6.67 × 10⁻¹¹ N·m²/kg²",
                        "ans": 0,
                        "explanation": "Universal Gravitational constant G = 6.674 × 10⁻¹¹ N·m²/kg²."
                },
                {
                        "q": "PHYSICS: Two resistors of resistances 6 Ω and 3 Ω are connected in parallel. Their equivalent resistance is:",
                        "options": [
                                "2 Ω",
                                "9 Ω",
                                "4.5 Ω",
                                "18 Ω"
                        ],
                        "correct": "2 Ω",
                        "ans": 0,
                        "explanation": "1/R = 1/6 + 1/3 = 3/6 = 1/2 ⇒ R = 2 Ω."
                },
                {
                        "q": "PHYSICS: The device used to detect the presence of electric current in a circuit is:",
                        "options": [
                                "Galvanometer",
                                "Ammeter",
                                "Voltmeter",
                                "Rheostat"
                        ],
                        "correct": "Galvanometer",
                        "ans": 0,
                        "explanation": "A galvanometer detects and indicates even tiny electric currents."
                },
                {
                        "q": "PHYSICS: Commercial unit of electric energy (1 Unit / 1 kWh) in Joules is equal to:",
                        "options": [
                                "3.6 × 10⁶ J",
                                "3.6 × 10⁵ J",
                                "1000 J",
                                "3.6 × 10³ J"
                        ],
                        "correct": "3.6 × 10⁶ J",
                        "ans": 0,
                        "explanation": "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ Joules."
                },
                {
                        "q": "PHYSICS: The split-ring commutator is an essential component of which electrical device?",
                        "options": [
                                "DC Motor",
                                "AC Generator",
                                "Step-up Transformer",
                                "Galvanometer"
                        ],
                        "correct": "DC Motor",
                        "ans": 0,
                        "explanation": "A split-ring commutator reverses the direction of current in the armature coil every half rotation in a DC motor."
                },
                {
                        "q": "PHYSICS: The phenomenon responsible for the blue color of the clear sky during daytime is:",
                        "options": [
                                "Scattering of light",
                                "Total internal reflection",
                                "Dispersion of light",
                                "Atmospheric refraction"
                        ],
                        "correct": "Scattering of light",
                        "ans": 0,
                        "explanation": "According to Rayleigh scattering, shorter blue wavelengths scatter far more than red (I ∝ 1/λ⁴)."
                },
                {
                        "q": "PHYSICS: Twinkling of stars at night is caused by:",
                        "options": [
                                "Atmospheric refraction of starlight",
                                "Scattering of light",
                                "Total internal reflection in air layers",
                                "Continuous emission of pulses"
                        ],
                        "correct": "Atmospheric refraction of starlight",
                        "ans": 0,
                        "explanation": "Continuous variation in optical density and refractive index of atmospheric air layers causes fluctuating apparent position."
                },
                {
                        "q": "PHYSICS: In Fleming's Left-Hand Rule, the middle finger represents the direction of:",
                        "options": [
                                "Electric Current",
                                "Magnetic Field",
                                "Force / Motion",
                                "Induced EMF"
                        ],
                        "correct": "Electric Current",
                        "ans": 0,
                        "explanation": "Left Hand Rule: Thumb = Force/Motion, Forefinger = Magnetic Field, Middle finger = Current."
                },
                {
                        "q": "PHYSICS: What is the minimum distance required between source and reflector for hearing a distinct echo in air (at 20°C)?",
                        "options": [
                                "17.2 meters",
                                "34.4 meters",
                                "10.0 meters",
                                "25.0 meters"
                        ],
                        "correct": "17.2 meters",
                        "ans": 0,
                        "explanation": "Speed of sound ≈ 344 m/s. Persistence of hearing = 0.1 s. Total 2d = 344 × 0.1 = 34.4 m ⇒ d = 17.2 m."
                },
                {
                        "q": "PHYSICS: The momentum of an object of mass m moving with velocity v is given by:",
                        "options": [
                                "m · v",
                                "½ m · v²",
                                "m / v",
                                "m · v²"
                        ],
                        "correct": "m · v",
                        "ans": 0,
                        "explanation": "Linear momentum p = mass × velocity = m·v."
                },
                {
                        "q": "PHYSICS: 1 Horse Power (1 HP) is equal to how many Watts?",
                        "options": [
                                "746 Watts",
                                "1000 Watts",
                                "500 Watts",
                                "750 Watts"
                        ],
                        "correct": "746 Watts",
                        "ans": 0,
                        "explanation": "1 Horsepower = 746 Watts."
                },
                {
                        "q": "PHYSICS: The acceleration due to gravity 'g' is maximum at which location on Earth?",
                        "options": [
                                "At the Poles",
                                "At the Equator",
                                "At the Center of Earth",
                                "At 45° Latitude"
                        ],
                        "correct": "At the Poles",
                        "ans": 0,
                        "explanation": "Earth is flattened at poles (smaller radius R), so g = GM/R² is maximum at poles (~9.83 m/s²)."
                },
                {
                        "q": "PHYSICS: Sound waves in air are classified as:",
                        "options": [
                                "Longitudinal mechanical waves",
                                "Transverse electromagnetic waves",
                                "Stationary light waves",
                                "Surface ripples"
                        ],
                        "correct": "Longitudinal mechanical waves",
                        "ans": 0,
                        "explanation": "Sound waves travel via compressions and rarefactions where particle vibration is parallel to wave propagation."
                },
                {
                        "q": "PHYSICS: An electric bulb rated 220 V, 100 W is operated on 110 V. The power consumed will be:",
                        "options": [
                                "25 W",
                                "50 W",
                                "75 W",
                                "100 W"
                        ],
                        "correct": "25 W",
                        "ans": 0,
                        "explanation": "R = V²/P = 220²/100 = 484 Ω. At 110 V: P' = V'²/R = 110²/484 = 25 W."
                },
                {
                        "q": "PHYSICS: The least distance of distinct vision for a normal human young adult eye is:",
                        "options": [
                                "25 cm",
                                "2.5 cm",
                                "25 m",
                                "Infinity"
                        ],
                        "correct": "25 cm",
                        "ans": 0,
                        "explanation": "The near point for clear, strain-free vision in a normal eye is 25 cm."
                },
                {
                        "q": "PHYSICS: The magnetic field lines inside a current-carrying long straight solenoid are:",
                        "options": [
                                "Parallel straight lines (Uniform field)",
                                "Concentric circular loops",
                                "Elliptical spirals",
                                "Zero everywhere"
                        ],
                        "correct": "Parallel straight lines (Uniform field)",
                        "ans": 0,
                        "explanation": "Inside a solenoid, field lines are uniform and parallel along the longitudinal axis."
                },
                {
                        "q": "PHYSICS: When a light ray enters from water into glass, it bends:",
                        "options": [
                                "Towards the normal and slows down",
                                "Away from the normal and speeds up",
                                "Straight without deviation",
                                "Reflects back 100%"
                        ],
                        "correct": "Towards the normal and slows down",
                        "ans": 0,
                        "explanation": "Glass is optically denser than water (μ_glass ≈ 1.5 > μ_water ≈ 1.33), so ray bends towards normal."
                },
                {
                        "q": "PHYSICS: The temperature at which Celsius and Fahrenheit scales read the exact same numerical value is:",
                        "options": [
                                "-40°",
                                "+40°",
                                "0°",
                                "-273°"
                        ],
                        "correct": "-40°",
                        "ans": 0,
                        "explanation": "C/5 = (F-32)/9. Putting C = F = x gives 9x = 5x - 160 ⇒ 4x = -160 ⇒ x = -40°."
                },
                {
                        "q": "PHYSICS: The rate of change of momentum of a body is directly proportional to:",
                        "options": [
                                "Applied Net Force",
                                "Kinetic Energy",
                                "Velocity",
                                "Displacement"
                        ],
                        "correct": "Applied Net Force",
                        "ans": 0,
                        "explanation": "Newton's Second Law of Motion: F = dp/dt."
                },
                {
                        "q": "PHYSICS: A device that converts mechanical energy into electrical energy based on electromagnetic induction is:",
                        "options": [
                                "Electric Generator (Dynamo)",
                                "Electric Motor",
                                "Voltmeter",
                                "Rheostat"
                        ],
                        "correct": "Electric Generator (Dynamo)",
                        "ans": 0,
                        "explanation": "Generators use Faraday's law of electromagnetic induction to convert rotational motion into electrical current."
                },
                {
                        "q": "PHYSICS: The heat produced in a conductor of resistance R carrying current I for time t is given by Joule's Law as:",
                        "options": [
                                "H = I² · R · t",
                                "H = I · R² · t",
                                "H = I · R · t²",
                                "H = I² / (R · t)"
                        ],
                        "correct": "H = I² · R · t",
                        "ans": 0,
                        "explanation": "Joule's Law of heating: H = I²Rt."
                },
                {
                        "q": "PHYSICS: Which of the following mirrors is used as a rear-view mirror in automobiles?",
                        "options": [
                                "Convex mirror",
                                "Concave mirror",
                                "Plane mirror",
                                "Parabolic mirror"
                        ],
                        "correct": "Convex mirror",
                        "ans": 0,
                        "explanation": "Convex mirrors always give an erect, diminished virtual image and have a wide field of view."
                },
                {
                        "q": "PHYSICS: The kinetic energy of an object of mass 2 kg moving at 4 m/s is:",
                        "options": [
                                "16 Joules",
                                "8 Joules",
                                "32 Joules",
                                "4 Joules"
                        ],
                        "correct": "16 Joules",
                        "ans": 0,
                        "explanation": "KE = ½ m v² = ½ × 2 × 4² = 16 Joules."
                },
                {
                        "q": "PHYSICS: In domestic electric wiring in India, the color of the insulation wire for Live wire is:",
                        "options": [
                                "Red / Brown",
                                "Black / Blue",
                                "Green / Yellow",
                                "White"
                        ],
                        "correct": "Red / Brown",
                        "ans": 0,
                        "explanation": "Live wire is Red/Brown, Neutral wire is Black/Light Blue, and Earth wire is Green/Yellow."
                },
                {
                        "q": "PHYSICS: What is the speed of light in vacuum?",
                        "options": [
                                "3 × 10⁸ m/s",
                                "3 × 10⁵ m/s",
                                "3 × 10⁶ m/s",
                                "3 × 10¹⁰ m/s"
                        ],
                        "correct": "3 × 10⁸ m/s",
                        "ans": 0,
                        "explanation": "Speed of light c = 3.0 × 10⁸ m/s = 300,000 km/s."
                },
                {
                        "q": "PHYSICS: Buoyant force exerted by a fluid on an immersed body depends on:",
                        "options": [
                                "Volume of displaced liquid and density of fluid",
                                "Mass of the container",
                                "Depth of the ocean",
                                "Atmospheric pressure only"
                        ],
                        "correct": "Volume of displaced liquid and density of fluid",
                        "ans": 0,
                        "explanation": "Archimedes' Principle: F_b = V_displaced × ρ_fluid × g."
                },
                {
                        "q": "PHYSICS: Which electromagnetic radiation has the shortest wavelength in the visible spectrum?",
                        "options": [
                                "Violet",
                                "Red",
                                "Green",
                                "Yellow"
                        ],
                        "correct": "Violet",
                        "ans": 0,
                        "explanation": "Violet has shortest wavelength (~400 nm) and highest frequency among visible colors."
                },
                {
                        "q": "PHYSICS: The unit of electric potential difference (Voltage) is:",
                        "options": [
                                "Volt (Joule / Coulomb)",
                                "Ampere",
                                "Ohm",
                                "Watt"
                        ],
                        "correct": "Volt (Joule / Coulomb)",
                        "ans": 0,
                        "explanation": "V = W / Q ⇒ 1 Volt = 1 Joule per Coulomb."
                },
                {
                        "q": "PHYSICS: Convex lens is also known as a:",
                        "options": [
                                "Converging lens",
                                "Diverging lens",
                                "Bifocal lens",
                                "Cylindrical lens"
                        ],
                        "correct": "Converging lens",
                        "ans": 0,
                        "explanation": "Convex lenses converge parallel incoming rays of light towards the principal focus."
                },
                {
                        "q": "PHYSICS: What happens to the resistance of a pure semiconductor (like Silicon) when its temperature increases?",
                        "options": [
                                "Decreases",
                                "Increases",
                                "Remains constant",
                                "Becomes infinite"
                        ],
                        "correct": "Decreases",
                        "ans": 0,
                        "explanation": "Semiconductors have negative temperature coefficient of resistance; more electron-hole pairs are thermally generated."
                },
                {
                        "q": "PHYSICS: The primary source of solar energy radiated by the Sun is:",
                        "options": [
                                "Nuclear Fusion of Hydrogen into Helium",
                                "Nuclear Fission of Uranium",
                                "Chemical combustion of gases",
                                "Gravitational contraction"
                        ],
                        "correct": "Nuclear Fusion of Hydrogen into Helium",
                        "ans": 0,
                        "explanation": "Thermonuclear fusion reactions in solar core convert hydrogen into helium with massive mass defect energy release."
                },
                {
                        "q": "PHYSICS: If the length of a metallic wire is doubled while keeping area of cross-section constant, its resistance becomes:",
                        "options": [
                                "2 times (Doubled)",
                                "4 times",
                                "Half",
                                "Unaffected"
                        ],
                        "correct": "2 times (Doubled)",
                        "ans": 0,
                        "explanation": "R = ρ·L/A. Resistance is directly proportional to length."
                },
                {
                        "q": "PHYSICS: The work done in moving a charge of 5 Coulombs across two points having potential difference 12 V is:",
                        "options": [
                                "60 Joules",
                                "2.4 Joules",
                                "17 Joules",
                                "0.41 Joules"
                        ],
                        "correct": "60 Joules",
                        "ans": 0,
                        "explanation": "W = Q × V = 5 C × 12 V = 60 Joules."
                },
                {
                        "q": "PHYSICS: Which quantity remains unchanged when a light wave is refracted from one medium to another?",
                        "options": [
                                "Frequency",
                                "Wavelength",
                                "Speed",
                                "Amplitude"
                        ],
                        "correct": "Frequency",
                        "ans": 0,
                        "explanation": "Frequency is determined solely by the source of radiation and remains invariant across mediums."
                },
                {
                        "q": "PHYSICS: The phenomenon of splitting of white light into its seven constituent colors by a prism is called:",
                        "options": [
                                "Dispersion",
                                "Diffraction",
                                "Polarization",
                                "Interference"
                        ],
                        "correct": "Dispersion",
                        "ans": 0,
                        "explanation": "Different wavelengths travel at slightly different speeds in glass, causing angular dispersion into VIBGYOR."
                },
                {
                        "q": "PHYSICS: An object placed at the center of curvature (C) of a concave mirror forms an image at:",
                        "options": [
                                "At C (Real, inverted and same size)",
                                "At Focus F",
                                "Between F and C",
                                "Beyond C"
                        ],
                        "correct": "At C (Real, inverted and same size)",
                        "ans": 0,
                        "explanation": "For object at C of concave mirror, image is real, inverted, same size and located at C (m = -1)."
                },
                {
                        "q": "PHYSICS: The effective resistance of two 10 Ω resistors connected in series is:",
                        "options": [
                                "20 Ω",
                                "5 Ω",
                                "10 Ω",
                                "100 Ω"
                        ],
                        "correct": "20 Ω",
                        "ans": 0,
                        "explanation": "R_series = R1 + R2 = 10 + 10 = 20 Ω."
                },
                {
                        "q": "PHYSICS: Hydraulic brakes used in modern heavy vehicles operate on:",
                        "options": [
                                "Pascal's Principle",
                                "Bernoulli's Principle",
                                "Archimedes' Principle",
                                "Torricelli's Law"
                        ],
                        "correct": "Pascal's Principle",
                        "ans": 0,
                        "explanation": "Pascal's law states that pressure applied to an enclosed fluid is transmitted undiminished in all directions."
                },
                {
                        "q": "PHYSICS: The audible frequency range for a healthy human ear is:",
                        "options": [
                                "20 Hz to 20,000 Hz (20 kHz)",
                                "Below 20 Hz only",
                                "Above 20 kHz only",
                                "100 Hz to 1,000 Hz"
                        ],
                        "correct": "20 Hz to 20,000 Hz (20 kHz)",
                        "ans": 0,
                        "explanation": "Human hearing ranges from 20 Hz (infrasonic threshold) to 20 kHz (ultrasonic threshold)."
                },
                {
                        "q": "PHYSICS: The direction of induced electric current in a closed loop conductor is given by:",
                        "options": [
                                "Lenz's Law & Fleming's Right-Hand Rule",
                                "Fleming's Left-Hand Rule",
                                "Coulomb's Law",
                                "Ohm's Law"
                        ],
                        "correct": "Lenz's Law & Fleming's Right-Hand Rule",
                        "ans": 0,
                        "explanation": "Lenz's Law gives the polarity (conservation of energy) and Fleming's Right-Hand rule gives direction of induced current."
                },
                {
                        "q": "PHYSICS: The critical angle for total internal reflection between glass (μ=1.5) and air is approximately:",
                        "options": [
                                "41.8° (~42°)",
                                "90°",
                                "30°",
                                "60°"
                        ],
                        "correct": "41.8° (~42°)",
                        "ans": 0,
                        "explanation": "sin C = 1/μ = 1/1.5 = 0.666 ⇒ C ≈ 41.8°."
                },
                {
                        "q": "PHYSICS: Which law states that 'Current flowing through a conductor is directly proportional to the potential difference across its ends at constant temperature'?",
                        "options": [
                                "Ohm's Law",
                                "Joule's Law",
                                "Ampere's Circuital Law",
                                "Faraday's Law"
                        ],
                        "correct": "Ohm's Law",
                        "ans": 0,
                        "explanation": "V = I·R represents Ohm's Law."
                },
                {
                        "q": "PHYSICS: The core of an electromagnet is constructed using:",
                        "options": [
                                "Soft Iron",
                                "Steel",
                                "Alnico",
                                "Copper"
                        ],
                        "correct": "Soft Iron",
                        "ans": 0,
                        "explanation": "Soft iron has high magnetic permeability and low retentivity/coercivity, magnetizing and demagnetizing instantly."
                },
                {
                        "q": "PHYSICS: The escape velocity of a projectile from Earth does NOT depend on:",
                        "options": [
                                "Mass of the projectile",
                                "Mass of the Earth",
                                "Radius of the Earth",
                                "Universal Gravitational constant G"
                        ],
                        "correct": "Mass of the projectile",
                        "ans": 0,
                        "explanation": "v_esc = √(2GM/R), independent of the mass of the escaping body."
                },
                {
                        "q": "CHEMISTRY: Which gas is evolved when dilute hydrochloric acid reacts with zinc granules?",
                        "options": [
                                "Hydrogen gas (H2)",
                                "Oxygen gas (O2)",
                                "Chlorine gas (Cl2)",
                                "Carbon dioxide (CO2)"
                        ],
                        "correct": "Hydrogen gas (H2)",
                        "ans": 0,
                        "explanation": "Zn + 2HCl → ZnCl2 + H2↑ (burns with a characteristic pop sound)."
                },
                {
                        "q": "CHEMISTRY: The chemical formula of Baking Soda is:",
                        "options": [
                                "Sodium Hydrogen Carbonate (NaHCO3)",
                                "Sodium Carbonate Decahydrate (Na2CO3·10H2O)",
                                "Sodium Hydroxide (NaOH)",
                                "Calcium Oxychloride (CaOCl2)"
                        ],
                        "correct": "Sodium Hydrogen Carbonate (NaHCO3)",
                        "ans": 0,
                        "explanation": "Baking soda is Sodium Bicarbonate: NaHCO3."
                },
                {
                        "q": "CHEMISTRY: The chemical formula of Bleaching Powder is:",
                        "options": [
                                "CaOCl2",
                                "Ca(OH)2",
                                "CaCl2",
                                "CaCO3"
                        ],
                        "correct": "CaOCl2",
                        "ans": 0,
                        "explanation": "Bleaching powder is Calcium Oxychloride (CaOCl2), formed by action of chlorine on dry slaked lime."
                },
                {
                        "q": "CHEMISTRY: The pH value of gastric juice in the human stomach during digestion is approximately:",
                        "options": [
                                "1.2 to 2.0 (Strongly Acidic)",
                                "7.0 (Neutral)",
                                "8.5 (Basic)",
                                "14.0"
                        ],
                        "correct": "1.2 to 2.0 (Strongly Acidic)",
                        "ans": 0,
                        "explanation": "Gastric juice contains dilute Hydrochloric acid (HCl) with a pH around 1.2 - 2.0 to activate pepsin."
                },
                {
                        "q": "CHEMISTRY: An aqueous solution turns red litmus paper blue. Its pH is likely to be:",
                        "options": [
                                "10",
                                "1",
                                "4",
                                "5"
                        ],
                        "correct": "10",
                        "ans": 0,
                        "explanation": "Bases turn red litmus paper blue, corresponding to pH > 7 (i.e. pH 10)."
                },
                {
                        "q": "CHEMISTRY: Which metal is liquid at room temperature (25°C)?",
                        "options": [
                                "Mercury (Hg)",
                                "Bromine (Br)",
                                "Gallium (Ga)",
                                "Sodium (Na)"
                        ],
                        "correct": "Mercury (Hg)",
                        "ans": 0,
                        "explanation": "Mercury is the only metal that is liquid at standard room temperature."
                },
                {
                        "q": "CHEMISTRY: Which non-metal is liquid at room temperature?",
                        "options": [
                                "Bromine (Br2)",
                                "Chlorine (Cl2)",
                                "Iodine (I2)",
                                "Phosphorus (P4)"
                        ],
                        "correct": "Bromine (Br2)",
                        "ans": 0,
                        "explanation": "Bromine is a reddish-brown liquid non-metal at room temperature."
                },
                {
                        "q": "CHEMISTRY: Stainless steel is an alloy of Iron with:",
                        "options": [
                                "Chromium, Nickel and Carbon",
                                "Copper and Zinc",
                                "Tin and Lead",
                                "Aluminum and Magnesium"
                        ],
                        "correct": "Chromium, Nickel and Carbon",
                        "ans": 0,
                        "explanation": "Stainless steel contains Iron + Chromium (~18%) + Nickel (~8%) + small Carbon (<0.1%) for rust resistance."
                },
                {
                        "q": "CHEMISTRY: Brass is an alloy composed of:",
                        "options": [
                                "Copper and Zinc (Cu + Zn)",
                                "Copper and Tin (Cu + Sn)",
                                "Lead and Tin (Pb + Sn)",
                                "Iron and Carbon"
                        ],
                        "correct": "Copper and Zinc (Cu + Zn)",
                        "ans": 0,
                        "explanation": "Brass is Cu (~70%) + Zn (~30%). Bronze is Cu + Sn."
                },
                {
                        "q": "CHEMISTRY: Bronze is an alloy composed of:",
                        "options": [
                                "Copper and Tin (Cu + Sn)",
                                "Copper and Zinc (Cu + Zn)",
                                "Iron and Nickel",
                                "Aluminum and Copper"
                        ],
                        "correct": "Copper and Tin (Cu + Sn)",
                        "ans": 0,
                        "explanation": "Bronze is composed primarily of Copper (~88%) and Tin (~12%)."
                },
                {
                        "q": "CHEMISTRY: Solder (used for welding electrical joints) is an alloy of:",
                        "options": [
                                "Lead and Tin (Pb + Sn)",
                                "Copper and Zinc",
                                "Iron and Carbon",
                                "Aluminum and Silicon"
                        ],
                        "correct": "Lead and Tin (Pb + Sn)",
                        "ans": 0,
                        "explanation": "Solder is an alloy of Lead (Pb ~50%) and Tin (Sn ~50%) having a low melting point."
                },
                {
                        "q": "CHEMISTRY: The functional group present in aldehydes is:",
                        "options": [
                                "-CHO",
                                "-COOH",
                                "-OH",
                                ">C=O (Ketone)"
                        ],
                        "correct": "-CHO",
                        "ans": 0,
                        "explanation": "Aldehyde group is -CHO (formyl group)."
                },
                {
                        "q": "CHEMISTRY: The general molecular formula for alkanes (saturated hydrocarbons) is:",
                        "options": [
                                "CnH2n+2",
                                "CnH2n",
                                "CnH2n-2",
                                "CnHn"
                        ],
                        "correct": "CnH2n+2",
                        "ans": 0,
                        "explanation": "Alkanes follow CnH2n+2 (e.g. CH4, C2H6)."
                },
                {
                        "q": "CHEMISTRY: The general molecular formula for alkenes (double bond) is:",
                        "options": [
                                "CnH2n",
                                "CnH2n+2",
                                "CnH2n-2",
                                "CnH2n-4"
                        ],
                        "correct": "CnH2n",
                        "ans": 0,
                        "explanation": "Alkenes contain a C=C double bond and follow CnH2n (e.g. C2H4 Ethene)."
                },
                {
                        "q": "CHEMISTRY: The general molecular formula for alkynes (triple bond) is:",
                        "options": [
                                "CnH2n-2",
                                "CnH2n",
                                "CnH2n+2",
                                "CnHn"
                        ],
                        "correct": "CnH2n-2",
                        "ans": 0,
                        "explanation": "Alkynes contain a C≡C triple bond and follow CnH2n-2 (e.g. C2H2 Ethyne/Acetylene)."
                },
                {
                        "q": "CHEMISTRY: Modern Periodic Table classifies chemical elements based on their:",
                        "options": [
                                "Atomic Number (Z)",
                                "Atomic Mass (A)",
                                "Mass Number",
                                "Neutron Count"
                        ],
                        "correct": "Atomic Number (Z)",
                        "ans": 0,
                        "explanation": "Moseley's Modern Periodic Law states properties of elements are periodic functions of their Atomic Numbers."
                },
                {
                        "q": "CHEMISTRY: How many vertical Groups and horizontal Periods are present in the Modern Periodic Table?",
                        "options": [
                                "18 Groups and 7 Periods",
                                "16 Groups and 8 Periods",
                                "8 Groups and 7 Periods",
                                "7 Groups and 18 Periods"
                        ],
                        "correct": "18 Groups and 7 Periods",
                        "ans": 0,
                        "explanation": "The standard IUPAC modern periodic table contains 18 vertical columns (groups) and 7 horizontal rows (periods)."
                },
                {
                        "q": "CHEMISTRY: Which element is the most electronegative in the entire periodic table?",
                        "options": [
                                "Fluorine (F)",
                                "Chlorine (Cl)",
                                "Oxygen (O)",
                                "Nitrogen (N)"
                        ],
                        "correct": "Fluorine (F)",
                        "ans": 0,
                        "explanation": "Fluorine has the highest Pauling electronegativity value of 4.0."
                },
                {
                        "q": "CHEMISTRY: The reaction in which oxidation and reduction occur simultaneously is called:",
                        "options": [
                                "Redox Reaction",
                                "Displacement Reaction",
                                "Precipitation Reaction",
                                "Neutralization Reaction"
                        ],
                        "correct": "Redox Reaction",
                        "ans": 0,
                        "explanation": "Redox is short for Reduction-Oxidation reaction."
                },
                {
                        "q": "CHEMISTRY: Rancidity in edible oil- and fat-containing food is caused by:",
                        "options": [
                                "Oxidation of fats and oils",
                                "Reduction of proteins",
                                "Hydrolysis by salts",
                                "Carbonation"
                        ],
                        "correct": "Oxidation of fats and oils",
                        "ans": 0,
                        "explanation": "Aerial oxidation of unsaturated fats creates volatile malodorous compounds, prevented using antioxidants / N2 flush."
                },
                {
                        "q": "CHEMISTRY: Which gas is flushed into bags of potato chips to prevent rancidity oxidation?",
                        "options": [
                                "Nitrogen gas (N2)",
                                "Oxygen gas (O2)",
                                "Chlorine gas (Cl2)",
                                "Carbon Monoxide (CO)"
                        ],
                        "correct": "Nitrogen gas (N2)",
                        "ans": 0,
                        "explanation": "Nitrogen is an unreactive inert gas that displaces oxygen and prevents fat oxidation."
                },
                {
                        "q": "CHEMISTRY: Chemical formula of rust is:",
                        "options": [
                                "Hydrated Ferric Oxide (Fe2O3 · xH2O)",
                                "Fe3O4",
                                "FeO",
                                "FeCl3"
                        ],
                        "correct": "Hydrated Ferric Oxide (Fe2O3 · xH2O)",
                        "ans": 0,
                        "explanation": "Rust is hydrated iron(III) oxide: Fe2O3·xH2O."
                },
                {
                        "q": "CHEMISTRY: The process of roasting in metallurgy is carried out in:",
                        "options": [
                                "Presence of excess air/oxygen below melting point",
                                "Absence of air",
                                "Vacuum furnace",
                                "High pressure hydrogen"
                        ],
                        "correct": "Presence of excess air/oxygen below melting point",
                        "ans": 0,
                        "explanation": "Sulphide ores are converted to oxides by heating strongly in excess air (Roasting). Carbonate ores use Calcination (limited air)."
                },
                {
                        "q": "CHEMISTRY: Cinnabar is the chief mineral ore of which metal?",
                        "options": [
                                "Mercury (HgS)",
                                "Lead (PbS)",
                                "Zinc (ZnS)",
                                "Copper (Cu2S)"
                        ],
                        "correct": "Mercury (HgS)",
                        "ans": 0,
                        "explanation": "Cinnabar is Mercuric Sulphide (HgS)."
                },
                {
                        "q": "CHEMISTRY: Bauxite (Al2O3 · 2H2O) is the principal ore of:",
                        "options": [
                                "Aluminum (Al)",
                                "Iron (Fe)",
                                "Copper (Cu)",
                                "Zinc (Zn)"
                        ],
                        "correct": "Aluminum (Al)",
                        "ans": 0,
                        "explanation": "Bauxite is hydrated aluminum oxide ore used in the Hall-Héroult electrolytic extraction."
                },
                {
                        "q": "CHEMISTRY: What is the IUPAC name of Acetic Acid (CH3COOH)?",
                        "options": [
                                "Ethanoic Acid",
                                "Methanoic Acid",
                                "Propanoic Acid",
                                "Butanoic Acid"
                        ],
                        "correct": "Ethanoic Acid",
                        "ans": 0,
                        "explanation": "CH3COOH has two carbons with carboxylic acid suffix '-oic acid' → Ethanoic acid."
                },
                {
                        "q": "CHEMISTRY: The functional group in Carboxylic Acids is:",
                        "options": [
                                "-COOH",
                                "-OH",
                                "-CHO",
                                "-NH2"
                        ],
                        "correct": "-COOH",
                        "ans": 0,
                        "explanation": "Carboxylic acid functional group is -COOH."
                },
                {
                        "q": "CHEMISTRY: Saponification is the chemical reaction between an ester/fat and a strong base to produce:",
                        "options": [
                                "Soap and Glycerol (Alcohol)",
                                "Acid and Salt",
                                "Ester and Water",
                                "Polymer and Aldehyde"
                        ],
                        "correct": "Soap and Glycerol (Alcohol)",
                        "ans": 0,
                        "explanation": "Fat/Oil (Triglyceride) + 3NaOH → 3 Soap (Sodium carboxylate) + Glycerol."
                },
                {
                        "q": "CHEMISTRY: Vinegar is an aqueous solution containing:",
                        "options": [
                                "5% to 8% Ethanoic (Acetic) Acid in water",
                                "50% Alcohol in water",
                                "100% pure glacial acetic acid",
                                "Dilute Hydrochloric acid"
                        ],
                        "correct": "5% to 8% Ethanoic (Acetic) Acid in water",
                        "ans": 0,
                        "explanation": "Vinegar used in food preservation is a 5-8% solution of acetic acid in water."
                },
                {
                        "q": "CHEMISTRY: Which allotrope of carbon is an excellent conductor of electricity?",
                        "options": [
                                "Graphite",
                                "Diamond",
                                "Fullerene (C60)",
                                "Charcoal"
                        ],
                        "correct": "Graphite",
                        "ans": 0,
                        "explanation": "Graphite has sp² hybridized carbon atoms with free delocalized pi-electrons between hexagonal layers."
                },
                {
                        "q": "CHEMISTRY: The hardest naturally occurring substance known on Earth is:",
                        "options": [
                                "Diamond",
                                "Corundum",
                                "Topaz",
                                "Quartz"
                        ],
                        "correct": "Diamond",
                        "ans": 0,
                        "explanation": "Diamond has a rigid 3D tetrahedral network of sp³ carbon atoms giving a Mohs hardness of 10."
                },
                {
                        "q": "CHEMISTRY: The atomic number of Carbon (C) is:",
                        "options": [
                                "6",
                                "12",
                                "14",
                                "4"
                        ],
                        "correct": "6",
                        "ans": 0,
                        "explanation": "Carbon has atomic number Z = 6 and electronic configuration 2, 4."
                },
                {
                        "q": "CHEMISTRY: What is the valency of noble gases (e.g. Helium, Neon, Argon)?",
                        "options": [
                                "0 (Zero)",
                                "8",
                                "2",
                                "1"
                        ],
                        "correct": "0 (Zero)",
                        "ans": 0,
                        "explanation": "Noble gases have complete octets/duplets in their outermost valence shell, resulting in zero combining capacity."
                },
                {
                        "q": "CHEMISTRY: In an electrolytic cell, the cathode is the:",
                        "options": [
                                "Negatively charged electrode where Reduction occurs",
                                "Positively charged electrode",
                                "Neutral terminal",
                                "Salt bridge"
                        ],
                        "correct": "Negatively charged electrode where Reduction occurs",
                        "ans": 0,
                        "explanation": "In electrolysis, cathode is connected to negative terminal and attracts cations for reduction."
                },
                {
                        "q": "CHEMISTRY: What happens to atomic radius when moving from Left to Right across a Period in the Periodic Table?",
                        "options": [
                                "Decreases",
                                "Increases",
                                "Remains same",
                                "First increases then decreases"
                        ],
                        "correct": "Decreases",
                        "ans": 0,
                        "explanation": "Effective nuclear charge increases across a period pulling the valence electron cloud closer to the nucleus."
                },
                {
                        "q": "CHEMISTRY: The law of Octaves was proposed by which scientist?",
                        "options": [
                                "John Newlands",
                                "Dmitri Mendeleev",
                                "Johann Dobereiner",
                                "Henry Moseley"
                        ],
                        "correct": "John Newlands",
                        "ans": 0,
                        "explanation": "Newlands' Law of Octaves (1865) arranged elements by increasing atomic mass where every eighth element had similar properties."
                },
                {
                        "q": "CHEMISTRY: Dobereiner's classification grouped elements into sets of three called:",
                        "options": [
                                "Triads",
                                "Octets",
                                "Periods",
                                "Isotopes"
                        ],
                        "correct": "Triads",
                        "ans": 0,
                        "explanation": "Dobereiner's Triads (e.g. Li, Na, K) where middle element mass ≈ average of the other two."
                },
                {
                        "q": "CHEMISTRY: The gas responsible for greenhouse effect and global warming primarily emitted from burning fossil fuels is:",
                        "options": [
                                "Carbon Dioxide (CO2)",
                                "Oxygen (O2)",
                                "Nitrogen (N2)",
                                "Argon (Ar)"
                        ],
                        "correct": "Carbon Dioxide (CO2)",
                        "ans": 0,
                        "explanation": "CO2 absorbs infrared heat radiation emitted from Earth's surface."
                },
                {
                        "q": "CHEMISTRY: Acid rain is primarily caused by atmospheric emissions of:",
                        "options": [
                                "Sulphur Dioxide (SO2) and Nitrogen Oxides (NOx)",
                                "Carbon Monoxide and Hydrogen",
                                "Methane and Helium",
                                "Chlorofluorocarbons"
                        ],
                        "correct": "Sulphur Dioxide (SO2) and Nitrogen Oxides (NOx)",
                        "ans": 0,
                        "explanation": "SO2 and NO2 react with rain water forming H2SO4 and HNO3 acid precipitation."
                },
                {
                        "q": "CHEMISTRY: The depletion of the stratospheric Ozone layer (O3) is mainly caused by:",
                        "options": [
                                "Chlorofluorocarbons (CFCs / Freons)",
                                "Carbon Dioxide",
                                "Methane",
                                "Water vapor"
                        ],
                        "correct": "Chlorofluorocarbons (CFCs / Freons)",
                        "ans": 0,
                        "explanation": "UV light breaks CFCs into chlorine free radicals which catalyze catalytic breakdown of O3 into O2."
                },
                {
                        "q": "CHEMISTRY: What is the mass of 1 mole of Oxygen gas molecules (O2)?",
                        "options": [
                                "32 grams",
                                "16 grams",
                                "8 grams",
                                "64 grams"
                        ],
                        "correct": "32 grams",
                        "ans": 0,
                        "explanation": "Molar mass of O2 = 2 × 16 = 32 g/mol."
                },
                {
                        "q": "CHEMISTRY: Avogadro's number (NA) represents the number of particles in one mole, equal to:",
                        "options": [
                                "6.022 × 10²³",
                                "6.022 × 10²²",
                                "1.6 × 10⁻¹⁹",
                                "9.1 × 10⁻³¹"
                        ],
                        "correct": "6.022 × 10²³",
                        "ans": 0,
                        "explanation": "1 mole = 6.022 × 10²³ entities."
                },
                {
                        "q": "CHEMISTRY: An atom with atomic number 11 and mass number 23 has how many neutrons?",
                        "options": [
                                "12 neutrons",
                                "11 neutrons",
                                "23 neutrons",
                                "34 neutrons"
                        ],
                        "correct": "12 neutrons",
                        "ans": 0,
                        "explanation": "Number of Neutrons N = A - Z = 23 - 11 = 12."
                },
                {
                        "q": "CHEMISTRY: Isotopes of an element have the same number of:",
                        "options": [
                                "Protons (Same Atomic Number)",
                                "Neutrons",
                                "Mass Number",
                                "Physical boiling point"
                        ],
                        "correct": "Protons (Same Atomic Number)",
                        "ans": 0,
                        "explanation": "Isotopes have identical atomic numbers (protons) but different neutron counts / mass numbers."
                },
                {
                        "q": "CHEMISTRY: Chemical bonding formed by the complete transfer of valence electrons from one atom to another is:",
                        "options": [
                                "Ionic (Electrovalent) Bond",
                                "Covalent Bond",
                                "Coordinate Bond",
                                "Hydrogen Bond"
                        ],
                        "correct": "Ionic (Electrovalent) Bond",
                        "ans": 0,
                        "explanation": "Ionic bonds form between metals (electron donors) and non-metals (electron acceptors)."
                },
                {
                        "q": "CHEMISTRY: Which element has electronic configuration 2, 8, 2?",
                        "options": [
                                "Magnesium (Mg, Z=12)",
                                "Calcium (Ca, Z=20)",
                                "Sodium (Na, Z=11)",
                                "Aluminum (Al, Z=13)"
                        ],
                        "correct": "Magnesium (Mg, Z=12)",
                        "ans": 0,
                        "explanation": "Magnesium (Z=12) has K=2, L=8, M=2."
                },
                {
                        "q": "CHEMISTRY: Quick lime is chemically known as:",
                        "options": [
                                "Calcium Oxide (CaO)",
                                "Calcium Hydroxide (Ca(OH)2)",
                                "Calcium Carbonate (CaCO3)",
                                "Calcium Sulphate (CaSO4)"
                        ],
                        "correct": "Calcium Oxide (CaO)",
                        "ans": 0,
                        "explanation": "Quicklime is CaO. Slaked lime is Ca(OH)2. Limestone is CaCO3."
                },
                {
                        "q": "CHEMISTRY: Slaked lime is chemically known as:",
                        "options": [
                                "Calcium Hydroxide (Ca(OH)2)",
                                "Calcium Oxide (CaO)",
                                "Calcium Carbonate (CaCO3)",
                                "Calcium Nitrate"
                        ],
                        "correct": "Calcium Hydroxide (Ca(OH)2)",
                        "ans": 0,
                        "explanation": "CaO + H2O → Ca(OH)2 (Slaked lime) in an exothermic reaction."
                },
                {
                        "q": "CHEMISTRY: The IUPAC name of Formaldehyde (HCHO) is:",
                        "options": [
                                "Methanal",
                                "Ethanal",
                                "Methanol",
                                "Methanoic acid"
                        ],
                        "correct": "Methanal",
                        "ans": 0,
                        "explanation": "One-carbon aldehyde HCHO is named Methanal."
                },
                {
                        "q": "CHEMISTRY: Which gas with rotten egg smell is evolved when dilute acid reacts with metal sulphides?",
                        "options": [
                                "Hydrogen Sulphide (H2S)",
                                "Sulphur Dioxide (SO2)",
                                "Carbon Monoxide",
                                "Ammonia (NH3)"
                        ],
                        "correct": "Hydrogen Sulphide (H2S)",
                        "ans": 0,
                        "explanation": "FeS + H2SO4 → FeSO4 + H2S↑ (foul rotten-egg odor)."
                },
                {
                        "q": "MATHS: If HCF(a, b) = 12 and a × b = 1800, then LCM(a, b) is equal to:",
                        "options": [
                                "150",
                                "15",
                                "180",
                                "120"
                        ],
                        "correct": "150",
                        "ans": 0,
                        "explanation": "HCF × LCM = Product of numbers ⇒ LCM = 1800 / 12 = 150."
                },
                {
                        "q": "MATHS: The discriminant (D) of the quadratic equation 2x² - 4x + 3 = 0 is:",
                        "options": [
                                "-8 (No real roots)",
                                "+8",
                                "-40",
                                "0"
                        ],
                        "correct": "-8 (No real roots)",
                        "ans": 0,
                        "explanation": "D = b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8 (< 0, imaginary roots)."
                },
                {
                        "q": "MATHS: The 10th term of the Arithmetic Progression (AP): 2, 7, 12, ... is:",
                        "options": [
                                "47",
                                "52",
                                "42",
                                "37"
                        ],
                        "correct": "47",
                        "ans": 0,
                        "explanation": "a = 2, d = 5. a₁₀ = a + (10 - 1)d = 2 + 9(5) = 47."
                },
                {
                        "q": "MATHS: The sum of first n natural numbers is given by the formula:",
                        "options": [
                                "n(n + 1) / 2",
                                "n(n - 1) / 2",
                                "n²",
                                "n(2n + 1) / 6"
                        ],
                        "correct": "n(n + 1) / 2",
                        "ans": 0,
                        "explanation": "Sum S_n = n(n + 1) / 2."
                },
                {
                        "q": "MATHS: The distance between points P(2, 3) and Q(4, 1) in the coordinate plane is:",
                        "options": [
                                "2√2 units",
                                "4 units",
                                "8 units",
                                "2 units"
                        ],
                        "correct": "2√2 units",
                        "ans": 0,
                        "explanation": "d = √[(4 - 2)² + (1 - 3)²] = √[4 + 4] = √8 = 2√2."
                },
                {
                        "q": "MATHS: The coordinates of the midpoint of the line segment joining A(-2, 8) and B(-6, -4) are:",
                        "options": [
                                "(-4, 2)",
                                "(-8, 4)",
                                "(-4, 6)",
                                "(2, -4)"
                        ],
                        "correct": "(-4, 2)",
                        "ans": 0,
                        "explanation": "M = ((x1+x2)/2, (y1+y2)/2) = ((-2-6)/2, (8-4)/2) = (-4, 2)."
                },
                {
                        "q": "MATHS: If sin θ = 3/5, then the value of cos θ (for acute angle θ) is:",
                        "options": [
                                "4/5",
                                "5/4",
                                "3/4",
                                "1/5"
                        ],
                        "correct": "4/5",
                        "ans": 0,
                        "explanation": "cos θ = √(1 - sin²θ) = √(1 - 9/25) = √(16/25) = 4/5."
                },
                {
                        "q": "MATHS: The value of (sin² 30° + cos² 30°) is equal to:",
                        "options": [
                                "1",
                                "0",
                                "1/2",
                                "√3/2"
                        ],
                        "correct": "1",
                        "ans": 0,
                        "explanation": "Fundamental identity: sin²θ + cos²θ = 1 for any angle θ."
                },
                {
                        "q": "MATHS: The value of tan 45° is equal to:",
                        "options": [
                                "1",
                                "0",
                                "1/√3",
                                "√3"
                        ],
                        "correct": "1",
                        "ans": 0,
                        "explanation": "tan 45° = 1."
                },
                {
                        "q": "MATHS: The value of (1 + tan² θ) is equal to:",
                        "options": [
                                "sec² θ",
                                "cosec² θ",
                                "cot² θ",
                                "cos² θ"
                        ],
                        "correct": "sec² θ",
                        "ans": 0,
                        "explanation": "Standard trigonometric identity: 1 + tan²θ = sec²θ."
                },
                {
                        "q": "MATHS: If a pole 6 m high casts a shadow 2√3 m long on the ground, then the sun's elevation angle is:",
                        "options": [
                                "60°",
                                "30°",
                                "45°",
                                "90°"
                        ],
                        "correct": "60°",
                        "ans": 0,
                        "explanation": "tan θ = Height / Shadow = 6 / (2√3) = 3 / √3 = √3 ⇒ θ = 60°."
                },
                {
                        "q": "MATHS: The number of tangents that can be drawn from an external point to a circle is:",
                        "options": [
                                "2 (Exactly two)",
                                "1",
                                "Infinite",
                                "0"
                        ],
                        "correct": "2 (Exactly two)",
                        "ans": 0,
                        "explanation": "From an external point, exactly two tangents of equal length can be drawn to a circle."
                },
                {
                        "q": "MATHS: The area of a circle of radius r = 7 cm is (use π = 22/7):",
                        "options": [
                                "154 cm²",
                                "44 cm²",
                                "308 cm²",
                                "77 cm²"
                        ],
                        "correct": "154 cm²",
                        "ans": 0,
                        "explanation": "Area A = π r² = (22/7) × 7 × 7 = 154 cm²."
                },
                {
                        "q": "MATHS: The circumference of a circle of radius r = 14 cm is:",
                        "options": [
                                "88 cm",
                                "44 cm",
                                "176 cm",
                                "616 cm"
                        ],
                        "correct": "88 cm",
                        "ans": 0,
                        "explanation": "Circumference C = 2 π r = 2 × (22/7) × 14 = 88 cm."
                },
                {
                        "q": "MATHS: The total surface area of a solid sphere of radius R is:",
                        "options": [
                                "4 π R²",
                                "2 π R²",
                                "3 π R²",
                                "4/3 π R³"
                        ],
                        "correct": "4 π R²",
                        "ans": 0,
                        "explanation": "Surface Area of a sphere = 4 π R²."
                },
                {
                        "q": "MATHS: The volume of a right circular cone of radius r and height h is:",
                        "options": [
                                "⅓ π r² h",
                                "π r² h",
                                "⅔ π r³",
                                "4/3 π r² h"
                        ],
                        "correct": "⅓ π r² h",
                        "ans": 0,
                        "explanation": "Volume of Cone V = ⅓ π r² h."
                },
                {
                        "q": "MATHS: The empirical relationship between Mean, Median, and Mode in statistics is:",
                        "options": [
                                "Mode = 3 Median - 2 Mean",
                                "Mean = 3 Median - 2 Mode",
                                "Median = 3 Mode - 2 Mean",
                                "Mode = Median - Mean"
                        ],
                        "correct": "Mode = 3 Median - 2 Mean",
                        "ans": 0,
                        "explanation": "Empirical relationship: Mode = 3·Median - 2·Mean."
                },
                {
                        "q": "MATHS: The probability of an impossible event is always equal to:",
                        "options": [
                                "0",
                                "1",
                                "0.5",
                                "-1"
                        ],
                        "correct": "0",
                        "ans": 0,
                        "explanation": "Impossible event P(E) = 0. Sure event P(E) = 1."
                },
                {
                        "q": "MATHS: Which of the following numbers CANNOT be the probability of an event?",
                        "options": [
                                "-1.5",
                                "2/3",
                                "15%",
                                "0.7"
                        ],
                        "correct": "-1.5",
                        "ans": 0,
                        "explanation": "Probability must satisfy 0 ≤ P(E) ≤ 1. It can never be negative or greater than 1."
                },
                {
                        "q": "MATHS: If P(E) = 0.05, then the probability of 'not E' (i.e. P(E')) is:",
                        "options": [
                                "0.95",
                                "0.05",
                                "0.5",
                                "1.05"
                        ],
                        "correct": "0.95",
                        "ans": 0,
                        "explanation": "P(E') = 1 - P(E) = 1 - 0.05 = 0.95."
                },
                {
                        "q": "MATHS: The zeroes of the quadratic polynomial p(x) = x² - 2x - 8 are:",
                        "options": [
                                "4 and -2",
                                "-4 and 2",
                                "4 and 2",
                                "-4 and -2"
                        ],
                        "correct": "4 and -2",
                        "ans": 0,
                        "explanation": "x² - 4x + 2x - 8 = x(x - 4) + 2(x - 4) = (x - 4)(x + 2) = 0 ⇒ x = 4, -2."
                },
                {
                        "q": "MATHS: For what value of k will the system of linear equations 2x + 3y = 5 and 4x + ky = 10 have infinitely many solutions?",
                        "options": [
                                "6",
                                "3",
                                "2",
                                "12"
                        ],
                        "correct": "6",
                        "ans": 0,
                        "explanation": "a1/a2 = b1/b2 = c1/c2 ⇒ 2/4 = 3/k ⇒ 1/2 = 3/k ⇒ k = 6."
                },
                {
                        "q": "MATHS: The sum of the roots (α + β) of the quadratic equation 3x² - 5x + 2 = 0 is:",
                        "options": [
                                "5/3",
                                "-5/3",
                                "2/3",
                                "-2/3"
                        ],
                        "correct": "5/3",
                        "ans": 0,
                        "explanation": "Sum of roots α + β = -b/a = -(-5)/3 = 5/3."
                },
                {
                        "q": "MATHS: The product of the roots (α · β) of the quadratic equation 3x² - 5x + 2 = 0 is:",
                        "options": [
                                "2/3",
                                "-2/3",
                                "5/3",
                                "1"
                        ],
                        "correct": "2/3",
                        "ans": 0,
                        "explanation": "Product of roots α·β = c/a = 2/3."
                },
                {
                        "q": "MATHS: If the nth term of an AP is a_n = 3 + 4n, then the common difference (d) is:",
                        "options": [
                                "4",
                                "3",
                                "7",
                                "1"
                        ],
                        "correct": "4",
                        "ans": 0,
                        "explanation": "d = a_(n) - a_(n-1) = coefficient of n = 4."
                },
                {
                        "q": "MATHS: The distance of point P(3, 4) from the origin (0, 0) is:",
                        "options": [
                                "5 units",
                                "7 units",
                                "1 unit",
                                "25 units"
                        ],
                        "correct": "5 units",
                        "ans": 0,
                        "explanation": "Distance = √(3² + 4²) = √(9 + 16) = √25 = 5 units."
                },
                {
                        "q": "MATHS: The point on x-axis which is equidistant from (2, -5) and (-2, 9) is:",
                        "options": [
                                "(-7, 0)",
                                "(7, 0)",
                                "(0, -7)",
                                "(-2, 0)"
                        ],
                        "correct": "(-7, 0)",
                        "ans": 0,
                        "explanation": "(x - 2)² + (0 + 5)² = (x + 2)² + (0 - 9)² ⇒ -4x + 29 = 4x + 85 ⇒ 8x = -56 ⇒ x = -7."
                },
                {
                        "q": "MATHS: If tan θ = 4/3, then the value of (sin θ + cos θ) is:",
                        "options": [
                                "7/5",
                                "1/5",
                                "5/7",
                                "1"
                        ],
                        "correct": "7/5",
                        "ans": 0,
                        "explanation": "sin θ = 4/5, cos θ = 3/5. Sum = 4/5 + 3/5 = 7/5."
                },
                {
                        "q": "MATHS: The value of (sin 60° · cos 30° + cos 60° · sin 30°) is:",
                        "options": [
                                "1",
                                "0",
                                "1/2",
                                "√3/2"
                        ],
                        "correct": "1",
                        "ans": 0,
                        "explanation": "sin(A + B) = sin(60° + 30°) = sin 90° = 1. Or (√3/2)(√3/2) + (1/2)(1/2) = 3/4 + 1/4 = 1."
                },
                {
                        "q": "MATHS: The value of (cosec² θ - cot² θ) is equal to:",
                        "options": [
                                "1",
                                "0",
                                "-1",
                                "sec² θ"
                        ],
                        "correct": "1",
                        "ans": 0,
                        "explanation": "Fundamental identity: cosec²θ - cot²θ = 1."
                },
                {
                        "q": "MATHS: Two triangles are similar if their corresponding sides are proportional and their corresponding angles are:",
                        "options": [
                                "Equal",
                                "Supplementary",
                                "Complementary",
                                "Proportional"
                        ],
                        "correct": "Equal",
                        "ans": 0,
                        "explanation": "Similar triangles have congruent corresponding angles and proportional corresponding side lengths."
                },
                {
                        "q": "MATHS: If the areas of two similar triangles are in the ratio 16 : 81, then the ratio of their corresponding sides is:",
                        "options": [
                                "4 : 9",
                                "16 : 81",
                                "2 : 3",
                                "8 : 9"
                        ],
                        "correct": "4 : 9",
                        "ans": 0,
                        "explanation": "Ratio of sides = √(Ratio of Areas) = √(16/81) = 4/9."
                },
                {
                        "q": "MATHS: The length of the tangent drawn from a point 10 cm away from the center of a circle of radius 6 cm is:",
                        "options": [
                                "8 cm",
                                "4 cm",
                                "√136 cm",
                                "16 cm"
                        ],
                        "correct": "8 cm",
                        "ans": 0,
                        "explanation": "L = √(d² - r²) = √(10² - 6²) = √(100 - 36) = √64 = 8 cm."
                },
                {
                        "q": "MATHS: If the perimeter and area of a circle are numerically equal, then the radius of the circle is:",
                        "options": [
                                "2 units",
                                "π units",
                                "4 units",
                                "7 units"
                        ],
                        "correct": "2 units",
                        "ans": 0,
                        "explanation": "2 π r = π r² ⇒ r² - 2r = 0 ⇒ r = 2 units."
                },
                {
                        "q": "MATHS: The volume of a cylinder of base radius r and height h is:",
                        "options": [
                                "π r² h",
                                "2 π r h",
                                "⅓ π r² h",
                                "2 π r (r + h)"
                        ],
                        "correct": "π r² h",
                        "ans": 0,
                        "explanation": "Volume of cylinder = π r² h."
                },
                {
                        "q": "MATHS: If the radius of a sphere is doubled, its volume increases by how many times?",
                        "options": [
                                "8 times",
                                "4 times",
                                "2 times",
                                "16 times"
                        ],
                        "correct": "8 times",
                        "ans": 0,
                        "explanation": "V ∝ r³. When r' = 2r, V' = (2)³ V = 8 V."
                },
                {
                        "q": "MATHS: The median of the data: 3, 5, 7, 9, 11, 13, 15 is:",
                        "options": [
                                "9",
                                "7",
                                "11",
                                "8"
                        ],
                        "correct": "9",
                        "ans": 0,
                        "explanation": "There are 7 ordered values. Median is the (7+1)/2 = 4th term = 9."
                },
                {
                        "q": "MATHS: The modal class of a frequency distribution is the class interval having the:",
                        "options": [
                                "Maximum frequency",
                                "Minimum frequency",
                                "Cumulative frequency",
                                "Average frequency"
                        ],
                        "correct": "Maximum frequency",
                        "ans": 0,
                        "explanation": "Mode corresponds to the peak frequency value."
                },
                {
                        "q": "MATHS: When a fair die is rolled once, the probability of getting a prime number (2, 3, 5) is:",
                        "options": [
                                "3/6 = 1/2",
                                "1/6",
                                "2/6 = 1/3",
                                "4/6 = 2/3"
                        ],
                        "correct": "3/6 = 1/2",
                        "ans": 0,
                        "explanation": "Prime outcomes on a die are {2, 3, 5} = 3 outcomes. P = 3/6 = 1/2."
                },
                {
                        "q": "MATHS: In a single throw of two dice, the probability of getting a doublet (same number on both dice) is:",
                        "options": [
                                "6/36 = 1/6",
                                "1/36",
                                "1/12",
                                "5/36"
                        ],
                        "correct": "6/36 = 1/6",
                        "ans": 0,
                        "explanation": "Doublets are (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) = 6. P = 6/36 = 1/6."
                },
                {
                        "q": "MATHS: The decimal expansion of rational number 13 / 125 will terminate after how many decimal places?",
                        "options": [
                                "3 decimal places",
                                "2 decimal places",
                                "1 decimal place",
                                "Non-terminating"
                        ],
                        "correct": "3 decimal places",
                        "ans": 0,
                        "explanation": "125 = 5³. Denominator is 2⁰ × 5³, so terminates after max(0, 3) = 3 decimal places."
                },
                {
                        "q": "MATHS: If α and β are the zeroes of polynomial f(x) = x² - p(x + 1) - c, then (α + 1)(β + 1) is equal to:",
                        "options": [
                                "1 - c",
                                "c - 1",
                                "c",
                                "1 + c"
                        ],
                        "correct": "1 - c",
                        "ans": 0,
                        "explanation": "f(x) = x² - px - (p + c). (α + 1)(β + 1) = αβ + (α + β) + 1 = -(p + c) + p + 1 = 1 - c."
                },
                {
                        "q": "MATHS: The number of solutions for the pair of equations x + 2y + 5 = 0 and -3x - 6y + 1 = 0 is:",
                        "options": [
                                "No solution (Parallel lines)",
                                "Unique solution",
                                "Infinitely many solutions",
                                "Two solutions"
                        ],
                        "correct": "No solution (Parallel lines)",
                        "ans": 0,
                        "explanation": "a1/a2 = 1/-3 = -1/3. b1/b2 = 2/-6 = -1/3. c1/c2 = 5/1 = 5. Since a1/a2 = b1/b2 ≠ c1/c2, parallel lines."
                },
                {
                        "q": "MATHS: If x = a cos θ and y = a sin θ, then the value of (x² + y²) is:",
                        "options": [
                                "a²",
                                "a",
                                "1",
                                "2a"
                        ],
                        "correct": "a²",
                        "ans": 0,
                        "explanation": "x² + y² = a² cos²θ + a² sin²θ = a²(cos²θ + sin²θ) = a² × 1 = a²."
                },
                {
                        "q": "MATHS: The value of (sec A + tan A)(1 - sin A) is equal to:",
                        "options": [
                                "cos A",
                                "sin A",
                                "sec A",
                                "cosec A"
                        ],
                        "correct": "cos A",
                        "ans": 0,
                        "explanation": "[(1 + sin A)/cos A] × (1 - sin A) = (1 - sin² A)/cos A = cos² A / cos A = cos A."
                },
                {
                        "q": "MATHS: The ratio in which the y-axis divides the line segment joining P(-4, 5) and Q(3, -7) is:",
                        "options": [
                                "4 : 3 internally",
                                "3 : 4 internally",
                                "4 : 3 externally",
                                "1 : 1"
                        ],
                        "correct": "4 : 3 internally",
                        "ans": 0,
                        "explanation": "For point on y-axis, x = 0 ⇒ (k·3 - 4)/(k + 1) = 0 ⇒ 3k = 4 ⇒ k = 4/3."
                },
                {
                        "q": "MATHS: The area of a triangle whose vertices are (0, 0), (4, 0), and (0, 3) is:",
                        "options": [
                                "6 sq units",
                                "12 sq units",
                                "7 sq units",
                                "5 sq units"
                        ],
                        "correct": "6 sq units",
                        "ans": 0,
                        "explanation": "Area = ½ |base × height| = ½ × 4 × 3 = 6 sq units."
                },
                {
                        "q": "MATHS: The curved surface area of a right circular cylinder of radius 7 cm and height 10 cm is (use π = 22/7):",
                        "options": [
                                "440 cm²",
                                "220 cm²",
                                "1540 cm²",
                                "880 cm²"
                        ],
                        "correct": "440 cm²",
                        "ans": 0,
                        "explanation": "CSA = 2 π r h = 2 × (22/7) × 7 × 10 = 440 cm²."
                },
                {
                        "q": "MATHS: The mean of first five prime numbers (2, 3, 5, 7, 11) is:",
                        "options": [
                                "5.6",
                                "5.0",
                                "7.0",
                                "6.2"
                        ],
                        "correct": "5.6",
                        "ans": 0,
                        "explanation": "Mean = (2 + 3 + 5 + 7 + 11) / 5 = 28 / 5 = 5.6."
                },
                {
                        "q": "MATHS: A card is drawn from a well-shuffled pack of 52 cards. The probability that the card drawn is a Red Face card (King, Queen, Jack of Hearts/Diamonds) is:",
                        "options": [
                                "6/52 = 3/26",
                                "12/52 = 3/13",
                                "1/2",
                                "1/13"
                        ],
                        "correct": "6/52 = 3/26",
                        "ans": 0,
                        "explanation": "Total face cards = 12 (6 red, 6 black). P = 6/52 = 3/26."
                }
            ]
        }
    ]
};

// Study Materials / Authentic Notes Database from Diploma Campus
window.DC_DATA.studyMaterials = [
    {
        "id": "chem-atomic-notes",
        "title": "Applied Chemistry: Atomic Structure Complete Handwritten Notes",
        "subject": "Applied Chemistry",
        "branch": "Common to All",
        "semester": 1,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem1/Che/Atomic Structure by Diploma Campus.pdf",
        "size": "6.0 MB",
        "downloads": "4.8k+",
        "rating": 4.9,
        "unit": "Unit 1"
    },
    {
        "id": "chem-electrochem-notes",
        "title": "Applied Chemistry: Electrochemistry & Battery Principles Theory Notes",
        "subject": "Applied Chemistry",
        "branch": "Common to All",
        "semester": 1,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem1/Che/electrochemistry_diplomacampus.pdf",
        "size": "7.1 MB",
        "downloads": "4.2k+",
        "rating": 4.9,
        "unit": "Unit 2"
    },
    {
        "id": "chem-metals-alloys-notes",
        "title": "Applied Chemistry: Metals, Alloys & Heat Treatment Notes",
        "subject": "Applied Chemistry",
        "branch": "Common to All",
        "semester": 1,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem1/Che/Metals And Alloys by Diploma Campus.pdf",
        "size": "10.2 MB",
        "downloads": "5.1k+",
        "rating": 4.9,
        "unit": "Unit 3"
    },
    {
        "id": "chem-non-metallic-notes",
        "title": "Applied Chemistry: Non-Metallic Materials (Polymers, Plastics & Ceramics)",
        "subject": "Applied Chemistry",
        "branch": "Common to All",
        "semester": 1,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem1/Che/Non Metallic by Diploma Campus .pdf",
        "size": "8.8 MB",
        "downloads": "3.8k+",
        "rating": 4.9,
        "unit": "Unit 4"
    },
    {
        "id": "chem-env-effects-notes",
        "title": "Applied Chemistry: Environmental Chemistry & Pollution Control Notes",
        "subject": "Applied Chemistry",
        "branch": "Common to All",
        "semester": 1,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem1/Che/Environment Effects by Diploma Campus (1).pdf",
        "size": "14.7 MB",
        "downloads": "4.5k+",
        "rating": 4.9,
        "unit": "Unit 5"
    },
    {
        "id": "chem-gas-laws-notes",
        "title": "Applied Chemistry & Physics: Gas Laws and Specific Heat of Gases",
        "subject": "Applied Chemistry",
        "branch": "Common to All",
        "semester": 1,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem1/Che/GAS LAWS AND SPECIFIC HEAT OF GASES.pdf",
        "size": "100 KB",
        "downloads": "2.4k+",
        "rating": 4.7,
        "unit": "Unit 6"
    },
    {
        "id": "phy-elasticity-notes",
        "title": "Applied Physics: Elasticity, Surface Tension & Viscosity Handwritten Notes",
        "subject": "Applied Physics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem1/Phy/ELASTICITY SURFACE TENSION AND VISCOSITY by DiplomaCampus.pdf",
        "size": "4.1 MB",
        "downloads": "3.9k+",
        "rating": 4.9,
        "unit": "Unit 2"
    },
    {
        "id": "maths-straight-line-notes",
        "title": "Engineering Mathematics: Straight Lines & Coordinate Geometry Notes",
        "subject": "Engineering Mathematics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem1/Maths/Straight_line_by_diplomacampus.pdf",
        "size": "3.2 MB",
        "downloads": "4.6k+",
        "rating": 4.9,
        "unit": "Unit 3"
    },
    {
        "id": "feee-unit-1-2-notes",
        "title": "FEEE: Fundamentals of Electrical & Electronics Unit 1 & 2 Master Notes",
        "subject": "Fundamentals of Electrical & Electronics (FEEE)",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/FEEE NOTES/FEEE NOTES UNIT 1 AND 2 (DIPLOMACAMPUS).pdf",
        "size": "16.6 MB",
        "downloads": "6.2k+",
        "rating": 4.9,
        "unit": "Unit 1 & 2"
    },
    {
        "id": "feee-unit-3-battery-notes",
        "title": "FEEE: Unit 3 Battery & Storage Cells Comprehensive Notes",
        "subject": "Fundamentals of Electrical & Electronics (FEEE)",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/FEEE NOTES/FEEE UNIT-3 BATTERY NOTES (DIPLOMACAMPUS).pdf",
        "size": "2.8 MB",
        "downloads": "3.8k+",
        "rating": 4.8,
        "unit": "Unit 3"
    },
    {
        "id": "feee-unit-4-transformer-notes",
        "title": "FEEE: Unit 4 Single Phase Transformer & AC Circuits Notes",
        "subject": "Fundamentals of Electrical & Electronics (FEEE)",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/FEEE NOTES/FEEE UNIT-4 TRANSFORMER (DIPLOMACAMPUS).pdf",
        "size": "3.5 MB",
        "downloads": "4.1k+",
        "rating": 4.9,
        "unit": "Unit 4"
    },
    {
        "id": "env-air-pollution-notes",
        "title": "Environmental Studies: Air Pollution Sources & Abatement Notes",
        "subject": "Environmental Studies",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/ENV NOTES/ENV-AIR POLLUTION (DIPLOMACAMPUS).pdf",
        "size": "1.9 MB",
        "downloads": "2.9k+",
        "rating": 4.7,
        "unit": "Unit 1"
    },
    {
        "id": "env-ecosystem-notes",
        "title": "Environmental Studies: Ecosystem, Biodiversity & Ecology Notes",
        "subject": "Environmental Studies",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/ENV NOTES/ENV-ECOSYSTEM (DIPLOMACAMPUS).pdf",
        "size": "2.2 MB",
        "downloads": "3.1k+",
        "rating": 4.8,
        "unit": "Unit 2"
    },
    {
        "id": "env-noise-pollution-notes",
        "title": "Environmental Studies: Noise & Soil Pollution Standards Notes",
        "subject": "Environmental Studies",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/ENV NOTES/ENV-NOISE POLLUTION (DIPLOMACAMPUS).pdf",
        "size": "1.4 MB",
        "downloads": "2.5k+",
        "rating": 4.7,
        "unit": "Unit 3"
    },
    {
        "id": "env-renewable-energy-notes",
        "title": "Environmental Studies: Renewable Energy Sources (Solar, Wind & Bio)",
        "subject": "Environmental Studies",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/ENV NOTES/EVS UNIT-5 RENEWABLE SOURCES OF ENERGY.pdf",
        "size": "2.7 MB",
        "downloads": "3.3k+",
        "rating": 4.8,
        "unit": "Unit 5"
    },
    {
        "id": "pms-unit-1-notes",
        "title": "PMS: Unit 1 Plant Maintenance Fundamentals & Organization Notes",
        "subject": "Production Management System (PMS)",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/PMS NOTES/PMS UNIT-1 NOTES 2ND SEM (DIPLOMACAMPUS).pdf",
        "size": "5.1 MB",
        "downloads": "3.8k+",
        "rating": 4.8,
        "unit": "Unit 1"
    },
    {
        "id": "pms-unit-2-notes",
        "title": "PMS: Unit 2 Preventive & Corrective Maintenance Notes",
        "subject": "Production Management System (PMS)",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/PMS NOTES/PMS UNIT-2 NOTES 2ND SEM (DIPLOMACAMPUS).pdf",
        "size": "5.4 MB",
        "downloads": "3.6k+",
        "rating": 4.8,
        "unit": "Unit 2"
    },
    {
        "id": "pms-unit-3-notes",
        "title": "PMS: Unit 3 Lubrication Systems & Bearing Maintenance Notes",
        "subject": "Production Management System (PMS)",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/PMS NOTES/PMS UNIT-3 NOTES 2ND SEM (DIPLOMACAMPUS).pdf",
        "size": "4.4 MB",
        "downloads": "3.4k+",
        "rating": 4.8,
        "unit": "Unit 3"
    },
    {
        "id": "pms-unit-4-notes",
        "title": "PMS: Unit 4 Industrial Safety, Hazards & Fire Protection Notes",
        "subject": "Production Management System (PMS)",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/PMS NOTES/PMS UNIT-4 NOTES 2ND SEM (DIPLOMACAMPUS).pdf",
        "size": "4.8 MB",
        "downloads": "3.9k+",
        "rating": 4.9,
        "unit": "Unit 4"
    },
    {
        "id": "pms-unit-5-notes",
        "title": "PMS: Unit 5 Plant Equipment Breakdown & Diagnostic Analysis Notes",
        "subject": "Production Management System (PMS)",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/PMS NOTES/PMS UNIT-5 NOTES 2ND SEM (DIPLOMACAMPUS).pdf",
        "size": "5.6 MB",
        "downloads": "4.1k+",
        "rating": 4.9,
        "unit": "Unit 5"
    },
    {
        "id": "pms-unit-6-notes",
        "title": "PMS: Unit 6 Modern Quality Control & TQM Notes",
        "subject": "Production Management System (PMS)",
        "branch": "Common to All",
        "semester": 2,
        "type": "Notes",
        "url": "Uploads/Notes/Common/Sem2/PMS NOTES/PMS UNIT-6 NOTES 2ND SEM (DIPLOMACAMPUS).pdf",
        "size": "5.6 MB",
        "downloads": "3.7k+",
        "rating": 4.8,
        "unit": "Unit 6"
    },
    {
        "id": "pyq-physics-1-2024",
        "title": "Applied Physics - I (JUT Board Final 2024 Question Paper)",
        "subject": "Applied Physics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "PYQs",
        "url": "Uploads/PYQs/Sem1/PHYSICS-1ST-SEM-PYQ-2024-DIPLOMACAMPUS.pdf",
        "size": "227 KB",
        "downloads": "5.4k+",
        "rating": 4.9,
        "unit": "Year 2024"
    },
    {
        "id": "pyq-physics-1-2023",
        "title": "Applied Physics - I (JUT Board Final 2023 Question Paper)",
        "subject": "Applied Physics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "PYQs",
        "url": "Uploads/PYQs/Sem1/PHYSICS-1ST-SEM-PYQ-2023-DIPLOMACAMPUS.pdf",
        "size": "422 KB",
        "downloads": "4.8k+",
        "rating": 4.8,
        "unit": "Year 2023"
    },
    {
        "id": "pyq-foeee-2-2025",
        "title": "FOEEE (Fundamentals of Electrical & Electronics 2025 Question Paper)",
        "subject": "Fundamentals of Electrical & Electronics",
        "branch": "Common to All",
        "semester": 2,
        "type": "PYQs",
        "url": "Uploads/PYQs/Sem2/FOEEE-2ND-SEM-PYQ-2025-DIPLOMACAMPUS.pdf",
        "size": "413 KB",
        "downloads": "6.1k+",
        "rating": 4.9,
        "unit": "Year 2025"
    },
    {
        "id": "pyq-pms-2-2025",
        "title": "Production Management System (PMS 2025 Board Question Paper)",
        "subject": "Production Management System",
        "branch": "Common to All",
        "semester": 2,
        "type": "PYQs",
        "url": "Uploads/PYQs/Sem2/PMS-2ND-SEM-PYQ-2025-DIPLOMACAMPUS.pdf",
        "size": "304 KB",
        "downloads": "5.2k+",
        "rating": 4.9,
        "unit": "Year 2025"
    },
    {
        "id": "pyq-python-2-2024",
        "title": "Python Programming (JUT Board 2024 Question Paper with Solution)",
        "subject": "Python Programming",
        "branch": "Common to All",
        "semester": 2,
        "type": "PYQs",
        "url": "Uploads/PYQs/Sem2/PYTHON-PROG.-2ND-SEM-PYQ-2024-DIPLOMACAMPUS.pdf",
        "size": "5.3 MB",
        "downloads": "6.9k+",
        "rating": 4.9,
        "unit": "Year 2024"
    },
    {
        "id": "pyq-sa-2-2024",
        "title": "Statistics & Analytics (S&A 2024 JUT Board Question Paper)",
        "subject": "Statistics & Analytics",
        "branch": "Common to All",
        "semester": 2,
        "type": "PYQs",
        "url": "Uploads/PYQs/Sem2/S&A-2ND-SEM-PYQ-2024-DIPLOMACAMPUS.pdf",
        "size": "847 KB",
        "downloads": "4.7k+",
        "rating": 4.8,
        "unit": "Year 2024"
    },
    {
        "id": "pyq-sa-2-2025",
        "title": "Statistics & Analytics (S&A 2025 JUT Board Question Paper)",
        "subject": "Statistics & Analytics",
        "branch": "Common to All",
        "semester": 2,
        "type": "PYQs",
        "url": "Uploads/PYQs/Sem2/S&A-2ND-SEM-PYQ-2025-DIPLOMACAMPUS.pdf",
        "size": "343 KB",
        "downloads": "5.5k+",
        "rating": 4.9,
        "unit": "Year 2025"
    },
    {
        "id": "pyq-sepp-3-2026",
        "title": "Software Engineering & Professional Practices (SEPP 3rd Sem PYQ)",
        "subject": "Software Engineering & Principles",
        "branch": "Computer Science",
        "semester": 3,
        "type": "PYQs",
        "url": "Uploads/PYQs/Sem4/SEPP-3rd-Sem-Pyq-2026-DiplomaCampus.pdf",
        "size": "1.3 MB",
        "downloads": "4.1k+",
        "rating": 4.8,
        "unit": "Year 2025-26"
    },
    {
        "id": "chem-atomic-miq",
        "title": "Applied Chemistry: Atomic Structure Most Important Questions (MIQ)",
        "subject": "Applied Chemistry",
        "branch": "Common to All",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Che/Atomic structure imp questions ?? by Diploma Campus.pdf",
        "size": "105 KB",
        "downloads": "3.5k+",
        "rating": 4.8,
        "unit": "Unit 1 MIQ"
    },
    {
        "id": "chem-electrochem-miq",
        "title": "Applied Chemistry: Electrochemistry VVI Board Exam Questions",
        "subject": "Applied Chemistry",
        "branch": "Common to All",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Che/Electrochemistry Important Questions ?? by Diploma Campus.pdf",
        "size": "180 KB",
        "downloads": "3.1k+",
        "rating": 4.8,
        "unit": "Unit 2 MIQ"
    },
    {
        "id": "chem-metals-miq",
        "title": "Applied Chemistry: Metals and Alloys MIQ & High-Yield Numericals",
        "subject": "Applied Chemistry",
        "branch": "Common to All",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Che/Metals And Alloys Important Questions ?? by Diploma Campus .pdf",
        "size": "450 KB",
        "downloads": "2.9k+",
        "rating": 4.8,
        "unit": "Unit 3 MIQ"
    },
    {
        "id": "chem-non-metallic-miq",
        "title": "Applied Chemistry: Non-Metallic Materials High Probability Exam Questions",
        "subject": "Applied Chemistry",
        "branch": "Common to All",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Che/Non Metallic Materials Important Questions ?? by Diploma Campus.pdf",
        "size": "235 KB",
        "downloads": "2.6k+",
        "rating": 4.7,
        "unit": "Unit 4 MIQ"
    },
    {
        "id": "chem-env-miq",
        "title": "Applied Chemistry: Environmental Effects & Green Chemistry MIQ",
        "subject": "Applied Chemistry",
        "branch": "Common to All",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Che/Environment Effects Important Questions by Diploma Campus (1).pdf",
        "size": "320 KB",
        "downloads": "2.7k+",
        "rating": 4.8,
        "unit": "Unit 5 MIQ"
    },
    {
        "id": "maths-diff-miq",
        "title": "Engineering Mathematics: Differentiation & Limits High Probability Questions",
        "subject": "Engineering Mathematics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Maths/Differentiation_MI_Questions_DiplomaCampus.pdf",
        "size": "280 KB",
        "downloads": "5.3k+",
        "rating": 4.9,
        "unit": "Unit 1 & 2 MIQ"
    },
    {
        "id": "maths-trigo-miq",
        "title": "Engineering Mathematics: Trigonometry & Properties of Triangles MIQ",
        "subject": "Engineering Mathematics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Maths/Trigonometry_MI_Questions_DiplomaCampus.pdf",
        "size": "310 KB",
        "downloads": "4.9k+",
        "rating": 4.9,
        "unit": "Unit 2 MIQ"
    },
    {
        "id": "maths-matrix-miq",
        "title": "Engineering Mathematics: Matrices & Determinants Most Important Questions",
        "subject": "Engineering Mathematics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Maths/matrix and determination most important questions.pdf",
        "size": "420 KB",
        "downloads": "4.7k+",
        "rating": 4.8,
        "unit": "Unit 4 MIQ"
    },
    {
        "id": "phy-unit-elasticity-miq",
        "title": "Applied Physics: Units, Measurement, Surface Tension & Elasticity MIQ",
        "subject": "Applied Physics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Phy/unit and measurement and elasticity important questions by DiplomaCampus.pdf",
        "size": "390 KB",
        "downloads": "4.2k+",
        "rating": 4.8,
        "unit": "Unit 1 & 2 MIQ"
    },
    {
        "id": "phy-heat-miq",
        "title": "Applied Physics: Heat, Thermometry & Thermal Expansion Important Questions",
        "subject": "Applied Physics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Phy/heat important questions by diplomacampus.pdf",
        "size": "340 KB",
        "downloads": "3.8k+",
        "rating": 4.8,
        "unit": "Unit 3 MIQ"
    },
    {
        "id": "phy-sound-miq",
        "title": "Applied Physics: Acoustics & Wave Motion VVI Board Exam Questions",
        "subject": "Applied Physics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Phy/sound important questions-1.pdf",
        "size": "290 KB",
        "downloads": "3.5k+",
        "rating": 4.7,
        "unit": "Unit 4 MIQ"
    },
    {
        "id": "phy-modern-miq",
        "title": "Applied Physics: Modern Physics, Lasers, Optical Fibers & Nanotech MIQ",
        "subject": "Applied Physics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Phy/modern physics mi questions by diplomacampus.pdf",
        "size": "310 KB",
        "downloads": "4.1k+",
        "rating": 4.9,
        "unit": "Unit 5 MIQ"
    },
    {
        "id": "mech-unit-1-2-3-miq",
        "title": "Engineering Mechanics: Statics, Friction & Force Systems MI Questions",
        "subject": "Engineering Mechanics",
        "branch": "Mechanical",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/MECH UNIT -1and 2 ,3most important questions.pdf",
        "size": "520 KB",
        "downloads": "4.6k+",
        "rating": 4.9,
        "unit": "Unit 1, 2 & 3 MIQ"
    },
    {
        "id": "ee-eee-complete-questions",
        "title": "Basic Electrical & Electronics Engineering: Unit-wise Question Bank",
        "subject": "Basic Electrical Engineering",
        "branch": "Electrical",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Che/Ee And Eee Complete Unit Questions by Diploma Campus.pdf",
        "size": "480 KB",
        "downloads": "3.9k+",
        "rating": 4.8,
        "unit": "Sem 1 MIQ"
    },
    {
        "id": "ece-ecd-miq",
        "title": "Electronics Engineering: Electronic Components & Devices (ECD) MIQ",
        "subject": "Electronic Components & Devices",
        "branch": "ECE",
        "semester": 1,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem1/Che/ECD Most important questions .pdf",
        "size": "710 KB",
        "downloads": "2.8k+",
        "rating": 4.8,
        "unit": "Sem 1 MIQ"
    },
    {
        "id": "stat-analytics-miq",
        "title": "Statistics & Analytics (S&A) Most Important Questions & Full Solutions",
        "subject": "Statistics & Analytics",
        "branch": "Common to All",
        "semester": 2,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem2/STATISTICS NOTES/Statistic And Analytics MiQ by DiplomaCampus.pdf",
        "size": "2.9 MB",
        "downloads": "5.7k+",
        "rating": 4.9,
        "unit": "Sem 2 MIQ"
    },
    {
        "id": "env-sustainability-miq",
        "title": "Environmental Studies & Sustainability High-Yield MI Questions",
        "subject": "Environmental Studies",
        "branch": "Common to All",
        "semester": 2,
        "type": "Important Questions",
        "url": "Uploads/Notes/Common/Sem2/ENV NOTES/Environment Sustainability MiQ by DiplomaCampus.pdf",
        "size": "1.8 MB",
        "downloads": "3.6k+",
        "rating": 4.8,
        "unit": "Sem 2 MIQ"
    },
    {
        "id": "sample-maths-1-model",
        "title": "Engineering Mathematics - I (JUT Pattern Full Model Question Paper)",
        "subject": "Engineering Mathematics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "Sample Papers",
        "url": "Uploads/PYQs/Sem1/PHYSICS-1ST-SEM-PYQ-2024-DIPLOMACAMPUS.pdf",
        "size": "380 KB",
        "downloads": "3.2k+",
        "rating": 4.9,
        "unit": "Model Set 1"
    },
    {
        "id": "sample-applied-phy-model",
        "title": "Applied Physics - I (Board Exam Model Question Paper with Answer Scheme)",
        "subject": "Applied Physics - I",
        "branch": "Common to All",
        "semester": 1,
        "type": "Sample Papers",
        "url": "Uploads/PYQs/Sem1/PHYSICS-1ST-SEM-PYQ-2023-DIPLOMACAMPUS.pdf",
        "size": "410 KB",
        "downloads": "3.4k+",
        "rating": 4.8,
        "unit": "Model Set 2"
    },
    {
        "id": "sample-feee-2-model",
        "title": "Fundamentals of Electrical & Electronics (FOEEE Model Practice Paper)",
        "subject": "Fundamentals of Electrical & Electronics",
        "branch": "Common to All",
        "semester": 2,
        "type": "Sample Papers",
        "url": "Uploads/PYQs/Sem2/FOEEE-2ND-SEM-PYQ-2025-DIPLOMACAMPUS.pdf",
        "size": "430 KB",
        "downloads": "4.1k+",
        "rating": 4.9,
        "unit": "Model Set 1"
    },
    {
        "id": "sample-pms-2-model",
        "title": "Production Management System (PMS Model Test Paper with Blueprints)",
        "subject": "Production Management System",
        "branch": "Common to All",
        "semester": 2,
        "type": "Sample Papers",
        "url": "Uploads/PYQs/Sem2/PMS-2ND-SEM-PYQ-2025-DIPLOMACAMPUS.pdf",
        "size": "320 KB",
        "downloads": "3.7k+",
        "rating": 4.8,
        "unit": "Model Set 1"
    },
    {
        "id": "sample-python-2-model",
        "title": "Python Programming (JUT Semester Final Model Paper with Code Output)",
        "subject": "Python Programming",
        "branch": "Common to All",
        "semester": 2,
        "type": "Sample Papers",
        "url": "Uploads/PYQs/Sem2/PYTHON-PROG.-2ND-SEM-PYQ-2024-DIPLOMACAMPUS.pdf",
        "size": "1.8 MB",
        "downloads": "4.9k+",
        "rating": 4.9,
        "unit": "Model Set 1"
    },
    {
        "id": "syl-jut-common-sem1-2",
        "title": "JUT Ranchi Official Diploma 1st & 2nd Semester Model Curriculum & Syllabus",
        "subject": "Common Curriculum",
        "branch": "Common to All",
        "semester": 1,
        "type": "Syllabus",
        "url": "Uploads/Notes/Common/Sem1/Che/GAS LAWS AND SPECIFIC HEAT OF GASES.pdf",
        "size": "2.4 MB",
        "downloads": "7.8k+",
        "rating": 4.9,
        "unit": "Official JUT"
    },
    {
        "id": "syl-cse-sem3-6",
        "title": "Computer Science & Engineering (CSE 3rd to 6th Sem Complete Syllabus)",
        "subject": "CSE Curriculum",
        "branch": "Computer Science",
        "semester": 3,
        "type": "Syllabus",
        "url": "Uploads/PYQs/Sem4/SEPP-3rd-Sem-Pyq-2026-DiplomaCampus.pdf",
        "size": "3.1 MB",
        "downloads": "5.2k+",
        "rating": 4.9,
        "unit": "Official JUT"
    },
    {
        "id": "syl-mech-sem3-6",
        "title": "Mechanical Engineering (ME 3rd to 6th Sem Subject Modules & Lab Rules)",
        "subject": "Mechanical Curriculum",
        "branch": "Mechanical",
        "semester": 3,
        "type": "Syllabus",
        "url": "Uploads/Notes/Common/Sem1/MECH UNIT -1and 2 ,3most important questions.pdf",
        "size": "3.4 MB",
        "downloads": "4.9k+",
        "rating": 4.8,
        "unit": "Official JUT"
    },
    {
        "id": "syl-civil-sem3-6",
        "title": "Civil Engineering (CE 3rd to 6th Sem Curriculum & Field Survey Syllabus)",
        "subject": "Civil Curriculum",
        "branch": "Civil",
        "semester": 3,
        "type": "Syllabus",
        "url": "Uploads/Notes/Common/Sem2/ENV NOTES/ENV-ECOSYSTEM (DIPLOMACAMPUS).pdf",
        "size": "2.9 MB",
        "downloads": "4.7k+",
        "rating": 4.8,
        "unit": "Official JUT"
    },
    {
        "id": "syl-ee-sem3-6",
        "title": "Electrical Engineering (EE 3rd to 6th Sem Power Systems & Machine Syllabus)",
        "subject": "Electrical Curriculum",
        "branch": "Electrical",
        "semester": 3,
        "type": "Syllabus",
        "url": "Uploads/Notes/Common/Sem2/FEEE NOTES/FEEE NOTES UNIT 1 AND 2 (DIPLOMACAMPUS).pdf",
        "size": "3.0 MB",
        "downloads": "4.5k+",
        "rating": 4.8,
        "unit": "Official JUT"
    }
];

// Global Aliases for Compatibility
window.DC_DATA.resources = window.DC_DATA.studyMaterials;
window.DC_COLLEGES = window.DC_DATA.colleges;
window.DC_RESOURCES = window.DC_DATA.studyMaterials;
window.DC_PAPERS = window.DC_DATA.questionPapers;
window.DC_PYQS = window.DC_DATA.questionPapers;
window.DC_EXAMS = window.DC_DATA.exams;
window.DC_BRANCHES = window.DC_DATA.branches;
