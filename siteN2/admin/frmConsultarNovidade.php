<div id="formConsulta">
	<form name='frmConsultaNovidades' id='frmConsultaNovidades' method='POST' action="javascript:consultarNovidades();" >
		<fieldset><legend>Consulta Novidades</legend>
			<input placeholder="Digite o titulo" type='text' name='txtTitulo' id='txtTitulo' size='30'><br>
		</fieldset>
		<fieldset>
			<input class="btnInp" type='submit' name='con' value='consultar' >
			<input class="btnInp" type='reset' name='lmp' value='limpar' >
		</fieldset>
	</form>
	<div id='resultadoConsulta'></div>
</div>
