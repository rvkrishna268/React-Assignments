import landingImage from "../../images/nature.jpg";
import {Link} from "react-router-dom"
import "./landing-page.css";
const Landing =() =>{
    return(
        <>
            <div className="landing">
                <div className="landing-image">
                    <img src={landingImage} alt="landing"></img>
                </div>
                <div className="landing-actions">
                    <div className="landing-text">10x Team 04</div>
                    <Link to="/post-view">
                        <div className="forward">
                            <button className="button">Enter</button>
                        </div> 
                    </Link>
                                      
                </div>
            </div>
        </>
    );   
}
export default Landing;