import burgerImage from './images/royalecheese.PNG';
import saladImage from './images/caesarSalad.PNG';
import spaghettiImage from './images/spaghetti.PNG';
import pizzaImage from './images/pizza.PNG';
import fullEnglishImage from './images/englishBreakfast.PNG';
import ribsImage from './images/ribs.PNG';

export default function MenuPage() {
    const content = document.querySelector('.content');

    const menu = document.createElement('div');
    menu.classList.add('menu-page');

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    const borderline = document.createElement('div');
    borderline.classList.add('borderline1');

    const dinerName = document.createElement('h1');
    dinerName.classList.add('diner-name');
    dinerName.textContent = `Jallal's Diner`;

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = 'FOOD MENU';

    const borderline2 = document.createElement('div');
    borderline2.classList.add('borderline');

    const menuList = document.createElement('div');
    menuList.classList.add('menu-list-container');

    const menuListLeft = document.createElement('div');
    menuListLeft.classList.add('menu-list-left');

    menuListLeft.append(
        menuItem('Le Royal Cheese', 8.99, 'Juicy beef patty with cheese, lettuce, and tomato.', burgerImage),
        menuItem('Classic Caesar Salad', 7.99, 'Crisp romaine lettuce with Caesar dressing and croutons.', saladImage),
        menuItem('Spaghetti Bolognese', 12.99, 'Spaghetti pasta with a rich meat sauce.', spaghettiImage),
    )

    const menuListRight = document.createElement('div');
    menuListRight.classList.add('menu-list-right');

    menuListRight.append(
        menuItem('Margherita Pizza', 10.99, 'Classic pizza topped with fresh mozzarella and basil.', pizzaImage),
        menuItem('Full English Breakfast', 11.99, 'A hearty breakfast with eggs, bacon, sausage, and beans.', fullEnglishImage),
        menuItem('BBB Square Ribs', 14.99, 'Tender ribs with BBQ sauce, served with fries.', ribsImage),
    )

    menuList.append(menuListLeft, menuListRight);

    const borderline3 = document.createElement('div');
    borderline3.classList.add('borderline');

    const refreshments = document.createElement('div');
    refreshments.classList.add('refreshments-container');

    const drinksSection = document.createElement('div');
    drinksSection.classList.add('drinks-section');
    const drinksTitle = document.createElement('h1');
    drinksTitle.classList.add('drinks-title');
    drinksTitle.textContent = 'Beverages';
    drinksSection.appendChild(drinksTitle);

    const drinksList = document.createElement('div');
    drinksList.classList.add('drinks-list');

    drinksList.append(
        drinks('Coca-Cola', 1.99),
        drinks('Lemonade', 2.49),
        drinks('Iced Tea', 2.99),
        drinks('Orange Juice', 2.49),
        drinks('Water', 0.99),
        drinks('Coffee', 1.49),
        drinks('Tea', 1.49),
        drinks('Milkshake', 3.99),
        drinks('Smoothie', 4.49),
    )

    drinksSection.appendChild(drinksList);
    
    const dessertsSection = document.createElement('div');
    dessertsSection.classList.add('desserts-section');
    const dessertsTitle = document.createElement('h1');
    dessertsTitle.classList.add('desserts-title');
    dessertsTitle.textContent = 'Dessert';
    dessertsSection.appendChild(dessertsTitle);

    const dessertsList = document.createElement('div');
    dessertsList.classList.add('desserts-list');

    dessertsList.append(
        desserts('Chocolate Cake', 3.99),
        desserts('Cheesecake', 4.49),
        desserts('Ice Cream Sundae', 2.99),
        desserts('Apple Pie', 3.49),
        desserts('Brownie', 2.49),
        desserts('Pancakes', 3.99),
        desserts('Fruit Salad', 2.49),
    )

    dessertsSection.appendChild(dessertsList);
    
    refreshments.append(drinksSection, dessertsSection);

    menuContent.append(borderline, dinerName, menuTitle, borderline2, menuList, borderline3, refreshments);
    
    menu.appendChild(menuContent);
    
    content.appendChild(menu);

}

function menuItem(name, price, description, imageSrc) {
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const itemDetails = document.createElement('div');
    itemDetails.classList.add('item-details');


    const itemName = document.createElement('h2');
    itemName.classList.add('item-name');
    itemName.textContent = name;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = `$${price}`;

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = description;

    const itemImage = document.createElement('img');
    itemImage.classList.add('item-image');
    itemImage.src = imageSrc;
    itemImage.alt = `${name} image`;

    itemDetails.append(itemName, itemPrice, itemDescription);
    item.append(itemDetails, itemImage);
    return item;
}

function drinks(name, price) {
    const drink = document.createElement('div');
    drink.classList.add('drink-item');

    const drinkName = document.createElement('h2');
    drinkName.classList.add('drink-name');
    drinkName.textContent = name;

    const drinkPrice = document.createElement('p');
    drinkPrice.classList.add('drink-price');
    drinkPrice.textContent = `$${price}`;

    drink.append(drinkName, drinkPrice);
    return drink;
}

function desserts(name, price) {
    const dessert = document.createElement('div');
    dessert.classList.add('dessert-item');

    const dessertName = document.createElement('h2');
    dessertName.classList.add('dessert-name');
    dessertName.textContent = name;

    const dessertPrice = document.createElement('p');
    dessertPrice.classList.add('dessert-price');
    dessertPrice.textContent = `$${price}`;

    dessert.append(dessertName, dessertPrice);
    return dessert;
}