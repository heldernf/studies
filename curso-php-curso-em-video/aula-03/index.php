<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Exemplo PHP</h1>
    <?php
        date_default_timezone_set("America/Sao_Paulo");
        echo "Hojé é dia " . date("d/M/Y");
        echo " e a hora atual é " . date("G:i:s T");
    ?>
</body>

</html>