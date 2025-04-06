export function landingPage() {
  // Created a div called landingPageDiv in which we will add the concent for the landing page
  const landingPageDiv = document.createElement("div");
  landingPageDiv.classList.add("landing-page");
  landingPageDiv.style.display = "grid";
  landingPageDiv.style.gridTemplateColumns = "1fr 1fr";
  landingPageDiv.style.padding = "30px";

  // Calling the different functions for the content of the landing page
  introDiv();

  // Creating a div for the introduction part of the restaurant
  function introDiv() {
    const introDiv = document.createElement("div");
    introDiv.style.display = "flex";
    introDiv.style.flexDirection = "column";
    introDiv.style.marginTop = "15vh";
    introDiv.style.gridArea = "1/1/2/2";
    landingPageDiv.appendChild(introDiv);

    // Calling the different functions for the introduction part of the restaurant
    introHeading();
    introPara();

    // Creating the heading for the introduction
    function introHeading() {
      const introHeading = document.createElement("h1");
      introHeading.innerHTML =
        "Welcome" +
        "<br>" +
        "to the" +
        '<br style = "margin-top = 10px">' +
        "Restaurant";
      introHeading.style.margin = "0";
      introHeading.style.fontSize = "3em";
      introDiv.appendChild(introHeading);
    }

    // Creating the paragraph for the introduction
    function introPara() {
      const introPara = document.createElement("p");
      introPara.textContent =
        "We are a restaurant which serves the best food in town. We have a variety of dishes which you can enjoy with your friends and family. We have a team of chefs who are experts in their field and will make sure that you have a great experience at our restaurant.";
      introPara.style.fontSize = "1.5em";
      introPara.style.textAlign = "right";
      introPara.style.margin = "20px 0";
      introDiv.appendChild(introPara);
    }
  }

  // Returning the landingPageDiv which contains the content for the landing page
  return landingPageDiv;
}
