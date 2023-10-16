import BlogCard from './BlogCard/BlogCard';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
function Blog() {
  const blogs = [{
    tag: 'FYI',
    tagColor: 'blog_tag-blue',
    title: 'Out of State Info',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Tenetur labore porro consequatur voluptatibus id non ducimus. 
    Voluptatum expedita placeat vero itaque porro ex a molestias ducimus 
    odio, enim similique consequatur? Perspiciatis reiciendis error aut odit, 
    accusamus fuga hic culpa unde neque sapiente quaerat voluptatem necessitatibus 
    blanditiis natus dolorum veniam animi vel iusto distinctio reprehenderit 
    ducimus delectus voluptatum minus harum! Corporis!`,
    author: 'EZ Car Registration Svcs',
    time: '1h ago',
    blogImage: '',//add blogImage src here
    authorImage: '',//add authorImage src here
  },
  {
    tag: 'Info',
    tagColor: 'blog_tag-brown',
    title: 'What is needed for Out of State vehicle registration',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Tenetur labore porro consequatur voluptatibus id non ducimus. 
    Voluptatum expedita placeat vero itaque porro ex a molestias ducimus 
    odio, enim similique consequatur? Perspiciatis reiciendis error aut odit, 
    accusamus fuga hic culpa unde neque sapiente quaerat voluptatem necessitatibus 
    blanditiis natus dolorum veniam animi vel iusto distinctio reprehenderit 
    ducimus delectus voluptatum minus harum! Corporis!`,
    author: 'EZ Car Registration Svcs',
    time: '1h ago',
    blogImage: '',//add blogImage src here
    authorImage: '',//add authorImage src here
  },
  {
    tag: 'Info',
    tagColor: 'blog_tag-red',
    title: 'Alternatives to DMV',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Tenetur labore porro consequatur voluptatibus id non ducimus. 
    Voluptatum expedita placeat vero itaque porro ex a molestias ducimus 
    odio, enim similique consequatur? Perspiciatis reiciendis error aut odit, 
    accusamus fuga hic culpa unde neque sapiente quaerat voluptatem necessitatibus 
    blanditiis natus dolorum veniam animi vel iusto distinctio reprehenderit 
    ducimus delectus voluptatum minus harum! Corporis!`,
    author: 'EZ Car Registration Svcs',
    time: '1h ago',
    blogImage: '',//add blogImage src here
    authorImage: '',//add authorImage src here
  },
  {
    tag: 'Info',
    tagColor: 'blog_tag-red',
    title: 'Alternatives to DMV',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Tenetur labore porro consequatur voluptatibus id non ducimus. 
    Voluptatum expedita placeat vero itaque porro ex a molestias ducimus 
    odio, enim similique consequatur? Perspiciatis reiciendis error aut odit, 
    accusamus fuga hic culpa unde neque sapiente quaerat voluptatem necessitatibus 
    blanditiis natus dolorum veniam animi vel iusto distinctio reprehenderit 
    ducimus delectus voluptatum minus harum! Corporis!`,
    author: 'EZ Car Registration Svcs',
    time: '1h ago',
    blogImage: '',//add blogImage src here
    authorImage: '',//add authorImage src here
  }
  ]
  return (
    <div id='blog' className='container'>
      <h2 className='blogContainerTitle'><FontAwesomeIcon icon={faBlog} /> EZ Car Blog <FontAwesomeIcon icon={faBlog} /></h2>
      <ul className="blog_Container">
        {blogs.map((blogInfo, index) =>
          <li key={index} className="item">
            <BlogCard blogInfo={blogInfo} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default Blog;