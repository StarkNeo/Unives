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
    <style>
        h1,h2,
        p {
            margin: auto;
            width: 50%;
            font-family: sans-serif;
        }

        table {
            width: 50%;
            border-collapse: collapse;
            margin: auto;
            font-size: 18px;
            text-align: left;
            background-color: white;
        }

        th,
        td {
            padding: 12px;
            border: 1px solid #dddddd;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        tr:hover {
            background-color: #f1f1f1;
        }

        #profile {
            margin: auto;
            width: 50%;
            display: flex;
            justify-content: space-around;
        }

        #profile img {
            width: 150px;
            height: 150px;
        }
    </style>

    <?php
    //Importamos la conexion con la base de datos
    require_once 'login.php';

    //Obtener datos del archivo, validar y almacenar
    function obtenerImagen($imagen, $id): string
    {
        // Obtiene los datos del archivo subido
        if ($imagen['error'] === 0) {
            foreach ($imagen as $key => $value) {
                echo "<tr> <td> " . htmlspecialchars($key) . "</td>" . "<td>" . preventInjection($value) . "</td> </tr>";
            }
            $origen_archivo = $imagen["tmp_name"];
            $nombre_archivo = "$id.jpg";
            $destino = "imagenes/$nombre_archivo";
            move_uploaded_file($origen_archivo, $destino);
            echo "<tr> <td>Archivo grabado con exito</td><td>$nombre_archivo</td></tr>";
            echo "<div id='profile'><p>Foto del perfil</p><img src='$destino' alt='profile' id=''></div>";


        } else {
            // Muestra un mensaje de error si hubo un problema al subir el archivo
            echo "<tr><td>Ocurrio un error al cargar el archivo.</td></tr>";
        }

        return 0;
    }

    //sanitizar valores para evitar inyecciones de codigo malicioso
    function preventInjection($datos)
    {
        $datos = trim($datos);//Elimina espacios antes y despues de los datos
        $datos = stripslashes($datos);//Elimina backslashes
        $datos = strip_tags($datos);//Elimina etiquetas HTML
        $datos = htmlspecialchars($datos);//Traduce caracteres especiales a HTML
        return $datos;
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['imagen'])) {

        //Validar todos los campos del formulario fueron llenados
        $formInvalido = false;
        $estado_civil = empty($_POST["estado_civil"]);
        $aficion1 = empty($_POST["aficion1"]);
        $aficion2 = empty($_POST["aficion2"]);
        $aficion3 = empty($_POST["aficion3"]);
        if ($estado_civil || ($aficion1 && $aficion2 && $aficion3)) {
            $formInvalido = true;
        } else if ($_FILES['imagen']['size'] === 0) {
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
            obtenerImagen($_FILES['imagen'], $_POST["telefono"]);
            echo "</table>";

            $conn = mysqli_connect($host,$user,$pass,$db);

            $nombre = htmlspecialchars($_POST["nombre"]);
            $direccion = htmlspecialchars($_POST["direccion"]);
            $correo =  htmlspecialchars($_POST["email"]);
            $telefono = htmlspecialchars($_POST["telefono"]);
            $edo_civil = htmlspecialchars($_POST["estado_civil"]);
            $aficion1 = htmlspecialchars(!empty($_POST["aficion1"]))? 1:0;
            $aficion2 = htmlspecialchars(!empty($_POST["aficion2"]))? 1:0;
            $aficion3 = htmlspecialchars(!empty($_POST["aficion3"]))? 1:0;
            $estado =  htmlspecialchars($_POST["estado"]);
            $sql = "INSERT INTO usuarios VALUES(NULL, '$nombre', '$direccion', '$correo', '$telefono', '$edo_civil', $aficion1, $aficion2, $aficion3, '$estado')";
            if($conn->query($sql) === TRUE){
                logMessage("Se ha creado un registro en la base de datos: ".$sql,$logfile);
                echo "<h2>Se ha creado un registro en la base de datos</h2> <br>";
            } else{
                logMessage("Error al crear el registro: ".$sql." ".$conn->error, $logfile);
                
            }
            $conn->close();

        } else {
            echo "<h1>Error al recibir el formulario, verifique que todos los campos hayan sido llenados correctamente</h1>";
        }


    }
    ?>

</body>

</html>