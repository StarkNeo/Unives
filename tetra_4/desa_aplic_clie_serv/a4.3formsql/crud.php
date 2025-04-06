<?php
require_once 'login.php';
$conn = mysqli_connect(
    $host,
    $user,
    $pass,
    $db
);


//Handle GET REQUESTS
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $formInvalido = false;
    $nombre = htmlspecialchars($_GET["nombre"]);
    $correo = htmlspecialchars($_GET["correo"]);

    // Insertar en base de datos
    $sql = "SELECT * FROM usuarios WHERE nombre = ? AND correo = ?";

    // Prepare the statement
    $stmt = $conn->prepare($sql);

    // Bind parameters
    $stmt->bind_param("ss", $nombre, $correo);

    // Execute the statement
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    // Fetch data
    while ($row = $result->fetch_assoc()) {
        $correo = htmlspecialchars($row["correo"]);
        $direccion = htmlspecialchars($row["direccion"]);
        $telefono = htmlspecialchars($row["telefono"]);
        $estado_civil = htmlspecialchars($row["estadoCivil"]);
        $estado = htmlspecialchars($row["estado"]);
        $objeto = [
            "correo" => $correo,
            "direccion" => $direccion,
            "telefono" => $telefono,
            "edocivil" => $estado_civil,
            "estado" => $estado
        ];
        echo json_encode($objeto);
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}

//HANDLE PUT REQUESTS

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formInvalido = false;

    foreach ($_POST as $key => $value) {
        if (empty($value)) {
            $formInvalido = true;
            break;
        }
    }

    if (!$formInvalido) {
        $nombre = htmlspecialchars($_POST["nombre"]);
        $correo = htmlspecialchars($_POST["correo"]);
        $newmail = htmlspecialchars($_POST["newmail"]);
        $newaddress = htmlspecialchars($_POST["newaddress"]);
        $newphone = htmlspecialchars($_POST["newphone"]);
        $newmarital = htmlspecialchars($_POST["newmarital"]);
        $newstate = htmlspecialchars($_POST["newstate"]);
        $conn = mysqli_connect($host, $user, $pass, $db);
        $objeto = [
            "correo" => $newmail,
            "direccion" => $newaddress,
            "telefono" => $newphone,
            "edocivil" => $newmarital,
            "estado" => $newstate
        ];
        $sql = "UPDATE usuarios 
        SET correo = '$newmail',
            direccion='$newaddress', 
            telefono = '$newphone', 
            estadoCivil = '$newmarital', 
            estado = '$newstate' 
        WHERE nombre = '$nombre' AND correo = '$correo'    
        ";

        if ($conn->query($sql) === TRUE) {
            logMessage("Se ha actualizado su informacion en la base de datos: " . $sql, $logfile);
            header("Content-Type: application/json");
            echo json_encode(["message" => "Registro actualizado exitosamente", "registro" => $objeto]);
        } else {
            logMessage("Error al crear el registro: " . $sql . " " . $conn->error, $logfile);
            header("Content-Type: application/json");
            echo json_encode(["message" => "Ocurrio un error de actualizacion"]);
        }
        $conn->close();
        //echo json_encode($objeto);
    } else {
        header("Content-Type: application/json");
        echo json_encode(["message" => "Error de peticion"]);
    }


}

//HANDLE DELETE REQUESTS

if ($_SERVER['REQUEST_METHOD'] === "DELETE") {
    $data = json_decode(file_get_contents("php://input"), true);
    $nombre = htmlspecialchars($data['nombre']);
    $correo = htmlspecialchars($data['correo']);
    $objeto = [
        "nombre" => $nombre,
        "correo" => $correo,
    ];
    $conn = mysqli_connect($host, $user, $pass, $db);
    $sql = "DELETE FROM usuarios WHERE nombre = '$nombre' AND correo = '$correo'";

    if ($conn->query($sql) === TRUE) {
        logMessage("Se ha borrado la informacion en la base de datos: " . $sql, $logfile);
        header("Content-Type: application/json");
        echo json_encode(["message" => "Registro borrado exitosamente", "registro"=>$objeto]);
    } else {
        logMessage("Error al borrar el registro: " . $sql . " " . $conn->error, $logfile);
        header("Content-Type: application/json");
        echo json_encode(["message" => "No se pudo borrar el registro"]);
    }
    $conn->close();
}


?>