'use strict';
// 1 - считаем ссылки для фотографии URL, чтобы поставить в url объекта
var amountNumbers = 25;
var arrayPhotoNumbers = [];
for (var i = 1; i <= amountNumbers; i++) {
  var photosUrl = 'photos/' + i + '.jpg';
  arrayPhotoNumbers.push(photosUrl);
}

// 2 - Чтобы получить рандомное число делаем функию с Math.random()
var toGetNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

// 4 - Создаем массив имён, имя будет случайно выбранным
var arrayNames = ['Alex', 'Kate', 'Dadd', 'Todd', 'Mark', 'Jon', 'Vlad', 'Petr', 'Rodd', 'Sten', 'Loki', 'Vasya', 'Petya', 'Ann', 'Sofi', 'Elsa', 'Erl', 'Gray', 'Tedd', 'Jorn', 'Lande', 'Axel', 'Volker', 'Mike', 'John'];
/*
// 5 - Чтобы получить имя из списка нужно подставить в функцию масссив
var toGetName = function () {
  var number = toGetNumber(0, arrayNames.length);
  var names = arrayNames[number];
  return names;
};
*/
// 6 - Массив с комментариями
var arrayComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.'];

// 7 - Считаем аватары, которые потом добавим к объекту comments, в свою очередь потом объект comments подставим в объект objUsers
var amount = 6;
var namesAvatars = [];
for (var j = 0; j <= amount; j++) {
  var avatars = 'img/avatar-' + j + '.svg';
  namesAvatars.push(avatars);
}
// 8 - Объект комментариев, который мы подставим в objUsers к свойству comments:
var commentObject = {
  avatars: namesAvatars[toGetNumber(0, namesAvatars.length)],
  comments: arrayComments[toGetNumber(0, arrayComments.length)],
  name: arrayNames[toGetNumber(0, arrayNames.length)]
};

// 9 - Последнее, создаем массив 25 пользователей arrayObjects, в котором будут содержаться объекты пользователей, для этого делаем цикл
// с пересчетом переменной num, дальше, приравняем её к другой переменной для понятия номера пользователся
var amountObjects = 25;
var arrayObjects = [];
for (var num = 1; num <= amountObjects; num++) {
  var users = num;
  users = {
    url: arrayPhotoNumbers[toGetNumber(0, arrayPhotoNumbers.length)],
    likes: toGetNumber(15, 200),
    comments: commentObject
  };
  arrayObjects.push(users);
}
// console.log()
/*
// --- К пункту 4 задания
var bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');
// --- К пункту 5 задания
var countComments = document.querySelector('.social__comment-count');
countComments.classList.add('visually-hidden');
// ---
var commentsLoader = document.querySelector('.comments-loader');
commentsLoader.classList.add('visually-hidden');

var amountObjects = 25;
var arrayObjects = [];
for (var num = 1; num <= amountObjects; num++) {
  users = {
    likes: toGetNumber(15, 200),
    comments: commentObject
  };
  arrayObjects.push(num);
}
console.log()
*/
