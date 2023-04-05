// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
let data =require("../src/Data/data.json");
function App() {
  return (
    <div className="App">
      <Home data ={data}/>
    </div>
  );
}

export default App;
