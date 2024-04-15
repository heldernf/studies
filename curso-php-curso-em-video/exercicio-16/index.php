<?php
    $dividendo = $_GET["dividendo"] ?? 0;
    $divisor = $_GET["divisor"] ?? 0;
    if (!is_numeric($dividendo) || !is_numeric($divisor)) {
        header("location: index.php");
        exit();
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
            height: 36rem;
            background-color: #149;
            border-radius: .4rem;
            padding: 3rem;
            display: flex;
            flex-direction: column;
            gap: 2.5rem 0;
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
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            justify-items: center;
            min-width: 60vw;
            height: 13rem;
            background-color: #149;
            border-radius: .4rem;
            padding: 2rem;
        }

        div#resposta p {
            display: flex;
            align-items: center;
            width: max-content;
            font-size: 2.8rem;
            font-weight: 600;
            color: #fff;
            padding: 0 2rem;
        }

        div#resposta p:nth-child(2) {
            width: 100%;
            position: relative;
        }

        div#resposta p:nth-child(2)::before {
            content: '';
            width: 100%;
            height: 100%;
            border-left: .3rem solid white;
            border-bottom: .3rem solid white;
            position: absolute;
            top: 0;
            left: -.1rem;
        }

        div#resposta p:nth-child(4) {
            width: 100%;
        }
    </style>
</head>

<body>
    <form action="<?php echo $_SERVER["PHP_SELF"] ?>" method="get">
        <div>
            <label for="dividendo">DIVIDENDO</label>
            <input type="number" step="any" name="dividendo" id="dividendo" required>
        </div>
        <div>
            <label for="divisor">DIVISOR</label>
            <input type="number" step="any" name="divisor" id="divisor" required>
        </div>
        <button type="submit">ENVIAR</button>
    </form>
    <div id="resposta">
        <?php
        if ($divisor != 0) {
            echo "<p>$dividendo</p>";
            echo "<p>$divisor</p>";
            echo "<p>" . $dividendo % $divisor . "</p>";
            echo "<p>" . intdiv($dividendo, $divisor) . "</p>";
        }
        ?>
    </div>
</body>

</html>