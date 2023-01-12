// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
// I added missing semicolons to lines 13 (the code block) and 16 (the call)
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();


// EX 2:
// Added missing semicolon to line 23 (first line of the code block)
// and corrected indentation for the code block and closing curly bracket
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
// Fixed the position of the closing curly bracket,
// and fixed "func" to "function" so the code will actually work,
// and added a space on first line between closing parenthesis and open curly bracket.
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();


//  EX 4:
// Moved opening curly bracket to end of first line.
// Plus fixed indentations of the code block,
// removed the empty line in middle of code block,
// moved the period to inside the closing backtick,
// added missing semicolon to end of console.log statement,
// and corrected indentation for closing curly bracket.
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}.`);
}