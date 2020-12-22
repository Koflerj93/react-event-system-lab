// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    constructor(props) {
        super(props)
    
        this.handleFocus = this.focusHandlder.bind(this)
        this.handleBlur = this.blurHandler.bind(this)
    }

    focusHandlder() {
        console.log('Good!')
    }    

    blurHandler() {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
                <button
                    onFocus={this.handleFocus}
                    onBlur = {this.handleBlur}
                ></button>
            </div>
        )
    }
}
