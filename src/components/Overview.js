import React, { Component } from 'react'

class Overview extends Component {
    constructor(props) {
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