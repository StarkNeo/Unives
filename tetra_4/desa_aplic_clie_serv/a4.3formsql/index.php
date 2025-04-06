<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Recepcion</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>
        CRUD Actividad Integradora 4.3
    </h1>

    <div id="accordion">
        <div class="section">
            <button class="accordion-button">Registrarse</button>
            <div class="accordion-content">
                <form id="formulario" method="POST" action="recibido.php" enctype="multipart/form-data">
                    <fieldset>
                        <label for="nombre">Nombre: </label>
                        <input type="text" name="nombre" id="nombre" required>
                    </fieldset>
                    <fieldset>
                        <label for="direccion">Direccion: </label>
                        <input type="text" name="direccion" id="direccion" required>

                    </fieldset>
                    <fieldset>
                        <label for="email">Correo electronico: </label>
                        <input type="email" name="email" id="email" required>

                    </fieldset>

                    <fieldset>
                        <label for="confirmacion">Confirmar correo electronico: </label>
                        <input type="email" name="confirmacion" id="confirmacion" required>

                    </fieldset>
                    <fieldset>
                        <label for="telefono">Telefono: </label>
                        <input type="tel" name="telefono" id="telefono" required>

                    </fieldset>
                    <p><b>Estado civil:</b> </p>
                    <fieldset class="estado-civil">

                        <input type="radio" name="estado_civil" id="soltero" value="soltero">
                        <label for="soltero">Soltero </label>
                        <input type="radio" name="estado_civil" id="casado" value="casado">
                        <label for="casado">Casado </label>
                        <input type="radio" name="estado_civil" id="otro" value="otro">
                        <label for="estado_civil">Otro </label>

                    </fieldset>
                    <p><b>Aficiones:</b> </p>
                    <fieldset class="aficiones">
                        <input type="checkbox" name="aficion1" id="leer" value="leer">
                        <label for="aficion1">Leer</label>
                        <input type="checkbox" name="aficion2" id="cine" value="cine">
                        <label for="aficion2">Ir al cine</label>
                        <input type="checkbox" name="aficion3" id="viajar" value="viajar">
                        <label for="aficion3">Viajar</label>

                    </fieldset>
                    <fieldset>
                        <label for="estado">Estado </label>
                        <select name="estado" id="estado">
                            <option value=""> </option>

                        </select>
                    </fieldset>
                    <fieldset>
                        <p>Foto de perfil Max 1MB</p>
                        <input type="hidden" name="MAX_FILE_SIZE" value="1000000">
                        <input type="file" name="imagen" id="imagen">
                    </fieldset>

                    <input type="submit" value="Enviar">


                </form>
            </div>
        </div>
        <div class="section">
            <button class="accordion-button">Usuarios</button>
            <div class="accordion-content">
                <form id="formAct1">
                    <label for="actnombre">Capture su nombre: </label>
                    <input type="text" name="actnombre" id="actnombre">
                    <label for="actmail">Capture su email: </label>
                    <input type="text" name="actmail" id="actmail">
                    <input id="submit" type="submit" value="Consultar">
                </form>

                <form id='formAct2'>
                    <fieldset>
                        <label for='newmail'>Correo electronico: </label>
                        <input type='text' name='newmail' id='newmail' value='' title="Doble clic para editar" required>
                    </fieldset>

                    <fieldset>
                        <label for='newaddress'>Direccion: </label>
                        <input type='text' name='newaddress' id='newaddress' value='' title="Doble clic para editar" required>

                    </fieldset>
                    <fieldset>
                        <label for='newphone'>Telefono: </label>
                        <input type='tel' name='newphone' id='newphone' value='' title="Doble clic para editar" required>

                    </fieldset>
                    <fieldset>
                        <label for='newmarital'>Estado Civil</label>
                        <input type='text' id="newmarital" name='newmarital' value='' title="Doble clic para editar" required>

                    </fieldset>
                    <fieldset>
                        <label for='newstate'>Estado </label>
                        <input type='text' id="newstate" name='newstate' value='' title="Doble clic para editar" required>

                    </fieldset>
                    <input type="submit" value="Actualizar">
                    <input type="button" id="borrar" value="Borrar">
                    
                </form>
        </div>
    </div>
    
    
    </div>



    </div>


    <script src="script.js"></script>

</body>

</html>