// document.onmousemove = animateCircles

var colors = ['#ccc', '#6cf', '#eba13a', '#111', '#243534', '#242', '#FFC0CB'];

function animateCircles(event) {
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle);

  circle.style.left = event.clientX + 'px';
  circle.style.top = event.clientY + 'px';

  var color =  colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;

  circle.style.transition = "all 0.5s linear 0s";

  circle.style.left = circle.offsetLeft - 20 + "px";
  circle.style.top = circle.offsetTop - 20 + "px";

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;

  setTimeout(() => {
    circle.remove()
  }, 400);

}

/*function test() {
  var test = document.getElementById('test');
  test.style.height = "200px";
  test.style.width = "200px";
  test.style.setProperty('background-color', 'green');
  test.style.transition = "width 2s, height 5s";
}

test(); */