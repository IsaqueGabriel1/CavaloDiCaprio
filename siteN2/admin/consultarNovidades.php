<?php
if($titulo){	
	$sql = "
		select id, titulo, conteudo from novidades
		where titulo like ('%".$db->real_escape_string($titulo)."%')
	";
	if($result=$db->query($sql)){
        $res=[];
		while($linha=$result->fetch_array()){$res[]=$linha;}
        if(count($res)==0){
            echo "Consulta não retornou resultado!";
        }else{
		foreach($res as $memo){
            echo "<div id='consultaPedido'>
                    Id Novidade:{$memo[0]}<br>
					Titulo:{$memo[1]}<br>
					Novidade:{$memo[2]}
					<div id='funcoes'>
                        <a href='javascript:excluirNovidade({$memo[0]})'>Excluir</a> - 
                        <a href='javascript:carregarNovidade({$memo[0]})'>Alterar</a>
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