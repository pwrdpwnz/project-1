import React from 'react';
import styles from './header.module.scss'
import {Container} from "react-bootstrap";

import NavBar from "./_navbar/NavBar.jsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <NavBar />
            </Container>
        </header>
    );
};

export default Header;