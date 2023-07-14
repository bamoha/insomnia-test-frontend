import {
    Box,
    Center,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    Text,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import styles from '../../page.module.css';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface PriceCurrencyMenuProps {
    updateByCurrency: (selected: string) => void;
}

const PriceCurrencyMenu: FC<PriceCurrencyMenuProps> = ({
    updateByCurrency,
}) => {
    return (
        <Menu>
            <MenuButton
                px={0}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="0"
                _hover={{ bg: 'none' }}
                _expanded={{ bg: 'none' }}
                _focus={{ boxShadow: 'none' }}
            >
                Currency <ChevronDownIcon />
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => updateByCurrency('USD')}>USD</MenuItem>
                <MenuItem onClick={() => updateByCurrency('EUR')}>EUR</MenuItem>
                <MenuItem onClick={() => updateByCurrency('GBP')}>GBP</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default PriceCurrencyMenu;
