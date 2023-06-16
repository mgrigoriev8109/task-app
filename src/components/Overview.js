import React, { Component } from 'react'

class Overview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const taskItems = this.props.tasks.map(task =>
            <li>
                {task}
            </li>
            );
        return (
            <div className="Overview">
                {taskItems}
            </div>
        )
    }
}

export default Overview