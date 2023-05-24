import {NavLink} from "react-router-dom";
import {Navbar} from "react-bootstrap";

import {navigation} from "../../../data/data.data.js";
import styles from './navbar.module.scss'
import Burger from "./burgerMenu/Burger.jsx";

const NavBar = () => {
    return (
        <Navbar className={styles.navbar}>

            <ul>
                {
                    navigation.map(item => {
                        return (
                            <li key={item.id}>
                                <NavLink className={styles.link} to={item.locate}>{item.item}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>

            <Burger />
        </Navbar>
    )
        ;
};

export default NavBar;