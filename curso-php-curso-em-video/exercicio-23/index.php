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
    <form action="" method="get">
        <h1>CALCULE O TEMPO</h1>

        <div>
            <label for="segundos">SEGUNDOS</label>
            <input type="number" step="1" name="segundos" id="segundos" value="<?=$_GET["segundos"] ?? 0?>" required>
        </div>

        <button type="submit">ENVIAR</button>
    </form>

    <div id="resposta">
        <p>
        </p>
    </div>
</body>

</html>