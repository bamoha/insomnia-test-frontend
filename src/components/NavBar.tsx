import React, { FC, ReactNode } from 'react';
import MenuLinks from './Navigation/MenuLinks';
import MenuToggle from './Navigation/MenuToggle';
import NavBarContainer from './Navigation/NavBarContainer';

interface NavBarProps {
    children?: ReactNode;
}

const NavBar: FC<NavBarProps> = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
            <MenuLinks isOpen={isOpen} />
            <MenuToggle toggle={toggle} isOpen />
        </NavBarContainer>
    );
};

export default NavBar;
