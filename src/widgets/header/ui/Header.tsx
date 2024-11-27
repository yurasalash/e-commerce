import styles from './styles.module.scss'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {Modal} from "../../../shared/ui";
import {Sidebar} from "../../sidebar";
import {useAppSelector} from "../../../app/appStore.ts";
import {selectCartLength} from "../../../entities/cart/model/cartSlice.ts";
import {useModal} from "../../../app/providers/ModalProvider.tsx";

const Header = () => {
    const [value, setValue] = useState('')
    const {modal, toggleModal} = useModal()
    const navigate = useNavigate();
    const cartLength = useAppSelector(selectCartLength)

    const handleClick = () => {
        if (value) {
            navigate(`/search/${value}`)
            setValue('')
        }
    }

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.inner}>
                    <span className={styles.burger} onClick={() => toggleModal()}>
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
                            <input type="text"
                                   placeholder="Search..."
                                   value={value}
                                   onChange={(e) => setValue(e.target.value)}
                            />
                            <button onClick={handleClick} className={styles.button}>Search</button>
                        </div>
                        <Link to={'/cart'} className={styles.cart}>
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>{cartLength}</span>
                        </Link>
                    </div>
                </div>
            </header>
            {modal && <Modal><Sidebar /></Modal>}
        </>
    );
};

export default Header;