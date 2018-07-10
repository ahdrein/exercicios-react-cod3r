import React from 'react'

export default props => (
    <div>
       <h1>Família {props.lastName}</h1>
       {props.children}
       {React.cloneElement(props.children, {...props})} 
       // Funciona quando se passa apenas um unico elemento
       // passar o props do pai atravéz do operador spread para não passar o próprio elemento
    </div>
)