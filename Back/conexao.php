<?php
    $servidor="localhost";
    $usuario="root";
    $senha= "";
    $bdprincipal= "studypack";

    $conexao = mysqli_connect($servidor, $usuario, $senha, $bdprincipal);
    if(!$conexao){
        die("Deu probrema patrão, se liga ai-->" . mysqli_connect_error());
    } 
?>