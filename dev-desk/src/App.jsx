import './App.css';
import ChatPanel from './components/ChatPanel';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import User from './pages/User';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      {/* <User></User>
      <Search></Search> */}
      <ChatPanel></ChatPanel> 

    </div>
  );
}

export default App;
