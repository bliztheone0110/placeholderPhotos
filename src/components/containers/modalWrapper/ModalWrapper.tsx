import React, { FC } from 'react';
import c from './modalWrapper.module.css'

interface ModalWrapperProps {
    isShow: boolean;
    hideModal: () => void;
}

const ModalWrapper: FC<ModalWrapperProps> = (props) => {

    return (
        <div
            className={c.modal}
            style={{
                opacity: props.isShow ? '1' : '0',
                pointerEvents: props.isShow ? 'auto' : 'none',
            }}
            onClick={() => props.hideModal()}
        >
            {props.children}
        </div>
    );
};

export default ModalWrapper;