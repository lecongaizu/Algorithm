function bubbleSort(array) {
    for(let i = 0; i< array.length; i++) {
        for (let j = 0; j< array.length; j++){
            if (array[j] > array[j+1]) {
                //swap
                var temp =  array[j];
                array [j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    console.log(array)
    return array;

}
bubbleSort([37, 4, 68, 21, 90, 3])