/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 2,
        "density": {
          "enable": true,
          "value_area":2
        }
      },
      "shape": {
        "type": "image",
        "image": {
          "src": ["Images/flower1.png","Images/flower2.png","Images/flower3.png"],
          "type" : "png",
          "width": 50,
          "height": 50
        }
      },
      "size": {
        "value": 50,
        "random": true
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "left",
        "random": true,
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "onhover": {
          "enable": false,
        },
        "resize": true
      },
    },
  }
);
particlesJS('particles-js2',
  {
    "particles": {
      "number": {
        "value": 1,
        "density": {
          "enable": true,
          "value_area": 1
        }
      },
      "shape": {
        "type": "image",
        "image": {
          "src": ["Images/flower1.png","Images/flower2.png","Images/flower3.png"],
          "type" : "png",
          "width": 50,
          "height": 50
        }
      },
      "size": {
        "value": 50,
        "random": true
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "right",
        "random": true,
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "onhover": {
          "enable": false,
        },
        "resize": true
      },
    },
  }
);
