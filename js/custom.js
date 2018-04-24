$(document).ready(function() {
    // Menu script
    $("#menu").click(function() {
        $(".main-page").toggleClass("active");
        $(".main-page__perspective").toggleClass("active");
        $(".nav").toggleClass("active");
        $(".fas.fa-bars").toggleClass("fa-times");
    });
});