import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Slider} from 'antd'
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    // onChangeRange?: (value: [number, number]) => void
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        // min, max, step, disable, ...

    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (value: [number, number]) => {
        // onChange && onChange(e) // сохраняем старую функциональность
        onChangeRange && onChangeRange(value)
    }

    return (
        <div className={s.wrapper}>
            {/*<Slider range={{ draggableTrack: true }} defaultValue={value} />*/}
            <Slider range defaultValue={value} onChange={(e) => onChangeCallback(e)}/>
        </div>
    )
}

export default SuperDoubleRange
