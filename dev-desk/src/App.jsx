import "./App.css";
import ChatPanel from "./components/ChatPanel";
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Form from "./pages/Form";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/form/:id" element={<Form />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
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
