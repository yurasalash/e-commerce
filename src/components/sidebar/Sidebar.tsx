import styles from './Sidebar.module.css'
import {Link} from "react-router-dom";

const Sidebar = ({categories}: {categories: string[]}) => {
    return (
        <aside className={styles.sidebar}>
            <ul className={styles.list}>
                {categories.map(category =>
                    <li className={styles.item}>
                        <Link to={`/products/category/${category}`}>{category}</Link>
                    </li>
                )}
            </ul>
        </aside>
    );
};

export default Sidebar;