<?php
include('conexao.php');

if (isset($_POST['login'])) {

    $email = $_POST['email'];
    $senhaDigitada = $_POST['senha'];

    $consulta = $conexao->query("SELECT * FROM usuario WHERE email = '$email'");

    if ($consulta->num_rows > 0) {

        $usuario = $consulta->fetch_assoc();
        $senhaHash = $usuario['senha'];

        if (password_verify($senhaDigitada, $senhaHash)) {
            header("Location: /StudyPack/StudyPack/Front/HTML/index.html");
            exit();
        } else {
            echo "<h3>Senha incorreta!</h3>";
            exit();
        }

    } else {
        echo "<h3>Email não encontrado!</h3>";
        exit();
    }
}
?>