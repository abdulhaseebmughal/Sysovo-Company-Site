import React from 'react'
import Link from 'next/link'

function ServiceList() {
  return (
<>
  {/* service-we-provice-area start */}
  <div className="rts-service-provide-area rts-section-gap">
    <div className="container-s-float">
      <div className="row">
        <div className="col-lg-12">
          <Link
            href="/ai-learning-service"
            className="single-service-list wow fadeInUp"
            data-wow-offset={120}
            data-wow-delay=".2s"
          >
            <div className="icon">
              <img src="assets/images/service/icons/42.svg" alt="service" />
            </div>
            <div className="main-information-area">
              <h3 className="title">AI Learning</h3>
              <p className="disc">
                Innovative AI-powered solutions that streamline processes,
                enhance efficiency, and drive digital transformation.
              </p>
            </div>
            <span className="arrow-btn">
              <img src="assets/images/service/icons/13.svg" alt="service" />
            </span>
          </Link>
          <Link
            href="/cyber-security-service"
            className="single-service-list wow fadeInUp"
            data-wow-offset={120}
            data-wow-delay=".4s"
          >
            <div className="icon">
              <img src="assets/images/service/icons/43.svg" alt="service" />
            </div>
            <div className="main-information-area">
              <h3 className="title">Cyber Security</h3>
              <p className="disc">
                Comprehensive security solutions to protect your digital
                assets and ensure business continuity.
              </p>
            </div>
            <span className="arrow-btn">
              <img src="assets/images/service/icons/13.svg" alt="service" />
            </span>
          </Link>
          <Link
            href="/development-service"
            className="single-service-list wow fadeInUp"
            data-wow-offset={120}
            data-wow-delay=".6s"
          >
            <div className="icon">
              <img src="assets/images/service/icons/44.svg" alt="service" />
            </div>
            <div className="main-information-area">
              <h3 className="title">Development</h3>
              <p className="disc">
                Custom software development tailored to your business needs,
                from web applications to enterprise solutions.
              </p>
            </div>
            <span className="arrow-btn">
              <img src="assets/images/service/icons/13.svg" alt="service" />
            </span>
          </Link>
          <Link
            href="/it-consulting-service"
            className="single-service-list wow fadeInUp"
            data-wow-offset={120}
            data-wow-delay=".8s"
          >
            <div className="icon">
              <img src="assets/images/service/icons/45.svg" alt="service" />
            </div>
            <div className="main-information-area">
              <h3 className="title">IT Consulting</h3>
              <p className="disc">
                Expert technology consulting to optimize your IT strategy,
                improve efficiency, and achieve digital transformation.
              </p>
            </div>
            <span className="arrow-btn">
              <img src="assets/images/service/icons/13.svg" alt="service" />
            </span>
          </Link>
          <Link
            href="/management-service"
            className="single-service-list wow fadeInUp"
            data-wow-offset={120}
            data-wow-delay="1s"
          >
            <div className="icon">
              <img src="assets/images/service/icons/42.svg" alt="service" />
            </div>
            <div className="main-information-area">
              <h3 className="title">Management Service</h3>
              <p className="disc">
                End-to-end IT management services to keep your systems
                running smoothly and your business growing.
              </p>
            </div>
            <span className="arrow-btn">
              <img src="assets/images/service/icons/13.svg" alt="service" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* service-we-provice-area end */}
</>

  )
}

export default ServiceList