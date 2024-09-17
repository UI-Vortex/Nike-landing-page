import "./main.css"
import Shoes from "../img/nike-shoes.png"

export default function Main() {
    return (
        <div>
            <main>
                <div className="dominator">
                    <div className="nike-texts">
                        <h1>JUST DO IT</h1>
                        <p>Innovated to withstand your toughest matches, this updated design puts flexible, durable materials exactly where they're needed most.
                        </p>
                        <button>SHOP NOW</button>
                    </div>
                    <div className="nike-images">
                        <img src={Shoes} alt="error" />
                        
                    </div>
                </div>
            </main>
        </div>
    )
}