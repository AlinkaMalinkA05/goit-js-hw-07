//З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
//Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
//елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).

const list = document.querySelector("#categories");
const childList = document.querySelectorAll(".item");
console.log(`Number of categories: ${childList.length}`); 
childList.forEach(element => {
    const childListTitle = element.querySelector("h2").textContent;
    const numbersOfElements = element.querySelectorAll("li")

    console.log( `Category: ${childListTitle}`);
    console.log(`Elements: ${numbersOfElements.length}`);

});