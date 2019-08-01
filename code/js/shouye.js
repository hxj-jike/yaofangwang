$(function(){
    $(".daohang").hover(function(){
        $(".other").css('display','block');
        $(".other").css('border-top','none');
    },function(){
        $(".other").css('display','none');
      });
      var oca = document.getElementsByClassName("ca");
    var ocat = document.getElementsByClassName("subcat");
    function fn() {
        for (var j = 0; j < oca.length; j++) {
            oca[j].className = '';
            ocat[j].style.display = 'none';
        }
    }
    for (i = 0; i < oca.length; i++) {
        var ca = oca[i];
        ca.index = i;
        ca.onmouseover = function () {
            fn();
            this.className = 'gh';
            ocat[this.index].style.display = "block";
        }
        ca.onmouseout = function () {
            fn();
            ocat[this.index].style.display = "none";
        }
    }
    
})