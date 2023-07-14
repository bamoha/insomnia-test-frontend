import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import styles from '../../page.module.css';
import sampleNft from './sampleNft';
import NftItem from './NftItem';

const NftListPageSetup: FC = () => {
    return (
        <Box
            className={styles.NftListPageSetup}
            display={'flex'}
            gap={'5'}
            py={100}
            minH={'100vh'}
            flexWrap={'wrap'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            {sampleNft.map((item) => (
                <NftItem key={item.name} item={item} />
            ))}
        </Box>
    );
};

export default NftListPageSetup;
