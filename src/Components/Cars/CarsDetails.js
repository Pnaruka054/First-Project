import './CarsDetails.css'

function CarsDetails() {
    const CarsDetails = [
        {
            CarsName: 'Toyota Innova Crysta',
            CarsImages: './CarsImages/innova.webp',
            RatingsNumber: '4.8',
            Reviews: '558',
            Seats: '5',
            Lluggage: '4',
            CarsMobileNumber: '9351585149'
        },
        {
            CarsName: 'Maruti Ertiga',
            CarsImages: './CarsImages/Maruti Ertiga.jpg',
            RatingsNumber: '4.6',
            Reviews: '450',
            Seats: '4',
            Lluggage: '4',
            CarsMobileNumber: '9351585149'
        },
        {
            CarsName: 'Maruti Swift Dzire',
            CarsImages: './CarsImages/Maruti Dzire.jpg',
            RatingsNumber: '4.6',
            Reviews: '602',
            Seats: '4',
            Lluggage: '4',
            CarsMobileNumber: '9351585149'
        },
        {
            CarsName: 'Maruti Alto 800',
            CarsImages: './CarsImages/Maruti Alto 800.jpg',
            RatingsNumber: '4.5',
            Reviews: '340',
            Seats: '4',
            Lluggage: '3',
            CarsMobileNumber: '9351585149'
        },
        {
            CarsName: 'Hyundai Aura',
            CarsImages: './CarsImages/Hyundai Aura.jpg',
            RatingsNumber: '4.6',
            Reviews: '245',
            Seats: '3',
            Lluggage: '3',
            CarsMobileNumber: '9351585149'
        },
    ]

    let transformValue = 5

    function StopCarsAnim() {
        let slider = document.getElementById('CarsSliderId');
        if (slider.classList.contains('CarsSlider')) {
            slider.classList.remove('CarsSlider');
        }
    }

    return (
        <div id='CarsSliderId' className='CarsSlider' onClick={StopCarsAnim} >
            {
                CarsDetails.map(
                    (item, i) => (
                        <div key={i} className="CarsDetailsDiv">
                            <div className='Image'>
                                <img src={item.CarsImages} alt='Cars' />
                            </div>
                            <div className='CarsInfo'>
                                <div className='CarsName'>
                                    {item.CarsName}
                                </div>
                                <div className='CarsRatings'>
                                    <p>{item.RatingsNumber}/5</p>
                                    <p>Average</p>
                                    <p>({item.Reviews} Reviews)</p>
                                </div>
                                <div className='CarsGroupsAndBox'>
                                    <div className='CarsGroupIco'>
                                        <i className="fa-regular fa-users-rays"></i>
                                        <p>{item.Seats}</p>
                                    </div>
                                    <div className='CarsBoxIco'>
                                        <i className="fa-regular fa-suitcase"></i>
                                        <p>{item.Lluggage}</p>
                                    </div>
                                </div>
                                <div className='CarsMobileNumber'>
                                    <div>
                                        <i className="fa-solid fa-phone"></i>
                                        <a href={'tel:' + item.CarsMobileNumber}> +91 {item.CarsMobileNumber}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div >
    )
}

export default CarsDetails