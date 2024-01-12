import "../styles/home.css";
import landingVideo from "../video/landing-video.mp4";
import landingPic from '../images/landing-pic.jpeg'
import Footer from "../components/Footer";
import Typewriter from 'typewriter-effect'
import 'animate.css'

const HomePage = () => {
  return (

    <>
        <div className="home__responsiveLandingPage">
        <div className="home__responsiveVideoOverlay">
          <video
          src={landingVideo}
          className="home__landingVideo"
          loop
          autoPlay
          muted
        ></video>
        <div className="home__responsiveWelcomeText">
          <h1><Typewriter onInit={(typewriter) => typewriter.typeString('welcome').start()} /></h1>
          <h1><Typewriter onInit={(typewriter) => typewriter.pauseFor(1000).typeString('to').start()}/></h1>
          <h1><Typewriter onInit={(typewriter) => typewriter.pauseFor(1200).typeString('margy glow').start()}/></h1>
          <p className="animate__animated animate__fadeInDown">Shop quality, safe and effective skincare product with us </p>
        </div>
        </div>

        <div className="home__desktopLandingImage" style={{backgroundImage: `url(${landingPic})`}}>
          <div className="home__desktopOverLay"></div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;