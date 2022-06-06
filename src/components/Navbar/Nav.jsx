import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { menuItems } from './menuItems';
import { Link } from 'react-router-dom';

const Nav = () =>{
    return(
        <>
            <div id="top" className="fixed-top">
                <div className="row">
                    <div className="col-md-12 col-lg-8">
                        <div>
                            <Link to="/"><h1 className="logo">Ecommerce</h1></Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="main-menu">
                            <div className="navbar navbar-expand-lg p-0">
                                <div className="justify-content-between align-items-center">
                                    <ul className="nav navbar-nav">
                                        {menuItems.map((item, index) =>{
                                            return(
                                                <li className={item.cName} key={index}>
                                                    <Link to={item.url}>
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                        <Link to="/carrito"><CartWidget className="nav-item" /></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Nav