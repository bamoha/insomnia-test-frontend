import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

interface MenuToggleProps {
    toggle: () => void;
    isOpen: boolean;
}

const MenuToggle: FC<MenuToggleProps> = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
            {isOpen ? <HamburgerIcon /> : <HamburgerIcon />}
        </Box>
    );
};

export default MenuToggle;
