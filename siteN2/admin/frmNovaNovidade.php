<div id="formConsulta">
	<form name='frmNovaNoticia' id='frmNovaNoticia' method='POST' action="javascript:gravarNovidade();" >
		<fieldset><legend>Nova Novidade</legend>
			<input placeholder="Digite o titulo" type='text' name='txtTitulo' id='txtTitulo' size='30'><br>
            <textarea name="txtConteudo" id="txtConteudo" cols="40" rows="10" placeholder="Digite o conteudo"></textarea>
		</fieldset>
		<fieldset>
			<input class="btnInp" type='submit' name='con' value='Enviar'>
		</fieldset>
	</form>
	<div id='resultadoConsulta'></div>
</div>