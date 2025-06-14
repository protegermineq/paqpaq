async function sendTelegramMessageWithBtn(mensaje, teclado) {
    const url = 'https://lobotones.onrender.com/send-message-with-buttons'; // Asegúrate de que el puerto coincida con el de tu servidor

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key-authorization': 'a8B3dE4F9gH2JkL5mN',
            'x-client-id': 'user1'
        },
        body: JSON.stringify({
            mensaje: mensaje,
            teclado: teclado
        })
    });

    if (!response.ok) {
        const errorText = await response.text(); // O .json() si sabes que la respuesta es JSON
        throw new Error(`${response.status}: ${errorText}`);
    }

    const respuesta = (await response.text()).replace(/"/g, '').trim();
    return respuesta;
}