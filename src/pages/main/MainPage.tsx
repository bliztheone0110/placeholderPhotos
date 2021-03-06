import React, { FC } from 'react';
import ImageSlider from './imageSlider/ImageSlider';
import MainPageForm from './mainPageForm/MainPageForm';
import Container from '../../components/containers/container/Container';
import ContentOverPage from './../../components/containers/contentOverPage/ContentOverPage';

interface MainPageProps {
    images: string[];
    addNewImage: (id: string) => void;
}

const MainPage: FC<MainPageProps> = (props) => {

    return (
        <div className='h100'>
            <ContentOverPage>
                <Container>
                    <h1>Данное приложение представляет из себя имитацию галереи, используя данные с placeholder.json</h1>
                    <MainPageForm addNewImage={props.addNewImage} />
                </Container>
            </ContentOverPage>
            <ImageSlider images={props.images} />
        </div>
    );
};

export default MainPage;