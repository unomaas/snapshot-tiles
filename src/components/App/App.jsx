//#region ⬇⬇ All document setup below:
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GalleryList from '../GalleryList/GalleryList';
import './opendyslexic-regular-webfont.woff';
import './opendyslexic-regular-webfont.woff2';
//#endregion ⬆⬆ All document setup above. 


function App() {
  //#region ⬇⬇ All state variables & app load below:
  // ⬇ State variables:
  let [galleryList, setGalleryList] = useState([]);

  // ⬇ On load, get gallery:
  useEffect(() => {
    getGallery()
  }, [])
  //#endregion ⬆⬆ All state variables & app load above. 


  //#region ⬇⬇ All CRUD routes below:
  /** ⬇ getGallery functionality:
   * Makes a GET request to pull all images from DB and feed to the GalleryList array. Runs on page load.
   */
  const getGallery = () => {
    console.log('In getGallery');
    // ⬇ Axios GET to pull from DB:
    axios.get('/gallery')
      .then(response => {
        console.log('In GET .then, response:', response.data);
        // ⬇ Take data from response and assign to the gallery array:
        setGalleryList(response.data);
      }) // End .then
      .catch(error => {
        console.log('In GET .catch, error:', error);
      }); // End .catch
  } // End getGallery
  //#endregion ⬆⬆ All CRUD routes above. 


  //#region ⬇⬇ All rendering below:
  return (
    <div className="App">
      <Header />
      {/* Array of gallery images displayed on the DOM, below: */}
      <GalleryList galleryList={galleryList} getGallery={getGallery} />
      <Footer />
    </div>
  ); // End return
  //#endregion ⬆⬆ All rendering above. 
} // End App


export default App;
