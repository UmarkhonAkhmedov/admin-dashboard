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
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/" exact element={<Home/>}/>
          <Route path="/users" exact element={<UserList/>}/>
          <Route path="/user/:userId" exact element={<User/>}/>
          <Route path="/newUser" exact element={<NewUser/>}/>
          <Route path="/products" exact element={<ProductList/>}/>
          <Route path="/products/:productsId" exact element={<NewUser/>}/>
          <Route path="/newproduct" exact element={<NewUser/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
