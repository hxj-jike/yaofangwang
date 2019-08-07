<?php
header("Content-Type:text/html;charset=UTF-8");
include './conn.php';
$sql = "SELECT * FROM diklist";
$res = $conn->query($sql);
    //需要的数据
    $content = $res->fetch_all(MYSQLI_ASSOC);
    //返回前端数据
    // var_dump($content)
    echo json_encode($content,true);
?>