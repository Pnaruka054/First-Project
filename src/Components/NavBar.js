import './NavBar.css'

function NavBar() {
    return (
        <div className='NavBarDiv'>
            <div className='NavBarImageDiv'>
                <img src='logo.png' />
            </div>
            <div className='NavBarUlliDiv'>
                <ul>
                    <li><a href='#Hotels'>Hotals</a></li>
                    <li><a href='#Cars'>Cars</a></li>
                    <li><a href='#C2'>Guids</a></li>
                </ul>
            </div>
            <div className='NavBarCallEmail'>
                <div>
                    <i className ="fa-regular fa-phone"></i>
                    <a href='#'>+91 9351130765</a>
                </div>
                <div>
                    <i className ="fa-regular fa-envelope"></i>
                    <a href='#'>lksdhfosdfs@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar