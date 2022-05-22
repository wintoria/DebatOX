<?php
    require_once("config.php");

    if(isset($_GET["kod"]) && isset($_GET["tytul"])){
        $kod = $_GET["kod"];
        $tytul = $_GET["tytul"];
        $link=mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
        mysqli_query($link, "SET NAMES UTF8");
        
        mysqli_query($link, "INSERT INTO `debaty`(`code`, `title`) VALUES ('$kod','$tytul')");

        mysqli_query($link, "INSERT INTO `glosowanie`(`debate_code`, `propozycja_glosy`, `opozycja_glosy`) VALUES ('$kod',0,0)");

        mysqli_close($link);
    }
?>