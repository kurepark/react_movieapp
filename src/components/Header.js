import {Link} from "react-router-dom";
import "../css/header.css";

function Header() {
    return (
        <div>
            <div className="header" role="hader">
                <Link to="/" className="header_logo">React Movie Rank 🎬</Link>
            </div>
        </div>
    )
}

export default Header;