"use client"
import React, { useEffect } from 'react'
import AOS from "aos"
import { ReactSVG } from 'react-svg'
import "aos/dist/aos.css"

const industries = [
    {
        icon: "01.svg",
        title: "Healthcare",
        desc: "We build patient portals, appointment scheduling systems, telehealth platforms, EMR integrations, and compliance-ready healthcare applications compliant to HIPAA and GDPR."
    },
    {
        icon: "02.svg",
        title: "Ecommerce and Retail",
        desc: "We develop ecommerce platforms, inventory management systems, OMS and WMS integrations, marketplace connectors, and retail analytics tools."
    },
    {
        icon: "03.svg",
        title: "Real Estate",
        desc: "We create property management systems, CRM platforms for realtors, lead generation tools, listing portals, virtual tour platforms, and investment analytics dashboards."
    },
    {
        icon: "04.svg",
        title: "Education",
        desc: "We build learning management systems, student portals, virtual classrooms, assessment platforms, and content delivery systems."
    },
    {
        icon: "05.svg",
        title: "Travel and Hospitality",
        desc: "We develop booking engines, property management systems, customer loyalty platforms, pricing optimization tools, and mobile travel apps."
    },
    {
        icon: "06.svg",
        title: "Media and Gaming",
        desc: "We create content platforms, streaming solutions, gaming dashboards, in-app monetization systems, analytics engines, and community engagement tools."
    },
    {
        icon: "07.svg",
        title: "Fashion",
        desc: "We build ecommerce platforms, inventory planning tools, virtual catalog systems, order fulfillment integrations, and personalization engines."
    },
    {
        icon: "08.svg",
        title: "Sports",
        desc: "We develop fan engagement apps, performance analytics platforms, event management systems, ticketing solutions, and athlete management tools."
    }
]

function IndustrySolutions() {
    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        })
    }, [])

    const getBorderClass = (index) => {
        const isFirstCol = index % 4 === 0
        const isSecondRow = index >= 4
        let cls = ''
        if (isFirstCol) cls += ' border-left'
        if (isSecondRow) cls += ' border-bottom-1'
        return cls
    }

    return (
        <div>
            {/* industry solutions area start */}
            <div className="solution-expertice-area rts-section-gap bg-solution">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-2">
                                <h2 className="title">Industry-Specific Solutions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 mt--70">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="col-lg-3 col-md-6 col-sm-12 col-12"
                                data-aos="fade-up"
                                data-aos-delay={`${(index % 4) * 150 + 100}`}
                            >
                                <div className={`single-solution-style-one${getBorderClass(index)}`}>
                                    <div className="right-draw">
                                        <img
                                            loading="lazy"
                                            src="assets/images/service/icons/01.png"
                                            alt="icons"
                                        />
                                    </div>
                                    <div className="icon">
                                        <img
                                            loading="lazy"
                                            src={`assets/images/service/icons/${industry.icon}`}
                                            alt="service"
                                        />
                                    </div>
                                    <h4 className="title">{industry.title}</h4>
                                    <p className="disc">{industry.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row mt--60">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                                <p className="disc mb--20" style={{ color: 'rgba(255,255,255,0.7)' }}>Belong to a different industry? Let&apos;s discuss possibilities</p>
                                <a
                                    href="/contact"
                                    className="rts-btn btn-primary wow fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    Let&apos;s Talk
                                    <ReactSVG
                                        src="assets/images/service/icons/13.svg"
                                        alt="arrow"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* industry solutions area end */}
        </div>
    )
}

export default IndustrySolutions
