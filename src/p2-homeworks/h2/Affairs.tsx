import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    const setAll = () => props.setFilter('all')
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div className={classes.affairs}>

            {mappedAffairs}
            <div>
                <SuperButton className={classes.affairs} onClick={setAll}>ALL</SuperButton>
                <SuperButton className={classes.affairs} onClick={setHigh}>HIGH</SuperButton>
                <SuperButton className={classes.affairs} onClick={setMiddle}>MIDDLE</SuperButton>
                <SuperButton className={classes.affairs} onClick={setLow}>LOW</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
