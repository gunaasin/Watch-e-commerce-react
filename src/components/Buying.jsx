import { Routes, Route } from 'react-router-dom';
import ProductList from './ProductList'; 
import ProductDetail from './ProductDetail'; 
// import '../assets/watch-ani1.gif';
const Buying = () => {
  const products = [
    { id: 1, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5f106e190402637.65ba53464937e.png', price: '$ 299.99', description: ' Sonata A-51k', details: 'luxury watch for men: Cool colorful blue stroke dial, 42MM Big face dial with date window, easy to read, classic business style, suitable for every mature man.' },
    { id: 2, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/270a3b187539751.658b26ad03c88.png', price: '$ 399.99', description: 'TIMEWEAR', details: 'Tailored for both teenage and mature males, whether youre dressing up for formal occasions or keeping it casual. ' },
    { id: 3, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb7411187539751.658b26ad02ebb.png', price: '$ 499.99', description: 'Casio', details: 'Automatic watches for men:No need to use battery, self-winding mechanical movement. ' },
    { id: 4, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e83b8e204456113.66a9333958385.jpg', price: '$ 399.99', description: ' Titan', details: 'Perfect Gift for Men: A handsome man naturally needs a beautiful watch that matches his level of elegance.' },
    { id: 5, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/051ea797897815.5ecfd6c13d0a9.png', price: '$ 499.99', description: ' Citizen', details: 'Multiple functions: The stainless steel bezel incorporates high-precision seamless technology, offering waterproof functionalitPerfect Gift for Men: A handsome man naturally needs a beautiful watch that matches his level of elegance.' },
    { id: 6, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9cc7a9172036187.64785fd78c694.png', price: '$ 299.99', description: 'TIMEWEAR', details: 'Tailored for both teenage and mature males, whether youre dressing up for formal occasions or keeping it casual. ' },
    { id: 7, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/643195173910877.6498ac9a9f93f.png', price: '$ 399.99', description: 'Fastrack', details: 'Perfect Gift for Men: A handsome man naturally needs a beautiful watch that matches his level of elegance.' },
    { id: 8, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3c4846107018097.5f9d30e71bea2.png', price: '$ 499.99', description: 'SKMEI', details: 'Multiple functions: The stainless steel bezel incorporates high-precision seamless technology, offering waterproof functionalitPerfect Gift for Men: A handsome man naturally needs a beautiful watch that matches his level of elegance.' },
    { id: 9, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/01e102184237891.654ddf345ef22.jpg', price: '$ 299.99', description: 'OLEVS', details: 'Automatic watches for men:No need to use battery, self-winding mechanical movement. ' },
    { id: 10, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e20885183203997.653b3a542ad79.png', price: '$ 399.99', description: 'TIMEX', details: 'Automatic watches for men:No need to use battery, self-winding mechanical movement. ' },
    { id: 11, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/c9708d97339313.5ec2e5a687f89.png', price: '$ 499.99', description: 'Victorinox', details: 'Multiple functions: The stainless steel bezel incorporates high-precision seamless technology, offering waterproof functionalitPerfect Gift for Men: A handsome man naturally needs a beautiful watch that matches his level of elegance.' },
    { id: 12, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/0535bc156461059.6367d49abed7c.png', price: '$ 399.99', description: 'TIMEWEAR', details: 'Automatic watches for men:No need to use battery, self-winding mechanical movement. ' },
    { id: 13, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/057fce84353925.5d5a9d304b355.png', price: '$ 299.99', description: ' Titan', details: 'Perfect Gift for Men: A handsome man naturally needs a beautiful watch that matches his level of elegance.' },
    { id: 14, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e20885183203997.653b3a542ad79.png', price: '$ 399.99', description: 'Matrix', details: 'Automatic watches for men:No need to use battery, self-winding mechanical movement. ' },
    { id: 15, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/5b5ea5199857805.6658a30c23aff.png', price: '$ 499.99', description: 'TIMEX', details: 'Multiple functions: The stainless steel bezel incorporates high-precision seamless technology, offering waterproof functionalitPerfect Gift for Men: A handsome man naturally needs a beautiful watch that matches his level of elegance.' },
    { id: 16, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5f106e190402637.65ba53464937e.png', price: '$ 299.99', description: 'Casio', details: 'Tailored for both teenage and mature males, whether youre dressing up for formal occasions or keeping it casual. ' },
    { id: 17, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/270a3b187539751.658b26ad03c88.png', price: '$ 399.99', description: 'OLEVS', details: 'Perfect Gift for Men: A handsome man naturally needs a beautiful watch that matches his level of elegance.' },
    { id: 18, imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb7411187539751.658b26ad02ebb.png', price: '$ 499.99', description: 'Victorinox', details: 'Multiple functions: The stainless steel bezel incorporates high-precision seamless technology, offering waterproof functionalitPerfect Gift for Men: A handsome man naturally needs a beautiful watch that matches his level of elegance.' },
    
  ];

  return (
    <section className='product-page'>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="product/:id" element={<ProductDetail products={products} />} />
      </Routes>
    </section>

  );
};

export default Buying;
