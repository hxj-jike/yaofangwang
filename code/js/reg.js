$(function () {
    $(".daohang").hover(function () {
        $(".other").css('display', 'block');
        $(".other").css('border-top', 'none');
    }, function () {
        $(".other").css('display', 'none');
    });
});