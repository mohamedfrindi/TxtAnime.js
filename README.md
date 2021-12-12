# TxtAnime.js
It is a JavaScript library, which contains many beautiful and free text effects.

<br>

<h2><a href="https://mohamedfrindi.github.io/TxtAnime.js/">Demo</a></h2>

<br>

# Installation

<br>

### npm
````
npm install txtanime.js --save
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
<script type="text/javascript" src="dist/TxtAnime-min.js"></script>
````

<br>

##### Add the element you want to apply the effect to
````html
<body>

    <!-- In case you want to implement txt.animate() -->
    <h2 class="element">Animation</h2>

    <!-- In case you want to implement txt.scale() -->
    <div class="txt"></div>

    <!-- In case you want to implement txt.overlay() -->
    <h2 class="element">Animation</h2>

</body>


<script type="text/javascript" src="dist/TxtAnime-min.js"></script>
<script>

    let txt = new TxtAnime()

    txt.animate('.element' , {
        // options
    })
    // or 
    txt.scale('.txt' , {
        // options
    })
    // or 
    txt.overlay('.txt' , {
        // options
    })

</script>
````

<br>

##### To run TxtAnime.Js just add the following code in your <code>script</code>:
````javascript
let txt = new TxtAnime()


txt.animate('.element' , {
    // options
})
// or
txt.scale('.element' , {
    // opions
})
// or
txt.overlay('.element' , {
    // opions
})
````

<br>
<br>

## Options
````javascript
txt.animate('element',{

    // selector element
    // Accepts a string or selector element
    // You can specify a class directly || txt.animate('.element // .elements')
    // Or you can add a javascript selector  || document.querySelector('.element') or document.querySelectorAll('.elements')


  effect : 'tx-an-1',
  // Select the effect you want
  // Accepts 10 options : tx-an-1 <== 1-10
  // default option : tx-an-1
  
  delayStart: 0,
  // Determining the start time of the effect
  // default option : 0
  // delayStart : 0s | second
  
  delay : 0.05,
  // Determine when to move between items
  // default option : 0.05
  // delay : 0.5s | second
  
  duration: 0.7,
  // Determine the speed of effect
  // default option : 0.7
  // duration : 0.7s | second
  
  loop : true,
  // To repeat the effect infinitely
  // accept 2 options : true | false
  // default option : true
  
  loopTime : 2,
  // Replay the effect after
  // default option : 2
  // loopTime : 2s | second
  
  overflow: true,
  // Makes masking effect inside parent element
  // Accepts 2 options : false / true
  // default option : true

});

// ----------------------------------------------------------------

txt.scale('element',{

    // selector element
    // Accepts a string or selector element
    // You can specify a class directly || txt.animate('.element // .elements')
    // Or you can add a javascript selector  || document.querySelector('.element') or document.querySelectorAll('.elements')


  text : ['Go' , 'To' , 'Site'],
  // The words you want to apply the effect to
  // default option : ['Go' , 'To' , 'Site']

  effect : 'scale-1',
  // Select the effect you want
  // currently Accepts 2 options : scale-1 | scale-2
  // default option : scale-1
  
  delayStart: 0,
  // Determining the start time of the effect
  // default option : 0
  // delayStart : 0s | second
  
  delay : 1.5,
  // Determine when to move between items
  // default option : 1.5
  // delay : 1.5s | second
  
  duration: 2,
  // Determine the speed of effect
  // default option : 2
  // duration : 2s | second
  
  loop : true,
  // To repeat the effect infinitely
  // accept 2 options : true | false
  // default option : true

});

// ----------------------------------------------------------------

txt.overlay('element',{

    // selector element
    // Accepts a string or selector element
    // You can specify a class directly || txt.animate('.element // .elements')
    // Or you can add a javascript selector  || document.querySelector('.element') or document.querySelectorAll('.elements')


  effect : 'overlay-1',
  // Select the effect you want
  // Accepts 3 options : overlay-1 | overlay-2 | overlay-3
  // default option : overlay-1
  
  delayStart: 0,
  // Determining the start time of the effect
  // default option : 0
  // delayStart : 0s | second
  
  loop : true,
  // To repeat the effect infinitely
  // accept 2 options : true | false
  // default option : true
  
  loopTime : 5,
  // Replay the effect after
  // default option : 5s
  // loopTime : 5s | second
  
  overlayColor: '#03a9f4',
  // add background color for overlay
  // default option : '#03a9f4'

  textColor : '#161414',
  // change text color
  // default option : '#161414'

  outTime: 3,
  // Waiting time for the exit effect to be applied
  // default option : 3
  // outTime : 3s | second

});
````