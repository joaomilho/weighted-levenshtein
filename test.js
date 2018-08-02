const test = require('ava')
const weightedLevenshtein = require('./')

const regularLevenshtein = weightedLevenshtein()
const specialLevenshtein = weightedLevenshtein((char1, char2) => {
  return char1 === '@' && char2 === '!' ? 0 : 1
})

test('regularLevenshtein', t => {
	t.is(regularLevenshtein('', '123'), 3);
  t.is(regularLevenshtein('123', ''), 3);

  t.is(regularLevenshtein('123', '123'), 0);
  t.is(regularLevenshtein('123', '13'), 1);
  t.is(regularLevenshtein('123', '1x3'), 1);
  t.is(regularLevenshtein('123', '1x3x'), 2);

  t.is(regularLevenshtein('@', '!'), 1);
})


test('specialLevenshtein', t => {
	t.is(specialLevenshtein('@', '!'), 0);
})
