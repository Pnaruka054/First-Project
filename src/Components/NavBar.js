import { useEffect } from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <div>
            <div className='NavBarDiv'>
                <div className='NavBarImageDiv'>
                    <img src='./Logo.png' />
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
                        <a href='tel:+91 9351585149'>+91 9351585149</a>
                    </div>
                    <div>
                        <i className="fa-regular fa-envelope"></i>
                        <a href='mailto:Pinkcityjaipurtourandtravelsra@gmail.com'>Pinkcityjaipurtourandtravelsra@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar