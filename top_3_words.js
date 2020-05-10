const top_3_words = (string) => {
  let result = [];
  let invertedObject = {}
  const wordCounts = {};
  const plainText = string.toLowerCase().replace(/'\B|[^a-z'? ]/g, ``); // Removes special chars and numbers.

  const words = plainText.split(" ").filter((el) => el); // create an array of words and removes empty values.

  for (var i = 0; i < words.length; i++) { // iterates words array and create an object that has for attributes each word, and assign a value to it.
    const element = words[i]
    wordCounts[element] = (wordCounts[element] || 0) + 1; // if the attribute is undefined assign 0 otherwise add 1 to the existing value.
  }
  // inverting key: value to value: key
  for (let key in wordCounts) {  // for ... in to iterate over the properties of an object
    const value = wordCounts[key]; 
    invertedObject[value] = invertedObject[value] || []; // if the attribute is undefined create an empty array 
    invertedObject[value].push(key); // push the key in the attribute array
  }

  for (let [key, value] of Object.entries(invertedObject)) { //  to iterate over the values 
    value.reverse().map((word) => result.push(word));
  }

  result = result.reverse().slice(0, 3); // reverseing the array and keeps only the first three values
  return result;
};

module.exports = top_3_words;
