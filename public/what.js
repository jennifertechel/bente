/* Buttons for Hidden Menu */

document.querySelector(".bi-list").addEventListener("click", showMenu);
function showMenu() {
    document.querySelector(".hidden-menu").style.visibility = "visible";
}

document.querySelector(".bi-x").addEventListener("click", hideMenu);
function hideMenu() {
    document.querySelector(".hidden-menu").style.visibility = "hidden";
}


document.querySelector(".bi-chevron-compact-down").addEventListener("click", nextPage);
function nextPage() {
    document.querySelector("#two").scrollIntoView();    
}


console.log(window.innerHeight);

/* End Buttons for Hidden Menu */


/* Display and fade Navbar */

const windowHeight = window.innerHeight;
const trigger = (windowHeight-80)*-1 + "px"; 
            
console.log(trigger); 

var observerOptions = {
root: null,
rootMargin: `0px 0px ${trigger} 0px`,
threshold: 0.7
};

function observerCallback(entries, observer) {
entries.forEach(entry => {

if (entry.isIntersecting) {
    entry.target.classList.replace('navNone', 'fadeIn');
};
if (!entry.isIntersecting) {
    entry.target.classList.replace('fadeIn', 'navNone'); 
}

});
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
var fadeElements = document.querySelectorAll('.top-menu');
fadeElements.forEach(el => observer.observe(el));


console.log(observer);

/* End Display and fade Navbar */ 

/* Hover-function for Guide */

document.querySelectorAll(".slideshow-content .col").forEach(box => {
  var target = box.getAttribute("target");
  box.addEventListener("mouseover", function (event) {
    var selector = ".slideshow-viewport .media img:nth-child("+target+")";
    var img = document.querySelector(selector)
    
    document.querySelectorAll(".slideshow-viewport .media img").forEach(image => {
      image.classList.add("hide");
    });
    img.classList.remove("hide");

    document.querySelectorAll(".slideshow-content .col").forEach(hov => {
      hov.classList.remove("hover");
    });
    box.classList.add("hover");
  })
});

/* End Hover-function for Guide */

/* Library Vertical Slideshow */


document.querySelectorAll(".vert-slide").forEach(slider => {
  var slides = slider.querySelectorAll(".slides .slide");
  var topSlide = slider.querySelector(".top-slide")
  var currentSlide = slider.querySelector(".current-slide")
  var bottomSlide = slider.querySelector(".bottom-slide")
  var currentSlideIndex = 0;

  slider.querySelectorAll(".controls .bi").forEach(control => {
    control.addEventListener("click", function () {
      var direction = control.getAttribute("direction")
      currentSlideIndex += parseInt(direction)
      
      currentSlideIndex = modulo(slides, currentSlideIndex);
      var topSlideIndex = modulo(slides, currentSlideIndex+1)      
      var bottomSlideIndex = modulo(slides, currentSlideIndex-1)

      vertSlideReplaceSlideContent(currentSlide, slides[currentSlideIndex]);
      vertSlideReplaceSlideContent(topSlide, slides[topSlideIndex]);
      vertSlideReplaceSlideContent(bottomSlide, slides[bottomSlideIndex]);
      
      slider.classList.add("animating"+ direction)
      setTimeout(function () {
        slider.classList.remove("animating"+ direction)  
      }, 1000)
      
    })
  });

  vertSlideReplaceSlideContent(currentSlide, slides[0]);
  vertSlideReplaceSlideContent(topSlide, slides[1]);
  vertSlideReplaceSlideContent(bottomSlide, slides[slides.length-1]);
});

function vertSlideReplaceSlideContent(targetViewSlide, contentSlide){
 
  targetViewSlide.innerHTML = contentSlide.innerHTML;
}

function modulo(list, index) {
  if (index<0) {
    return list.length-1
  }
  if (index>=list.length) {
    return 0
  }
  return index
}

/* End Library Vertical Slideshow */