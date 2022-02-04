import React from 'react'
import Routing from './Routing'
import {HashRouter} from 'react-router-dom';
import {HeaderMenu} from './HeaderMenu';
import s from './HW5.module.css'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <HeaderMenu/>

                <Routing/>

            </HashRouter>
        </div>
    )
}

export default HW5
