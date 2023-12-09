// import React from 'react';
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ArticalCard({ articals }) {
    // Ensure that the structure of props is as expected
    let { title, urlToImage } = articals;

    return (
        <>
            <div className='col-lg-4 artical_card'>
                <img className='blog_image' src={urlToImage} alt='blogImage' />
                <p></p>
                <h4>{title}</h4>
                <p className='author'><RxAvatar /> Swapnil Ahmed Shishir</p>
                <Link to={`/blog/${title}`}><button className='artical_btn'>Learn More</button></Link>
            </div>
        </>
    )
}

ArticalCard.propTypes = {
    articals: PropTypes.shape({
      title: PropTypes.string.isRequired,
      urlToImage: PropTypes.string.isRequired,
      // Add other expected prop types
    }).isRequired,
  };

export default ArticalCard;
