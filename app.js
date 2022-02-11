// console.log("Hello");

let changerBtn = document.getElementById("changerBtn");

let colorArray = ["red", "green", "blue", "yellow"];

changerBtn.addEventListener('click',function(){
  let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
  document.body.style.backgroundColor = randomColor;
})