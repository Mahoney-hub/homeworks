import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {initStateType, loadingAC} from './bll/loadingReducer';
import s from './HW10.module.css';

function HW10() {
    // useSelector, useDispatch
    const {isLoading} = useSelector<AppStoreType, initStateType>(state => state.loading)
    const dispatch = useDispatch()
    const loading = isLoading

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 1500)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.loader}/>
                ) : (
                    <div className={s.center}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
