import "../App.css"
import reactLogo from '../assets/react.svg'

function Menu() {
    return (
        <>
            <div className="menu nav">
                <div className="menu div-btn">
                    <button className="menu btn">
                        <img src={reactLogo} alt="" />
                        <p>Wallet</p>
                    </button>
                </div>
                <div className="menu div-btn">
                    <button className="menu btn">
                        <img src={reactLogo} alt="" />
                        <p>Friends</p>
                    </button>
                </div>
                <div className="menu div-btn">
                    <button className="menu btn">
                        <img src={reactLogo} alt="" />
                        <p>Home</p>
                    </button>
                </div>
                <div className="menu div-btn">
                    <button className="menu btn">
                        <img src={reactLogo} alt="" />
                        <p>Signals</p>
                    </button>
                </div>
                <div className="menu div-btn">
                    <button className="menu btn">
                        <img src={reactLogo} alt="" />
                        <p>More</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Menu