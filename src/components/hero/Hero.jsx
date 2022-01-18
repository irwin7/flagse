import Flag from "../source/Exporter";
import flags from "../source/Source";
import "./hero.css";

function Hero(){
    return(
        <div className="hero">
            <div className="hero__container container">
                <ul className="hero__list">
                    {flags.map((item) => <Flag {...item} />)}
                </ul>
            </div>
        </div>
    )
}

export default Hero;