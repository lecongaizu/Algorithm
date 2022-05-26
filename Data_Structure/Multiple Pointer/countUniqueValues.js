function countUniqueValues(arr){
    let converSet  =  new Set()
    arr.forEach(item => converSet.add(item));
    console.log(converSet.size)
    return converSet.size;
}

countUniqueValues([1,2,3,1,2,3])