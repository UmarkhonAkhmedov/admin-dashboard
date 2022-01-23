import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import "./App.css"
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import UserList from "./pages/userList/UserList";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/" exact element={<Home/>}/>
          <Route path="/users" exact element={<UserList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
