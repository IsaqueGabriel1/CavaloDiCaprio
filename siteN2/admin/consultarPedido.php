<?php
if($email){	
	$sql = "
		select idPedido, email, pedido from pedido
		where email like ('%".$db->real_escape_string($email)."%')
	";
	if($result=$db->query($sql)){
        $res=[];
		while($linha=$result->fetch_array()){$res[]=$linha;}
        if(count($res)==0){
            echo "Consulta não retornou resultado!";
        }else{
		foreach($res as $memo){
            echo "<div id='consultaPedido'>
                    Numero Pedido:{$memo[0]}<br>
					Pedido:{$memo[2]}<br>
					Email:{$memo[1]}
					<div id='funcoes'>
                        <a href='javascript:excluirPedido({$memo[0]})'>Excluir</a> - 
                        <a href='javascript:carregarPedido({$memo[0]})'>Alterar</a>
                    </div>
					";
            echo "</div>";
		}
        }
	}
	else{
		echo "Erro na consulta";
	}
}
?>