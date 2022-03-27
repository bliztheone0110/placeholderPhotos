import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from './../../hooks/useActions';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { Spin } from 'antd';
import Album from './Album';
import Container from '../../components/containers/container/Container';
import ModalWrapper from './../../components/containers/modalWrapper/ModalWrapper';
import AlbumModal from './albumModal/AlbumModal';

const AlbumContainer = () => {
    let { id } = useParams()
    const { getPhotos } = useActions()
    const { photos, isPhotosLoading, photosError } = useTypedSelector(state => state.photosReducer)
    const [isModalActive, setIsModalActive] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalImage, setIsMmodalImage] = useState('');

    const openModal = (title: string, url: string) => {
        setIsModalActive(true);
        setModalTitle(title)
        setIsMmodalImage(url)
    }

    const hideModal = () => {
        setIsModalActive(false);

        setTimeout(() => {
            setModalTitle('')
            setIsMmodalImage('')
        }, 300)
    }

    useEffect(() => {
        if (id !== undefined) {
            getPhotos(Number(id))
        }
    }, [])

    return (
        <Spin spinning={isPhotosLoading && photos.length === 0}>
            {photos.length > 0 && <h1>{photosError}</h1>}
            {photos.length > 1 && !isPhotosLoading ? <Album photos={photos} openModal={openModal} /> : <Container />}
            <ModalWrapper isShow={isModalActive} hideModal={hideModal}>
                <AlbumModal title={modalTitle} url={modalImage} hideModal={hideModal} />
            </ModalWrapper>
        </Spin>
    );
};

export default AlbumContainer;