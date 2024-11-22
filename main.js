import './style.css';

function fibonacci(iteracoes) {
  const nums = [0, 1];

  for (let i = 2; i < iteracoes; i++) {
    const soma = nums[i - 1] + nums[i - 2];
    nums.push(soma);
  }

  return nums;
}

function desenharEspiralFibonacci() {
  const canvas = document.getElementById('fibonacciCanvas');
  const ctx = canvas.getContext('2d');
  
  const n = 10;  // Número de quadrados na espiral
  const fib = fibonacci(n);
  let x = 300;
  let y = 300;
  let angulo = 0;
  let posX = x; 
  let posY = y; 

  // Inicia o desenho da espiral
  ctx.beginPath();
  ctx.moveTo(posX, posY);

  // Desenha os quadrados e a espiral
  for (let i = 1; i < n; i++) {
    const tamanho = fib[i];

    // Desenha os quadrados e move a posição do ponto de referência
    if (angulo === 0) {
      posX += tamanho;  // Move para a direita
    } else if (angulo === Math.PI / 2) {
      posY -= tamanho;  // Move para cima
    } else if (angulo === Math.PI) {
      posX -= tamanho;  // Move para a esquerda
    } else if (angulo === (3 * Math.PI) / 2) {
      posY += tamanho;  // Move para baixo
    }

    // Desenha um arco (a espiral) no quadrado atual
    ctx.arc(posX, posY, tamanho, angulo, angulo + Math.PI / 2);
    ctx.stroke();

    // Atualiza o ângulo para o próximo arco
    angulo += Math.PI / 2;
  }
}

// Chama a função para desenhar a espiral no canvas
desenharEspiralFibonacci();

function calculate_fib(numero_iteracoes) {
  const iteracoes = parseInt(numero_iteracoes, 10);

  if (isNaN(iteracoes) || iteracoes < 1 || iteracoes > 220) {
    alert("Por favor, insira um número válido entre 1 e 220.");
    return;
  }

  const resultado = fibonacci(iteracoes);

  const valoresElement = document.querySelector(".valores");
  console.log(valoresElement)
  valoresElement.textContent = `Sequência: ${resultado.join(", ")}`;
}


document.getElementById("iteracoes_fib").addEventListener("change", function (event) {
  const numero_iteracoes = event.target.value;
  calculate_fib(numero_iteracoes);
});