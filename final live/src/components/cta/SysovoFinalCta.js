"use client"
import React, { useEffect } from 'react'
import AOS from "aos"
import { ReactSVG } from 'react-svg'
import "aos/dist/aos.css"

function SysovoFinalCta() {
    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        })
    }, [])

    return (
        <div>
            <div className="rts-cts-area" data-aos="zoom-in" data-aos-delay="300">
                <div className="container">
                    <div className="row">
                        <div className="col-gl-12">
                            <div className="cta-one-wrapper">
                                <div className="shape-area">
                                    <img
                                        loading="lazy"
                                        src="assets/images/cta/02.png"
                                        alt="cta-area"
                                    />
                                </div>
                                <div className="left-area">
                                    <h3 className="title wow fadeInUp" data-wow-delay=".1s">
                                        We are thinking big — are you?
                                    </h3>
                                    <p className="wow fadeInUp" data-wow-delay=".3s">
                                        Share your growth goals and we&apos;ll take it from there: build revenue-ready websites, apps, software programs and everything that takes your business to the next level!
                                    </p>
                                    <a
                                        href="/contact"
                                        className="rts-btn btn-primary wow fadeInUp"
                                        data-wow-delay=".5s"
                                    >
                                        Start a Project
                                        <ReactSVG
                                            src="assets/images/service/icons/13.svg"
                                            alt="arrow"
                                        />
                                    </a>
                                </div>
                                <div className="right wow move-out" data-wow-offset={140}>
                                    <img
                                        src="assets/images/cta/01.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SysovoFinalCta
