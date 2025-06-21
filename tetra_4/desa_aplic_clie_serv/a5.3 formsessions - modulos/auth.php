<?php
// Inicio de sesión para manejar datos de usuario
session_start();
/*
// Conexión a la base de datos
$host = "localhost";
$username = "root";
$password = "";
$database = "mi_base_datos";

$conn = new mysqli($host, $username, $password, $database);
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
*/
// Verificar si se envió el formulario
$user = "jesus";
$pass = "123";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = htmlspecialchars($_POST['username']);
    $contraseña = htmlspecialchars($_POST['password']);
    if ($contraseña === $pass && $usuario === $user) {
         // Almacenamiento de datos en sesión
         $_SESSION['username'] = $usuario;
         $_SESSION['role'] = 'usuario'; // Ejemplo: rol de usuario
          // Redirección a Welcome
          header("Location: welcome.php");
          exit();
    } else {
        // Contraseña incorrecta
        $_SESSION['error'] = "Contraseña incorrecta.";
        header("Location: index.php");
        exit();
    }
    

    // Consultar credenciales del usuario
    /*
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE username = ?");
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $resultado = $stmt->get_result();
    */

    /*
    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();

        // Verificar contraseña (suponiendo que está hasheada)
        if (password_verify($contraseña, $fila['password'])) {
            // Almacenamiento de datos en sesión
            $_SESSION['username'] = $fila['username'];
            $_SESSION['role'] = $fila['role']; // Ejemplo: rol de usuario

            // Redirección al dashboard
            header("Location: dashboard.php");
            exit();
        } else {
            // Contraseña incorrecta
            $_SESSION['error'] = "Contraseña incorrecta.";
            header("Location: login.php");
            exit();
        }
    } else {
        // Usuario no encontrado
        $_SESSION['error'] = "Usuario no encontrado.";
        header("Location: login.php");
        exit();
    }
*/
   // $stmt->close();
}
//$conn->close();
?>