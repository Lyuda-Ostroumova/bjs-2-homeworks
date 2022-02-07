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

  if (arr[i] < min) {
    min = arr[i];
 } 

 sum += arr[i];

}

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
    let sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let arrayParams = getArrayParams(arr);

return Math.abs(arrayParams.max - arrayParams.min);

}


