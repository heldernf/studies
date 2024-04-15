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

        div#container {
            background-color: #ffffff;
            width: 40%;
            border-radius: .3rem;
            margin-top: 3rem;
            border: .15rem solid #1eff1e;
        }

        div#container h1 {
            font-size: 1.35rem;
            text-align: center;
            margin-top: 1.5rem;
            padding: 0 1rem;
        }

        div#container p {
            width: 85%;
            margin: 2rem auto 0 auto;
            font-size: .95rem;
            color: #000;
            text-align: center;
        }

        span {
            font-weight: 700;
        }

        p#erro {
            color: #d41002;
        }

        div#container a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 55%;
            height: 2.6rem;
            border: none;
            text-decoration: none;
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
    <div id="container">
        <h1>RESULTADO:</h1>

        <p>            
        <?php
            if (is_numeric($_GET["numero"])) {
                $numero = $_GET["numero"];
                $numeroArray = explode(".", $numero);
                $numeroFormatadoPTBR = number_format($numero, strlen($numeroArray[1]), ",", ".");
                $int = number_format($numeroArray[0], 0, ",", ".");
                $float = $numeroArray[1];
                echo "<span>NÚMERO ANALISADO: " . $numeroFormatadoPTBR . "</span><br><br>PARTE INTEIRA: " . $int . "<br>PARTE DECIMAL: " . $float;
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