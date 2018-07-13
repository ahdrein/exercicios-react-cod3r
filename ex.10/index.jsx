import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import fildReducer from './fildReducer';

const reducers = combineReducers({
    // field: () => ({ value: 'Olá' })
    field: fildReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initalValue='Teste'></Field>
    </Provider>
    ,  document.getElementById('app')
)
