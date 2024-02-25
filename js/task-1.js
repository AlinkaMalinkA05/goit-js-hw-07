const list = document.querySelector("#categories");
const childList = document.querySelectorAll(".item");
console.log(`Number of categories: ${childList.length}`); 
childList.forEach(element => {
    const childListTitle = element.querySelector("h2").textContent;
    const numbersOfElements = element.querySelectorAll("li")

    console.log( `Category: ${childListTitle}`);
    console.log(`Elements: ${numbersOfElements.length}`);
});