$(function(){
$(".daohang").hover(function () {
    $(".other").css('display', 'block');
    $(".other").css('border-top', 'none');
}, function () {
    $(".other").css('display', 'none');
});

$(".category").hover(function (){
    $('.catlist').eq($(this).index()).addClass("co1").siblings().removeClass('co1');
    $(".catlist").hide().eq($(this).index()).show();
});

$(".gh").hover(function (){
    $(".gh").eq($(this).index()).addClass("co").siblings().removeClass('co');
    $(".subcat").hide().eq($(this).index()).show();
    $('.subcat').mouseout(function(){
        $(".subcat").show().eq($(this).index()).hide();
    })
});
})