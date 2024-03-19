import './GuidesDetails.css'

function GuidesDetails() {
    const GuidesDetails = [
        {
            GuidesName: 'Girraj Gurjar',
            GuidesLocation: 'Jaipur',
            GuidesLanguage: 'Hindi And English',
            RatingsNumber: '⭐⭐⭐⭐⭐',
            GuidesImage: './GuidesImages/Girraj Gurjar.jpg',
            GuidesExperience: 5
        },
        {
            GuidesName: 'Suresh Meena',
            GuidesLocation: 'Jaipur',
            GuidesLanguage: 'Hindi And English',
            RatingsNumber: '⭐⭐⭐⭐⭐',
            GuidesImage: './GuidesImages/Suresh Meena.jpg',
            GuidesExperience: 5
        },
        {
            GuidesName: 'Hemraj Gurjar',
            GuidesLocation: 'Jaipur',
            GuidesLanguage: 'Hindi',
            RatingsNumber: '⭐⭐⭐⭐⭐',
            GuidesImage: './GuidesImages/Hemraj Gurjar.jpg',
            GuidesExperience: 5
        },
        {
            GuidesName: 'Amer Singh Gurjar',
            GuidesLocation: 'Jaipur',
            GuidesLanguage: 'Hindi',
            RatingsNumber: '⭐⭐⭐⭐⭐',
            GuidesImage: './GuidesImages/Amer Singh Gurjar.jpg',
            GuidesExperience: 5
        },
        {
            GuidesName: 'Amer Singh Gurjar',
            GuidesLocation: 'Jaipur',
            GuidesLanguage: 'Hindi',
            RatingsNumber: '⭐⭐⭐⭐⭐',
            GuidesImage: './GuidesImages/Amer Singh Gurjar.jpg',
            GuidesExperience: 5
        },
        {
            GuidesName: 'Rohit Raj Meena',
            GuidesLocation: 'Jaipur',
            GuidesLanguage: 'Hindi',
            RatingsNumber: '⭐⭐⭐⭐⭐',
            GuidesImage: './GuidesImages/Rohit Raj Meena.jpg',
            GuidesExperience: 2
        },
        {
            GuidesName: 'Shyam Singh Chouhan',
            GuidesLocation: 'Jaipur',
            GuidesLanguage: 'Hindi And English',
            RatingsNumber: '⭐⭐⭐⭐⭐',
            GuidesImage: './GuidesImages/Shyam Singh Chouhan.jpg',
            GuidesExperience: 5
        }
    ]
    return (
        <div>
            {
                GuidesDetails.map(
                    (item, i) => (
                        <div key={i} className="GuidesDetailsDiv">
                            <div className='GuidesInfo'>
                                <div className='GuidesImage'>
                                    <img src={item.GuidesImage} alt='Guide'/>
                                </div>
                                <div className='GuidesNameAndLocation'>
                                    <p>{item.GuidesName}</p>
                                    <p>{item.GuidesLocation}</p>
                                    <p>{item.RatingsNumber}</p>
                                </div>
                                <div className='GuidesExperience'>
                                    <div className='GuidesExperienceFirstDiv'>
                                        <p>{item.GuidesExperience}</p>
                                    </div>
                                    <div className='GuidesExperienceSecoundDiv'>
                                        <div>Years +</div>
                                        <div>Experience</div>
                                    </div>
                                </div>
                            </div>
                            <div className='GuidesLanguage'>
                                <p>Language - {item.GuidesLanguage}</p>
                            </div>
                        </div>
                    )
                )
            }
        </div >
    )
}

export default GuidesDetails