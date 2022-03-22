import React, { FC } from 'react';
import c from './contentOverPage.module.css'

const ContentOverPage: FC = (props) => {
    return (
        <div className={c.overflow_container}>
            {props.children}
        </div>
    );
};

export default ContentOverPage;