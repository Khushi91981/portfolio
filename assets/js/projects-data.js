/**
 * Isha Sharma — Portfolio Projects & Case Studies
 * Verified commercial client work across WordPress, WooCommerce & Shopify
 */

const PROJECTS_DATA = [
    {
        id: 'tiles-4-homes',
        name: 'Tiles 4 Homes',
        url: 'https://tiles4homes.co.uk/',
        domain: 'tiles4homes.co.uk',
        platform: 'WordPress / WooCommerce',
        category: 'woocommerce',
        featured: true,
        desc: 'High-end UK tile retailer with custom WooCommerce product attributes, custom tile calculator filtering, secure UK payment gateways, and mobile-optimised checkout.',
        tags: ['WooCommerce', 'WordPress', 'Elementor', 'Payment Gateways', 'ACF Pro'],
        caseStudy: {
            overview: 'A major UK tile retailer needing an enterprise-grade WooCommerce catalog capable of computing tile surface area metrics, bulk quantity calculations, and sample ordering.',
            platform: 'WordPress / WooCommerce with Elementor & ACF Pro',
            contributions: [
                'Engineered custom square-meter to box quantity calculator integrated directly into the WooCommerce add-to-cart flow.',
                'Integrated secure UK payment gateways (Stripe, PayPal, Klarna) and UK postcode delivery matrix calculation.',
                'Configured advanced faceted search for materials, tile finishes, thickness, and room suitability.'
            ],
            customFunctionality: 'Dynamic area calculator script, bespoke WooCommerce checkout fields, and multi-warehouse stock logic.'
        }
    },
    {
        id: 'house-of-harakh',
        name: 'House of Harakh',
        url: 'https://houseofharakh.com/',
        domain: 'houseofharakh.com',
        platform: 'WordPress / WooCommerce',
        category: 'woocommerce',
        featured: true,
        desc: 'Luxury haute joaillerie e-commerce flagship. Features bespoke WooCommerce product showcases, delicate micro-animations, and luxury editorial brand styling.',
        tags: ['WordPress', 'WooCommerce', 'Elementor', 'Luxury Catalog', 'Custom CSS'],
        caseStudy: {
            overview: 'An international fine jewelry maison requiring an ethereal, ultra-luxury digital showroom capable of presenting million-dollar diamond collections with cinematic elegance.',
            platform: 'WordPress / WooCommerce with Bespoke CSS & Elementor',
            contributions: [
                'Developed customized jewelry showcase pages with high-definition gem inspection galleries.',
                'Created private concierge appointment booking and bespoke inquiry workflows for high-net-worth clients.',
                'Optimized high-resolution luxury imagery with progressive WebP loading to maintain sub-second load times.'
            ],
            customFunctionality: 'Custom VIP consultation scheduler, diamond certificate viewer, and bespoke storytelling timeline.'
        }
    },
    {
        id: 'ziyoori',
        name: 'Ziyoori',
        url: 'https://ziyoori.com/',
        domain: 'ziyoori.com',
        platform: 'Shopify',
        category: 'shopify',
        featured: false,
        desc: 'Contemporary fashion & lifestyle Shopify storefront with tailored responsive layouts, optimized high-resolution product galleries, and streamlined checkout experience.',
        tags: ['Shopify', 'Liquid', 'Theme Customization', 'Product Management', 'Checkout UX'],
        caseStudy: {
            overview: 'Fashion brand looking for an agile e-commerce storefront with intuitive collection filtering and rapid mobile purchasing.',
            platform: 'Shopify',
            contributions: [
                'Customized Shopify Liquid sections for dynamic lookbooks and editorial seasonal campaigns.',
                'Implemented quick-view modal and color swatch selectors on collection archive pages.',
                'Configured automated customer shipping trackers and promotional cart up-sells.'
            ],
            customFunctionality: 'Color swatch switching without page reload, custom size guide modal, and sticky add-to-cart on mobile.'
        }
    },
    {
        id: 'serviots',
        name: 'Serviots',
        url: 'https://serviots.com/',
        domain: 'serviots.com',
        platform: 'WordPress',
        category: 'wordpress',
        featured: false,
        desc: 'Industrial IoT & smart technology solutions company. Custom WordPress theme featuring technical service architectures, lead capture workflows, and speed tuning.',
        tags: ['WordPress', 'Elementor', 'Custom Theme', 'Lead Capture', 'Performance'],
        caseStudy: {
            overview: 'Tech solutions provider requiring an authoritative B2B website explaining intricate IoT hardware and cloud software architectures to enterprise decision-makers.',
            platform: 'WordPress / Custom Theme with Elementor Pro',
            contributions: [
                'Structured modular service pages detailing technical protocols, edge computing specs, and sensor ecosystems.',
                'Configured CRM lead capture forms routing prospects directly to sales engineering pipelines.',
                'Achieved 95+ PageSpeed performance through script deferral and clean DOM optimization.'
            ],
            customFunctionality: 'Custom technical specification tables, dynamic ROI calculator, and lead distribution webhook.'
        }
    },
    {
        id: 'storiies-by-pq',
        name: 'Storiies by PQ',
        url: 'https://storiiesbypq.in/',
        domain: 'storiiesbypq.in',
        platform: 'Shopify',
        category: 'shopify',
        featured: false,
        desc: 'Artisanal brand Shopify store — storytelling-led product pages, brand identity integration, and mobile-first design.',
        tags: ['Shopify', 'Liquid', 'Branding', 'Mobile First', 'Product Customization'],
        caseStudy: {
            overview: 'Artisanal product atelier emphasizing narrative-driven shopping experiences where each handmade item is presented alongside its provenance.',
            platform: 'Shopify',
            contributions: [
                'Developed customized storytelling sections detailing artisan origin stories and craftsmanship materials.',
                'Ensured seamless responsive typography and touch-first interactions across mobile and tablet.',
                'Streamlined checkout with local Indian payment options (UPI, Razorpay, NetBanking).'
            ],
            customFunctionality: 'Artisan provenance badge system, personalized gift messaging on checkout, and custom typography pairing.'
        }
    },
    {
        id: 'kid-logics',
        name: 'Kid Logics',
        url: 'https://kidlogics.in/',
        domain: 'kidlogics.in',
        platform: 'WordPress / WooCommerce',
        category: 'woocommerce',
        featured: false,
        desc: 'EdTech platform for children — course listings, enrolment flow, and parent-friendly accessible UI.',
        tags: ['WordPress', 'WooCommerce', 'Elementor', 'EdTech', 'Enrollment Flow'],
        caseStudy: {
            overview: 'Early childhood STEM and logic academy requiring a playful yet trustworthy web portal for curriculum exploration and class enrollment.',
            platform: 'WordPress / WooCommerce with Elementor',
            contributions: [
                'Built interactive course listings filterable by age bracket, batch timing, and skill track.',
                'Implemented multi-step enrollment form integrated with automated parent onboarding emails.',
                'Ensured WCAG accessibility compliance with clear font contrast and high-legibility touch targets.'
            ],
            customFunctionality: 'Automated batch capacity counter, trial class scheduler, and parent account dashboard.'
        }
    },
    {
        id: 'groow-institute',
        name: 'Groow Institute',
        url: 'https://groowinstitute.com/',
        domain: 'groowinstitute.com',
        platform: 'WordPress',
        category: 'wordpress',
        featured: false,
        desc: 'Professional training institute — course catalogue, trainer profiles, and integrated enquiry system.',
        tags: ['WordPress', 'Divi', 'ACF Pro', 'Course Directory', 'Lead Gen'],
        caseStudy: {
            overview: 'Career-focused tech academy providing structured training bootcamps with syllabus downloads and direct counseling booking.',
            platform: 'WordPress with Divi & ACF Pro',
            contributions: [
                'Designed custom syllabus download funnels capturing qualified student prospective leads.',
                'Structured mentor and trainer biography modules linked to specific course syllabus tracks.',
                'Configured technical SEO allowing the institute to rank for competitive career keywords.'
            ],
            customFunctionality: 'PDF syllabus gatekeeper with automated email dispatch and batch calendar widget.'
        }
    },
    {
        id: 'drop-table',
        name: 'Drop Table',
        url: 'https://droptable.io/',
        domain: 'droptable.io',
        platform: 'WordPress',
        category: 'wordpress',
        featured: true,
        desc: 'SaaS / tech product site — clean UI, feature highlights, developer-focused content architecture, and technical SEO.',
        tags: ['WordPress', 'Custom Theme', 'Technical SEO', 'SaaS UI', 'Speed Optimization'],
        caseStudy: {
            overview: 'Developer-centric software platform requiring an austere, high-contrast dark aesthetic with syntax-highlighted feature breakdowns.',
            platform: 'WordPress (Custom Clean Theme)',
            contributions: [
                'Engineered lightweight custom theme with zero bloat and near-instant initial render.',
                'Implemented interactive code preview tabs and API endpoint documentation layouts.',
                'Structured schema markup for SoftwareApplication rich snippets in search results.'
            ],
            customFunctionality: 'Interactive code copy blocks, live status ping indicator, and keyboard-navigable feature showcase.'
        }
    },
    {
        id: 'heartfull',
        name: 'Heartfull',
        url: 'http://allservice.in.net/heartfull',
        domain: 'allservice.in.net/heartfull',
        platform: 'WordPress',
        category: 'wordpress',
        featured: false,
        desc: 'Wellness & lifestyle brand micro-site with elegant typography, service sections, and contact integration.',
        tags: ['WordPress', 'Elementor', 'Custom CSS', 'Typography', 'Lifestyle'],
        caseStudy: {
            overview: 'Holistic lifestyle brand requiring a mindful visual presence emphasizing calm contemplation, yoga sessions, and personal development.',
            platform: 'WordPress with Elementor & Custom CSS',
            contributions: [
                'Crafted custom fluid typography styling with bespoke line heights and organic color palettes.',
                'Integrated appointment consultation forms and interactive retreat schedules.',
                'Applied lightweight CSS animations for peaceful scroll reveals.'
            ],
            customFunctionality: 'Retreat registration flow and responsive audio meditation preview embeds.'
        }
    },
    {
        id: 'build-infinite',
        name: 'Build Infinite',
        url: 'https://allservice.in.net/buildinfinite/',
        domain: 'allservice.in.net/buildinfinite',
        platform: 'WordPress',
        category: 'wordpress',
        featured: false,
        desc: 'Construction & infrastructure company — project portfolio, service pages, and quote request funnels.',
        tags: ['WordPress', 'WPBakery', 'Custom CSS', 'Project Portfolio', 'Infrastructure'],
        caseStudy: {
            overview: 'Commercial architectural construction firm requiring an extensive showcase for commercial complexes, bridge infrastructure, and industrial facilities.',
            platform: 'WordPress with WPBakery & Custom CSS',
            contributions: [
                'Structured project case study archives categorized by commercial, residential, and civic sectors.',
                'Developed quote request forms capturing architectural blueprints and project budgets.',
                'Optimized high-resolution architectural photography across mobile viewports.'
            ],
            customFunctionality: 'Interactive project progress indicator and blueprint specification viewer.'
        }
    },
    {
        id: 'astro-guni',
        name: 'Astro Guni',
        url: 'https://astroguni.com/',
        domain: 'astroguni.com',
        platform: 'WordPress / WooCommerce',
        category: 'woocommerce',
        featured: false,
        desc: 'Astrology & spiritual services platform — consultant profiles, service booking flow, and blog integration.',
        tags: ['WordPress', 'Elementor', 'WooCommerce', 'Service Booking', 'Payment Gateway'],
        caseStudy: {
            overview: 'Spiritual consulting portal providing horoscope report generation, birth-chart analysis, and private practitioner video consultations.',
            platform: 'WordPress / WooCommerce with Elementor',
            contributions: [
                'Configured WooCommerce service products with birth detail capture fields at checkout.',
                'Integrated digital calendar booking syncing consultant availability across timezones.',
                'Implemented secure multi-currency payment processing for domestic and international clients.'
            ],
            customFunctionality: 'Birth chart input validation, automated booking confirmation SMS, and personalized report dispatch.'
        }
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROJECTS_DATA };
}
