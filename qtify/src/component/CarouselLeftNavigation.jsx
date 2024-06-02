import { useSwiper, useSwiperSlide } from "swiper/react";
import styles from './CarouselLeftNavigation.module.css';
import {ReactComponent as LeftArrow} from '../assets/LeftArrow.svg';
import { useEffect, useState } from "react";


export default function CarouselLeftNavigation(){
    const swiper = useSwiper();
    const [isBeg, setIsBeg] = useState(true);

    useEffect(() => {
        swiper.on('slideChange', function(){
            setIsBeg(swiper.isBeg);
        });
    },[swiper])

    return(
        <div className={styles.leftNavigation}>
            {!isBeg && <LeftArrow onClick={() => swiper.slidePrev()}/>}
        </div>
    )
}
