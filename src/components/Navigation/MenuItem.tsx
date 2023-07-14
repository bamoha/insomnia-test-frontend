import React, { FC, ReactNode } from 'react';
import { Link, Text, useColorModeValue } from '@chakra-ui/react';

interface MenuItemProps {
    children?: ReactNode;
    to: string;
}

const MenuItem: FC<MenuItemProps> = ({ children, to = '/', ...rest }) => {
    return (
        <Link href={to}>
            <Text
                display="block"
                {...rest}
                color={useColorModeValue('black', 'white')}
                px={4}
            >
                {children}
            </Text>
        </Link>
    );
};

export default MenuItem;
