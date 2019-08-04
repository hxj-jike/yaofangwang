$(function (){
    $('.btn2').click(function(){
    var username = $.trim($('#txt_AccountName').val());
    var password = $.trim($("#txt_Password").val());
        if(username.length ==0 || password.length==0 ){
            alert('请完善信息');
        }
   else{
        $.ajax({
            type:'post',
            url:'../api/login.php',
            data:'username=' + username +'&password=' +password,
            dataType: "json",
            success:function(res){
                if(res == 1){
                    alert('登录成功');
                    window.location.href =
                  'http://127.0.0.1/yaofangwang/code/html/shouye.html';

                }else{
        alert('用户名或密码错误');
    }
            }
        })
    }
})
})