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
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 150
        }
      },
      "shape": {
        "type": "image",
        "image": {
          "src": ["Images/snow1.png","Images/snow2.png","Images/snow3.png"],
          "type" : "png",
          "width": 50,
          "height": 50
        }
      },
      "size": {
        "value": 35,
        "random": true
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "bottom-left",
        "random": true,
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onclick": {
          "enable": false,
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
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 150
        }
      },
      "shape": {
        "type": "image",
        "image": {
          "src": ["Images/snow1.png","Images/snow2.png","Images/snow3.png"],
          "type" : "png",
          "width": 50,
          "height": 50
        }
      },
      "size": {
        "value": 35,
        "random": true
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "bottom-left",
        "random": true,
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onclick": {
          "enable": false,
        },
        "onhover": {
          "enable": false,
        },
        "resize": true
      },
    },
  }
);
