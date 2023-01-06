import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import s from './Request.module.css';

export const Request = () => {
    return (
        <div className={s.wrapper}>
            <SuperButton>add</SuperButton>
            <SuperCheckbox/>
        </div>
    );
};

