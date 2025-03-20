<?php
$logfile = 'server_log.txt';

function logMessage($message, $logFile){
    $timestap = date("Y-m-d H:i:s");
    file_put_contents($logFile, "[$timestap] $message\n",FILE_APPEND);

}



$host = 'localhost';
$db = 'prueba';
$user = 'root';
$pass = '';

//CONEXION CON EL SERVIDOR
$dbserver= new mysqli($host,$user, $pass);    

if ($dbserver->connect_error) {
    logMessage("Error de conexion con base de datos: ".mysqli_connect_error(), $logfile);
    die("Ocurrio un error al conectar con la base de datos. Intente mas tarde.");
}
else{
    logMessage("Conexion con la base de datos, exitosa",$logfile);
}

//CREACION DE LA BASE DE DATOS
$sql = "CREATE DATABASE IF NOT EXISTS $db";
if($dbserver->query($sql)===TRUE){
    logMessage("La base de datos '$db' fue creada de manera exitosa o ya se encuentra en el servidor", $logfile);
}
else{
    logMessage("Error al crear la base de datos: ".$conexion->error,$logfile);
}

//CREACION DE TABLAS
$table = "CREATE TABLE IF NOT EXISTS usuarios (
id INT AUTO_INCREMENT,
nombre VARCHAR(255) NOT NULL,
direccion VARCHAR(60),
correo VARCHAR(60),
telefono VARCHAR(20),
estadoCivil VARCHAR(20),
leer TINYINT(1),
cine TINYINT(1),
viajar TINYINT(1),
estado varchar(255),
primary key(id)
);
";
$conn = mysqli_connect($host,$user,$pass,$db);

if ($conn->query($table) === TRUE) {
    logMessage("La tabla usuarios fue creada o ya existia en la base de datos", $logfile);
  } else {
    logMessage("Error al crear la tabla: ".$conn->error, $logfile);
}

$conn->close();
?>