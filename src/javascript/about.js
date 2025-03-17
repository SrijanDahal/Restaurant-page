export function about() {
    // Creating the container for the about page
    const aboutContainer = document.createElement('div');
    aboutContainer.style.display = 'none';

    // Created a div called contentForAbout in which we will add the concent for the about page
    const concentForAbout = document.createElement('div');
    concentForAbout.style.display = 'none';
    concentForAbout.style.textAlign = 'center';
    concentForAbout.style.width = '100vw';
    concentForAbout.style.marginTop = '20px';
    concentForAbout.classList.add('about');
    concentForAbout.style.display = 'grid';
    concentForAbout.style.gridTemplateColumns = '1fr 1fr';
    concentForAbout.style.girdTemplateRows = 'repeat(auto-fill, minmax(100px, 1fr))';
    concentForAbout.style.columnGap = '20px';
    concentForAbout.style.rowGap = '50px';
    aboutContainer.appendChild(concentForAbout);

    // Calling the different functions for the content of the about page
    headingForThePage();
    firstDiv();
    SecondDiv();
    thirdDiv();
    firstDivText();
    secondDivText();
    thirdDivText();

    // Craeting a heading for the about page
    function headingForThePage() {
        const headingForThePage = document.createElement('h1');
        headingForThePage.textContent = 'About Us';
        headingForThePage.style.margin = '0';
        headingForThePage.style.fontSize = '3em';
        headingForThePage.style.gridArea = '1/1/2/3';
        concentForAbout.appendChild(headingForThePage);
    }

    // Creating a div for the features of the restaurant
    function firstDiv() {
        const firstDiv = document.createElement('div');
        firstDiv.style.backgroundColor = '#EFEFEF';
        firstDiv.style.margin = '20px';
        firstDiv.style.borderRadius = '20px';
        firstDiv.style.width = '1fr';
        firstDiv.style.height = '40vh';
        firstDiv.style.gridArea = '2/1/3/2';
        concentForAbout.appendChild(firstDiv);
    }

    // Creating a div for the features of the restaurant
    function SecondDiv() {
        const firstDiv = document.createElement('div');
        firstDiv.style.backgroundColor = '#EFEFEF';
        firstDiv.style.margin = '20px';
        firstDiv.style.borderRadius = '20px';
        firstDiv.style.width = '1fr';
        firstDiv.style.height = '40vh';
        firstDiv.style.gridArea = '3/2/4/3';
        concentForAbout.appendChild(firstDiv);
    }

    // Creating a div for the features of the restaurant
    function thirdDiv() {
        const firstDiv = document.createElement('div');
        firstDiv.style.backgroundColor = '#EFEFEF';
        firstDiv.style.margin = '20px';
        firstDiv.style.borderRadius = '20px';
        firstDiv.style.width = '1fr';
        firstDiv.style.height = '40vh';
        firstDiv.style.gridArea = '4/1/5/2';
        concentForAbout.appendChild(firstDiv);
    }

    // Craeting the explanation for the features of the restaurant
    function firstDivText() {
        const firstDivText = document.createElement('p');
        firstDivText.textContent = 'We have the best food';
        firstDivText.style.fontSize = '1.5em';
        firstDivText.style.textAlign = 'center';
        firstDivText.style.gridArea = '2/2/3/3';
        concentForAbout.appendChild(firstDivText);
    }

    function secondDivText() {
        const firstDivText = document.createElement('p');
        firstDivText.textContent = 'We have the best food';
        firstDivText.style.fontSize = '1.5em';
        firstDivText.style.textAlign = 'center';
        firstDivText.style.margin = '20px 0';
        firstDivText.style.gridArea = '3/1/4/2';
        concentForAbout.appendChild(firstDivText);
    }

    function thirdDivText() {
        const firstDivText = document.createElement('p');
        firstDivText.textContent = 'We have the best food';
        firstDivText.style.fontSize = '1.5em';
        firstDivText.style.textAlign = 'center';
        firstDivText.style.margin = '20px 0';
        firstDivText.style.gridArea = '4/2/5/3';
        concentForAbout.appendChild(firstDivText);
    }

    return aboutContainer;
}