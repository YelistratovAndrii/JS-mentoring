const resultInsertion = document.getElementById('insertion');

function insertionSort(arr) {
  const arr1 = [...arr];

  for (let i = 1; i < arr1.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr1[j] < arr1[j - 1]) {
        [arr1[j], arr1[j - 1]] = [arr1[j - 1], arr1[j]];
      }
    }
  }

  return arr1;
}

console.time('insertionSort');
resultInsertion.textContent = `Insertion: [${insertionSort(arr)}]`;
console.timeEnd('insertionSort');
