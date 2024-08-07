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

        input[type="range"] {
            padding: 0;
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
    $valor = $_GET["valor"] ?? 0;
    if (!is_numeric($valor)) {
        header("location: index.php");
    }
    ?>
    <form action="<?= $_SERVER["PHP_SELF"] ?>" method="get">
        <h1>FAÇA UM SAQUE</h1>

        <div>
            <label for="valor">VALOR</label>
            <input type="number" step="5" name="valor" id="valor" value="<?= $_GET["valor"] ?? 0 ?>" required>
        </div>

        <button type="submit">ENVIAR</button>
    </form>

    <div id="resposta">
        <p>
            <?php
            $n100 = intdiv($valor, 100);
            $valor %= 100;

            $n50 = intdiv($valor, 50);
            $valor %= 50;

            $n10 = intdiv($valor, 10);
            $valor %= 10;

            $n5 = intdiv($valor, 5);

            echo "NOTA DE 100 = $n100<br>";
            echo "NOTA DE 50 = $n50<br>";
            echo "NOTA DE 10 = $n10<br>";
            echo "NOTA DE 5 = $n5";
            ?>
        </p>
    </div>
</body>

</html>