import styles from './styles.module.scss'
import {Link} from "react-router-dom";

const Sidebar = () => {
    const categories = [
        "beauty",
        "fragrances",
        "furniture",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "mobile-accessories",
        "motorcycle",
        "skin-care",
        "smartphones",
        "sports-accessories",
        "sunglasses",
        "tablets",
        "tops",
        "vehicle",
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches"
    ]

    return (
        <aside className={styles.sidebar}>
            <ul className={styles.list}>
                {categories.map(category =>
                    <li key={category} className={styles.item}>
                        <Link to={`/categories/${category}`}>{category}</Link>
                    </li>
                )}
            </ul>
        </aside>
    );
};

export default Sidebar;