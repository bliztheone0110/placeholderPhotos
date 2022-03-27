import React, { FC } from 'react';
import AlbumItemFiller from '../../../../components/userItems/albumItemFiller/AlbumItemFiller';
import { IAlbum } from '../../../../models/IAlbum';
import AlbumItem from '../../../../components/userItems/albumItem/AlbumItem';
import FlexBox from './../../../../components/containers/flexBox/FlexBox';
import UserSectionWrapper from './../../../../components/containers/userSectionWrapper/UserSectionWrapper';

interface AlbumsSectionProps {
    AlbumsError: string;
    albums: IAlbum[]
}

const AlbumsSection: FC<AlbumsSectionProps> = (props) => {
    return (
        <UserSectionWrapper>
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
        </UserSectionWrapper>
    );
};

export default AlbumsSection;