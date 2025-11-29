/*Name this external file gallery.js*/

function upDate(previewPic) {
  /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    
    // Log to verify the function is being called
    console.log("upDate function called");
    
    // Log the alt and src of the preview image
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);
    
    // Get the element with id "image"
    let imageDiv = document.getElementById('image');
    
    // Change the background image to the preview image's source
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Change the text to the preview image's alt text
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    
    // Log to verify the function is being called
    console.log("unDo function called");
    
    // Get the element with id "image"
    let imageDiv = document.getElementById('image');
    
    // Reset the background image to empty (original from CSS)
    imageDiv.style.backgroundImage = "url('')";
    
    // Reset the text to the original message
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
