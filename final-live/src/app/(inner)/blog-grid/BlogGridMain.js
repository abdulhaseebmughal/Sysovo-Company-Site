"use client"

const BlogGridMain = (props) => {
    const { Slug, blogImage, blogTitle } = props;
    return (
        <div>
            <a href={`/blog-grid/${Slug}`} className="thumbnail">
                <img src={`/assets/images/blog/${blogImage}`} alt="blog_iamge" />
            </a>
            <div className="inner-content-area">
                <div className="top-area">
                    <span>Plan Smarter, Build Better</span>
                    <a href={`/blog-grid/${Slug}`}>
                        <h3 className="title animated fadeIn">
                            {blogTitle ? blogTitle : 'How to growing your business'}
                        </h3>
                    </a>
                    <p className="disc">
                        Expert guidance on mobile strategy, UI/UX, and monetization. Align your app vision with market needs, technical feasibility, and growth goals before development starts.
                    </p>
                    <div className="bottom-author-area">
                        <img src="assets/images/testimonials/01.png" alt="author" />
                        <div className="author-area-info">
                            <h6 className="title">Marcus Freeman</h6>
                            <span>24 Sept 2024</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogGridMain