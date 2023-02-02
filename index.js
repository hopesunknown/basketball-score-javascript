let num1 = 0
let num2 = 0
document.getElementById('score1').textContent = num1
document.getElementById('score2').textContent = num2

let firstScore = document.getElementById('score1')
let secondScore = document.getElementById('score2')

function addOneFirst() {
  num1 = num1 + 1
  firstScore.textContent = num1
}

function addTwoFirst() {
  num1 = num1 + 2
  firstScore.textContent = num1
}

function addThreeFirst() {
  num1 = num1 + 3
  firstScore.textContent = num1
}

function addOneSecond() {
  num2 = num2 + 1
  secondScore.textContent = num2
}

function addTwoSecond() {
  num2 = num2 + 2
  secondScore.textContent = num2
}

function addThreeSecond() {
  num2 = num2 + 3
  secondScore.textContent = num2
}