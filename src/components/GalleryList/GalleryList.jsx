//#region ⬇⬇ All document setup below:
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';
//#endregion ⬆⬆ All document setup above. 


function GalleryList({ galleryList, getGallery }) {
  //#region ⬇⬇ All rendering below:
  return (
    <>
      <h3 className="App-GalleryList-Header">Snapshot Tiles</h3>
      <div className="App-GalleryList-Display"><br />
        {/* ⬇ Loops through and iterates each image from the gallery to the DOM: */}
        {galleryList.map(image => {
          // console.log('In GalleryList .map, image:', image.title);
          return (
            <GalleryItem getGallery={getGallery} key={image.id} image={image} />
          )
        })}
      </div>
    </>
  ) // End return
  //#endregion ⬆⬆ All rendering above. 
} // End GalleryList


export default GalleryList;