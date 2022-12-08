<?php
if(isset($id)){		
	$sql = "delete from novidades where id=$id";
   
	if($db->query($sql)){
		echo "ok";
	}
	else{
		echo "Erro na exclusão";
	}
}
?>