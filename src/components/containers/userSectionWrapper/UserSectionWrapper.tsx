import React, { FC } from 'react';
import c from './userSectionWrapper.module.css'

interface SectionWrapperProps {
    title?: string;
}

const UserSectionWrapper: FC<SectionWrapperProps> = (props) => {
    return (
        <section className={c.section_content}>
            {props.title !== undefined && <h1>{props.title}</h1>}
            {props.children}
        </section>
    );
};

export default UserSectionWrapper;