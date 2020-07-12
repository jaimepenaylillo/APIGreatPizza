const express = require("express");
const app = express();

// Settings

app.set('port', process.env.Port || 3000)

// Midlewares

app.use(express.json());

// Routes

app.use(require('./routes/pizza'));

app.get('/', function (req, res) {
    res.send('Saludos desde express');
  });


  // Startijng Server 
app.listen(app.get('port'), () => {
 console.log("Server ready on Port", app.get('port'));
});