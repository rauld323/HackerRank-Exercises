// Vowel Count 
// Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains(ie. "All cows eat grass and moo" would return 8).Do not count y as a vowel for this challenge.

//Short using Regex
function VowelCount(str) {

   //match() retrieves the result of matching a string against a regular expression.
   //In this example, match is comparing it to regex [aeiou] 'g' performas a global mathc and the 'i' modifier is used to perform case-insensitive matching
   var vowels = str.match(/[aeiou]/gi);
   
   //ternary operator returns intentional abscence. 
   return vowels === null ? 0 : vowels.length

}

// keep this function call here 
console.log(VowelCount('Lkxrw'));



//Long Way using for loop
function vowel_count(str1) {

    //vowel_list holds what will used to compare the vowels to. I could have easily other letters to the list.
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str1.length; x++) {
        //if letters do not appear on the vowel_list (-1) add them to vcount/
        if (vowel_list.indexOf(str1[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(vowel_count("The quick brown fox"));



