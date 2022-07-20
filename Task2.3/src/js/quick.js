const resultQuick = document.getElementById('quick');

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let el of arr.slice(0, arr.length - 1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.time('quickSort');
resultQuick.textContent = `Quick Sort: [${quickSort(arr)}]`;
console.timeEnd('quickSort');
