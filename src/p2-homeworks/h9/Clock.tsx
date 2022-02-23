import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }

    const getTime = () => {
        if (date) return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    const getDate = () => {
        if (date) {
            const dd = String(date.getDate()).padStart(2, '0');
            const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = date.getFullYear();
            return dd + '.' + mm + '.' + yyyy;
        }
    }

    const stringTime = getTime()  // fix with date
    const stringDate = getDate() // fix with date

    return (
        <div className={s.wrapper}>
            <div className={s.clock}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                <div className={s.label}>
                    {stringTime}
                </div>
            </div>
            <div className={s.clock}>
                {show
                    ? <div className={s.label}>{stringDate}</div>
                    : <div className={`${s.label}  ${s.bgGrey}`}>00:00:0000</div>
                }
            </div>
            <div>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
