<?php
header("Content-Type:text/html;charset=UTF-8");
    $sevename = 'localhost'; // 主机名
    $username = 'root';   // 登入名
    $password = '';    //密码
    $dbname = 'test'; // 写入的数据库
    // 创建连接
    $conn = new mysqli($sevename,$username,$password,$dbname);

    // 检测连接
    if($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }

    // 检测有没有连接成功
    echo '连接成功';
?>