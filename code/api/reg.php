<?php
header("Content-Type:text/html;charset=UTF-8");
//连接数据库f
include 'conn.php';
//接收前端传过来的用户名，查询数据库看是否存在,返回提示信息
$username = isset($_POST['username'])?$_POST['username']: '';
// echo $username; 
//写sql语句
$sql = "SELECT * FROM user where username = '$username'";
//执行sql语句
$res  = $conn->query($sql);
//得到结果集
//var _dump($res);
//获取结果集的num _rows属性，如果大于0证明查询到结果：不给注册
if($res->num_rows){
    echo 'no';
}else{
    echo "yes";
}
// 关闭数据库
$res->close();
$conn->close();

?>