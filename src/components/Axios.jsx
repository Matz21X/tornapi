import { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [data, setData] = useState(null); // Initialisiere data mit null, bis die Daten geladen sind

    useEffect(() => {
        axios.get('https://api.torn.com/user/3220519?selections=basic&key=Qe0wffUhanxHE8Gi')
            .then((res) => {
                setData(res.data); // Setze die Daten aus der Antwort in den Zustand data
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            {data ? ( // Wenn data nicht null ist (also Daten geladen wurden)
                <pre>{JSON.stringify(data, null, 2)}</pre> // Zeige die Rohdaten als JSON-String an
            ) : (
                <p>Loading...</p> // Anzeige während Daten geladen werden
            )}
        </div>
    );

}

export default Axios;
