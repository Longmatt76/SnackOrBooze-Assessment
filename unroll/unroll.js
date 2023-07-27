function unroll(squareArray) {
  let output = [];
  let rows = squareArray.length;
  let cols = squareArray[0].length;
  let left = 0;
  let right = cols - 1;
  let top = 0;
  let bottom = rows - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      output.push(squareArray[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      output.push(squareArray[i][right]);
    }
    right--;

    for (let i = right; i >= left; i--) {
      output.push(squareArray[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      output.push(squareArray[i][left]);
    }
    left++;
  }

  return output;
}

module.exports = unroll;
