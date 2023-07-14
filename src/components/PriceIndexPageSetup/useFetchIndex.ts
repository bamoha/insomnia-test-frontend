import { useLocalStorage } from '@/hooks/useLocalStorage';
import fetchPriceIndex from '@/queries/fetchPriceIndex';
import { PriceIndexResponse, SelectedIndex } from '@/types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useFetchIndex = () => {
    const [priceIndexBody, setPriceIndexBody] = useState<PriceIndexResponse>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selected, setSelected] = useState<SelectedIndex>();
    const [selectedCurrency, setSelectedCurrency] = useLocalStorage(
        'selectedCurrency',
        ''
    );
    const [selectedDuration, setSelectedDuration] = useLocalStorage(
        'selectedDuration',
        ''
    );
    const defaultInterval = selectedDuration || 5000;

     const [refreshInterval, setRefreshInterval] =
         useState<number>(defaultInterval);

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

    const updateByDuration = (value: number): void => {
        setRefreshInterval(value);
        setSelectedDuration(value);
    };

    useEffect(() => {
        if (priceIndexBody) {
            const checkSelected =
                !selectedCurrency || selectedCurrency === 0
                    ? Object.values(priceIndexBody.bpi)[0]
                    : priceIndexBody?.bpi[selectedCurrency];

            setSelected(checkSelected);
        }
        const checkDuration = selectedDuration
            ? selectedDuration
            : defaultInterval;
        setRefreshInterval(checkDuration);
    }, [priceIndexBody, selected]);

    const updateByCurrency = (selectedFromDropdown: string) => {
        setSelected(priceIndexBody?.bpi[selectedFromDropdown]);
        setSelectedCurrency(selectedFromDropdown);
    };

    useEffect(() => {
        handleGetOrderSummary();
        const interval = setInterval(handleGetOrderSummary, refreshInterval);

        return (): void => clearInterval(interval);
    }, [refreshInterval]);

    return {
        priceIndexBody,
        handleGetOrderSummary,
        updateByDuration,
        isLoading,
        updateByCurrency,
        selected,
        refreshInterval,
    };
};

export default useFetchIndex;
