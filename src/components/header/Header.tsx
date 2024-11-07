import styles from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.inner}>
                    <span className={styles.burger}>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                            <path d="M5 17H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                            <path d="M5 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </span>
                    <Link to={'/'} className={styles.logo}>
                        <span>E-COMMERCE</span>
                    </Link>
                    <div className={styles.search}>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input type="text" placeholder="Search..." />
                    </div>
                    <Link to={'/cart'} className={styles.cart}>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z"
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;