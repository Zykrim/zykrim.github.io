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
        "value": 1.5,
        "density": {
          "enable": true,
          "value_area":1
        }
      },
      "shape": {
        "type": "image",
        "image": {
          "src": ["Images/pumpakin.png","Images/bone.png","Images/leaf.png"],
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
        "direction": "bottom",
        "random": true,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
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
        "value": 1.5,
        "density": {
          "enable": true,
          "value_area": 1
        }
      },
      "shape": {
        "type": "image",
        "image": {
          "src": ["Images/pumpakin.png","Images/bone.png","Images/leaf.png"],
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
        "direction": "bottom",
        "random": true,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
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
