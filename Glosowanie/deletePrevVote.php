<?php
    require_once("config.php");

    if(isset($_GET["cel"]) && isset($_GET["kod"])){
        $kod = $_GET["kod"];
        $cel = $_GET["cel"];
        $link=mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
        mysqli_query($link, "SET NAMES UTF8");
        
        mysqli_query($link, "UPDATE glosowanie SET `$cel` = `$cel`-1 WHERE `debate_code`= '$kod' ");

        mysqli_close($link);
    }
?>
