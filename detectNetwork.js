// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
  // Note: `cardNumber` will always be a string
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Step 1!---------------------------------------------------
  var cardNumLength = cardNumber.length;
  var firstTwoInts = cardNumber.slice(0, 2);
  var firstThreeInts = cardNumber.slice(0, 3);
  var firstFourInts = cardNumber.slice(0, 4);
  var firstFiveInts = cardNumber.slice(0, 5);
  var firstSixInts = cardNumber.slice(0, 6);
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (cardNumLength === 14 && (firstTwoInts === '38' || firstTwoInts === '39')) {
  	return 'Diner\'s Club';
  }
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  else if (cardNumLength === 15 && (firstTwoInts === '34' || firstTwoInts === '37')) {
  	return 'American Express';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  // Step 2!-----------------------------------------------------
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  else if ((cardNumLength === 13 || cardNumLength === 16 || cardNumLength === 19) && (cardNumber[0] === '4' && firstFourInts !== '4903' && firstFourInts !== '4905' && firstFourInts !== '4911' && firstFourInts !== '4936')) {
  	return 'Visa';
  }
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  else if (cardNumLength === 16 && (firstTwoInts === '51' || firstTwoInts === '52' || firstTwoInts === '53' || firstTwoInts === '54' || firstTwoInts === '55')) {
  	return 'MasterCard';
  }
  // Step 3!--------------------------------------------------------
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  else if ((cardNumLength === 16 || cardNumLength ===19) && (firstTwoInts === '65' || (Number(firstThreeInts) >= 644 && Number(firstThreeInts) <= 649) || firstFourInts === '6011')) {
  	return 'Discover';
  }
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  else if ((cardNumLength >= 12 && cardNumLength <= 19) && (firstFourInts === '5018' || firstFourInts === '5020' || firstFourInts === '5038' || firstFourInts === '6304')) {
  	return 'Maestro';
  }
  //Step 4!----------------------------------------------------------
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  else if ((cardNumLength >= 16 && cardNumLength <= 19) && 
  	((Number(firstSixInts) >= 622126 && Number(firstSixInts) <= 622925)  || (Number(firstThreeInts) >= 624 && Number(firstThreeInts) <= 626) || (Number(firstFourInts) >= 6282 && Number(firstFourInts) <= 6288))) {
  	return 'China UnionPay';
  }
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  // Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
  else if ((cardNumLength === 16 || cardNumLength === 18 || cardNumLength === 19) && (firstFourInts === '4903' || firstFourInts === '4905' || firstFourInts === '4911' || firstFourInts === '4936' || firstFourInts === '6333' || firstFourInts === '6759' || firstSixInts === '564182' || firstSixInts === '633110')) {
  	return 'Switch'
  }
}




