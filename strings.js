var inputBox = document.getElementById('inputValue');
var thisButton = document.getElementById('myButton');

thisButton.addEventListener('click', getValues)

// I need to add a part here that accounts for use of the ENTER key!


// This functon targets the Id numbers for the input value string on the DOM
// 3. The text input should only accept letters. No numbers. (WORKS!)
function getValues() {
	var enteredString = (document.getElementById("inputValue").value );
	if (enteredString.match(/^[a-zA-z]+$/)) {
		alert("Only Letters");
		console.log("enteredString", enteredString);
		reversal(enteredString)
		alphabetize(enteredString)
		palindrome(enteredString)

	} else{
		alert("There are Numbers or special characters");
	}
}

	// Now we run this string through the reversal function:
// // 4. Implement the logic in the reversal function that reverses the order of the characters in the string, 
// // and outputs the result in the DOM, below the text input.

// at this point, the function reversal hold the value of the input string and creates a new variable "teststring"
// and copies the contents or value of enteredString into testString.
// testStringonly exsits in this function!
function reversal(testString) {
	var reversalArray= testString.toLowerCase().split('').reverse();
	var reversalString = reversalArray.join('');
	// console.log ("reversal", reversalString);
	outputToDom(reversalString)
	return reversalString
}

// Now we need to send these results to the DOM...

	// (1)this is the old method of displaying things in the DOM (very unsafe due to the possibility of scripting atacks)
	// document.getElementById("display-output").innerHTML=whatToDisplay

	// (2)this is a better way of displaying things in the DOM
	// document.getElementById("display-output").insertAdjacentHTML("afterbegin", whatToDisplay)

	// (3) this is the BEST and SAFEST way to display things in the DOM!!!
	// created a variable called outputNode that creates an H1 element 
function outputToDom(whatToDisplay) {
	var outputNode = document.createElement("h1");
	// created another variable called "outputText" that will be what I place in the h1 element.
	var outputText = document.createTextNode(whatToDisplay);

	// these last 2 lines then create and place the value of
	outputNode.appendChild(outputText);
	document.getElementById("calcValues").appendChild(outputNode);
}
// // 5. Implement the logic in the alphabits function that return the characters in alphabetical order, 
// // and outputs the result in the DOM, below the text input.
// function alphabits() {
function alphabetize(testString2) {
	var alphabetizeString= testString2.toLowerCase().split('').sort().join('');
	// console.log ("alphabetize", alphabetizeString);
	outputToDom(alphabetizeString)
} 
// // 6. Implement the logic in the palindrome function that determine whether the string is a palindrome. 
// // If it is, display the text "Your string is a palidrome" in the DOM, below the text input.

function palindrome (testString3){ 
	var isPalindrome = false;
	var reverseTestString = reversal(testString3);

    if (testString3 === reverseTestString) {
        alert(testString3 + ' is palindrome.');
        isPalindrome = true;
    }
    else {
        alert(testString3 + ' is not palindrome.');
    }

    outputToDom(isPalindrome)
    return isPalindrome;
}

// // 7. When the user presses the enter key in the text input, or clicks the button, set the value of the testString 
// // variable (see below) to the value of the input.
// // The output of each of the functions should immediately appear as well.







