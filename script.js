document.addEventListener('DOMContentLoaded', function() {
    const giftImage = document.getElementById('gift-image');
    const tarjeta = document.getElementById('tarjeta');
    const backgroundMusic = document.getElementById('background-music');

    giftImage.addEventListener('click', function() {
        tarjeta.style.display = 'block';

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(function(error) {
                console.log('Autoplay was prevented:', error);
            });
        }
    });
});
