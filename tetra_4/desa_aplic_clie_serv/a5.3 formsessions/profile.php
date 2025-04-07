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
<h1>Este es mi perfil</h1>
<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //Validar todos los campos del formulario fueron llenados
    $formInvalido = false;
    
    foreach ($_POST as $key => $value) {
        if (empty($value)) {
            $formInvalido = true;
            break;
        }
    }
    $nombre = $_POST["usuario"];


    //Si el formulario fue correctamente enviado despliega los campos con sus valores
    if (!$formInvalido) {
        echo "<h1>Bienvenido: $nombre</h1>";
        echo "<table>
        <thead> 
        <th>Ultima visita</th> 
        <th>Hora</th>
        </thead>
        <tr><td>04/06/2025</td><td>4:24pm</td></tr>
        
        </table>";


    } else {
        echo "<h1>Error al recibir el formulario, verifique que todos los campos hayan sido llenados correctamente</h1>";
    }

}


?>

</body>

</html>