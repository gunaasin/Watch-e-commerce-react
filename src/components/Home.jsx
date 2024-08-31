import { Fotterdata } from "./Fotterdata"


export const Home = () => {
  return (
    <div className="video-background">

      <video autoPlay muted loop className="background-video">
        <source src="3d.mp4" type="video/mp4" />
      </video>
      <div className="cont">
        <div className="content">
          <p className="home-p"><span className="home-p-c">Limited to </span>50 Pices</p>

          <div className="home-div">
            <p className="home-div-p">gn - 153r - k</p>
            <h1 className="home-div-h">skeltec</h1>
          </div>

          <div className="home-end">
            <p className="home-end-p">$ 2500.0</p>
            <button className="home-end-but">buy now</button>
          </div>
        </div>

        <div className="content-side">
          <p className="side-p">Available</p>
          <div className="side-end">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-share-from-square"></i>
            <i className="fa-solid fa-lines-leaning"></i>
          </div>
        </div>

      </div>

      <div className="best-selles">

        <h3 className="best">BEST SELLERS</h3>
        <div className="salses-model">
          <Fotterdata />
        </div>
      </div>

      <div className="heading">
        <h1>Authentic home of fashion & luxury watch brands.</h1>
      </div>

      <div className="endofera">
        <div className="endoff-1 ">
          <h3>Aqua Terra in Black</h3>
          <p>Presented in three sizes, this classic Seamaster collection is crafted with timeless black dials featuring a modern lacquered finish.</p>
          <div className="endoff-2">
          <p>The speed an arrow can travel upon leaving a recurve bow during a shot in the Archery competition.</p>
          <img src="logo_w.png" alt="" />
          </div>
        </div>

      </div>


    </div>
  )
}
