<?php
header("Content-Type:text/html;charset=UTF-8");
include './conn.php';
# 查询获取表中的所有内容
$sql = "SELECT * FROM list1";
$result = mysqli_query($conn,$sql);
if(!$result)
{
  $data = array("status" => "error", "msg" => "请求失败");
  echo json_encode($data, true);
}else
{
  $size = 40;
  $count = ceil(mysqli_num_rows($result) / $size);
  $data = array("status" => "success", "msg" => "请求成功","data"=>array("count"=>$count));
  echo json_encode($data, true);
}

?>