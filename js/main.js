'use strict';
var arrayNames = ['Alex', 'Kate', 'Dadd', 'Todd', 'Mark', 'Jon', 'Vlad', 'Petr', 'Rodd', 'Sten', 'Loki', 'Vasya', 'Petya', 'Ann', 'Sofi', 'Elsa', 'Erl', 'Gray', 'Tedd', 'Jorn', 'Lande', 'Axel', 'Volker', 'Mike', 'John'];
var arrayComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var calculateUrl = function (amountNumbers) {
  var arrayPhotoNumbers = [];
  for (var i = 1; i <= amountNumbers; i++) {
    var photosUrl = 'photos/' + i + '.jpg';
    arrayPhotoNumbers.push(photosUrl);
  }
  return amountNumbers;
};
var toGetNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
var calculateAvatars = function (amountAvatars) {
  var namesAvatars = [];
  for (var j = 0; j <= amountAvatars; j++) {
    var avatars = 'img/avatar-' + j + '.svg';
    namesAvatars.push(avatars);
  }
  return amountAvatars;
};
var commentObject = {
  avatars: namesAvatars[toGetNumber(0, namesAvatars.length)],
  comments: arrayComments[toGetNumber(0, 7)],
  name: arrayNames[toGetNumber(0, arrayNames.length)]
};
var calculateObjUsers = function (amountObjects) {
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
  return amountObjects;
};

var similarPictures = document.querySelector('.picture');
var similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture-img');
document.
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
*/
