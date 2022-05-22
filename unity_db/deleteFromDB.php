<?php
    require_once("config.php");

    if(isset($_GET["kod"])){
        $kod = $_GET["kod"];
        $link=mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
        mysqli_query($link, "SET NAMES UTF8");
        
        mysqli_query($link, "DELETE FROM debaty WHERE code = '$kod'");

        mysqli_close($link);
    }
?>
