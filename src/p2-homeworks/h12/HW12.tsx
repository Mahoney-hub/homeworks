import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC, initStateType} from './bll/themeReducer';

const themes = ['dark', 'red', 'some', 'teal', 'darkBlue'];

function HW12() {
    // const theme = 'some'; // useSelector
    const {theme} = useSelector<AppStoreType, initStateType>(state => state.theme)
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()
    const onChangeCallback = (value: string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div className={s.wrapper}>
                {/*should work (должно работать)*/}
                <SuperSelect options={themes}
                             value={theme}
                             onChangeOption={onChangeCallback}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
