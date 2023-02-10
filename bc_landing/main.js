// When the user clicks on div, open the popup
/*function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }*/

  $ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }