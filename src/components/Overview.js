import React, { Component } from 'react'

class Overview extends Component {
    constructor() {
        super(props)
    }

    render() {
        return (
            <div className="Overview">
                {this.props.task}
            </div>
        )
    }
}

export default Overview