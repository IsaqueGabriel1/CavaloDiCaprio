<div id="containerNovidades">
<?php
    $sql = "select titulo, conteudo from novidades";
    if($result=$db->query($sql)){
        $res=[];
        while($linha=$result->fetch_array()){$res[]=$linha;}
        if(count($res)==0){
            echo "<h1>No momento estamos sem novidades!</h1>";
        }else{
        echo "<h1 id='h1Novidades'>Novidades</h1>";
		foreach($res as $memo){
            echo "<div id='novidades'>";
            echo    "<h1>{$memo[0]}</h1><br>";
            echo    "<p>{$memo[1]}</p>";
            echo    "<hr>";
            echo "</div>";
            echo "<br>";
        }
	}
	}
	else{
		echo "<h1>No momento estamos sem novidades!</h1>";
	}
?>
</div>
