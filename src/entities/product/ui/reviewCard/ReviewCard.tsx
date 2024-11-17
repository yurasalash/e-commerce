import styles from './styles.module.scss'
import {ProductReview} from "../../model/types.ts";

const ReviewCard = ({review}: {review: ProductReview}) => {
    const date = new Date(review.date)
    return (
        <li className={styles.item}>
            <span className={styles.rating}>{review.rating}/5</span>
            <span className={styles.username}>{review.reviewerName}</span>
            <div className={styles.body}>
                <p>{review.comment}</p>
            </div>
            <span className={styles.date}>{date.toDateString()}</span>
        </li>
    );
};

export default ReviewCard;