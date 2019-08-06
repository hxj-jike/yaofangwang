$(function () {

    $(".daohang").hover(function () {
        $(".other").css('display', 'block');
        $(".other").css('border-top', 'none');
    }, function () {
        $(".other").css('display', 'none');
    });
    $(".category").hover(function () {
        $(".catlist").css('display', 'block');
    }, function () {
        $(".catlist").css('display', 'none');
    });
    $(".gh").hover(function () {
        $(".gh").eq($(this).index()).addClass("co").siblings().removeClass('co');
        $(".subcat").hide().eq($(this).index()).show();

    })
    $(".select .sitems li #sp_mill_more").click(function () {
        if ($(this).attr("title") == "aa") {
            $(this).next(".more").show();
            $(this).attr("title", "");
        } else {
            $(this).next(".more").hide();
            $(this).attr("title", "aa");
        }
    });
    $(".hnav li").hover(function () {
        $(".hanv li").eq($(this).index()).addClass("co5").siblings().removeClass('co5');

        $(".linktxt").hide().eq($(this).index()).show();
    });
   
    $.ajax({
        type: "post",
        url: "../api/list.php",
        dataType: "json",
        success: function(response) {
            if (response.status == "error") {
                alert("网络繁忙，请检查网络连接");
            } else {
                console.log("count", response.data.count);
                // 创建3个标签显示在页面中
                $(".pager").empty();
                for (var i = 0; i < response.data.count; i++) {
                    $(".pager").append(`<a href="javascript:;">${i + 1}</a>`);
                }
                $(".pager").children("a:first").addClass("active");
            }
        }
    });
            let getList = (pager ,type) => {
                $.ajax({
                    type: "post",
                    url: "../api/list2.php",
                    data:'pager=' + pager + '&type=' + type,
                    dataType:'json',
                    success:function(response) {
                        console.log(response);
                        var res = response.map(ele => {
                            return `<li id = ${ele.gid}>
                                    <a href ="http://127.0.0.1/yaofangwang/code/html/details.html?id=${ele.gid}"><img src=${ele.urlimg} class="god"></a>
                                    <h2 class="priceA">￥${ele.price}</h2>
                                    <span class ="priceB">￥${ele.price1}</span>
                                    <h3>${ele.title}</h3>
                                    <p class="p1 po">规格：${ele.regular}</p>
                                    <p class="p2 po">剂型：${ele.type}</p>
                                    <p class="p3 po">批准文号：${ele.ban}</p>
                                   </li>`
    
    
                        }).join("");
                        $(".goodlist").html(res);
                    }
                });
            }
            var orderType = ['default','priceA','priceB'];
            var type = 'default';
            getList(0,type);
            $('.pager').on('click','a',function(){
                getList($(this).index(),type);
                $('.pager').children('a').eq($(this).index()).addClass('active').siblings().removeClass("active");
            })
            $(".nav li ").click(function(){
                type = orderType[$(this).index()];
                getList(0,type);
                $('.pager').children('a').eq(0).addClass('active').siblings().removeClass("active");
            })
           
           
    });