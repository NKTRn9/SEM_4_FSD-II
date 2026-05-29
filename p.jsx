// Create react app to pass product image, name and price as properties
//  from one component to another component. Add an array of objects with 
// pic, name and price properties of 2 products. Display
//  Image name and price of the products in browser using map method. (props+ map)

import P1 from "./p1"
import img1 from "./assets/hero.png"
import img2 from "./assets/react.svg"
function P(){
    const prod=[{pic:img1, name:"hero", price:1000},
                {pic:img2, name:"react", price:2000}]
    return(<P1 info={prod} />)            
}
export default P;