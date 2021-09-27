
import './App.css';
import Brands from './components/Brands/Brands';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header></Header>
      {/* body */}
      <Brands></Brands>
    </div>
  );
}

export default App;
