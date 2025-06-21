<?php
session_start();

$response = [];

// Si la cookie "username" está configurada, incluirla en la respuesta
if (isset($_COOKIE['username'])) {
    $response['username'] = $_COOKIE['username'];
}

// Si hay un mensaje de error en la sesión, incluirlo y eliminarlo de la sesión
if (isset($_SESSION['error'])) {
    $response['error'] = $_SESSION['error'];
    unset($_SESSION['error']);
}

// Devolver datos como JSON
header('Content-Type: application/json');
echo json_encode($response);
?>


<!--  <h1>Login</h1>
    <form class="login-container" action="auth.php" method="POST">
        <input type="text" name="username" placeholder="Usuario"
            value="<?php echo $user ?>" required>
        <input type="password" name="password" placeholder="Contraseña" required>
        <label>
            <input type="checkbox" name="remember">
            Recordarme
        </label>
        <button type="submit">Iniciar Sesión</button>
        <?php if (isset($_SESSION['error'])): 
            
            
            ?>
            <p style="color:red;"><?php echo $_SESSION['error']; unset($_SESSION['error']); ?></p>
        <?php endif; ?>
    </form>-->

    <!--<script src="login.js"></script>-->