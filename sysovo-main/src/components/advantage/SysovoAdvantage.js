"use client"
import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

const advantages = [
    {
        icon: "07.svg",
        title: "Transparency",
        desc: "We work in the open. Clear scope, clear timelines, clear communication. Leaders, developers and clients together revolutionize their sectors."
    },
    {
        icon: "08.svg",
        title: "Innovation",
        desc: "We solve real problems for bold businesses. Every solution we design serves a business objective and delivers measurable impact."
    },
    {
        icon: "09.svg",
        title: "Responsible AI",
        desc: "We build secure AI systems that scale and comply. For Sysovo, ethics, data integrity, and accountability are the non-negotiable."
    },
    {
        icon: "10.svg",
        title: "Leadership",
        desc: "We take ownership. We work at the intersection of strategy and technical execution to make results 'happen'."
    }
]

function SysovoAdvantage() {
    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        })
    }, [])

    return (
        <div>
            {/* sysovo advantage area start */}
            <div className="rts-solution-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center-title-bg-white">
                                <h2 className="title">The Sysovo Advantage</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--30">
                        {advantages.map((item, index) => (
                            <div
                                key={index}
                                className="col-lg-3 col-md-6 col-sm-12"
                                data-aos="fade-up"
                                data-aos-delay={`${index * 150 + 100}`}
                            >
                                <div className="single-service-style-two">
                                    <div className="inner">
                                        <div className="icon">
                                            <img
                                                loading="lazy"
                                                src={`assets/images/service/icons/${item.icon}`}
                                                alt="service"
                                            />
                                        </div>
                                        <div className="bottom">
                                            <a href="/about">
                                                <h3 className="title">
                                                    {item.title}
                                                    <img
                                                        className="injectable"
                                                        src="assets/images/service/icons/13.svg"
                                                        alt="arrow"
                                                    />
                                                </h3>
                                                <p className="disc">{item.desc}</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* sysovo advantage area end */}
        </div>
    )
}

export default SysovoAdvantage
