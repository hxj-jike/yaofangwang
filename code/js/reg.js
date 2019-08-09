$(function () {
    var inf1 = document.getElementsByClassName('inf1')[0];
    var inf2 = document.getElementsByClassName('inf2')[0];
    var inf3 = document.getElementsByClassName('inf3')[0];
    var inf4 = document.getElementsByClassName('inf4')[0];
    var inf5 = document.getElementsByClassName('inf5')[0];
    var inf6 = document.getElementsByClassName('inf6')[0];
    var inf7 = document.getElementsByClassName('inf7')[0];
    var inf8 = document.getElementsByClassName('inf8')[0];
    let regusername = /^[A-Za-z]{6,10}$/;
    let regpassword = /^[/^[a-zA-Z]\w{5,17}$/;
    let regphone = /^1[3-9]\d{9}$/;
    let regemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    let regtruename = /^[u4e00-u9fa5]{2,10}$/;
    let regtelphone1 = /^[0-9]\d{2,3}$/;
    let regtelphone2 = /^[0-9]\d{6,7}$/;
    var isok1 = false;
    var isok2 = false;
    var isok3 = false;
    var isok4 = false;
    var isok5 = false;
    var isok6 = false;
    var isok7 = false;
    var isok8 = false;
    $(function () {
        $("#username").on("blur", function () {
            var username = $.trim($("#username").val());
            if (username.length == 0) {
                inf1.innerHTML = '用户名不能为空';
                inf1.style.color = 'red';
            }else if(regusername.test(username)) {
                $.ajax({
                    type:"post",
                    url:'../api/reg.php',
                    data:'username=' + username,
                    success:function(res) {
                        if (res == "yes") {
                            inf1.innerHTML = '√';
                            inf1.style.color = '#58bc58'; 
                            isok1 = true;
                        }else{
                            inf1.innerHTML = '该用名太受欢迎啦';
                            inf1.style.color = 'red';
                            isok1 = false;
                        }
                    }
                });
            } else {
                inf1.innerHTML = '6-10个字符，只能字母';
                inf1.style.color = 'red';
            }
        })
        var passwordd = '';
        $("#pwd").on("blur", function () {
            var password = $.trim($("#pwd").val());
            passwordd = password;
            if (password.length == 0) {
                inf2.innerHTML = '密码不能为空';
                inf2.style.color = 'red';
            } else if (!regpassword.test(password)) {
                inf2.innerHTML = '6-20位数字和字符组合，两边不能有空符号符合规范';
                inf2.style.color = 'red';
                isok2 = false;

            } else {
                inf2.innerHTML = '√';
                inf2.style.color = '#58bc58';
                isok2 = true;
            }
        })
        $("#txtUserPass2").on("blur", function (){
            var passworda = $.trim($("#txtUserPass2").val());
            if (passworda.length == 0) {
                inf3.innerHTML = '密码不能为空';
                inf3.style.color = 'red';
            } else if (passworda != passwordd) {
                inf3.innerHTML = '两次密码不一致';
                inf3.style.color = 'red';
                isok3 = false;

            } else {
                inf3.innerHTML = '√';
                inf3.style.color = '#58bc58';
                isok3 = true;
            }
        })
        $("#txt_Mobile").on("blur", function () {
            var phone = $.trim($("#txt_Mobile").val());
            if (phone.length == 0) {
                inf4.innerHTML = '号码不能为空';
                inf4.style.color = 'red';
            } else if (regphone.test(phone)) {
                $.ajax({
                    type: "post",
                    url: '../api/regi.php',
                    data: 'phone=' + phone,
                    success: function (res) {
                        if (res == "yes") {
                            inf4.innerHTML = '√';
                            inf4.style.color = '#58bc58';
                            isok4 = true;
                        } else {
                            inf4.innerHTML = '该号码已经被注册';
                            inf4.style.color = 'red';
                            isok4 = false;
                        }
                    }
                });
            } else {
                inf4.innerHTML = '11位数字';
                inf4.style.color = 'red';
                isok4 = false;
            }
        })
        $("#txt_RealName").on("blur", function () {
            var realname = $.trim($("#txt_RealName").val());
            if (realname.length == 0) {
                inf5.innerHTML = '昵称不能为空';
                inf5.style.color = 'red';
            } else if (!regtruename.test(realname)) {
                inf5.innerHTML = '至少两个字符';
                inf5.style.color = 'red';
                isok5 = false;

            } else {
                inf5.innerHTML = '√';
                inf5.style.color = '#58bc58';
                isok5 = true;
            }
        })
        $("#txtEmail").on("blur", function(){
            var email = $.trim($("#txtEmail").val());
            if (email.length == 0) {
                inf6.innerHTML = '邮箱不能为空';
                inf6.style.color = 'red';
            } else if (!regemail.test(email)) {
                inf6.innerHTML = '格式如：×××@qq.com,6-20个字符';
                inf6.style.color = 'red';
                isok6 = false;

            } else {
                inf6.innerHTML = '√';
                inf6.style.color = '#58bc58';
                isok6 = true;
            }
        })
        $("#txtphone1").on("blur", function () {
            var telphone1 = $.trim($("#txtphone1").val());
            if (telphone1.length == 0) {
                inf7.innerHTML = '区号不能为空';
                inf7.style.color = 'red';
            } else if (!regtelphone1.test(telphone1)) {
                inf7.innerHTML = '三到四位数字';
                inf7.style.color = 'red';
                isok7 = false;

            } else {
                inf7.innerHTML = '√';
                inf7.style.color = '#58bc58';
                isok7 = true;
            }
        })
        $("#txtphone2").on("blur", function () {
            var telphone2 = $.trim($("#txtphone2").val());
            if (telphone2.length == 0) {
                inf8.innerHTML = '区号不能为空';
                inf8.style.color = 'red';
            } else if (!regtelphone2.test(telphone2)) {
                inf8.innerHTML = '七到八位数字';
                inf8.style.color = 'red';
                isok8 = false;

            } else {
                inf8.innerHTML = '√';
                inf8.style.color = '#58bc58';
                isok8 = true;
            }
        })

    })
    $(".btn2").on("click", function () {
        var username = $("#username").val();
        var password = $("#pwd").val();
        var phone = $("#txt_Mobile").val();
        var email = $("#txtEmail").val();
        var realname = $("#txt_RealName").val();
        var telphone1 = $("#txtphone1").val();
        var telphone2 = $("#txtphone2").val(); 
        console.log(isok1 ,isok2,isok3,isok4,isok5,isok6,isok7,isok8,);
        if (isok1 == true && isok2 == true && isok3 == true && isok4 == true && isok5 == true && isok6 == true && isok7 == true && isok8 == true){
            $.ajax({
                type: 'post',
                url: 'http://127.0.0.1/yaofangwang/code/api/regc.php',
                data: 'username=' + username + '&password=' + password + '&phone=' +
                    phone + '&realname=' + realname + '&email=' + email + '&telphone1=' + telphone1 + '&telphone2=' + telphone2,
                success:function(res){
                    if (res == "yes"){
                        alert('注册成功');
                        window.location.href='http://127.0.0.1/yaofangwang/code/html/login.html';   
                    }
                }
            })
         
          
        } else {
            alert("请验证输入信息是否正确");
        }
    })
})