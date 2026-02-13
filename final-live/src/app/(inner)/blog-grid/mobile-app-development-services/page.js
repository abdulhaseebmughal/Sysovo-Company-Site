"use client"
import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import HeaderTwo from "@/components/header/HeaderTwo"
import FooterOne from "@/components/footer/FooterOne"
import BackToTop from "@/components/common/BackToTop"
import "@/app/sysovo.css"

const services = [
    {
        tab: "App Consultancy",
        title: "Mobile App Consultancy",
        image: "/assets/images/industry/01.webp",
        paragraphs: [
            "So many aspiring technopreneurs come to Sysovo with their epic plan. But mobile app plans need more than idea. These plans need a solid UI/UX foundation and a strong monetization strategy. So we provide mobile app consultancy to help businesses make informed product and technology decisions before development begins.",
            "We evaluate business goals, target users, technical feasibility, and market fit to define a clear mobile strategy. Our consultants help clients choose the right platforms, architectures, and feature sets while avoiding unnecessary complexity. If you or your investors are planning a new product, scaling an existing app, or modernizing operations, Sysovo\u2019s mobile app consultants will help you put the right foot forward with a structure that aligns your short and long-term goals."
        ]
    },
    {
        tab: "UI/UX Design",
        title: "Mobile App UI/UX Design",
        image: "/assets/images/industry/02.webp",
        paragraphs: [
            "We design mobile app interfaces and habit loops to balance usability, performance, security as well as brand reputation. Our UI/UX process focuses on user flows, accessibility, and intuitive interactions that reduce friction and improve engagement. We understand your business requirements and translate those goals into clear design systems, wireframes, and visual interfaces for real users. Each of our design decision supports user retention and conversion. With Sysovo, your end users get a mobile experience that is purposeful, engaging and natural."
        ]
    },
    {
        tab: "Android",
        title: "Android App Development",
        image: "/assets/images/industry/03.webp",
        paragraphs: [
            "Sysovo uses Android SDK to build Android applications for performance, scalability, and long-term maintainability. We use modern Android frameworks and development practices to deliver apps that work reliably across Android devices and screen sizes that according to research are currently used by more than 50% of end users. Sysovo\u2019s mobile app developers focus on clean architecture, efficient resource usage, and secure data handling. We have built and deployed beautiful consumer-facing apps as well as enterprise communication tools via Android, and one factor is common: all of our apps support our clients\u2019 engagement vision and business operations while meeting platform standards and user expectations."
        ]
    },
    {
        tab: "iOS",
        title: "iOS App Development",
        image: "/assets/images/industry/04.webp",
        paragraphs: [
            "We develop iOS applications that align with Apple\u2019s ecosystem, performance standards, and design guidelines. Our iOS apps prioritize stability, security, and a strong user experiences across iPhone and iPad devices. Our mobile app developers understand that Apple users value security and privacy along with high-end experience. And so, we use modern development practices, for building apps that integrate smoothly with backend systems and scale as usage grows. From business applications to consumer products, our iOS development supports reliability and long-term product success."
        ]
    },
    {
        tab: "Cross-Platform",
        title: "Cross-Platform App Development",
        image: "/assets/images/industry/05.webp",
        paragraphs: [
            "Sysovo delivers cross-platform mobile applications that maintain consistent functionality across iOS and Android. The cross platform mobile app development services at Sysovo means our clients get the best development output and native-like mobile app in half the time and cost. Our cross platform app get our clients 3 apps for the price of one because our development time cuts down to half while preserving performance and user experience.",
            "Yet we carefully evaluate when cross-platform development makes sense for businesses and design architectures that support future scaling. These solutions help businesses launch faster, control costs, and manage a single codebase without compromising quality or reliability."
        ]
    },
    {
        tab: "React Native",
        title: "React Native Development",
        image: "/assets/images/industry/06.webp",
        paragraphs: [
            "We build React Native applications that offer near-native performance with shared code across platforms. Our React Native solutions support rapid development cycles while maintaining flexibility for future enhancements. We focus on scalable architectures, clean integrations, and performance optimization. Sysovo\u2019s mobile app developers recommend React Native development to businesses looking to launch quickly while maintaining long-term product stability and control."
        ]
    },
    {
        tab: "Flutter",
        title: "Flutter App Development",
        image: "/assets/images/industry/07.webp",
        paragraphs: [
            "Sysovo develops Flutter applications for high performance and visually consistent experiences across platforms. Using Flutter\u2019s unified codebase, we build fast, responsive apps with strong UI capabilities. Our Flutter development supports rapid iteration, scalability across platforms in future, and easy maintenance. Also, Flutter is from Google so it will always remain modern and open to improve. Flutter app development services are best for startups to enterprises that are seeking efficient cross-platform delivery without sacrificing quality."
        ]
    },
    {
        tab: "App Testing",
        title: "Mobile App Testing",
        image: "/assets/images/industry/08.webp",
        paragraphs: [
            "We provide comprehensive mobile app testing to ensure performance, stability, and security across devices and operating systems. Our testing process covers functionality, usability, compatibility, and performance under real-world conditions. By identifying issues early, we help businesses reduce risks, prevent costly failures, and deliver reliable applications that meet user expectations at launch and beyond."
        ]
    },
    {
        tab: "MVP",
        title: "MVP Development",
        image: "/assets/images/industry/09.webp",
        paragraphs: [
            "We recommend MVP development services to help businesses like yours validate ideas fast without overbuilding. We design and build MVP apps that focus on core user problems, essential features, and measurable outcomes. Launch fast, test faster and then hit the market big with speed and technical edge. Because most MVPs are carefully planned before development and launch, we use scalable architectures so we can transform them into full products. We prioritize usability, performance, and future readiness, so founders can proceed with confidence, test assumptions, attract users, and apply for funding."
        ]
    },
    {
        tab: "App Marketing",
        title: "Mobile App Marketing",
        image: "/assets/images/industry/10.webp",
        paragraphs: [
            "Sysovo currently offers five mobile app marketing services: App store optimization, SEO via web landing pages, Paid ads, mobile app social media marketing and Generative Engine Optimization where we help your app appear in ChatGPT and LLM searches. We provide mobile app marketing services with strategies emphasizing visibility, adoption, and retention.",
            "Sysovo helps businesses position their apps effectively through store optimization content, performance tracking, and data-driven insights. On a platform level, we cover YouTube, TikTok, Meta, Google, ChatGPT, Reddit, and medium. Our approach connects marketing efforts with product goals, and ensures that app growth aligns with business objectives."
        ]
    }
]

const industries = [
    {
        tab: "Healthcare",
        title: "Healthcare",
        image: "/assets/images/service/09.webp",
        desc: "Sysovo builds GDPR and HIPAA compliant healthcare mobile apps that improve patient access, operational efficiency, and data accuracy. We design systems that support clinical workflows while prioritizing security, compliance, and usability.",
        items: ["Telemedicine and virtual consultation apps", "Pharmacy ordering and prescription management apps", "Electronic health record (EHR) apps", "Medical insurance verification apps", "Patient engagement and appointment scheduling apps", "Remote monitoring and care coordination apps"]
    },
    {
        tab: "PropTech",
        title: "PropTech and Real Estate",
        image: "/assets/images/service/10.webp",
        desc: "We develop real estate apps that simplify property discovery, management, and transactions. Our solutions help end users search, evaluate, and interact with properties, while businesses automate listings, lead management, and operations.",
        items: ["Property management apps", "Realtor lead generation and CRM apps", "Property listing and discovery platforms", "Virtual tour and site visit apps", "Rental and lease management systems", "Investment analytics and reporting apps"]
    },
    {
        tab: "Education",
        title: "Education",
        image: "/assets/images/service/11.webp",
        desc: "Sysovo builds education apps that support digital learning, collaboration, and progress tracking. Our solutions help students access content and interact with instructors, while institutions manage courses, assessments, and data securely.",
        items: ["Learning management system (LMS) apps", "Virtual classroom and video learning apps", "Student portals and dashboards", "Online assessment and testing apps", "Course management and content delivery apps", "Teacher-student communication platforms"]
    },
    {
        tab: "FinTech",
        title: "FinTech and Crypto",
        image: "/assets/images/service/12.webp",
        desc: "We develop fintech and crypto apps that enable secure transactions, real-time insights, and user trust. Our solutions help end users manage investments and digital assets, while businesses maintain compliance, security, and scalability.",
        items: ["Investment and portfolio management apps", "Crypto trading and wallet apps", "Digital payment and transaction apps", "KYC and identity verification apps", "Financial analytics and reporting platforms", "Asset tracking and monitoring apps"]
    },
    {
        tab: "Fashion",
        title: "Fashion and Beauty",
        image: "/assets/images/service/13.webp",
        desc: "Sysovo builds fashion and beauty apps that enhance product discovery, personalization, and purchase decisions. Our solutions help end users explore collections, try products digitally, and shop with confidence.",
        items: ["Fashion ecommerce and mobile storefront apps", "Virtual try-on and AR beauty apps", "Product catalog and lookbook apps", "Inventory and collection management apps", "Customer loyalty and rewards apps", "Order tracking and returns management apps"]
    },
    {
        tab: "Gaming",
        title: "Gaming",
        image: "/assets/images/service/14.webp",
        desc: "We develop gaming apps that prioritize performance, engagement, and scalability. Our solutions support real-time interactions, smooth gameplay, and monetization strategies while maintaining backend stability.",
        items: ["Mobile game applications", "Multiplayer and real-time gaming platforms", "In-app purchase and monetization systems", "Player analytics and performance tracking apps", "Leaderboard and achievement systems", "Community and social gaming apps"]
    },
    {
        tab: "Entertainment",
        title: "Entertainment",
        image: "/assets/images/service/15.webp",
        desc: "Sysovo builds entertainment apps that deliver content efficiently and engage users at scale. Our solutions help end users stream, discover, and interact with digital media, while businesses manage content distribution, subscriptions, and audience insights.",
        items: ["Video and music streaming apps", "Content discovery and recommendation apps", "Subscription and membership platforms", "Event and ticket booking apps", "Creator and content management systems", "Media analytics and reporting apps"]
    },
    {
        tab: "Ecommerce",
        title: "Ecommerce and Retail",
        image: "/assets/images/service/16.webp",
        desc: "We build ecommerce and retail apps that connect customers, inventory, and fulfillment in one system. Our solutions help end users shop easily, track orders, and receive personalized experiences.",
        items: ["Ecommerce marketplaces", "Order and inventory management apps", "Loyalty and rewards programs", "Mobile POS and checkout apps", "Returns and customer support apps"]
    }
]

const processSteps = [
    {
        number: "01",
        title: "Discovery and Product Strategy",
        desc: "We align business goals, user needs, and technical constraints. This phase defines the product roadmap, backlog priorities, sprint scope, and success metrics before execution begins.",
        image: "/assets/images/service/01.webp"
    },
    {
        number: "02",
        title: "UI/UX Design",
        desc: "Design runs in parallel with strategy and development. We create user flows, wireframes, and design systems that evolve through feedback and validation in short, focused cycles.",
        image: "/assets/images/service/02.webp"
    },
    {
        number: "03",
        title: "Iterative Development (Frontend, Backend, APIs)",
        desc: "We build in sprints, delivering functional increments each cycle. Frontend, backend, and APIs evolve together, enabling continuous integration and early validation of features.",
        image: "/assets/images/service/03.webp"
    },
    {
        number: "04",
        title: "Continuous Testing and Quality Assurance",
        desc: "Testing is embedded in every sprint. We validate functionality, performance, and security continuously to prevent defects and maintain release readiness.",
        image: "/assets/images/service/04.webp"
    },
    {
        number: "05",
        title: "Release and Deployment",
        desc: "We deploy in controlled releases with monitoring and rollback readiness. Each release focuses on stability, compliance, and measurable improvements.",
        image: "/assets/images/service/05.webp"
    },
    {
        number: "06",
        title: "Ongoing Optimization and Support",
        desc: "Post-launch, we refine features, address feedback, and scale the product. Continuous improvement keeps the app aligned with business goals and user expectations.",
        image: "/assets/images/service/06.webp"
    }
]

export default function MobileAppDevelopmentServices() {
    const [activeService, setActiveService] = useState(0)
    const [activeIndustry, setActiveIndustry] = useState(0)

    const currentService = services[activeService]
    const currentIndustry = industries[activeIndustry]

    return (
        <div>
            <HeaderTwo />

            {/* ===== SECTION 1: Hero Banner ===== */}
            <div className="career-single-banner-area ptb--70 blog-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="career-page-single-banner blog-page">
                                <h1 className="title">Top-Tier Mobile App Development Company</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SECTION 2: Intro ===== */}
            <div className="service-area-details-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <div className="mid-content">
                                    <p className="disc">
                                        Sysovo is a mobile app development company that designs, builds and scales Android and iOS applications for startups, B2C, B2B and D2C businesses. Launch your revenue-ready application with a solid monetization plan, world-class technology, and enterprise-grade developers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SECTION 3: Services — Tab Layout ===== */}
            <div className="rts-solution-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center-title-bg-white">
                                <h2 className="title" style={{ fontSize: 40 }}>Mobile App Development Services at Sysovo</h2>
                            </div>
                        </div>
                    </div>
                    {/* Tab buttons */}
                    <div className="row mt--30">
                        <div className="col-lg-12">
                            <div className="sysovo-tech-tabs" style={{ flexWrap: 'wrap' }}>
                                {services.map((s, i) => (
                                    <button
                                        key={i}
                                        className={`sysovo-tech-tab-btn${activeService === i ? ' active' : ''}`}
                                        onClick={() => setActiveService(i)}
                                    >
                                        {s.tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Tab content */}
                    <div className="row mt--40 align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="sysovo-tech-tab-content">
                                <h3 className="title">{currentService.title}</h3>
                                {currentService.paragraphs.map((p, i) => (
                                    <p key={i} className="disc">{p}</p>
                                ))}
                                <a href="/contact" className="rts-btn btn-primary">
                                    Learn More
                                    <img src="/assets/images/service/icons/13.svg" alt="arrow" className="injectable" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="sysovo-tech-tab-image">
                                <img src={currentService.image} alt={currentService.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SECTION 4: Agile Process (6 Steps) ===== */}
            <div className="rts-section-gap" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb--60">
                            <h2 className="title" style={{ fontSize: 40 }}>Agile Mobile App Development Process at Sysovo</h2>
                        </div>
                    </div>

                    {processSteps.map((step, index) => {
                        const isEven = index % 2 === 1
                        return (
                            <div key={index} className="row align-items-center justify-content-between mb--80 wow fadeInUp" data-wow-delay=".2s">
                                <div className={`col-lg-5 mb_md--30 mb_sm--30${isEven ? ' order-lg-2' : ''}`}>
                                    <div className="sysovo-process-thumbnail">
                                        <img src={step.image} alt={step.title} />
                                    </div>
                                </div>
                                <div className={`col-lg-5${isEven ? ' order-lg-1' : ''}`}>
                                    <span className="sysovo-step-number">{step.number}</span>
                                    <h3 className="title mb--15">{step.title}</h3>
                                    <p className="disc">{step.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* ===== SECTION 5: CTA — Book a Call ===== */}
            <div className="rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sysovo-cta-banner">
                                <h2 className="title">Get an insider look to our app development process</h2>
                                <p className="disc">Want more clarity on how we plan, build, test, and scale mobile applications using agile delivery? See how our process reduces risk and delivers predictable outcomes.</p>
                                <a href="/contact" className="rts-btn btn-primary">
                                    Book a Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SECTION 6: Team — Left Content + Right Image ===== */}
            <div className="rts-section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6 mb_md--30 mb_sm--30">
                            <h2 className="title mb--20" style={{ fontSize: 40 }}>Mobile App Developers at Sysovo</h2>
                            <p className="disc">Sysovo&apos;s app development teams combine deep technical expertise with strong engineering leadership. Each of our team includes experienced:</p>
                            <div className="sysovo-check-area mt--20">
                                <div className="single-check"><i className="far fa-check-circle" /><span>Monetization and UI/UX consultants</span></div>
                                <div className="single-check"><i className="far fa-check-circle" /><span>Software architects and developers</span></div>
                                <div className="single-check"><i className="far fa-check-circle" /><span>Mobile app designers</span></div>
                                <div className="single-check"><i className="far fa-check-circle" /><span>QA specialists</span></div>
                            </div>
                            <p className="disc mt--20">This team co-headed by development lead and project manager work as a single unit. We align business goals with technical decisions the hour you share your development vision. Then we tag in timelines, output, goals and scalability areas.</p>
                            <p className="disc">The best part about Sysovo as an app development company? Our teams understand product ownership, system dependencies, and long-term maintenance. This balance of hands-on engineering and leadership get us consistent delivery, predictable outcomes, and software as an edge.</p>
                            <div className="sysovo-check-area mt--20">
                                <div className="single-check"><i className="far fa-check-circle" /><span>Transparency and disciplined project management guide how our teams operate.</span></div>
                                <div className="single-check"><i className="far fa-check-circle" /><span>Clients get clear communication, sprint-level visibility, and regular progress updates throughout the development lifecycle.</span></div>
                            </div>
                            <p className="disc mt--20">We follow structured agile workflows with defined milestones, backlog management, and accountability at every stage. Our signature agile approach and client communication build trust, connect stakeholders and empower Sysovo&apos;s app developers to deliver with speed, clarity, and confidence.</p>
                        </div>
                        <div className="col-lg-5">
                            <div className="sysovo-process-thumbnail">
                                <img src="/assets/images/service/07.webp" alt="Sysovo team" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SECTION 7: Engagement Models ===== */}
            <div className="rts-section-gap" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5 order-lg-2 mb_md--30 mb_sm--30">
                            <div className="sysovo-process-thumbnail">
                                <img src="/assets/images/service/08.webp" alt="Flexible engagement" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h2 className="title mb--20" style={{ fontSize: 40 }}>Flexible Engagement Models Built for Your Business</h2>
                            <p className="disc">Our app development teams work in different engagement methods. You can outsource the project, hire fractional resource, augment staff for your in-house support or go for nearshore development to match your scale, timelines, and internal capabilities.</p>
                            <p className="disc">Let&apos;s discuss the best options for your project: dedicated teams or fixed-scope delivery.</p>
                            <a href="/contact" className="rts-btn btn-primary mt--20 wow fadeInUp">
                                Book a Call
                                <img className="injectable" src="/assets/images/service/icons/13.svg" alt="arrow" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SECTION 8: Industries — Tab Layout ===== */}
            <div className="rts-solution-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center-title-bg-white">
                                <h2 className="title" style={{ fontSize: 40 }}>We Build Apps for Different Industries and Sectors</h2>
                            </div>
                        </div>
                    </div>
                    {/* Tab buttons */}
                    <div className="row mt--30">
                        <div className="col-lg-12">
                            <div className="sysovo-tech-tabs" style={{ flexWrap: 'wrap' }}>
                                {industries.map((ind, i) => (
                                    <button
                                        key={i}
                                        className={`sysovo-tech-tab-btn${activeIndustry === i ? ' active' : ''}`}
                                        onClick={() => setActiveIndustry(i)}
                                    >
                                        {ind.tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Tab content */}
                    <div className="row mt--40 align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="sysovo-tech-tab-content">
                                <h3 className="title">{currentIndustry.title}</h3>
                                <p className="disc">{currentIndustry.desc}</p>
                                <div className="sysovo-tab-check-area mt--10 mb--30">
                                    {currentIndustry.items.map((item, i) => (
                                        <div key={i} className="single-check">
                                            <i className="far fa-check-circle" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <a href="/contact" className="rts-btn btn-primary">
                                    Start a Project
                                    <img src="/assets/images/service/icons/13.svg" alt="arrow" className="injectable" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="sysovo-tech-tab-image">
                                <img src={currentIndustry.image} alt={currentIndustry.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SECTION 9: Enterprise Technologies ===== */}
            <div className="rts-section-gap" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center mb--50">
                            <h2 className="title" style={{ fontSize: 40 }}>Enterprise Technology Accessible to All Businesses</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="sysovo-enterprise-card">
                                <div className="icon">
                                    <img src="/assets/images/service/icons/31.svg" alt="AI" />
                                </div>
                                <h5>Artificial Intelligence (AI)</h5>
                                <p className="disc">Sysovo uses AI to automate decisions, personalize experiences, and intelligent data processing within mobile app architecture. We develop AI-powered features such as recommendation engines, predictive analytics, intelligent chat interfaces, and behavior-based personalization.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="sysovo-enterprise-card">
                                <div className="icon">
                                    <img src="/assets/images/service/icons/32.svg" alt="Blockchain" />
                                </div>
                                <h5>Blockchain</h5>
                                <p className="disc">We leverage blockchain to build mobile applications that require trust, transparency, and secure transactions. Sysovo develops blockchain-enabled apps for digital identity, asset tracking, smart contracts, and tamper-proof records.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="sysovo-enterprise-card">
                                <div className="icon">
                                    <img src="/assets/images/service/icons/33.svg" alt="AR and VR" />
                                </div>
                                <h5>AR and VR</h5>
                                <p className="disc">Sysovo builds AR and VR-powered mobile apps that create immersive, interactive experiences for users. We develop solutions such as virtual try-on apps, 3D product previews, interactive training simulations, and virtual tours.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="sysovo-enterprise-card">
                                <div className="icon">
                                    <img src="/assets/images/service/icons/34.svg" alt="IoT" />
                                </div>
                                <h5>Internet of Things (IoT)</h5>
                                <p className="disc">We build mobile applications that connect seamlessly with IoT devices to provide real-time monitoring and control. Sysovo develops IoT-enabled apps for device management, sensor data visualization, alerts, and remote operations.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="sysovo-enterprise-card">
                                <div className="icon">
                                    <img src="/assets/images/service/icons/31.svg" alt="Cloud" />
                                </div>
                                <h5>Cloud and Microservices</h5>
                                <p className="disc">Sysovo uses cloud and microservices architectures to build mobile apps that scale with demand. We design backend systems that support high availability, fast performance, and independent service updates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SECTION 10: CTA — Revenue-Ready ===== */}
            <div className="rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sysovo-cta-banner">
                                <h2 className="title">Revenue-Ready Mobile Apps</h2>
                                <p className="disc">Build and launch mobile apps that drive measurable business impact and tech-led success.</p>
                                <a href="/contact" className="rts-btn btn-primary">
                                    Start a Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SECTION 11: FAQ — Only Accordion on Page ===== */}
            <div className="professional-faq-area rts-section-gap position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center-title-bg-white">
                                <h2 className="title" style={{ fontSize: 40 }}>Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--80">
                        <div className="col-lg-12">
                            <div className="accordion-container-one">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How much does it cost to develop a mobile app?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Mobile app development costs between $13,800 &mdash; $84,900+ based on your app&apos;s features, developers&apos; engagement model, development times and technologies used. Basic apps can be made under $19,000 while mid-level and multi-feature apps take around $65,000. Enterprise apps and super apps take around $80,000+, especially games.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Can Sysovo work with existing products or half-done apps?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Yes. We audit architecture, code quality, and UX, then step in to optimize, scale, or complete development. Our processes follow need assessments that often recommend performance fixes, feature expansion, or full product re-engineering.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How do you handle security, compliance, and data privacy across industries?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>We follow secure coding standards, role-based access control, encrypted data handling, and industry-specific compliance needs such as HIPAA or financial data regulations where required.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>How does Sysovo approach mobile app development from a business perspective?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>We start with business goals, revenue models, and user impact&mdash;not features. Our teams align product strategy, UX, and engineering so every release supports growth, adoption, and long-term scalability.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>How do you ensure apps remain scalable as user demand grows?</Accordion.Header>
                                        <Accordion.Body>
                                            <p>We design modular architectures, cloud-native backends, and API-driven systems from day one. Your app will handle increased traffic, new features, and market expansion without rework.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--80">
                        <div className="col-lg-12 text-center">
                            <p>
                                Still have a question?{" "}
                                <a href="/contact" style={{ color: "var(--color-primary)" }}>
                                    Feel free to ask
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <FooterOne />
            <BackToTop />
        </div>
    )
}
