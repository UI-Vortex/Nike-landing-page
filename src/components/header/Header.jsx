import "./header.css"
import NikeLogo from "../img/NikeLogo.png"
import shopButton from "../img/shopButton.png"

export default function Header() {
    return (
        <div>
            <header>
                <nav className="navbar1">
                    <a href="#!" className="nike-logo">
                        <h3 className="Nike-h3">NIKE</h3>
                        <img src={NikeLogo} alt="" />
                    </a>
                    <div className="dominant">
                        <ul className="item-list">
                            <li className="item">
                                <a href="#!" className="link">Men</a>
                            </li>
                            <li className="item">
                                <a href="#!" className="link">Women</a>
                            </li>
                            <li className="item">
                                <a href="#!" className="link">Kids</a>
                            </li>
                            <li className="item">
                                <a href="#!" className="link">Customise</a>
                            </li>
                        </ul>
                        <div className="search">
                            <div className="search-glass">
                                <input type="text" placeholder="Search" />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <img src={shopButton} alt="error" />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}