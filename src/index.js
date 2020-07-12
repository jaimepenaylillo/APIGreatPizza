const express = require("express");
const app = express();
var cors = require('cors');

// Settings

app.set('port', process.env.Port || 3000)

// Midlewares

app.use(express.json());

// Routes
app.use(cors()); 
app.use(require('./routes/pizza'));
app.use(require('./routes/topping'));
app.use(require('./routes/pizzaTopping'));

app.get('/', function (req, res) {
    res.send('Greattings from API Great Pizza');
  });


  // Startijng Server 
app.listen(app.get('port'), () => {
 console.log("Server ready on Port", app.get('port'));
});