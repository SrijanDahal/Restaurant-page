import {navbar} from './javascript/navbar.js';
import {about} from './javascript/about.js';
import {landingPage} from './javascript/landingPage.js'
import {menu} from './javascript/menu.js';
import {contact} from './javascript/contact.js';

const body = document.querySelector('body');
style();

function style() {
    body.style.margin = '0';
    body.style.padding = '0';
    body.style.fontFamily = 'Arial, sans-serif';
    body.style.backgroundColor = '#EF9651';
    body.style.width = '100vw';
    body.style.position = 'absolute';
}


const headerNavBar = navbar();
body.appendChild(headerNavBar);

const landingPageContent = landingPage();
body.appendChild(landingPageContent);

const aboutContent = about();
aboutContent.style.display = 'none';
body.appendChild(aboutContent);


const menuContent = menu();
menuContent.style.display = 'none';
body.appendChild(menuContent);

const contactContent = contact();
contactContent.style.display = 'none';
body.appendChild(contactContent);


const homeButton = document.querySelector('.homeButton');
const aboutButton = document.querySelectorAll('.aboutButton');
const menuButton = document.querySelectorAll('.menuButton');
const contactButton = document.querySelectorAll('.contactButton');


homeButton.addEventListener('click', () => {
    landingPageContent.style.display = 'block';
    menuContent.style.display = 'none';
    aboutContent.style.display = 'none';
    contactContent.style.display = 'none';
}
);

aboutButton.forEach(button => {
    button.addEventListener('click', () => {
        landingPageContent.style.display = 'none';
        menuContent.style.display = 'none';
        contactContent.style.display = 'none';
        aboutContent.style.display = 'block';
    });
}
);

menuButton.forEach(button => {
    button.addEventListener('click', () => {
        landingPageContent.style.display = 'none';
        aboutContent.style.display = 'none';
        contactContent.style.display = 'none';
        menuContent.style.display = 'block';
    });
}
);

contactButton.forEach(button => {
    button.addEventListener('click', () => {
        landingPageContent.style.display = 'none';
        aboutContent.style.display = 'none';
        menuContent.style.display = 'none';
        contactContent.style.display = 'block';
    });
}
);