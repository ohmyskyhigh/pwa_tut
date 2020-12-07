import logo from './logo.svg';
import react, {Component, Fragement, createContext} from 'react';
import './App.css';
import PropTypes from 'prop-types'

const BatteryContext = createContext();
const SwitchContext = createContext();

class Leef extends Component {
  constructor(props){
    super(props);
    static contextType = BatteryContext;
  }

  render () {
    const {battery} = this.context;
    return (
      <h1>Battery: {battery}</h1>
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
  constructor(props){
    super(props);
    this.state = {
      battery: 60,
      trueFalse: true
    }
  }

  render(){
    const {battery} = this.state
    console.log(battery)
    return (
      <BatteryContext.Provider value={battery}>
        <Branch />
        <button
          type='button'
          style={{width:'60px'}}
          onClick = {() =>{
              this.setState(
                {battery: battery-1}
              )
          }}>
        press
      </button>
      </BatteryContext.Provider>
    );
  }
}

export default App;
