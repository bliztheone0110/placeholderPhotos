import React, { FC } from 'react';
import { IPhoto } from './../../../models/IPhoto';
import c from './photoItem.module.css'

interface PhotoItemProps {
    photo: IPhoto;
    openModal: (title: string, url: string) => void;
}

const PhotoItem: FC<PhotoItemProps> = (props) => {
    return (
        <article className={c.photo_wrapper}>
            <div
                className={c.photo_content}
                onClick={() => {
                    props.openModal(props.photo.title, props.photo.url)
                }}
            >
                <p>{props.photo.title}</p>
                <img src={props.photo.url} alt={props.photo.title} />
            </div>
        </article>
    );
};

export default PhotoItem;