import{ useState} from 'react';
import { RxAvatar } from "react-icons/rx";

import Fackdata from '../../../FackData/data.json';
import { Link } from 'react-router-dom';
const HomePopularBlog = () => {
  const [fackData] = useState(Fackdata.articles)

  // const [popularPosts, setPopularPosts] = useState([]);
  // useEffect(() => {
  //    const fetchPopularPosts = async () => {
  //     try {
  //       // const response = await fetch('/api/popular-posts'); 
  //         const response = await fetch(Fackdata.articles); 
  //       const data = await response.json();
  //       setPopularPosts(data); 
  //     } catch (error) {
  //       console.error('Error fetching popular posts:', error);
  //     }
  //   };

  //   fetchPopularPosts();
  // }, []); 

  return (
    <div className="HomeTeam">
    <div className='container'>
    <div className="patner_text">
      <h1>OUR <span>Most Popular Blog Posts</span></h1>
      <p>This interconnected alliance ensures that our clients benefit from a comprehensive range of top-tier services, seamlessly delivered across the globe. With each member firm contributing unique insights and capabilities, we create a powerful synergy that exceeds individual capacities.</p>
    </div>
    {/* popular blog post */}
    <div>
    <div className='row'>
     {fackData.slice(0, 6).map((post) => (
           <div key={post.title} className='col-lg-4 artical_card'>
          <img className='blog_image' src={post.urlToImage} alt='blogImage' />
          <p></p>
          <h4>{post.title}</h4>
          <p className='author'><RxAvatar /> Swapnil Ahmed Shishir</p>
          <Link to={`/blog/${post.title}`}><button className='artical_btn'>Read More</button></Link>
      </div>
        ))}
        </div>
    </div>
    <div className="clearfix"></div>    
    </div>
    
  </div>
  )
}

export default HomePopularBlog
