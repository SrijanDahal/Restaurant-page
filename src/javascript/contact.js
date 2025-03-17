export function contact() {
    // Creating a container for the footer content
    const contactContainer = document.createElement('div');

    // Creating a div for the footer content
    const contactDiv = document.createElement('div');
    contactDiv.textcontent = 'Contact Us';
    contactDiv.textAlign = 'center';
    contactDiv.margin = '30px';
    contactDiv.fontSize = '3em';
    contactContainer.appendChild(contactDiv);

    return contactContainer;
}