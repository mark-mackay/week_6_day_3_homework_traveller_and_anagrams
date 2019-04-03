const IsogramFinder = function (word) {
   this.word = word.toLowerCase().split('');
   this.comparison = this.word;
}

IsogramFinder.prototype.isIsogram = function () {
  arr = this.word.filter( (letter , position) => {
    return this.word.indexOf(letter) === position;
  });
  return arr.length === this.word.length;
}

module.exports = IsogramFinder;
