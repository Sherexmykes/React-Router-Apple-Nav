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
      this.setState({data: dummyData});
    }
      render() {
        return (
          <div className="App">
            <Route path="/" component={NavWrapper} />
            <Route
              path="/"
              render={props => <NavWrapper {...props} data={this.state.data} />}
            />
          </div>
        );
      }
    }
      export default App;