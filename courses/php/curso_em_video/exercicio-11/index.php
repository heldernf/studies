<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        *:focus-visible {
            outline: #663399;
        }

        body {
            background-color: #3b4b3d;
        }

        div {
            background-color: #ffffff;
            width: 40%;
            border-radius: .3rem;
            margin-top: 3rem;
            border: .15rem solid #1eff1e;
        }

        h1 {
            font-size: 1.35rem;
            text-align: center;
            margin-top: 1.5rem;
            padding: 0 1rem;
        }

        p {
            margin-top: 1.5rem;
            font-size: 1rem;
            text-align: center;
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            width: 55%;
            height: 2.6rem;
            border: none;
            border-radius: .2rem;
            margin: 2rem auto 1rem auto;
            background-color: #efffed;
            border: .1rem solid #1eff1e;
            color: #000000;
            font-weight: 700;
            font-size: .8rem;
            letter-spacing: .15rem;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div>
        <h1>REAL PARA DÓLAR</h1>

        <p>
            <?php
                $real = $_GET["numero"] ?? "";
                if (is_numeric($real)) {
                    $cotacao = 5.07;
                    $dolar = $real / $cotacao;
                    $padrao = numfmt_create("pr_BR", NumberFormatter::CURRENCY);
                    echo numfmt_format_currency($padrao, $real, "BRL") . " equivale a " . numfmt_format_currency($padrao, $dolar, "USD");
                } else {
                    header("location: index.html");
                    exit();
                }
            ?>
        </p>

        <a href="index.html">VOLTAR</a>
    </div>
</body>

</html>