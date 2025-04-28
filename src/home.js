import dinerFoodImage from './images/dinerFood.jpg';

export default function HomePage() {
    const content = document.querySelector('.content');
    // create a splitscreen layout for the home page
    console.log("HomePage function called");

    const home = document.createElement('div');
    home.classList.add('home-page');
    

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left-side');

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right-side');

    const welcomeTitle = document.createElement('h1');
    welcomeTitle.textContent = `Jallal's Diner`;
    welcomeTitle.classList.add('welcome-title');

    const welcomeText = document.createElement('p');
    const lineBreak = document.createElement('br');
    welcomeText.textContent = `Welcome To Jallal's Diner! ${lineBreak} We serve the best food in town! From Breakfast, Lunch to Dinner and Delicious Desserts!`;
    welcomeText.classList.add('welcome-text');

    leftDiv.append(welcomeTitle, welcomeText);

    // insert image for rightDiv Background
    const dinerImage = document.createElement('img');
    dinerImage.src = dinerFoodImage;
    dinerImage.alt = 'Diner Food Image';
    dinerImage.classList.add('diner-image');
    dinerImage.style.width = '100%'; // Set the width to 100% of the parent div
    

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('menu-button');
    menuButton.id = 'menu'; // Set the ID to 'menu'
    menuButton.addEventListener('click', () => {
        content.innerHTML = ''; // Clear the content
        import('./menu').then(module => {
            module.default(); // Call the MenuPage function from menu.js
        });
    });
    
    rightDiv.appendChild(dinerImage);

    home.appendChild(leftDiv);
    home.appendChild(rightDiv);

    content.appendChild(home);

}