$(function(){
        $(".gh").hover(function () {
            $(".gh").eq($(this).index()).addClass("co").siblings().removeClass('co');
            $(".subcat").hide().eq($(this).index()).show();
        });

    $(".daohang").hover(function () {
        $(".other").css('display', 'block');
        $(".other").css('border-top', 'none');
    }, function () {
        $(".other").css('display', 'none');
    });
    var arr = ["e7363d790a630e61df70c034717a844f.png", "db6609a61bf56afd781453277c4836d9.jpg",
        "6de8296ccb0b3b285a77bf9c648e0352.jpg", "792358eb23769f079a825e84f7654b10.png",
        "e7363d790a630e61df70c034717a844f.png"
    ];
    var ord = 0; //代表当前图片的序号，从0开始。
    var myTimer = null;

    function initUI() {
        $(".banner .dik:first").css({
            "backgroundColor": "red"
        });
    }

    function initEvent() {
        $(".banner").mouseenter(function () {
            stopPlay();
        });

        $(".banner").mouseleave(function () {
            autoPlay();
        });

        $(".banner .dik").click(function () {
            goImg($(".banner .dik").index(this));
        });

        $(".leftArrow").click(function () {
            let transord = ord - 1;
            transord = transord < 0 ? arr.length - 1 : transord;
            goImg(transord);
        });

        $(".rightArrow").click(function () {
            let transord = ord + 1;
            transord = transord > arr.length - 1 ? 0 : transord;
            goImg(transord);
        });
    }

    //1、自动播放
    function autoPlay() {
        myTimer = setInterval(function () {
            //一、改变数据
            // 1、记录当前序号（淡出的图片序号）
            let outOrd = ord;
            //2、改变要显示的图片的序号（淡出图片序号加一）
            ord++;
            if (ord > arr.length - 1) {
                ord = 0;
            }
            //二、改变外观
            let $img = $(".banner img");
            //1、淡入淡出效果
            //让一张(outOrd)淡出 当前消失
            $img.eq(outOrd).animate({
                "opacity": 0
            }, 1000);
            //让一张(ord)淡入下一张图片显示
            $img.eq(ord).animate({
                "opacity": 1
            }, 1000);
            //2、改变豆豆的颜色；
            $(".banner .dik").eq(ord).css({
                "backgroundColor": "red"
            }).siblings().css({
                "backgroundColor": "orange"
            });
        }, 3000);
    }

    //2、停止播放
    function stopPlay() {
        window.clearInterval(myTimer);
    }

    //3、跳转到指定的图片
    function goImg(transOrd) {
        //一、改变数据
        // 1、记录当前序号（淡出的图片序号）
        let outOrd = ord;
        //2、改变要显示的图片的序号（传入的图片序号）
        ord = transOrd;
        if (ord > arr.length - 1) {
            ord = 0;
        }
        //二、改变外观
        let $img = $(".banner img");
        //1、淡入淡出效果
        //让一张(outOrd)淡出 当前消失
        $img.eq(outOrd).animate({
            "opacity": 0
        }, 1000);
        //让一张(ord)淡入下一张图片显示
        $img.eq(ord).animate({
            "opacity": 1
        }, 1000);
        //2、改变豆豆的颜色；
        $(".banner .dik").eq(ord).css({
            "backgroundColor": "red"
        }).siblings().css({
            "backgroundColor": "orange"
        });
    }

    $(function () {
        //1、初始化界面
        initUI();
        //2、绑定事件
        initEvent();
        //3、自动播放
        autoPlay();
    });
    $(".snavs span").hover(function () {
        $(".snavs span").eq($(this).index()).addClass("co").siblings().removeClass('co');
        $(".hlist2").hide().eq($(this).index()).show();

    });
    $(".bn").hover(function () {
        $(".bn").eq($(this).index()).addClass("co1").siblings().removeClass('co1');
        $(".hlist3").hide().eq($(this).index()).show();

    });
    $(".ca4").hover(function () {
        $(".ca4").eq($(this).index()).addClass("co2").siblings().removeClass('co2');
        $(".hlist5").hide().eq($(this).index()).show();

    });
    $(".trt").hover(function () {
        $(".trt").eq($(this).index()).addClass("co3").siblings().removeClass('co3');
        $(".hlist6").hide().eq($(this).index()).show();

    });
    $(".ht").hover(function () {
        $(".ht").eq($(this).index()).addClass("co4").siblings().removeClass('co4');
        $(".hlist7").hide().eq($(this).index()).show();

    });
    $(".hnav li").hover(function () {
        $(".hanv li").eq($(this).index()).addClass("co5").siblings().removeClass('co5');

        $(".linktxt").hide().eq($(this).index()).show();
    });
                    

})