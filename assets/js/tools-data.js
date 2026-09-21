/**
 * Sarkari Tool - Central Registry of all Available Utility Tools
 */
const toolsData = [
    {
        id: 1,
        name: "SSC Photo Resizer",
        shortDesc: "Resize photo & signature for SSC CGL, CHSL, GD & MTS (20-50kb).",
        fullDesc: "Official dimensions and KB compression for Staff Selection Commission exams.",
        link: "tools/ssc-resizer.html",
        icon: "fa-id-card",
        color: "blue",
        tags: ["ssc", "cgl", "chsl", "mts", "gd", "photo resizer"],
        trending: true
    },
    {
        id: 2,
        name: "UPSC Photo & Sign Resizer",
        shortDesc: "Compress images for Civil Services (IAS, IPS, IFS, NDA, CDS).",
        fullDesc: "Meets strict UPSC pixel and file size requirements for Prelims & Mains.",
        link: "tools/upsc-resizer.html",
        icon: "fa-scale-balanced",
        color: "indigo",
        tags: ["upsc", "ias", "ips", "civil services", "nda", "cds"],
        trending: true
    },
    {
        id: 3,
        name: "Railway Photo Resizer",
        shortDesc: "RRB NTPC, Group D, ALP & Technician compliant photo sizes.",
        fullDesc: "Optimized for Railway Recruitment Board applications with 20-50KB limits.",
        link: "tools/railway-resizer.html",
        icon: "fa-train",
        color: "red",
        tags: ["rrb", "railway", "ntpc", "group d", "alp"],
        trending: false
    },
    {
        id: 4,
        name: "Passport Photo Maker",
        shortDesc: "2x2 inch standard white background for Visa, PAN & Aadhaar.",
        fullDesc: "Generate standard Indian & International passport size photo sheets instantly.",
        link: "tools/passport-photo.html",
        icon: "fa-camera",
        color: "green",
        tags: ["passport", "visa", "pan", "aadhaar", "id photo"],
        trending: true
    },
    {
        id: 5,
        name: "NEET Postcard Photo Maker",
        shortDesc: "4x6 Postcard size photo generator with name & date for NTA NEET.",
        fullDesc: "Accurate NTA specifications for NEET UG & PG medical entrance examinations.",
        link: "tools/neet-tool.html",
        icon: "fa-user-doctor",
        color: "teal",
        tags: ["neet", "medical", "nta", "postcard", "postcard size"],
        trending: true
    },
    {
        id: 6,
        name: "Marriage Biodata Maker",
        shortDesc: "Create professional & attractive Hindu, Muslim & General marriage biodata PDFs.",
        fullDesc: "Customizable templates with photo frames for matrimonial profiles.",
        link: "tools/marriage-biodata.html",
        icon: "fa-heart",
        color: "pink",
        tags: ["biodata", "marriage", "wedding", "matrimony", "shadi"],
        trending: false
    },
    {
        id: 7,
        name: "Sarkari Photo Date Maker",
        shortDesc: "Add Candidate Name & Date of Photo (DOP) on photos in 1 click.",
        fullDesc: "Compliant with state PSCs, Police, Teacher, and all competitive exams.",
        link: "tools/sarkari-tool.html",
        icon: "fa-calendar-check",
        color: "orange",
        tags: ["sarkari", "photo date", "name on photo", "dop maker"],
        trending: true
    },
    {
        id: 8,
        name: "Stylish Font & Name Generator",
        shortDesc: "Generate fancy fonts, symbols & stylish text for gaming & social profiles.",
        fullDesc: "100+ unicode font styles with 1-click copy for Instagram, Free Fire & BGMI.",
        link: "tools/stylish-name.html",
        icon: "fa-wand-magic-sparkles",
        color: "purple",
        tags: ["stylish name", "fonts", "symbols", "fancy text"],
        trending: false
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = toolsData;
}
