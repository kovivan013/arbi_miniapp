import "../App.css"
import reactLogo from '../assets/react.svg'

function Menu() {
    return (
        <>
            <div className="menu nav">
                <button className="menu btn">
                    <img src={reactLogo} alt="" />
                    <p>Wallet</p>
                </button>
                <button className="menu btn">
                    <img src={reactLogo} alt="" />
                    <p>Friends</p>
                </button>
                <button className="menu btn">
                    <img src={reactLogo} alt="" />
                    <p>Home</p>
                </button>
                <button className="menu btn">
                    <img src={reactLogo} alt="" />
                    <p>Signals</p>
                </button>
                <button className="menu btn">
                    <img src={reactLogo} alt="" />
                    <p>More</p>
                </button>
            </div>
            <nav className="menu">
                <ul className="menu-list">
                    <li className="menu-item"><a href="#">Главная</a></li>
                    <li className="menu-item"><a href="#">О нас</a></li>
                    <li className="menu-item"><a href="#">Услуги</a></li>
                    <li className="menu-item"><a href="#">Цены</a></li>
                    <li className="menu-item"><a href="#">Контакты</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu