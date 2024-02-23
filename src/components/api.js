// api.js
import axios from 'axios';


const bierURL = 'https://api.torn.com/market/180?selections=itemmarket&key=P0si2JikRMAAK1D3';
const stockURL = 'https://api.torn.com/user/3220519?selections=stocks&key=P0si2JikRMAAK1D3';
const stockMarketURL = 'https://api.torn.com/torn/3220519?selections=stocks&key=P0si2JikRMAAK1D3';

const fetchBierData = async () => {
    try {
        const response = await axios.get(bierURL);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const fetchStockData = async () => {
    try {
        const response = await axios.get(stockURL);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const fetchStockMarketData = async () => {
    try {
        const response = await axios.get(stockMarketURL);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export {fetchStockData, fetchBierData, fetchStockMarketData};
