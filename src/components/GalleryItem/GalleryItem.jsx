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
    // ⬇ PUT, sending +Like request to server:
    axios.put(`/gallery/${image.id}`)
      .then(response => {
        console.log('In handleLike PUT, response:', response.data);
        // ⬇ Refresh DOM with updated status:
        getGallery();
      }) // End .then
      .catch(error => {
        console.log('In handleLike PUT, error:', error);
      }); // End .catch
  } // End handleLike

  /** ⬇ handleDelete functionality:
    * When the user clicks on an the trash button, a pop-up will ask them to confirm deletion, then will delete the image. 
    */
  const handleDelete = () => {
    console.log('In handleDelete, image:', image.title);
    // ⬇ Adding a delete confirmation pop-up window before deleting:
    const confirmBox = window.confirm(
      "Do you really want to delete this image from Ryan's gallery?  Warning: This cannot be undone, and he might think you're un-cool."
    );
    // ⬇ If they confirm, process delete: : 
    if (confirmBox === true) {
      // ⬇ DELETE, sending delete request to server:
      axios.delete(`/gallery/${image.id}`)
        .then(response => {
          console.log('In handleDelete DELETE, response:', response.data);
          // ⬇ Refresh DOM with updated status:
          getGallery();
        }) // End .then
        .catch(error => {
          console.log('In handleDelete DELETE, error:', error);
        }); // End .catch
    } // End if statement
  } // End handleDelete
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
            <div>
              <div className="GalleryItem-description">
                <h5>{image.title}</h5>
                <br /> <br />
                <p>{image.description}</p>
              </div>
            </div>
          )}
        </div>
        <div className="GalleryItem-button-wrapper">
          <button
            onClick={handleLike}
            className="GalleryItem-likes btn btn-primary">Click here to Like! <img src="images/thumbsUp.svg"
            />
          </button>
          <button
            className="GalleryItem-counter btn btn-light link-primary">{image.likes} Likes!
          </button>
          <button
            onClick={handleDelete}
            className="GalleryItem-delete btn btn-danger"><img src="images/trash.svg"
            />
          </button>
        </div>
      </div>
    </>
  ) // End return
  //#endregion ⬆⬆ All rendering above. 
} // End GalleryItem


export default GalleryItem;