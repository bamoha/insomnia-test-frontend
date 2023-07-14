import { Box, Center, Text } from '@chakra-ui/react';
import { FC } from 'react';
import styles from '../../page.module.css';
import PriceIndexHead from './PriceIndexHead';
import PriceIndexDetails from './PriceIndexDetails';
import useFetchIndex from './useFetchIndex';

const PriceIndexPage: FC = () => {
    const {
        priceIndexBody,
        handleGetOrderSummary,
        isLoading,
        updateByDuration,
        selected,
        updateByCurrency,
        refreshInterval,
    } = useFetchIndex();

    return (
        <Box className={styles.priceIndexPage}>
            {priceIndexBody && selected && !isLoading ? (
                <>
                    <PriceIndexHead
                        priceIndexBody={priceIndexBody}
                        selected={selected}
                        updateByCurrency={updateByCurrency}
                        updateByDuration={updateByDuration}
                        currentDuration={refreshInterval}
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
