import React, { FC } from 'react';
import c from './postItemFiller.module.css'

const PostItemFiller: FC = () => {
    return (
        <div className={c.post_wrapper}>
            <h3 className={c.post_title}>Loading</h3>
        </div>
    );
};

export default PostItemFiller;