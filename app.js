
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
var $userFrank = $('#userName option').eq(1).val();
console.log($userFrank);
var $userSara = $('#userName option').eq(2).val();



// declare variables for table elements
var tableRow = $('table').find('tr:last');
  //var newTableRowName = tableRow.find('td').eq(0).text(); // set text = formVal variables on "submit"
  var newTableRowCategory, newTableRowPrice, newTableRowQty, newTableRowTotalPrice;

$(document).ready(function() {

//  user login event


//  category box population from user data

$('#userName').on('change', function (event) {
  event.preventDefault();
  user = $('#userName').val();
                    console.log(user);
  for(i=0;i < 12; i++) {
    if(user == $userFrank) {
      $('.categoryBox').find('button').eq(i).val(userFrankCategories[i]);
      $('.categoryBox').find('button').eq(i).text(userFrankCategories[i]);
      // console.log('franks categories...' + userFrankCategories[i]);
      // console.log(' current categories ' + $('.categoryBox').find('button').eq(i).val());
      $('#comparison').find('.category').eq(i).text(userFrankCategories[i])

    } else if(user == $userSara) {
      $('.categoryBox').find('button').eq(i).val(userSaraCategories[i]);
      $('.categoryBox').find('button').eq(i).text(userSaraCategories[i]);

      $('#comparison').find('.category').eq(i).text(userSaraCategories[i]);
    } else {
      $('.categoryBox').find('button').eq(i).val(guestCategories[i]);
      $('.categoryBox').find('button').eq(i).text(guestCategories[i]);

      $('#comparison').find('.category').eq(i).text(guestCategories[i]);
    }
  }
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
  categoryBox11= $('.categoryBox').find('button').eq(10).val();
  categoryBox12 = $('.categoryBox').find('button').eq(11).val();

  console.log(categoryBox1);
});

//  populate totals section on html page



//  category selection for form input

$('.categoryBox').on('click', 'button', function(event) {
  event.preventDefault();
// console.log( $(this).val() );
  $('#category').val( $(this).val() );

});

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

   console.log('category row value = ', newTableRowCategory);

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

console.log('cat1 total ',cat1Total, cat2Total);

//  event handler for crunch button
//var tableDataLength = tableData.length;

$('#crunch').on('click', function() {
// console.log('tableData outside its build function ', tableData);
// console.log('tableData first item in crunch function ', tableData[0][0]);
// console.log('cateogryBox1 ', categoryBox1);
// console.log('tableDataLength = ', tableDataLength);
// console.log('tableData length = ', tableData.length);
  for (i=0; i < tableData.length; i++) {
  //  console.log('tableData in crunch function ', tableData[i][0]);

    if(tableData[i][0] == categoryBox1) {
      cat1Total += tableData[i][4];
    } else if(tableData[i][0] == categoryBox2) {
      cat2Total += tableData[i][4];
    } else if(tableData[i][0] == categoryBox3) {
      cat3Total += tableData[i][4];
    } else if(tableData[i][0] == categoryBox4) {
      cat4Total += tableData[i][4];
    } else if(tableData[i][0] == categoryBox5) {
      cat5Total += tableData[i][4];
    } else if(tableData[i][0] == categoryBox6) {
      cat6Total += tableData[i][4];
    } else if(tableData[i][0] == categoryBox7) {
      cat7Total += tableData[i][4];
    } else if(tableData[i][0] == categoryBox8) {
      cat8Total += tableData[i][4];
    } else if(tableData[i][0] == categoryBox9) {
      cat9Total += tableData[i][4];
    } else if(tableData[i][0] == categoryBox10) {
      cat10Total += tableData[i][4];
    } else if(tableData[i][0] == categoryBox11) {
      cat11Total += tableData[i][4];
    } else if(tableData[i][0] == categoryBox12) {
      cat12Total += tableData[i][4];
    }

  }
console.log(cat1Total, cat2Total, cat3Total, cat4Total, cat5Total, cat6Total, cat7Total, cat8Total, cat9Total, cat10Total, cat11Total, cat12Total);
});


// tabs feature

$('#myTabs a').click(function (event) {
  event.preventDefault()
  $(this).tab('show')
})




});
