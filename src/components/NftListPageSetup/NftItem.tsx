import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { NftItem } from '@/types';
import Image from 'next/image';

interface NftItemProps {
    item: NftItem;
}

const NftItem: FC<NftItemProps> = ({ item, ...rest }) => {
    return (
        <Box
            background={'white'}
            height={'400px'}
            width={'30%'}
            borderRadius={10}
            border={'1px solid #ddd'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
        >
            <Box
                borderRadius={3}
                position={'relative'}
                width={'100%'}
                height={'200px'}
            >
                <Image
                    alt="Nft picture"
                    src={item.image}
                    layout="fill"
                    objectFit="contain"
                />
            </Box>
            <Box px={5}>
                <Box mb={2}>
                    <Text fontSize="sm" fontWeight={'light'}>
                        {item.name}
                    </Text>
                    <Text fontSize="md" fontWeight={'bold'}>
                        {item.tokenId}
                    </Text>
                </Box>
                <Box mb={2}>
                    <Text fontSize="sm" fontWeight={'light'}>
                        Description
                    </Text>
                    <Text fontSize="md" fontWeight={'bold'}>
                        {item.description}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default NftItem;
