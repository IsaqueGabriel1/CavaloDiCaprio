<?php
extract($_POST,EXTR_OVERWRITE);
if(!isset($item)){$item='';}
$db = new mysqli('127.0.0.1','teste','1234','test');
if (mysqli_connect_error()) {
	die('Erro de conexão (' . $db->connect_errno . ') '. $db->connect_error);
}
switch($item){
	case "Produto":
        include "produto.php";
    break;
    case "Pedido":
        include "pedidos.php";
    break;
    case "ValEmail":
        include "validarEmail.php";
    break;
    case "Sobre":
        include "sobre.php";
    break;
    case "Fornecedor":
        include "fornecedores.php";
    break;
    case "Contatos":
        include "contato.php";
    break;
    case "Contatos":
        include "contato.php";
    break;
    case "Menu":
        include "menu.php";
    break;
    case "incluiPedido":
        include "incluiPedido.php";
    break;
    case "Novidades":
        include "Novidades.php";
    break;
    default:
        echo "Erro";
    break;
}
?>