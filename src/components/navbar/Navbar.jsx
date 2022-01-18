import "./navbar.css";

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar__container container">
                <input className="navbar__input" type="search" name="search" placeholder="Search for a country…"/>
                <select className="navbar__select">
                    <option>Filter by Region</option>
                    <option>Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar;