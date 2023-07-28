
<!-- SASS

Sass, or "Syntactically Awesome StyleSheets", is a language extension of CSS. It adds features that aren't available in basic CSS, which make it easier for you to simplify and maintain the style sheets for your projects.
In this Sass course, you'll learn how to store data in variables, nest CSS, create reusable styles with mixins, add logic and loops to your styles, and more.

Store Data with Sass Variables
One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.
In JavaScript, variables are defined using the let and const keywords. In Sass, variables start with a $ followed by the variable name.
Here are a couple examples:
$main-fonts: Arial, sans-serif;
$headings-color: green;
And to use the variables:
 -->
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
<!-- One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.

Create a variable $text-color and set it to red. Then change the value of the color property for the .blog-post and h2 to the $text-color variable.
 -->

<!-- Nest CSS with Sass
Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.
Normally, each element is targeted on a different line to style it, like so:
 -->
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
<!-- For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements:
 -->
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}


<!-- Use the nesting technique shown above to re-organize the CSS rules for both children of .blog-post element. For testing purposes, the h1 should come before the p element.


Create Reusable CSS with Mixins
In Sass, a mixin is a group of CSS declarations that can be reused throughout the style sheet.
Newer CSS features take time before they are fully adopted and ready to use in all browsers. As features are added to browsers, CSS rules using them may need vendor prefixes. Consider box-shadow:
 -->
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}

<!-- It's a lot of typing to re-write this rule for all the elements that have a box-shadow, or to change each value to test different effects. Mixins are like functions for CSS. Here is how to write one:
 -->
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
<!-- The definition starts with @mixin followed by a custom name. The parameters (the $x, $y, $blur, and $c in the example above) are optional. Now any time a box-shadow rule is needed, only a single line calling the mixin replaces having to type all the vendor prefixes. A mixin is called with the @include directive:
 -->
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}

<!-- Write a mixin for border-radius and give it a $radius parameter. It should use all the vendor prefixes from the example. Then use the border-radius mixin to give the #awesome element a border radius of 15px.
 -->

<style type='text/scss'>
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    -ms-border-radius: $radius;
    border-radius: $radius;
  }

  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>


/* Use @if and @else to Add Logic To Your Styles
The @if directive in Sass is useful to test for a specific case - it works just like the if statement in JavaScript.
 */
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
/* And just like in JavaScript, the @else if and @else directives test for more conditions:
 */
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}

/* Create a mixin called border-stroke that takes a parameter $val. The mixin should check for the following conditions using @if, @else if, and @else directives:
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
If the $val parameter value is not light, medium, or heavy, then the border property should be set to none.
 */

<style type='text/scss'>
  @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy {
      border: 6px solid black;
    }
    @else {
      border: none;
    }
  }


  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>


/* Use @for to Create a Sass Loop
The @for directive adds styles in a loop, very similar to a for loop in JavaScript.
@for is used in two ways: "start through end" or "start to end". The main difference is that the "start to end" excludes the end number as part of the count, and "start through end" includes the end number as part of the count.
Here's a start through end example:
 */
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
/* The #{$i} part is the syntax to combine a variable (i) with text to make a string. When the Sass file is converted to CSS, it looks like this:
 */
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
/* This is a powerful way to create a grid layout. Now you have twelve options for column widths available as CSS classes.

Write a @for directive that takes a variable $j that goes from 1 to 6.
It should create 5 classes called .text-1 to .text-5 where each has a font-size set to 15px multiplied by the index.
 */

<style type='text/scss'>

@for $i from 1 to 6 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>


/* Use @each to Map Over Items in a List
The last challenge showed how the @for directive uses a starting and ending value to loop a certain number of times. Sass also offers the @each directive which loops over each item in a list or map. On each iteration, the variable gets assigned to the current value from the list or map.
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
A map has slightly different syntax. Here's an example:
$colors: (color1: blue, color2: red, color3: green);
 */
@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
/* Note that the $key variable is needed to reference the keys in the map. Otherwise, the compiled CSS would have color1, color2... in it. Both of the above code examples are converted into the following CSS:
 */
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}

/* Write an @each directive that goes through a list: blue, black, red and assigns each variable to a .color-bg class, where the color part changes for each item to the respective color. Each class should set the background-color to the respective color as well.
 */

<style type='text/scss'>

$colors: (color1: blue, color2: black, color3: red);

@each $key, $color in $colors {
  .#{$color}-bg {background-color: $color;}
}

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>


/* Apply a Style Until a Condition is Met with @while
The @while directive is an option with similar functionality to the JavaScript while loop. It creates CSS rules until a condition is met.
The @for challenge gave an example to create a simple grid system. This can also work with @while. */
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
/* First, define a variable $x and set it to 1. Next, use the @while directive to create the grid system while $x is less than 13. After setting the CSS rule for width, $x is incremented by 1 to avoid an infinite loop.

Use @while to create a series of classes with different font-sizes.
There should be 5 different classes from text-1 to text-5. Then set font-size to 15px multiplied by the current index number. Make sure to avoid an infinite loop!
 */

<style type='text/scss'>

$x: 1;
@while $x < 6 {
    .text-#{$x}{
      font-size: 15px * $x;
    }
  $x: $x + 1;
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>


/* Split Your Styles into Smaller Chunks with Partials
Partials in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. This is a great way to group similar code into a module to keep it organized.
Names for partials start with the underscore (_) character, which tells Sass it is a small segment of CSS and not to convert it into a CSS file. Also, Sass files end with the .scss file extension. To bring the code in the partial into another Sass file, use the @import directive.
For example, if all your mixins are saved in a partial named "_mixins.scss", and they are needed in the "main.scss" file, this is how to use them in the main file:
@import 'mixins'
Note that the underscore and file extension are not needed in the import statement - Sass understands it is a partial. Once a partial is imported into a file, all variables, mixins, and other code are available to use.

Write an @import statement to import a partial named _variables.scss into the main.scss file.


Extend One Set of CSS Styles to Another Element
Sass has a feature called extend that makes it easy to borrow the CSS rules from one element and build upon them in another.
For example, the below block of CSS rules style a .panel class. It has a background-color, height and border.
 */
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
/* Now you want another panel called .big-panel. It has the same base properties as .panel, but also needs a width and font-size. It's possible to copy and paste the initial CSS rules from .panel, but the code becomes repetitive as you add more types of panels. The extend directive is a simple way to reuse the rules written for one element, then add more for another:
 */
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
/* The .big-panel will have the same properties as .panel in addition to the new styles.

Make a class .info-important that extends .info and also has a background-color set to magenta.
 */

