export function findMin(list){
    let min = Infinity;
    for (let i = 0; i <= list.length; i++){
        if (list[i] < min){
            min = list[i];
        }
    }
    return min;
}

export function findMax(list){
    let max = 0;
    for (let i = 0; list.length > i; i++){
        if (list[i] >= max){
            max = list[i];
        }
    }
    return max;
}
