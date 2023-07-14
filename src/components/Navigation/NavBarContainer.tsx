import { Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface NavBarContainerProps {
    children?: ReactNode;
}

const NavBarContainer: FC<NavBarContainerProps> = ({
    children,
    ...extraStyles
}) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            py={4}
            px={8}
            {...extraStyles}
        >
            {children}
        </Flex>
    );
};

export default NavBarContainer;
