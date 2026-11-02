export type Lang = "en" | "vi";

type ProjectText = { name: string; tagline: string; bullets: string[] };

export type Project = {
  id: string;
  repo: string;
  demo?: string;
  period: string;
  team: boolean;
  stack: string[];
  featured?: boolean;
  text: Record<Lang, ProjectText>;
};

export const projects: Project[] = [
  {
    id: "sportarena",
    repo: "https://github.com/tuan2304/sportarena",
    demo: "https://pickleball-booking-mu-three.vercel.app",
    period: "Sep 2026 – Present",
    team: false,
    featured: true,
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind v4",
      "Expo",
      "Supabase",
      "PostgreSQL",
      "PayOS",
      "Vitest",
      "Playwright",
    ],
    text: {
      en: {
        name: "SportArena",
        tagline: "Court booking and matchmaking platform, built solo.",
        bullets: [
          "Next.js 16 web app and an Expo / React Native mobile app that share the same core booking flows.",
          "Supabase Postgres schema with Row Level Security on every table. Double bookings are blocked by an exclusion constraint, pg_cron releases expired 15-minute slot holds, and Realtime keeps calendars, matches and chat in sync.",
          "VietQR deposits through PayOS v2 with webhook confirmation; owner payment keys are encrypted before storage.",
          "150+ Vitest tests, SQL tests for RLS policies and Playwright end-to-end suites running in GitHub Actions. Bilingual (VI/EN), light and dark UI.",
        ],
      },
      vi: {
        name: "SportArena",
        tagline: "Nền tảng đặt sân và ghép trận, tự xây một mình.",
        bullets: [
          "Web app Next.js 16 và mobile app Expo / React Native dùng chung các luồng đặt sân cốt lõi.",
          "Schema Supabase Postgres có Row Level Security trên mọi bảng. Đặt trùng giờ bị chặn ngay trong database bằng exclusion constraint, pg_cron tự nhả các slot giữ chỗ 15 phút đã hết hạn, Realtime đồng bộ lịch, trận đấu và chat.",
          "Đặt cọc VietQR qua PayOS v2 với webhook xác nhận; khóa thanh toán của chủ sân được mã hóa trước khi lưu.",
          "Hơn 150 test Vitest, test SQL cho chính sách RLS và bộ Playwright end-to-end chạy trên GitHub Actions. Giao diện song ngữ (VI/EN), sáng và tối.",
        ],
      },
    },
  },
  {
    id: "lumina",
    repo: "https://github.com/tuan2304/Lumina",
    period: "May 2026 – Jun 2026",
    team: true,
    stack: ["React Native", "MySQL"],
    text: {
      en: {
        name: "Lumina",
        tagline: "Novel-reading mobile app.",
        bullets: ["Developed the back end (MySQL) of a React Native app for reading novels online, as part of a team."],
      },
      vi: {
        name: "Lumina",
        tagline: "Ứng dụng di động đọc tiểu thuyết.",
        bullets: ["Phát triển back end (MySQL) cho ứng dụng React Native đọc tiểu thuyết online, làm việc trong nhóm."],
      },
    },
  },
  {
    id: "workflow",
    repo: "https://github.com/tuan2304/workflow",
    period: "Mar 2026 – Jun 2026",
    team: true,
    stack: ["TypeScript"],
    text: {
      en: {
        name: "Workflow",
        tagline: "Task registration system.",
        bullets: ["Built full-stack features of a task registration system in a team, for a specialization course project."],
      },
      vi: {
        name: "Workflow",
        tagline: "Hệ thống đăng ký công việc.",
        bullets: ["Xây dựng các tính năng full-stack cho hệ thống đăng ký công việc theo nhóm, trong đồ án môn chuyên ngành."],
      },
    },
  },
  {
    id: "onetop",
    repo: "https://github.com/tuan2304/Onetop",
    period: "Oct 2025 – Dec 2025",
    team: true,
    stack: ["ASP.NET Core MVC", "Entity Framework Core", "SQL Server"],
    text: {
      en: {
        name: "Onetop",
        tagline: "Online clothing shop.",
        bullets: ["Developed the full stack of an online clothing shop with ASP.NET Core MVC, Entity Framework Core and SQL Server."],
      },
      vi: {
        name: "Onetop",
        tagline: "Cửa hàng quần áo online.",
        bullets: ["Phát triển toàn bộ stack cho web bán quần áo bằng ASP.NET Core MVC, Entity Framework Core và SQL Server."],
      },
    },
  },
  {
    id: "lightwerk",
    repo: "https://github.com/tuan2304/lightwerk",
    period: "Aug 2025 – Sep 2025",
    team: true,
    stack: ["Angular", "TypeScript", "Firebase"],
    text: {
      en: {
        name: "Lightwerk",
        tagline: "TikTok-style short-video platform.",
        bullets: ["Full-stack developer in a team during the ITSS Academy program."],
      },
      vi: {
        name: "Lightwerk",
        tagline: "Nền tảng video ngắn kiểu TikTok.",
        bullets: ["Lập trình viên full-stack trong nhóm, thuộc chương trình ITSS Academy."],
      },
    },
  },
];

export const skillGroups = [
  {
    id: "mobile",
    items: ["React Native", "Expo"],
  },
  {
    id: "web",
    items: ["TypeScript", "JavaScript", "Next.js 16", "React 19", "Angular", "Tailwind CSS", "ASP.NET Core MVC"],
  },
  {
    id: "data",
    items: ["Supabase", "PostgreSQL", "Row Level Security", "Realtime", "pg_cron", "MySQL", "SQL Server", "Firebase"],
  },
  {
    id: "delivery",
    items: ["Vitest", "Playwright", "GitHub Actions", "Docker", "Vercel", "Git"],
  },
] as const;

const en = {
  nav: { about: "About", skills: "Skills", projects: "Projects", journey: "Journey", contact: "Contact" },
  hero: {
    status: "Open to Mobile / Full-stack internships",
    hi: "Hi, I'm Tuan.",
    title: "I build full-stack web & mobile apps that hold up under pressure.",
    sub: "Fourth-year IT student at Hoa Sen University. I take a feature from the database schema to the UI, and write the tests in between.",
    cv: "Download CV",
    work: "See my work",
    stats: [
      { value: "150+", label: "tests in SportArena" },
      { value: "5", label: "projects built" },
      { value: "0", label: "double bookings, enforced by the DB" },
    ],
    codeNote: "simplified from SportArena",
  },
  about: {
    eyebrow: "About",
    title: "Correctness first, then pixels.",
    bio: "I'm a fourth-year Information Technology student in Ho Chi Minh City (Hoa Sen University, expected 2027). I like building the whole thing, from the Postgres schema to the screen, and I care about the unglamorous parts: database constraints, Row Level Security, and tests that run in CI on every push.",
    team: {
      title: "Team player",
      body: "Pair programming, code reviews and shared codebases are normal for me. I've worked on three team projects as a full-stack or back-end developer.",
    },
    ai: {
      title: "How I work with AI",
      body: "I plan and build with Claude Code, and keep it on a short leash:",
      steps: ["Requirements", "Research", "Written plan", "Tested build"],
    },
    growth: {
      title: "Levelling up",
      items: ["System design", "Payments integration", "Mobile with Expo"],
    },
    langs: {
      title: "Languages",
      items: [
        { name: "Vietnamese", level: "Native" },
        { name: "English", level: "TOEIC 510 (May 2025)" },
      ],
    },
    where: "Ho Chi Minh City, Vietnam",
  },
  skills: {
    eyebrow: "Skills",
    title: "The toolbox.",
    groups: {
      mobile: "Mobile",
      web: "Full-stack web",
      data: "Databases & back end",
      delivery: "Testing & delivery",
    },
    basic: "basic",
  },
  projects: {
    eyebrow: "Projects",
    title: "Things I've built.",
    solo: "Solo",
    team: "Team",
    repo: "Code",
    demo: "Live demo",
    featured: "Featured",
  },
  journey: {
    eyebrow: "Journey",
    title: "Where I've learned.",
    items: [
      {
        org: "Hoa Sen University",
        role: "Information Technology",
        time: "2023 – 2027 (expected)",
        body: "Focus on software development for web and mobile interfaces. Coursework: Web Development, Mobile Application Development, Interaction Design, OO Systems Analysis and Design, Software Engineering, Software Architecture, Machine Learning. Now taking Deep Learning and Software Project Management.",
      },
      {
        org: "96photobooth",
        role: "Part-time Staff, Photobooth Setup",
        time: "Nov 2025 – Present",
        body: "Sets up photo booth machines for customers.",
      },
      {
        org: "ITSS Academy",
        role: "Web Fullstack Development, class Web25A (certificate)",
        time: "Jun 2025 – Sep 2025",
        body: "Three-month training and internship program. Team project: Lightwerk, a full-stack short-video platform.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something.",
    body: "I'm looking for a Mobile or Full-stack Developer internship. Email is the fastest way to reach me.",
    copy: "Copy email",
    copied: "Copied!",
  },
  footer: "Designed & built by Tuan. Powered by Next.js.",
  toggles: { lang: "Switch language", theme: "Switch theme" },
};

export type Dict = typeof en;

const vi: Dict = {
  nav: { about: "Giới thiệu", skills: "Kỹ năng", projects: "Dự án", journey: "Hành trình", contact: "Liên hệ" },
  hero: {
    status: "Đang tìm thực tập Mobile / Full-stack",
    hi: "Chào, mình là Tuan.",
    title: "Mình xây ứng dụng web & mobile full-stack chạy vững khi có áp lực.",
    sub: "Sinh viên năm 4 ngành CNTT tại Đại học Hoa Sen. Mình làm một tính năng từ schema database đến giao diện, và viết test ở giữa.",
    cv: "Tải CV",
    work: "Xem dự án",
    stats: [
      { value: "150+", label: "test trong SportArena" },
      { value: "5", label: "dự án đã làm" },
      { value: "0", label: "lượt đặt trùng, database đảm bảo" },
    ],
    codeNote: "rút gọn từ SportArena",
  },
  about: {
    eyebrow: "Giới thiệu",
    title: "Đúng trước, đẹp sau.",
    bio: "Mình là sinh viên năm 4 ngành Công nghệ thông tin ở TP.HCM (Đại học Hoa Sen, dự kiến tốt nghiệp 2027). Mình thích làm trọn vẹn từ schema Postgres đến màn hình, và để tâm đến những phần ít ai khoe: ràng buộc database, Row Level Security và test chạy trên CI sau mỗi lần push.",
    team: {
      title: "Làm việc nhóm",
      body: "Pair programming, code review và chung codebase là chuyện quen thuộc. Mình đã tham gia ba dự án nhóm với vai trò full-stack hoặc back-end.",
    },
    ai: {
      title: "Cách mình làm việc với AI",
      body: "Mình lên kế hoạch và code cùng Claude Code, nhưng giữ nó đi theo quy trình:",
      steps: ["Yêu cầu", "Nghiên cứu", "Kế hoạch viết ra", "Bản build đã test"],
    },
    growth: {
      title: "Đang học thêm",
      items: ["Thiết kế hệ thống", "Tích hợp thanh toán", "Mobile với Expo"],
    },
    langs: {
      title: "Ngôn ngữ",
      items: [
        { name: "Tiếng Việt", level: "Bản ngữ" },
        { name: "Tiếng Anh", level: "TOEIC 510 (05/2025)" },
      ],
    },
    where: "TP. Hồ Chí Minh, Việt Nam",
  },
  skills: {
    eyebrow: "Kỹ năng",
    title: "Bộ đồ nghề.",
    groups: {
      mobile: "Mobile",
      web: "Full-stack web",
      data: "Database & back end",
      delivery: "Test & triển khai",
    },
    basic: "cơ bản",
  },
  projects: {
    eyebrow: "Dự án",
    title: "Những thứ mình đã làm.",
    solo: "Một mình",
    team: "Nhóm",
    repo: "Mã nguồn",
    demo: "Xem demo",
    featured: "Nổi bật",
  },
  journey: {
    eyebrow: "Hành trình",
    title: "Nơi mình đã học.",
    items: [
      {
        org: "Đại học Hoa Sen",
        role: "Công nghệ thông tin",
        time: "2023 – 2027 (dự kiến)",
        body: "Tập trung phát triển phần mềm cho giao diện web và di động. Môn học: Phát triển Web, Phát triển ứng dụng di động, Thiết kế tương tác, Phân tích thiết kế hệ thống hướng đối tượng, Công nghệ phần mềm, Kiến trúc phần mềm, Học máy. Đang học Học sâu và Quản lý dự án phần mềm.",
      },
      {
        org: "96photobooth",
        role: "Nhân viên part-time, lắp đặt photobooth",
        time: "11/2025 – nay",
        body: "Lắp đặt máy photobooth cho khách hàng.",
      },
      {
        org: "ITSS Academy",
        role: "Web Fullstack Development, lớp Web25A (có chứng chỉ)",
        time: "06/2025 – 09/2025",
        body: "Chương trình đào tạo và thực tập ba tháng. Dự án nhóm: Lightwerk, nền tảng video ngắn full-stack.",
      },
    ],
  },
  contact: {
    eyebrow: "Liên hệ",
    title: "Cùng làm gì đó nhé.",
    body: "Mình đang tìm vị trí thực tập Mobile hoặc Full-stack Developer. Email là cách nhanh nhất để liên lạc.",
    copy: "Sao chép email",
    copied: "Đã chép!",
  },
  footer: "Thiết kế và xây dựng bởi Tuan. Chạy bằng Next.js.",
  toggles: { lang: "Đổi ngôn ngữ", theme: "Đổi giao diện" },
};

export const dict: Record<Lang, Dict> = { en, vi };
