const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

//Methods

// Get ToppingsFromPizza
router.get('/pizzaTopping/:id', (req, res) => {
    const { id } = req.params; 
    const query = `
    SELECT 
    pt.*,
    t.name as toppingName,
    p.name  as pizzaName
    FROM pizzatopping as pt
    INNER JOIN topping as t
    ON t.id = pt.idTopping
    INNER JOIN pizza p
    ON p.id = pt.idPizza
    WHERE p.id = ?
    `;
    mysqlConnection.query(query, [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

// Add topping to Pizza Topping
router.post('/pizzaTopping', (req, res) => {
    const { id, idPizza, idTopping } = req.body;
    const query = `
      SET @id = ?;
      SET @idPizza = ?;
      SET @idTopping = ?;
      INSERT INTO pizzatopping (id, idPizza, idTopping) VALUES (@id, @idPizza, @idTopping );
    `;
    mysqlConnection.query(query, [id, idPizza, idTopping], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Pizza Topping Saved'});
      } else {
        console.log(err);
      }
    });
  
  });

  module.exports = router;