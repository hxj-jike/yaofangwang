<?php
include "./conn.php";
$gid=isset($_REQUEST['gid']) ? $_REQUEST['gid'] : "";
$num=isset($_REQUEST['num']) ? $_REQUEST['num'] : "";
$sql = "UPDATE cartlist SET num=num-1 WHERE gid= $gid"; 
mysqli_query($conn, $sql);
?>
