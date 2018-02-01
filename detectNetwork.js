// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var prefix = cardNumber.slice(0,2); 
  
  var indicatorRule = function(prefixArr, length){   //will only handle exactly two prefixes right now 
    return (cardNumber.length === length) && (prefix === prefixArr[0] || prefix === prefixArr[1]);
  }
  
  var cardRules={
    'American Express': {prefixArr:['34','37'], length: 15},
    'Diner\'s Club': {prefixArr:['38','39'], length: 14}
  }

  for (card in cardRules){
    if (indicatorRule(cardRules[card].prefixArr, cardRules[card].length)){
      return card;
    }
  }
  return "unrecognized card type";
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
};

