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
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { CurrencyMap } from '@/utils';

interface PriceCurrencyMenuProps {
    updateByCurrency: (selected: string) => void;
    currentCurrency: string;
}

const PriceCurrencyMenu: FC<PriceCurrencyMenuProps> = ({
    updateByCurrency,
    currentCurrency,
}) => {
    return (
        <Menu>
            <MenuButton
                px={0}
                pt={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="0"
                _hover={{ bg: 'none' }}
                _expanded={{ bg: 'none' }}
                _focus={{ boxShadow: 'none' }}
            >
                Currency [{currentCurrency}] <ChevronDownIcon />
            </MenuButton>
            <MenuList>
                {Object.keys(CurrencyMap).map((item) => (
                    <MenuItem key={item} onClick={() => updateByCurrency(item)}>
                        {item}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PriceCurrencyMenu;
