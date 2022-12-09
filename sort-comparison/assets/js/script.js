function globalFunction(){
   const leftArray = document.querySelector('#leftArray');
    const rightArray = document.querySelector('#rightArray');
    const lengthChooseContainer = document.querySelector('#lengthChooseContainer');
    const lengthChoose = document.querySelector('.lengthChoose');
    const leftArrayMethodChoose = document.querySelector('#leftArrayMethodChoose');
    const rightArrayMethodChoose = document.querySelector('#rightArrayMethodChoose');
    const lengthLabel = document.querySelector('#lengthLabel');

    let leftArraySelectedMethod = null;
    let rightArraySelectedMethod = null;
    const sortMethods = ['bubble', 'selection', 'insertion', 'merge', 'quick']

    function createArray(){
        const arrayLength = Number(lengthChoose.value);
        const array = [];
        leftArray.innerHTML = '';
        rightArray.innerHTML = '';

        for (let i = 0; i < arrayLength; i++){
            let value = Math.floor(Math.random() * (arrayLength)) + 1;
            let repeatedValue = array.includes(value);
            do {
                value = Math.floor(Math.random() * (arrayLength)) + 1;
                repeatedValue = array.includes(value);
                if(!repeatedValue){
                    array.push(value);
                }
            }
            while(repeatedValue);
        }

        const arrayElementWidthDivisor = 600 / arrayLength;
        const arrayElementHeightDivisor = 700 / arrayLength;

        

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


        const arrayElementsGap = `${getArrayElementsGap(arrayLength)}px`;
        console.log(arrayLength, arrayElementsGap)

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
    }

    lengthChoose.addEventListener('change', function(){
        lengthLabel.innerText = `${lengthChoose.value}`
        createArray();  
    })

    lengthChoose.addEventListener('input', function(){
        lengthLabel.innerText = `${lengthChoose.value}`
        createArray();     
    })

    lengthChooseContainer.addEventListener('click', function(e){

        const clickedElement = e.target;

        if (clickedElement.classList.contains('createArrayButton')){
            createArray();
        }

        
    });

    leftArrayMethodChoose.addEventListener('click', function(e){

        const clickedElement = e.target;

        const buttonsList = leftArrayMethodChoose.children

        let i = 0
        for (child of buttonsList){
            if (child.classList.contains('selectedAlgorithm'))
                child.classList.remove('selectedAlgorithm')
            if (child == clickedElement)
                leftArraySelectedMethod = sortMethods[i];
        
            i++
        }

        clickedElement.classList.add('selectedAlgorithm')
    });

    rightArrayMethodChoose.addEventListener('click', function(e){

        const clickedElement = e.target;

        const buttonsList = rightArrayMethodChoose.children

        let i = 0;
        for (child of buttonsList){
            if (child.classList.contains('selectedAlgorithm'))
                child.classList.remove('selectedAlgorithm')
            if (child == clickedElement)
                rightArraySelectedMethod = sortMethods[i];
            
            i++
        }

        clickedElement.classList.add('selectedAlgorithm')
    });
    
    lengthLabel.innerText = `${lengthChoose.value}`
    createArray();
}
globalFunction();