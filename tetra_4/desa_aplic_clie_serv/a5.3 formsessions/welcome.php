<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>

<body>
    
    <?php
    require_once "dbconnect.php";
    $conn = mysqli_connect(
        $host,
        $user,
        $pass,
        $db
    );

    session_start();

    if (!isset($_SESSION['username'])) {
        header("Location: index.php");
        exit();
    }
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    $sql = $conn->prepare("SELECT ultimo_acceso FROM usuarios WHERE user_name = ?");
    $sql->bind_param("s", $_SESSION['username']);
    $sql->execute();
    $resultado = $sql->get_result();

    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();
        $ultimo_acceso = $fila['ultimo_acceso'];
    } else {
        $ultimo_acceso = "No disponible";
    }
    $sql->close();
    

    // Actualizar el último acceso
    $sql_update = $conn->prepare("UPDATE usuarios SET ultimo_acceso = NOW() WHERE user_name = ?");
    $sql_update->bind_param("s", $_SESSION['username']);
    $sql_update->execute();
    $sql_update->close();

    $conn->close();
    ?>
  
    <div class="welcome-container">        
        <h1>¡Bienvenido, <?php echo $_SESSION['username']; ?>!</h1>
        <p>Último acceso: <?php echo $ultimo_acceso; ?></p>
        <p>Tu autenticación fue exitosa. Ahora puedes explorar el contenido exclusivo y las funciones.</p>
        <a href="profile.php">Ir a Mi Perfil</a>
        <a href="logout.php">Cerrar Sesión</a>
    </div>
    
</body>

</html>