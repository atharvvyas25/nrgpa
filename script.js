const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});



// function([string1, string2],target id,[color1,color2])    
consoleText(['NR Group of Pawan Associates', 'Building Trust Since 1974 ', 'Serving Over 1000+ Happy Clients'], 'text',['#5a2675']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 500)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 80)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 100)
}


// main 
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateDots();
}, 4000); // Change slide every 4 seconds

updateDots();




// swiper.js 
const swiper = new Swiper('.swiper-container', {
    // Enable touch gestures
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true, // Shows a grabbing cursor
    slidesPerView: 1, // Shows one slide at a time
    spaceBetween: 20, // Space between slides
    centeredSlides: true, // Center the active slide
    autoplay: false, // Disable autoplay for manual sliding
    speed:600,
    touchRatio: 1, // Sensitivity of touch events, 1 is the default
    resistanceRatio: 0.85, // Resistance when swiping beyond the boundaries
});


// main 