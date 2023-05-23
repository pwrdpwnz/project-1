import React from 'react';
import {Navbar} from "react-bootstrap";
import {navigation} from "../../../data/data.data.js";

import styles from './navbar.module.scss'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar className={styles.navbar}>
            <ul>
                {
                    navigation.map(item => {
                        return (
                            <li key={item.id}>
                                <NavLink to={item.locate}>{item.item}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </Navbar>
    )
        ;
};

export default NavBar;