var languagesArrayCreation = function () {
  return [ 'Html' , 'CSS' , 'Java' , 'PHP'] ;;
}

var numbersArrayCreation = function () {

    return [0,1,2,3,4,5];
}

var ElementReplacement = function (languages) {
  languages[2] = 'Javascript';
  return languages ;
}

var AddElementToLanguagesArray = function (languages) {
  // Push permet de mettre la saisie a la fin du tableau
  languages.push('Ruby');
  languages.push('Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  // Unshift permet de mettre la saise au debut le tableau
  numbers.unshift(-1);
  numbers.unshift(-2);
  return numbers;
}
  // shift supprime la premiére chaine de caractére d'un array
var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}
// Pop supprime la derniére chaine de caractére d'un array
var deleteArrayLastElement = function (languages) {
  languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
  // Split permet de séparé en 2 un string et en faire un array
  return socialMediaInString.split(',');
}

var arrayToString = function (languages) {
  // toString permet de transformer un array en string
  return languages.toString();
}

var arraySort = function (socialMedia) {
  // Sort permet de trier le tableau
  return socialMedia.sort();
}

var arrayInvert = function (socialMedia){
  // reverse permet de renversé le tableau
  return socialMedia.reverse();
}
