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
    updateByDuration: (selected: number) => void;
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
                <MenuItem onClick={() => updateByDuration(5000)}>
                    5 secs
                </MenuItem>
                <MenuItem onClick={() => updateByDuration(10000)}>
                    10 secs
                </MenuItem>
                <MenuItem onClick={() => updateByDuration(20000)}>
                    20 secs
                </MenuItem>
                <MenuItem onClick={() => updateByDuration(30000)}>
                    30 secs
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default PriceDurationMenu;
