const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback',  (req, res) => {
    let newFeedback = req.body;
    let addFeeling = Number(newFeedback.feeling);
    let addUnderstanding = Number(newFeedback.understanding);
    let addSupport = Number(newFeedback.support);
    let addComment = newFeedback.comment;
    console.log(`Adding review`, newFeedback);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [addFeeling, addUnderstanding, addSupport, addComment])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new feedback`, error);
        res.sendStatus(500);
      });
  });
 
  app.get('/feedback', (req, res) => {
    // Find all orders and return them
    pool.query('SELECT * FROM "feedback" ORDER BY "id" DESC;').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET ', error);
        res.sendStatus(500);  
    });
})
app.delete(`/feedback/:id`, (req, res) => {    
  let id = req.params.id; // id of the thing to delete
  console.log('Delete route called with id of', id);
  const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`
  pool.query(queryText, [id])
  .then((response)=> {
    console.log('Deleted');
    res.sendStatus(200);
  }).catch((err) => {
  console.log('error herre in router.delete', err);
  res.sendStatus(500);

  })
});
/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});