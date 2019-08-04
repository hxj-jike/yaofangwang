<?php
header("Content-Type:text/html;charset=UTF-8");
//连接数据库
include 'conn.php';
$username = isset($_POST['username'])?$_POST['username']: '';
$password = isset($_POST['password'])?$_POST['password']: '';
$phone = isset($_POST['phone'])?$_POST['phone']: '';
$realname = isset($_POST['realname'])?$_POST['realname']: '';
$email = isset($_POST['email'])?$_POST['email']: '';
$telphone1 = isset($_POST['telphone1'])?$_POST['telphone1']: '';
$telphone2 = isset($_POST['telphne2'])?$_POST['telphone2']: '';
//sql语句
$sql = "INSERT INTO user (username,password,phone,realname,email,telphone1,telphone2) VALUES('$username','$password','$phone','$realname','$email','$telphone1','$telphone2')";
//执行语句
$res = $conn->query($sql);
if($res){
    echo "yes";//插入成功
}else{
    echo'no';//插入失败

}
// $res->close();
// $conn->close();
?>




