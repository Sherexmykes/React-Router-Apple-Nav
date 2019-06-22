import React, {Component} from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper';

class App extends Component {
    constructor() {
      super();
      this.state = {
        data: [],
      };
    }
  
    componentDidMount() {
      this.setState({data: dummy