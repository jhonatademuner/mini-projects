function selectionSort(array) {

    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        let smaller = i;
        for (let j = i + 1; j < arrayLength; j++) {
            if (array[j] < array[smaller]) {
                smaller = j;
            }
        }
        aux = array[i];
        array[i] = array[smaller];
        array[smaller] = aux;
    }
    return array;
}


function merge (left, right, leftLimit, rightLimit, sorted, buffer) {
    let i = left;
    
    //Compare the two sub arrays and merge them in the sorted order
    while (left < leftLimit && right < rightLimit) {
      if (sorted[left] <= sorted[right]) {
        buffer[i++] = sorted[left++];
      } else {
        buffer[i++] = sorted[right++];
      }
    }
  
    //If there are elements in the left sub arrray then add it to the result
    while (left < leftLimit) {
      buffer[i++] = sorted[left++];
    }
  
    //If there are elements in the right sub array then add it to the result
    while (right < rightLimit) {
      buffer[i++] = sorted[right++];
    }
}

function mergeSort(arr) {
    //Create two arrays for sorting
    let sorted = Array.from(arr);
    let n = sorted.length;
    let buffer = new Array(n);
    
    for (let size = 1; size < n; size *= 2) {
      for (let leftStart = 0; leftStart < n; leftStart += 2*size) {
        
        //Get the two sub arrays
        let left = leftStart,
            right = Math.min(left + size, n),
            leftLimit = right,
            rightLimit = Math.min(right + size, n);
        
        //Merge the sub arrays
        merge(left, right, leftLimit, rightLimit, sorted, buffer);  
      }
      
      //Swap the sorted sub array and merge them
      let temp = sorted;
      sorted = buffer;
      buffer = temp;
    }
    
    return sorted;
}


const a = [1,5,4,6,8,1,9,7,1,6,8,9,1,3,4,6];

const b = mergeSort(a)

console.log(b)