//#region ⬇⬇ All document setup below:
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//#endregion ⬆⬆ All document setup above. 


function App() {
    //#region ⬇⬇ All state variables & app load below:
  // ⬇ State variables:
  let [studentList, setStudentList] = useState([]);
  // ⬇ On load, get guests:
  useEffect(() => {
    getStudent()
  }, [])
  //#endregion ⬆⬆ All state variables & app load above. 

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
