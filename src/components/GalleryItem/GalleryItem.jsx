//#region ⬇⬇ All document setup below:
import './GalleryItem.css';
import { useState } from 'react';
import axios from 'axios';
//#endregion ⬆⬆ All document setup above. 


function GalleryItem({ image, getGallery }) {
  //#region ⬇⬇ All state variables below:
  const [isHidden, setIsHidden] = useState(true);
  //#endregion ⬆⬆ All state variables above.


  //#region ⬇⬇ All event handlers below:
  /** ⬇ handleHide functionality:
    * When the user clicks on an image, this will flip between showing the image and text. 
    */
  const handleHide = () => {
    console.log('In handleHide, image:', image.title);
    // ⬇ Flipping state variable value on click:
    setIsHidden(!isHidden);
  } // End handleHide

  /** ⬇ handleLike functionality:
    * When the user clicks on an the like button, this will increment the like counter. 
    */
  const handleLike = () => {
    console.log('In handleLike, image:', image.title);
    // ⬇ PUT, sending +Like command to DB:
    axios.put(`/gallery/${image.id}`)
      .then(response => {
        console.log('In handleLike PUT, response:', response.data);
        // ⬇ Refresh DOM with updated status:
        getGallery();
      }) // End .then
      .catch(error => {
        console.log('In /gallery PUT, error:', error);
      }); // End .catch
  } // End handleLike
  //#endregion ⬆⬆ All event handlers above.


  //#region ⬇⬇ All rendering below:
  return (
    <>
      <div className="GalleryItem-wrapper">
        <div onClick={handleHide}>
          {isHidden ? (
            <div>
              <img className="GalleryItem-image" src={image.url} />
            </div>
          ) : (
            <div className="GalleryItem-description">
              <br /> <br />
              <h5>{image.title}</h5>
              <br /> <br />
              <p>{image.description}</p>
            </div>
          )}
        </div>
        <div className="GalleryItem-button-wrapper">
          <button onClick={handleLike} className="GalleryItem-likes btn btn-primary">Click here to like! <img src="images/thumbsUp.svg" /></button>
          <button className="GalleryItem-counter btn btn-light link-primary">This image has {image.likes} likes!</button>
        </div>
      </div>
    </>
  ) // End return
  //#endregion ⬆⬆ All rendering above. 
} // End GalleryItem


export default GalleryItem;