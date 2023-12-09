import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Atical.css'

const DaArtical = () => {
  const { title } = useParams();
  const [post, setPost] = useState([]);
  const [article, setArticals] = useState([]);

  // Fetch data
  const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=aef775d85f034dea9890d78614bf3091';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticals(data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  // Data filter
  useEffect(() => {
    const matchProduct = article.filter(
      (art) => art.title.toLowerCase() === title.toLowerCase()
    );
    setPost(matchProduct);
  }, [article, title]);

  
  // Check if post[0] exists before accessing its properties
  const postTitle = post[0]?.title;
  const image = post[0]?.urlToImage;
  const summary = post[0]?.description;

  return (
    <div className='post'>
      <div className='container'>
        <h2 className='postTitle'>{postTitle}</h2>
        <img src={image} className='post_image' alt='post_image' />
      </div>
      <div className='postSummary'>{summary}</div>
    </div>
  );
};

export default DaArtical;
