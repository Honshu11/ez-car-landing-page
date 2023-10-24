import BlogCard from './BlogCard/BlogCard';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { getBlogs } from './newBlogdata.js';
import { useState,useEffect } from 'react';
// import blogs from './blogData';
function Blog() {
  const [blogs, setBlogs] = useState([]);
  async function getBlogData() {
    const blogs = await getBlogs();
    setBlogs(blogs);
  }

  useEffect(()=>{
    getBlogData();
  },[])

  return (
    <div id='blog' className='container'>
      <h2 className='blogContainerTitle'><FontAwesomeIcon icon={faBlog} /> Blogs <FontAwesomeIcon icon={faBlog} /></h2>
      <div className="blog_Container">
        {blogs.map((blogInfo, index) =>
          <BlogCard key={index} blogInfo={blogInfo} />
        )}
      </div>
    </div>
  )
}

export default Blog;