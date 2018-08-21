// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  var cardNumLength = cardNumber.length;
  var firstTwoInts = cardNumber.slice(0, 2);
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (cardNumLength === 14 && (firstTwoInts === '38' || firstTwoInts === '39')) {
  	return 'Diner\'s Club';
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  else if (cardNumLength === 15 && (firstTwoInts === '34' || firstTwoInts === '37')) {
  	return 'American Express';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  else if ((cardNumLength === 13 || cardNumLength === 16 || cardNumLength === 19) && cardNumber[0] === '4') {
  	return 'Visa';
  }
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  else if (cardNumLength === 16 && (firstTwoInts === '51' || firstTwoInts === '52' || firstTwoInts === '53' || firstTwoInts === '54' || firstTwoInts === '55')) {
  	return 'MasterCard';
  }
};


