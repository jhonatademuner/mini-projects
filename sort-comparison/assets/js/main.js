// import * as sortingMethods from "sortingMethods.js";

function globalFunction(){



    //$ =============================================================================================== $\\
    //$ ======================================| QUERY SELECTORS |====================================== $\\
    //$ =============================================================================================== $\\



    const leftArray = document.querySelector('#leftArray');
    const rightArray = document.querySelector('#rightArray');
    let leftArrayContent = [];
    let rightArrayContent = [];

    const lengthChoose = document.querySelector('.lengthChoose');
    const lengthInput = document.querySelector('#lengthInput');
    const createArrayButton = document.querySelector('.createArrayButton');

    const timeMultiplierContainer = document.querySelector('#timeMultiplierContainer');
    let delayMs = 0;
    
    const leftArrayAlgorithmChoose = document.querySelector('#leftArrayAlgorithmChoose');
    const rightArrayAlgorithmChoose = document.querySelector('#rightArrayAlgorithmChoose');

    const sortButton = document.querySelector('#sortButton');

    const sortMethods = ['bubble', 'selection', 'insertion', 'merge', 'quick']

    let leftArraySelectedAlgorithm = null;
    let rightArraySelectedAlgorithm = null;



    //$ =============================================================================================== $\\
    //$ ====================================| PAGE-LOAD PROCESSES |==================================== $\\
    //$ =============================================================================================== $\\

    

    lengthInput.innerText = `${lengthChoose.value}`
    leftArrayContent = createNewArray();
    rightArrayContent = leftArrayContent;


 
    //$ =============================================================================================== $\\
    //$ ================================| ARRAY MANIPULATION FUNCTIONS |=============================== $\\
    //$ =============================================================================================== $\\



    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createRandomArray(arrayLength){
        const array = [];
        for (let i = 1; i < arrayLength + 1; i++){
            array.push(i)
        }
        shuffleArray(array)
        return array;
    }

    function getArrayElementsGap(arrayLength){
        switch(true){
            case (arrayLength <= 5):
                return 15;
            case (arrayLength <= 15):
                return 10;
            case (arrayLength <= 30):
                return 8;
            case (arrayLength <= 50):
                return 6;
            case (arrayLength <= 80):
                return 5;
            case (arrayLength <= 100):
                return 4;
            case (arrayLength <= 125):
                return 3;
            case (arrayLength <= 150):
                return 2;
            case (arrayLength > 150):
                return 1;
        }
    }

    function getArrayElementsBorderRadius(arrayLength){
        switch(true){
            case (arrayLength <= 5):
                return 15;
            case (arrayLength <= 15):
                return 8;
            case (arrayLength <= 30):
                return 6;
            case (arrayLength <= 80):
                return 5;
            case (arrayLength <= 100):
                return 4;
            case (arrayLength <= 125):
                return 3;
            case (arrayLength <= 150):
                return 2;
            case (arrayLength > 150):
                return 1;
        }
    }

    function createNewArray(){
        const arrayLength = Number(lengthChoose.value);
        const array = createRandomArray(arrayLength);
        leftArray.innerHTML = '';
        rightArray.innerHTML = '';

        const arrayElementWidthDivisor = 600 / arrayLength;
        const arrayElementHeightDivisor = 700 / arrayLength;

        const arrayElementsGap = `${getArrayElementsGap(arrayLength)}px`;

        leftArray.style.gap = arrayElementsGap;
        rightArray.style.gap = arrayElementsGap;

        for (value of array){
            const element = document.createElement('div');
            element.classList.add('arrayElement');
            element.style.width = `${value * arrayElementWidthDivisor}px`;
            
            element.style.height = `${arrayElementHeightDivisor}px`;

            element.style.borderRadius = `0 ${getArrayElementsBorderRadius(arrayLength)}px ${getArrayElementsBorderRadius(arrayLength)}px 0`;
            leftArray.appendChild(element.cloneNode(true))

            element.style.borderRadius = `${getArrayElementsBorderRadius(arrayLength)}px 0 0 ${getArrayElementsBorderRadius(arrayLength)}px`;
            rightArray.appendChild(element)
        }
        return array;
    }

    

    //$ =============================================================================================== $\\
    //$ =====================================| SORTING ALGORITHMS |==================================== $\\
    //$ =============================================================================================== $\\



    function visualIterationBubble(array, arraySide, currentElement){
        const arrayLength = array.length;
        arraySide.innerHTML = '';

        const arrayElementWidthDivisor = 600 / arrayLength;
        const arrayElementHeightDivisor = 700 / arrayLength;

        const arrayElementsGap = `${getArrayElementsGap(arrayLength)}px`;

        arraySide.style.gap = arrayElementsGap;

        for (value of array){
            const element = document.createElement('div');
            element.classList.add('arrayElement');
            if(array.indexOf(value) === currentElement){
                element.classList.add('currentElement');
            }
            if(array.indexOf(value) === currentElement + 1){
                element.classList.add('nextElement');
            }
            element.style.width = `${value * arrayElementWidthDivisor}px`;
            
            element.style.height = `${arrayElementHeightDivisor}px`;

            if(arraySide.getAttribute('id') === 'leftArray'){
                element.style.borderRadius = `0 ${getArrayElementsBorderRadius(arrayLength)}px ${getArrayElementsBorderRadius(arrayLength)}px 0`;
            } else{
                element.style.borderRadius = `${getArrayElementsBorderRadius(arrayLength)}px 0 0 ${getArrayElementsBorderRadius(arrayLength)}px`;
            }
            arraySide.appendChild(element)
        }
    }

    function visualChangeBubble(array, arraySide, currentElement){
        const arrayLength = array.length;
        arraySide.innerHTML = '';

        const arrayElementWidthDivisor = 600 / arrayLength;
        const arrayElementHeightDivisor = 700 / arrayLength;

        const arrayElementsGap = `${getArrayElementsGap(arrayLength)}px`;

        arraySide.style.gap = arrayElementsGap;

        for (value of array){
            const element = document.createElement('div');
            element.classList.add('arrayElement');
            if(array.indexOf(value) === currentElement){
                element.classList.add('nextElement');
            }
            if(array.indexOf(value) === currentElement + 1){
                element.classList.add('currentElement');
            }
            element.style.width = `${value * arrayElementWidthDivisor}px`;
            
            element.style.height = `${arrayElementHeightDivisor}px`;

            if(arraySide.getAttribute('id') === 'leftArray'){
                element.style.borderRadius = `0 ${getArrayElementsBorderRadius(arrayLength)}px ${getArrayElementsBorderRadius(arrayLength)}px 0`;
            } else{
                element.style.borderRadius = `${getArrayElementsBorderRadius(arrayLength)}px 0 0 ${getArrayElementsBorderRadius(arrayLength)}px`;
            }
            arraySide.appendChild(element)
        }
    }

    async function bubbleSort(array, arraySide, delayMs){
        const arrayLength = array.length;
        for (let i = 0; i < arrayLength; i++){
            for (let j = 0; j < arrayLength - i - 1; j++){
                visualIterationBubble(array, arraySide, j);
                await new Promise(r => setTimeout(r, delayMs));
                if (array[j] > array[j + 1]){
                    aux = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = aux;
                }
                visualChangeBubble(array, arraySide, j);
                await new Promise(r => setTimeout(r, delayMs));
            }
        }
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



    //$ =============================================================================================== $\\
    //$ ======================================| EVENT LISTENERS |====================================== $\\
    //$ =============================================================================================== $\\



    lengthChoose.addEventListener('change', function(){
        lengthInput.setAttribute('value', `${lengthChoose.value}`);
        leftArrayContent = createNewArray();
        rightArrayContent = leftArrayContent;  
    })

    lengthChoose.addEventListener('input', function(){
        lengthInput.setAttribute('value', `${lengthChoose.value}`);
        leftArrayContent = createNewArray();
        rightArrayContent = leftArrayContent;   
    })

    // lengthInput.addEventListener('input', function(){
    //     if(Number(lengthInput.value) > 200){
    //         lengthInput.setAttribute('value', '200');
    //     } else{
    //         lengthChoose.setAttribute('value', `${lengthInput.value}`);
    //     }
    //     leftArrayContent = createNewArray();
    //     rightArrayContent = leftArrayContent;   
    // })

    lengthInput.addEventListener('focus', function(){
        lengthInput.setAttribute('value', '');   
    })

    lengthInput.addEventListener('keypress', function(e){
        if (e.keyCode == '13'){
            if(Number(lengthInput.value) > 200){
                lengthInput.setAttribute('value', '200');
            } else{
                lengthChoose.setAttribute('value', `${lengthInput.value}`);
            }
            leftArrayContent = createNewArray();
            rightArrayContent = leftArrayContent; 
        }
    })

    createArrayButton.addEventListener('click', function(){
        leftArrayContent = createNewArray();
        rightArrayContent = leftArrayContent;
    })


    leftArrayAlgorithmChoose.addEventListener('click', function(e){

        const clickedElement = e.target;

        const buttonsList = leftArrayAlgorithmChoose.children

        let i = 0
        for (child of buttonsList){
            if (child.classList.contains('selectedAlgorithm'))
                child.classList.remove('selectedAlgorithm')
            if (child == clickedElement)
                leftArraySelectedAlgorithm = sortMethods[i];
        
            i++
        }

        clickedElement.classList.add('selectedAlgorithm')
    });

    rightArrayAlgorithmChoose.addEventListener('click', function(e){

        const clickedElement = e.target;

        const buttonsList = rightArrayAlgorithmChoose.children

        let i = 0;
        for (child of buttonsList){
            if (child.classList.contains('selectedAlgorithm'))
                child.classList.remove('selectedAlgorithm')
            if (child == clickedElement)
                rightArraySelectedAlgorithm = sortMethods[i];
            
            i++
        }

        clickedElement.classList.add('selectedAlgorithm')
    });

    timeMultiplierContainer.addEventListener('click', function(e){

        const clickedElement = e.target;

        const buttonsList = timeMultiplierContainer.children;

        for (child of buttonsList){
            if (child.classList.contains('selectedTime'))
                child.classList.remove('selectedTime')
            if (child == clickedElement)
                child.classList.add('selectedTime');            
        }
        if(clickedElement.getAttribute('id') === 'timeMultiplier25'){
            delayMs = 500;
        } else if(clickedElement.getAttribute('id') === 'timeMultiplier50'){
            delayMs = 250;
        } else if(clickedElement.getAttribute('id') === 'timeMultiplier75'){
            delayMs = 125;
        } else if(clickedElement.getAttribute('id') === 'timeMultiplier1'){
            delayMs = 0;
        }

        clickedElement.classList.add('selectedAlgorithm')
    });

    sortButton.addEventListener('click', function(){

        if(leftArraySelectedAlgorithm === null || rightArraySelectedAlgorithm === null){
            alert('ERRO. ALGORITMOS NÂO SELECIONADOS.')
        }
        else{
        if(leftArraySelectedAlgorithm === 'bubble')
            bubbleSort(leftArrayContent, leftArray, delayMs);      


        if(rightArraySelectedAlgorithm === 'bubble')
            bubbleSort(rightArrayContent, rightArray, delayMs);
        }
    })
    
    
    
}
globalFunction();