// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
   if (max < arr[i]) {
     max = arr[i];
   }
 }

for (i = 0; i < arr.length; i++) {
   if (arr[i] < min) {
     min = arr[i];
   }
 }

  sum = arr.reduce(function(sum, elem) {
    return sum + elem;
  }, 0);

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
     sum = worker(arrOfArr[i]);
    if (sum > max) {
      max = sum
    }
  }

  return max;

}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let diff;

  for (let i = 0; i < arr.length; i++) {
   if (max < arr[i]) {
     max = arr[i];
   }
 }

for (i = 0; i < arr.length; i++) {
   if (arr[i] < min) {
     min = arr[i];
   }
 }

 diff = Math.abs(max - min);

 return diff;

}

function makeWork(arrOfArr, func) {
  
  for (let i = 0; i < arrOfArr.length; i++) {
     diff = worker2(arrOfArr[i]);
  }

  return diff;
}


