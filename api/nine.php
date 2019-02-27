<?php
    include("../inc/dbconn.php");
    $page = $_GET["page"]; 
    $start = ($page - 1) * 1;

    $sql = "select * from headline order by Id desc limit $start,1";

    $result = $conn->query($sql);

    if ($result->num_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            $data[] = $row;  
        }
    }
    echo json_encode($data);
?>