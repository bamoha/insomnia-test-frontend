import { Box, Center, Text } from '@chakra-ui/react';
import { FC } from 'react';
import styles from '../../page.module.css';
import PriceIndexCard from './PriceIndexHead';
import PriceIndexDetails from './PriceIndexDetails';
import useFetchIndex from './useFetchIndex';

const PriceIndexPage: FC = () => {
    const defaultInterval = 5000;
    const {
        priceIndexBody,
        handleGetOrderSummary,
        isLoading,
        updateByDuration,
        selected,
        updateByCurrency,
    } = useFetchIndex({
        defaultInterval,
    });

    console.log(priceIndexBody);

    console.log(selected);

    return (
        <Box className={styles.priceIndexPage}>
            {priceIndexBody && selected && !isLoading ? (
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
