document.addEventListener('DOMContentLoaded', function() {
    const giftImage = document.getElementById('gift-image');
    const tarjeta = document.getElementById('tarjeta');
    const backgroundMusic = document.getElementById('background-music');

    giftImage.addEventListener('click', function() {
        // Mostrar la tarjeta al hacer clic en la imagen
        tarjeta.style.display = 'block';

        // Lanzar confeti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Iniciar la música si está pausada
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(function(error) {
                console.log('Autoplay was prevented:', error);
            });
        }
    });
});
