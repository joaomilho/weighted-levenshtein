const weightedLevenshtein = (weightFn = () => 1) => (str1, str2) => {
  const str1Len = str1.length
  const str2Len = str2.length

  // base cases
  if (str1Len === 0) return str2Len
  if (str2Len === 0) return str1Len

  const str1Chars = str1.split("")
  const str2Chars = str2.split("")

  // two rows
  var curCol, nextCol, i, j, tmp

  // initialise previous row
  const prevRow = []
  for (i = 0; i < str2Len; ++i) {
    prevRow[i] = i
  }
  prevRow[str2Len] = str2Len

  var strCmp
  // calculate current row distance from previous row without collator
  for (i = 0; i < str1Len; ++i) {
    nextCol = i + 1

    for (j = 0; j < str2Len; ++j) {
      curCol = nextCol

      // substution
      strCmp =
        str1Chars[i] === str2Chars[j] ? 0 : weightFn(str1Chars[i], str2Chars[j])

      nextCol = prevRow[j] + strCmp

      // insertion
      tmp = curCol + 1
      if (nextCol > tmp) {
        nextCol = tmp
      }

      // deletion
      tmp = prevRow[j + 1] + 1
      if (nextCol > tmp) {
        nextCol = tmp
      }

      prevRow[j] = curCol
    }

    prevRow[j] = nextCol
  }

  return nextCol
}

module.exports = weightedLevenshtein
