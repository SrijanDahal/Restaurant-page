export function menu() {
  // Created a container for the menu content
  const menucontainer = document.createElement("div");
  menucontainer.style.width = "100vw";

  // Created a div for the menu content
  const menuDiv = document.createElement("div");
  menuDiv.style.columnGap = "10px";
  menuDiv.style.rowGap = "20px";
  menuDiv.style.padding = "20px";
  menucontainer.appendChild(menuDiv);

  // Calling the different functions for the menu content
  headingForThePage();
  menuItem();

  // Creating the menu header
  function headingForThePage() {
    const headingForThePage = document.createElement("h1");
    headingForThePage.textContent = "About Us";
    headingForThePage.style.textAlign = "center";
    headingForThePage.style.margin = "0";
    headingForThePage.style.fontSize = "3em";
    headingForThePage.style.gridArea = "1/1/2/6";
    menuDiv.appendChild(headingForThePage);
  }

  function menuItem() {
    const menuItem = document.createElement("div");
    menuItem.style.display = "grid";
    menuItem.style.marginTop = "20px";
    menuItem.style.gridTemplateColumns =
      "repeat(auto-fill, minmax(200px, 1fr))";
    menuItem.style.columnGap = "10px";
    menuItem.style.rowGap = "20px";
    menuDiv.appendChild(menuItem);

    function menuContent() {
      const menuContent = document.createElement("div");
      menuContent.style.backgroundColor = "#EC5228";
      menuContent.style.borderRadius = "5px";
      menuContent.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
      menuContent.style.color = "#EFEFEF";
      menuContent.style.padding = "20px";
      menuContent.style.textAlign = "center";
      menuContent.style.fontSize = "1.5em";
      menuContent.textContent = "Menu Content";
      menuItem.appendChild(menuContent);
    }

    for (let i = 0; i < 20; i++) {
      menuContent();
    }
  }

  return menucontainer;
}
