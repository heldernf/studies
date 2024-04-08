<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
        // 0x = hexadecial | 0b = binário | 0 = Octal
        $num = 010;
        echo "<p>O valor da variáel é $num</p>";

        $v = "Gustavo";
        var_dump($v);

        $num = (integer) 3e2; // 3 x 10(2) COERÇÃO
        echo "<p>O valor é $num</p>";
        var_dump($num);

        $num = (float) "950";
        var_dump($num);

        $casado = true;
        var_dump($casado);
        
        print "<p>O valor para casado é $casado</p>";

        if ($casado == 1) {
            $casado = "true";
        } else {
            $casado = "false";
        }

        print "<p>O valor para casado é $casado</p>";

        $vet = [1, 2.5, "Helder", false,];
        var_dump($vet);
    
        class Pessoa {
            private string $nome;
        }

        $p = new Pessoa;
        var_dump($p)
    ?>
</body>

</html>