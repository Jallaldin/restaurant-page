import HomePage from './home.js';
import MenuPage from './menu.js';
// import AboutPage from './about';
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
        // case 'about':
        //     AboutPage(); // Load the about page
        //     break;
        default:
            console.error('Unknown button ID:', buttonId);
    }
}
 
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
}
);
