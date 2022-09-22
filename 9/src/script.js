'use strict';

const image = document.querySelectorAll('.image'),
      blur = document.querySelectorAll('.blur');

for (let i = 0; i <= image.length; i++) {
    image[i].addEventListener('mouseenter', () => {
        blur[i].animate([
            { backgroundImage: 'linear-gradient(360deg, #241F24 1.04%, rgba(91, 91, 91, 0.26) 6.99%, rgba(187, 186, 192, 0) 12.29%)' }
        ], {
            delay: 100,
            duration: 300,
            easing: "ease-out",
            fill: "forwards"
        });
    });

    image[i].addEventListener('mouseleave', () => {
        blur[i].animate([
            { backgroundImage: 'linear-gradient(360deg, #241F24 0%, rgba(91, 91, 91, 0.447552) 34.11%, rgba(187, 186, 192, 0.26) 62.5%)' }
        ], {
            duration: 400,
            easing: "ease-out",
            fill: "forwards"
        });
    });


}

