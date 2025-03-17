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
    body.style.display = 'grid';
    body.style.gridTemplateRows = '1fr 10fr 1fr';
}


const headerNavBar = navbar();
body.appendChild(headerNavBar);

const landingPageContent = landingPage();
body.appendChild(landingPageContent);