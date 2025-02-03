<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    
    function mayorQue($numero1, $numero2){
        if ($numero1>$numero2){
            echo "El  numero ".$numero1." es mayor que ".$numero2;
        }
        else{
            print("El numero ".$numero1." es menor que ".$numero2);
        }

    }
    mayorQue(8,15);
   
    ?>
</body>
</html>