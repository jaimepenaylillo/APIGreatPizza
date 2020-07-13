# APIGreatPizza (Back End)

## The Great Pizza Test: Description.
- This is an application to manage Pizza Menu, the application has a list of pizzas described, that has a Pizza name and a List of Ingredients (Home Page).
  - The Application has a list of ingredients (Toppings), and the ability to add, edit, and delete these ingredients. (Menu Option toppings).
  - The application allows the user to create new Pizzas, delete old (Menu Option Pizzas)
  - Change the ingredient list of an existing Pizza (Menu Option Topping for Pizzas).
  - Front end application could be found in https://github.com/jaimepenaylillo/appGreatPizzaTest
  
 ## The Great Pizza Test: Technical Details.
 - Back end has been developped using Node.js, "cors": "^2.8.5","express": "^4.17.1", "mysql": "^2.18.1".
 - Data Base MySql Database, included in this repository.
 
 ## The Great Pizza Test: API Rest.
 - Verbs: Suggested for the design document:
      1.	getPizzas (GET Eg. '/pizza').
      2.	getpizza (GET Eg. '/pizza/idPizza).
      3.	GetToppings. (GET Eg. '/toppings').
      4.	AddTopping (POST Eg. '/toppings')..
      5.	DeleteTopping. (DELETE Eg. '/toppings/idTopping')..
      6.	DeletePizza. (DELETE Eg. '/pizza/idPizza).
      7.	addPizza.(POST Eg. '/pizza')..
      8.	addToppingToPizza.(POST Eg. '/pizzaToppings')..
      9.	getToppingsForPizza.(GET Eg. '/pizzaToppings/idPizza')

- Port: 3000.
## The Great Pizza Test: Commands.
  ### - Command to install Dependencies after clone repository:     'npm install'
  ### - Command to enable service:                                  'npm run dev'
  
