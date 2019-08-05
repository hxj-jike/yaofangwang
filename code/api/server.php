<?php
include "./conn.php";
$data = file_get_contents("../src/list2.json");
$arr = json_decode($data, true);
for ($i = 0; $i < count($arr); $i++) {
  $authorized_code = $arr[$i]["authorized_code"];
  $namecn = $arr[$i]["namecn"];
  $name = $arr[$i]["name"];
  $aliascn = $arr[$i]["aliascn"];
  $standard = $arr[$i]["standard"];
  $troche_type = $arr[$i]["troche_type"];
  $intro_image = $arr[$i]["intro_image"];
  $title = $arr[$i]["title"];
  $short_title = $arr[$i]["short_title"];
  $price_min = $arr[$i]["price_min"];
  $price_max = $arr[$i]["price_max"];
  $shop_num = $arr[$i]["shop_num"];
  $mill_lock_price = $arr[$i]["mill_lock_price"];
  $show_buy_button = $arr[$i]["show_buy_button"];
  $dict_medicine_type = $arr[$i]["dict_medicine_type"];
  $medicine_name = $arr[$i]["medicine_name"];
  $applicability = $arr[$i]["applicability"];
  $sale_count = $arr[$i]["sale_count"];
  $price_desc = $arr[$i]["price_desc"];


  $sql = "INSERT INTO `vopalist` 
  ( `id`, `authorized_code`, `namecn`,`name`, `aliascn`,`standard`, `intro_image`, `title`,`short_title`,
  `price_min`, `price_max`, `shop_num`,
   `mill_lock_price`,`show_buy_button`, `dict_medicine_type`, `medicine_name`,`applicability`, `sale_count`, `price_desc`) VALUES ( '$i','$authorized_code', '$namecn','$name', '$aliascn','$standard', '$intro_image', 
   '$title','$short_title','$price_min', '$price_max', '$shop_num',
   '$mill_lock_price','$show_buy_button', '$dict_medicine_type', '$medicine_name','$applicability', '$sale_count', '$price_desc')";
   mysqli_query($conn, $sql);
}


?>