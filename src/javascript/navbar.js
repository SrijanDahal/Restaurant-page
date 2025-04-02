export function navbar() {
    // Created a div called navbarDiv in which we will make the links for the site
    const navbarDiv = document.createElement('div');
    navbarDiv.classList.add('navbar');
    navbarDiv.style.display = 'flex';
    navbarDiv.style.justifyContent = 'space-between';
    navbarDiv.style.alignItems = 'center';
    navbarDiv.style.padding = '20px 20px';

    // Calling the different functions for the links
    logo();
    navLinks();

    // Creating a logo in the left side of the navbar
    function logo() {
        const logo = document.createElement('h1');
        logo.textContent = 'Logo';
        logo.style.margin = '0';
        navbarDiv.appendChild(logo);
    }

    // Creating the links in the right side of the navbar
    function navLinks() {
        const navLinks = document.createElement('nav');
        navLinks.style.position = 'relative';
        navbarDiv.appendChild(navLinks);

        // Calling functions which will create links and buttons for the navbar
        home();
        about();
        menu();
        contact();


        // Creating the home button for navigation
        function home() {
            const home = document.createElement('button');
            home.classList.add('homeButton');
            home.textContent = 'Home';
            home.style.margin = '0 10px';
            home.style.backgroundColor = 'transparent';
            home.style.border = 'none';
            home.style.cursor = 'pointer';
            home.style.color = '#EFEFEF';
            home.style.fontSize = '1.5em';
            navLinks.appendChild(home);
        }

        // Creating the about button for navigation
        function about() {
            const about = document.createElement('button');
            about.classList.add('aboutButton');
            about.textContent = 'about';
            about.style.margin = '0 10px';
            about.style.backgroundColor = 'transparent';
            about.style.border = 'none';
            about.style.color = '#EFEFEF';
            about.style.cursor = 'pointer';
            about.style.fontSize = '1.5em';
            navLinks.appendChild(about);
        }

        // Creating the Menu button for navigation
        function menu() {
            const menu = document.createElement('button');
            menu.classList.add('menuButton');
            menu.textContent = 'Menu';
            menu.style.margin = '0 10px';
            menu.style.backgroundColor = 'transparent';
            menu.style.border = 'none';
            menu.style.color = '#EFEFEF';
            menu.style.cursor = 'pointer';
            menu.style.fontSize = '1.5em';
            navLinks.appendChild(menu);
        }

        // Creating the  contact button for navigation
        function  contact() {
            const  contact = document.createElement('button');
            contact.classList.add('contactButton');
            contact.textContent = 'Contact';
            contact.style.margin = '0 10px';
            contact.style.backgroundColor = 'transparent';
            contact.style.border = 'none';
            contact.style.color = '#EFEFEF';
            contact.style.cursor = 'pointer';
            contact.style.fontSize = '1.5em';
            navLinks.appendChild(contact);
        }

    }

    // Returning the navbarDiv which will be appended to the body in the index.js file
    return navbarDiv;
}