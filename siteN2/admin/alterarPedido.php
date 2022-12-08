<?php
if(isset($id) && isset($email) && isset($pedido)){
	$sql = "update pedido
		set 
			email='".$db->real_escape_string($email)."',
			pedido='".$db->real_escape_string($pedido)."'
		where
			idPedido='".$db->real_escape_string($id)."'
		";
	if($db->query($sql)){
		echo "ok";
	}
	else{
		echo "erro ao alterar o pedido";
	}
}
?>
