// console.log("Hello");

let changerBtn = document.getElementById("changerBtn");

let colorArray = ["Red", "Green", "Blue", "Yellow"];



changerBtn.addEventListener('click',function(){
  let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)]
  document.body.style.backgroundColor = randomColor;

  document.getElementById("colorName").innerHTML = " " + randomColor;

  if (randomColor === "Red" || randomColor === "Blue") {
    document.getElementById("name").style.color = "white";
  } else {
    document.getElementById("name").style.color = "black";
  }

})