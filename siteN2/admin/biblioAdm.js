function validaLogin() {
	var objUsuario = document.getElementById('usuario');
	var objSenha = document.getElementById('senha');
	var msg = '';

	if (objUsuario.value == '') {
		msg += "Informe o usuário\n";
	}
	if (objSenha.value == '') {
		msg += "Informa senha\n";
	}
	if (msg != '') {
		alert(msg);
		return false;
	}
	else {
		return true;
	}
}

function autenticar() {
	var ajax = new XMLHttpRequest();
	var objUsuario = document.getElementById('usuario');
	var objSenha = document.getElementById('senha');
	var params = "item=autenticar&usuario=" + objUsuario.value + "&senha=" + objSenha.value;
	ajax.open("POST", "pagina.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {
			if (ajax.responseText != 'ok') {
				alert(ajax.responseText);
			}
			else {
				document.location.href = '';

			}
		}
	}
	ajax.send(params);
}

function sair() {
	var ajax = new XMLHttpRequest();
	var params = "item=sair";
	ajax.open("POST", "pagina.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {

			document.location.href = '';

		}
	}
	ajax.send(params);
}

function consultarPedidos() {
	var ajax = new XMLHttpRequest();
	var objEmail = document.getElementById('email');
	var objResultado = document.getElementById('resultadoConsulta');
	var params = "item=consultarPedidos&email=" + objEmail.value;
	ajax.open("POST", "pagina.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {
			if (ajax.responseText != '') {
				objResultado.innerHTML = ajax.responseText;
			}
		}
	}
	ajax.send(params);
}

function consultarNovidades() {
	var ajax = new XMLHttpRequest();
	var txtTitulo = document.getElementById('txtTitulo');
	var objResultado = document.getElementById('resultadoConsulta');
	var params = "item=consultarNovidades&titulo=" + txtTitulo.value;
	ajax.open("POST", "pagina.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {
			if (ajax.responseText != '') {
				objResultado.innerHTML = ajax.responseText;
			}
		}
	}
	ajax.send(params);
}

function abre(item, alvo) {
	var ajax = new XMLHttpRequest();
	var params = "item=" + item;
	ajax.open("POST", "pagina.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {
			document.getElementById("divConteudo").innerHTML = ajax.responseText;
		}
	}
	ajax.send(params);
}


function gravaPedido() {
	var ajax = new XMLHttpRequest();
	var objEmail = document.getElementById('txtEmail');
	var objPedido = document.getElementById('txtPedido');
	var params = `item=incluiPedido&txtEmail=${objEmail.value}&txtPedido=${objPedido.value}`
	var resp = validarForms(objEmail.value, objPedido.value)

	if (resp) {
		alert("Preencha todos os campos")
	} else {
		if (objEmail.value.length == 0 || objEmail.value.search("@") == -1) {
			alert("Informe um email válido!!");
			objEmail.focus();
			return false;
		}
		if (objPedido.value.length == 0) {
			alert("Informe o pedido!");
			objPedido.focus();
			return false;
		}
	
	
		ajax.open("POST", "controle.php", false);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				if (ajax.responseText != '') {
					alert(ajax.responseText);
				}
				else {
					alert('Pedido Gravado Com Sucesso');
					document.getElementById('frmIncPedido').reset();
				}
			}
		}
		ajax.send(params);
	}
}

function gravarNovidade() {
	var ajax = new XMLHttpRequest();
	var txtTitulo = document.getElementById('txtTitulo');
	var txtConteudo = document.getElementById('txtConteudo');
	var params = `item=incluiNovidade&titulo=${txtTitulo.value}&conteudo=${txtConteudo.value}`

	if (txtTitulo.value == "" || txtConteudo.value == "") {
		alert("Preencha todos os campos")
	} else {
		ajax.open("POST", "pagina.php", false);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				if (ajax.responseText != 'ok') {
					alert(ajax.responseText);
				}
				else {
					alert('Nova novidade Gravada Com Sucesso');
					document.location="";
				}
			}
		}
		ajax.send(params);
	}
}

function excluirPedido(id) {
	if (confirm('Deseja mesmo excluir o pedido id = ' + id + ' ?')) {
		var ajax = new XMLHttpRequest();
		var params = "item=excluirPedido&id=" + id;
		ajax.open("POST", "pagina.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				if (ajax.responseText != 'ok') {
					alert(ajax.responseText);
				}
				else {
					alert('Pedido excluído com sucesso');
					document.getElementById('frmConsultaPedidos').submit();
				}
			}
		}
		ajax.send(params);
	}
}

function carregarPedido(id) {
	var ajax = new XMLHttpRequest();
	var objConteudo = document.getElementById('divConteudo');
	var params = "item=carregarPedido&id=" + id;
	ajax.open("POST", "pagina.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {
			objConteudo.innerHTML = ajax.responseText;
		}
	}
	ajax.send(params);
}

function excluirNovidade(id) {
	if (confirm('Deseja mesmo excluir aa novidade id = ' + id + ' ?')) {
		var ajax = new XMLHttpRequest();
		var params = "item=excluirNovidade&id=" + id;
		ajax.open("POST", "pagina.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				if (ajax.responseText != 'ok') {
					alert(ajax.responseText);
				}
				else {
					alert('Novidade excluída com sucesso');
					document.location = '';
				}
			}
		}
		ajax.send(params);
	}
}

function carregarNovidade(id) {
	var ajax = new XMLHttpRequest();
	var objConteudo = document.getElementById('divConteudo');
	var params = "item=carregarNovidade&id=" + id;
	ajax.open("POST", "pagina.php", true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) {
			objConteudo.innerHTML = ajax.responseText;
		}
	}
	ajax.send(params);
}

function alterarPedido(id) {
	var ajax = new XMLHttpRequest();
	var objEmail = document.getElementById('txtEmail');
	var objPedido = document.getElementById('txtPedido');
	var resp = validarForms(objEmail.value, objPedido.value)

	if(resp){
		alert("Preencha todos os campos");
	}else{
		var params = "item=alterarPedido&id=" + id + "&email=" + objEmail.value + "&pedido=" + objPedido.value;
		ajax.open("POST", "pagina.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				if (ajax.responseText != 'ok') {
					alert(ajax.responseText);
				}
				else {
					alert('Pedido Gravado Com Sucesso');
					abre('frmConsultaPedidos', 'divConteudo');
				}
			}
		}
		ajax.send(params);
	}
}

function alterarNovidade(id) {
	var ajax = new XMLHttpRequest();
	var titulo = document.getElementById('txtTitulo');
	var txtConteudo = document.getElementById('txtConteudo');
	var resp = validarForms(titulo.value, txtConteudo.value);

	if (resp) {
		alert("Preencha todos os campos")
	} else {
		var params = "item=alterarNovidade&id=" + id + "&titulo=" + titulo.value + "&conteudo=" + txtConteudo.value;
		ajax.open("POST", "pagina.php", true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				if (ajax.responseText != 'ok') {
					alert(ajax.responseText);
				}
				else {
					alert('Novidade Gravado Com Sucesso');
					abre('frmConsultaPedidos', 'divConteudo');
				}
			}
		}
		ajax.send(params);
	}

}

function validarForms(info1, info2) {
	if (info1 == "" || info2 == "") {
		return true;
	} else {
		return false;
	}
}
