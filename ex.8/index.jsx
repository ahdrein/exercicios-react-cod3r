import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent';


ReactDOM.render(
    <ClassComponent label='Contador' initalValue={10}></ClassComponent>
    ,  document.getElementById('app')
)
