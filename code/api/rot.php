<?php
    include "conn.php";
        //接收前端数据
        $num = isset($_POST["num"]) ? $_POST["num"] : "";//接收id
        $id = isset($_POST["id"]) ? $_POST["id"] : "";//接收用户id
        $type = isset($_POST["types"]) ? $_POST["types"] : "del";
            //数量
    if($type == "add"){
        // 修改数据库的num
        // $sql = "UPDATE cart SET num='$num' WHERE id=$id"; 
        //执行语句 修改num数量
        $sql = "UPDATE cart SET num=num+1 WHERE id= $id"; 
        $res = $conn->query($sql); //结果集
    }
    if($type =="del"){
        //删除数据库的num
        $sql = "DELETE FROM cart WHERE id=$id";
        //执行语句
        $res = $conn->query($sql); //结果集
    }

    //查询所有的数据，为了得到总条数
    $sql2 = "SELECT * FROM cart";

    //执行语句
    $res2 = $conn->query($sql2);
    //获取结果集的总条数即可
    $content = $res2->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);//前端需要的数据

    // $res2->close();//关闭结果集
    // $conn->close();//关闭数据库连接



?>
张俊 18:53:55
///////////
<?php
    include "conn.php";
        //接收前端数据
        $num = isset($_POST["num"]) ? $_POST["num"] : "";//接收id
        $id = isset($_POST["id"]) ? $_POST["id"] : "";//接收用户id
        $type = isset($_POST["types"]) ? $_POST["types"] : "del";
            //数量
    if($type == "jian"){
        // 修改数据库的num
        // $sql = "UPDATE cart SET num='$num' WHERE id=$id"; 
        //执行语句 修改num数量
        $sql = "UPDATE cart SET num=num-1 WHERE id= $id"; 
        $res = $conn->query($sql); //结果集
    }
    if($type =="del"){
        //删除数据库的num
        $sql = "DELETE FROM cart WHERE id=$id";
        //执行语句
        $res = $conn->query($sql); //结果集
    }

    //查询所有的数据，为了得到总条数
    $sql2 = "SELECT * FROM cart";

    //执行语句
    $res2 = $conn->query($sql2);
    //获取结果集的总条数即可
    $content = $res2->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);//前端需要的数据

    // $res2->close();//关闭结果集
    // $conn->close();//关闭数据库连接



?>
