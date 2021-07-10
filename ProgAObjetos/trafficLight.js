let circle = document.getElementsByClassName('redCircle');
console.log(circle);
let ctx = circle.getContext('2d');
console.log(ctx);
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();

setTimeout(changeLights, 3000);

function changeLights(validator) {
  if (validator == 1) {
    console.log('entrou aqui green');
    validator = 0;
    return 'green';
  } else if (validator == 0) {
    console.log('entrou aqui yellow');
    validator = -1;
    return 'yellow';
  } else {
    console.log('entrou aqui red');
    validator = 1;
    return 'red';
  }
}

console.log(changeLights(1));
