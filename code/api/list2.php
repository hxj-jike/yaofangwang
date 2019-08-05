<?php
header("Content-Type:text/html;charset=UTF-8");
include "./conn.php";
$pager=isset($_POST["pager"]) * 40;
$type= isset($_POST["type"]) * 40;
  $sql = "SELECT * FROM list1 order by gid limit $pager,40";
// 查询表中的数据(按照某个字段排序)
$result = mysqli_query($conn,$sql);

// 把数组中的数组转换为数组
echo json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC), true);

?>