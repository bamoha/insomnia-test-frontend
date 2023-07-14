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

interface PriceDurationMenuProps {
    updateByDuration: (selected: string) => void;
}

const PriceDurationMenu: FC<PriceDurationMenuProps> = ({
    updateByDuration,
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
                Duration <ChevronDownIcon />
            </MenuButton>
            <MenuList>
                <MenuItem>30 secs</MenuItem>
                <MenuItem>1 min</MenuItem>
                <MenuItem>3 min</MenuItem>
                <MenuItem>5 min</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default PriceDurationMenu;
