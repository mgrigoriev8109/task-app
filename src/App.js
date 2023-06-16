import React, { Component } from 'react';
import Overview from './components/Overview.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksArray: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let newTask = event.target.value;
    this.setState({
      tasksArray: this.tasksArray.push(newTask)
    })
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label for="task">
            Enter task:
            <input name="userTask" type="text" />
          </label>

          <input type="submit" value="Submit" />
        </form>

        <Overview tasks={this.state.tasksArray} />
      </div>
    );
  }
}

export default App;