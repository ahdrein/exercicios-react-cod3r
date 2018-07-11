import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(props){
        super(props)
        this.state = { value: props.initalValue }
    }

    sum(delta) {
        //this.setState({ ...this.value, value: this.state.value + delta})
        this.setState({value: this.state.value + delta})
    }

    render() {
        return (
            <h1>{this.props.value}</h1>
            // Os props são somente leitura, não podem ser modificados
        )
    }
}