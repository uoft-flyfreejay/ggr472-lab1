//Create variable for button element
const button = document.getElementById("my-btn");

// Create variable for image element
const image = document.getElementById("picture");

// Define the two image sources
const originalSrc = 'https://i.pinimg.com/originals/29/22/a9/2922a906b478b36a4a20d9d37b77379d.gif'; // Replace with your original image path
const newSrc = 'https://i.pinimg.com/originals/36/92/9e/36929e2310fbc61f5edfd29896939608.gif'; // Replace with your new image path

// Set a flag to keep track of which image is currently displayed
let isOriginalImage = true;

// Add event listener to button element with function to toggle image source
button.addEventListener("click", function(){
    if (isOriginalImage) {
        // If the original image is displayed, switch to the new image
        image.src = newSrc;
    } else {
        // If the new image is displayed, switch back to the original image
        image.src = originalSrc;
    }
    // Toggle the flag
    isOriginalImage = !isOriginalImage;
});