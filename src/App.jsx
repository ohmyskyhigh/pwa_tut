import logo from './logo.svg';
import react, {Component, Fragement, createContext} from 'react';
import './App.css';
import PropTypes from 'prop-types'

const BatteryContext = createContext();

class Leef extends Component {
  render () {
    return (
      <BatteryContext.Consumer >
        {
          (battery) => <h1>Battery: {battery}</h1>
        }
      </BatteryContext.Consumer >
    );
  };
}


class Branch extends Component {
  render () {
    return (
      <Leef />
    )
  }
}


class App extends Component {
  render(){
    return (
      <BatteryContext.Provider value={60}>
        <Branch />
      </BatteryContext.Provider>
    );
  }
}

export default App;
