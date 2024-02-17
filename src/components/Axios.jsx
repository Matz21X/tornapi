import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Axios = () => {
    const [data, setData] = useState(null); // Initialisiere data mit null, bis die Daten geladen sind

    useEffect(() => {
        axios.get('https://api.torn.com/user/3220519?selections=bars&key=xBqtr8z8pZurtd3m')
            .then((res) => {
                setData(res.data); // Setze die Daten aus der Antwort in den Zustand data
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    /*const nerveCurr = data.nerve.current
    console.log(nerveCurr)

    if (nerveCurr > 1)
        console.log("Bruh")*/

    return (

        <div class="position-absolute top-50 start-50 translate-middle"><h1 class="text-info">

            {data ? ( // Wenn data nicht null ist (also Daten geladen wurden)
                <pre>Nerve:{JSON.stringify(data.nerve, null, 2)}</pre> // Zeige die Rohdaten als JSON-String an
            ) : (<pre>Loading...</pre> // Anzeige während Daten geladen werden
            )}
        </h1>
        </div>
    );


}

export default Axios;
