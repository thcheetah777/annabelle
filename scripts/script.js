let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let circle4 = document.getElementById("circle4");
let circle5 = document.getElementById("circle5");
let circle6 = document.getElementById("circle6");
let circle7 = document.getElementById("circle7");
let circle8 = document.getElementById("circle8");
let circle9 = document.getElementById("circle9");
let circlesArray = [circle1, circle2, circle3, circle4, circle5, circle6, circle7, circle8, circle9];

let defaultTurnSpeed = 0.5;

for (let x = 0; x < circlesArray.length; x++) {
  const element = circlesArray[x];
  element.turnSpeed = defaultTurnSpeed;
  element.degrees = 0;
}

setInterval(() => {
  for (let x = 0; x < circlesArray.length; x++) {
    const element = circlesArray[x];
    if (x % 2 === 0) {
      element.style.transform = `rotate(-${element.degrees}deg)`;
    } else {
      element.style.transform = `rotate(${element.degrees}deg)`;
    }
    element.degrees += element.turnSpeed;
  }
}, 1);

for (let x = 0; x < circlesArray.length; x++) {
  const element = circlesArray[x];
}
circlesArray.forEach(element => {
  element.onmouseover = () => {
    console.log("l");
    element.turnSpeed = 0.1;
  }
  element.onmouseout = () => {
    element.turnSpeed = defaultTurnSpeed;
  }  
});
