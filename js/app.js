baguetteBox.run('.gallery');

// Custom Search Filtering
function searchFilter() {
    let gallery = document.querySelector(".gallery");
    let galleryItems = gallery.children;
    let getInput = document.getElementById("search");
    let userInput = getInput.value.toLowerCase();
  
    for (let i = 0; i < galleryItems.length; i++) {
      let getCaption = galleryItems[i].getAttribute("data-caption");
      let galleryThumb = galleryItems[i].style;
      if (getCaption.includes(userInput)) {
        galleryThumb.display = "";
      } else {
        galleryThumb.display = "none";
      }
    }
  }
  
  document.addEventListener("keyup", searchFilter);