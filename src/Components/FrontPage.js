import Navbar from "./Navbar";
import App from "../App";
import '../css/navbar.css';
import { Link } from "react-router-dom";

function FrontPage(){
    return(
        <div>
        <div>
                <div>
                    <Navbar />
                </div>
        </div>
        <div className="Components-App">
            <App />
        </div>
        </div>
    );
}
export default FrontPage;