<?php
include "./conn.php";
$gid=isset($_REQUEST['gid']) ? $_REQUEST['gid'] : "";
$sql = "DELETE FROM cartlist WHERE gid='$gid'";
mysqli_query($conn, $sql);
?>

