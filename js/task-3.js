function findLongestWord(string) {
  const wordSplit = string.split(' ');
  let longestWord = wordSplit[0];

  for (let i = 1; i < wordSplit.length; i += 1) {
    if (longestWord.length < wordSplit[i].length) {
      longestWord = wordSplit[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
