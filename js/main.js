'use strict';
// Подсчет ссылок
var amountNumbers = 25;
var arrayNumbers = [];
for (var i = 0; i <= amountNumbers; i++) {
  i;
  var photosUrl = 'photos/' + i + '.jpg'
  arrayNumbers.push(photosUrl)
};
// функция получения какого-то числа
var toGetNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
var someLikes = toGetNumber(15, 200); // какое-то число лайков, переменную приравниваем к рандомному числу//
// массив имен
var arrayNames = ['Alex', 'Kate', 'Dadd', 'Todd', 'Mark', 'Jon', 'Vlad', 'Petr', 'Rodd', 'Sten', 'Loki', 'Vasya', 'Petya', 'Ann', 'Sofi', 'Elsa', 'Erl', 'Gray', 'Tedd', 'Jorn', 'Lande', 'Axel', 'Volker', 'Mike', 'John'];
var toGetName = function (arrayNames) { // подсчёт имен
  var number = toGetNumber(0, arrayNames.length);
  var names = arrayNames[number];
  return names;
};
var amountNames = 25;
var namesArray = [];
for (var i = 0; i <= amountNames; i++) {
  var name = toGetName(arrayNames);
  namesArray.push(name);
};
//--------------------
var arrayComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.']; // Массив комментариев
//--------------------
var calculateComments = toGetNumber(0, 2); // Подсчет комментариев
var comment = arrayComments[calculateComments];
//--------------------
//var url = 'photos/' + toGetNumber(0, 24) + '.jpg'; // Подсчет ссылок
var amount = 6;
var namesAvatars = [];
for(var i = 0; i <= amount; i++) {
  i;
  var avatars = 'img/avatar-' + i + '.svg'; // Подсчет аватаров
  namesAvatars.push(avatars);
};
var photosArray = []; //Пустой массив, который мы будем заполнять цифрами
for(var i = 0; i < amount; i++) { //Задаем цикл нужной длинны.
  name = toGetNumber(); // Генерируем новое имя и записываем его в переменную name
  photosArray.push(name); //Записываем сгенерированное имя в массив.
};
// объект комментариев
var commentObject = {
  avatars: namesAvatars[toGetNumber(0, namesAvatars.length),
  comments: arrayComments[toGetNumber(0, arrayComments.length),
  name: namesArray[toGetNumber(0, arrayNames.length)
}
// массив для 25 объектов
var amountObjects = 25;
var arrayObjects = [];
for (var i = 0; i < amountObjects.length; i++) {
  // переменная с описанием пользователя
  var usersNames = {
    url: arrayNumbers[1],
    likes: toGetNumber(15, 200),
    comments: commentObject
  };
   i = usersNames;
  usersNames = toGetNumber(0, amountObjects.length);
  arrayObjects.push(usersNames);
};
//--------------------
//var array = []
//for
/*var usersNames = {
  name: namesArray[toGetNumber(0, arrayNames.length)],
  avatar: namesAvatars[toGetNumber(0, namesAvatars.length)],
  url: arrayNumbers[1],
  likes: toGetNumber(15, 200),
  comments: arrayComments[toGetNumber(0, arrayComments.length)]
};
*/
// --- К пункту 4 задания
/*var bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');
// --- К пункту 5 задания
var countComments = document.querySelector('.social__comment-count');
countComments.classList.add('visually-hidden');
// ---
var commentsLoader = document.querySelector('.comments-loader');
commentsLoader.classList.add('visually-hidden');
*/
