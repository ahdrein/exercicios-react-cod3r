import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Drein'>
        <Member name='Andrews' ></Member>
        <Member name='Julia' ></Member>
        <Member name='Camila' ></Member>
    </Family>
    ,  document.getElementById('app')
)
