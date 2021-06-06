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
  // ⬇ Declaring SQL commands & values to send to DB:
  const sqlText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
  // ⬇ imageId (aka $1) value needs to be sent as an array:
  const values = [imageId];
  // ⬇ Sending the variables to the DB: 
  pool.query(sqlText, values)
    .then(result => {
      console.log('In /gallery PUT, result:', result.rows);
      // ⬇ Sends back the results in an object, we always want rows:
      res.send(result.rows)
    }) // End .then
    .catch(error => {
      console.log('In /gallery PUT, error:', error);
      res.sendStatus(500); // Server error. 
    }); // End .catch
}) // End PUT

/** ⬇ /tasks DELETE functionality:
 * Router function to handle the DELETE part of the server-side logic.  Will send SQL query to delete the entire row from the DB.  
 */
router.delete("/:id", (req, res) => {
  console.log('In /gallery router DELETE');
  // ⬇ Grabbing image id from the req params:
  let imageId = req.params.id;
  // ⬇ Declaring SQL commands & values to send to DB:
  const sqlText = `DELETE FROM "gallery" WHERE "id" = $1;`;
  // ⬇ imageId (aka $1) value needs to be sent as an array:
  const values = [imageId];
  // ⬇ Sending the variables to the DB: 
  pool.query(sqlText, values) 
    .then(response => {
      console.log('Deleted the image with ID:', imageId);
      res.sendStatus(202); // "Accepted"
    }) // End .then
    .catch(error => {
      console.log('Unable to delete image, error:', error);
      res.sendStatus(500);
    }); // End .catch
}) // End DELETE
//#endregion ⬆⬆ All CRUD routes above. 


module.exports = router;