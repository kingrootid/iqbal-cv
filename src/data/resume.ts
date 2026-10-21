/** All biographical data is sourced from the attached 2-page resume.
 * Display copy is edited for readability; no additional jobs, metrics, or degrees were invented.
 */
export type Language = "en" | "id";
export type LocalizedText = Record<Language, string>;

export const profile = {
  name: "Moch Iqbal Ar Rasyid",
  firstName: "Iqbal",
  title: "Software Engineer",
  email: "mochiqbalars@gmail.com",
  github: "https://github.com/kingrootid",
  resumeUrl: "/moch-iqbal-ar-rasyid-cv.pdf",
  experienceYears: "5+",
  companyCount: 5,
  summary: {
    en: "Software Engineer with 5+ years of experience building and maintaining web applications, APIs, and microservices — including hands-on technical leadership.",
    id: "Software Engineer dengan pengalaman lebih dari 5 tahun membangun dan memelihara aplikasi web, API, dan microservices — termasuk pengalaman memimpin tim teknis.",
  },
} as const;

export type WorkItem = {
  id: string;
  role: string;
  company: string;
  placement?: string;
  location: string;
  duration: LocalizedText;
  period: string;
  details: Record<Language, string[]>;
};

export const experience: WorkItem[] = [
  {
    id: "indocyber",
    role: "Fullstack Developer",
    company: "PT. Indocyber Global Teknologi",
    placement: "PT. Bank Raya Indonesia",
    location: "Jakarta",
    duration: { en: "Feb 2026 — Present", id: "Feb 2026 — Sekarang" },
    period: "2026 — NOW",
    details: {
      en: [
        "Manage banking regulatory reporting applications for OJK and Bank Indonesia.",
        "Monitor applications and microservices to support reliable operations.",
        "Enhance applications to make them easier for users to operate.",
        "Develop social media analytics dashboards for Bank Raya across Instagram, YouTube, and TikTok.",
      ],
      id: [
        "Mengelola aplikasi pelaporan regulator perbankan untuk OJK dan Bank Indonesia.",
        "Memantau aplikasi dan microservices untuk mendukung operasional yang andal.",
        "Meningkatkan kemudahan penggunaan aplikasi bagi pengguna.",
        "Mengembangkan dashboard analitik media sosial Bank Raya untuk Instagram, YouTube, dan TikTok.",
      ],
    },
  },
  {
    id: "bringinit",
    role: "Fullstack Engineer",
    company: "PT. Bringin Inti Teknologi",
    placement: "PT. Bank Raya Indonesia",
    location: "Jakarta",
    duration: { en: "Aug 2024 — Jan 2026", id: "Agu 2024 — Jan 2026" },
    period: "2024 — 2026",
    details: {
      en: [
        "Managed regulatory reporting applications for OJK and Bank Indonesia.",
        "Monitored applications and microservices.",
      ],
      id: [
        "Mengelola aplikasi pelaporan regulator untuk OJK dan Bank Indonesia.",
        "Memantau aplikasi dan microservices.",
      ],
    },
  },
  {
    id: "completed-lead",
    role: "Technical Leader",
    company: "PT. Completed Inovasi Teknologi",
    location: "Bogor",
    duration: { en: "Dec 2023 — Jul 2024", id: "Des 2023 — Jul 2024" },
    period: "2023 — 2024",
    details: {
      en: [
        "Managed and monitored team tasks and application operations.",
        "Monitored main applications, APIs, and microservices.",
        "Tracked developer team KPIs and reported progress to stakeholders.",
      ],
      id: [
        "Mengelola dan memantau tugas tim serta operasional aplikasi.",
        "Memantau aplikasi utama, API, dan microservices.",
        "Memantau KPI tim developer dan melaporkan progres kepada stakeholder.",
      ],
    },
  },
  {
    id: "completed-dev",
    role: "Fullstack Engineer",
    company: "PT. Completed Inovasi Teknologi",
    location: "Bogor",
    duration: { en: "Oct 2023 — Dec 2023", id: "Okt 2023 — Des 2023" },
    period: "2023",
    details: {
      en: [
        "Translated Figma designs into frontend interfaces.",
        "Developed APIs and microservices.",
        "Monitored APIs and microservices.",
      ],
      id: [
        "Mengimplementasikan desain Figma menjadi antarmuka frontend.",
        "Mengembangkan API dan microservices.",
        "Memantau API dan microservices.",
      ],
    },
  },
  {
    id: "solusi",
    role: "Software Engineer",
    company: "PT. Solusi Teknologi Madani",
    location: "Surabaya",
    duration: { en: "Feb 2022 — Sep 2023", id: "Feb 2022 — Sep 2023" },
    period: "2022 — 2023",
    details: {
      en: [
        "Developed online booking applications for hospitals, events, and public spaces.",
        "Built a laboratory track-record application for Kalbe Labs.",
        "Created a NestJS module generator and end-to-end tests using NestJS.",
      ],
      id: [
        "Mengembangkan aplikasi reservasi online untuk rumah sakit, acara, dan ruang publik.",
        "Membangun aplikasi pencatatan laboratorium untuk Kalbe Labs.",
        "Membuat generator modul NestJS dan pengujian end-to-end di NestJS.",
      ],
    },
  },
  {
    id: "lyrid",
    role: "Fullstack Developer",
    company: "PT. Lyrid Prima Indonesia",
    location: "Jakarta",
    duration: { en: "Mar 2021 — Mar 2022", id: "Mar 2021 — Mar 2022" },
    period: "2021 — 2022",
    details: {
      en: [
        "Developed e-commerce, ERP, and smart estate management applications.",
        "Led a small development team.",
        "Applied UI/UX design principles to improve user experiences.",
      ],
      id: [
        "Mengembangkan aplikasi e-commerce, ERP, dan smart estate management.",
        "Memimpin tim pengembangan berskala kecil.",
        "Menerapkan prinsip UI/UX untuk meningkatkan pengalaman pengguna.",
      ],
    },
  },
];

export const skills = {
  frontend: ["React.js", "Next.js", "Vue.js", "Angular", "React Native", "Tailwind CSS", "Bootstrap"],
  backend: ["PHP", "Node.js", "TypeScript", "Laravel", "CodeIgniter", "Express.js", "NestJS", "Go", "Fiber", "Gin"],
  apiData: ["REST API", "GraphQL", "Apollo", "TypeORM", "Prisma"],
  platform: ["AWS", "Cloud Computing", "Apache", "Nginx", "Jest", "WHMCS"],
} as const;

export const education = {
  institution: "Politeknik Negeri Malang",
  institutionAsWritten: "Malang State Politechnic",
  program: {
    en: "Associate Degree in Telecommunication Engineering",
    id: "Diploma III Teknik Telekomunikasi",
  },
  years: "2016 — 2019",
  gpa: "3.06 / 4.00",
};

export const softSkills = {
  en: ["Small-team leadership", "Developer KPI monitoring"],
  id: ["Kepemimpinan tim kecil", "Pemantauan KPI developer"],
};
