import React, { FC } from 'react';
import c from './container.module.css'

interface ContainerProps {
    autoHeight?: string;
}

const Container: FC<ContainerProps> = (props) => {
    return (
        <div className={c.container} style={{
            minHeight: props.autoHeight || 'calc(100vh - 64px)',
        }}>
            {props.children}
        </div>
    );
};

export default Container;