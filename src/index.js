import './style.css';
import {navbar} from './navbar.js';
import './about.js';
import {landingPage} from './landingPage.js'

const body = document.querySelector('body');
style();

function style() {
    body.style.margin = '0';
    body.style.padding = '0';
    body.style.fontFamily = 'Arial, sans-serif';
    body.style.backgroundColor = '#EF9651';
    body.style.width = '100vw';
    body.style.display = 'grid';
    body.style.gridTemplateRows = '1fr 10fr 1fr';
    body.style.position = 'fixed';
}


const headerNavBar = navbar();
body.appendChild(headerNavBar);

const landingPageContent = landingPage();
body.appendChild(landingPageContent);

const homeButton = document.querySelector('.homeButton');
const aboutButton = document.querySelectorAll('.aboutButton');
const menuButton = document.querySelectorAll('.menuButton');
const contactButton = document.querySelectorAll('.contactButton');

homeButton.addEventListener('click', () => {
    landingPageContent.style.display = 'block';
}
);

aboutButton.forEach(button => {
    button.addEventListener('click', () => {
        landingPageContent.style.display = 'none';
    });
}
);

menuButton.forEach(button => {
    button.addEventListener('click', () => {
        landingPageContent.style.display = 'none';
    });
}
);

contactButton.forEach(button => {
    button.addEventListener('click', () => {
        landingPageContent.style.display = 'none';
    });
}
);