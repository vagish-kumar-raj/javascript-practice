let temp = 104;

if (95 <= temp && temp < 99) {
  console.log('Normal');
} else if (99 <= temp && temp < 101) {
  console.log('Mild Fever');
} else if (101 <= temp && temp < 103) {
  console.log('Fever');
} else if (103 <= temp && temp < 106) {
  console.log('High Fever');
} else {
  console.log('Emergency! Call emergency services or go to the nearest emergency room immediately.');
}
