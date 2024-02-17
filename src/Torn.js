import fetch from 'node-fetch';

// Die URL der API, von der Daten abgerufen werden sollen
const apiUrl = 'https://api.torn.com/user/3220519?selections=log&key=Qe0wffUhanxHE8Gi';

// Eine Funktion, um Daten von der API abzurufen
async function fetchData() {
    try {
        // Mit fetch die Daten von der API abrufen
        const response = await fetch(apiUrl);

        // Den JSON-Dateninhalt der Antwort extrahieren und zurückgeben
        return await response.json();
    } catch (error) {
        // Fehlerbehandlung, falls beim Abrufen der Daten ein Fehler auftritt
        console.error('Fehler beim Abrufen der Daten:', error);
        return null;
    }
}

export default fetchData;
