"use client";
import BackToTop from "@/components/common/BackToTop";
import React from "react";
import HeaderTwo from "@/components/header/HeaderTwo";
import FooterOne from "@/components/footer/FooterOne";
import Posts from '@/data/Posts.json';
import BlogGridMain from './BlogGridMain';
function page() {
    return (
        <>
            <HeaderTwo />
            <>
                <div className="career-single-banner-area ptb--70 blog-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="career-page-single-banner blog-page">
                                    <h1 className="title">Our Latest News</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rts-blog-area rts-section-gapTop position-relative">
                    <div className="container">
                        <div className="row g-5">
                            {Posts.slice(0, 5).map((blog, index) => {
                                return (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="single-blog-area-start border-none">
                                            <BlogGridMain
                                                blogCategory={blog.category}
                                                Slug={blog.slug}
                                                blogImage={blog.image}
                                                authorImg={blog.authorImg}
                                                blogTitle={blog.title}
                                                blogAuthor={blog.author}
                                                blogPublishedDate={blog.publishedDate}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>

            <BackToTop />
            <FooterOne />
        </>

    )
}

export default page