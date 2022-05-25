function factorialNum(num) {
  var factNum = 1;

  if (num == 0 || num == 1) {
    return factNum;
  } else {
    for (var i = num; i >= 1; i--) {
      var factNum = factNum * i;
    }
    return factNum;
  }
}

var finalNum = factorialNum(1);

console.log(factorialNum);
