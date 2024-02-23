// Beer.js
import React, {useEffect, useState} from 'react';
import {fetchBierData, fetchStockData, fetchStockMarketData} from './api';



const Beer = () => {
    const [beerJson, setBeerJson] = useState(null);
    const [stockJson, setStockJson] = useState(null);
    const [stockMarketJson, setStockMarketJson] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const beerRes = await fetchBierData();
                const stockRes = await fetchStockData();
                const stockMarketRes = await fetchStockMarketData();
                setStockMarketJson(stockMarketRes);
                setBeerJson(beerRes);
                setStockJson(stockRes)
            } catch (error) {
                console.error('Error setting data', error);
            }
        };
        fetchData();

        const interval = setInterval(fetchData, 10000);
        return () => clearInterval(interval);
    }, []);

    function calcStockPurchasePrice(){
        const asset1 = stockJson.stocks[3].transactions[9377567].shares * stockJson.stocks[3].transactions[9377567].bought_price;
        const asset2 = stockJson.stocks[3].transactions[9377766].shares * stockJson.stocks[3].transactions[9377766].bought_price;
        const totalAsset = asset1 + asset2;
        console.log(stockMarketJson);
        return totalAsset;
    }

    function calcStockCurrentPrice() {

    }



    const handleNotification = () => {
        if (Notification.permission === 'granted') {
            console.log("BIER JETZT!!!")
            new Notification('Bierpreis:', {
                body: beerJson.itemmarket[0].cost + '$',
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
                {beerJson ? (
                    <pre>Billigstes Piwko: {JSON.stringify(beerJson.itemmarket[0].cost, null, 2)}$</pre>
                ) : (
                    <pre>Loading...</pre>
                )}
            </h1>
            <h1 className="text-info">
                {stockJson ? (
                    <pre>Stock: {calcStockPurchasePrice().toLocaleString()}$</pre>
                ) : (
                    <pre>Loading...</pre>
                )}
            </h1>
        </div>
    );
};

export default Beer;
