import styles from './styles.module.scss'

import {Product, ReviewCard} from "../../../../entities/product";

const ProductReviews = ({product}: {product: Product}) => {
    if (!product) {
        return <h2 className={styles.empty}>There is no reviews</h2>
    }
    return (
        <div className={styles.reviews}>
            <h2 className={styles.title}>Product Reviews</h2>
            <ul className={styles.list}>
                {product.reviews.map(review =>
                    <ReviewCard review={review} key={review.date}/>
                )}
            </ul>
        </div>
    );
};

export default ProductReviews;