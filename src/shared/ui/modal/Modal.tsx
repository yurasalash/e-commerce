import styles from './styles.module.scss'
import {useModal} from "../../../app/providers/ModalProvider.tsx";
import {Link} from "react-router-dom";

const Modal = () => {
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
    const {closeModal, toggleModal} = useModal()

    return (
        <div className={styles.modal} onClick={() => toggleModal()}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                <aside className={styles.sidebar}>
                    <ul className={styles.list}>
                        {categories.map(category =>
                            <li key={category} className={styles.item}>
                                <Link to={`/categories/${category}`} onClick={closeModal}>{category}</Link>
                            </li>
                        )}
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default Modal;