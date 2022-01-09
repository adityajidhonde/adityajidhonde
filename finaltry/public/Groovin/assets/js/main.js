/**
* Template Name: Groovin - v4.7.0
* Template URL: https://bootstrapmade.com/groovin-free-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

let pyt="# Online Python compiler (interpreter) to run Python online\n\
# Write Python 3 code in this online editor and run it\n\
print(\"Hello world\")";

/*function god(){
  document.getElementById("code").innerHTML = "hello";
}*/
let lang="cpp";
let k=0;


//LANG DROPDOWN ONLY FOR PHONE-----------------

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function python() {
  lang="python";
  document.getElementById("fileName").innerHTML = "main.pyt";
  document.getElementById("fileNameForMobile").innerHTML = "main.pyt";
  editor.session.setMode("ace/mode/python");

}
function C(){
  lang="cpp";
  document.getElementById("fileName").innerHTML = "main.c";
  document.getElementById("fileNameForMobile").innerHTML = "main.c"; 
  editor.session.setMode("ace/mode/c_cpp");
}
function Cpp(){
  lang="cpp";
  document.getElementById("fileName").innerHTML = "main.cpp";
  document.getElementById("fileNameForMobile").innerHTML = "main.cpp";
  editor.session.setMode("ace/mode/c_cpp");
}
function Java(){
  lang="java";
  document.getElementById("fileName").innerHTML = "main.cpp";
  document.getElementById("fileNameForMobile").innerHTML = "main.cpp";
  editor.session.setMode("ace/mode/c_cpp");
}
function Vb(){
  lang="vb";
  document.getElementById("fileName").innerHTML = "main.cpp";
  document.getElementById("fileNameForMobile").innerHTML = "main.cpp";
  editor.session.setMode("ace/mode/vbscript");
}
var it=0;
function Dark_mode() {
  if(it==0){
    editor.setTheme("ace/theme/eclipse");it=1;
  }
  else{
    editor.setTheme("ace/theme/monokai");
    it=0;
  }
}


function CurlyBrac(){
  var txt=document.getElementById("code").value;
   document.getElementById("code").value=txt+"{}";
 }
 function SimpleBrac(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+"()";
  }
  function SquareBrac(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+"[]";
  }
  function Tab(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+"  ";
  }
  function DoubleQuotes(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+"\"\"";
  }
  function Colon(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+":";
  }
  function SemiColon(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+";";
  }
  function Add(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+"+";
  }
  function Subtract(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+"-";
  }
  function Multiply(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+"*";
  }
  function Divide(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+"/";
  }
  function Equal(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+"=";
  }
  function GreaterThan(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+">";
  }
  function LessThan(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+"<";
  }
  function Modulo(){
   var txt=document.getElementById("code").value;
    document.getElementById("code").value=txt+"%";
  }
 function syntax() {
   var x = document.getElementById("syntax_bar");
     if (x.style.display === "none") {
       x.style.display = "block";
     } else {
       x.style.display = "none";
     }
   //document.getElementById("syntax_bar").classList.toggle("show");
 }


//----------------------------------------------------------------

//----------INPUT BOX------------------
function inputBox() {
  var x = document.getElementById("inputBox");
  var y = document.getElementById("codeBox");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display ="none";
    document.getElementById("inputButton").innerHTML="<-CODE";
  } else {
    x.style.display = "none";
    y.style.display ="block";
    document.getElementById("inputButton").innerHTML="INPUT";
  }
}
//-----------------------------------------

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  // const portfolioLightbox = GLightbox({
  //   selector: '.portfolio-lightbox'
  // });

  /**
   * Portfolio details slider
   */
  // new Swiper('.portfolio-details-slider', {
  //   speed: 400,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   }
  // });

})()