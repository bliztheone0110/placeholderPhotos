import React, { FC } from 'react';
import c from './albumItemFiller.module.css'

const AlbumItemFiller: FC = () => {
    return (
        <div className={c.item_wrapper}>
            <div className={c.item_content}>
                <p>loading...</p>
            </div>
        </div>
    );
};

export default AlbumItemFiller;