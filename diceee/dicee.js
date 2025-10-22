
document.querySelector(".btn").addEventListener("click", function() {
 document.querySelectorAll(".one .dice-square").forEach(el => el.style.visibility = "hidden");
 document.querySelectorAll(".two .dice-square").forEach(el => el.style.visibility = "hidden");
 var randomNumber1 = Math.floor(6*(Math.random())+1)
 var randomNumber2 = Math.floor(6*(Math.random())+1)
 for (var dice_num = 0; dice_num < randomNumber1; dice_num++) {
    document.querySelectorAll(".one .dice-square ")[dice_num].style.visibility = "visible";
 }

 for (var dice_num = 0; dice_num < randomNumber2; dice_num++) {
    document.querySelectorAll(".two .dice-square")[dice_num].style.visibility = "visible";
 }

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".results ").style.visibility = "visible";
    document.querySelector(".results .winner").textContent = "Player 1";
  } else if (randomNumber1 < randomNumber2) {
        document.querySelector(".results ").style.visibility = "visible";
    document.querySelector(".results .winner").textContent = "Player 2";
  } else {
        document.querySelector(".results ").style.visibility = "visible";
    document.querySelector(".results .winner").textContent = "It's a draw!";
     document.querySelector(".results .win").textContent=".";
  }
});   