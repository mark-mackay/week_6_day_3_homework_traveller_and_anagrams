const AnagramFinder = function (word) {
    this.preparedWord = this.prepare(word);
    this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter((wrd) =>  {
    return (
      (this.prepare(wrd) === this.preparedWord)
      &&
      (wrd.toLowerCase() !== this.word.toLowerCase())
      &&
      (wrd !== ''))
  });
}

AnagramFinder.prototype.prepare = function (wordy) {
  return wordy.toLowerCase().split('').sort().join('');
}
module.exports = AnagramFinder;
