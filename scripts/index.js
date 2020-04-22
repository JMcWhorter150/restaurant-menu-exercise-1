function getCategories(menu) {
    return Object.keys(menu);
}

let categories = getCategories(menu); // ['breakfast', 'lunch', 'dinner', 'dessert']

function nameToListItem(name) {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    return listItem;
}

nameToListItem('breakfast') // <li>breakfast</li>

function categoriesToListItems(arrOfStrings) {
    const arrOfListItems = [];
    arrOfStrings.forEach(function(str) {
        const listItem = nameToListItem(str);
        arrOfListItems.push(listItem);
    })
    // for(let i=0;i<arrOfStrings.length;i++) {
    //     const listItem = nameToListItem(arrOfStrings[i]);
    //     arrOfListItems.push(listItem);
    // }
    return arrOfListItems;
}

function categoriesToListItems2(arrOfStrings) {
    return arrOfStrings.map(nameToListItem);
}
const arrOfListItems = categoriesToListItems(categories);
const arrOfListItemsNew = (categoriesToListItems2(categories)); // [li, li, li ,<li>dessert</li>]


function appendElement(element) {
    const jsMenu = document.querySelector('.js-menu');
    jsMenu.appendChild(element);
}

// let randomElement = document.createElement('h1');
// randomElement.textContent = "Hello World";

// appendElement(randomElement);
// WORKS

arrOfListItems.forEach(appendElement);

function handleClick(event) {

    let element = event.target; // <li>breakfast</li>
    if (element.style.backgroundColor === "orange") {
        element.style.backgroundColor = "white";
    } else {
        element.style.backgroundColor = "orange";
    }
}

const listElement = document.querySelector('li');
console.log(listElement); // <li>breakfast</li>

listElement.addEventListener('click', handleClick)

function addClickHandler(arrOfElements) {
    arrOfElements.forEach(function (element) {
        element.addEventListener('click', handleClick);
    })
}

addClickHandler(arrOfListItems);