
import './App.css';
import Header from "./Components/Header";
import Home from './Components/Home';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import bookStore from './utils/bookStore';

function App() {
  

  return (
    <>
      <Provider store={bookStore}>
        <Header />
        <Outlet />
      </Provider>
      
    </>
  )
}

export default App;
