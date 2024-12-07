const INITIAL_ITERACION_FIBONACCI = 10;


let nr = INITIAL_ITERACION_FIBONACCI + 1;
let fibonacciSequence = generateFibonacciSequence(nr);

document.getElementById("iteracoes_fib").addEventListener("change", function (event) {
  nr = event.target.value;

  fibonacciSequence = generateFibonacciSequence(nr);
  loop();
});

function setup() {
  let cnv = createCanvas(800, 600);

  cnv.parent('canvas-container');

  angleMode(DEGREES);
  background(200);
}

function draw() {
  background(11);

  let size = nr > 1 ? height / (fibonacciSequence[nr - 1] * 1.8) : 0;
  calculatePosition(fibonacciSequence, size, nr)

  noLoop();
}

