import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home1 from "./Home1";
import Product1 from "./product1";
import Nopage1 from "./Nooage1";
import Img1 from "./assets/hero.png"
import Img2 from "./assets/react.svg"
import Img3 from "./assets/vite.svg"
function Main1(){
    let arr=[{name:"Hero Image",price:"$100",pic:Img1},
    {name:"React Image",price:"$200",pic:Img2},
    {name:"Vite Image",price:"$300",pic:Img3}]
    return(<Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product1">Product</Link></li>
        </ul>
        <Routes>
            <Route path="/" element={<Home1/>} />
            <Route path="/product1" element={<Product1 info={arr}/>} />
            <Route path="*" element={<Nopage1/>} />
        </Routes>
        </Router> 
    )   
}
export default Main1