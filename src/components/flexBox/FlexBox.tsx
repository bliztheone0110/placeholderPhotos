import React, { FC } from 'react';
import c from './flexBox.module.css'

interface flexBoxProps {
    column?: string;
}

const FlexBox: FC<flexBoxProps> = (props) => {
    return (
        <div className={c.flex_box} style={props.column ? {alignItems: 'column'} : {}}>
            {props.children}
        </div>
    );
};

export default FlexBox;