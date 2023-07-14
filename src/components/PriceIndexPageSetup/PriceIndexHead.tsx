import { Box, Center, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { FC, ReactNode, useState } from 'react';
import styles from '../../page.module.css';
import PriceCurrencyMenu from './PriceCurrencyMenu';
import PriceDurationMenu from './PriceDurationMenu';
import { CurrencyMap, formatCurrency, formatDate } from '@/utils';
import { PriceIndexResponse, SelectedIndex } from '@/types';

interface PriceIndexCardProps {
    priceIndexBody: PriceIndexResponse;
    selected: SelectedIndex;
    updateByCurrency: (selected: string) => void;
    updateByDuration: (selected: string) => void;
}

const PriceIndexCard: FC<PriceIndexCardProps> = ({
    priceIndexBody,
    selected,
    updateByCurrency,
    updateByDuration,
}) => {
    return (
        <Box className={styles.priceIndexCard}>
            <Box h={'100%'} alignItems={'center'}>
                <HStack mb={'5'} justifyContent={'space-between'}>
                    <PriceCurrencyMenu updateByCurrency={updateByCurrency} />
                    <PriceDurationMenu updateByDuration={updateByDuration} />
                </HStack>
                {selected && (
                    <Stack alignItems={'center'}>
                        <Text fontSize="md">BTC Price Index</Text>
                        <Text fontSize="5xl">
                            {
                                CurrencyMap[
                                    selected.code as keyof typeof CurrencyMap
                                ]
                            }
                            {formatCurrency(selected.rate_float)}
                        </Text>
                        <Text fontSize="xs">
                            Last Updated:{' '}
                            {formatDate(priceIndexBody.time.updated)}
                        </Text>
                    </Stack>
                )}
            </Box>
        </Box>
    );
};

export default PriceIndexCard;
