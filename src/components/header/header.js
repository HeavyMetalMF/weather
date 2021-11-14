import {NavLink} from "react-router-dom";
import c from './header.module.css';
import main from './../../App.module.css';
import logo from  "./../../assets/img/weatherHome.png"


const Header = (props) => {
    return(
        <nav className='fixed-top'>
            <header className={c.appHeader}>
                <div className={main.container}>
                    <div className={c.nav}>
                        <div className={c.navLogo}>
                            <NavLink to={'/'}> <img className={c.logo} src={logo} /> </NavLink>
                        </div>
                        <div className={c.navLinks}>
                            <NavLink to={'/'}> Home </NavLink>
                            <NavLink to={'/'}> About </NavLink>
                        </div>
                    </div>
                </div>
            </header>
    </nav>

    )
}
export default Header;