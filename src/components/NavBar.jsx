import { NavLink } from "react-router-dom";

    const NavBar = () => {
    return (
        <ul className="nav justify-content-evenly">
            <li className="nav-item active">
            <NavLink className="nav-link text-secondary" activeclassname="text-dark fw-bold" style={{fontFamily : "RazerF5"}} to="/category/audio">Audio</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/category/mices">Mices</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/category/keyboards">Keyboard</NavLink>
            </li>
            <li className="nav-item">  
            <NavLink className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">Speakers</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">Laptop</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">Services</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">Community</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link text-secondary" style={{fontFamily : "RazerF5"}} to="/">Support</NavLink>
            </li>
        </ul>
    )
}

export default NavBar;