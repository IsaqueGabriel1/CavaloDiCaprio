<?php
if(isset($id)){		
	$sql = "delete from pedido where idPedido=$id";
   
	if($db->query($sql)){
		echo "ok";
	}
	else{
		echo "Erro na exclusão";
	}
}
?>