import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    keyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting = (props:GreetingPropsType) => {
    const {name, error, setNameCallback, addUser, totalUsers, keyPressHandler} = props

    const inputClass = (error) ? `${s.input} ${s.error}` : s.input  // need to fix with (?:)

    return (
        <div className={s.inputField}>
            <div>
                <SuperInputText
                    className={inputClass}
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={keyPressHandler}
                    placeholder={'Введите имя...'}
                />
                {error && <div className={s.inputField__hint}>введите имя</div>}
            </div>
            <SuperButton className={s.button} onClick={addUser}>add</SuperButton>
            <span className={s.button}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
