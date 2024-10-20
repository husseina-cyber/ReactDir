import Data from "../assets/images/client-databiz.svg"
import Audio from "../assets/images/client-audiophile.svg"
import Meet from "../assets/images/client-meet.svg"
import Maker from "../assets/images/client-maker.svg"
import "./footer.css"


const Footer = ()=> {
    return(
        <>
          <div id="bottom">
            <img src = {Data} alt=""></img>
            <img src = {Audio} alt=""></img>
            <img src = {Meet} alt=""></img>
            <img src = {Maker} alt=""></img>

          </div>
        </>
    )
}
export default Footer