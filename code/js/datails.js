$(function () {
    $(".daohang").hover(function () {
        $(".other").css('display', 'block');
        $(".other").css('border-top', 'none');
    }, function () {
        $(".other").css('display', 'none');
    });
    $('.t').click(function(){
        // html，body取并级，处理浏览器兼容
       $("html,body").animate({
   scrollTop:0,
        screenLeft: 0,
      }, 400);  
   });
    
})