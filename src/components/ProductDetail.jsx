import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import i1 from '../assets/brand.png';
import i2 from '../assets/cod.png';
import i3 from '../assets/inter.png';
import i4 from '../assets/replacement.png';
import i5 from '../assets/shield.png';


const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product-view'>
      <div className="product-detail">
        <img src={product.imageUrl} alt={`Product ${product.id}`} className="product-image" />
        <h3>{product.description}</h3>
      </div>

      <div className="product-info">
        <div className='product-infos'>
          <h3>{product.description}</h3>
          <p className='limit'>Limited time deal</p>
          <h2><span className='discount'>&nbsp;&nbsp;&nbsp;&nbsp;-17 % &nbsp;</span>{product.price}</h2>
          <p>Inclusive of all taxes</p>
          <p><span className='emi'>EMI</span> starts at ₹157. No Cost EMI available</p>
          <p>{product.details}</p>
          <div className="buttons"><button className='order'>add to cart &nbsp;<i className="fa-solid fa-cart-plus"></i></button>
            <button className='order1'>buy now &nbsp;<i className="fa-solid fa-cart-shopping"></i></button></div>
        </div>
        <table>
          <h3>Product details:</h3>
          <tr>
            <th>Case Diameter</th>
            <td>42 Millimetres</td>
          </tr>
          <tr>
            <th>Band Colour</th>
            <td>Two Tone</td>
          </tr>
          <tr>
            <th>Warranty Type</th>
            <td>Manufacturer</td>
          </tr>
          <tr>
            <th>Item Weight</th>
            <td>50 Grams</td>
          </tr>
          <div className='brand-i'>
            <img src={i1} alt="" className='imgages' />
            <img src={i2} alt="" className='imgages' />
            <img src={i3} alt="" className='imgages' />
            <img src={i4} alt="" className='imgages' />
            <img src={i5} alt="" className='imgages' />
          </div>
        </table>
        

      </div>


    </div>

  );
};

ProductDetail.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      details: PropTypes.string,
    })
  ).isRequired,
};

export default ProductDetail;
