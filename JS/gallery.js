document.addEventListener( "DOMContentLoaded", function ()
{
    const mobileGallery = document.querySelector( ".mobile-gallery" );
    const images = mobileGallery.querySelectorAll( "img" );

    images.forEach( image =>
    {
        image.addEventListener( "mouseenter", function ()
        {
            image.style.filter = "blur(2px) grayscale(100%)";
            image.style.transform = "scale(1.1)";
        } );

        image.addEventListener( "mouseleave", function ()
        {
            image.style.filter = "none";
            image.style.transform = "none";
        } );
    } );
} );
