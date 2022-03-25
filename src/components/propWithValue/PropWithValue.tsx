import React, { FC } from 'react';
import c from './propWithValue.module.css'

interface PropWithValueProps {
    propName: string;
    prop: string;
    centered?: boolean;
}

const PropWithValue: FC<PropWithValueProps> = (props) => {
    return (
        <div className={c.propLine} style={props.centered ? {textAlign: 'center'} : {textAlign: 'left'}}>
            <p className={c.propName}>{props.propName}</p>
            <p className={c.prop}>{props.prop}</p>
        </div>
    );
};

export default PropWithValue;