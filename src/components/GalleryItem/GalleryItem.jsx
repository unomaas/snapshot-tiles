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
    console.log('In handleHide, image:', image);
    // ⬇ Flipping state variable value:
    setIsHidden(!isHidden);
    // ⬇ Packaging data to flip textHidden value:
    const textToHide = {
      textHidden: !image.textHidden
    }
    // ⬇ PUT, sending that data to the DB:
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

  /** ⬇ handleLike functionality:
    * When the user clicks on an the like button, this will increment the like counter. 
    */
  const handleLike = () => {
    console.log('In handleLike, image:', image);
    // // ⬇ Packaging data to increment like value:
    // const likeToAdd = {
    //   likes: likes++
    // }
    // ⬇ PUT, sending that data to the DB:
    axios.put(`/gallery/${image.id}`)
      .then(response => {
        console.log('In /gallery PUT, response:', response);
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
      <div onClick={handleHide}>
        {isHidden ? (
          <div className="GalleryItem">
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
        <button onClick={handleLike} className="GalleryItem-button btn btn-primary">Click here to like! <img src="images/thumbsUp.svg" /></button>
        <button className="GalleryItem-likes btn btn-light link-primary">This image has {image.likes} likes!</button>
      </div>
    </>
  ) // End return
  //#endregion ⬆⬆ All rendering above. 
} // End GalleryItem


export default GalleryItem;