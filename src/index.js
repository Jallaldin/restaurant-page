// This is the main entry point for the application
// Import CSS styles later
// This code is only for planning purposes and will be later improved
// import './src/styles.css'; 

const content = document.querySelector('.content');
const resName = document.createElement('div');
resName.innerHTML = `Jallal's Restaurant`

content.appendChild(resName);

const menuSection = document.createElement('div');
menuSection.classList.add('menu-section');

content.appendChild(menuSection);

const dishesDiv = document.createElement('div');
dishesDiv.classList.add('dishes-div');

menuSection.appendChild(dishesDiv);

// Starter Dish Section
const starterDiv = document.createElement('div');
starterDiv.classList.add('starter-list');

const starterUList = document.createElement('ul');

const starterItems = ['Bruschetta', 'Garlic Bread', 'Stuffed Mushrooms', 'Caprese Salad'];
starterItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    starterUList.appendChild(li);
})

starterDiv.appendChild(starterUList);
dishesDiv.appendChild(starterDiv);

// Main Dish Section
const mainDiv = document.createElement('div');
mainDiv.classList.add('main-dish-div');

const mainUList = document.createElement('ul');

const mainDishList = ['Grilled Chicken', 'Spaghetti Bolognese', 'Vegetable Stir Fry', 'Beef Tacos'];
mainDishList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    mainUList.appendChild(li);
})

mainDiv.appendChild(mainUList);
dishesDiv.appendChild(mainDiv);

// Dessert Section
const dessertDiv = document.createElement('div');
dessertDiv.classList.add('dessert-div');

const dessertUList = document.createElement('ul');
const dessertList = ['Tiramisu', 'Cheesecake', 'Chocolate Mousse', 'Fruit Salad'];
dessertList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    dessertUList.appendChild(li);
})

dessertDiv.appendChild(dessertUList);
dishesDiv.appendChild(dessertDiv);

// Drinks Section
const drinkSection = document.createElement('div');
drinkSection.classList.add('drink-section');

const title = document.createElement('h2');
title.textContent = 'Drinks';
drinkSection.appendChild(title);

const drinksUList = document.createElement('ul');
const drinksList = ['Red Wine', 'White Wine', 'Beer', 'Cocktails'];
drinksList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    drinksUList.appendChild(li);
})

drinkSection.appendChild(drinksUList);
menuSection.appendChild(drinkSection);

// About Section - can be turned into seperate module (page) later
const aboutSection = document.createElement('div');
aboutSection.classList.add('about');

const aboutTitle = document.createElement('h2');
aboutTitle.textContent = 'About Us';
aboutSection.appendChild(aboutTitle);

const aboutRestaurantName = document.createElement('h1');
aboutRestaurantName.textContent = 'Jallal\'s Restaurant';
aboutSection.appendChild(aboutRestaurantName);

const aboutText1 = document.createElement('p');
aboutText1.textContent = `Welcome to Jallal's Restaurant, where we serve delicious food made with love. Our chefs use the freshest ingredients to create mouth-watering dishes that will leave you wanting more.`

const aboutText2 = document.createElement('p')
aboutText2.textContent = `Whether you're here for a casual meal or a special occasion, we have something for everyone. Come and experience the warm and inviting atmosphere of our restaurant, where you can enjoy great food and great company.`

aboutSection.appendChild(aboutText1);
aboutSection.appendChild(aboutText2);

content.appendChild(aboutSection);

//Add CSS Styles here for now, and then add a CSS file to the project afterwards that you can import as a module


