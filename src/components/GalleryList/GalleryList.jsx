import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList({ galleryList, getGallery }) {
  return (
    <>
      <h3 className="App-GalleryList-Header">Gallery of My Life</h3>
      <div className="App-GalleryList-Display">
        {/* ⬇ Loops through and iterates each image from the gallery to the DOM: */}
        {galleryList.map(image => {
          console.log('In GalleryList .map, image:', image);
          return (
            <GalleryItem getGallery={getGallery} key={image.id} image={image} />
          )
        })}
      </div>
    </>
  )
} // End GalleryList

export default GalleryList;