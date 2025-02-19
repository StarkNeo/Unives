<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <h1>Calculadora de masa corporal</h1>
    <form class="styled-form" action="calculadora.php" method="POST">
        <label for="estatura">Estatura: </label>
        <input type="text" name="estatura" id="estatura" required >
        <label for="peso">Peso: </label>
        <input type="text" name="peso" id="peso" required ><br>
        <input type="submit" value="Calcular">
    </form>
</body>

</html>