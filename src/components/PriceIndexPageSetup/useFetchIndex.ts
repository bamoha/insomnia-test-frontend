import fetchPriceIndex from '@/queries/fetchPriceIndex';
import { PriceIndexResponse } from '@/types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useFetchIndex = () => {
    const [priceIndexBody, setPriceIndexBody] = useState<PriceIndexResponse>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleGetOrderSummary = async () => {
        setIsLoading(true);
        const data = await fetchPriceIndex();
        if (data.error)
            toast.error('An error occured while fetching price index');
        if (data.result) {
            setPriceIndexBody(data.result);
            toast.success('Successfully Fetched Price Index');
        }

        setIsLoading(false);
    };

    useEffect(() => {
        handleGetOrderSummary();
    }, []);

    return {
        priceIndexBody,
        handleGetOrderSummary,
        isLoading,
    };
};

export default useFetchIndex;
