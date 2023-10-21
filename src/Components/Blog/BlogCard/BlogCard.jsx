
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
                {/*Replace src value with blogInfo.blogImage*/}
                <img src="https://source.unsplash.com/600x400/?computer" alt="blogImage" className="blog_img card_image" />
            </div>
            <div className="blog_card_body">
                <span className={`blog_tag ${blogInfo.tagColor}`}>{blogInfo.tag}</span>
                <h4>{blogInfo.title}</h4>
                <p>{blogInfo.description}</p>
            </div>
            <div className="blog_card_footer">
                <div className="blog_user">
                    {/*Replace src value with blogInfo.authorImage*/}
                    <img src="https://i.pravatar.cc/40?img=1" alt="authorImage" className="blog_img blog_user_image" />
                    <div className="blog_user_info">
                        <h5>{blogInfo.author}</h5>
                        <small>{blogInfo.time}</small>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default BlogCard