import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import HeaderT from './HeaderT';
import AppRouter from './AppRouter';
import CounterRedux from './CounterRedux';


let txt;
const ClickEvent = (e) =>{ 
  console.log(txt);
}
const ChangeEvent = (e) =>{ 
  txt=e.target.value; 
  console.log(txt);
}
const clickHandler = (e) =>{ 
  console.log(e.target); 
  console.log('Hey!!');
}
const getData = (data) =>{
  console.log(data)
}

function App() { 
  return ( 
    <div className="App"> 

      <Router>
        <HeaderT handler={clickHandler}/>
        <AppRouter />
       </Router>
       
     </div> 
     );
}

export default App;
