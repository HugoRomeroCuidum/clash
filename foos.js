document.addEventListener("DOMContentLoaded", function() {
    // Array de las rutas de las imágenes
    const images = ["Download_Goblin_PNG_Image_for_Free-removebg-preview.png","Clash_of_Clans___Goblin-removebg-preview.png"]; // Rutas de las imágenes

    // Seleccionar el elemento de la imagen
    const sliderImage = document.getElementById("slider-image");

    let currentIndex = 0;

    // Función para cambiar la imagen
    function changeImage() {
        // Incrementar el índice de la imagen actual
        currentIndex++;
        
        // Si el índice es mayor o igual al número de imágenes, volver al inicio
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        // Obtener la ruta de la imagen actual
        const currentImage = images[currentIndex];
        
        // Cambiar la src de la imagen
        sliderImage.src = currentImage;
    }

    // Intervalo para cambiar las imágenes cada 3 segundos (3000 milisegundos)
    setInterval(changeImage, 3000);
});
