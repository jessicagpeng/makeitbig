$(document).ready(function(){
	/*
	 * ************
	 * Toggle class 
	 * ************
	 *
	 * When a certain element is clicked, a class is added to (or removed from) an html element.
	 * This function works well for a button that triggers a mobile menu to appear.
	*/
	
	/* Click function to add a class */
	$('.js-menu-icon').click( function() {
		$('body').toggleClass('show-menu');
	});

	/*
	Explanation of what the code above does:
	- When an element with the class 'js-menu-icon' is clicked
	- Then add the class 'show-menu'
	- to the element 'body'
	*/

});



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}





var slideIndex = [1,1,2,3];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}






