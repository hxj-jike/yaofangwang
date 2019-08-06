<?php
header("Content-Type:text/html;charset=UTF-8");
include './conn.php';
$gid=isset($_REQUEST['id']) ? $_REQUEST['id'] : '';
echo $id;
$des = $conn->res->fetch_all(MYSQL_ASSOC);
echo json_encode($content);
?>