import {Link} from 'react-router-dom';

const  Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Infinity</h1>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/price">Pricing</Link>
          </div>
        </nav> 
     );
}
 
export default Navbar;