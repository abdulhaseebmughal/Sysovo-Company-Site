"use client"
import React from 'react'
import Link from 'next/link';
function FooterOne() {
    return (
        <div>

            {/* rts footer area start */}
            <div className="rts-footer-area rts-section-gapTop pb--80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="logo-area">
                                <Link href="/#" className="logo">
                                    <img src="/assets/images/logo/logo-1.svg" alt="logo" />
                                </Link>
                                <p className="disc">
                                    Luminous is a leading IT solutions company that provides
                                    innovative technology services to businesses of all sizes.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row g-5">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Services</p>
                                        <ul>
                                            <li>
                                                <Link href="/ai-learning-service">AI Learning</Link>
                                            </li>
                                            <li>
                                                <Link href="/cyber-security-service">Cyber Security</Link>
                                            </li>
                                            <li>
                                                <Link href="/development-service">Development</Link>
                                            </li>
                                            <li>
                                                <Link href="/it-consulting-service">IT Consulting</Link>
                                            </li>
                                            <li>
                                                <Link href="/management-service">Management</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Company</p>
                                        <ul>
                                            <li>
                                                <Link href="/service">Services</Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-grid">Blog</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="single-nav-area-footer">
                                        <p className="parent">Legal</p>
                                        <ul>
                                            <li>
                                                <Link href="/terms-of-use">Terms</Link>
                                            </li>
                                            <li>
                                                <Link href="/privacy-policy">Privacy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts footer area end */}
            {/* rts copyright area start */}
            <div className="rts-copyright-area-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-wrapper">
                                <p>© 2024 Luminos. All rights reserved.</p>
                                <div className="social-copyright-area">
                                    <ul>
                                        <li aria-label="Visit our Facebook page">
                                            <Link href="/#">
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li aria-label="Visit our Twitter page">
                                            <Link href="/#">
                                                <i className="fa-brands fa-twitter" />
                                            </Link>
                                        </li>
                                        <li aria-label="Visit our Youtube page">
                                            <Link href="/#">
                                                <i className="fa-brands fa-youtube" />
                                            </Link>
                                        </li>
                                        <li aria-label="Visit our Linkedin page">
                                            <Link href="/#">
                                                <i className="fa-brands fa-linkedin" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts copyright area end */}

        </div>
    )
}

export default FooterOne
