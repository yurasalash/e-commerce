import styles from './Sidebar.module.css'
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to={'/'}>Phones</Link>
                </li>
                <li className={styles.item}>
                    <Link to={'/'}>Laptops</Link>
                </li>
                <li className={styles.item}>
                    <Link to={'/'}>Computers</Link>
                </li>
                <li className={styles.item}>
                    <Link to={'/'}>Dulls</Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;