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


// Template Page Tabs */ 

function openPage(pageName,elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




// Template Image Slideshow //

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


// Work Page Image Filter //

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("grid__item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}


// Work Page Tabs //

function toggleWork(evt, cityName) {
  /*
  the reason you were having the issue with this is because it first sets it to display none, and only set it
  to display block if it is already none, which is why you had to click twice.  First click set it to none,
  second click set it to block.  There are two ways to fix this, the lazy way which was adding inline style=display:none to the div, which is what I did, or rewrite the function.

  Also, you can change cityName to be literally any variable you want, as long as its consistent
  If this is homework or something, you should change the variable so its not as obvious that you copy/pasted the code from w3 schools.  I know because Ive copy pasted code from the same tutorial in the past lmao

  I ended
  */
  var i, workcontent, worklink;
    workcontent = document.getElementsByClassName("workcontent");
   
    worklink = document.getElementsByClassName("worklink");
    for (i = 0; i < worklink.length; i++) {
        worklink[i].className = worklink[i].className.replace("none", "");
    }
    var prev_state_display = document.getElementById(cityName).style.display;
    
    for (i = 0; i < workcontent.length; i++) {
        workcontent[i].style.display = "active";
    }
    
    if( prev_state_display === "none"){
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    } else {
        document.getElementById(cityName).style.display = "none";
        evt.currentTarget.className.replace(" active", "");
    }
}

function toggleTabs(evt, id){

	//well, I wasn't originally going to rewrite the function, but it was easier to re-write it than fix the other one

	//this part closes tab A if you click tab B while tab A is open
	//it will also remove the "active" from the class so it doesnt stay highlighted when you click the other tab
	//this is gonna be the laziest way possible

	let workLink = document.getElementsByClassName("worklink")

	for (let i = 0; i < workLink.length; i++){
		if (workLink[i].className === "worklink active"){
			workLink[i].className = "worklink"
		}
	}

	function otherTab(id){
		console.log(id)
		if (id === "yearLevel"){
			let val = "workType"
			console.log(val)
			return val
		}
		if (id === "workType"){
			let val = "yearLevel"
			console.log(val)
			return val
		}
	}
	let targetClass = document.getElementById(id).style
	let otherId = otherTab(id)
	let otherClass = document.getElementById(otherId).style
	
	//this part opens/closes the tabs
    if (targetClass.display === "none") {
		otherClass.display = "none"
        targetClass.display = "block"
        evt.currentTarget.className += " active"
    } else if (targetClass.display === "block") {
		otherClass.display = "none"
    	targetClass.display = "none"
    	evt.currentTarget.className = "worklink"
    } else {
    	//this is a lazy but relatively safe implementation.  Normally in this block youd display an error
    	//but it shouldnt break and I'm lazy about adding an error to your html
    	console.log("youve got a big problem")
  }
}




