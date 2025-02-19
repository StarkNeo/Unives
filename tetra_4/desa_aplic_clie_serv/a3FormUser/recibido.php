<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='stylesheet' href='style.css'>
    <link rel="stylesheet" href="recibido.css">
    <title>Form recibido</title>
    
</head>

<body>

    <?php

    //sanitizar valores para evitar inyecciones de codigo malicioso
    function preventInjection($datos)
    {
        $datos = trim($datos);//Elimina espacios antes y despues de los datos
        $datos = stripslashes($datos);//Elimina backslashes
        $datos = strip_tags($datos);//Elimina etiquetas HTML
        $datos = htmlspecialchars($datos);//Traduce caracteres especiales a HTML
        return $datos;
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        //Validar todos los campos del formulario fueron llenados
        $formInvalido = false;
        $estado_civil= empty($_POST["estado_civil"]);
        $aficion1= empty($_POST["aficion1"]);
        $aficion2= empty($_POST["aficion2"]);
        $aficion3= empty($_POST["aficion3"]);
        if ($estado_civil || ($aficion1 && $aficion2 && $aficion3)) {
            $formInvalido = true;
        }
        
        foreach ($_POST as $key => $value) {
            if (empty($value)) {
                $formInvalido = true;
                break;
            }
        }



        //Si el formulario fue correctamente enviado despliega los campos con sus valores
        if (!$formInvalido) {
            echo "<h1>Hemos recibido su informacion pronto nos comunicaremos con usted</h1>";
            echo "<table>";
            echo "<thead> <th>Campo</th> <th>Valor</th></thead>";
            foreach ($_POST as $key => $value) {
                echo "<tr> <td> " . htmlspecialchars($key) . "</td>" . "<td>" . preventInjection($_POST[$key]) . "</td> </tr>";
            }
            echo "</table>";


        } else {
            echo "<h1>Error al recibir el formulario, verifique que todos los campos hayan sido llenados correctamente</h1>";
        }

    }


    ?>

</body>

</html>