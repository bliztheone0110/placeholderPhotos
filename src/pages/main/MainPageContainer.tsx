import React, { useState } from 'react';
import img1 from './../../img/1.jpg'
import img2 from './../../img/2.jpg'
import img3 from './../../img/3.jpg'
import img4 from './../../img/4.jpg'
import MainPage from './MainPage';

const MainPageContainer = () => {
    const ImagesInitialState: string[] = [img1, img2, img3, img4]
    const [images, setImages] = useState(ImagesInitialState)

    const addNewImage = (img: string): void => {
        let newImagesArr = [...images];
        newImagesArr.push(img)

        setImages(newImagesArr)
    }

    return (
        <MainPage images={images} addNewImage={addNewImage} />
    );
};

export default MainPageContainer;