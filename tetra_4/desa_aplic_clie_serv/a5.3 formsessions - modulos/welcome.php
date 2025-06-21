<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="welcome.css">
</head>

<body>
    <!-- Floating decorative circles -->
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>

    <!-- Authenticated User Dashboard -->
    <div class="welcome-container">
        <h1>¡Bienvenido, Usuario!</h1>
        <p>Tu autenticación fue exitosa. Ahora puedes explorar el contenido exclusivo y las funciones.</p>
        <a href="profile.php">Ir a Mi Perfil</a>
        <a href="logout.php" style="margin-left: 10px;">Cerrar Sesión</a>
    </div>
    <?php
    session_start();
    if (!isset($_SESSION['username'])) {
        header("Location: index.php");
        exit();
    }
    ?>

</body>

</html>