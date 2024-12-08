const circleContainer = document.getElementById("circle-container");
const text            = document.getElementById('text');

const totalTime   = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime    = totalTime / 5;
//In order for this to work, you need to have the same numbers between the CSS and Javascript
// console.log(breatheTime, holdTime);

breathAnimation();

function breathAnimation () {
  text.innerText = ('Breath In!');

  circleContainer.className = 'circle-container grow';

  setTimeout(() => {
    text.innerText = ("Hold");

    setTimeout(() => {
      text.innerText = ("Breath Out!");
      circleContainer.className = 'circle-container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);