function merge(array1, array2) {
  const tempArray = [];
  const length = array1.length + array2.length;

  for (let i = 0; i < length; i += 1) {
    if (!array2.length) {
      tempArray.push(...array1);
      break;
    } else if (!array1.length) {
      tempArray.push(...array2);
      break;
    } else if (array1[0] < array2[0]) {
      tempArray.push(array1[0]);
      array1.shift();
    } else if (array2[0] < array1[0]) {
      tempArray.push(array2[0]);
      array2.shift();
    } else if (array1[0] === array2[0]) {
      tempArray.push(array1[0]);
      tempArray.push(array2[0]);
      array1.shift();
      array2.shift();
    }
  }

  return tempArray;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.ceil(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
