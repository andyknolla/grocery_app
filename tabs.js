// on choice of username...
var userItems;

// populate category tabs
$('#userName').on('change', function (event) {
if(user == $userFrank) {
  for(i=0;i < 12; i++){
   $('#tabs ui').find('li').eq(i).text('Object.keys(userFrank.categories)');
})

//  populate catetory tab PANES
$('#userName').on('change', function (event) {
  if(user == $userFrank) {
    for(i=0;i < 12; i++) {

      // need foreach???? to access each property in a category object??


      var thisCategory = userFrank.items[i]; // for each category within userStuff
      // do something for the tab here
      for(index=0;index < Object.keys(thisCategory).length;index++) { //do this for each item in that category
        //insert li element into ul

      }
    }
  }
});
//
$('#tabs ui').find('li').eq(i).text('Object.keys(userFrank.categories)');
