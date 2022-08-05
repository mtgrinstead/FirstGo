// Code For Life Buttons
var life = 20;

function lifeCounterUp() {
  life += 1;
  document.getElementById("lifeCount").innerHTML = life;
};

function lifeCounterDown() {
  life -= 1;
  document.getElementById("lifeCount").innerHTML = life;
};

// Code For Poison Buttons
var poison = 0;

function poisonCounterUp() {
  if (poison < 10) {
    poison += 1
  } else {
    poison: null
  }
  document.getElementById("poisonCount").innerHTML = poison;
};

function poisonCounterDown() {
  if (poison > 0) {
  poison -= 1;
  } else {
    poison: null
  }
  document.getElementById("poisonCount").innerHTML = poison;
};

function statReset() {
  life = 30;
  poison = 0;
   document.getElementById("lifeCount").innerHTML = life;
   document.getElementById("poisonCount").innerHTML = poison;
}
