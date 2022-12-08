<?php
session_start();
extract($_POST,EXTR_OVERWRITE);
if(!isset($item)){$item='';}	
if(!isset($_SESSION['usuario']) && $item!='autenticar'){
	echo "<script language='javascript'>document.location.href='';</script>";
}else{
	$db = new mysqli('127.0.0.1','teste','1234','test');
	if (mysqli_connect_error()) {
		die('Erro de conexão (' . $db->connect_errno . ') '. $db->connect_error);
	}
	switch($item){
		case 'autenticar':
			include "autenticar.php";
		break;	
		case 'sair':
			include "sair.php";
		break;
		case 'frmConsultaPedidos':
			include "frmConsultaPedidos.php";
		break;
		case 'consultarPedidos':
			include "consultarPedido.php";
		break;
		case 'consultarNovidades':
			include "consultarNovidades.php";
		break;
		case 'frmConsultarNovidade':
			include "frmConsultarNovidade.php";
		break;
		default:
		case 'excluirPedido':
			include "excluirPedido.php";
		break;
		case 'carregarPedido':
			include "carregarPedido.php";
		break;
		case 'alterarPedido':
			include "alterarPedido.php";
		break;
		case 'frmNovaNovidade':
			include "frmNovaNovidade.php";
		break;
		case 'incluiNovidade':
			include "incluiNovidade.php";
		break;
		case 'excluirNovidade':
			include "excluirNovidade.php";
		break;
		case 'carregarNovidade':
			include "carregarNovidade.php";
		break;
		case 'alterarNovidade':
			include "alterarNovidade.php";
		break;
		break;
	}
}
?>
