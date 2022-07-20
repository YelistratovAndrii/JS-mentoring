const resultBubble = document.getElementById('bubble');

function bubbleSort(arr) {
  let swapped = false;
  const arr1 = [...arr];

  for (let i = 0; i < arr1.length - 1; i++) {
    swapped = false;

    for (let j = 0; j < arr1.length - 1 - i; j++) {
      if (arr1[j] > arr1[j + 1]) {
        [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      return arr1;
    }
  }

  return arr1;
}

console.time('bubbleSort');
resultBubble.textContent = `Bubble: [${bubbleSort(arr)}]`;
console.timeEnd('bubbleSort');
