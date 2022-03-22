import React, { FC, useState } from 'react';
import ImageSlider from './imageSlider/ImageSlider';
import MainPageForm from './mainPageForm/MainPageForm';
import ContentOverPage from '../../components/contentOverPage/ContentOverPage';

interface MainPageProps {
    images: string[];
    addNewImage: (id: string) => void;
}

const MainPage: FC<MainPageProps> = (props) => {

    return (
        <div className='h100'>
            <ContentOverPage>
                <h1>Данное приложение представляет из себя имитацию галереи, используя данные с placeholder.json</h1>
                <MainPageForm addNewImage={props.addNewImage} />
            </ContentOverPage>
            <ImageSlider images={props.images} />
        </div>
    );
};

export default MainPage;