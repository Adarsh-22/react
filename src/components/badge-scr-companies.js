import Credlogo from '../images/credlogo.png';
import Growlogo from '../images/growwlogo.png';
import Zomatologo from '../images/zomatologo.png';
import Facebooklogo from '../images/facebooklogo.png';
import Starviclogo from '../images/starviclogo.png';
import Flipkartlogo from '../images/flipkartlogo.png';


const BadgeCompanies = () => {
    return ( 
        <div className="badge-companies">
            <span>Top Product Companies that hire full stack Developers</span>
            <div className="comp-grid ">
                <div className="comp-grid-item flex-center ">
                    <img className="comp-img" src={Credlogo} alt="" />
                </div>
                
                <div className="comp-grid-item flex-center ">
                    <img className="comp-img" src={Zomatologo} alt="" />
                </div>
                <div className="comp-grid-item flex-center ">
                    <img className="small-img" src={Growlogo} alt="" />
                </div>
                
            </div>
            <div className="comp-grid">
                <div className="comp-grid-item flex-center ">
                    <img className="big-img" src={Facebooklogo} alt="" />
                </div>
                <div className="comp-grid-item flex-center ">
                    <img className="comp-img" src={Starviclogo} alt="" />
                </div>
                <div className="comp-img" className="comp-grid-item flex-center ">
                    <img className="small-img" src={Flipkartlogo} alt="" />
                </div>    

            </div>
        </div>
     );
}
 
export default BadgeCompanies;