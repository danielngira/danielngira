import "./Daniel.css";
import close from "../../assets/images/exit.png";
import minimize from "../../assets/images/minimize.png";
import maximize from "../../assets/images/maximize.png";

type DanielProps = {
    closeWindow: () => void;
}

function Daniel({ closeWindow }: DanielProps) {
    return (
        <>
            <div className="danielContainer">
                <div className="danielHeader">
                    <div>
                        <p>DANIEL.md</p>
                    </div>

                    <div className="danielButton">
                        <button className="danielButton">
                            <img src={minimize} alt="Minimize window" />
                        </button>

                        <button className="danielButton">
                            <img src={maximize} alt="Maximize window" />
                        </button>

                        <button onClick={closeWindow}       className="danielButton">
                            <img src={close} alt="Close window" />
                        </button>
                    </div>
                </div>

                <div className="danielBody">
                    <p> Hello and welcome to my space on the internet</p>
                </div>    
            </div>
        </>
    );
}

export default Daniel

