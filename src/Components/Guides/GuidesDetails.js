import './GuidesDetails.css'

function GuidesDetails() {
    const GuidesDetails = [
        {
            GuidesName: 'Best Western Grant Park Hotel',
            GuidesLocation: '124 E Huron St, Chicago',
            GuidesDiscription: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des.',
            RatingsNumber: '⭐⭐⭐⭐⭐',
            GuidesImage: 'man1.png'
        },
        {
            GuidesName: 'Best Western Grant Park Hotel',
            GuidesLocation: '124 E Huron St, Chicago',
            GuidesDiscription: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des.',
            RatingsNumber: '⭐⭐⭐⭐⭐',
            GuidesImage: 'man1.png'
        },
        {
            GuidesName: 'Best Western Grant Park Hotel',
            GuidesLocation: '124 E Huron St, Chicago',
            GuidesDiscription: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des.',
            RatingsNumber: '⭐⭐⭐⭐⭐',
            GuidesImage: 'man1.png'
        },
        {
            GuidesName: 'Best Western Grant Park Hotel',
            GuidesLocation: '124 E Huron St, Chicago',
            GuidesDiscription: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des.',
            RatingsNumber: '⭐⭐⭐⭐⭐',
            GuidesImage: 'man1.png'
        },
        {
            GuidesName: 'Best Western Grant Park Hotel',
            GuidesLocation: '124 E Huron St, Chicago',
            GuidesDiscription: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des.',
            RatingsNumber: '⭐⭐⭐⭐⭐',
            GuidesImage: 'man1.png'
        }
    ]
    return (
        <div>
            {
                GuidesDetails.map(
                    (item, i) => (
                        <div key={i} className="GuidesDetailsDiv">
                            <div className='GuidesDiscription'>
                                <p>{item.GuidesDiscription}</p>
                            </div>
                            <div className='GuidesInfo'>
                                <div className='GuidesImage'>
                                    <img src={item.GuidesImage} />
                                </div>
                                <div className='GuidesNameAndLocation'>
                                    <p>{item.GuidesName}</p>
                                    <p>{item.GuidesLocation}</p>
                                    <p>{item.RatingsNumber}</p>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div >
    )
}

export default GuidesDetails