
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


var user;
var guestdata, frankData, saraData;
var $userGuest = $('#userName option').eq(0).val();
var $userFrank = $('#userName option').eq(1).val();
console.log($userFrank);
var $userSara = $('#userName option').eq(2).val();

// declare variables for table elements
var tableRow = $('table').find('tr:last');
var newTableRowCategory, newTableRowPrice, newTableRowQty, newTableRowTotalPrice;
  //var newTableRowName = tableRow.find('td').eq(0).text(); // set text = formVal variables on "submit"

$(document).ready(function() {

// retrieve api data for guest user
$.get('https://g25-smart-cart.herokuapp.com/users/guest', function(data) {
  guestData = data.data;
});
//  user login event/

  $('#userName').on('change', function (event) {
    event.preventDefault();
    var optionSelected = $('option:selected').val();
      if (optionSelected === $userGuest) {
        $.get('https://g25-smart-cart.herokuapp.com/users/guest', function(data) {
          guestData = data.data;
        })
      } else if (optionSelected === $userFrank) {
        $.get('https://g25-smart-cart.herokuapp.com/users/frank', function(data) {
          frankData = data.data;
        })
       } else if (optionSelected === $userSara) {
          $.get('https://g25-smart-cart.herokuapp.com/users/sara', function(data) {
            saraData = data.data;
            console.log(saraData);
          })
        }


    user = $('#userName').val();
    for(i=0;i < 12; i++) {
      if(user == $userFrank) {
        $('.categoryBox').find('button').eq(i).val( frankData[i]);
        $('.categoryBox').find('button').eq(i).text(frankData[i]);

        $('#comparison').find('.category').eq(i).text(frankData[i]);
      } else if(user == $userSara) {
        $('.categoryBox').find('button').eq(i).val(saraData[i]);
        $('.categoryBox').find('button').eq(i).text(saraData[i]);

        $('#comparison').find('.category').eq(i).text(saraData[i]);
      } else {
        $('.categoryBox').find('button').eq(i).val(guestData[i]);
        $('.categoryBox').find('button').eq(i).text(guestData[i]);

        $('#comparison').find('.category').eq(i).text(guestData[i]);
      }
    }
        //  category box population from user data
    categoryBox1 = $('.categoryBox').find('button').eq(0).val();
    categoryBox2 = $('.categoryBox').find('button').eq(1).val();
    categoryBox3 = $('.categoryBox').find('button').eq(2).val();
    categoryBox4 = $('.categoryBox').find('button').eq(3).val();
    categoryBox5 = $('.categoryBox').find('button').eq(4).val();
    categoryBox6 = $('.categoryBox').find('button').eq(5).val();
    categoryBox7 = $('.categoryBox').find('button').eq(6).val();
    categoryBox8 = $('.categoryBox').find('button').eq(7).val();
    categoryBox9 = $('.categoryBox').find('button').eq(8).val();
    categoryBox10 = $('.categoryBox').find('button').eq(9).val();
    categoryBox11 = $('.categoryBox').find('button').eq(10).val();
    categoryBox12 = $('.categoryBox').find('button').eq(11).val();
  });




//  category selection for form input

$('.categoryBox').on('click', 'button', function(event) {
  event.preventDefault();
// console.log( $(this).val() );
  $('#category').val( $(this).val() );

});

var tableData = [];
var tableRunningTotal = 0;
// take form values, put them into table tr elements
$('#addItemButton').on('click', function(event) {
  event.preventDefault()
  // declare variables for form inputs
  var itemNameVal = $('#itemName').val();
  var itemPriceVal = $('#itemPrice').val();
  var itemQtyVal = $('#itemQty').val();
  var categoryVal = $('#category').val();
  function tableTotalPrice(num1, num2) {
    return Number(num1 * num2);
  }

tableRow.find('td').eq(0).text(categoryVal);
  newTableRowCategory = tableRow.find('td').eq(0).text();
tableRow.find('td').eq(1).text(itemNameVal);
  newTableRowName = tableRow.find('td').eq(1).text();
tableRow.find('td').eq(2).text(itemPriceVal);
  newTableRowPrice = tableRow.find('td').eq(2).text();
tableRow.find('input').val(itemQtyVal);
  newTableRowQty = tableRow.find('input').val();
tableRow.find('td').eq(4).text(tableTotalPrice(itemPriceVal, itemQtyVal));
  newTableRowTotalPrice = Number(tableRow.find('td').eq(4).text());

tableRunningTotal += newTableRowTotalPrice;
$('#runningTotal span').text(tableRunningTotal);
   console.log('tableRunningTotal =', tableRunningTotal);

var thisRow = [newTableRowCategory, newTableRowName, newTableRowPrice, newTableRowQty, newTableRowTotalPrice];  //  get all current row data into one array
   console.log( 'thisRow = ', thisRow);

tableData.push(thisRow);  //  build array of all table row data
//   console.log('tableData index 0 = ' + tableData[0] + "  tableData index 1 = " + tableData[1]);
console.log('tableData = ', tableData);


var nextTableRow = $('<tr><td></td><td></td><td></td><td><input type="text" class="tableItemQty"></td><td></td></tr>');  // create new table row and put it in a variable
$('tbody').append(nextTableRow);  // append new blank row
tableRow = $('table').find('tr:last');  // reassign tableRow to current last row

})  // end of category selection for form input


//  event handler for qty change in table
var tableDataLength = tableData.length;

var cat1Total = 0;
var cat2Total = 0;
var cat3Total = 0;
var cat4Total = 0;
var cat5Total = 0;
var cat6Total = 0;
var cat7Total = 0;
var cat8Total = 0;
var cat9Total = 0;
var cat10Total = 0;
var cat11Total = 0;
var cat12Total = 0;
  var grandTotal = 0;

$('#crunch').on('click', function() {
  for (i=0; i < tableData.length; i++) {
    if(tableData[i][0] == categoryBox1) {
      cat1Total += tableData[i][4];
      grandTotal += tableData[i][4];
    } else if(tableData[i][0] == categoryBox2) {
      cat2Total += tableData[i][4];
      grandTotal += tableData[i][4];
    } else if(tableData[i][0] == categoryBox3) {
      cat3Total += tableData[i][4];
      grandTotal += tableData[i][4];
    } else if(tableData[i][0] == categoryBox4) {
      cat4Total += tableData[i][4];
      grandTotal += tableData[i][4];
    } else if(tableData[i][0] == categoryBox5) {
      cat5Total += tableData[i][4];
      grandTotal += tableData[i][4];
    } else if(tableData[i][0] == categoryBox6) {
      cat6Total += tableData[i][4];
      grandTotal += tableData[i][4];
    } else if(tableData[i][0] == categoryBox7) {
      cat7Total += tableData[i][4];
      grandTotal += tableData[i][4];
    } else if(tableData[i][0] == categoryBox8) {
      cat8Total += tableData[i][4];
      grandTotal += tableData[i][4];
    } else if(tableData[i][0] == categoryBox9) {
      cat9Total += tableData[i][4];
      grandTotal += tableData[i][4];
    } else if(tableData[i][0] == categoryBox10) {
      cat10Total += tableData[i][4];
      grandTotal += tableData[i][4];
    } else if(tableData[i][0] == categoryBox11) {
      cat11Total += tableData[i][4];
      grandTotal += tableData[i][4];
    } else if(tableData[i][0] == categoryBox12) {
      cat12Total += tableData[i][4];
      grandTotal += tableData[i][4];
    }
  }
// apply total amounts for each category into html
var $totalSpan = $('#comparison').find('.total');
$totalSpan.eq(0).text(cat1Total);
$totalSpan.eq(1).text(cat2Total);
$totalSpan.eq(2).text(cat3Total);
$totalSpan.eq(3).text(cat4Total);

$totalSpan.eq(4).text(cat5Total);
$totalSpan.eq(5).text(cat6Total);
$totalSpan.eq(6).text(cat7Total);
$totalSpan.eq(7).text(cat8Total);

$totalSpan.eq(8).text(cat9Total);
$totalSpan.eq(9).text(cat10Total);
$totalSpan.eq(10).text(cat11Total);
$totalSpan.eq(11).text(cat12Total);

// function for % of total
  function percentTotal(categoryTotal, total) {
    return Math.round((categoryTotal / total) * 100);
  }
//  apply % values to html
var $percentSpan = $('#comparison').find('.percentage');
$percentSpan.eq(0).text(percentTotal(cat1Total, grandTotal));
$percentSpan.eq(1).text(percentTotal(cat2Total, grandTotal));
$percentSpan.eq(2).text(percentTotal(cat3Total, grandTotal));
$percentSpan.eq(3).text(percentTotal(cat4Total, grandTotal));

$percentSpan.eq(4).text(percentTotal(cat5Total, grandTotal));
$percentSpan.eq(5).text(percentTotal(cat6Total, grandTotal));
$percentSpan.eq(6).text(percentTotal(cat7Total, grandTotal));
$percentSpan.eq(7).text(percentTotal(cat8Total, grandTotal));

$percentSpan.eq(8).text(percentTotal(cat9Total, grandTotal));
$percentSpan.eq(9).text(percentTotal(cat10Total, grandTotal));
$percentSpan.eq(10).text(percentTotal(cat11Total, grandTotal));
$percentSpan.eq(11).text(percentTotal(cat12Total, grandTotal));
});  // end of crunch function

// function for % of total


// tabs feature

  $('#myTabs a').click(function (event) {
    event.preventDefault()
    $(this).tab('show')
  })
});
