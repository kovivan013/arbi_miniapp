import "../App.css"

function Menu() {
    return (
        <>
            <nav className="menu">
                <ul className="menu-list">
                    <li className="menu-item"><a href="#">Wallet</a></li>
                    <li className="menu-item"><a href="#">Friends</a></li>
                    <li className="menu-item"><a href="#">Home</a></li>
                    <li className="menu-item"><a href="#">Signals</a></li>
                    <li className="menu-item"><a href="#">More</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu