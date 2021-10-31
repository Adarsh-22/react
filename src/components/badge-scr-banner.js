import '../index.css';
import Badge from '../images/badge.png'
import Ellipse1 from '../images/Ellipse1.png'
import Ellipse2 from '../images/Ellipse2.png'

const BadgeBanner = () => {
    return ( 
        <div>
            <div className={`badge-banner flex-center `}>
                {/* <div className="topbar-left"></div>
                <div className="topbar-right"></div> */}
                <img className={`badge-img`} src={Badge} alt="" />
                <img className ={`badge-ellipse1`} src={Ellipse1} alt="" />
                <img className ={`badge-ellipse2`} src={Ellipse2} alt="" />
                
            </div>
            <div className="badge-banner-content center-align">
                <span ClassName={`banner-h1`}>Awesome!</span>
                <p>You are Going to be a Full Stack Developer</p>
            </div>
        </div>
     );
}
 
export default BadgeBanner;