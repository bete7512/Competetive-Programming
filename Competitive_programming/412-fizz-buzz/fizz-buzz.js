/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {

    let answers = []
    for (i = 1; i <= n;i++){
    if (i % 3 == 0 && i % 5 ==0){
        answers.push("FizzBuzz")
    }
    else if (i % 3 ==0){
         answers.push("Fizz")
    } else if (i % 5 == 0){
        answers.push("Buzz")
    } else {
        str = i.toString()
         answers.push(str)
    }
    }
    return answers
};