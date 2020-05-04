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