async function sendTelegramMessageNoBtn(mensaje) {

    const url = `https://lobotones.onrender.com/send-message`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key-authorization': 'a8B3dE4F9gH2JkL5mN',
            'x-client-id': 'user1'
        },
        body: JSON.stringify({
            mensaje: mensaje
        })
    });

    if (!response.ok) {
        throw new Error('Error al enviar mensaje a Telegram');
    }
}