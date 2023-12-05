document.addEventListener("DOMContentLoaded", function () {
  var galleryContainer = document.querySelector(".image-gallery");

  // Function to add a new image to the gallery
  function addImageToGallery(index) {
    var galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    var img = document.createElement("img");
    img.src = "images/image-" + index + ".jpg";
    img.alt = "Image " + index;

    // Add click event to open fullscreen modal
    img.addEventListener("click", function () {
      openFullscreenModal(img.src);
    });

    galleryItem.appendChild(img);
    galleryContainer.appendChild(galleryItem);
  }

  // Add the initial 43 images to the gallery
  for (var i = 1; i <= 43; i++) {
    addImageToGallery(i);
  }

  // Add the 44th image to the gallery
  addImageToGallery(44);

  // Function to open fullscreen modal
  function openFullscreenModal(imageSrc) {
    var modal = document.getElementById("fullscreenModal");
    var modalImg = document.getElementById("fullscreenImage");

    modal.style.display = "flex";
    modalImg.src = imageSrc;
  }

  // Function to close fullscreen modal
  function closeFullscreenModal() {
    var modal = document.getElementById("fullscreenModal");
    modal.style.display = "none";
  }

  // Left and right navigation for the fullscreen modal
  var currentImageIndex = 1;

  function navigateFullscreenModal(direction) {
    currentImageIndex += direction;

    // Ensure the index stays within the range of your images (1 to 44 in this case)
    if (currentImageIndex < 1) {
      currentImageIndex = 44;
    } else if (currentImageIndex > 44) {
      currentImageIndex = 1;
    }

    var modalImg = document.getElementById("fullscreenImage");
    modalImg.src = "images/image-" + currentImageIndex + ".jpg";
  }
});