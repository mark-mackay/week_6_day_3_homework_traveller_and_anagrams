const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('').sort();
}

PangramFinder.prototype.isPangram = function () {
      // console.log(this.phrase.includes(this.alphabet));
      // return this.phrase.includes(this.alphabet);
      let matchAll = true;
      let i = 0;
      while (i < 26 && matchAll)
       {
         this.phrase.includes(this.alphabet[i]) ? i++ : matchAll = false;
      }

      return matchAll;
}

module.exports = PangramFinder;
