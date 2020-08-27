// First Factorial
// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.


//Numbers should be passed on num 
function FirstFactorial(num) {

    //The intiator insures that we always start with 1
    var total = 1;
    //The for loop starts with one and increments untill its less than or equal to num.
    for (var i = 1; i <= num; i++) {
        //We multiply each numner to the ones that are being put in to total
         total *= i;
    }
    return total;
}

// keep this function call here 
console.log(FirstFactorial(3));




// Using a Recursive function for problem
function mulipleOfDigits(num) {
    //Base case used to determine when to terminate 
    if (num === 1) {
        //stop at 1
        return 1;
    } 
    //First num goes the base and one determines is as being false, it add thems to the return
    // mulipleOfDigits(4)
    // 4 + mulipleOfDigits(3)
    // 4 + (3 + mulipleOfDigits(2))
    // 4 + (3 + (2 + mulipleOfDigits(1)))
    // 4 + (3 + (2 + (1 + mulipleOfDigits(0))))
    // 4 + (3 + (2 + (1 + 0)))
    // 4 + (3 + (2 + 1))
    // 4 + (3 + 3)
    // 4 + 6 
    return num * mulipleOfDigits(num-1);
}
console.log(mulipleOfDigits(20))


