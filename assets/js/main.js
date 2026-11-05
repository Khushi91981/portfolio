/**
 * ISHA SHARMA — PORTFOLIO CORE APPLICATION ENGINE 3.0
 * Cyber Amber & Obsidian Theme, Interactive Career Dossier, Competency Matrix & Dual Audience Router
 */

// Dual Audience Profile Configuration
const PROFILE_CONFIGS = {
    job: {
        mode: 'job',
        phone: '8560970064',
        formattedPhone: '+91 8560970064',
        waLink: 'https://wa.me/918560970064',
        navRoleTag: 'Candidate Profile',
        statusLabel: 'Available for Full-Time & Contract Engineering Roles',
        heroHeadline: 'Architecting High-Performance <span class="gradient-text">WordPress</span> & Enterprise CMS.',
        heroSubtitle: 'Senior WordPress Developer with 5+ years of engineering experience across 7 technology consultancies. Specializing in custom themes, bespoke WooCommerce stores, REST APIs, and Core Web Vitals.',
        contactNoticeLabel: 'Full-Time Direct Line:',
        primaryCtaText: 'Download Resume (PDF)',
        primaryCtaHref: 'Resume.pdf',
        primaryCtaDownload: 'Isha_Sharma_Resume.pdf',
        secondaryCtaText: 'Career Dossier (7 Roles)',
        secondaryCtaHref: '#experience',
        hudFileName: 'candidate-profile.json',
        hudSnippet: `<span class="c-com">// Full-Time Engineering Candidate Profile</span><br>
{<br>
&nbsp;&nbsp;<span class="c-kw">"name"</span>: <span class="c-str">"Isha Sharma"</span>,<br>
&nbsp;&nbsp;<span class="c-kw">"targetRole"</span>: <span class="c-str">"Senior WordPress Developer"</span>,<br>
&nbsp;&nbsp;<span class="c-kw">"experience"</span>: <span class="c-str">"5+ Years (7 Consultancies)"</span>,<br>
&nbsp;&nbsp;<span class="c-kw">"currentRole"</span>: <span class="c-str">"INSIDEA (WordPress Developer)"</span>,<br>
&nbsp;&nbsp;<span class="c-kw">"degree"</span>: <span class="c-str">"Master of Computer Science (MCA)"</span>,<br>
&nbsp;&nbsp;<span class="c-kw">"directPhone"</span>: <span class="c-str">"+91 8560970064"</span>,<br>
&nbsp;&nbsp;<span class="c-kw">"email"</span>: <span class="c-str">"ishasharma91981@gmail.com"</span>,<br>
&nbsp;&nbsp;<span class="c-kw">"workMode"</span>: <span class="c-str">"Remote / Hybrid / On-Site"</span><br>
}`,
        contactHeading: "Let's discuss full-time roles & engineering opportunities.",
        contactSub: "Looking to add an experienced WordPress engineer to your product squad or agency? Connect directly via telephone, WhatsApp, or email.",
        phoneLabel: 'Full-Time Direct Line',
        // In full-time mode, DO NOT show freelancer details:
        showAltLine: false
    },
    freelance: {
        mode: 'freelance',
        phone: '6377090502',
        formattedPhone: '+91 6377090502',
        waLink: 'https://wa.me/916377090502',
        navRoleTag: 'Freelance Partner',
        statusLabel: 'Available for Client Projects & Retainers',
        heroHeadline: 'Engineering High-Converting <span class="gradient-text">WooCommerce</span> & Shopify Stores.',
        heroSubtitle: 'Senior WordPress & WooCommerce Development Partner for high-growth brands and creative agencies. Custom themes, e-commerce stores, speed optimization, and reliable white-label execution.',
        contactNoticeLabel: 'Freelance & Client Projects Line:',
        primaryCtaText: 'Request Project Quote',
        primaryCtaHref: '#contact',
        primaryCtaDownload: null,
        secondaryCtaText: 'Explore Client Work',
        secondaryCtaHref: '#work',
        hudFileName: 'freelance-services.ts',
        hudSnippet: `<span class="c-com">// Dedicated Freelance & White-Label Partner</span><br>
<span class="c-kw">const</span> agencyPartner = {<br>
&nbsp;&nbsp;directLine: <span class="c-str">"+91 6377090502"</span>,<br>
&nbsp;&nbsp;hiringLine: <span class="c-str">"+91 8560970064"</span>, <span class="c-com">// Also available for hiring</span><br>
&nbsp;&nbsp;email: <span class="c-str">"ishasharma91981@gmail.com"</span>,<br>
&nbsp;&nbsp;services: [<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"Custom WordPress Themes"</span>,<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"WooCommerce Store Builds"</span>,<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="c-str">"Shopify Liquid Development"</span><br>
&nbsp;&nbsp;],<br>
&nbsp;&nbsp;whiteLabel: <span class="c-kw">true</span><br>
};`,
        contactHeading: 'Have a website project or client store to build?',
        contactSub: "Need a custom WordPress theme, high-converting WooCommerce shop, Shopify development, or a dependable white-label agency partner? Call or message my dedicated client line.",
        phoneLabel: 'Primary: Freelance Client Line',
        // In freelance mode, show BOTH numbers:
        showAltLine: true,
        altLabel: 'Corporate & Company Work Line:',
        altPhone: '+91 8560970064',
        altWa: 'https://wa.me/918560970064',
        altDesc: 'Also open for in-house full-time senior engineering roles.'
    }
};

// 7 Verified Companies Data from Official Resume
const CAREER_DOSSIER_DATA = [
    {
        id: 'insidea',
        badge: 'IN',
        company: 'INSIDEA',
        role: 'WordPress Developer',
        period: 'July 2025 – Present',
        duration: 'Remote',
        overview: 'Develop and maintain custom WordPress websites, themes, plugins, and dynamic components while integrating REST APIs and third-party services.',
        achievements: [
            'Develop and maintain custom WordPress websites, themes, plugins, and dynamic components.',
            'Work with multiple CMS platforms and integrate REST APIs and third-party services.',
            'Build custom solutions using PHP, ACF, CPT, JavaScript, HTML/CSS, Elementor, and other web technologies.',
            'Handle website optimization, troubleshooting, migrations, deployment, and ongoing maintenance.'
        ],
        stack: ['WordPress', 'Custom Themes & Plugins', 'PHP', 'ACF', 'CPT', 'JavaScript', 'HTML/CSS', 'Elementor', 'REST APIs', 'Website Optimization']
    },
    {
        id: 'penguin-peak',
        badge: 'PP',
        company: 'Penguin Peak Technologies Pvt. Ltd.',
        role: 'WordPress Developer',
        period: 'February 2024 – July 2025',
        duration: 'Ahmedabad, Gujarat',
        overview: 'Engineered custom WordPress websites, custom themes and plugins, multi-CMS solutions, and REST API third-party integrations.',
        achievements: [
            'Develop and maintain custom WordPress websites, themes, plugins, and dynamic components.',
            'Work with multiple CMS platforms and integrate REST APIs and third-party services.',
            'Build custom solutions using PHP, ACF, CPT, JavaScript, HTML/CSS, Elementor, and other web technologies.',
            'Handle website optimization, troubleshooting, migrations, deployment, and ongoing maintenance.'
        ],
        stack: ['WordPress', 'Custom Themes', 'Custom Plugins', 'PHP', 'ACF', 'CPT', 'REST APIs', 'Elementor', 'Migrations', 'Deployment']
    },
    {
        id: 'indianic',
        badge: 'IC',
        company: 'IndiaNIC Infotech Limited',
        role: 'Software Engineer',
        period: 'August 2023 – January 2024',
        duration: 'Ahmedabad, Gujarat',
        overview: 'Developed and customized WordPress websites, implemented custom post types and taxonomies, and coordinated with QA and UI teams.',
        achievements: [
            'Developed and customized WordPress websites using PHP, ACF, Elementor, themes, and plugins.',
            'Implemented custom post types, taxonomies, flexible content structures, and reusable components.',
            'Worked with QA and UI teams on debugging, responsive development, SEO, and project delivery.'
        ],
        stack: ['PHP', 'ACF', 'Elementor', 'Custom Themes & Plugins', 'CPT & Taxonomies', 'SEO', 'QA Debugging', 'Responsive Development']
    },
    {
        id: 'mepa',
        badge: 'MO',
        company: 'MEPA Outsourcing LLP',
        role: 'Web Developer',
        period: 'April 2022 – July 2023',
        duration: 'Ahmedabad, Gujarat',
        overview: 'Developed responsive websites using WordPress & Shopify, customized themes, integrated payment & tracking applications, and handled site migrations.',
        achievements: [
            'Developed responsive websites using WordPress, Elementor, HTML, CSS, JavaScript, and PHP.',
            'Worked with Shopify, customized themes, and integrated third-party payment and tracking applications.',
            'Handled website migrations, third-party integrations, deployment, client support, and documentation.'
        ],
        stack: ['WordPress', 'Shopify', 'Elementor', 'HTML5', 'CSS3', 'JavaScript', 'PHP', 'Third-Party Payments', 'Site Migrations']
    },
    {
        id: 'n2nacers',
        badge: 'NA',
        company: 'N2NAcers',
        role: 'Web Developer',
        period: 'January 2022 – April 2022',
        duration: 'Ahmedabad, Gujarat',
        overview: 'Developed responsive websites using Divi and Elementor with cross-browser compatibility, ACF custom fields, and FTP-based deployment.',
        achievements: [
            'Developed responsive websites using Divi and Elementor with cross-browser compatibility.',
            'Added ACF fields and custom widgets and supported FTP-based deployment and plugin setup.'
        ],
        stack: ['Divi', 'Elementor', 'ACF Fields', 'Custom Widgets', 'FTP Deployment', 'Plugin Setup', 'Cross-Browser Compatibility']
    },
    {
        id: 'techniverse',
        badge: 'TS',
        company: 'Techniverse Software Consulting Pvt. Ltd.',
        role: 'WordPress Developer',
        period: 'July 2021 – November 2021',
        duration: 'Rajkot, Gujarat',
        overview: 'Developed WordPress websites using Elementor, Tailwind CSS, custom themes, and ACF, implementing responsive structured layouts.',
        achievements: [
            'Developed WordPress websites using Elementor, Tailwind CSS, custom themes, and ACF.',
            'Implemented responsive layouts and structured content management solutions.'
        ],
        stack: ['WordPress', 'Elementor', 'Tailwind CSS', 'Custom Themes', 'ACF', 'Responsive Layouts', 'CMS Solutions']
    },
    {
        id: 'techneos',
        badge: 'TN',
        company: 'Techneos Solutions Pvt. Ltd.',
        role: 'WordPress Developer',
        period: 'May 2021 – June 2021',
        duration: 'Ahmedabad, Gujarat',
        overview: 'Developed and launched WordPress websites and customized themes according to client requirements with frontend implementation.',
        achievements: [
            'Developed and launched WordPress websites and customized themes according to client requirements.',
            'Worked on frontend implementation, website customization, and ongoing improvements.'
        ],
        stack: ['WordPress', 'Theme Customization', 'Frontend Implementation', 'Client Requirements', 'Website Launch']
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initDualProfileMode();
    initThemeManager();
    initCareerDossier();
    initProjectsGrid();
    initCaseStudyModal();
    initScrollProgress();
    initActiveNavSpy();
    initClipboardCopy();
    initInquiryForm();
    initMobileNav();
    updateYear();
});

/* ──────────────────────────────────────────────────────────
   1. DUAL PROFILE MODE SWITCHER
   ────────────────────────────────────────────────────────── */
function initDualProfileMode() {
    const urlParams = new URLSearchParams(window.location.search);
    const queryMode = urlParams.get('mode');
    const pageMode = document.body.dataset.pageMode;
    const savedMode = localStorage.getItem('isha-profile-mode');

    let activeMode = 'job';
    if (pageMode === 'job' || pageMode === 'freelance') {
        activeMode = pageMode;
    } else if (queryMode === 'freelance' || queryMode === 'job') {
        activeMode = queryMode;
    } else if (savedMode === 'freelance' || savedMode === 'job') {
        activeMode = savedMode;
    }

    applyProfileMode(activeMode);

    // Switcher buttons
    document.querySelectorAll('[data-set-mode]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetMode = btn.dataset.setMode;
            if (pageMode && pageMode !== targetMode) {
                window.location.href = targetMode === 'job' ? 'job.html' : 'freelance.html';
                return;
            }
            applyProfileMode(targetMode);
        });
    });
}

function applyProfileMode(mode) {
    const config = PROFILE_CONFIGS[mode] || PROFILE_CONFIGS.job;
    localStorage.setItem('isha-profile-mode', mode);

    // Switcher buttons UI
    document.querySelectorAll('[data-set-mode]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.setMode === mode);
        btn.setAttribute('aria-pressed', btn.dataset.setMode === mode ? 'true' : 'false');
    });

    const brandTag = document.getElementById('brandRoleTag');
    if (brandTag) brandTag.textContent = config.navRoleTag;

    const statusLabel = document.getElementById('heroStatusText');
    if (statusLabel) statusLabel.textContent = config.statusLabel;

    const heroHead = document.getElementById('heroHeadline');
    if (heroHead) heroHead.innerHTML = config.heroHeadline;

    const heroSub = document.getElementById('heroSubtitle');
    if (heroSub) heroSub.innerHTML = config.heroSubtitle;

    // Notice bar
    const noticeLabel = document.getElementById('heroContactLabel');
    if (noticeLabel) noticeLabel.textContent = config.contactNoticeLabel;

    const noticePhone = document.getElementById('heroContactPhone');
    if (noticePhone) {
        noticePhone.textContent = config.formattedPhone;
        noticePhone.href = `tel:+91${config.phone}`;
    }

    const noticeWa = document.getElementById('heroContactWa');
    if (noticeWa) noticeWa.href = config.waLink;

    // CTA buttons
    const primaryCta = document.getElementById('heroPrimaryCta');
    if (primaryCta) {
        primaryCta.querySelector('span').textContent = config.primaryCtaText;
        primaryCta.href = config.primaryCtaHref;
        if (config.primaryCtaDownload) {
            primaryCta.setAttribute('download', config.primaryCtaDownload);
        } else {
            primaryCta.removeAttribute('download');
        }
    }

    const secondaryCta = document.getElementById('heroSecondaryCta');
    if (secondaryCta) {
        secondaryCta.querySelector('span').textContent = config.secondaryCtaText;
        secondaryCta.href = config.secondaryCtaHref;
    }

    // HUD Terminal
    const hudFile = document.getElementById('hudFileName');
    if (hudFile) hudFile.textContent = config.hudFileName;

    const hudSnippet = document.getElementById('hudSnippet');
    if (hudSnippet) hudSnippet.innerHTML = config.hudSnippet;

    // Contact Section
    const contactHead = document.getElementById('contactHeading');
    if (contactHead) contactHead.textContent = config.contactHeading;

    const contactSub = document.getElementById('contactSub');
    if (contactSub) contactSub.textContent = config.contactSub;

    const contactPhoneLabel = document.getElementById('contactPhoneLabel');
    if (contactPhoneLabel) contactPhoneLabel.textContent = config.phoneLabel;

    const contactPhone = document.getElementById('contactPhoneLink');
    if (contactPhone) {
        contactPhone.textContent = config.formattedPhone;
        contactPhone.href = `tel:+91${config.phone}`;
    }

    const contactPhoneCopy = document.getElementById('contactPhoneCopyBtn');
    if (contactPhoneCopy) {
        contactPhoneCopy.setAttribute('data-copy', config.formattedPhone);
    }

    const phoneCallBtn = document.getElementById('contactPhoneCallBtn');
    if (phoneCallBtn) {
        phoneCallBtn.href = `tel:+91${config.phone}`;
        phoneCallBtn.textContent = mode === 'freelance' ? 'Call Client Line' : 'Call Now';
    }

    const contactWa = document.getElementById('contactWhatsAppLink');
    if (contactWa) contactWa.href = config.waLink;

    // DIRECT CONTACT GRID CARD FOR CORPORATE PHONE (IN FREELANCE MODE)
    const cardAltPhone = document.getElementById('contactCardAltPhone');
    if (cardAltPhone) {
        cardAltPhone.style.display = config.showAltLine ? 'flex' : 'none';
    }

    // ALTERNATE LINE HANDLING:
    // IN FULL-TIME MODE: DO NOT SHOW FREELANCER DETAILS AT ALL!
    // IN FREELANCE MODE: SHOW BOTH NUMBERS!
    const altBox = document.getElementById('contactAltBox');
    if (altBox) {
        if (config.showAltLine) {
            altBox.style.display = 'block';
            const altLabel = document.getElementById('contactAltLabel');
            if (altLabel) altLabel.textContent = config.altLabel;

            const altPhone = document.getElementById('contactAltPhone');
            if (altPhone) {
                altPhone.textContent = config.altPhone;
                altPhone.href = `tel:${config.altPhone.replace(/\s+/g, '')}`;
            }

            const altWa = document.getElementById('contactAltWa');
            if (altWa) altWa.href = config.altWa;

            const altDesc = document.getElementById('contactAltDesc');
            if (altDesc) altDesc.textContent = config.altDesc;
        } else {
            // Hide alternate freelance box completely in full-time mode!
            altBox.style.display = 'none';
        }
    }

    // Form topic select
    const topicSelect = document.getElementById('inquiryTopicSelect');
    if (topicSelect) {
        topicSelect.selectedIndex = mode === 'job' ? 0 : 2;
    }
}

/* ──────────────────────────────────────────────────────────
   2. THEME MANAGER (DARK OBSIDIAN / CYBER AMBER DEFAULT)
   ────────────────────────────────────────────────────────── */
function initThemeManager() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');

    const sunSvg = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />`;
    const moonSvg = `<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />`;

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('isha-theme-pref-v3', theme);
        if (themeIcon) {
            themeIcon.innerHTML = theme === 'light' ? moonSvg : sunSvg;
        }
    };

    const saved = localStorage.getItem('isha-theme-pref-v3');
    if (saved) {
        applyTheme(saved);
    } else {
        applyTheme('dark');
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            applyTheme(current === 'dark' ? 'light' : 'dark');
        });
    }
}

/* ──────────────────────────────────────────────────────────
   3. INTERACTIVE CAREER DOSSIER (7 COMPANIES)
   ────────────────────────────────────────────────────────── */
function initCareerDossier() {
    const navContainer = document.getElementById('dossierNavList');
    const spotlightPanel = document.getElementById('dossierSpotlightPanel');

    if (!navContainer || !spotlightPanel) return;

    // Render left company tabs
    navContainer.innerHTML = CAREER_DOSSIER_DATA.map((item, index) => `
        <button type="button" class="dossier-company-tab ${index === 0 ? 'active' : ''}" data-dossier-index="${index}">
            <div class="tab-company-info">
                <div class="tab-company-badge">${item.badge}</div>
                <div>
                    <div class="tab-company-title">${item.company}</div>
                    <div class="tab-company-role">${item.role}</div>
                </div>
            </div>
            <span class="tab-company-period">${item.period}</span>
        </button>
    `).join('');

    const updateSpotlight = (index) => {
        const data = CAREER_DOSSIER_DATA[index];
        if (!data) return;

        spotlightPanel.classList.remove('fade-in');
        void spotlightPanel.offsetWidth; // Trigger reflow for animation

        spotlightPanel.innerHTML = `
            <div class="spotlight-top-meta">
                <div>
                    <h3 class="spotlight-company-title">${data.company}</h3>
                    <div class="spotlight-role-badge">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        <span>${data.role}</span>
                    </div>
                </div>
                <div class="spotlight-duration-pill">${data.period} &bull; ${data.duration}</div>
            </div>

            <p class="spotlight-overview-text">${data.overview}</p>

            <div class="spotlight-achievements-title">Core Engineering Contributions</div>
            <ul class="spotlight-achievements-list">
                ${data.achievements.map(ach => `
                    <li>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                        <span>${ach}</span>
                    </li>
                `).join('')}
            </ul>

            <div class="spotlight-stack-title">Technologies & Methodologies</div>
            <div class="spotlight-stack-chips">
                ${data.stack.map(s => `<span class="spotlight-chip">${s}</span>`).join('')}
            </div>
        `;

        spotlightPanel.classList.add('fade-in');

        // Update tab active classes
        document.querySelectorAll('.dossier-company-tab').forEach((tab, i) => {
            tab.classList.toggle('active', i === index);
        });
    };

    // Tab clicks
    navContainer.querySelectorAll('.dossier-company-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const idx = parseInt(tab.dataset.dossierIndex, 10);
            updateSpotlight(idx);
        });
    });

    // Initialize first tab
    updateSpotlight(0);
}

/* ──────────────────────────────────────────────────────────
   4. SELECTED WORK GRID & BROWSER MOCKUP CARDS
   ────────────────────────────────────────────────────────── */
function initProjectsGrid() {
    const grid = document.getElementById('editorialProjectsGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('projectSearchInput');

    if (!grid || typeof PROJECTS_DATA === 'undefined') return;

    let currentCategory = 'all';
    let searchQuery = '';
    const INITIAL_VISIBLE_COUNT = 6;
    let visibleCount = INITIAL_VISIBLE_COUNT;

    const renderProjects = (items) => {
        if (items.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: span 12; padding: 60px 24px; text-align: center; background: var(--bg-card); border: 1px dashed var(--border); border-radius: var(--radius-lg);">
                    <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 8px;">No projects found</h4>
                    <p style="font-size: 0.92rem; color: var(--text-secondary);">Try searching another keyword or choose "All".</p>
                </div>
            `;
            return;
        }

        const visibleItems = items.slice(0, visibleCount);
        const hasMore = items.length > visibleCount;

        const cardsHtml = visibleItems.map((p, idx) => {
            const spanClass = 'span-6';
            const indexFormatted = String(idx + 1).padStart(2, '0');

            return `
                <article class="project-card-frame ${spanClass}" data-id="${p.id}" data-category="${p.category}">
                    <div class="project-browser-chrome">
                        <div class="browser-dots">
                            <span class="b-dot r"></span>
                            <span class="b-dot y"></span>
                            <span class="b-dot g"></span>
                        </div>
                        <div class="browser-url-pill">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                            <span>https://${p.domain}</span>
                        </div>
                        <span class="browser-status-live">ONLINE</span>
                    </div>

                    <div class="project-card-visual">
                        <div class="project-visual-meta">
                            <span class="project-platform-badge">${p.platform}</span>
                            <span class="project-index-num">${indexFormatted} / ${items.length}</span>
                        </div>
                        <h3 class="project-card-name">${p.name}</h3>
                        <div class="project-subdomain-tag">Production Architecture &bull; ${p.category.toUpperCase()}</div>
                    </div>

                    <div class="project-card-body">
                        <p class="project-card-desc">${p.desc}</p>

                        <div class="project-tags-cloud">
                            ${p.tags.map(t => `<span class="project-tag-item">${t}</span>`).join('')}
                        </div>

                        <div class="project-card-actions">
                            <button type="button" class="btn-case-study" data-open-study="${p.id}">
                                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                <span>Case Study & Specs</span>
                            </button>
                            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn-live-link" aria-label="Visit ${p.name} Live">
                                <span>Visit Live</span>
                                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                            </a>
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        let loadMoreHtml = '';
        if (hasMore) {
            const remaining = items.length - visibleCount;
            loadMoreHtml = `
                <div class="load-more-wrap" id="loadMoreWrap">
                    <button type="button" class="btn-solid-accent" id="loadMoreProjectsBtn" style="padding: 13px 32px; font-size: 0.92rem;">
                        <span>Load More Projects (${remaining} remaining)</span>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <span style="font-family: var(--font-mono); font-size: 0.74rem; color: var(--text-muted);">Showing ${visibleItems.length} of ${items.length} verified commercial projects</span>
                </div>
            `;
        } else if (items.length > INITIAL_VISIBLE_COUNT) {
            loadMoreHtml = `
                <div style="grid-column: span 12; text-align: center; margin-top: 28px; font-family: var(--font-mono); font-size: 0.76rem; color: var(--emerald); display: flex; align-items: center; justify-content: center; gap: 8px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--emerald); box-shadow: 0 0 8px var(--emerald);"></span>
                    <span>All ${items.length} verified commercial projects loaded</span>
                </div>
            `;
        }

        grid.innerHTML = cardsHtml + loadMoreHtml;

        const loadMoreBtn = document.getElementById('loadMoreProjectsBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                visibleCount += 6;
                renderProjects(items);
            });
        }
    };

    const filterAndRender = () => {
        visibleCount = INITIAL_VISIBLE_COUNT;
        const query = searchQuery.trim().toLowerCase();
        const filtered = PROJECTS_DATA.filter(p => {
            const matchesCategory = (currentCategory === 'all') || (p.category === currentCategory);
            const matchesQuery = !query ||
                p.name.toLowerCase().includes(query) ||
                p.desc.toLowerCase().includes(query) ||
                p.platform.toLowerCase().includes(query) ||
                p.tags.some(t => t.toLowerCase().includes(query));
            return matchesCategory && matchesQuery;
        });
        renderProjects(filtered);
    };

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            currentCategory = btn.dataset.filter || 'all';
            filterAndRender();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterAndRender();
        });
    }

    renderProjects(PROJECTS_DATA);
}

/* ──────────────────────────────────────────────────────────
   5. CASE STUDY MODAL DIALOG
   ────────────────────────────────────────────────────────── */
function initCaseStudyModal() {
    const modalBackdrop = document.getElementById('caseStudyModal');
    if (!modalBackdrop) return;

    const closeBtn = document.getElementById('closeModalBtn');
    const modalPlatform = document.getElementById('modalPlatform');
    const modalTitle = document.getElementById('modalTitle');
    const modalOverview = document.getElementById('modalOverview');
    const modalStack = document.getElementById('modalStack');
    const modalContributions = document.getElementById('modalContributions');
    const modalCustom = document.getElementById('modalCustom');
    const modalLiveLink = document.getElementById('modalLiveLink');

    const openModal = (projectId) => {
        const project = PROJECTS_DATA.find(p => p.id === projectId);
        if (!project) return;

        if (modalPlatform) modalPlatform.textContent = project.platform;
        if (modalTitle) modalTitle.textContent = project.name;
        if (modalOverview) modalOverview.textContent = project.caseStudy.overview;
        if (modalStack) modalStack.textContent = project.caseStudy.platform;

        if (modalContributions) {
            modalContributions.innerHTML = project.caseStudy.contributions.map(c => `
                <li style="display:flex; align-items:flex-start; gap:10px; margin-bottom:8px; font-size:0.92rem; color:var(--text-secondary);">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" style="color:var(--accent); flex-shrink:0; margin-top:3px;"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    <span>${c}</span>
                </li>
            `).join('');
        }

        if (modalCustom) modalCustom.textContent = project.caseStudy.customFunctionality;

        if (modalLiveLink) {
            modalLiveLink.href = project.url;
            modalLiveLink.innerHTML = `<span>Visit ${project.domain}</span> <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`;
        }

        modalBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modalBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    };

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-open-study]');
        if (trigger) {
            e.preventDefault();
            openModal(trigger.dataset.openStudy);
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
            closeModal();
        }
    });
}

/* ──────────────────────────────────────────────────────────
   6. SCROLL PROGRESS BAR & STICKY NAV
   ────────────────────────────────────────────────────────── */
function initScrollProgress() {
    const bar = document.getElementById('scrollProgressBar');
    const navWrapper = document.querySelector('.nav-wrapper');

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        if (bar) bar.style.width = scrolled + '%';

        if (navWrapper) {
            if (winScroll > 30) {
                navWrapper.classList.add('scrolled');
            } else {
                navWrapper.classList.remove('scrolled');
            }
        }
    }, { passive: true });
}

/* ──────────────────────────────────────────────────────────
   7. ACTIVE NAV LINK OBSERVER
   ────────────────────────────────────────────────────────── */
function initActiveNavSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${currentId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(sec => observer.observe(sec));
}

/* ──────────────────────────────────────────────────────────
   8. CLIPBOARD COPY
   ────────────────────────────────────────────────────────── */
function initClipboardCopy() {
    document.addEventListener('click', (e) => {
        const copyBtn = e.target.closest('[data-copy]');
        if (!copyBtn) return;

        e.preventDefault();
        const textToCopy = copyBtn.getAttribute('data-copy');
        if (!textToCopy) return;

        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            copyBtn.style.borderColor = 'var(--emerald)';
            copyBtn.style.color = 'var(--emerald)';

            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.borderColor = '';
                copyBtn.style.color = '';
            }, 2000);
        }).catch(err => {
            console.error('Copy failed:', err);
        });
    });
}

/* ──────────────────────────────────────────────────────────
   9. INQUIRY FORM
   ────────────────────────────────────────────────────────── */
function initInquiryForm() {
    const form = document.getElementById('portfolioInquiryForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = (document.getElementById('senderName') || {}).value || '';
        const email = (document.getElementById('senderEmail') || {}).value || '';
        const topic = (document.getElementById('inquiryTopicSelect') || {}).value || 'Portfolio Inquiry';
        const message = (document.getElementById('senderMessage') || {}).value || '';

        const subject = encodeURIComponent(`[Portfolio Inquiry] ${topic} — from ${name}`);
        const body = encodeURIComponent(
            `Hello Isha,\n\n${message}\n\nKind regards,\n${name}\nEmail: ${email}`
        );

        window.location.href = `mailto:ishasharma91981@gmail.com?subject=${subject}&body=${body}`;
    });
}

/* ──────────────────────────────────────────────────────────
   10. MOBILE NAV
   ────────────────────────────────────────────────────────── */
function initMobileNav() {
    const hamburger = document.getElementById('hamburgerMenuBtn');
    const drawer = document.getElementById('mobileNavDrawer');
    if (!hamburger || !drawer) return;

    hamburger.addEventListener('click', () => {
        const isOpen = drawer.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            drawer.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

function updateYear() {
    const el = document.getElementById('currentYear');
    if (el) el.textContent = new Date().getFullYear();
}
