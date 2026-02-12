"use client"
import React from 'react'

const services = [
    {
        icon: "01.svg",
        image: "01.webp",
        title: "Website Development",
        desc: "We design and develop high-performing websites that represent brands, convert traffic, and support long-term growth. While our websites are visually beautiful and experience-rich, we mainly focus on user-friendly design, speed, and content accessibility.",
        subTitle: "Web development services we offer",
        items: [
            "Custom website design and development",
            "WordPress and Wix development",
            "Web consulting and UI/UX strategy",
            "Website performance and search engine optimization",
            "Website maintenance and upgrades"
        ]
    },
    {
        icon: "02.svg",
        image: "02.webp",
        title: "Mobile App Development",
        desc: "We build high-performance mobile applications that deliver consistent user experiences across devices and platforms. Our approach combines product strategy, clean design, and scalable engineering to support business goals such as customer engagement, monetization, and operational efficiency. We build MVPs to enterprise-grade applications, all while focusing on structure, security, speed, and scale.",
        subTitle: "Mobile app development services we offer",
        items: [
            "Mobile app consulting services",
            "Native iOS and Android development",
            "Cross-platform development on React Native and Flutter",
            "Mobile app testing and optimization",
            "Mobile app monetization strategy",
            "Mobile app maintenance and upgrades"
        ]
    },
    {
        icon: "03.svg",
        image: "03.webp",
        title: "Web Application Development",
        desc: "We build robust web applications to support complex business logic, real-time data handling, and user interactions to our clients growing their user base and revenue. We engineer web apps for security and scalability and smooth integration with third-party systems.",
        subTitle: "Web app development services we offer",
        items: [
            "Custom web application development",
            "Frontend and backend engineering",
            "API development and integrations",
            "Cloud-based web apps",
            "Application testing and optimization"
        ]
    },
    {
        icon: "04.svg",
        image: "04.webp",
        title: "Custom Software Development",
        desc: "We design and develop enterprise-grade software to support complex business operations, handle high data volumes, and long-term scalability. Our software developers strongly emphasize on performance and security so your employees and customer win. We use modern architecture, cloud-native frameworks, and API-first development, to help growing organizations modernize legacy systems, improve internal efficiency, and launch game-changing software products.",
        subTitle: "Software development services we offer",
        items: [
            "Custom software strategy and architecture",
            "Custom software development",
            "System integration, deployment and migration",
            "QA (Quality assurance) and testing",
            "Ongoing maintenance and support"
        ]
    },
    {
        icon: "05.svg",
        image: "05.webp",
        title: "SaaS Product Development",
        desc: "We help design, develop and market SaaS products for both B2B and B2C markets that work on subscription-based monetization. Our SaaS products are highly performant, end-user-friendly, intuitive and secure.",
        subTitle: "SaaS development services we offer",
        items: [
            "B2C and B2B SaaS development",
            "SaaS optimization and support",
            "B2B SaaS marketing and monetization"
        ]
    },
    {
        icon: "06.svg",
        image: "06.webp",
        title: "B2B Admin Portals and CMS Solutions",
        desc: "We develop secure, role-based admin portals and content management systems that give businesses full control over data, users, and workflows. B2B admin portals and CMS solutions give internal teams, partners, and enterprise operations scalable access controls and custom dashboards.",
        subTitle: "CMS development services we offer",
        items: [
            "B2B admin portal development",
            "Custom CMS solutions",
            "Role and permission management modules",
            "Workflow automation and dashboards"
        ]
    }
]

const bgClasses = ['sysovo-sticky-white', 'bg-gradient-5', 'bg-gradient-5-bold', 'sysovo-sticky-white', 'bg-gradient-5', 'bg-gradient-5-bold']
const featureIcons = ['31.svg', '32.svg', '33.svg', '34.svg']

function SysovoServices() {
    return (
        <div>
            {/* services heading */}
            <div className="rts-section-gap pb--0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-2">
                                <h2 className="title">Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* sticky scroll services */}
            <div className="service-sticky-wrapper-main">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`rts-service-area service-section-area ptb--80 ${bgClasses[index]}`}
                        style={{ zIndex: index + 1 }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="service-list-between">
                                        <div className="left">
                                            <span>{String(index + 1).padStart(2, '0')}</span>
                                            <h3 className="title">{service.title}</h3>
                                            <p className="disc">{service.desc}</p>
                                            <a href="/service" className="rts-btn btn-primary btn-bold">
                                                Get Started
                                            </a>
                                        </div>
                                        <div className="right-area-thumbnail jarallax jara-mask-1">
                                            <img
                                                className="jarallax-img"
                                                src={`assets/images/service/${service.image}`}
                                                alt={service.title}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-5 mt--50">
                                {service.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className={service.items.length <= 3 ? 'col-lg-4 col-md-6' : 'col-lg-3 col-md-6'}
                                    >
                                        <div className="single-service-border-top">
                                            <div className="icon">
                                                <img
                                                    src={`assets/images/service/icons/${featureIcons[i % featureIcons.length]}`}
                                                    alt="service"
                                                />
                                            </div>
                                            <p className="disc">{item}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SysovoServices
