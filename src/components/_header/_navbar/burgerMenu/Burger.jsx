
import styles from './burger.module.scss'
const Burger = () => {
    return (
        <button className={styles.burger}>
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
        </button>
    );
};

export default Burger;