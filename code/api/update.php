<?php
include './conn.php';
$gid=isset($_REQUEST['gid']) ? $_REQUEST['gid'] : "";
$isActive=isset($_REQUEST['isActive']) ? $_REQUEST['isActive'] : "";
/* 编写sql语句 */
$sql = "UPDATE catlist SET isActive=$isActive WHERE gid='$gid'";
mysqli_query($conn,$sql);
?>