"use client"
import React, { useState, useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

const technologies = [
    {
        icon: "08.svg",
        title: "Artificial Intelligence",
        image: "assets/images/industry/01.webp",
        desc: "We utilize artificial intelligence to build automation systems, recommendation engines, predictive analytics platforms, chatbots, and intelligent data processing tools. These solutions will help you cut down cost and time because of low manual work, and better decision-making."
    },
    {
        icon: "09.svg",
        title: "Blockchain",
        image: "assets/images/industry/02.webp",
        desc: "We develop smart contracts, secure transaction platforms, asset tracking systems, decentralized applications, and blockchain-based authentication solutions. These systems support transparency, security, and trust across financial, supply chain, and enterprise use cases."
    },
    {
        icon: "10.svg",
        title: "AR and VR",
        image: "assets/images/industry/03.webp",
        desc: "We create virtual try-on applications, immersive training simulations, 3D product showcases, virtual tours, and interactive brands for experience-first businesses. Our AR and VR solutions help businesses engage users and visualize products and environments digitally."
    },
    {
        icon: "11.svg",
        title: "Big Data",
        image: "assets/images/industry/04.webp",
        desc: "We build data pipelines, real-time analytics platforms, reporting dashboards, and data warehouses. Our big data solutions help businesses process large datasets, track performance metrics, and support data-driven strategy at scale."
    },
    {
        icon: "12.svg",
        title: "Microservices",
        image: "assets/images/industry/05.webp",
        desc: "We design and implement microservices architectures, API-driven systems, scalable backend platforms, and cloud-native applications. These solutions improve system flexibility, deployment speed, and long-term scalability for growing and enterprise-grade products."
    }
]

function TechForImpact() {
    const [activeTab, setActiveTab] = useState(0)

    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        })
    }, [])

    const active = technologies[activeTab]

    return (
        <div>
            {/* tech for impact area start */}
            <div className="rts-solution-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center-title-bg-white">
                                <h2 className="title">Utilizing Technology for Impact</h2>
                            </div>
                        </div>
                    </div>
                    {/* tab buttons */}
                    <div className="row mt--30">
                        <div className="col-lg-12">
                            <div className="sysovo-tech-tabs">
                                {technologies.map((tech, index) => (
                                    <button
                                        key={index}
                                        className={`sysovo-tech-tab-btn${activeTab === index ? ' active' : ''}`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tech.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* tab content */}
                    <div className="row mt--40 align-items-center" data-aos="fade-up">
                        <div className="col-lg-5 col-md-12">
                            <div className="sysovo-tech-tab-content">
                                <h3 className="title">{active.title}</h3>
                                <p className="disc">{active.desc}</p>
                                <a href="/contact" className="rts-btn btn-primary">
                                    Learn More
                                    <img
                                        src="assets/images/service/icons/13.svg"
                                        alt="arrow"
                                        className="injectable"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="sysovo-tech-tab-image">
                                <img
                                    src={active.image}
                                    alt={active.title}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tech for impact area end */}
        </div>
    )
}

export default TechForImpact
