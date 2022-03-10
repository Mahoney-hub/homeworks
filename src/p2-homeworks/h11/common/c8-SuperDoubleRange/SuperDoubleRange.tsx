import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Slider} from 'antd'
import s from './SuperDoubleRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChange, onChangeRange, value,
        // min, max, step, disable, ...

    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange && onChange(e) // сохраняем старую функциональность
        // onChangeRange && onChangeRange()
        // let newValue = e.currentTarget.value
    }

    return (
        <div className={s.wrapper}>
            {/*<Slider range={{ draggableTrack: true }} defaultValue={value} />*/}
            <Slider range />
        </div>
    )
}

export default SuperDoubleRange
