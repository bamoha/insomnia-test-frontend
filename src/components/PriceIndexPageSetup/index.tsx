import { Box, Center, HStack, Text } from '@chakra-ui/react';
import { FC, ReactNode, useEffect, useState } from 'react';
import styles from '../../page.module.css';
import PriceIndexCard from './PriceIndexHead';
import PriceIndexDetails from './PriceIndexDetails';
import useFetchIndex from './useFetchIndex';
import { SelectedIndex } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const PriceIndexPage: FC = () => {
    const { priceIndexBody, handleGetOrderSummary, isLoading } =
        useFetchIndex();
    const [selected, setSelected] = useState<SelectedIndex>();
    const [selectedCurrency, setSelectedCurrency] = useLocalStorage(
        'selectedCurrency',
        ''
    );

    useEffect(() => {
        if (priceIndexBody) {
            const checkSelected =
                selectedCurrency === 0
                    ? Object.values(priceIndexBody.bpi)[0]
                    : priceIndexBody?.bpi[selectedCurrency];

            setSelected(checkSelected);
        }
    }, [priceIndexBody, selected]);

    const updateByCurrency = (selectedFromDropdown: string) => {
        setSelected(priceIndexBody?.bpi[selectedFromDropdown]);
        setSelectedCurrency(selectedFromDropdown);
    };
    const updateByDuration = (selectedFromDropdown: string) => {
        setSelected(priceIndexBody?.bpi[selectedFromDropdown]);
        setSelectedCurrency(selectedFromDropdown);
    };

    return (
        <Box className={styles.priceIndexPage}>
            {priceIndexBody && selected ? (
                <>
                    <PriceIndexCard
                        priceIndexBody={priceIndexBody}
                        selected={selected}
                        updateByCurrency={updateByCurrency}
                        updateByDuration={updateByDuration}
                    />
                    <PriceIndexDetails
                        selected={selected}
                        handleGetOrderSummary={handleGetOrderSummary}
                        isLoading={isLoading}
                    />
                    <Text fontSize="xs" mt={10}>
                        Disclaimer: {priceIndexBody.disclaimer}
                    </Text>
                </>
            ) : (
                <Center h={'100%'}>
                    <Text>Loading....</Text>
                </Center>
            )}
        </Box>
    );
};

export default PriceIndexPage;
