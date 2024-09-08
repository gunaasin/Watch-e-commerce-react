// import { Fotterdata } from "./Fotterdata"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="fotter-p">
        <div className="first-fo">
          <a href="https://gunaportfoliogn.vercel.app/">@ Clavder - GuNa - 2024</a>
        </div>
        <div className="footer-box1">
        <h3>
            Connect with Us
          </h3>
          <ul>
          
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-x-twitter"></i></li>
            <li><i className="fa-brands fa-facebook"></i></li>
            <li>
              <a href="mailto:guna.asin06@gmail.com" >
              <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="https://gunaportfoliogn.vercel.app/" target="_blank">
              <i className="fa-solid fa-terminal"></i>
                </a></li>
          </ul>
        </div>
        <div className="footer-box2">
         
          <ul>
          <h3>Get to Know Us</h3>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>service</li>
          </ul>
        </div>
        <div className="footer-box3">
        
          <ul>
          <h3>
            Let Us Help You
          </h3>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Recalls and Product Safety</li>
            <li>100% Purchase Protection</li>
            <li>Help</li>
            <li>App Download</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
