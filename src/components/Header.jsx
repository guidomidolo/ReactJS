import NavBar from "./NavBar";
import LogoRazer from "./images/logoRazer.png"
import CartWidget from "./CartWidget";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-dark align-items-center"  style={{borderBottom: "2px solid #44d62c"}}>
                <div className="col-md-2 text-center">
                    <img src={LogoRazer} alt={"Razer Gaming x Coderhouse"} width={150}/>
                </div>
                <div className="col-md-9 text-center">
                    <NavBar fuente={"RazerF5"}/>
                </div>
                <div className="col-md-1 text-center text-white">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;