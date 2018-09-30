function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let ii = 0; ii < array.length; ii++) {
      if (array[ii] > array[ii + 1]) {
        let temp = array[ii];
        array[ii] = array[ii + 1];
        array[ii + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([1,2,3,4]));

console.log(bubbleSort([4,2,1,3,7,5,6]));
