import logo from './logo.svg';
import './App.css'; // es6
import {Heading} from './components/Heading';
import Parent from './components/Parent';
import Basic from './components/Basic';
// 18.6.8 => hooks was introduced 
function App() { // functional 

  // props (parent to child ) and state 
  return (
    <div className="App">
      <div id=''> </div>
      <Basic name="divyansh" age="29"/> 
      <Basic name="vignesh" />
    </div>
  );
}

export default App;

