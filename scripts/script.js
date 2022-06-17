// Declare variables
const inputs = Array.from(document.querySelectorAll("input"));
const images = Array.from(document.querySelectorAll("img"));
const errorParagraphs = document.querySelectorAll(".error-message");
const form = document.querySelector("form");


// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Prevent the default action of the form
    for (let i = 0; i < inputs.length; i++) {
        // Add classes to an input aand its paragraph if the input is empty and
        // change the display of the paragraph
        if (inputs[i].value == "") {
            inputs[i].classList.add("input-error");
            images[i].classList.add("error-icon");
            errorParagraphs[i].style.display = "block";
        }

        else {
            inputs[i].classList.remove("input-error");
            images[i].classList.remove("error-icon");
            errorParagraphs[i].style.display = "none";
        }
    }
})
