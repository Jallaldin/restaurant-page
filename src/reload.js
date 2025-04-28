import HomePage from './home.js';
import MenuPage from './menu.js';
import ContactPage from './contact.js';
import './styles.css';

const content = document.querySelector('.content');

MenuPage(); // default page load

function handleButtonClick(e) {
    const buttonId = e.target.id;
    content.innerHTML = ''; // Clear the content

    switch (buttonId) {
        case 'home':
            HomePage(); // Load the home page
            break;
        case 'menu':
            MenuPage(); // Load the menu page
            break;
        case 'contact':
            ContactPage(); // Load the contact page
            break;
        default:
            console.error('Unknown button ID:', buttonId);
    }
}
 
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
}
);
