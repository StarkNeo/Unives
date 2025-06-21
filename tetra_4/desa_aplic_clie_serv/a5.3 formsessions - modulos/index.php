<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="login.css">

</head>
<?php
session_start();
// Si la cookie "username" está configurada, incluirla en la respuesta
if (isset($_COOKIE['username'])) {
    $user= $_COOKIE['username'];
} else{
    $user ="";
}
// Si hay un mensaje de error en la sesión, incluirlo y eliminarlo de la sesión
if (isset($_SESSION['error'])) {
    $response['error'] = $_SESSION['error'];
    unset($_SESSION['error']);
    $renderMsgError = $response['error'];
}
else{
    $renderMsgError ="";
}

echo "
    <h1>Login</h1>
    <form class='login-container' action='auth.php' method='POST'>
        <input type='text' name='username' placeholder='Usuario'
            value='$user' required>
        <input type='password' name='password' placeholder='Contraseña' required>
        <label>
            <input type='checkbox' name='remember'>
            Recordarme
        </label>
        <button type='submit'>Iniciar Sesión</button>
        <p style='color:red;''>$renderMsgError</p>
        ";
?>
<body>
  
</body>

</html>