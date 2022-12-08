
function abre(item, alvo){
    var ajax = new XMLHttpRequest();
    var params = "item="+item;
    ajax.open("POST", "controle.php", true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function()
	{
		if (ajax.readyState==4 && ajax.status==200)
		{
			document.getElementById("conteudo").innerHTML=ajax.responseText;
		}
	}
	ajax.send(params);
} 


function gravaPedido(){
	var ajax=new XMLHttpRequest();
	var objEmail=document.getElementById('txtEmail');
	var objPedido=document.getElementById('txtPedido');
	var params=`item=incluiPedido&txtEmail=${objEmail.value}&txtPedido=${objPedido.value}`
	
	if(objEmail.value.length==0 || objEmail.value.search("@")==-1){
	alert("Informe um email válido!!");
	objEmail.focus();
	return false;
}
	if(objPedido.value.length==0){
		alert("Informe o pedido!");
		objPedido.focus();
		return false;
	}
	ajax.open("POST","controle.php",false);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.onreadystatechange=function(){
		if (ajax.readyState==4 && ajax.status==200){
			if(ajax.responseText!='ok'){
				alert(ajax.responseText);
			}
			else{
				alert('Pedido Gravado Com Sucesso');
				document.getElementById('frmIncPedido').reset();
			}
		}
	}
	ajax.send(params);
}

