<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $msg = $_POST["mensagem"];

        echo "<p>Nome: $nome<br>Email: $email<br>Mensagem: $msg</p>";
    ?>
    <a href="index.html">VOLTAR</a>
</body>

</html>