import {
    Box,
    Button,
    Center,
    Flex,
    HStack,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import styles from '../../page.module.css';
import { CurrencyMap, formatCurrency } from '@/utils';
import { SelectedIndex } from '@/types';

interface PriceIndexDetailsProps {
    selected: SelectedIndex;
    handleGetOrderSummary: () => void;
    isLoading: boolean;
}

const PriceIndexDetails: FC<PriceIndexDetailsProps> = ({
    selected,
    handleGetOrderSummary,
    isLoading,
}) => {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.900')}
            className={styles.priceIndexDetails}
            py={'8'}
            px={'4'}
        >
            <Box h={'50%'} alignItems={'center'}>
                <HStack mb={'5'}>
                    <Text fontSize="sm" fontWeight={'black'}>
                        DETAILS
                    </Text>
                </HStack>
                <HStack mb={'5'}>
                    <Stack>
                        <Box mb={2}>
                            <Text fontSize="sm" fontWeight={'light'}>
                                Code
                            </Text>
                            <Text fontSize="md" fontWeight={'bold'}>
                                {selected.code}
                            </Text>
                        </Box>
                        <Box mb={2}>
                            <Text fontSize="sm" fontWeight={'light'}>
                                Name
                            </Text>
                            <Text fontSize="md" fontWeight={'bold'}>
                                {selected.description}
                            </Text>
                        </Box>
                        <Box mb={2}>
                            <Text fontSize="sm" fontWeight={'light'} mb={'3px'}>
                                Current Price
                            </Text>
                            <Text fontSize="md" fontWeight={'bold'}>
                                {
                                    CurrencyMap[
                                        selected.code as keyof typeof CurrencyMap
                                    ]
                                }{' '}
                                {formatCurrency(selected.rate_float)}
                            </Text>
                        </Box>
                    </Stack>
                </HStack>
            </Box>

            <Button
                colorScheme="gray"
                backgroundColor={'#edecf2'}
                color={'#4f3c7e'}
                size="lg"
                w={'100%'}
                borderRadius={20}
                mt={10}
                isLoading={isLoading}
                onClick={() => handleGetOrderSummary()}
            >
                Refetch
            </Button>
        </Box>
    );
};

export default PriceIndexDetails;
