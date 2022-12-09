function bubbleSort(array){
    const arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++){
        for (let j = 0; j < arrayLength - i - 1; j++){
            if (array[j] > array[j + 1]){
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}


function selectionSort(array){

    const arrayLength = array.length;
    for(let i = 0; i < arrayLength; i++){
        let smaller = i;
        for(let j = i + 1; j < arrayLength; j++){
            if(array[j] < array[smaller]){
                smaller = j;
            }
        }
        aux = array[i];
        array[i] = array[smaller];
        array[smaller] = aux;
    }
    return array;
}

function insertionSort(array) {
    const arrayLength = array.length;
        for (let i = 1; i < arrayLength; i++) {
            const currentElement = array[i];
            let j = i-1; 
            while ((j > -1) && (currentElement < array[j])) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = currentElement;
        }
    return array;
}

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
}

function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
}

function quickSort(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

await new Promise(r => setTimeout(r, 0));