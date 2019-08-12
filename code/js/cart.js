 $(function () {
     var targetData;
     //  var gd;
     getCatInfo();

     function getCatInfo() {

         $.ajax({
             type: "post",
             url: "../api/cart.php",
             dataType: "json",
             success: function (data) {
                 targetData = data;
                 /* 根据数据来渲染页面 */
                 var res = data.map(function (ele) {
                     //   gd = ele.gid;
                     var html = ` <table class="table02 js-cart-item" data-shopid="${ele.gid}">
                    <tbody>
                                <tr data-id="c_23899754" data-storeid="381683 ${ele.gid}">
                                    <td class="w1">
                                            <div class="ck js-ck js-ck-medicine"><i style="width:16px;height:16px" class="checkbox-class ${ele.isActive==1 ? "checked" : "" }"data-cartid="23899754"></i></div>
                                    </td>
                                    <td class="w2">
                                        <a target="_blank" href="">
                                            <img src="${ele.urlimg}" alt="万通 万通筋骨贴(贴剂)">
                                        </a>
                                    </td>
                                    <td class="w3">
                                        <p class="drug_link">
                                            <a target="_blank" class="clearfix" href="/detail-22198165.html">
                                                <strong class="drug_str">${ele.title}</strong>
                                            </a>
                                        </p>
                                        <p>规格:${ele.regular}</p>
                                        <p>厂家：通化万通药业股份有限公司</p>

                                    </td>
                                    <td class="wk" style="width:110px;">

                                    ${ele.kucun}
                                    </td>
                                             
                                    <td class="w4">
                                            <span class="money2">￥${ele.price}</span>
                                    </td>
                                    <td class="w5">
                                            <span class="quantity">
                                                <a class="sub jian js-sub" href="javascript:void(0);" data-step="-1"></a>
                                                <input type="text" class="num js-num" value="${ele.num}" data-unit-price="20.5" data-lock-price="20.5" data-cartid="23899754" data-pkid="0">
                                                <a class="add jia js-add" href="javascript:void(0);" data-step="1"></a>
                                            </span>

                                    </td>
                                    <td class="w6">
                                            <span class="money js-money">￥${ele.price*ele.num}</span>

                                    </td>
                                    <td class="w7">
                                        <a href="javascript:void(0);" data-cartid="23899754" data-pkid="0" class="js-delete">删除</a>
                                    </td>
                                </tr>
                    </tbody>
                </table>`

                     return html;
                 }).join("");

                 $(".ct").html(res);
                 computedTotalPrice(); 
                

             }
         });
     }   
     function computedTotalPrice() {
         var res = 0;
         targetData.forEach(element => {
             if (element.isActive == 1) {
                 res += element.num * 1;
             }
         });
         $(".table03 .mn").html("总计:" + res);

     }
    //  $(".ct").on("click", ".checkbox-class", function () {
    //     var gid = $(this).parents('.table02').attr('data-shopid');
    //      var isActive = $(this).is(":checked");
    //      $.ajax({
    //          type: "get",
    //          url: "../api/update.php",
    //          data: `gid=${gid}&isActive=${isActive}`,
    //          dataType: "dataType",
    //          success: function (response) {
    //              /* 如果请求成功，那么就重新发请求加载数据 */
    //              getCatInfo();
    //          }
    //      });
    //  })

     /* 给删除添加点击事件 */

     $(".ct").on("click", ".js-delete", function () {
        var gid = $(this).parents('.table02').attr('data-shopid');
         $.ajax({
             type: "post",
             url: "../api/remove.php",
             data: "gid=" + gid,
             success: function (response) {
                 getCatInfo();
             }
         });
     })

     function total(now) {
         var price = now.parent().parent().prev().children().html();
         var prices = price.substr(1) * 1
         var num = now.parent().children('.js-num').val();
         var total = prices * num;
         now.parent().parent().next().children('.money').html('￥'+ total);

     }
     // 加数量
     $(".ct").on("click", ".add", function () {
         var gid = $(this).parents('.table02').attr('data-shopid');

         var num = $(this).prev().val();
         num++;
         var kucun = $(this).prev().data('num');
         if (num >= kucun) {
             num = kucun;
         }

         $(this).prev().val(num)
         total($(this));
       
         $.ajax({
             type: "post",
             url: "../api/adt.php",
             data: "gid=" + gid + '&num=' + num
         });
         getCatInfo();

     });

     //减数量;
     $(".ct").on("click", ".sub", function () {
         num = $(this).next().val();

         num--;
         if (num <= 1) {
             num = 1;
         }
         $(this).next().val(num);
         total($(this));
         var gid = $(this).parents('.table02').attr('data-shopid');
         $.ajax({
             type: "post",
             url: "../api/jian.php",
             data: "gid=" + gid + '&num=' + num
         });
         getCatInfo();
     })

     $('.ct').on('click',".checkbox-class",function(){
        var gid = $(this).parents('.table02').attr('data-shopid');
        // var isActive = $(this).is("checked");
        $.ajax({
                     type: "post",
                     url: "../api/update.php",
                     data:{
                         gid,
                         isActive:'0'
                     }
                 });
                 getCatInfo()
     })
 })