// Code For Life Buttons
var life = 30;

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
  poison += 1;
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
