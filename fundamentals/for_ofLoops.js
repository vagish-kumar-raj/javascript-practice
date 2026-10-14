let marks = [
  85, 78, 92, 67, 74, 88, 95, 81, 69, 90, 76, 84, 93, 71, 87, 79, 65, 89, 94, 73, 82, 68, 91, 77, 86, 80, 96,
];

let sum = 0;

for (let M of marks) {
  console.log(marks.indexOf(M) + 1, M);
  sum = sum + M;
}

console.log('Class Score: ' + sum + '/2600');
let avg = sum / 26;
console.log('Average Score of class:' + avg + '/100');
