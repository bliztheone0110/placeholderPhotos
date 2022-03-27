import React, { FC } from 'react';
import c from './albumModal.module.css'

interface AlbumModalProps {
    title: string;
    url: string;
    hideModal: () => void;
}

const AlbumModal: FC<AlbumModalProps> = (props) => {

    return (
        <div
            className={c.modal_content}
            onClick={e => e.stopPropagation()}
        >
            <span className={c.modal_close} onClick={() => props.hideModal()} >X</span>
            <h2>{props.title}</h2>
            <img src={props.url} alt={props.title} />
        </div>
    );
};

export default AlbumModal;