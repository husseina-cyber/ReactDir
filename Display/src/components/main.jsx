import Image from "../assets/images/image-hero-desktop.png"
import "./main.css"


const Main = ()=>{
    return(
        <>
          <div id = "body">
            <div className= "content">
                <h1>Make 
                    <br/>
                    Remote Work</h1>
                <p>
                    Get your team in sync, no matter your location.
                    <br/>
                    Streamline processes, craete team rituals, and 
                    <br/>
                    watch productivity soar.

                </p>

                <button>Learn more</button>

            </div>

            <div className="image">
                <img src ={Image} alt=""></img> 

            </div>

          </div>
        </>
    )
}
export default Main