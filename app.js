const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// ---------------------------/


$(document).ready(function() {
  onScroll();
});

function onScroll() {   
  var lastScrollTop, $bar = $('nav') , height = $bar.height(), 
      $window = $(window), offset = 10;

  $window.on('scroll',function()  {       
      var scrollTop = $window.scrollTop();
      $bar.css({ top: scrollTop > lastScrollTop && scrollTop > offset ? -height : 0 });
      lastScrollTop = scrollTop; 
  });     
}