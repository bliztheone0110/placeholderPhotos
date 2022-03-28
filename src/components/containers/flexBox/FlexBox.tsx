import React, { FC } from 'react';

interface FlexBoxProps {
    display?: 'block' | 'flex'
    flexDirection?: 'row' | 'column',
    justifyContent?: string
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse',
    alignItems?: string
    margin?: string
    padding?: string
    width?: string
    height?: string
    maxWidth?: string
}

const FlexBox: FC<FlexBoxProps> = (props) => {
    return (
        <div style={{
            display: props.display || 'flex',
            justifyContent: props.justifyContent || 'flex-start',
            flexDirection: props.flexDirection || 'row',
            flexWrap: props.flexWrap || 'nowrap',
            alignItems: props.alignItems || 'flex-start',
            margin: props.margin || '0',
            padding: props.padding || '0',
            width: props.width || 'auto',
            height: props.height || 'auto',
            maxWidth: props.maxWidth || 'none'
          }}>
            {props.children}
        </div>
    );
};

export default FlexBox;