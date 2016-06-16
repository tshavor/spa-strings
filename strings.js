

// Instructions


// 3. The text input should only accept letters. No numbers. (WORKS!)
var inputBox = document.getElementById('inputValue');
var thisButton = document.getElementById('myButton');


thisButton.addEventListener('click', function (e) {
	if (inputBox.value.match(/^[a-zA-z]+$/)) {
		alert("Only Letters");
	} else{
		alert("There are Numbers or special characters");
	}
})

// This functon targets the Id numbers for the input value string on the DOM
	// function getValues (){
	// 	var enteredString = (document.getElementById("inputValue").value );
	// 	console.log("enteredString", enteredString);


// var testString = "";
// var reversal(testString);
// var alphabits(testString);
// var palindrome(testString);

// // 4. Implement the logic in the reversal function that reverses the order of the characters in the string, 
// // and outputs the result in the DOM, below the text input.


// 	function reversal() {
// 		reversal= testString.reverse();
// 		console.log ("reversal", reversal);
// }


	// var testString = ["1","2","3","4","5" ];
	// var reversedTestString= testString.reverse();
	// console.log("reversedTestString", reversedTestString);

	


// // 5. Implement the logic in the alphabits function that return the characters in alphabetical order, 
// // and outputs the result in the DOM, below the text input.
// function alphabits() {

// }
// // 6. Implement the logic in the palindrome function that determine whether the string is a palindrome. 
// // If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// function palindrome() {

// var isPalindrome = function (string) {
//     if (string == string.split('').reverse().join('')) {
//         alert(string + ' is palindrome.');
//     }
//     else {
//         alert(string + ' is not palindrome.');
//     }
// }
// }

// // 7. When the user presses the enter key in the text input, or clicks the button, set the value of the testString 
// // variable (see below) to the value of the input.
// // The output of each of the functions should immediately appear as well.







