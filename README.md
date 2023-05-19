# TxtAnime.js
It is a JavaScript library, which contains many beautiful and free text effects.

<br>

<h2><a href="https://mohamedfrindi.github.io/TxtAnime.js/">Demo</a></h2>

<br>

# Installation

<br>

### npm
````
npm install txtanime.js
````
````javascript
// ES 2015
import { TxtAnime } from "txtanime.js";

// CommenJs
const { TxtAnime } = require('txtanime.js');
````

<br>

#### CDN
````html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/mohamedfrindi/TxtAnime.js/dist/TxtAnime.js"></script>
````

<br>

##### Put the JS file at the end of the <code>body</code> tag:
````html
<script type="text/javascript" src="dist/TxtAnime.js"></script>
<!-- or -->
<script type="text/javascript" src="dist/TxtAnime.min.js"></script>
````

<br>

##### Add the element you want to apply the effect to
````html
<body>

    <h2 class="element">Animation</h2>
    <!-- or -->
    <div class="element"></div>

</body>


<script type="text/javascript" src="dist/TxtAnime.min.js"></script>
<script>

    new TxtAnime(".element" , {
        // options
    })

</script>
````

<br>

##### To run TxtAnime.Js just add the following code in your <code>script</code>:
````javascript
new TxtAnime(".element" , {
    // options
})
````

<br>
<br>

## Options
````javascript
new TxtAnime('.element',{

    // selector element
    // Accepts a string or selector element
    // You can specify a class directly || new TxtAnime('.element // .elements')
    // Or you can add a javascript selector  || document.querySelector('.element') or document.querySelectorAll('.elements')


  effect : 'txt-an-1',
  // Select the effect you want
  // Accepts 10 options : txt-an-1 <== 1-9
  // Data Type : string   
  
  delayStart: 0,
  // Determining the start time of the effect
  // delayStart : 0s | second
  // Data Type : number  
  
  delay : 0.05,
  // Determine when to move between items
  // delay : 0.5s | second
  // Data Type : number  
  
  duration: 0.7,
  // Determine the speed of effect
  // duration : 0.7s | second
  // Data Type : number  
  
  repeat : true,
  // To repeat the effect infinitely
  // accept 2 options : true | false
  // Data Type : boolean  
  
  repeatDelay : 2,
  // Replay the effect after
  // repeatDelay : 2s | second
  // Data Type : number  

  overlayBackground : "#004",
  // background color overlay
  // Accepts option : color
  // Data Type : string

  text : ['Go' , 'To' , 'Site'],
  // The words you want to apply the effect to
  // Accepts option : array 
  // Data Type : array  

});

// ----------------------------------------------------------------
// default options ------------------------------------------------

// txt-an-1
new TxtAnime(".element" , {
    effect: "txt-an-1",
    delayStart: 0,
    delay: 0.07,
    duration: 0.7,
    repeat: true,
    repeatDelay: 1,
})

// txt-an-2
new TxtAnime(".element" , {
    effect: "txt-an-2",
    delayStart: 0,
    delay: 0.5,
    duration: 0.7,
    repeat: true,
    repeatDelay: 3,
})

// txt-an-3
new TxtAnime(".element" , {
    effect: "txt-an-3",
    delayStart: 0,
    delay: 0.1,
    duration: 0.1,
    repeat: true,
    repeatDelay: 2,
})

// txt-an-4
new TxtAnime(".element" , {
    effect: "txt-an-4",
    delayStart: 0,
    delay: 0,
    duration: 1,
    repeat: true,
    text: ["Go", "To", "Site"],
})

// txt-an-5
new TxtAnime(".element" , {
    effect: "txt-an-5",
    delayStart: 0,
    delay: 0,
    duration: 1,
    repeat: true,
    text: ["Go", "To", "Site"],
})

// txt-an-6
new TxtAnime(".element" , {
    effect: "txt-an-6",
    delayStart: 0,
    delay: 0.07,
    duration: 2,
    repeat: true,
    repeatDelay: 3,
    overlayBackground: "#03a9f4",
})

// txt-an-7
new TxtAnime(".element" , {
    effect: "txt-an-7",
    delayStart: 0,
    delay: 0.05,
    duration: 0.07,
    repeat: true,
    text: ["Try", "Free", "Typed"],
})

// txt-an-8
new TxtAnime(".element" , {
    effect: "txt-an-8",
    delayStart: 0,
    delay: 0.05,
    duration: 0.02,
    repeat: true,
    text: ["Designer", "Developer" , "Freelancer"],
})

// txt-an-9
new TxtAnime(".element" , {
    effect: "txt-an-9",
    delayStart: 0,
    delay: 1,
    duration: 0.5,
    repeat: true,
    text: ["Desinger", "Developer", "Freelancer"],
})

````