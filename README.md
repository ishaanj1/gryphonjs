# Gryphon JS
_animation tool for the web_

## Overview
Trying to put some cool animations in your website but unwilling to spend hours fiddling with CSS code?
Gryphon JS is a tool that simplifies the process of animating HTML elements. Continue reading to find out how!

## Step 1: Import our libray
code --> npm website

## Step 2: Create your animation
Head over to the [Gryphon JS](https://gryphonjs.herokuapp.com) website and play around. It's meant to resemble the interface of a typical
video editing software, and should be pretty self explanatory. Whatever animation you create for the box will later be applied to your own 
website's HTML element.

## Step 3: Transfer the animation sequence to your web app
This step assumes you have already gone to [Gryphon JS](https://gryphonjs.herokuapp.com). Once you're satisfied with your animation, click
the "Export JSON" button. Some text should pop up; this is the *key frame info*.

Now you have everything you need to animate your website element, with just three lines of JavaScript code. 
First, create a variable for the HTML element you are trying to animate. If your HTML element has the `'i-want-animation'` id, you could 
write the following:

`var element = document.getElementById('i-want-animation');`

Next, create a variable to store the *key frame info*. Write the following, except subsitute the example *key frame info* with your own.

```
var keyFrameInfo = '[{"keyFrameNum":0,"x":0,"y":0,"rotation":0,"opacity":"0","timingFunction":"Linear","timestamp":0},{"keyFrameNum":1,"x":169,"y":72,"rotation":"20","opacity":".5","timingFunction":"Linear","timestamp":606},{"keyFrameNum":2,"x":"-169","y":"-72","rotation":"-20","opacity":1,"timingFunction":"Linear","timestamp":1206.4856643646121}]';
```

Add this last line of code to your program, and you're done.

`Gryphon.animate(element, keyFrameInfo);`

Congrats!

PS: If you're interested in seeing the source code for the [Gryphon JS](https://gryphonjs.herokuapp.com) website, you can find it 
[here](https://github.com/ishaanj1/gryphonjs-app).
