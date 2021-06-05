import React from 'react';

import PropTypes from 'prop-types';
import Button from '../../components/ui/button';

class ClassCounter extends React.Component {
  state = {
    count: 0,
    prevTitle: '',
  };

  componentDidMount() {
    const { initialValue, title } = this.props;
    this.setState((prevState) => ({
      ...prevState,
      count: initialValue,
      prevTitle: document.title,
    }));

    document.title = title;
  }

  componentWillUnmount() {
    const { prevTitle } = this.state;
    document.title = prevTitle;
  }

  onIncrement = (value) => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + value,
    }));
  };

  onDecrement(value) {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count - value,
    }));
  }

  onReset() {
    this.setState((prevState) => ({
      ...prevState,
      count: 0,
    }));
  }

  render() {
    const { title } = this.props;
    const { count } = this.state;

    return (
      <div className="row">
        <h2 className="text-white">{title}</h2>
        <hr />
        <h4>Counted - {count}</h4>
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
            onClick={() => this.onReset()}
            text="Reset Counter"
          />
          <Button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => this.onDecrement(5)}
            text="-5"
          />
          <Button
            type="button"
            className="btn btn-outline-warning"
            onClick={() => this.onDecrement(1)}
            text="-1"
          />
        </div>
      </div>
    );
  }
}

ClassCounter.propTypes = {
  title: PropTypes.string.isRequired,
  initialValue: PropTypes.number.isRequired,
};

export default ClassCounter;
