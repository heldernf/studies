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
    <?php
    $anoAtual = date("Y");
    $input1 = $_GET["input1"] ?? 2000;
    $input2 = $_GET["input2"] ?? $anoAtual;
    if (!is_numeric($input1) || !is_numeric($input2)) {
        header("location: index.php");
    }
    ?>

    <form action="<?= $_SERVER["PHP_SELF"] ?>" method="get">
        <h1>Calcule a sua idade</h1>

        <div>
            <label for="input1">Ano que você nasceu:</label>
            <input type="number" step="any" name="input1" id="input1" value="<?= $input1 ?>" required>
        </div>
        <div>
            <label for="input2">Quer saber sua idade em que ano? (Ano atual: <?= $anoAtual ?>)</label>
            <input type="number" step="any" name="input2" id="input2" value="<?= $input2 ?>" required>
        </div>

        <button type="submit">ENVIAR</button>
    </form>

    <div id="resposta">
        <?php
        $idade = $input2 - $input1;

        if ($input1 > $input2) {
            echo "<p style=\"color: red;\">O Ano de nascimento não pode ser maior do que o ano que você quer saber a idade!</p>";
        } else {
            $idade <= 1 ? $resposta = "$idade ano" : $resposta = "$idade anos";
            echo "<p>Quem nasceu em $input1, terá $resposta em $input2</p>";
        }
        ?>
    </div>
</body>

</html>