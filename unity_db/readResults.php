<?php
    require_once("config.php");

    if(isset($_GET["kod"])){
        $kod = $_GET["kod"];
        $link=mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
        mysqli_query($link, "SET NAMES UTF8");

        $result=mysqli_query($link, "SELECT * FROM glosowanie WHERE debate_code = '$kod'");
        $count=0;

        while($row=mysqli_fetch_assoc($result)){	
            $json = json_encode($row);
            echo $json;
        }
        mysqli_close($link);
    }
?>
