import './header.css'
import logo from "../../img/logo.png"

function Header({ openModal }) {
    return (
        <header className='header'>
            <div className="header-left">
                <img src={logo} alt="логотип" className='logo-img' />
                <div className="header-text">
                    <span className='logo-text1'>Моей дорогой жене</span>
                    <span className='logo-text2'>в помощь</span>
                </div>
            </div>

            <div className="header-right">
                <button className="btn-add truck"
                        onClick={() => openModal('truck')}>Добавить тягач</button>
                <button className="btn-add trailer"
                        onClick={() => openModal('trailer')}>Добавить прицеп</button>
            </div>
        </header>
    );
}

export default Header;