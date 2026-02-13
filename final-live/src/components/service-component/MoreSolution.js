"use client"; // Add if using Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import necessary Swiper modules
import "swiper/css";
import Link from "next/link";

export default function MoreSolutions() {
    const solutions = [
        {
            icon: "/assets/images/service/icons/07.svg",
            title: "AI Learning",
            description: "Innovative AI-powered solutions that streamline processes and enhance efficiency.",
            href: "/ai-learning-service",
        },
        {
            icon: "/assets/images/service/icons/08.svg",
            title: "Cyber Security",
            description: "Comprehensive security solutions to protect your digital assets and ensure continuity.",
            href: "/cyber-security-service",
        },
        {
            icon: "/assets/images/service/icons/09.svg",
            title: "Development",
            description: "Custom software development tailored to your unique business needs and goals.",
            href: "/development-service",
        },
        {
            icon: "/assets/images/service/icons/07.svg",
            title: "IT Consulting",
            description: "Expert technology consulting to optimize your IT strategy and drive transformation.",
            href: "/it-consulting-service",
        },
        {
            icon: "/assets/images/service/icons/08.svg",
            title: "Management Service",
            description: "End-to-end IT management services to keep your systems running smoothly.",
            href: "/management-service",
        },
    ];

    return (
        <div className="rts-solution-area rts-section-gapTop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-center-style-two">
                            <h2 className="title">More solutions..</h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--30">
                    <div className="float-right-style">
                        {/* Swiper Wrapper */}
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={3.8}
                            spaceBetween={30}
                            loop={true}
                            speed={1000}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 25,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 25,
                                },
                                980: {
                                    slidesPerView: 3,
                                    spaceBetween: 25,
                                },
                                1280: {
                                    slidesPerView: 3.8,
                                    spaceBetween: 25,
                                },
                            }}
                            className="mySwiper-service-inenr"
                        >
                            {solutions.map((solution, index) => (
                                <SwiperSlide key={index}>
                                    <div className="single-service-style-two">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src={solution.icon} alt={solution.title} />
                                            </div>
                                            <div className="bottom">
                                                <Link href={solution.href}>
                                                    <h3 className="title animated fadeIn">
                                                        {solution.title}
                                                        <img
                                                            src="/assets/images/service/icons/13.svg"
                                                            alt="service"
                                                        />
                                                    </h3>
                                                    <p className="disc">{solution.description}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}