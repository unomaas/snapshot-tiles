//#region ⬇⬇ All document setup below:
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
//#endregion ⬆⬆ All document setup above. 


//#region ⬇⬇ All CRUD routes below:
/** ⬇ /gallery GET functionality:
 * Router function to handle the GET part of the server-side logic.  Will send SQL query to pull all of the tasks from the DB to update on the DOM.
 */
router.get('/', (req, res) => {
  console.log('In gallery GET');
  // ⬇ Declaring SQL commands to send to DB: 
  const sqlText = `SELECT * from "gallery" ORDER BY "id";`;
  // ⬇ Sending query to DB:
  pool.query(sqlText)
    .then(result => {
      console.log('In /gallery GET, result:', result.rows);
      // ⬇ Sends back the results in an object, we always want rows:
      res.send(result.rows)
    }) // End .then
    .catch(error => {
      console.log('In /gallery GET, error:', error);
      res.sendStatus(500); // Server error. 
    }); // End .catch
}); // End GET

/** ⬇ /tasks POST functionality:
 * Router function to handle the POST part of the server-side logic.  Will send SQL query to add a new image to the DB and output to DOM. 
 */

/** ⬇ /gallery PUT functionality:
 * Router function to handle the POST part of the server-side logic.  Will send SQL query to add like to like counter and output to DOM. 
 */
router.put('/:id', (req, res) => {
  console.log('In /gallery router PUT');
  // ⬇ Grabbing image id from the req params:
  let imageId = req.params.id;
  // ⬇ Declaring SQL commands to send to DB:
  const sqlText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = 1;`;
  pool.query(sqlText)
    .then(result => {
      console.log('In /gallery PUT, result:', result.rows);
      // ⬇ Sends back the results in an object, we always want rows:
      res.send(result.rows)
    }) // End .then
    .catch(error => {
      console.log('In /gallery PUT, error:', error);
      res.sendStatus(500); // Server error. 
    });
})


// router.put('/like/:id', (req, res) => {
//   console.log(req.params);
//   const galleryId = req.params.id;
//   for (const galleryItem of galleryItems) {
//     if (galleryItem.id == galleryId) {
//       galleryItem.likes += 1;
//     }
//   }
//   res.sendStatus(200);
// }); // END PUT Route

//#endregion ⬆⬆ All CRUD routes above. 


module.exports = router;