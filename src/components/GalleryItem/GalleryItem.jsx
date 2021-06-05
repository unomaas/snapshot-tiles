import './GalleryItem.css';
import { useState } from 'react';
import axios from 'axios';

function GalleryItem({ image, getGallery }) {
  // ⬇ State variables:
  const [isHidden, setIsHidden] = useState(true);

  const handleHide = () => {
    console.log('In handleHide, image:', image);
    // ⬇ Flipping state variable value:
    setIsHidden(!isHidden);
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
    <>
      <div onClick={handleHide}>
        {isHidden ? (
          <div className="GalleryItem">
            <img className="GalleryItem-image" src={image.url} />
          </div>
        ) : (
          <div className="GalleryItem-description">
            <p>{image.title}</p>
            <p>{image.description}</p>
          </div>
        )}
      </div>
      <button className="GalleryItem-button btn btn-success">Love It!</button>
    </>
  )
} // End GalleryItem

export default GalleryItem;