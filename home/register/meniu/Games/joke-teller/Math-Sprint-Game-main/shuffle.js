function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // daca raman elemente then shuffle
  while (0 !== currentIndex) {

    // alege un  remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // schimba cu elementul curent
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}