'use strict';
// функция получения какого-то числа
var toGetNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
toGetNumber();
// какое-то число лайков, переменную приравниваем к рандомному числу//
var likes = toGetNumber(15, 200);
// массив имен
var arrayNames = ['Alex', 'Kate', 'Dadd', 'Todd', 'Mark', 'Jon', 'Vlad', 'Petr', 'Rodd', 'Sten', 'Loki', 'Vasya', 'Petya', 'Ann', 'Sofi', 'Elsa', 'Erl', 'Gray', 'Tedd', 'Jorn', 'Lande', 'Axel', 'Volker', 'Mike', 'John'];
// подсчёт имен
var toGetName = function () {
  var number = toGetNumber(0, arrayNames.length);
  var names = arrayNames[number];
  return names;
};
var amountNames = 25;
var namesArray = [];
for (var i = 0; i <= amountNames; i++) {
  var name = toGetName();
  namesArray.push(name);
}
// массив комментариев
var arrayComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'];
var calculateComments = toGetNumber(0, 1);
var comment = arrayComments[calculateComments];
// Подсчет ссылок
// var url = 'photos/{{toGetNumber}}.jpg';
// Массив пользователя
var urls = toGetNumber(0, 25);
var url = 'photos/{{urls}}.jpg';
var arrayUsers = [url, likes, comment];
var users = Math.random(arrayUsers);
/*
var calculateAvatars = function (avatars) {
  var userAvatar = 0;
  for ( var i = 1; i <= avatars.length; i++) {
    userAvatar += avatars[i];
  }
  return userAvatar;
}
*/
