<?php
if(isset($id)){
$sql = "
		select id,titulo,conteudo from novidades
		where id = $id
	";
	if($result=$db->query($sql)){
		$novidade=$result->fetch_array()
	?>
<div id="formConsulta">
	<form name='frmAltPedido' id='frmAltPedido'  method='POST' action="javascript:alterarNovidade(<?php echo $novidade[0] ?>);" onSubmit="return validaPedido();" >
		<fieldset>
			<legend>Novidades</legend>
			<input type='text' name='txtTitulo' id='txtTitulo' size='40' value='<?php echo $novidade[1] ?>'><br>
			<textarea name='txtConteudo' id='txtConteudo' cols='40' rows='10' ><?php echo $novidade[2] ?></textarea>
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