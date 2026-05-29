import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import Shop from "./Shop"
import Contact from "./Contant"
import Nopage from "./Nopage"
function My(){
    return(<Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Nopage />} />
        </Routes>
    </Router>
)}
export default My;