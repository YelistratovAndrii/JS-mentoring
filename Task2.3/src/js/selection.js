const resultSelection = document.getElementById('selection');

function selectionSort(arr) {
  const arr1 = [...arr];

  for (let i = 0; i < arr1.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1, len = arr1.length; j < len; j++) {
      if (arr1[j] < arr1[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr1[i], arr1[minIndex]] = [arr1[minIndex], arr1[i]];
    }
  }

  return arr1;
}

console.time('selectionSort');
resultSelection.textContent = `Selection: [${selectionSort(arr)}]`;
console.timeEnd('selectionSort');
