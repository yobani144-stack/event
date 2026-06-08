// Carga de la sección
fetch('confirmacion.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contenedor-confirmacion').innerHTML = data;
        if (typeof AOS !== 'undefined') AOS.refresh();
    });

// Función para enviar el mensaje personalizado
function enviarWhatsApp(event) {
    event.preventDefault();
    
    const telefono = "527191255411"; // <-- SUSTITUYE CON TU NÚMERO (Código de país + número)
    const mensaje = encodeURIComponent("¡Hola! Me encantaría confirmar mi asistencia a la boda de Rosa Isela y Diego. ¡Muchas gracias por la invitación! ✨");
    
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    
    // Abrir en pestaña nueva
    window.open(url, '_blank');
}
