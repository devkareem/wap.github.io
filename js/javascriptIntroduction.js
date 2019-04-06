   /* runs test to see if expected argument is === to value returned by function2test argument */
   function myFunctionTest(expected, function2test) {
    let actualy=function2test();
    
    if(Array.isArray(actualy)){
        const txtActualy=actualy.join(",");
        const txtexpected=expected.join(",");
        if (txtexpected === txtActualy) {
         return "TEST SUCCEEDED";
     } else {
         return "TEST FAILED.  Expected " + txtexpected + " found " + txtActualy;
     }

    }
    else{
     if (expected === actualy) {
         return "TEST SUCCEEDED";
     } else {
         return "TEST FAILED.  Expected " + expected + " found " + actualy;
     }
    }
     
 }

 /* max returns the maximum of 2 arguments */
 function max(a, b) {
     if (a > b) {
         return a;
     } else {
         return b;
     }
     ;
 }
 console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
     return max(20, 10);
 }));

 /* max3 takes 3 numbers as arguments and returns the largest */
 function maxOfThree(a, b, c) {
     return max(max(a, b), c);

 }

 console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, function () {
     return maxOfThree(5, 4, 44);
 }));
 console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, function () {
     return maxOfThree(55, 4, 44);
 }));
 console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, function () {
     return maxOfThree(55, 4, 44);
 }));

 /*Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise*/
 function isVowel(char){
     const vowls=["A", "E", "I", "O","U"];
     return vowls.find(function(elemnt){
         return char.toUpperCase() ===elemnt;
     })===char.toUpperCase();
 }

 console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, function () {
     return isVowel("a");
 }));

 console.log("Expected output of isVowel('s') is false  " + myFunctionTest(false, function () {
     return isVowel("s");
 }));

 console.log("Expected output of isVowel('u') is false  " + myFunctionTest(false, function () {
     return isVowel("u");
 }));

 /*Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. */
 function sum(arr){
     const sumtion=arr.reduce(function(accumaltor,currentValue,currentIndex){
         return accumaltor+currentValue;
     });
     return sumtion;
 }

 console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
     return sum([1,2,3,4]);
 }));

 console.log("Expected output of sum([1,2,3,4]) is 11  " + myFunctionTest(11, function () {
     return sum([1,2,3,4]);
 }));

 function multiply(arr){
     return arr.reduce(function(accumlator,currentValue,currentIndex){
         return accumlator*currentValue;
     });
 }

 console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
     return multiply([1,2,3,4]);
 }));

 console.log("Expected output of multiply([1,2,3,4]) is 25  " + myFunctionTest(25, function () {
     return multiply([1,2,3,4]);
 }));

 /*Define a function reverse() that computes the reversal of a string.*/

 function reverse(word){
     let result="";
     for(let i=word.length-1;i>=0;i--){
         result+=word.charAt(i);
         }
     return result+"";
 }

 console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest("ratset gaj", function () {
     return reverse("jag testar");
 }));

 console.log("Expected output of reverse('kareem') is 'meerak'  " + myFunctionTest("meerak", function () {
     return reverse("kareem");
 }));

 console.log("Expected output of reverse('jag testar') is 'ratset gja'  " + myFunctionTest("ratset gja", function () {
     return reverse("jag testar");
 }));

 /*Write a function findLongestWord() that takes an array of words and returns the length of the longest one.*/

 function findLongestWord(arr){
     let result=0;
     arr.forEach(function(elemnt){
         if(elemnt.length > result) result=elemnt.length;
     });
     return result;
 }

 console.log("Expected output of findLongestWord(['kareem','hamza','habiba','sahar','ghandor']) is 7  " + myFunctionTest(7, function () {
     return findLongestWord(['kareem','hamza','habiba','sahar','ghandor']);
 }));

 /*Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.*/

 function filterLongWords(arr,i){
     let result=[];
     arr.forEach(function(elemnt){
         if(elemnt.length > i) result.push(elemnt);
     });
     return result;
 }
 console.log("Expected output of filterLongWords(['kareem','hamza','habiba','sahar','ghandor'],5) is ['kareem','habiba','ghandor']  " + myFunctionTest(['kareem','habiba','ghandor'], function () {
     return filterLongWords(['kareem','hamza','habiba','sahar','ghandor'],5);
 }));

 const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
return elem *10;
})
console.log(b);
const c = a.filter(function(elem, i, array){
return elem === 3;});
console.log(c);
const d = a.reduce(function(prevValue, elem, i, array){
return prevValue * elem;
});
console.log(d);