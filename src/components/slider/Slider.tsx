import styles from './Slider.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

/*import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';*/

const Slider = () => {
    return (
        <Swiper className={styles.slider}
                modules={[Navigation, Pagination]}
                navigation
                pagination={{clickable: true}}
        >
            <SwiperSlide className={styles.item}>
                Hello
            </SwiperSlide>
            <SwiperSlide className={styles.item}>
                Hello
            </SwiperSlide>
            <SwiperSlide className={styles.item}>
                Hello
            </SwiperSlide>
            <SwiperSlide className={styles.item}>
                Hello
            </SwiperSlide>
            <SwiperSlide className={styles.item}>
                Hello
            </SwiperSlide>
            <SwiperSlide className={styles.item}>
                Hello
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;