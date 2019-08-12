<?php
// header("Content-Type:text/html;charset=UTF-8");
// include './conn.php';
// $pager = $_REQUEST["pager"] * 40;
// $type=  $_REQUEST["type"];
// if($type == "default")
// {
//   $sql = "SELECT * FROM list1 order by 'gid' limit $pager,40";

// }else if($type == "priceA")

//   $sql = "SELECT * FROM list1 ORDER BY 'price' DESC limit $pager,40";

// } else if ($type == "priceB") {


//   $sql = "SELECT * FROM list1 ORDER BY 'price' ASC limit $pager,40";
// }
// $result = mysqli_query($conn,$sql);
// echo json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC), true);

include './conn.php';
$pager = $_REQUEST["pager"] * 40;
$typeOrder = $_REQUEST["orderType"];
if($typeOrder == 0)
{
  # 获取所有的商品信息
  $sql = "SELECT * FROM `list1` order by `gid` limit $pager , 40";
}else if($typeOrder == 1)
{
  $sql = "SELECT * FROM `list1` ORDER BY `list1`.`price` DESC limit $pager , 40";
}else if($typeOrder == 2)
{
  $sql = "SELECT * FROM `list1` ORDER BY `list1`.`price` ASC limit $pager , 40";
}



$result = mysqli_query($conn,$sql);

# 转换为JSON数据返回
# 该方法返回PHP的数据，该数据中保存两份内容(数组 | 对象)
# mysqli_fetch_all($result, MYSQLI_NUM)   获得的数据是数组结构
# mysqli_fetch_all($result, MYSQLI_ASSOC) 获得的数据是对象结构
$data = array("status" => "success", "msg" => "请求成功", "data" => mysqli_fetch_all($result, MYSQLI_ASSOC));
echo json_encode($data, true);
?>