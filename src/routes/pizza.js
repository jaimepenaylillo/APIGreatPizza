const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

//Methods

// Get Pizzas
router.get('/pizza', (req, res) => {
    mysqlConnection.query('SELECT * FROM pizza', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  });

  // Get a Pizza
router.get('/pizza/:id', (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM pizza WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

// Add a Pizza
router.post('/pizza', (req, res) => {
    const { id, name } = req.body;
    const query = `
      SET @id = ?;
      SET @name = ?;
      INSERT INTO pizza (id, name) VALUES (@id, @name);
    `;
    mysqlConnection.query(query, [id, name], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Pizza Saved'});
      } else {
        console.log(err);
      }
    });
  
  });


  // delete a Pizza
router.delete('/pizza/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM pizza WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Pizza Deleted'});
      } else {
        console.log(err);
      }
    });
  });

  module.exports = router;