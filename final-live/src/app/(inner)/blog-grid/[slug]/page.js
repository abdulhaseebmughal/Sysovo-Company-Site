"use client"
import { useParams } from "next/navigation";
import Link from "next/link";
import HeaderTwo from "@/components/header/HeaderTwo";
import BackToTop from "@/components/common/BackToTop";
import Posts from '@/data/Posts.json';
import FooterOne from "@/components/footer/FooterOne";

export default function BlogDetails() {
  const { slug } = useParams();
  const blogPost = Posts.find((post) => post.slug === slug);

  if (!blogPost) {
    return <div>Post not found!</div>;
  }

  return (
    <div>
      <HeaderTwo />

      <div className="career-single-banner-area ptb--70 blog-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="career-page-single-banner blog-page">
                <h1 className="title">{blogPost.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-blog-list-area rts-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-post-listing details mb--0">
                <div className="thumbnail">
                  <img src={blogPost.bannerImg} alt={blogPost.title} />
                </div>
                <div className="blog-listing-content">
                  <div className="user-info">
                    <div className="single">
                      <i className="far fa-user-circle" />
                      <span>by {blogPost.author}</span>
                    </div>
                    <div className="single">
                      <i className="far fa-clock" />
                      <span>{blogPost.publishedDate}</span>
                    </div>
                    <div className="single">
                      <i className="far fa-tags" />
                      <span>{blogPost.category}</span>
                    </div>
                  </div>
                  <h3 className="title animated fadeIn">{blogPost.title}</h3>
                  <p className="disc">{blogPost.descripTion}</p>
                  <p className="disc" style={{ color: '#888', fontStyle: 'italic', marginTop: '30px' }}>
                    Full article coming soon.
                  </p>
                  <Link href="/blog-grid" className="rts-btn btn-border mt--30">
                    Back to Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterOne />
      <BackToTop />
    </div>
  );
}