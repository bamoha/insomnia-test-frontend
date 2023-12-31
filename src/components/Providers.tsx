import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface ProvidersProps {
    children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <CacheProvider>
            <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
    );
};

export default Providers;
