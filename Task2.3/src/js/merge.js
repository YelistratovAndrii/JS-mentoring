const resultMerge = document.getElementById('merge');

function merge(leftArr, rightArr) {
  let sortedNew = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      sortedNew.push(leftEl);
      leftIndex++;
    } else {
      sortedNew.push(rightEl);
      rightIndex++;
    }
  }

  return [
    ...sortedNew,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const leftArr = arr.slice(0, Math.floor(arr.length / 2));
  const rightArr = arr.slice(Math.floor(arr.length / 2));

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.time('mergeSort');
resultMerge.textContent = `Merge Sort: [${mergeSort(arr)}]`;
console.timeEnd('mergeSort');
