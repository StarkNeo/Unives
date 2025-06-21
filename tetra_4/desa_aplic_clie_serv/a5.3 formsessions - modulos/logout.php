<?php
session_start();
session_destroy();
// Eliminar cookies estableciendo el tiempo de expiración en el pasado
setcookie("username", "", time() - 3600, "/");

header("Location: index.php");
exit();
?>