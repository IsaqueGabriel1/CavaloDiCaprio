<?php
if(isset($txtEmail) && isset($txtPedido)){	
	$sql = "insert into pedido(
			email,
			pedido
		)
		values(
			'".$db->real_escape_string($txtEmail)."',
			'".$db->real_escape_string($txtPedido)."'
		)		"; 
	if($db->query($sql)){
		echo "ok";
	}
	else{
		echo "erro ao incluir o pedido";
	}
}
?>