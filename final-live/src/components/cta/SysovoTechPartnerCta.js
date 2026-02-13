"use client"
import React, { useEffect } from 'react'
import AOS from "aos"
import { ReactSVG } from 'react-svg'
import "aos/dist/aos.css"

function SysovoTechPartnerCta() {
    useEffect(() => {
        AOS.init({
            disableMutationObserver: true,
            once: true,
        })
    }, [])

    return (
        <div>
            {/* tech partner cta area start */}
            <div className="rts-call-to-action-area-bg-dark rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="call-to-action-bg-dark-area">
                                <h3 className="title">Choose the right tech partner for digital success.</h3>
                                <p>Sysovo has the dynamic duo you need to transform your business against the noise: world-class development team and strong technical expertise.</p>
                                <p>Want an insider look into how we build bold game-changing products?</p>
                                <a href="/contact" className="rts-btn btn-primary wow fadeInUp">
                                    Get In Touch
                                    <ReactSVG
                                        src="assets/images/service/icons/13.svg"
                                        alt="arrow"
                                    />
                                </a>
                                <div className="bg-shape">
                                    <img
                                        src="assets/images/cta/07.png"
                                        alt="bg-shape"
                                        className="one"
                                    />
                                    <img
                                        src="assets/images/cta/08.png"
                                        alt="bg-shape"
                                        className="two"
                                    />
                                    <img
                                        src="assets/images/cta/09.png"
                                        alt="bg-shape"
                                        className="three"
                                    />
                                    <img
                                        src="assets/images/cta/10.png"
                                        alt="bg-shape"
                                        className="four"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tech partner cta area end */}
        </div>
    )
}

export default SysovoTechPartnerCta
