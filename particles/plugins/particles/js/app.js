var directionScroll = 'none';
var opacityParticles = 0.5;
let randomCoulour = "#fff";

configParticles();

function configParticles (){
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 1000/* 800 */ } },
      color: { value: '#4800ff' /* "#ffffff" */ },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: opacityParticles,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 1.5,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,/* 150 */
        color: '#4800ff'/* "#ffffff" */ ,
        opacity: opacityParticles - 0.4,
        width: 1,/* 1 */
      },
      move: {
        enable: true,
        speed: 1,/* 6 */
        direction: "none",/* none */
        random: true,/* false */
        straight: false,
        out_mode: "out",
        bounce: true,
        attract: { enable: true, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 150, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
}

/* directionScroll = '';

randomizeColour = [
  '#5be098', 
  '#0090ff', 
  '#4800ff', 
  '#3201b1',  
  '#7e00ff',
  '#00ffb4',
  '#ff0054',
  '#ffffff',
  '#ffffff',
  '#ffffff',  
  '#ffffff',
  '#3600ff',
  '#00ffd2',
  '#ffae00',
  '#ffd200',
  ]; 


$(function(){

  setInterval(() => {
    const indexAnimationParticle = Math.floor(Math.random() * 6) + 1
    randomCoulour  = randomizeColour[indexAnimationParticle]
    configParticles();
  }, 6000);

});  */

  {/* let lastScrollTop = 0;

  window.addEventListener("scroll", function(){ 
    let st = window.pageYOffset || document.documentElement.scrollTop; 
    
    speedScroll = 10;
    configParticles();

    if (st > lastScrollTop){
        // down scroll
        directionScroll = "top";
        configParticles();

        $(window).scroll(function() { 
            clearTimeout($.data(this, 'scrollTimer')); 
            $.data(this, 'scrollTimer', setTimeout(function() { 
            // do something 
            speedScroll = 1;
            configParticles();

            directionScroll = "none";
            configParticles();
            
          }, 250)); 
        });



    } else {
        // up scroll 
        

    }
    lastScrollTop = st <= 0 ? 0 : st;
    
  }, false); */
  }



/* STATS */
/* var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update); */
