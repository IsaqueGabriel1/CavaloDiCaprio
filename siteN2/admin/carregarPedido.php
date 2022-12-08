<?php
if(isset($id)){
$sql = "
		select email,pedido,idPedido from pedido
		where idPedido = $id
	";
	if($result=$db->query($sql)){
		$pedido=$result->fetch_array()
	?>
<div id="formConsulta">
	<form name='frmAltPedido' id='frmAltPedido'  method='POST' action="javascript:alterarPedido(<?php echo $pedido[2] ?>);" onSubmit="return validaPedido();" >
		<fieldset>
			<legend>Pedido</legend>
			<input type='text' name='txtEmail' id='txtEmail' size='40' value='<?php echo $pedido[0] ?>'><br>
			<textarea name='txtPedido' id='txtPedido' cols='40' rows='10' ><?php echo $pedido[1] ?></textarea>
		</fieldset>
		<fieldset>
			<input class="btnInp" type='submit' name='con' value='Enviar' >
		</fieldset>
	</form>
	<div id='resultadoConsulta'></div>
</div>

	<?php
	}
}
?>