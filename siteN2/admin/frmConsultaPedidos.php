<div id="formConsulta">
	<form name='frmConsultaPedidos' id='frmConsultaPedidos' method='POST' action="javascript:consultarPedidos();" >
		<fieldset><legend>Consulta Pedidos</legend>
			<input placeholder="Digite o email" type='text' name='email' id='email' size='30'><br>
		</fieldset>
		<fieldset>
			<input class="btnInp" type='submit' name='con' value='consultar' >
			<input class="btnInp" type='reset' name='lmp' value='limpar' >
		</fieldset>
	</form>
	<div id='resultadoConsulta'></div>
</div>



