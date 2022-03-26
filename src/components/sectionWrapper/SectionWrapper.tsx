import React, { FC } from 'react';
import c from './sectionWrapper.module.css'

interface SectionWrapperProps {
    title?: string;
}

const SectionWrapper: FC<SectionWrapperProps> = (props) => {
    return (
        <div className={c.section_content}>
            {props.title !== undefined && <h1>{props.title}</h1>}
            {props.children}
        </div>
    );
};

export default SectionWrapper;