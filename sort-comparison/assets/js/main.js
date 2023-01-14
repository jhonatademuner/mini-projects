// import * as sortingMethods from "sortingMethods.js";

function globalFunction() {



    //# =============================================================================================== #\\
    //# ======================================| QUERY SELECTORS |====================================== #\\
    //# =============================================================================================== #\\



    const leftArray = document.querySelector('#leftArray');
    const rightArray = document.querySelector('#rightArray');
    let leftArrayContent = [];
    let rightArrayContent = [];

    const lengthChoose = document.querySelector('.lengthChoose');
    const lengthInput = document.querySelector('#lengthInput');
    const createArrayButton = document.querySelector('.createArrayButton');

    const timeMultiplierContainer = document.querySelector('#timeMultiplierContainer div');
    let delayMs = 0;

    const leftArrayAlgorithmChoose = document.querySelector('#leftArrayAlgorithmChoose');
    const rightArrayAlgorithmChoose = document.querySelector('#rightArrayAlgorithmChoose');

    const sortButton = document.querySelector('#sortButton');

    const sortMethods = ['bubble', 'selection', 'insertion', 'merge', 'quick']

    let leftArraySelectedAlgorithm = null;
    let rightArraySelectedAlgorithm = null;



    //# =============================================================================================== #\\
    //# ====================================| PAGE-LOAD PROCESSES |==================================== #\\
    //# =============================================================================================== #\\



    lengthInput.innerText = `${lengthChoose.value}`
    leftArrayContent = createNewArray();
    rightArrayContent = [...leftArrayContent];



    //# =============================================================================================== #\\
    //# ================================| ARRAY MANIPULATION FUNCTIONS |=============================== #\\
    //# =============================================================================================== #\\



    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createRandomArray(arrayLength) {
        const array = [];
        for (let i = 1; i < arrayLength + 1; i++) {
            array.push(i)
        }
        shuffleArray(array)
        return array;
    }

    function getArrayElementsGap(arrayLength) {
        switch (true) {
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

    function getArrayElementsBorderRadius(arrayLength) {
        switch (true) {
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

    function createNewArray() {
        const arrayLength = Number(lengthChoose.value);
        const array = createRandomArray(arrayLength);
        leftArray.innerHTML = '';
        rightArray.innerHTML = '';

        const arrayElementWidthDivisor = 600 / arrayLength;
        const arrayElementHeightDivisor = 700 / arrayLength;

        const arrayElementsGap = `${getArrayElementsGap(arrayLength)}px`;

        leftArray.style.gap = arrayElementsGap;
        rightArray.style.gap = arrayElementsGap;

        for (value of array) {
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
    };

    function displayArray(array, arraySide, colors = []) {
        const arrayLength = Number(array.length);

        const arrayElementWidthDivisor = 600 / arrayLength;
        const arrayElementHeightDivisor = 700 / arrayLength;

        const arrayElementsGap = `${getArrayElementsGap(arrayLength)}px`;

        arraySide.style.gap = arrayElementsGap;

        arraySide.innerHTML = '';

        for (let i in array) {
            const element = document.createElement('div');

            element.classList.add('arrayElement');
            element.style.width = `${array[i] * arrayElementWidthDivisor}px`;
            element.style.height = `${arrayElementHeightDivisor}px`;

            const color = colors.find(color => color.index === Number(i));

            if (color) {
                element.classList.add(color.color);
            }


            const borderRadius = getArrayElementsBorderRadius(arrayLength);

            if (arraySide.getAttribute('id') === 'leftArray') {
                element.style.borderRadius = `0 ${borderRadius}px ${borderRadius}px 0`;
            } else {
                element.style.borderRadius = `${borderRadius}px 0 0 ${borderRadius}px`;
            }

            arraySide.appendChild(element);
        }
    };


    //# =============================================================================================== #\\
    //# =====================================| SORTING ALGORITHMS |==================================== #\\
    //# =============================================================================================== #\\

    async function bubbleSort(array, arraySide, delayMs) {
        const arrayLength = array.length;

        for (let i = 0; i < arrayLength; i++) {
            await new Promise(r => setTimeout(r, delayMs));

            for (let j = 0; j < arrayLength - i - 1; j++) {
                displayArray(array, arraySide, [
                    { index: j, color: 'currentElement' },
                    { index: j + 1, color: 'secondaryElement' }
                ]);

                if (array[j] > array[j + 1]) {
                    aux = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = aux;

                    displayArray(array, arraySide, [
                        { index: j, color: 'secondaryElement' },
                        { index: j + 1, color: 'currentElement' }
                    ]);
                }

                await new Promise(r => setTimeout(r, delayMs));
            }
        }

        displayArray(array, arraySide);
    }

    async function selectionSort(array, arraySide, delayMs) {
        const arrayLength = array.length;

        for (let i = 0; i < arrayLength; i++) {
            await new Promise(r => setTimeout(r, delayMs));
            let smaller = i;
            for (let j = i + 1; j < arrayLength; j++) {
                await new Promise(r => setTimeout(r, delayMs));

                displayArray(array, arraySide, [
                    { index: smaller, color: 'secondaryElement' },
                    { index: j, color: 'currentElement' },
                ]);
                if (array[j] < array[smaller]) {
                    smaller = j;
                }
            }
            aux = array[i];
            array[i] = array[smaller];
            array[smaller] = aux;
        }
        displayArray(array, arraySide)
    }

    async function insertionSort(array, arraySide, delayMs) {  //#Aprovado pelo URUGU DO PIX
        const arrayLength = array.length;

        for (let i = 1; i < arrayLength; i++) {
            await new Promise(r => setTimeout(r, delayMs));
            displayArray(array, arraySide, [
                { index: i, color: 'currentElement' },
            ]);

            let j = i;

            while ((j > -1) && (array[j - 1] > array[j])) {
                const aux = array[j];
                array[j] = array[j - 1];
                array[j - 1] = aux

                j--;

                await new Promise(r => setTimeout(r, delayMs));
                displayArray(array, arraySide, [
                    { index: i, color: 'currentElement' },
                    { index: j, color: 'secondaryElement' },
                ]);
            }
        }

        displayArray(array, arraySide)
    }

    async function mergeSort(array, arraySide, delayMs, start = 0, end = array.length - 1) { //#Aprovado pelo URUGU DO PIX
        if (start >= end) {
            return;
        }

        let mid = Math.floor((start + end) / 2);
        await mergeSort(array, arraySide, delayMs, start, mid);
        await mergeSort(array, arraySide, delayMs, mid + 1, end);

        await merge(array, arraySide, start, mid, end, delayMs);

        displayArray(array, arraySide);

        return array;
    }

    async function merge(array, arraySide, start, mid, end, delayMs) {
        let left = start;
        let right = mid + 1;
        let temp = [];

        while (left <= mid && right <= end) {
            await new Promise(r => setTimeout(r, delayMs));
            displayArray(array, arraySide, [
                { index: left, color: 'currentElement' },
                { index: right, color: 'currentElement' },
                { index: mid, color: 'tertiaryElement' },
            ]);
            if (array[left] < array[right]) {
                temp.push(array[left]);
                left++;
            } else {
                temp.push(array[right]);
                right++;
            }
        }

        while (left <= mid) {
            await new Promise(r => setTimeout(r, delayMs));
            displayArray(array, arraySide, [
                { index: left, color: 'currentElement' },
            ]);
            temp.push(array[left]);
            left++;
        }

        while (right <= end) {
            await new Promise(r => setTimeout(r, delayMs));
            displayArray(array, arraySide, [
                { index: right, color: 'currentElement' },
            ]);
            temp.push(array[right]);
            right++;
        }

        for (let i = start; i <= end; i++) {
            await new Promise(r => setTimeout(r, delayMs));
            displayArray(array, arraySide, [
                { index: i, color: 'currentElement' },
                { index: start, color: 'secondaryElement' },
                { index: end, color: 'secondaryElement' },
            ]);
            array[i] = temp[i - start];
        }
    }

    async function quickSort(arr, arraySide, delayMs, start = 0, end = arr.length - 1) {
        // Base case or terminating case or bottom case
        if (start >= end) {
            return;
        }

    
        // Returns pivotIndex
        const index = await partition(arr, start, end, arraySide, delayMs);

        // Recursively apply the same logic to the left and right subarrays
        await quickSort(arr, arraySide, delayMs, start, index - 1);
        await quickSort(arr, arraySide, delayMs, index + 1, end);

        displayArray(arr, arraySide);
    }

    async function partition(arr, start, end, arraySide, delayMs) {
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

            await new Promise(r => setTimeout(r, delayMs));
            displayArray(arr, arraySide, [
                { index: pivotIndex, color: 'tertiaryElement' },
                { index: i, color: 'currentElement' },
                { index: start, color: 'secondaryElement' },
                { index: end, color: 'secondaryElement' },
            ]);
        }

        // Putting the pivot value in the middle
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]

        await new Promise(r => setTimeout(r, delayMs));
        displayArray(arr, arraySide, [
            { index: pivotIndex, color: 'tertiaryElement' },
            { index: start, color: 'secondaryElement' },
            { index: end, color: 'secondaryElement' },
        ]);

        return pivotIndex;
    }



    //# =============================================================================================== #\\
    //# ======================================| EVENT LISTENERS |====================================== #\\
    //# =============================================================================================== #\\



    lengthChoose.addEventListener('change', function () {
        lengthInput.setAttribute('value', `${lengthChoose.value}`);
        leftArrayContent = createNewArray();
        rightArrayContent = [...leftArrayContent];
    })

    lengthChoose.addEventListener('input', function () {
        lengthInput.setAttribute('value', `${lengthChoose.value}`);
        leftArrayContent = createNewArray();
        rightArrayContent = [...leftArrayContent];
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

    lengthInput.addEventListener('focus', function () {
        lengthInput.setAttribute('value', '');
    })

    lengthInput.addEventListener('keypress', function (e) {
        if (e.keyCode == '13') {
            if (Number(lengthInput.value) > 200) {
                lengthInput.setAttribute('value', '200');
            } else {
                lengthChoose.setAttribute('value', `${lengthInput.value}`);
            }
            leftArrayContent = createNewArray();
            rightArrayContent = leftArrayContent;
        }
    })

    createArrayButton.addEventListener('click', function () {
        leftArrayContent = createNewArray();
        rightArrayContent = [...leftArrayContent];
    })


    leftArrayAlgorithmChoose.addEventListener('click', function (e) {

        const clickedElement = e.target;

        const buttonsList = leftArrayAlgorithmChoose.children

        let i = 0
        for (child of buttonsList) {
            if (child.classList.contains('selectedAlgorithm'))
                child.classList.remove('selectedAlgorithm')
            if (child == clickedElement)
                leftArraySelectedAlgorithm = sortMethods[i];

            i++
        }

        clickedElement.classList.add('selectedAlgorithm')
    });

    rightArrayAlgorithmChoose.addEventListener('click', function (e) {

        const clickedElement = e.target;

        const buttonsList = rightArrayAlgorithmChoose.children

        let i = 0;
        for (child of buttonsList) {
            if (child.classList.contains('selectedAlgorithm'))
                child.classList.remove('selectedAlgorithm')
            if (child == clickedElement)
                rightArraySelectedAlgorithm = sortMethods[i];

            i++
        }

        clickedElement.classList.add('selectedAlgorithm')
    });

    timeMultiplierContainer.addEventListener('click', function (e) {

        const clickedElement = e.target;

        const buttonsList = timeMultiplierContainer.children;

        for (child of buttonsList) {
            if (child.classList.contains('selectedTime'))
                child.classList.remove('selectedTime')
            if (child == clickedElement)
                child.classList.add('selectedTime');
        }
        if (clickedElement.getAttribute('id') === 'timeMultiplier25') {
            delayMs = 750;
        } else if (clickedElement.getAttribute('id') === 'timeMultiplier50') {
            delayMs = 250;
        } else if (clickedElement.getAttribute('id') === 'timeMultiplier75') {
            delayMs = 125;
        } else if (clickedElement.getAttribute('id') === 'timeMultiplier1') {
            delayMs = 0;
        }

        clickedElement.classList.add('selectedAlgorithm')
    });

    sortButton.addEventListener('click', function () {

        if (leftArraySelectedAlgorithm === null || rightArraySelectedAlgorithm === null) {
            alert('ERRO. ALGORITMOS NÂO SELECIONADOS.')
        }
        else {
            switch (leftArraySelectedAlgorithm) {
                case 'bubble':
                    bubbleSort(leftArrayContent, leftArray, delayMs);
                    break;
                case 'selection':
                    selectionSort(leftArrayContent, leftArray, delayMs);
                    break;
                case 'insertion':
                    insertionSort(leftArrayContent, leftArray, delayMs);
                    break;
                case 'merge':
                    mergeSort(leftArrayContent, leftArray, delayMs);
                    break;
                default:
                    break;
            }

            switch (rightArraySelectedAlgorithm) {
                case 'bubble':
                    bubbleSort(rightArrayContent, rightArray, delayMs);
                    break;
                case 'selection':
                    selectionSort(rightArrayContent, rightArray, delayMs);
                    break;
                case 'insertion':
                    insertionSort(rightArrayContent, rightArray, delayMs);
                    break;
                case 'merge':
                    mergeSort(rightArrayContent, rightArray, delayMs);
                    break;
                case 'quick':
                    quickSort(rightArrayContent, rightArray, delayMs);
                    console.log(rightArrayContent);
                    break;
                default:
                    break;
            }
        }
    })



}
globalFunction();