<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
<?php
    $a=3;
    $b="7";
    $c="El numero de la suerte es: ";
    echo '<b><h1>';//Hacer que el contenido se muestre en negrita y tamaño grande
    echo ($a);//Mostrar el valor de 5
    echo "<br>";//Salto de linea
    echo ($b);//Mostrar el valor de 7
    echo "</b><h1>";
    echo ($a**$b);//Elevacion de "a" a la potencia "b"
    echo "<br>";
    echo ($c.$a."<br>");//Union de cadenas de caracteres
    echo("La variable a es de tipo: ".gettype($a)."<br>");
    settype($a,"string");
    echo("Ahora la variable a es de tipo: ".gettype($a));
    echo("Aqui tenemos el valor de la variable \$a");
    
?>       
</body>
</html>

