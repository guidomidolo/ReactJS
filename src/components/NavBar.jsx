import { Link } from "react-router-dom";

    const NavBar = () => {
    return (
        <ul className="nav justify-content-evenly">
            <li className="nav-item active">
            <Link className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">Store</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">PC</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">Console</Link>
            </li>
            <li className="nav-item">  
            <Link className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">Mobile</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">Lifestyle</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">Services</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">Community</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">Support</Link>
            </li>
        </ul>
    )
}

export default NavBar;