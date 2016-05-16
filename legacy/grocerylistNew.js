//each item will be an array with a standard order
// item = ["name", price, "category"]
// a shopping list will simply be an array of arrays and item properties will be accessed using array index notation
// if a custom price needs to be added, a button, or simply an entry in a form box, can call a function that replaces or appends a new number to the item array...which only requires a new assignment referencing index number
    // or maybe a discount function can be applied to the existing price

var goodBread = ["wholesome Harvest 9 seed & grain bread", 3.59, "bread"];
var deliMeat = ["Deli meat", 7.99, "sandwich"];
var cereal = [];
var amysMeal = ["Amy's frozen meal", 3.99, "frozen"];
var burrito = ["Evol burrito", 2.49, "frozen"];
var orangeJuice = ["Minutemaid OJ", 2.99, "beverage"];
var chocMilk = ["Fairlife chocolate milk", 4.39, "beverage"];
var avocado = ["avocado", 1.50, "produce"];
var bananas = ["bananas", 3.00, "produce"];

// shoppinglist variable will be built by user inputs

var shoppingList = [goodBread, amysMeal, burrito, orangeJuice, avocado];
var compute_receipt = function(list) { 

    
var total = 0;
var frozenTotal = 0, eggsTotal = 0, breadTotal = 0, beverageTotal = 0, produceTotal = 0;
    
    var i;
    for (i=0;i < list.length;i++) {
        if (list[i][2] === 'frozen') {
            frozenTotal += list[i][1];
            total += list[i][1];
        } else if (list[i][2] === 'bread') {
            breadTotal += list[i][1];
            total += list[i][1];
    } else if (list[i][2] === 'beverage') {
            beverageTotal += list[i][1];
            total += list[i][1];
    } else if (list[i][2] === 'produce') {
            produceTotal += list[i][1];
            total += list[i][1];
    }
}
    console.log("total = " + total + " frozen total = " + frozenTotal + " bread total = " + breadTotal + " produce total = " + produceTotal + " beverage total = " + beverageTotal);
};

// compute_receipt(shoppinglist);

// it works, but returns "shoppingList undefined" I think b/c its running the function first, before variables are set. If I re-call the funtion, it works. so it seems to be an order or operations issue 

// adding new items

var elList, newEl, newSelectEl, newName, newOptionEl, newValue, newText; // declare variables

elList = document.getElementById('list');
addLink = document.querySelector('a');


function addItem(e) {                                    // Declare function  
    e.preventDefault();                                 // Prevent link action
  newEl = document.createElement('li');                  // New <li> element
  newSelectEl = document.createElement('select');    //new <select> element
  newSelectEl.setAttribute('name', 'produce');        //add an attribute to new <select> element
    
  newOptionEl = document.createElement('option')     //new <option> element 
  newOptionEl.setAttribute('value', 'avocado');    // add value attribute node to option element
  newText = document.createTextNode('Avocado');    // add text nodes to option element
      
  newOptionEl.appendChild(newText);               // attach text to <option>
  newSelectEl.appendChild(newOptionEl);      // attach <option> to <select> element
    
// additional option
    newOptionEl = document.createElement('option')     //new <option> element 
  newOptionEl.setAttribute('value', 'bananas');    // add value attribute node to option element
  newText = document.createTextNode('Bananas');    // add text nodes to option element
      
  newOptionEl.appendChild(newText);               // attach text to <option>
  newSelectEl.appendChild(newOptionEl);  
    
    // end additional options
    
  newEl.appendChild(newSelectEl);           // attach <select> to <li> to list
  elList.appendChild(newEl);       // attach <li> to <ul>
    
    
}

var elSelectItem = document.getElementById('produceItem');

 function updateList() {
 var choice = this.options[this.selectedIndex].value;
     if (choice === avocado) {
          shoppingList.push('avocado');     // add variable to shoppinglist array
     } else if (choice === bananas) {
         shoppingList.push('bananas');
     } else if (choice === amysMeal) {
         shoppingList.push('amysMeal');
     }

   
};

// Event Listeners
elSelectItem.addEventListener('change', updateList, false);
addLink.addEventListener('click', addItem, false);  // click on button calls function
