// import { Login } from "@mui/icons-material";
import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
// import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/home" element={<Home/>}/>

    </Routes>
   </BrowserRouter>
    </>
  );
};

export default App;
