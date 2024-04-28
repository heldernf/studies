<?php
    $valor1 = $_GET["valor1"] ?? 0;
    $peso1 = $_GET["peso1"] ?? 0;
    $valor2 = $_GET["valor2"] ?? 0;
    $peso2 = $_GET["peso2"] ?? 0;

    if (! is_numeric($valor1) || ! is_numeric($peso1) || ! is_numeric($valor2) || ! is_numeric($peso2)) {
        header("location: index.php");
    }

    $mediaSimples = ($valor1 + $valor2) / 2;
    if ($peso1 != 0 || $peso2 != 0) {
        $mediaPonderada = ($valor1 * $peso1 + $valor2 * $peso2) / ($peso1 + $peso2);
    }
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Courier New', Courier, monospace;
        }

        html,
        body {
            width: 100%;
            height: 100%;
        }

        html {
            font-size: 62.5%;
        }

        body {
            background-color: #146;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 3rem 0;
        }

        form {
            width: 60vw;
            min-height: 36rem;
            background-color: #149;
            border-radius: .4rem;
            padding: 3rem;
            display: flex;
            flex-direction: column;
            gap: 2.5rem 0;
        }

        form h1 {
            color: #fff;
        }

        form div {
            background-color: #455;
            border-radius: .4rem;
            padding: .8rem;
        }

        form div label {
            display: block;
            font-size: 1.5rem;
            color: #fff;
            cursor: pointer;
        }

        form div input {
            display: block;
            width: 100%;
            background-color: transparent;
            border: none;
            outline: none;
            color: #fff;
            padding: .6rem 0 0 0;
        }

        form button {
            width: 80%;
            border: none;
            border-radius: .4rem;
            margin: auto auto 0 auto;
            padding: 1rem 0;
            font-size: 1.8rem;
            font-weight: 600;
            letter-spacing: .6rem;
            background: green;
            color: #fff;
        }

        div#resposta {
            min-width: 60vw;
            max-width: 95vw;
            background-color: #149;
            border-radius: .4rem;
            padding: 2rem;
        }

        div#resposta p {
            font-size: 2.8rem;
            font-weight: 600;
            color: #fff;
            width: 100%;
        }

        form button {
            cursor: pointer;
        }
    </style>
</head>

<body>
    <form action="<?= $_SERVER["PHP_SELF"] ?>" method="get">
        <h1>Médias Aritméticas</h1>
        <div>
            <label for="valor1">1º VALOR</label>
            <input type="number" step="any" name="valor1" id="valor1" value="<?= $valor1 ?>" required>
        </div>
        <div>
            <label for="peso1">1º PESO</label>
            <input type="number" step="any" name="peso1" id="peso1" value="<?= $peso1 ?>" required>
        </div>
        <div>
            <label for="valor2">2º VALOR</label>
            <input type="number" step="any" name="valor2" id="valor2" value="<?= $valor2 ?>" required>
        </div>
        <div>
            <label for="peso2">2º PESO</label>
            <input type="number" step="any" name="peso2" id="peso2" value="<?= $peso2 ?>" required>
        </div>
        <button type="submit">ENVIAR</button>
    </form>
    <div id="resposta">
        <?php
            echo "<p>A Média Aritmética Simples é: " . number_format($mediaSimples, 2, ",", ".") . "</p>";
            echo "<p>A Média Aritmética Ponderada é: " . number_format($mediaPonderada, 2, ",", ".") . "</p>";
        ?>
    </div>
</body>

</html>