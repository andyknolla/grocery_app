
// declare variables for categoryBox buttons

var categoryBox1 = $('.categoryBox').find('button').eq(0).val();
var categoryBox2 = $('.categoryBox').find('button').eq(1).val();
var categoryBox3 = $('.categoryBox').find('button').eq(2).val();
var categoryBox4 = $('.categoryBox').find('button').eq(3).val();
var categoryBox5 = $('.categoryBox').find('button').eq(4).val();
var categoryBox6 = $('.categoryBox').find('button').eq(5).val();
var categoryBox7 = $('.categoryBox').find('button').eq(6).val();
var categoryBox8 = $('.categoryBox').find('button').eq(7).val();
var categoryBox9 = $('.categoryBox').find('button').eq(8).val();
var categoryBox10 = $('.categoryBox').find('button').eq(9).val();
var categoryBox11= $('.categoryBox').find('button').eq(10).val();
var categoryBox12 = $('.categoryBox').find('button').eq(11).val();



// declare variables for table elements
var tableRow = $('table').find('tr:last');
  //var newTableRowName = tableRow.find('td').eq(0).text(); // set text = formVal variables on "submit"
  var newTableRowCategory, newTableRowPrice, newTableRowQty, newTableRowTotalPrice;

$(document).ready(function() {

$('#myTabs a').click(function (event) {
  event.preventDefault()
  $(this).tab('show')
})

$('.categoryBox').on('click', 'button', function(event) {
  event.preventDefault();
console.log( $(this).val() );
  $('#category').val( $(this).val() );

})

var tableData = [];
// take form values, put them into table tr elements
$('#addItemButton').on('click', function(event) {
  event.preventDefault()
  // declare variables for form inputs
  var itemNameVal = $('#itemName').val();
  var itemPriceVal = $('#itemPrice').val();
  var itemQtyVal = $('#itemQty').val();
  var categoryVal = $('#category').val();
  function tableTotalPrice(num1, num2) {
    return num1 * num2;
  }

  var thisRow = [];

tableRow.find('td').eq(0).text(categoryVal);
  newTableRowCategory = tableRow.find('td').eq(0).text();
tableRow.find('td').eq(1).text(itemNameVal);
  newTableRowName = tableRow.find('td').eq(1).text();
tableRow.find('td').eq(2).text(itemPriceVal);
  newTableRowPrice = tableRow.find('td').eq(2).text();
tableRow.find('td').eq(3).text(itemQtyVal);
  newTableRowQty = tableRow.find('td').eq(3).text();

tableRow.find('td').eq(4).text(tableTotalPrice(itemPriceVal, itemQtyVal));  //  calls function to set total price in table
  newTableRowTotalPrice = tableRow.find('td').eq(4).text();

console.log('category row value = ' + newTableRowCategory);

thisRow = [newTableRowCategory, newTableRowName, newTableRowPrice, newTableRowQty, newTableRowTotalPrice];  //  get all current row data into one array
console.log( 'thisRow = ' + thisRow);

tableData.push(thisRow);  //  build array of all table row data
console.log('tableData index 0 = ' + tableData[0] + "  tableData index 1 = " + tableData[1]);

var nextTableRow = $('<tr><td></td><td></td><td></td><td></td><td></td></tr>');  // create new table row and put it in a variable
$('tbody').append(nextTableRow);  // append new blank row
tableRow = $('table').find('tr:last');  // reassign tableRow to current last row

})





//json object




});
