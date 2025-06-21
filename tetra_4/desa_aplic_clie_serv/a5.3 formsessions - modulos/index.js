// Cargar datos PHP si es necesario
fetch('preload.php')
    .then(response => response.json())
    .then(data => {
        if (data.username) {
            document.getElementById('username').value = data.username;
            document.getElementById('remember').checked = true;
        }
        if (data.error) {
            document.getElementById('error-message').textContent = data.error;
        }
    })
    .catch(error => console.error('Error al cargar datos:', error));
