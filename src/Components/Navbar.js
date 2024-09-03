import '../css/navbar.css';
import K from './K.jpeg';

function Navbar(){
    return(
        <div className='header'>
            <div className="logo">
                <img src={K} alt="The Kard Logo"/>
            </div>
            <nav className='navbar'>
                <button onClick={()=>{'#'}}>Home</button>
                <button onClick={()=>{'#'}}>Login</button>
                <button onClick={()=>{'#'}}>Register</button>
                <button onClick={()=>{'#'}}>About us</button>
                <button onClick={()=>{'#'}}>Contact us</button>
                    
            </nav>
        </div>
    );
}
export default Navbar; 