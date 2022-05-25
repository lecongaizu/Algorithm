function validAnagram(frist, second) {
    if (frist.length !== second.length){
        return false;
    }

    const map  = {};
    for (let i = 0; i< frist.length; i++){
        map[frist[i]] ? map[frist[i]] += 1 : map[frist[i]] ==1
    }
    for (let j = 0; j < second.length; j ++){
        if (!map[second[j]]) return false;
        map[second[j]]--;
    }
    return true
}

validAnagram("anagram", "nagaram")