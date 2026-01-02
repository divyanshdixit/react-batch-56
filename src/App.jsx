import { createContext, lazy, Suspense, useEffect } from 'react';

import './App.css'; // es6
import Navbar from './components/Navbar';
import Reducers from './components/Reducers';
import Dashboard from './components/Dashboard'; // => 
import Counter from './components/CounterComponent';
import Cart from './components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './redux/Theme/themeSlice';
import Users from './components/Users';
import MemoWithRedux from './components/MemoWithRedux';

export const ThemeContext = createContext("light");

function App() {
  const {mode} = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(toggleTheme())
  }
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  // props (parent to child) and state 
  // outlet => render nested routes (children)
  return (
    
    <ThemeContext.Provider value={mode}>
      <div style={{textAlign: 'center', marginTop: '16px', background: "var(--bg)", color: "var(--text)"}}>
      <Navbar />
      <Reducers />
      <Suspense fallback={'Loading..'}>
        {/* <Dashboard /> */}
      </Suspense>
      <p> Current theme: {mode} </p>
      <button onClick={changeTheme}> Change theme to {`${mode === 'light' ? 'dark' : 'light' }`.toUpperCase()} </button>
      <Counter />
      <Cart />
      <Users />
      <MemoWithRedux />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

