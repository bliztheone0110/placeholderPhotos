import React, { FC } from 'react';
import { IPhoto } from './../../../models/IPhoto';
import c from './photoItem.module.css'
import Tilt from 'react-parallax-tilt';

interface PhotoItemProps {
    photo: IPhoto;
    openModal: (title: string, url: string) => void;
}

const PhotoItem: FC<PhotoItemProps> = (props) => {
    return (
        <div className={c.photo_wrapper}>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div
                    className={c.photo_content}
                    onClick={() => {
                        props.openModal(props.photo.title, props.photo.url)
                    }}
                >
                    <p>{props.photo.title}</p>
                    <img src={props.photo.url} alt={props.photo.title} />
                </div>
            </Tilt>
        </div>
    );
};

export default PhotoItem;