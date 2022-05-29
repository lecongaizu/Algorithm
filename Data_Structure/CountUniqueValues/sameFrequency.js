function sameFrequency(number1, number2) {
    let converNumber1toString = number1.toString();
    let converNumber2toString = number2.toString();

    if (converNumber1toString.length !== converNumber2toString.length) {
        return false
    }
    const count_number1 = {}
    const count_number2 = {}
    for (let i = 0; i < converNumber1toString.length; i++) {
        count_number1[converNumber1toString[i]] = (count_number1[converNumber1toString[i]] || 0) + 1

    }
    for (let i = 0; i < converNumber2toString.length; i++) {
        count_number2[converNumber2toString[i]] = (count_number2[converNumber2toString[i]] || 0) + 1
    }
    for (let key in count_number1) {
        if (count_number1[key] !== count_number2[key]) {
            return false
        }
    }
    return true
}
sameFrequency(182, 281)