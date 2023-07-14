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
import { DurationMap } from '@/utils';

interface PriceDurationMenuProps {
    updateByDuration: (selected: number) => void;
    currentDuration: number;
}

const PriceDurationMenu: FC<PriceDurationMenuProps> = ({
    updateByDuration,
    currentDuration,
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
                Duration[
                {
                    DurationMap.filter(
                        (item) => item.value === currentDuration
                    )[0].name
                }
                ] <ChevronDownIcon />
            </MenuButton>
            <MenuList>
                {DurationMap.map((item) => (
                    <MenuItem
                        key={item.value}
                        onClick={() => updateByDuration(item.value)}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PriceDurationMenu;
