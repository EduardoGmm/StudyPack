<?php
include('conexao.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

   $nome = $_POST['nome'];
   $email = $_POST['email'];
   $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
   $telefone = $_POST['telefone'];
   $data_nasc = $_POST['data_nasc'];
   $genero = $_POST['sexo'];

   $sql = "INSERT INTO usuario (nome, email, senha, telefone, data_nasc, sexo)
            VALUES ('$nome', '$email', '$senha', '$telefone', '$data_nasc', '$genero')";

   if ($conexao->query($sql)) {
      header("Location: /StudyPack/StudyPack/Front/HTML/perfil.html");
   } else {
      echo "<span style='color:red;'>ERRO SQL: " . $conexao->error . "</span>";
   }

   exit();
}
?>