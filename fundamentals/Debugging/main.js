function f1(a, b) {
  return a * b;
}

function f2(c) {
  let d = f1(c, c);
  return d;
}

function f3(e) {
  let f = f2(e);
  console.log(f + ' is squre of ' + e);
}

f3(10)
