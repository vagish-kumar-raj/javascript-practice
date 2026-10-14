function multitab(a) {
  for (let t = 1; t <= 10; t++) {
    console.log(a + ' X ' + t + ' = ' + a * t);
  }
}

multitab(19);

console.log('---------------------');

function C2F(a) {
  let F = 32 + a * (9 / 5);
  console.log(a + '°C = ' + F + '°F');
}

C2F(0);
