
export const Service = () => {
  return (
    <div className="service">
      <div className="contact">
        <div className="contact-main">
          <div className="contact-content">
            <h2>Track Your Order</h2>
            <div className="boxxx">
            <div className="left">
              <label htmlFor="">Order Number</label>
              <input type="text" />
              <label htmlFor="">Email or Phone Number</label>
              <input type="text" name="" id="" />
              <button >Track</button>
            </div>

            <div className="line">
                  <div></div>
                  <p>or</p>
                  <div></div>
            </div>

            <div className="right">
              <label htmlFor="">Tracking Number</label>
              <input type="text" name="" id="" />
              <button>Track</button>

              <img  className="logo-im"src="logo_w.png" alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="para">
        <h2>Terms of service</h2>
        <p>By visiting our site and or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>
        <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
        <p>You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.</p>

        <div className="final-para">
        <p className="finalsec">See personalized recommendations</p>
        <button className="finalsec-bu">Sign in</button>
        <p className="finalsec-tx">New customer? <span>Start here.</span></p>
        </div>
      </div>
    </div>
  )
}
