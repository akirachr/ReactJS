import React, {Component} from 'react';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {customerName: '', customerGender: ''};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    const value = event.target.value;
    this.setState({customerName: value});
  }
  handleChange2(event) {
    const value = event.target.value;
    this.setState({customerGender: value});
  }

  handleSubmit(event) {
    alert(this.state.customerName + ':' + this.state.customerGender);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.customerName} onChange={this.handleChange1} />
        </label>
        <label>
          Gender:
          <input type="text" value={this.state.customerGender} onChange={this.handleChange2} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Test;
