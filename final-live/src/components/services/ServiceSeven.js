import React from 'react'
import Link from 'next/link'

function ServiceSeven() {
    return (
        <div>

            {/* banner bottom service area start */}
            <div className="service-main-wrapper-area-service pb--80">
                <div className="container">
                    <div className="row">
                        <div className="row g-5 mt--0">
                            <div
                                className="col-lg-3 mt--0 wow fadeInUp"
                                data-wow-offset={120}
                                data-wow-delay=".2s"
                            >
                                <Link href="/ai-learning-service">
                                    <div className="single-service-border-top">
                                        <div className="icon">
                                            <img src="assets/images/service/icons/31.svg" alt="service" />
                                        </div>
                                        <p className="disc">
                                            AI-powered solutions that streamline processes and enhance
                                            efficiency for your business.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className="col-lg-3 mt--0 wow fadeInUp"
                                data-wow-offset={120}
                                data-wow-delay=".4s"
                            >
                                <Link href="/cyber-security-service">
                                    <div className="single-service-border-top">
                                        <div className="icon">
                                            <img src="assets/images/service/icons/32.svg" alt="service" />
                                        </div>
                                        <p className="disc">
                                            Comprehensive security solutions to protect your digital
                                            assets and ensure continuity.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className="col-lg-3 mt--0 wow fadeInUp"
                                data-wow-offset={120}
                                data-wow-delay=".6s"
                            >
                                <Link href="/development-service">
                                    <div className="single-service-border-top">
                                        <div className="icon">
                                            <img src="assets/images/service/icons/33.svg" alt="service" />
                                        </div>
                                        <p className="disc">
                                            Custom software development tailored to your unique
                                            business needs and goals.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className="col-lg-3 mt--0 wow fadeInUp"
                                data-wow-offset={120}
                                data-wow-delay=".8s"
                            >
                                <Link href="/it-consulting-service">
                                    <div className="single-service-border-top">
                                        <div className="icon">
                                            <img src="assets/images/service/icons/34.svg" alt="service" />
                                        </div>
                                        <p className="disc">
                                            Expert IT consulting to optimize your technology strategy
                                            and drive transformation.
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner bottom service area end */}

        </div>
    )
}

export default ServiceSeven