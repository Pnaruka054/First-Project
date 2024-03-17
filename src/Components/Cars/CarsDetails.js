import './CarsDetails.css'

function CarsDetails() {
    const CarsDetails = [
        {
            CarsType: 'Mini',
            CarsName: 'Fiat Fiesta 2 Doors or Similar',
            CarsImages: '1.jpg',
            RatingsNumber: '4.4',
            Reviews: '30',
            Seats: '4',
            Lluggage: '1',
            Price: '2000'
        },
        {
            CarsType: 'Mini',
            CarsName: 'Fiat Fiesta 2 Doors or Similar',
            CarsImages: '1.jpg',
            RatingsNumber: '4.4',
            Reviews: '30',
            Seats: '4',
            Lluggage: '1',
            Price: '2000'
        },
        {
            CarsType: 'Mini',
            CarsName: 'Fiat Fiesta 2 Doors or Similar',
            CarsImages: '1.jpg',
            RatingsNumber: '4.4',
            Reviews: '30',
            Seats: '4',
            Lluggage: '1',
            Price: '2000'
        },
        {
            CarsType: 'Mini',
            CarsName: 'Fiat Fiesta 2 Doors or Similar',
            CarsImages: '1.jpg',
            RatingsNumber: '4.4',
            Reviews: '30',
            Seats: '4',
            Lluggage: '1',
            Price: '2000'
        },
        {
            CarsType: 'Mini',
            CarsName: 'Fiat Fiesta 2 Doors or Similar',
            CarsImages: '1.jpg',
            RatingsNumber: '4.4',
            Reviews: '30',
            Seats: '4',
            Lluggage: '1',
            Price: '2000'
        },
        {
            CarsType: 'Mini',
            CarsName: 'Fiat Fiesta 2 Doors or Similar',
            CarsImages: '1.jpg',
            RatingsNumber: '4.4',
            Reviews: '30',
            Seats: '4',
            Lluggage: '1',
            Price: '2000'
        },
        {
            CarsType: 'Mini',
            CarsName: 'Fiat Fiesta 2 Doors or Similar',
            CarsImages: '1.jpg',
            RatingsNumber: '4.4',
            Reviews: '30',
            Seats: '4',
            Lluggage: '1',
            Price: '2000'
        }
    ]
    return (
        <div>
            {
                CarsDetails.map(
                    (item, i) => (
                        <div key={i} className="CarsDetailsDiv">
                            <div className='Image'>
                                <img src={item.CarsImages} />
                            </div>
                            <div className='CarsInfo'>
                                <div className='CarsName'>
                                    <p>{item.CarsType}</p>
                                    <p>{item.CarsName}</p>
                                </div>
                                <div className='CarsRatings'>
                                    <p>{item.RatingsNumber}/5</p>
                                    <p>Average</p>
                                    <p>({item.Reviews} Reviews)</p>
                                </div>
                                <div className='CarsGroupsAndBox'>
                                    <div className='CarsGroupIco'>
                                        <i className ="fa-regular fa-users-rays"></i>
                                        <p>{item.Seats}</p>
                                    </div>
                                    <div className='CarsBoxIco'>
                                        <i className="fa-regular fa-suitcase"></i>
                                        <p>{item.Lluggage}</p>
                                    </div>
                                </div>
                                <div className='CarsPrice'>
                                    <div>
                                        <p>From</p>
                                        <p>₹{item.Price}</p>
                                    </div>
                                    <div>
                                        <p>Per Day</p>
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