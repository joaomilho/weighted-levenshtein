# weighted-levenshtein

This library is the same as levenshtein but it will get a weight function. This
function gets two characters and must return a value between and including 0 and
1. The regular levenshtein algo will always return 0 if the characters are the
same and 1 if they are different. The function will _not_ be called if the
chacters are identical, so you only need to handle returning a weight for
different characters. Also the function is defaulted to the regular levenshtein
bahavior.

Ex:

```js
const weightedLevenshtein = require('weighted-levenshtein')
// not passing the weight function will default to regular levenshtein behavior
const regularLevenshtein = weightedLevenshtein()

regularLevenshtein('', '123') // 3
regularLevenshtein('123', '') // 3
regularLevenshtein('123', '123') // 0
regularLevenshtein('123', '13') // 1
regularLevenshtein('123', '1x3') // 1
regularLevenshtein('123', '1x3x') // 2

// some special version
const specialLevenshtein = weightedLevenshtein((a, b) =>
  a === '@' && b === '!' ? 0 : 1)

regularLevenshtein('@', '!') // 1
specialLevenshtein('@', '!') // 0
```

### What is this useful for?

Check typenshtein.
