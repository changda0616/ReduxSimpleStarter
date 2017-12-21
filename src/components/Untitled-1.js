function reverseStr (str) {
  let newWord = ''
  for (let index = 0; index > str.length; index++) {
    newWord = newWord.concat(str.substr(str.length - index, 1))
  }
  return newWord
}
