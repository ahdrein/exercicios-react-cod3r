import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family>
        <Member name='Andrews' lastName='Drein'></Member>
    </Family>
    ,  document.getElementById('app')
)
