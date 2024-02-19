import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
    const [data, setData] = useState(null); // Initialisiere data mit null, bis die Daten geladen sind

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.torn.com/market/180?selections=itemmarket&key=P0si2JikRMAAK1D3');
                console.log("BIER")
                console.log()
                setData(response.data);// Setze die Daten aus der Antwort in den Zustand data
                console.log(data.itemmarket[0].cost)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Funktion fetchData aufrufen, um Daten initial zu laden
        fetchData();


        // Timer setzen, um alle 10 Sekunden die fetchData-Funktion aufzurufen
        const interval = setInterval(fetchData, 10000);

        // Aufräumen, um den Timer zu stoppen, wenn die Komponente unmontiert wird
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="text-info">
                {data ? (
                    // Wenn data nicht null ist (also Daten geladen wurden)
                    <pre>Billigstes Bierchen: {JSON.stringify(data.itemmarket[0].cost, null, 2)}$</pre> // Zeige die Rohdaten als JSON-String an
                ) : (
                    <pre>Loading...</pre> // Anzeige während Daten geladen werden
                )}
            </h1>
        </div>
    );
};

export default Axios;
