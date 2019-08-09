<?php
 include "./conn.php";
$sql = "SELECT cartlist.*,list1.title,list1.tu1,list1.regular,list1.kucun FROM cartlist , list1 WHERE cartlist.gid = list1.gid";
$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data, true);



?>