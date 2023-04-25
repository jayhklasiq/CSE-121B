const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const image = document.createElement("img");
image.setAttribute("src", "https://placeimg.com/200/200/animals");
image.setAttribute("alt", "Description of Image")
document.body.appendChild(image)

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection);

// const newSection = document.createElement("section");
// const newH2 = document.createElement("h2");
// newH2.innerText = "CSE 121b";
// newSection.appendChild(newH2);
// const newP = document.createElement("p");
// newH2.innerText = "Welcome to Javascript Language";
// newSection.appendChild(newP);

// document.body.appendChild(newSection);