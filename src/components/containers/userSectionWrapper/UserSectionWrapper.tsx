import React, { FC } from 'react';
import c from './userSectionWrapper.module.css'

interface SectionWrapperProps {
    title?: string;
}

const UserSectionWrapper: FC<SectionWrapperProps> = (props) => {
    return (
        <div className={c.section_content}>
            {props.title !== undefined && <h1>{props.title}</h1>}
            {props.children}
        </div>
    );
};

export default UserSectionWrapper;