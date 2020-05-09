const _ = require("lodash");

const top_3_words = (string) => {
  let result = [];
  const wordCounts = {};
  const plainText = string.toLowerCase().replace(/'\B|[^a-z'? ]/g, ``); // Removes special chars and numbers.

  const words = plainText.split(" ").filter((el) => el); // create an array of words and removes empty values.

  for (var i = 0; i < words.length; i++) { // iterates words array and create an object that has for attributes each word, and assign a value to it.
    wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1; // if the attribute is undefined assign 0 otherwise add 1 to the existing value.
  }

  const invertedObject = _.invertBy(wordCounts); // inverted key: value to value: key

  for (let [key, value] of Object.entries(invertedObject)) { // iterate through key-value
    value.reverse().map((word) => result.push(word));
  }

  result = result.reverse().slice(0, 3); // reverseing the array and keeps only the firts three values
  return result
};

module.exports = top_3_words;
