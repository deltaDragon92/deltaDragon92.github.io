// Quando il documento è pronto
document.addEventListener('DOMContentLoaded', function() {
    // Ottieni il pulsante e il paragrafo dove visualizzare il messaggio
    const button = document.getElementById('clickMeButton');
    const message = document.getElementById('message');

    // Aggiungi un evento per il clic del pulsante
    button.addEventListener('click', function() {
        message.textContent = 'Hai cliccato il pulsante!';
    });
});
