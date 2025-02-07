<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="container">
        <h1>Cargar y Procesar Archivos de Texto</h1>
        <form method="POST" action="recepcion.php" enctype="multipart/form-data">
            <label for="file-upload">Seleccionar archivo:</label>
            <input type="file" name="archivo" id="file-upload">
            <input type="submit" value="Cargar">
        </form>

        <div class="output">
            <?php
            // Verifica si la solicitud es POST y si se ha subido un archivo
            if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['archivo'])) {
                // Obtiene los datos del archivo subido
                $fileName = $_FILES['archivo']['name'];
                $fileTmpName = $_FILES['archivo']['tmp_name'];
                $fileSize = $_FILES['archivo']['size'];
                $fileError = $_FILES['archivo']['error'];
                $fileType = $_FILES['archivo']['type'];
                //Ruta que puede ser modificada de acuerdo al equipo o servidor donde se ejecute
                $path = "C:/xampp/htdocs/unives/practica_ficherosAct2.3/";

                // Verifica si no hay errores al subir el archivo
                if ($fileError === 0) {
                    $fileContent = file_get_contents($fileTmpName);
                    // Muestra información del archivo
                    echo "<h3>Archivo</h3>";
                    echo "<p><strong>Nombre:</strong> " . htmlspecialchars($fileName) . "</p>";
                    echo "<p><strong>Ruta:</strong> " . htmlspecialchars($path . $fileName) . "</p>";
                    echo "<p><strong>Tamaño:</strong> " . $fileSize . " bytes</p>";
                    echo "<p><strong>Tipo:</strong> " . $fileType . "</p>";
                    echo "<p><strong>Contenido:</strong></p><pre>" . htmlspecialchars($fileContent) . "</pre>";
                } else {
                    // Muestra un mensaje de error si hubo un problema al subir el archivo
                    echo "<p>There was an error uploading the file.</p>";
                }
                // Genera una tabla para mostrar el contenido del archivo línea por línea
                echo "<table>
                    <thead>
                        <tr>
                            <th>Indice</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>";

                //Abre el archivo para lectura
                $file = fopen($path . $fileName, "r");
                $index = 0;
                $numeros = [];

                // Verifica si el archivo se abrió correctamente
                if ($file) {

                    // Lee el archivo línea por línea
                    while (($line = fgets($file)) !== false) {
                        echo "<tr>
                            <td>$index</td>
                            <td>" . htmlspecialchars($line) . "</td>
                        </tr>";
                        // Almacena cada línea en el array $numeros
                        array_push($numeros, $line);
                        $index++;
                    }
                    // Cierra el archivo
                    fclose($file);
                } else {
                    // Muestra un mensaje de error si no se pudo abrir el archivo
                    echo "Unable to open a file.";
                }
                echo "</tbody></table>";

                // Inicializa la variable para el número mayor
                $mayor = 0;
                // Encuentra el número mayor en el array $numeros
                for ($i = 0; $i < count($numeros); $i++) {
                    if ($numeros[$i] > $mayor) {
                        $mayor = $numeros[$i];
                    }
                }
                echo "<p><strong>Elemento Mayor:</strong> $mayor</p>";

                // Inicializa la variable para el número menor
                $menor = $mayor;
                // Encuentra el número menor en el array $numeros
                for ($i = 0; $i < count($numeros); $i++) {
                    if ($numeros[$i] < $menor) {
                        $menor = $numeros[$i];
                    }
                }
                echo "<p><strong>Elemento Menor:</strong> $menor</p>";

                // Calcula la suma de los números en el array $numeros
                $suma = 0;
                for ($i = 0; $i < count($numeros); $i++) {
                    $suma += $numeros[$i];
                }
                echo "<p><strong>Promedio:</strong> " . $suma / count($numeros) . "</p>";
            } else {
                // Muestra un mensaje si no se subió ningún archivo
                echo "<p>No file was uploaded.</p>";
            }


            ?>
        </div>
    </div>
</body>

</html>