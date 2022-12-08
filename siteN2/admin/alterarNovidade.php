<?php
if(isset($id) && isset($titulo) && isset($conteudo)){
	$sql = "update novidades
		set 
			titulo='".$db->real_escape_string($titulo)."',
			conteudo='".$db->real_escape_string($conteudo)."'
		where
			id='".$db->real_escape_string($id)."'
		";
	if($db->query($sql)){
		echo "ok";
	}
	else{
		echo "erro ao alterar o pedido";
	}
}
?>