import { useEffect, useState } from 'react';
import ArticalCard from './ArticalCard/ArticalCard';
import './style.css';
// import FakData from "../../FackData/data.json"
import { FaAnglesLeft ,FaAnglesRight } from "react-icons/fa6";

function Blog() {
  const [artical, setArticals] = useState([]); 
  const [page , setPage] = useState(0);
  const [totolArtical , setTotalArtical] = useState();
// Fetch data
const url = 'https://newsapi.org/v2/top-headlines?' + 
//  'language=de&'+${page}`
'country=us&' +
'apiKey=aef775d85f034dea9890d78614bf3091'+`&page=1`+'&pageSize=6';

useEffect(() => {
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setArticals(data.articles);
    setTotalArtical(data.totalResults);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
}, [url]);
  
// json FackData jenarate
// const fackData = FakData
// const [artical, setArticals] = useState(fackData);  
// console.log(artical.articles[0].title);

const handleNext = async () => {
  if (page + 1 > Math.ceil(totolArtical / 6)) {
    // No need to fetch more data if there are no more pages
    console.log('No more pages');
  } else {
    try {
      const nextPage = page + 1;
      const nextPageUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=aef775d85f034dea9890d78614bf3091&page=${nextPage}&pageSize=6`;
      console.log(nextPageUrl);
      const response = await fetch(nextPageUrl);
      const data = await response.json();
      setArticals(data.articles);
      setPage(nextPage);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};



const handlePrevious = () => {
  if (page > 1) {
    const previousPage = page - 1;
    const previousPageUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=aef775d85f034dea9890d78614bf3091&page=${previousPage}&pageSize=6`;

    // Fetch data for the previous page
    fetch(previousPageUrl)
      .then(response => response.json())
      .then(data => {
        setArticals(data.articles);
        setPage(previousPage);
      })
      .catch(error => console.error('Error fetching data:', error));
  } else {
    console.log('Already on the first page');
  }
};

// console.log(url);


 return (
    <div>
      <div className="blog_hero">
      <h1>Legal Resources</h1>
      </div>  
      <div className='container artical'>
      <div className='row'>
  {artical.length > 0 ? (
    artical.map((ar) => (
      <ArticalCard key={ar.title} articals={ar}></ArticalCard>
    ))
  ) : (
    <p>No data available</p>
  )}
</div>
        <div className="container pager">
          <button className="previous" disabled={page<=1} type='button' onClick={handlePrevious}><FaAnglesLeft className='icon' /> Previous</button>  
          <button className="next" disabled={page >= 6}  onClick={handleNext}>Next <FaAnglesRight className='icon'/></button> 
        </div> 
      </div>     
    </div>
  )
}

export default Blog
