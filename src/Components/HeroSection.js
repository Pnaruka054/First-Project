import './HeroSection.css'

function HeroSection() {
    return (
        <div style={{ position: 'relative' }}>
            <div className='HeroSectionTextDiv'>
                <div>
                    <h1>Are You Ready...</h1>
                    <p>To explore new things?</p>
                </div>
            </div>
            <div className='HeroSectionBlackDiv'></div>
            <div className='HeroSectionImageDiv'>
                <img className='HeroSectionImageDiv' src='heroimage1.jpg' />
            </div>
        </div>
    )
}

export default HeroSection