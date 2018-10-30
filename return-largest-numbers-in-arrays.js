function largestOfFour(arr) {
    let answer = [];
    for (let i in arr) {
        answer.push(Math.max(...arr[i]));
    }
    return answer;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
