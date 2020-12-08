
import react, {useEffect, useState} from 'react';
import './App.css';
import PropTypes from 'prop-types'


function App (){
  const [count, setCount] = useState(0);
  const [name, setName] = useState('mike');

  return (
    <div>
      <button
        type='button'
        onClick={()=>
          {setCount(count+1);
           setName('john');}}
      >
        click here {count}
      </button>
      <div>
        {name}
      </div>
    </div>

  )
}


export default App;
