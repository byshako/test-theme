$(document).ready(function() {
    // Menu script
    $("#menu").click(function() {
        $(".toggle").toggleClass("active");
        $(".fas.fa-bars").toggleClass("fa-times");
    });
    // Menu Click
    $(".navigation__item-link").click(function() {
        $(".toggle").toggleClass("active");
        $(".fas.fa-bars").toggleClass("fa-times");
    });
    //Scroll to ID
    $(document).on('click', 'a[href^="#"]', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0){return;}
        e.preventDefault();
        var pos = $id.offset().top - 60;
        $('body, html').animate({scrollTop: pos});
    });

    // Text Animation
    $("#maintext").typer({
        strings: [
            "isimply dummy text of the printing and typesetting ",
            "It is a long established fact that a reader will be",
            "There are many variations of passages of Lorem Ipsum"
        ]
    });

    //POPUP
    $('.gallery__item').magnificPopup({
        items: [
            {src: 'images/gallery/1.jpg'},
            {src: 'images/gallery/2.jpg'},
            {src: 'images/gallery/3.jpg'},
            {src: 'images/gallery/4.jpg'},
            {src: 'images/gallery/5.jpg'},
            {src: 'images/gallery/6.jpg'},
        ],
        gallery: {
            enabled: true
        },
        type: 'image',
    });

});