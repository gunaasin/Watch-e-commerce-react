import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/Product/product/${id}`);
    };
    return (
        <div className="product-main">
            <div className="product-filter">
                <div className="brand">
                    <h3 className="brand-c">Brands</h3>
                    
                    <label htmlFor="" className='brand-c1'><input type="checkbox"  name="" id=""/>  Fastrack </label>
                    
                    <label htmlFor="" className='brand-c1'><input type="checkbox" name="" id="" />  SKMEI</label>
                    
                    <label htmlFor="" className='brand-c1'><input type="checkbox" name="" id="" />  Citizen</label>
                    
                    <label htmlFor="" className='brand-c1'><input type="checkbox" name="" id="" />  Fire - Boltt</label>
                    
                    <label htmlFor="" className='brand-c1'><input type="checkbox" name="" id="" />  TIMEX</label>
                    
                    <label htmlFor="" className='brand-c1'><input type="checkbox" name="" id="" />  Sonata </label>
                    
                    <label htmlFor="" className='brand-c1'><input type="checkbox" name="" id="" />  Titan</label>
                    
                    <label htmlFor="" className='brand-c1'><input className="ch"type="checkbox" name="" id="" />  Casio</label>
                </div>
                <div className="gender">
                    <h3 className='brand-c'>Category</h3>
                    
                    <label htmlFor="" className='brand-c1'><input type="checkbox" name="" id="" />  Mens Watches</label>
                    
                    <label htmlFor="" className='brand-c1'><input type="checkbox" name="" id="" />  Womens Watches</label>
                </div>
                <div className="size">
                <span className="custom-checkbox"></span>
                    <h3 className='size-c'>Watch Case Diameter</h3>
                    <div className="box">
                    <p className='size-bo'>19 mm</p>
                    <p className='size-bo'>25 mm</p>
                    <p className='size-bo'>35 mm</p>
                    <p className='size-bo'>40 mm</p>
                    <p className='size-bo'>45 mm</p>
                    <p className='size-bo'>55 mm</p>
                    <p className='size-bo'>60 mm</p>
                    {/* <p className='size-box'>65 mm</p> */}
                
                    </div>
                   
                </div>
            </div>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item" onClick={() => handleClick(product.id)}>
                        <img src={product.imageUrl} alt={`Product ${product.id}`} className="product-image" />
                        <h2>{product.price}</h2>
                        <p>{product.description}</p>
                        <div className="cf"> </div>
                    </div>
                ))}
              <div className='nav-button'>
                <i className="nav-button-i fa-solid fa-caret-left"></i>
                 <p className='count'>1/2</p>
                <i className="nav-button-i fa-solid fa-caret-right"></i>
              </div>
              <div className="compact-footer"></div>
            </div>

        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            imageUrl: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ProductList;
