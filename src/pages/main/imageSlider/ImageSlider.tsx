import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Mousewheel } from "swiper";

interface ImageSliderProps {
    images: string[];
}

const ImageSlider: FC<ImageSliderProps> = (props) => {
    return (
        <Swiper
            className='h100'
            direction='vertical'
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={{
                forceToAxis: true,
            }}
            modules={[Mousewheel]}
            speed={500}
        >
            {props.images.map(image => 
                <SwiperSlide key={image}>
                    <img src={image} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default ImageSlider;