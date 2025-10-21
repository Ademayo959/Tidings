import logo from "./img/logo.png";
import bars from "./img/bars.png"
const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div>
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="navLinks">
                <p className="navLink">Latest</p>
                <p className="navLink">About</p>
                <p className="navLink">Blogs</p>
                <p className="navLink">Pages</p>
            </div>
            <div>
                <button className="navBtn">Sign Up</button>
            </div>
        </div>
     );
}
 
export default Navbar;