import React, { Component } from 'react'

export default class Field extends Component {

    constructor(props){
        super(props)
        this.state = { value: props.initalValue }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <label htmlFor="">{this.state.value}</label><br/>
                <input onChange={this.handleChange} value={this.state.value}/>
            </div>
        )
    }
}