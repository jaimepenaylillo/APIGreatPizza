const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

//Methods

// Get Toppings
router.get('/topping', (req, res) => {
    mysqlConnection.query('SELECT * FROM topping', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  });

  // Get a Topping
router.get('/topping/:id', (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM topping WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

// Add a Topping
router.post('/topping', (req, res) => {
    const { id, name } = req.body;
    const query = `
      SET @id = ?;
      SET @name = ?;
      INSERT INTO topping (id, name) VALUES (@id, @name);
    `;
    mysqlConnection.query(query, [id, name], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Topping Saved'});
      } else {
        console.log(err);
      }
    });
  
  });


  // delete a Topping
router.delete('/topping/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM topping WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Topping Deleted'});
      } else {
        console.log(err);
      }
    });
  });

  module.exports = router;