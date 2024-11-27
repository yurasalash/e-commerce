import styles from './styles.module.scss'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Slider = () => {
    const images = [
        '../../../../public/assets/slider/1.jpg',
        '../../../../public/assets/slider/2.jpg',
        '../../../../public/assets/slider/3.jpg',
        '../../../../public/assets/slider/4.jpg',
        '../../../../public/assets/slider/5.jpg',
        '../../../../public/assets/slider/6.jpg',
        '../../../../public/assets/slider/7.jpg'
    ]
    const [active, setActive] = useState(0)

    useEffect(() => {
        const timerId = setInterval(() => {
            setActive((active + 1) % images.length)
        }, 5000)
        return () => clearInterval(timerId)
    })

    return (
        <div className={styles.slider}>
            {images.map((image, i) =>
                <Link to={'/'}>
                    <img src={image}
                         alt=""
                         className={i !== active ? `${styles.item} ${styles.notActive}` : styles.item}
                    />
                </Link>
            )}
        </div>
    );
};

export default Slider;