<?php
	require_once("config.php");
	$output = [];
	if(isset($_GET["strona"])){
        $db=mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
		if($_GET["strona"] == 'propozycja'){
            mysqli_query($db, "UPDATE glosowanie SET `propozycja_glosy` = `propozycja_glosy` + 1");
        }
        else if($_GET["strona"] == 'opozycja') {
            mysqli_query($db, "UPDATE glosowanie SET `opozycja_glosy` = `opozycja_glosy` + 1");
        }
						
		mysqli_close($db);	
	}
?>
