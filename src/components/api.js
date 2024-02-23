// api.js
import axios from 'axios';

const bierURL = 'https://api.torn.com/market/180?selections=itemmarket&key=P0si2JikRMAAK1D3';

const fetchBierData = async () => {
    try {
        const response = await axios.get(bierURL);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default fetchBierData;
