"use strict";

// 1. Написати функцію, яка повертає об'єкт родина з властивостями, які мають вигляд:
// ключ - ім'я члена родини, а значення - хто із членів родини
// (мінімум родина з 3 осіб)
// Інформацію про особу запитувати у користувача.
// Вивести отриманий об'єкт за допомогою for..in

function infoFamily() {
  const family = {};
  while (true) {
    for (let i = 0; i < 3; i++) {
      const userKey = prompt("Enter your name!");
      const userMember = prompt("Which family member are you?");
      if (Number(userKey) || userKey === null || userKey === "" ||userKey === " ") {
        console.log("Wrong, try again!");
        continue;
      } else if (Number(userMember) || userMember === null || userMember === "" || userMember === " ") {
        console.log("Wrong, try again!");
        continue;
      }
      family[userKey] = userMember;
    }
    return family;
  }
}

const resultFamily = infoFamily();

for (const key in resultFamily) {
  console.log(key, resultFamily[key]);
}
