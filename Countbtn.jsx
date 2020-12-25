import React, { PureComponent } from 'react';

class Countbtn extends PureComponent {
  state = {
    count : 0
  }
  handleClick = () => {
    this.setState(prevState => ({count:prevState.count + 1}))
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.count}
      </button>
    );
  }
}

export default Countbtn;