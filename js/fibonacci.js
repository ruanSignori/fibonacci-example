function generateFibonacciSequence(number_iteraction) 
{
    const nums = [0, 1];
  
    for (let i = 2; i < number_iteraction; i++) {
      const soma = nums[i - 1] + nums[i - 2];
      nums.push(soma);
    }
    console.log(nums)
  
    return nums;
}
function drawSpiral(ulc, urc, brc, blc, size, nr) {
  noFill();
  stroke(62,158,237);
  strokeWeight(1.5);

  switch (nr) {
    case 2:
        transitionLt = createVector(width / 2, height / 2);
        break;
    case 3:
        transitionLt = createVector(width / 2 - size/2, height/ 2);
        break;
    case 4:
        transitionLt = createVector(width / 2 - size/2, height/ 2 + size);
      break;
    default:
      transitionLt = createVector(width / 2 + size, height / 2 + size);
      break;
  }

  translate(transitionLt.x, transitionLt.y);
  
  let ind = 0;
  
  for (let i = 5; i < fibonacciSequence.length - 1; i++) {

    let r = fibonacciSequence[i] * size * 2 + 2;
    
    switch (ind) {
        case 0:
          arc(urc[i].x, urc[i].y, r, r, 90, 180);
          break;
        case 1:
          arc(ulc[i].x, ulc[i].y, r, r, 0, 90);
          break;
        case 2:
          arc(blc[i].x, blc[i].y, r, r, 270, 360);
          break;
        case 3:
          arc(brc[i].x, brc[i].y, r, r, 180, 270);
          break;
    }

    ind++;
    if (ind >=4) {
      ind = 0;
    }
  }

  translate(-transitionLt.x, - transitionLt.y);
}
   
function calculatePosition(fibonacciSequence, size, nr)
{
    let ulc = [], urc = [], brc = [], blc = [];

    ulc[1] = createVector(-size / 2 , -size / 2);
    urc[1] = createVector(ulc[1].x + fibonacciSequence[1] * size, ulc[1].y);
    brc[1] = createVector(urc[1].x, ulc[1].y + fibonacciSequence[1] * size);
    blc[1] = createVector(ulc[1].x, brc[1].y);

    ulc[2] = createVector(urc[1].x ,urc[1].y);
    urc[2] = createVector(ulc[2].x + fibonacciSequence[2] * size, ulc[2].y);
    brc[2] = createVector(urc[2].x, ulc[2].y+ fibonacciSequence[2] * size);
    blc[2] = createVector(ulc[2].x, brc[2].y);

    ulc[3] = createVector(ulc[1].x ,urc[1].y- fibonacciSequence[3] * size);
    urc[3] = createVector(ulc[3].x + fibonacciSequence[1] * size, ulc[3].y);
    brc[3] = createVector(urc[3].x, ulc[3].y+ fibonacciSequence[3] * size);
    blc[3] = createVector(ulc[3].x, brc[3].y);

    ulc[4] = createVector(ulc[3].x - fibonacciSequence[4] * size, ulc[3].y);
    urc[4] = createVector(ulc[4].x + fibonacciSequence[4] * size, ulc[4].y);
    brc[4] = createVector(urc[4].x, ulc[4].y+ fibonacciSequence[4] * size);
    blc[4] = createVector(ulc[4].x, brc[4].y);

    let ind = 0;

    for (let i = 5; i <fibonacciSequence.length -1; i++) {
      switch (ind) {
        case 0:
            ulc[i] = createVector(blc[i - 1].x , blc[i - 1].y);
            break;
        case 1:
            ulc[i] = createVector(urc[i - 1].x , ulc[i - 2].y);
            break;
        case 2:
            ulc[i] = createVector(ulc[i - 2].x , ulc[i - 1].y - fibonacciSequence[i] * size);
            break;
        case 3:
            ulc[i] = createVector(ulc[i - 1].x  - fibonacciSequence[i] * size, ulc[i - 1].y);
            break;
      }

      urc[i] = createVector(ulc[i].x + fibonacciSequence[i] * size, ulc[i].y);
      brc[i] = createVector(urc[i].x, ulc[i].y + fibonacciSequence[i] * size);
      blc[i] = createVector(ulc[i].x, brc[i].y);

      for (let j = 1; j < i + 1; j++) {
        switch (ind) {
          case 0:
              ulc[j].y -= fibonacciSequence[i] * size / 2;
              urc[j].y -= fibonacciSequence[i] * size / 2;
              brc[j].y -= fibonacciSequence[i] * size / 2;
              blc[j].y -= fibonacciSequence[i] * size / 2;
              break;
          case 1:
              ulc[j].x -= fibonacciSequence[i] * size / 2;
              urc[j].x -= fibonacciSequence[i] * size / 2;
              brc[j].x -= fibonacciSequence[i] * size / 2;
              blc[j].x -= fibonacciSequence[i] * size / 2;
              break;
          case 2:
              ulc[j].y += fibonacciSequence[i] * size / 2;
              urc[j].y += fibonacciSequence[i] * size / 2;
              brc[j].y += fibonacciSequence[i] * size / 2;
              blc[j].y += fibonacciSequence[i] * size / 2;
              break;
          case 3:
              ulc[j].x += fibonacciSequence[i] * size / 2;
              urc[j].x += fibonacciSequence[i] * size / 2;
              brc[j].x += fibonacciSequence[i] * size / 2;
              blc[j].x += fibonacciSequence[i] * size / 2;
              break;
        }
      }

      ind++;

      if (ind >=4) {
          ind = 0;
      }
      // drawRectAngle(ulc, size, nr);
      // drawSpiral(ulc, urc, brc, blc, size, nr)
    }
  
    drawRectAngle(ulc,size,nr)
}

function drawRectAngle (ulc, size, nr) 
{
  let transitionLt;
  
    switch (nr) {
      case 2:
          transitionLt = createVector(width / 2, height / 2);
          break;
      case 3:
          transitionLt = createVector(width / 2 - size/2, height/ 2);
          break;
      case 4:
          transitionLt = createVector(width / 2 - size/2, height/ 2 + size);
        break;
      default:
          transitionLt = createVector(width / 2 + size, height / 2 + size);
          break;
    }
  
    translate(transitionLt.x, transitionLt.y);
  
    for (let i = 1; i <fibonacciSequence.length -1; i++) {
      noFill();
      stroke(62, 158, 237);
      strokeWeight(3);
      rect(ulc[i].x,
            ulc[i].y,
            fibonacciSequence[i] * size,
            fibonacciSequence[i] * size
      );

      fill(62, 158, 237);
      noStroke();
      textAlign(CENTER, CENTER);
      let ts = map(fibonacciSequence[i],
                  0, 377, 5, 1100);
      textSize(ts* (size / 10));

      let offs = fibonacciSequence[i] * size / 2;
      text(fibonacciSequence[i], 
          ulc[i].x + offs,
          ulc[i].y + offs
      );
    }
    translate(-transitionLt.x, - transitionLt.y);
 
}
