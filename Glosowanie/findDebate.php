<?php
	require_once("config.php");
	$output = [];
	if(isset($_GET["kod"])){
        $kod = $_GET["kod"];
        $db = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

		$res = mysqli_query($db, "SELECT * FROM debaty WHERE code='$kod'");
        while($row=mysqli_fetch_assoc($res)){
            $string = $row["code"] . ":" . $row["title"];
            array_push($output, $string); 
        }
		mysqli_close($db);

        if($output == []){}
        else{
            $json = json_encode($output);
	        echo $json;
        }
	}
?>