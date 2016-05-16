   /* this program is intended to categorize and provide cost totals for groceries shopping, in order to make it apparent exactly where one's money is going at the grocery store.  */
   
   // list of arrays for each category. 
var bread = [], eggs = [], frozen = [], produce = [], sandwich = [], cereal = [], condiments = [], meat = [], beverage = [], mealSides = [], coffee = [], snackBars = [], junk = [], misc = [], hygiene = [];
   
var monthlyTotal=[];

   //function for creating new grocery items
function Item (name, price, category, discount) {
    this.name = name;
    this.price=price;
    this.category=category;
            
    /* allow for price adjustment according to varying sale prices
    
    this.salePrice=function () {
        var sale =prompt("Was item on sale? Type yes or no.");
        if (sale ==="yes") {
        var discount  = prompt("What was the discount?");
        
        }
      }
    return this.price - this.discount  */
}


            //if salePrice exists
            //set price to equal salePrice


    //create list of objects for common items
var goodBread = new Item("wholesomeHarvest 9 seed & grain bread", 3.59, "bread");
var deliMeat = new Item ("deli meat", 8.00, "sandwich");
var cereal;
var amysMeal = new Item("Amy's frozen meal", 3.99, "frozen", 1.00);
var burrito = new Item("Evol burrito", 2.49, "frozen", 0.49);
var orangeJuice = new Item("Minutemaid OJ", 2.99, "beverage");
var chocMilk = new Item ("Fairlife chocolate milk", 4.39, "beverage");
var avocado = new Item("avocado", 1.50, "produce", 0.75);
var banana = new Item ("banana", 1.80, "produce");
var YamChips = new Item ("Sweet potato chips", 1.99, "mealSides");
var eggs = new Item ("dozen eggs", 3.99, "eggs");
var shreddedCheese;
var littleDebbie = new Item ("Little debbie snack cake", 1.99, "junk");

// create anonymous variables to use in case of unusual items that don't necessitate their own variables.  such as nail clipper. 
var junkMisc = new Item ("random junk food", 1.00, "junk");
var hygieneMisc = new Item ("random hygiene item", 1.00, "hygiene");


    //declare variable that will represent the array of reciept items

var shoppingList = ['goodBread', 'amysMeal', 'burrito', 'orangeJuice', 'avocado'];
// var a = shoppingList.join(', ');

    /**** the most basic form of this program will involve entering all of the grocery items (objects) into this array, here in the code. It could potentially be entered from an html form, or maybe a prompt box  ****/
    
var compute_receipt = function() {     //parameters will referenced using shoppingList[i]

var total = 0;
var frozenTotal = 0, eggsTotal = 0, breadTotal = 0, beverageTotal = 0, produceTotal = 0;

var prices = [];
       //add prices of all objects entered into shoppingList together
    var i;
    for (i=0; i< arguments.length; i++) {
        
    if (arguments[i].category==="frozen") {
    frozenTotal += arguments[i].price;
    total += arguments[i].price;    
    } else if (arguments[i].category==="bread") {
    breadTotal += arguments[i].price;
    total += arguments[i].price;
    } else if (arguments[i].category==="beverage") {
     beverageTotal += arguments[i].price;
     total += arguments[i].price;
    } else if (arguments[i].category==="produce") {
     produceTotal += arguments[i].price;
    total += arguments[i].price;
    }

    
    
    //total += arguments[i].price;
    
    //console.log(arguments[i].price);
    
    }
    console.log("total = " + total + " frozen total = " + frozenTotal + " bread total = " + breadTotal + " produce total = " + produceTotal + " beverage total = " + beverageTotal);
     /* push items into appropriate arrays
         add up total cost of each array, then add all together
    function total (prices) 
    
      */ 
        // return each of these totals, maybe as an alert

}


compute_receipt(shoppingList);

// goodBread, amysMeal, burrito, orangeJuice, avocado