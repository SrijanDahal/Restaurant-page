const content = (function() {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    body.appendChild(header);
    const footer = document.createElement('footer');
    body.appendChild(footer);

    function styles() {
        body.style.margin = '0';
        body.style.padding = '0';
        body.style.boxSizing = 'border-box'
        body.style.display = 'grid';
        body.style.gridTemplateRows = '9fr 1fr';
        header.style.gridRow = '1/2';
        footer.style.gridRow = '2/3';
        body.style.overflowX = 'hidden';
    };

    function navs() {
        // Created a div element where the navs and the names for the landing page will be added
        const div = document.createElement('div');
        div.classList.add('navs');
        div.style.backgroundSize = 'cover';
        div.style.backgroundPosition = 'center';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.alignItems = 'center';
        div.style.height = '90vh';
        header.appendChild(div);

        // calling the functions creating the elements inside the div
        logo();
        nameOfTheSite();
        aboutOfTheSite();
        overviewOfTheSite();
        buttons();

        // created a logo function where the logo will be added
        function logo() {
            const logo = document.createElement('h1');
            logo.textContent = 'Logo';
            logo.style.marginTop = '30px';
            logo.style.padding = '0';
            logo.style.color = 'black';
            logo.style.fontSize = '3rem';
            logo.style.textAlign = 'center';
            div.appendChild(logo);
        }

        function nameOfTheSite() {
            const name = document.createElement('h1');
            name.textContent = 'TukTuk';
            name.style.marginTop = '13vh';
            name.style.padding = '0';
            name.style.color = 'red';
            name.style.textAlign = 'center';
            name.style.fontSize = '3rem';
            div.appendChild(name);
        }

        function aboutOfTheSite() {
            const about = document.createElement('h3');
            about.innerHTML = 'Our motto is to provide the best' + '<br>' + 'service as well as food to our customers.';
            about.style.marginTop = '2rem';
            about.style.padding = '0';
            about.style.color = 'black';
            about.style.textAlign = 'center';
            about.style.fontSize = '1.5rem';
            div.appendChild(about);
        }

        function overviewOfTheSite() {
            const overview = document.createElement('p');
            overview.innerHTML = 'We provide the best Online food service in the town.' + '<br>' + 'We use the most used and popular riding service in the town,' + "<br>" + 'benefitting the both customers and the riders.';
            overview.style.marginTop = '1rem';
            overview.style.padding = '0';
            overview.style.color = 'black';
            overview.style.textAlign = 'center';
            overview.style.fontSize = '1.5rem';
            div.appendChild(overview);
        }

        function buttons() {
            const buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('buttons');
            buttonsDiv.style.display = 'flex';
            buttonsDiv.style.flexDirection = 'row';
            buttonsDiv.style.justifyContent = 'center';
            buttonsDiv.style.marginTop = '1rem';
            div.appendChild(buttonsDiv);
            aboutUs();
            Menu();
            contact();

            function aboutUs() {
                const aboutUs = document.createElement('button');
                aboutUs.textContent = 'About Us';
                aboutUs.style.backgroundColor = 'transparent';
                aboutUs.style.color = 'white';
                aboutUs.style.fontSize = '1.5rem';
                aboutUs.style.border = 'none';
                aboutUs.style.padding = '1rem 2rem';
                aboutUs.style.cursor = 'pointer';
                aboutUs.onclick = function() {
                    div.style.display = 'none';
                }
                buttonsDiv.appendChild(aboutUs);
            }

            function Menu() {
                const menu = document.createElement('button');
                menu.textContent = 'Menu';
                menu.style.backgroundColor = 'transparent';
                menu.style.color = 'white';
                menu.style.fontSize = '1.5rem';
                menu.style.border = 'none';
                menu.style.padding = '1rem 2rem';
                menu.style.cursor = 'pointer';
                menu.onclick = function() {
                    div.style.display = 'none';
                }
                buttonsDiv.appendChild(menu);
            }

            function contact() {
                const contact = document.createElement('button');
                contact.textContent = 'Contact';
                contact.style.backgroundColor = 'transparent';
                contact.style.color = 'white';
                contact.style.fontSize = '1.5rem';
                contact.style.border = 'none';
                contact.style.padding = '1rem 2rem';
                contact.style.cursor = 'pointer';
                contact.onclick = function() {
                    div.style.display = 'none';
                }
                buttonsDiv.appendChild(contact);
            }
        }
    }

    function footerDiv() {
        const footerDiv = document.createElement('div');
        footerDiv.classList.add('footer');
        footerDiv.style.backgroundColor = 'black';
        footerDiv.style.color = 'white';
        footerDiv.style.width = '100%';
        footerDiv.style.height = '10vh';
        footer.appendChild(footerDiv);
        footerContent();
    
        function footerContent() {
            const footerContent = document.createElement('p');
            footerContent.style.margin = '0';
            footerContent.style.padding = '0';
            footerContent.textContent = 'All rights reserved to TukTuk';
            footerContent.style.textAlign = 'center';
            footerContent.style.paddingTop = '2vh';
            footerDiv.appendChild(footerContent);
        }
    }


    return {
        navs: navs,
        styles: styles,
        footerDiv: footerDiv
    }
})();


const navs = content.navs();
const styles = content.styles();
const footer = content.footerDiv();
