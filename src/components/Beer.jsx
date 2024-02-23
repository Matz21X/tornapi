// Beer.js
import React, {useEffect, useState} from 'react';
import fetchBierData from './api';

const Beer = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await fetchBierData();
                setData(responseData);
            } catch (error) {
                console.error('Error setting data:', error);
            }
        };

        fetchData();

        const interval = setInterval(fetchData, 10000);

        return () => clearInterval(interval);
    }, []);


    const handleNotification = () => {
        if (Notification.permission === 'granted') {
            console.log("BIER JETZT!!!")
            new Notification('Bierpreis:', {
                body: data.itemmarket[0].cost + '$',
            });
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification('Benachrichtigung', {
                        body: 'Die Benachrichtigung wurde ausgelöst!',
                    });
                }
            });
        }

    };


    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className="text-info">
                {data ? (
                    <pre>Billigstes Bierchen: {JSON.stringify(data.itemmarket[0].cost, null, 2)}$</pre>
                ) : (
                    <pre>Loading...</pre>
                )}
            </h1>
        </div>
    );
};

export default Beer;
