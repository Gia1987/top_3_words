# Top_3_words

### Requirements

- Write a function that, given a string of text (possibly with punctuation and
line-breaks), returns an array of the top-3 most occurring words, in descending
order of the number of occurrences.
- Assumptions: A word is a string of letters (A to Z) optionally containing one or
more apostrophes (’) in ASCII. (No need to handle fancy punctuation.) Matches
should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily. If a text contains fewer than three unique words,
then either the top-2 or top-1 words should be returned, or an empty array if a
text contains no words.

### Examples

- top_3_words("In a village of La Mancha, the name of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
``` # => ["a", "of", "on"] ```
- top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
``` # => ["e", "ddd", "aa"] ```
- top_3_words(" //wont won't won't")
``` # => ["won't", "wont"] ```


### Installation
```
    git clone https://github.com/Gia1987/top_3_words.git
    cd top_3_words
    npm install
```

### To run the Test
```
    npm run test
```
### Description 

- When the function receives the string, it starts manipulating it by making everything lowercase and removing all special characters and numbers.
In order to do that I have used the following regex ```/'\B|[^a-z'? ]/g```, where ```'\B``` will match and remove apostrophes which are not followed by a word character, and ```[^a-z'? ]/g``` match all strings that contain a non-letter. ```g``` stands for global.
- After that, it creates an array of words using ```split(' ')```, and removes any empty elements that can be generated by the process using the ```filter``` method.
- At this point, the function generates an object ```wordCounts``` that uses each word as key and assign a value to it . If the key is undefined it will assign 0, otherwise will add 1 to the existing value. In this way, I know how many times each letter appears in the text. For instance, if I pass this string ```This is a test! test``` to the function , it will generate an object like so ```{this: 1, is: 1, a: 1, test: 2 }```, where the values represent how many times the key appears in the text.  
- After that, in order to easily manipulate the data, the key => value pairs are swapped with value => key(s) pairs,
and the object become like so ```{ '1': [ 'this', 'is', 'a' ], '2': [ 'test' ] }```. To do that, I iterate over the attributes of ```wordsCounts``` object using ```for...in``` and if the new attribute does not exist yet, the funnction create an empty array and push the key into it.
- At this point, the function iterate through the new key-value pairs using ```for...of``` loop combined with ```object.entries()``` that returns an array. Here the value its an array, and first of all, it needs to be reversed to fix the original order messed up by the previous key-value swapping. And then push each word into the result array.
    ```
    for (let [key, value] of Object.entries(invertedObject)) { 
        value.reverse().map((word) => result.push(word));
    }
    ```
- Finally, our result array contains all the words in a strategical order containing the most occurrences words from the bottom of the array to the top 
```[ 'a', 'is', 'this', 'test' ]```. 
So now, in order to get the most occurrences word, the function will reverse the array and removes every elements after the third position.
- As a result, the function returns ```[ 'test', 'this', 'is' ]```.



