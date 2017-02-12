<?php

define("DSN" , 'mysql:host=localhost;dbname=test');
define("user" , 'root');
define("password" , '');

try{
	$db = new PDO(DSN,user,password);
}catch(PDOException $e){
 echo $e->getMessage();
}
if(isset($_GET['id']) && $_GET['id']!=0){
	$req = "SELECT * FROM article WHERE id_art='".$_GET['id']."'";
}else{
	$req = "SELECT * FROM article";
}


$resultat = $db->query($req);

$data = $resultat->fetchAll(PDO::FETCH_ASSOC);

//var_dump($data);

echo json_encode($data);