<?php
//连接数据库
include './conn.php';
$username=isset($_POST['username']) ? $_POST['username'] : '';
$password=isset($_POST['password']) ? $_POST['password'] : '';
$sql="SELECT * FROM user WHERE username='$username' AND password='$password'";
$res=$conn->query($sql);//返回结果集
if($res->num_rows>0){
    echo 1;//可以登录
}else{
    echo 0;
}
$res->close();//关闭结果集
$conn->close();
?>