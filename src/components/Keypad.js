// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {
    constructor(props) {
        super(props)
    
        this.handleKeyUp = this.keyUpHandler.bind(this)
    }

    keyUpHandler() {
        console.log('Entering password...')
    }
    
    render() {
        return (
            <div>
                <input onKeyUp={this.handleKeyUp}
                    type="password"
                />
            </div>
        )
    }
}
