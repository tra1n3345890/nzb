$( () => {

    $('#main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      });
    $slick = $('#main-slider');
    $next = $('#next-button');
    $prev = $('#prev-button');

    $next.on('click', () => {
        $slick.slick('slickNext');
    })

    $prev.on('click', () => {
        $slick.slick('slickPrev');
    })
    
});