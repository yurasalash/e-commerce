import styles from './styles.module.scss'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Slider = () => {
    const images = [
        'https://content1.rozetka.com.ua/banner_main/image/original/490442349.jpg',
        'https://content.rozetka.com.ua/banner_main/image/original/489238363.jpg',
        'https://content1.rozetka.com.ua/banner_main/image/original/487647176.jpg',
        'https://content2.rozetka.com.ua/banner_main/image/original/487684773.jpg',
        'https://content1.rozetka.com.ua/banner_main/image/original/491702150.jpg',
        'https://content1.rozetka.com.ua/banner_main/image/original/492549342.jpg',
        'https://content2.rozetka.com.ua/banner_main/image/original/491874115.jpg'
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