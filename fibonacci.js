function fibnum(num) {
  var fibo = [0, 1];

  for (i = 2; i < num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo;
}

var sumOfFibo = fibnum(3);

console.log(sumOfFibo);
