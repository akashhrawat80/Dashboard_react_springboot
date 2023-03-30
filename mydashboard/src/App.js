import './App.css';
import Dash from './components/Dash/Dash';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar></Sidebar>
        <Dash></Dash>
      </div>
    </div>
  );
}

export default App;
