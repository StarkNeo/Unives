<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Calculo de Area</title>
</head>


<body>
    <h1>Calculadora de Area</h1>
    <form class="form-container" action="" method="POST" >
        <label for="circulo">Circulo</label>
        <input type="radio" name="area" id="circulo" value="circulo" checked>
        <label for="triangulo">Triangulo</label>
        <input type="radio" name="area" id="triangulo" value="triangulo">
        <label for="cuadrado">Cuadrado</label>
        <input type="radio" name="area" id="cuadrado" value="cuadrado">
        <input type="submit" value="Calcular Area">
        <section>
            <section id="sec-base">
                <label for="base" >Base: </label>
                <input type="text" name="base" id="base" placeholder="Base" >

            </section>
            <section id="sec-altura">
                <label for="altura" >Altura: </label>
                <input type="text" name="altura" id="altura" placeholder="Altura" >

            </section>
            <section id="sec-radio">
                <label for="radio">Radio: </label>
                <input type="text" name="radio" id="radio" placeholder="Radio">
            </section>

        </section>

    </form>



    <?php
    //Funcion que valida que los numeros recibidos sean enteros
    function validateInput($input)
    {
        return filter_var($input, FILTER_VALIDATE_INT) !== false;
    }

    //Funcion para calcular el area de un circulo
    function calcularAreaCirculo($radio)
    {
        echo "<div id='output'>" . (3.1416 * $radio ** 2) . "</div>";
    }

    //Funcion para calcular el area de un cuadrado
    function calcularAreaCuadrado($base, $altura)
    {
        echo "<div id='output'>".($base * $altura)."</div>";
    }

    //Funcion para calcular el area de un triangulo
    function calcularAreaTriangulo($base, $altura)
    {
        echo "<div id='output'>".($base * $altura / 2)."</div>";
    }

    //Guarda el valor del boton radio elegido(Circulo, Triangulo, Cuadrado)
    $opcion = isset($_POST["area"]) ? $_POST["area"] : 0;

    //Si la opcion es circulo obtener el valor del radio
    if ($opcion == 'circulo') {
        $radio = isset($_POST["radio"]) ? $_POST['radio'] : 0;

        //Validar que el valor sea un entero, 
        if (validateInput($radio)) {
            calcularAreaCirculo($radio);//Si es entero, calcular el area
        } else {
            //Si no es entero enviar mensaje al usuario
            echo "<div id='output'>"."Solo se admiten numeros enteros"."</div>";
        }

    } else {
        //Si la opcion no es circulo, toma los valores de la base y la altura
        $base = isset($_POST["base"]) ? $_POST["base"] : 0;
        $altura = isset($_POST["altura"]) ? $_POST["altura"] : 0;

        //Valida que los valores sean enteros y calcula el area, si no, envia mensaje al usuario

        if (validateInput($base) && validateInput($altura)) {
            if ($opcion == 'cuadrado') {
                calcularAreaCuadrado($base, $altura);
            } else if ($opcion == 'triangulo') {
                calcularAreaTriangulo($base, $altura);
            }
        } else {
            echo "<div id='output'>"."Solo se admiten numeros enteros"."</div>";
        }
    }

    ?>
    <script src="script.js"></script>
</body>

</html>