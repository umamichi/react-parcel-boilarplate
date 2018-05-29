import React, { Component } from 'react';
import Main from '../components/Main';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillReceiveProps(nextProps) {
  }

  componentWillMount() {
  }

  componentDidMount() {
  }
  
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

App.propTypes = {
};