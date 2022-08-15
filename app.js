// https://calculator.swiftutors.com/area-of-a-square-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofaSquareRadio = document.getElementById('areaofaSquareRadio');
const baseLengthofSquareRadio = document.getElementById('baseLengthofSquareRadio');

let areaofaSquare;
let baseLengthofSquare = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

areaofaSquareRadio.addEventListener('click', function() {
  variable1.textContent = 'Base Length of Square';
  baseLengthofSquare = v1;
  result.textContent = '';
});

baseLengthofSquareRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of a Square';
  areaofaSquare = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofaSquareRadio.checked)
    result.textContent = `Base Length of Square = ${computeBaseLengthofSquare().toFixed(5)}`;

  else if(baseLengthofSquareRadio.checked)
    result.textContent = `Area of a Square = ${computeAreaofaSquare().toFixed(5)}`;
})

// calculation

function computeBaseLengthofSquare() {
  return Math.pow(Number(baseLengthofSquare.value), 2);
}

function computeAreaofaSquare() {
  return Math.sqrt(Number(areaofaSquare.value));
}