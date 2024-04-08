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
            font-size: .9rem;
            color: #000;
            width: 85%;
            margin: 2rem auto 0 auto;
            text-align: center;
        }

        div#container a {
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
            user-select: none;
        }
    </style>
</head>

<body>
    <div id="container">
        <h1>GERE SEU NÚMERO ALEATÓRIO:</h1>

        <p>
            <?php
                $min = 0;
                $max = 69;
                echo "Números aleatorios entre $min e $max<br>O número aleatório gerado foi: " . mt_rand($min, $max);
            ?>
        </p>

        <a onclick="javascript:document.location.reload()">GERAR</a>
    </div>
</body>

</html>