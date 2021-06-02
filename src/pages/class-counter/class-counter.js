import React from 'react';

import PropTypes from 'prop-types';
import Button from '../../components/ui/button';

class ClassCounter extends React.Component {
  state = {
    count: 0,
    prevTitle: '',
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      count: this.props.initialValue,
      prevTitle: document.title,
    });

    document.title = this.props.title;
  }

  onIncrement = (value) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + value,
      };
    });
  };
  onDecrement(value) {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count - value,
      };
    });
  }
  onReset() {
    this.setState({
      ...this.state,
      count: 0,
    });
  }

  componentWillUnmount() {
    document.title = this.state.prevTitle;
  }

  render() {
    return (
      <div className="row">
        <h2 className="text-white">{this.props.title}</h2>
        <hr />
        <h4>Counted - {this.state.count}</h4>
        <div className="col-4 d-flex bg-light p-3 justify-content-between">
          <Button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => this.onIncrement(1)}
            text="+1"
          />

          <Button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => this.onIncrement(5)}
            text="+5"
          />

          <Button
            type="button"
            className="btn btn-outline-success"
            onClick={this.onReset.bind(this)}
            text="Reset Counter"
          />

          <Button
            type="button"
            className="btn btn-outline-danger"
            onClick={this.onDecrement.bind(this, 5)}
            text="-5"
          />

          <Button
            type="button"
            className="btn btn-outline-warning"
            onClick={this.onDecrement.bind(this, 1)}
            text="-1"
          />
        </div>
      </div>
    );
  }
}

ClassCounter.propTypes = {
  title: PropTypes.string.isRequired,
  initialValue: PropTypes.number,
};

export default ClassCounter;
