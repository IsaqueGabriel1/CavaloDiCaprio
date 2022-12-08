<?php
if(isset($titulo) && isset($conteudo)){	
	$sql = "insert into novidades (
			titulo,
			conteudo
		)
		values(
			'".$db->real_escape_string($titulo)."',
			'".$db->real_escape_string($conteudo)."'
		)		"; 
	if($db->query($sql)){
		echo "ok";
	}
	else{
		echo "erro ao incluir novidades";
	}
}
?>