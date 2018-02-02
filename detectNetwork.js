// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  
 //indicatorRule returns te]]
  var indicatorRule = function(prefixArr, lengthArr){
    var prefix ='';
    var hasPrefix = prefixArr.some(function(val) {
      if (typeof val === 'number'){
        val = val.toString();
      }
      prefix = cardNumber.slice(0,(val.length));
     
      return val == prefix; 
    });
    var hasLength = lengthArr.some(function(val) {
      return val === cardNumber.length; 
    });
    
    if(hasLength && hasPrefix){
      return prefix;
    }else {return null;};
  }
  var cardRules={
    'American Express': {prefixArr:[34,37], lengthArr: [15]},
    'Diner\'s Club': {prefixArr:['38','39'], lengthArr: [14]},
    'Visa': {prefixArr:['4'], lengthArr:[13, 16, 19]},
    'MasterCard': {prefixArr:['51','52','53','54','55'], lengthArr:[16]},
    'Discover': {prefixArr:['6011','644','645','646','647','648','649','65'], lengthArr:[16,19]},
    'Maestro':{prefixArr:['5018','5020','5038','6304'], lengthArr:[12,13,14,15,16,17,18,19]},
    'China UnionPay':{prefixArr: range(622126,622925).concat(range(6282,6288).concat(range(624,626))), lengthArr:[16,17,18,19]},
    'Switch': {prefixArr:[4903,4905,4911,4936,564182,633110,6333,6759], lengthArr:[16,18,19]}
    }
    
  var cardMatch = '';
  var maxPrefix = '';
  
  for (card in cardRules){   
    let validPrefix = indicatorRule(cardRules[card].prefixArr, cardRules[card].lengthArr);
    
    if (validPrefix && (validPrefix.length > maxPrefix.length)){
      maxPrefix = validPrefix;
      cardMatch = card;
    }
  }
  
  return (cardMatch ? cardMatch : "unrecognized card type");
  
};

//helper function to deal with ranges
//assumption that two, non-equal numbers are provided and start<end
//returns array containing all numbers from start to end
function range(start, end){
  var arr = [];
  for(start;start<=end;start++){
    arr.push(start);
  }
  return arr;
}

