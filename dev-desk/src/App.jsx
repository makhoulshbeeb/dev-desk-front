import "./App.css";
import ChatPanel from "./components/ChatPanel";
import Header from "./components/Header";
import Editor from "./pages/Editor";
import Home from "./pages/Home";
import Search from "./pages/Search";
import User from "./pages/User";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/editor" element={<Editor></Editor>}>
            {" "}
          </Route>
          <Route path="/user" element={<User></User>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/form/:id" element={<Form />} />
        </Routes>
        <ChatPanel></ChatPanel>
      </Router>
    </div>
  );
}

export default App;

{
  /* <Header></Header>
      <Home></Home>
      <Search></Search>
      <ChatPanel></ChatPanel> */
}
