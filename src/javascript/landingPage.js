/* eslint-disable no-undef */
export function landingPage() {
    // Created a div called landingPageDivContainer in which we will add the concent for the landing page
    const landingPageDivContainer = document.createElement('div');
    // Created a div called landingPageDiv in which we will add the concent for the landing page
    const landingPageDiv = document.createElement('div');
    landingPageDiv.classList.add('landing-page');
    landingPageDiv.style.padding = '30px';

    // Created a contianer for the landing page content so that we can make the display of the container to none when the user clicks on the about button
    landingPageDivContainer.appendChild(landingPageDiv);

    // Calling the different functions for the content of the landing page
    introDiv();


    // Creating a div for the introduction part of the restaurant
    function introDiv() {
        const introDiv = document.createElement('div');
        introDiv.style.display = 'flex';
        introDiv.style.flexDirection = 'column';
        introDiv.style.marginTop = '15vh';
        landingPageDiv.appendChild(introDiv);

        // Calling the different functions for the introduction part of the restaurant
        introHeading();
        introPara();
        buttons();

        // Creating the heading for the introduction
        function introHeading() {
            const introHeading = document.createElement('h1');
            introHeading.innerHTML = 'Welcome' + '<br>' + 'to the' + '<br style = "margin-top = 10px">' +'Restaurant';
            introHeading.style.margin = '0';
            introHeading.style.fontSize = '3em';
            introDiv.appendChild(introHeading);
        }

        // Creating the paragraph for the introduction
        function introPara() {
            const introPara = document.createElement('p');
            introPara.style.gridArea = '1/1/2/2';
            introPara.innerHTML = 'We are a restaurant which serves the best food in town. We have' + "<br>" + 'a variety of dishes which you can enjoy with your friends and' + "<br>" + 'family. We have a team of chefs who are experts in their field and' + "<br>" + 'will make sure that you have a great experience at our restaurant.' + "<br>" + 'Below, you can find the buttons that would help you navigate' + "<br>" + 'through our website.';
            introPara.style.fontSize = '1.5em';
            introPara.style.textAlign = 'left';
            introPara.style.margin = '20px 0';
            introDiv.appendChild(introPara);
        }

        function buttons() {
            const buttons = document.createElement('div');
            buttons.style.display = 'flex';
            buttons.style.marginTop = '20px';
            introDiv.appendChild(buttons);

            // Calling the different functions for the buttons
            aboutButton();
            menuButton();
            contactButton();

            // Creating the about button
            function aboutButton() {
                const aboutButton = document.createElement('button');
                aboutButton.classList.add('aboutButton');
                aboutButton.textContent = 'About';
                aboutButton.style.backgroundColor = '#EC5228';
                aboutButton.style.marginRight = '20px';
                aboutButton.style.borderRadius = '5px';
                aboutButton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'; 
                aboutButton.style.color = '#EFEFEF';
                aboutButton.style.border = 'none';
                aboutButton.style.padding = '10px 20px';
                aboutButton.style.cursor = 'pointer';
                aboutButton.style.fontSize = '1.5em';
                buttons.appendChild(aboutButton);
            }

            // Creating the menu button
            function menuButton() {
                const menuButton = document.createElement('button');
                menuButton.classList.add('menuButton');
                menuButton.textContent = 'Menu';
                menuButton.style.backgroundColor = '#EC5228';
                menuButton.style.marginRight = '20px';
                menuButton.style.color = '#EFEFEF';
                menuButton.style.borderRadius = '5px';
                menuButton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'; 
                menuButton.style.border = 'none';
                menuButton.style.padding = '10px 20px';
                menuButton.style.cursor = 'pointer';
                menuButton.style.fontSize = '1.5em';
                buttons.appendChild(menuButton);
            }

            // Creating the contact button
            function contactButton() {
                const contactButton = document.createElement('button');
                contactButton.classList.add('contactButton');
                contactButton.textContent = 'Contact';
                contactButton.style.backgroundColor = '#EC5228';
                contactButton.style.borderRadius = '5px';
                contactButton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)'; 
                contactButton.style.color = '#EFEFEF';
                contactButton.style.border = 'none';
                contactButton.style.padding = '10px 20px';
                contactButton.style.cursor = 'pointer';
                contactButton.style.fontSize = '1.5em';
                buttons.appendChild(contactButton);
            }
        }
    }
    
    // Returning the landingPageDivContainer which contains the content for the landing page
    return landingPageDivContainer;
}