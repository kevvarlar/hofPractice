// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var results = [];
  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      results.push(number);
    }
  });
  return results.length;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var results = [];
  _.each(tweets, function(tweet, index, collection) {
    if (tweet['user'] === user) {
      results.push(tweet);
    }
  });
  return results;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  var filter = _.filter(fruits, function(fruit, index, collection) {
    if (fruit === targetFruit) {
      return targetFruit;
    }
  });
  return [filter[0]];
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  var filter = _.filter(fruits, function(fruit, index, collection) {
    if (fruit[0] === letter) {
      return fruit;
    }
  });
  return filter;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  var filter = _.filter(desserts, function(dessert, index, collection) {
    if (dessert['type'] === 'cookie') {
      return dessert;
    }
  });
  return filter;
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  var filter = _.filter(tweets, function(tweet, index, collection) {
    if (tweet['user'] === user) {
      return tweet;
    }
  });
  return filter;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  var map = _.map(fruits, function(fruit, index, collection) {
    return fruit.toUpperCase();
  });
  return map;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  var map = _.map(desserts, function(dessert, index, collection) {
    if (!dessert['ingredients'].includes('flour')) {
      dessert['glutenFree'] = true;
    } else if (dessert['ingredients'].includes('flour')) {
      dessert['glutenFree'] = false;
    }
    return dessert;
  });
  return map;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  var map = _.map(tweets, function(tweet, index, collection) {
    return tweet['message'];
  });
  return map;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  var map = _.map(groceries, function(item, index, collection) {
    item['salePrice'] = '$' + (parseFloat(item['price'].slice(1)) * (1.0 - coupon)).toFixed(2);
    return item;
  });
  return map;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  var reduce = _.reduce(products, function(accumulator, item) {
    var price = parseFloat(item['price'].slice(1));
    return price + accumulator;
  },
  0.);
  return reduce;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  var reduce = _.reduce(desserts, function(accumulator, item) {
    if (accumulator[item['type']] === undefined) {
      accumulator[item['type']] = 1;
    } else {
      accumulator[item['type']] += 1;
    }
    return accumulator;
  },
  {});
  return reduce;
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  var reduce = _.reduce(tweets, function(accumulator, item) {
    if (accumulator[item['user']] === undefined) {
      accumulator[item['user']] = 1;
    } else {
      accumulator[item['user']] += 1;
    }
    return accumulator;
  },
  {});
  return reduce;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  var reduce = _.reduce(movies, function(accumulator, item) {
    if (item['releaseYear'] > 1989 && item['releaseYear'] < 2001) {
      accumulator.push(item['title']);
    }
    return accumulator;
  },
  []);
  return reduce;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  var reduce = _.reduce(movies, function(accumulator, item) {
    if (item['runtime'] < timeLimit) {
      return true;
    }
  },
  false);
  return isThereAShorterRuntime;
};
