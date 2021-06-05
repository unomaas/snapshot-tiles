import './GalleryItem.css';
import { useState } from 'react';
import axios from 'axios';

function GalleryItem({image, getGallery}) {
  // ⬇ State variables:
  const [isHidden, setIsHidden] = useState(true);

  const handleHide = () => {
    console.log('In handleHide, image:', image);
    // ⬇ Packaging data to flip textHidden value:
    const textToHide = {
      textHidden: !image.textHidden
    } 
    // ⬇ PUT, Sending that data to the DB:
    axios.put(`/gallery/${image.id}`, textToHide)
      .then(response => {
        console.log('In /gallery PUT, response:', response);
        // ⬇ Refresh DOM with updated status:
        getGallery();
      }) // End .then
      .catch(error => {
        console.log('In /gallery PUT, error:', error);
      }); // End .catch
  } // End handleHide


  return (
    <div className="imageItem">
      {isHidden ? (
        <div>
          <img src={image.url} />
        </div>
      ) : (
        <div>
          <p>{image.name}</p>
          <p>{image.description}</p>
      </div>
      )} 
      <button>Love It!</button>
    </div>
  )
} // End GalleryItem

export default GalleryItem;