
import {Link} from "react-router-dom";

export const Fotterdata = () => {
  return (
    
    <div className="home-product">
     
      <div className="product-item-home">
      <Link to={"/Product"}> <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/5f106e190402637.65ba53464937e.png" alt={`Product `} className="product-image" /> </Link>
        <h2>$ 599.99</h2>
        <p> Citizen</p>
        <div className="cf"> </div>
      </div>
      <div className="product-item-home">
       <Link to={"/Product"}>  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/270a3b187539751.658b26ad03c88.png" alt={`Product `} className="product-image" /></Link>
        <h2>$ 699.99</h2>
        <p> Sonata</p>
        <div className="cf"> </div>
      </div>
      <div className="product-item-home">
       <Link to={"/Product"}>  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/0535bc156461059.6367d49abed7c.png" alt={`Product `} className="product-image" /></Link>
        <h2>$ 899.99</h2>
        <p>Titan</p>
        <div className="cf"> </div>
      </div>
      <div className="product-item-home">
       <Link to={"/Product"}>  <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb7411187539751.658b26ad02ebb.png" alt={`Product `} className="product-image" /></Link>
        <h2>$ 499.99</h2>
        <p> Sonata</p>
        <div className="cf"> </div>
      </div>
      
    </div>

   
  )
}
