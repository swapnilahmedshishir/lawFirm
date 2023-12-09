import { useEffect, useRef, useState } from 'react';
import './style.css';


const MasonryGallery = () => {
  const clientDataUrl =
    'https://pixabay.com/api/?key=41142514-554fc6ec74edc12eeb8316d19&q=red+flowers&image_type=photo&pretty=true';
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(clientDataUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPhotos(data.hits);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [clientDataUrl]);

  const galleryRef = useRef(null);

  const getVal = (elem, style) => parseInt(window.getComputedStyle(elem).getPropertyValue(style));

  const getHeight = item => item.querySelector('.content').getBoundingClientRect().height;

  const resizeAll = () => {
    const gallery = galleryRef.current;
    const altura = getVal(gallery, 'grid-auto-rows');
    const gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(item => {
      const el = item;
      el.style.gridRowEnd = `span ${Math.ceil((getHeight(item) + gap) / (altura + gap))}`;
    });
  };

  useEffect(() => {
    const gallery = galleryRef.current;

    gallery.querySelectorAll('img').forEach(item => {
      item.classList.add('byebye');
      if (item.complete) {
        // Image already loaded
        const altura = getVal(gallery, 'grid-auto-rows');
        const gap = getVal(gallery, 'grid-row-gap');
        const gitem = item.parentElement.parentElement;
        gitem.style.gridRowEnd = `span ${Math.ceil((getHeight(gitem) + gap) / (altura + gap))}`;
        item.classList.remove('byebye');
      } else {
        // Image loading event
        item.addEventListener('load', () => {
          const altura = getVal(gallery, 'grid-auto-rows');
          const gap = getVal(gallery, 'grid-row-gap');
          const gitem = item.parentElement.parentElement;
          gitem.style.gridRowEnd = `span ${Math.ceil((getHeight(gitem) + gap) / (altura + gap))}`;
          item.classList.remove('byebye');
        });
      }
    });

    window.addEventListener('resize', resizeAll);

    gallery.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('full');
      });
    });

    return () => {
      window.removeEventListener('resize', resizeAll);
    };
  }, [photos]); // Re-run effect when photos change

  return (
    <div className='gallary_img'>
      <div className="gallery" id="gallery" ref={galleryRef}>
        {photos.map(photo => (
          <div key={photo.id} className="gallery-item" style={{ gridRowEnd: `span ${photo.views % 20 + 1}` }}>
            <div className="content">
              <img src={photo.largeImageURL} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
