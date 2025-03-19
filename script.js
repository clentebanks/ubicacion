// URL de la imagen pública
const imageUrl = "product.jpg";  // Asegúrate de que la imagen está en la raíz de Netlify

// Enviar la imagen al teléfono (Ejemplo: WhatsApp)
document.getElementById("sendImage").href = `https://api.whatsapp.com/send?text=Mira esta imagen: ${window.location.origin}/${imageUrl}`;

// Función para obtener la ubicación
function sendLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Mostrar la ubicación en la página
                document.getElementById("location").textContent = `Latitud: ${latitude}, Longitud: ${longitude}`;

                // Crear un enlace a Google Maps
                const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
                const linkElement = document.getElementById("mapsLink");
                linkElement.href = mapsLink;
                linkElement.style.display = "block";

                alert(`Ubicación enviada: Latitud: ${latitude}, Longitud: ${longitude}`);
            },
            function (error) {
                alert("Error obteniendo la ubicación: " + error.message);
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    } else {
        alert("Geolocalización no soportada en este dispositivo.");
    }
}

// Solo obtener ubicación cuando el usuario haga clic
document.getElementById("getLocation").addEventListener("click", sendLocation);
