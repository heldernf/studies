<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
        $res = abs(-2000);
        echo "<p>$res</p>";
        
        $res = base_convert(254, 10, 2);
        echo "<p>$res</p>";

        $res = intdiv(5, 2);
        echo "<p>$res</p>";

        $res = min(5, 2, 0, 9, 7, 1);
        echo "<p>$res</p>";
        $res = max(5, 2, 0, 9, 7, 1);
        echo "<p>$res</p>";
        
        $res = pi();
        echo "<p>$res</p>";
        $res = M_PI;
        echo "<p>$res</p>";

        $res = pow(5, 2);
        echo "<p>$res</p>";
        $res = 5 ** 2;
        echo "<p>$res</p>";

        $res = sqrt(9);
        echo "<p>$res</p>";
        $res = 9 ** (1/2);
        echo "<p>$res</p>";
        $res = 8 ** (1/3);
        echo "<p>$res</p>";
    ?>
</body>

</html>