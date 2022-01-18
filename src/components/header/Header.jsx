import "./header.css";

function Header(){
    return(
        <>
            <header className="header">
                <div className="header__container container">
                <a href="index.html" className="header__link">Where in the world?</a>
                <p className="header__btn"><i className='bx bx-moon'></i> Dark Mode</p>
                </div>
            </header>
        </>
    )
}

export default Header;