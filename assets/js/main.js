/* ============================================================
   My Profile — main.js
   Shared across all pages: language (EN/AR), theme (dark/light),
   preferences saved in localStorage, reveal-on-scroll animations
   ============================================================ */

const LANG_KEY = "pref-lang";
const THEME_KEY = "pref-theme";

/* ===== TRANSLATIONS ===== */
const I18N = {
    en: {
        // Nav
        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.library": "Library",
        // Hero (index)
        "hero.title": "Hi, I’m Ahmad 👋",
        "hero.subtitle": "CS graduate who loves building scalable web apps, data analysis, and systems that make sense.",
        "hero.projectsBtn": "View Projects",
        "hero.libraryBtn": "Explore Library",
        "hero.download": "Download CV",
        "hero.badge1": "B.Sc. Computer Science",
        "hero.badge2": ".NET / Angular Trainee",
        "hero.badge3": "Amman, Jordan",
        // Interests
        "interests.title": "What I’m into",
        "interests.card1": "📊 Data Analysis",
        "interests.card2": "🌐 Web Systems",
        "interests.card3": "🧠 Algorithms",
        // Stats
        "stats.degree": "Computer Science",
        "stats.internships": "Traineeships",
        "stats.tech": "Technologies",
        "stats.coffee": "Coffee ☕",
        // Footer
        "footer.rights": "© 2026 Ahmad Nofal",
        "footer.location": "📍 Amman, Jordan",
        // About (index)
        "about.title": "About Me",
        "about.text": "Motivated Computer Science graduate with expertise in front-end and full-stack development. I enjoy building scalable web applications, integrating APIs, and turning data into clear, user-friendly systems.",
        "about.edu": "B.Sc. in Computer Science — University of Jordan",
        "about.work": "Full Stack Trainee (.NET / Angular) @ Dalil",
        // Experience & Certifications
        "exp.title": "Experience",
        "exp.e1.title": "Full Stack Web Development Trainee (.NET / Angular)",
        "exp.e1.org": "Dalil · Jul 2026 – Present",
        "exp.e1.desc": "Building backend services with C# and ASP.NET Core, Angular frontends, PostgreSQL databases, and RESTful APIs.",
        "exp.e2.title": "Digiskills MEL Trainee",
        "exp.e2.org": "Integrated International · Apr 2026 – Jun 2026",
        "exp.e2.desc": "MEL practices, digital surveys with XLSForm and KoboToolbox, sampling methods, and advanced Excel analysis.",
        "exp.e3.title": "Mendix Rapid Developer Trainee",
        "exp.e3.org": "Polaris · Nov 2025 – Jan 2026",
        "exp.e3.desc": "Built low-code applications with microflows, page design, and data models.",
        "certs.title": "Certifications",
        "certs.c1": "Full Stack Development — Udemy · 2026",
        "certs.c2": "Cloud Foundations — AWS Academy · 2025",
        "certs.c3": "Generative AI Foundations — AWS Academy · 2025",
        // GitHub
        "gh.title": "GitHub Activity",
        "gh.repos": "Public Repos",
        "gh.followers": "Followers",
        "gh.stars": "Total Stars",
        "gh.visit": "Visit My GitHub",
        // Projects page
        "projects.title": "My Projects",
        "projects.subtitle": "Things I’ve built for learning, for fun, and for the résumé.",
        "card.code": "Code",
        "card.live": "Live Demo",
        "p1.title": "Life Bank — Blood Bank System",
        "p1.desc": "A full-stack blood donation management system connecting donors, patients, hospitals, and admins.",
        "p1.badge": "Featured Project",
        "p1.f1": "Four roles: Donor, Patient, Hospital & Admin",
        "p1.f2": "Blood request workflow — approve, reject, complete",
        "p1.f3": "Donation tracking & medical eligibility forms",
        "p1.f4": "Campaigns, notifications & support tickets",
        "p1.f5": "Admin dashboard with live statistics",
        "p2.title": "Clock Simulation",
        "p2.desc": "A C++ clock simulator built on circular doubly linked lists, with Roman numeral display and AM/PM handling.",
        "p3.title": "Personal Portfolio",
        "p3.desc": "This website — designed and built from scratch with vanilla HTML, CSS, and JavaScript.",
        // Library page
        "library.title": "My Library",
        "library.subtitle": "Books and resources I keep coming back to.",
        "card.read": "Read",
        "lib1.title": "Clean Code",
        "lib1.note": "The classic on writing code humans can actually read.",
        "lib2.title": "The Pragmatic Programmer",
        "lib2.note": "Practical wisdom for building real-world software.",
        "lib3.title": "Grokking Algorithms",
        "lib3.note": "Algorithms explained with pictures, not pain.",
        "lib4.title": "CS50",
        "lib4.note": "Still the best introduction to computer science.",
        "lib5.title": "MDN Web Docs",
        "lib5.note": "The reference for everything on the web.",
        "lib6.title": "Three.js Journey",
        "lib6.note": "3D for the web, learned the fun way.",
        // Life page
        "nav.life": "My Life",
        "life.title": "My Life",
        "life.subtitle": "A very unserious archive of my favorite moments.",
        "life.shuffle": "Shuffle the chaos",
        "life.hint": "Click any photo to zoom 👀",
        "life.missing": "This photo is still hiding…",
        "life.more": "More chaos coming soon…",
        "life.tape": "Welcome to the chaos ✦ 0% formal ✦ certified good times ✦ no filters needed ✦ ",
        "life.c1": "CEO of everything, age 6",
        "life.c2": "Orange jacket, zero fear",
        "life.c3": "Graduated. Serious for exactly one day",
        "life.c4": "Elevator photoshoot — budget: 0",
        "life.c5": "Us vs. the mirror, round 47",
        "life.c6": "Very serious business meeting",
        "life.c7": "A night we'll never forget",
        "life.c8": "The squad that does everything",
        "life.c9": "Nerd mode: ACTIVATED",
        "life.c10": "POV: the sun chose violence",
        "life.c11": "Work mode… sort of",
        "life.c12": "Break time world champions",
        "life.c13": "Certified moment",
        "life.c14": "Main character energy",
        "life.c15": "Core memory unlocked",
        "life.c16": "No context needed",
        "life.c17": "Peak content",
        "life.c18": "Just vibes",
        "life.c19": "Archive material",
        "life.c20": "Storage full, worth it",
        "life.c21": "Unsupervised content",
        "life.c22": "Just me"
    },
    ar: {
        // Nav
        "nav.home": "الرئيسية",
        "nav.projects": "المشاريع",
        "nav.library": "المكتبة",
        // Hero (index)
        "hero.title": "مرحبًا، أنا أحمد 👋",
        "hero.subtitle": "خريج علوم حاسوب، بحب بناء تطبيقات ويب قابلة للتوسع، وتحليل البيانات، والأنظمة اللي لها معنى.",
        "hero.projectsBtn": "المشاريع",
        "hero.libraryBtn": "المكتبة",
        "hero.download": "حمّل السيرة الذاتية",
        "hero.badge1": "بكالوريوس علوم حاسوب",
        "hero.badge2": "متدرب .NET / Angular",
        "hero.badge3": "عمّان، الأردن",
        // Interests
        "interests.title": "اهتماماتي",
        "interests.card1": "📊 تحليل البيانات",
        "interests.card2": "🌐 أنظمة الويب",
        "interests.card3": "🧠 الخوارزميات",
        // Stats
        "stats.degree": "علوم الحاسوب",
        "stats.internships": "تدريبات",
        "stats.tech": "تقنية",
        "stats.coffee": "قهوة ☕",
        // Footer
        "footer.rights": "© 2026 أحمد نوفل",
        "footer.location": "📍 عمّان، الأردن",
        // About (index)
        "about.title": "نبذة عني",
        "about.text": "خريج علوم حاسوب متحمس لتطوير الويب، من الواجهات الأمامية إلى التطبيقات المتكاملة. بحب بناء تطبيقات ويب قابلة للتوسع، وربط الـ APIs، وتحويل البيانات إلى أنظمة واضحة وسهلة الاستخدام.",
        "about.edu": "بكالوريوس علوم حاسوب — الجامعة الأردنية",
        "about.work": "متدرب فول ستاك (.NET / Angular) في Dalil",
        // Experience & Certifications
        "exp.title": "خبراتي",
        "exp.e1.title": "متدرب تطوير ويب فول ستاك (.NET / Angular)",
        "exp.e1.org": "Dalil · تموز 2026 – الآن",
        "exp.e1.desc": "بناء خدمات خلفية باستخدام C# و ASP.NET Core، وواجهات أمامية بـ Angular، وقواعد بيانات PostgreSQL، وربطها عبر RESTful APIs.",
        "exp.e2.title": "متدرب Digiskills MEL",
        "exp.e2.org": "Integrated International · نيسان 2026 – حزيران 2026",
        "exp.e2.desc": "منهجيات MEL، واستبيانات رقمية باستخدام XLSForm و KoboToolbox، وأخذ العينات، وتحليل البيانات بـ Excel المتقدم.",
        "exp.e3.title": "متدرب Mendix Rapid Developer",
        "exp.e3.org": "Polaris · تشرين الثاني 2025 – كانون الثاني 2026",
        "exp.e3.desc": "بناء تطبيقات low-code باستخدام microflows وتصميم الصفحات ونماذج البيانات.",
        "certs.title": "الشهادات",
        "certs.c1": "تطوير فول ستاك — Udemy · 2026",
        "certs.c2": "أساسيات الحوسبة السحابية — AWS Academy · 2025",
        "certs.c3": "أساسيات الذكاء الاصطناعي التوليدي — AWS Academy · 2025",
        // GitHub
        "gh.title": "نشاطي على GitHub",
        "gh.repos": "مستودعات عامة",
        "gh.followers": "متابعون",
        "gh.stars": "مجموع النجوم",
        "gh.visit": "زر صفحتي على GitHub",
        // Projects page
        "projects.title": "مشاريعي",
        "projects.subtitle": "أشياء بنيتها للتعلم، والمتعة، والسيرة الذاتية.",
        "card.code": "الكود",
        "card.live": "معاينة",
        "p1.title": "لايف بانك — نظام بنك الدم",
        "p1.desc": "نظام متكامل لإدارة التبرع بالدم يربط المتبرعين والمرضى والمستشفيات والإدارة.",
        "p1.badge": "مشروع مميز",
        "p1.f1": "أربعة أدوار: متبرع، مريض، مستشفى، وإدارة",
        "p1.f2": "دورة طلبات الدم — موافقة، رفض، إكمال",
        "p1.f3": "تتبع التبرعات ونماذج الأهلية الطبية",
        "p1.f4": "حملات وإشعارات وتذاكر دعم",
        "p1.f5": "لوحة تحكم للإدارة مع إحصائيات مباشرة",
        "p2.title": "محاكاة الساعة",
        "p2.desc": "محاكاة ساعة بلغة C++ مبنية على قوائم مترابطة دائرية مزدوجة، مع عرض بالأرقام الرومانية ونظام AM/PM.",
        "p3.title": "الموقع الشخصي",
        "p3.desc": "هذا الموقع — مصمم ومبني من الصفر باستخدام HTML و CSS و JavaScript.",
        // Library page
        "library.title": "مكتبتي",
        "library.subtitle": "كتب ومصادر دايمًا برجع لها.",
        "card.read": "اقرأ",
        "lib1.title": "Clean Code",
        "lib1.note": "الكلاسيكية عن كتابة كود يقدر البشر فعليًا يقرأوه.",
        "lib2.title": "The Pragmatic Programmer",
        "lib2.note": "حكمة عملية لبناء برمجيات العالم الحقيقي.",
        "lib3.title": "Grokking Algorithms",
        "lib3.note": "الخوارزميات مشروحة بالصور، مو بالعذاب.",
        "lib4.title": "CS50",
        "lib4.note": "لسه أفضل مقدمة في علوم الحاسوب.",
        "lib5.title": "MDN Web Docs",
        "lib5.note": "المرجع الأساسي لكل ما يخص الويب.",
        "lib6.title": "Three.js Journey",
        "lib6.note": "ثلاثي الأبعاد للويب بطريقة ممتعة.",
        // Life page
        "nav.life": "حياتي",
        "life.title": "حياتي",
        "life.subtitle": "أرشيف غير رسمي جدًا لأجمل لحظاتي.",
        "life.shuffle": "اخلط الفوضى",
        "life.hint": "اضغط على أي صورة لتكبيرها 👀",
        "life.missing": "هالصورة لسا مختبئة…",
        "life.more": "المزيد من الفوضى قريبًا…",
        "life.tape": "أهلين بالفوضى ✦ صفر رسمي ✦ لحظات حلوة ومعتمدة ✦ بدون فلاتر ✦ ",
        "life.c1": "مدير عام لكل شي… من عمر ٦",
        "life.c2": "جاكيت برتقالي وصفر خوف",
        "life.c3": "تخرجنا… رسميين ليوم واحد بالضبط",
        "life.c4": "جلسة تصوير بالمصعد — الميزانية: ٠",
        "life.c5": "نحنا والمراية… الجولة ٤٧",
        "life.c6": "اجتماع عمل جدي جدًا",
        "life.c7": "ليلة عمرنا ما مننساها",
        "life.c8": "السكة اللي بتعمل كل شي",
        "life.c9": "وضع النرد: مُفعّل",
        "life.c10": "POV: الشمس اختارت العنف",
        "life.c11": "وضع الشغل… تقريبًا",
        "life.c12": "أبطال العالم بوقت الاستراحة",
        "life.c13": "لحظة معتمدة رسميًا",
        "life.c14": "طاقة البطل الرئيسي",
        "life.c15": "ذكرى اتفتحت للتو",
        "life.c16": "بدون شرح… مش لازم",
        "life.c17": "محتوى من الطراز الأول",
        "life.c18": "فايبات بس",
        "life.c19": "مادة للأرشيف",
        "life.c20": "المساحة خلصت… وتستاهل",
        "life.c21": "محتوى بدون إشراف",
        "life.c22": "أنا وبس"
    }
};

let currentLang = localStorage.getItem(LANG_KEY) === "ar" ? "ar" : "en";

/* ===== LANGUAGE ===== */
function applyLanguage(lang) {
    currentLang = lang;
    const dict = I18N[lang];

    document.documentElement.lang = lang;
    document.body.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.textContent = lang === "ar" ? "EN" : "AR";

    localStorage.setItem(LANG_KEY, lang);

    // Restart the typing animation with the new language
    if (typeof window.startTyping === "function") window.startTyping();
}

/* ===== THEME ===== */
function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");

    const icon = document.querySelector("#themeToggle i");
    if (icon) icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";

    localStorage.setItem(THEME_KEY, theme);
}

/* ===== REVEAL ON SCROLL ===== */
function initReveal() {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
        elements.forEach((el) => el.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
}

/* ===== INIT ===== */
(function init() {
    // Theme (default: dark)
    applyTheme(localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark");

    // Language (default: English)
    applyLanguage(currentLang);

    // Toggles
    const langBtn = document.getElementById("langToggle");
    const themeBtn = document.getElementById("themeToggle");

    if (langBtn) {
        langBtn.addEventListener("click", () =>
            applyLanguage(currentLang === "ar" ? "en" : "ar")
        );
    }

/* ===== TYPING ANIMATION (works on every spot marked .typed-text) ===== */
var TYPED_SETS = {
    roles: {
        en: ["Full-Stack Developer", "Web Developer", "Data Analyst", "Data Enthusiast"],
        ar: ["مطور ويب فول ستاك", "مطور ويب", "محلل بيانات", "شغوف بالبيانات"]
    },
    projects: {
        en: ["Blood Bank Systems", "C++ Simulations", "Web Apps & APIs", "Built with Vanilla JS"],
        ar: ["نظام بنك الدم", "محاكاة بلغة C++", "تطبيقات ويب و APIs", "مبني بـ Vanilla JS"]
    },
    library: {
        en: ["Books I keep coming back to", "Resources I actually use", "Always learning"],
        ar: ["كتب دايمًا برجع لها", "مصادر بستخدمها فعلًا", "بتعلم دايمًا"]
    },
    life: {
        en: ["Chaos, but the fun kind", "0% formal — 100% real", "Certified good times", "No filters were used"],
        ar: ["فوضى… بس من النوع الحلو", "٠٪ رسمي — ١٠٠٪ حقيقي", "لحظات حلوة ومعتمدة", "بدون فلاتر"]
    }
};
var typeSession = 0;

function startTyping() {
    typeSession++;
    const session = typeSession;
    const targets = document.querySelectorAll(".typed-text");
    if (!targets.length) return;

    targets.forEach((el, index) => {
        const setName = el.dataset.typed || "roles";
        const set = TYPED_SETS[setName];
        const list = set && (set[currentLang] || set.en);
        if (!list) return;

        let pi = 0;
        let ci = 0;
        let deleting = false;

        function tick() {
            if (session !== typeSession) return; // cancelled by language switch
            const word = list[pi];
            let delay;

            if (!deleting) {
                ci++;
                if (ci === word.length) { deleting = true; delay = 1600; }
                else { delay = 75; }
            } else {
                ci--;
                if (ci === 0) { deleting = false; pi = (pi + 1) % list.length; delay = 350; }
                else { delay = 38; }
            }

            el.textContent = word.slice(0, ci);
            setTimeout(tick, delay);
        }

        // stagger the different spots so they don't type in perfect sync
        setTimeout(tick, index * 900);
    });
}

// Expose for applyLanguage (defined in the global scope)
window.startTyping = startTyping;

/* ===== COUNT-UP NUMBERS ===== */
function initCounters() {
    const counters = document.querySelectorAll(".count");
    if (!counters.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = (el) => {
        const target = parseInt(el.dataset.target, 10) || 0;
        const suffix = el.dataset.suffix || "";
        if (reduced) { el.textContent = target + suffix; return; }
        const t0 = performance.now();
        const dur = 1200;
        const step = (t) => {
            const p = Math.min((t - t0) / dur, 1);
            el.textContent = Math.round(target * p) + suffix;
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
        counters.forEach(run);
        return;
    }

    const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); }
        });
    }, { threshold: 0.4 });
    counters.forEach((el) => obs.observe(el));
}

/* ===== GITHUB LIVE STATS ===== */
async function loadGitHubStats() {
    const user = "ahm2213480";
    const set = (id, v) => {
        const el = document.getElementById(id);
        if (el && v !== null && v !== undefined) el.textContent = v;
    };

    try {
        const u = await fetch("https://api.github.com/users/" + user)
            .then((r) => (r.ok ? r.json() : Promise.reject()));
        set("ghRepos", u.public_repos);
        set("ghFollowers", u.followers);

        const repos = await fetch("https://api.github.com/users/" + user + "/repos?per_page=100")
            .then((r) => (r.ok ? r.json() : Promise.reject()));
        set("ghStars", Array.isArray(repos)
            ? repos.reduce((s, r) => s + (r.stargazers_count || 0), 0)
            : null);
    } catch (e) {
        /* offline or rate-limited: keep the placeholders */
    }
}

// Auto-start on load
startTyping();
initCounters();
loadGitHubStats();

    if (themeBtn) {
        themeBtn.addEventListener("click", () =>
            applyTheme(document.body.classList.contains("dark") ? "light" : "dark")
        );
    }

    // Reveal animations
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initReveal);
    } else {
        initReveal();
    }
})();