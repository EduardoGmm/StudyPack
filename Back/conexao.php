<?php
$host = "localhost";
$usuario = "root";
$senha = "";
$banconome = "studypack";

$conexao = mysqli_connect($host, $usuario, $senha, $banconome);

if (!$conexao) {
    die("Erro na conexão: " . mysqli_connect_error());
}
echo "Banco conectado com sucesso!";
?>