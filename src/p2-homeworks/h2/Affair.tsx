import React from 'react'
import {AffairType} from './HW2';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import classes from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id:number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)

    return (
        <div>
            // show some text

            <SuperButton className={classes.affairs} onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
