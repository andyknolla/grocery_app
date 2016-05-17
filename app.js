
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

// declare variables for form inputs
var itemNameVal = $('#itemName').val();
var itemPriceVal = $('#itemPrice').val();
var itemQtyVal = $('#itemQty').val();
var categoryVal = $('#category').val();

// declare variables for table elements
var tableRow = $('table').find('tr:last');
  var newTableRowName = tableRow.find('td').eq(0).text();
  var newTableRowCategory = tableRow.find('td').eq(1).text();
  var newTableRowPrice = tableRow.find('td').eq(2).text();
  var newTableRowQty = tableRow.find('td').eq(3).text();
  var newTableRowTotalPrice = function() {
    return newTableRowPrice * newTableRowQty;
  }

$(document).ready(function() {

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})


// take form values, put them into table tr elements
$('#addItemButton').on('click', function() {
  var $dirka = $('table').find('tr:first').children()[0]; // returns name tr


  var itemCategory = $('table:last-child:nth-child(2)')
  var itemPrice = $('table:last-child:nth-child(3)')
  var itemQty = $('table:last-child:nth-child(4)')

})





//json object




});
