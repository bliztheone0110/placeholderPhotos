import React, { FC } from 'react';
import c from './container.module.css'

const Container: FC = (props) => {
    return (
        <div className={c.container}>
            {props.children}
        </div>
    );
};

export default Container;