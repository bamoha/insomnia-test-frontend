import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';
import { FC, ReactNode } from 'react';
import styles from '../page.module.css';
import { Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface PageLayoutProps {
    children?: ReactNode;
}

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
});

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
    return (
        <main className={poppins.className}>
            <ToastContainer hideProgressBar autoClose={3000} />
            <Box>
                <NavBar />
                <Box className={styles.pageLayout}>{children}</Box>
            </Box>
        </main>
    );
};

export default PageLayout;
