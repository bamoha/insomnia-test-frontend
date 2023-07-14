import { PriceIndexResponse } from '@/types';

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const fetchPriceIndex = async () => {
    try {
        const result: PriceIndexResponse = await fetch(url).then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
        return await Promise.resolve({ error: null, result: result });
    } catch (error) {
        return Promise.resolve({ error, result: null });
    }
};

export default fetchPriceIndex;
