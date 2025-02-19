<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">

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
    //Revisar peticion mediante metodo POST
    if ($_SERVER["REQUEST_METHOD"] == 'POST') {
        //Si hay campos vacios mostrar mensaje de error
        if (empty($_POST['peso']) || empty($_POST['estatura'])) {
            echo "Formulario incompleto";

        } 
        //Si contiene datos sanitizar, calcular y desplegar resultado
        else {
            $peso = preventInjection($_POST["peso"]);
            $estatura = preventInjection($_POST["estatura"]);
            $masa = $peso / $estatura**2;
            echo "<h1>Tu indice de masa corporal</h1>";
            echo "<input type='text' name='masa' id='masa' value=$masa dis
    abled > ";
            switch ($masa) {
                case $masa < 18.5:
                    echo "Bajo peso";
                    break;
                case $masa < 24.9:
                    echo "Normal";
                    break;
                case $masa < 29.9:
                    echo "Sobrepeso";
                    break;
                case $masa >= 30:
                    echo "Obesidad";
                    break;
                default:
                    echo "Hiperpeso";
                    break;
            }
            $table = "
            <table>
        <thead>
            <th>IMC</th>
            <th>Nivel de peso</th>
        </thead>
        <tbody>
            <tr>
                <td>Por debajo de 18.5</td>
                <td>Bajo peso</td>
            </tr>
            <tr>
                <td>18.5 - 24.9</td>
                <td>Normal</td>
            </tr>
            <tr>
                <td>25.0 - 29.9</td>
                <td>Sobrepeso</td>
            </tr>
            <tr>
                <td>30.0 o mas</td>
                <td>Obesidad</td>
            </tr>
        </tbody>
    </table>
            
            ";
            echo $table;

        }

    }

    ?>
</body>

</html>