<?php
//Importar conexión con BD
require_once "dbconnect.php";
$conn = mysqli_connect(
    $host,
    $user,
    $pass,
    $db
);

// Inicio de sesión para manejar datos de usuario
session_start();

if (!$conn) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Verificar si se envió el formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = htmlspecialchars($_POST['username']);
    $contrasena = htmlspecialchars($_POST['password']);
    $recordar = isset($_POST['remember']);// Verificar si se seleccionó "Recordar"
    
    if ($recordar) {
        setcookie("username", $usuario, time() + 86400 * 90, "/"); // Cookie valida por 90 dias
    }

    // Consultar credenciales del usuario
    $sql = $conn->prepare("SELECT * FROM usuarios WHERE user_name = ?");
    $sql->bind_param("s", $usuario);
    $sql->execute();
    $resultado = $sql->get_result();


    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();

        // Verificar contraseña

        if ($fila['contrasena'] === $contrasena) {
            // Almacenamiento de datos en sesión
            $_SESSION['username'] = $fila['user_name'];

            
            // Redirección al welcome page
            header("Location: welcome.php");
            exit();
        } else {
            // Contraseña incorrecta
            $_SESSION['error'] = "Contraseña incorrecta.";
            header("Location: index.php");
            exit();
        }
    } else {
        // Usuario no encontrado
        $_SESSION['error'] = "Usuario no encontrado.";
        header("Location: index.php");
        exit();
    }

   
}
$sql->close();
$conn->close();
?>