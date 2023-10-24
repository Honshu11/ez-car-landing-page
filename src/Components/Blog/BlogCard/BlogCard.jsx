
import './style.css';
import PropTypes from 'prop-types';
BlogCard.propTypes = {
    blogInfo: PropTypes.object,
}

function BlogCard({ blogInfo }) {
    const redirectToBlogLink = (blogLink) => {
        window.open(blogLink, '_blank');
    };

    return (
        <div className="blog_card" onClick={() => redirectToBlogLink(blogInfo.blogLink)}>
            <div className="blog_card_header">
                <img src={blogInfo.BlogImage} alt="blogImage" className="blog_img card_image" />
            </div>
            <div className="blog_card_body">
                <span className={`blog_tag ${blogInfo.TagColor}`}>{blogInfo.Tag}</span>
                <h4>{blogInfo.Title}</h4>
                <p>{blogInfo.Description}</p>
            </div>
            <div className="blog_card_footer">
                <div className="blog_user">
                    <img src={blogInfo.AuthorImage} alt="authorImage" className="blog_user_image" />
                    <div className="blog_user_info">
                        <h5>{blogInfo.Author}</h5>
                        <small>{blogInfo.CreationDateTime}</small>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default BlogCard;