
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
  var newTableRowCategory = tableRow.find('td').eq(1).text();
  var newTableRowPrice = tableRow.find('td').eq(2).text();
  var newTableRowQty = tableRow.find('td').eq(3).text();
  var newTableRowTotalPrice;

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


// take form values, put them into table tr elements
$('#addItemButton').on('click', function(event) {
  event.preventDefault()
  // declare variables for form inputs
  var itemNameVal = $('#itemName').val();
  var itemPriceVal = $('#itemPrice').val();
  var itemQtyVal = $('#itemQty').val();
  var categoryVal = $('#category').val();

console.log(itemNameVal);
tableRow.find('td').eq(0).text(categoryVal);
tableRow.find('td').eq(1).text(itemNameVal);
tableRow.find('td').eq(2).text(itemPriceVal);
tableRow.find('td').eq(3).text(itemQtyVal);

newTableRowTotalPrice = function(num1, num2) {
  return num1 * num2;
}
console.log(newTableRowTotalPrice);
tableRow.find('td').eq(4).text(newTableRowTotalPrice(itemPriceVal, itemQtyVal));

var nextTableRow = $('<tr><td>dirka</td><td>dirka</td><td></td><td></td><td></td></tr>');  // create new table row and put in variable
$('tbody').append(nextTableRow);  // append new blank row
tableRow = $('table').find('tr:last');  // reassign tableRow to current last row



})





//json object




});
