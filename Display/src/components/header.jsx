import Logo from "../assets/images/logo.svg"
import Arrow from "../assets/images/icon-arrow-down.svg"
import "./header.css"

const Header = ()=>{
    return(
      <>
        <div id = "container">
          <div className="lognav">
             <img src= {Logo}></img>
             <nav>Features <img src= {Arrow} ></img></nav>
             <nav>Company <img src= {Arrow} ></img></nav>
             <nav>Careers</nav>
             <nav>About</nav>
          </div>

          <div className="btn">
             <p>Login</p>
             <button>Register</button>
          </div>

        </div>


      </>

    )
}
export default Header