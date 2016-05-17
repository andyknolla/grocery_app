$(document).ready(function() {

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('.catButton').on('click', function() {
  var dirka = $('table').find('tr:first');
  var itemCategory = $('table:last-child:nth-child(2)')
  var itemPrice = $('table:last-child:nth-child(3)')
  var itemQty = $('table:last-child:nth-child(4)')

})









});
