import logo from './logo.svg';
import './App.css';
import {Heading} from './components/Heading';

function App() {
  const getDataFromChild = (data) => {
    console.log(' data is:', data)
  }
  return (
    <div className="App">
      {/* props - immutable and state - mutable */}
      <Heading title="React batch 56" getDataFromChild={getDataFromChild}/> 
      <p id=""> Welcome </p>
      {/* <Heading title="React batch 55"/> */}
    </div>
  );
}

export default App;
