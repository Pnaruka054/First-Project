import { useEffect } from 'react'
import './NavBar.css'

function NavBar() {
    function ShowNavBarUlliDivMobileScroll() {
        let NavBarUlliDivMobile = document.getElementById('ShowNavBarUlliDivMobile')
        NavBarUlliDivMobile.classList.remove('ShowNavBarUlliDivMobile')
    }

    document.addEventListener('scroll', ShowNavBarUlliDivMobileScroll)

    function ShowNavBarUlliDivMobile() {
        let NavBarUlliDivMobile = document.getElementById('ShowNavBarUlliDivMobile')
        NavBarUlliDivMobile.classList.add('ShowNavBarUlliDivMobile')
    }
    return (
        <div>
            <div className='NavBarDiv'>
                <div className='NavBarImageDiv'>
                    <img src='logo.png' />
                </div>
                <div className='NavBarCallEmailMobile'>
                    <div>
                        <i className="fa-regular fa-phone"></i>
                        <a href='tel:+91 9351130765'>+91 9351130765</a>
                    </div>
                    <div>
                        <i className="fa-regular fa-envelope"></i>
                        <a href='mailto:lksdhfosdfs@gmail.com'>lksdhfosdfs@gmail.com</a>
                    </div>
                </div>
                <div className='NavBarUlliDiv'>
                    <ul>
                        <li><a href='#Hotels'>Hotals</a></li>
                        <li><a href='#Cars'>Cars</a></li>
                        <li><a href='#Guids'>Guids</a></li>
                    </ul>
                </div>
                <div className='NavBarCallEmail'>
                    <div>
                        <i className="fa-regular fa-phone"></i>
                        <a href='#'>+91 9351130765</a>
                    </div>
                    <div>
                        <i className="fa-regular fa-envelope"></i>
                        <a href='#'>lksdhfosdfs@gmail.com</a>
                    </div>
                </div>
                <div className='NavBarMenu'>
                    <i className="fa-solid fa-bars" onClick={ShowNavBarUlliDivMobile}></i>
                </div>
            </div>
            <div className='NavBarUlliDivMobile' id='ShowNavBarUlliDivMobile'>
                <ul>
                    <li><a href='#Hotels'>Hotals</a></li>
                    <li><a href='#Cars'>Cars</a></li>
                    <li><a href='#Guides'>Guids</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar