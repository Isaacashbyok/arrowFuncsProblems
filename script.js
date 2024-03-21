function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

//es2015 version

const dblFunc = (arr) => {
  arr.map((val) => val * 2);
};

//2

function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

//es2015 2

const squareAndFindEvens = (numbers) =>
  numbers.map((val) => val * 2).filter((square) => square % 2 === 0);
