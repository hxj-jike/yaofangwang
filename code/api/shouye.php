<?php
// header("Content-Type:text/html;charset=UTF-8");
//连接数据库f
include 'conn.php';
//写sql语句

$sql = "SELECT * FROM diklist";

    // 执行语句
    $res = $conn->query($sql);
    // var_dump($res);

    // 需求数据
    $content = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($content);
 
    // 转成字符串，传给前端
    echo json_encode($content,true);
?>