import BlogCard from './BlogCard/BlogCard';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import blogs from './blogData';
function Blog() {
  return (
    <div id='blog' className='container'>
      <h2 className='blogContainerTitle'><FontAwesomeIcon icon={faBlog} /> EZ Car Blog <FontAwesomeIcon icon={faBlog} /></h2>
      <div className="blog_Container">
        {blogs.map((blogInfo, index) =>
          <BlogCard key={index} blogInfo={blogInfo} />
        )}
      </div>
    </div>
  )
}

export default Blog;