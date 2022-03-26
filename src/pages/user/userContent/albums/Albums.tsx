import React, { FC } from 'react';
import FlexBox from '../../../../components/flexBox/FlexBox';
import AlbumItemFiller from '../../../../components/albumItemFiller/AlbumItemFiller';
import { IAlbum } from '../../../../models/IAlbum';
import AlbumItem from '../../../../components/albumItem/AlbumItem';
import c from './albums.module.css'
import SectionWrapper from './../../../../components/sectionWrapper/SectionWrapper';

interface AlbumsSectionProps {
    AlbumsError: string;
    albums: IAlbum[]
}

const AlbumsSection: FC<AlbumsSectionProps> = (props) => {
    return (
        <SectionWrapper>
            {
                props.AlbumsError.length > 0
                    ? <h1>{props.AlbumsError}</h1>
                    : <h1>Список альбомов</h1>
            }
            {
                props.albums.length
                    ?
                    <FlexBox flexWrap='wrap'>
                        {props.albums.map(album => <AlbumItem album={album} />)}
                    </FlexBox>
                    :
                    <FlexBox flexWrap='wrap'>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(num => <AlbumItemFiller key={num} />)}
                    </FlexBox>
            }
        </SectionWrapper>
    );
};

export default AlbumsSection;