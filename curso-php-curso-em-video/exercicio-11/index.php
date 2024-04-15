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

        form {
            background-color: #ffffff;
            width: 40%;
            border-radius: .3rem;
            margin-top: 3rem;
            border: .15rem solid #1eff1e;
        }

        form h1 {
            font-size: 1.35rem;
            text-align: center;
            margin-top: 1.5rem;
            padding: 0 1rem;
        }

        form div {
            background-color: #efffed;
            border: .1rem solid #1eff1e;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 80%;
            height: 3.4rem;
            margin: 1.8rem auto 0 auto;
            border-radius: .3rem;
            padding: .7rem;
        }

        form div label,
        form div input {
            display: block;
            width: 100%;
            background-color: transparent;
            color: #000000;
            font-weight: 600;
            border: none;
        }

        form div label {
            font-size: .75rem;
        }

        form button {
            display: block;
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
    <?php
        $valor1 = $_GET["numero1"] ?? 0;
        $valor2 = $_GET["numero2"] ?? 0;
    ?>

    <form action="<?php echo $_SERVER["PHP_SELF"] ?>" method="get">
        <h1>FAÇA SUA SOMA:</h1>

        <div>
            <label for="numero1">NÚMERO</label>
            <input type="number" name="numero1" id="numero1" value="<?php echo $valor1 ?>" required>
        </div>
        <div>
            <label for="numero2">NÚMERO</label>
            <input type="number" name="numero2" id="numero2" value="<?php echo $valor2 ?>" required>
        </div>

        <button type="submit">ENVIAR</button>
    </form>

    <div>
        <h2>RESULTADO:</h2>
        <p><?php echo $valor1 + $valor2 ?></p>
    </div>
</body>


</html>