<?php
 include "./conn.php";
 $gid=isset($_REQUEST['gid']) ? $_REQUEST['gid'] : "";
 $price=isset($_REQUEST['price']) ? $_REQUEST['price'] : "";
$sql = "SELECT * FROM  cartlist WHERE gid = '$gid'";
$result = mysqli_query($conn,$sql);
$row = mysqli_num_rows($result);

if($row == 0)
{ 
   $insetSql = "INSERT INTO `cartlist` (`cartid`, `gid`, `num`, `total`,`price`,`isActive`) 
   VALUES (cartid, '$gid', 1, '$price','$price',1)";
   mysqli_query($conn,$insetSql);

}elseif($row == 1){
   /* 002-购物车中已经存在该商品  更新数据 */
   $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
   $num = $data[0]["num"] + 1;
   $total = $data[0]["price"] * $num;

   /* 更新 */
   $updateSql = "UPDATE cartlist SET num='$num',total='$total' WHERE gid='$gid'";
   mysqli_query($conn, $updateSql);
}


$totalCount = "SELECT * FROM  cartlist";
$result = mysqli_query($conn, $totalCount);
$row = mysqli_num_rows($result);
echo '{"totalRow":'.$row.'}';

?>