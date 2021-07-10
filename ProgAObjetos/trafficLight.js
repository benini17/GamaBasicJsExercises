let redDot = document.getElementById('redColor');
let yellowDot = document.getElementById('yellowColor');
let greenDot = document.getElementById('greenColor');

let rounds = 0;
let validator = -2;
function changeLights() {
  setTimeout(() => {
    rounds++;
    validator++;

    if (rounds < 2000) {
      changeLights();
    }

    if (validator === 0) {
      redDot.style.backgroundColor = 'white';
      greenDot.style.backgroundColor = 'green';
      yellowDot.style.backgroundColor = 'white';
    } else if (validator === 1) {
      greenDot.style.backgroundColor = 'white';
      yellowDot.style.backgroundColor = 'yellow';
      redDot.style.backgroundColor = 'white';

      validator = -2;
    } else if (validator === -1) {
      greenDot.style.backgroundColor = 'white';
      redDot.style.backgroundColor = 'red';
      yellowDot.style.backgroundColor = 'white';
    }
  }, 2000);
}

changeLights();
