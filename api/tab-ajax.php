<?php
    include("../inc/dbconn.php");
    $page = $_GET["code"];

    $start = ($page - 1) * 4;

    $sql = "select * from youpin order by Id desc limit $start,4";

    $result = $conn->query($sql);

    if($result->num_rows > 0){
        while($row=mysqli_fetch_assoc($result)){
            $data[] = $row;
            
        }
        $state = array('data'=>$data,'code'=>0);
    }else{
        $state = array('data'=>'结束','code'=>0);
    }
    echo json_encode($state);