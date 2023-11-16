var imageIndex = 0;
var images = ["ro1.jpg", "ro2.jpg", "ro3.jpg"]; // List of image URLs

function changeImage() {
    document.getElementById("myImageslide").src = images[imageIndex];
    imageIndex++;
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
}

setInterval(changeImage, 2000);