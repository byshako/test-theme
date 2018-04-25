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
    $(document).on('click', 'a[href^="#"]', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0){return;}
        e.preventDefault();
        var pos = $id.offset().top - 60;
        $('body, html').animate({scrollTop: pos});
    });

    // Text Animation
    $(function() {
        var list = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis expedita fugiat, fugit minima quisquam.'
            ,'necessitatibus neque nihil odio officia provident quaerat quam quia quidem quoratione repellat saepe ut vel voluptate!'
            , 'dolores expedita harum magnam molestiae natus quia voluptas? Aperiam distinctiodoloremque molestias praesentium quis? Amet, sapiente.'
            , 'Accusantium alias aliquam aliquid debitis distinctio, ducimus earum eum fuga sunt. Inventoreratione repellendus voluptatem.'];
        var txt = $('#txtlzr');
        txt.textualizer(list, { duration: 3000, centered:true });
        txt.textualizer('start');
    })
});