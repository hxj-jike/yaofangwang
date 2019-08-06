<?php
header("Content-Type:text/html;charset=UTF-8");
include './conn.php';
$pager = $_REQUEST["pager"] * 40;
$type=  $_REQUEST["type"];
if($type == "default")
{
  $sql = "SELECT * FROM list1 order by 'gid' limit $pager,40";

}else if($type == "priceA")
{
  // 按照价格从高到低排序
  $sql = "SELECT * FROM list1 ORDER BY 'price' DESC limit $pager,40";

} else if ($type == "priceB") {

  // 按照价格从低到高进行排序
  $sql = "SELECT * FROM list1 ORDER BY 'price' ASC limit $pager,40";
}
$result = mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC), true);
?>