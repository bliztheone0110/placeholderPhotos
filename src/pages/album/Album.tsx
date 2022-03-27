import React, { FC } from 'react';
import { IPhoto } from './../../models/IPhoto';
import Container from '../../components/containers/container/Container';
import FlexBox from './../../components/containers/flexBox/FlexBox';
import PhotoItem from './../../components/userItems/photoItem/PhotoItem';

interface AlbumProps {
    photos: IPhoto[];
    openModal: (title: string, url: string) => void;
}

const Album: FC<AlbumProps> = (props) => {
    return (
        <Container>
            <FlexBox flexWrap='wrap' alignItems='stretch'>
                {props.photos.map(photo => <PhotoItem photo={photo} openModal={props.openModal} />)}
            </FlexBox>
            
        </Container>
    );
};

export default Album;