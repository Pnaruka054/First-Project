import './HotelsDetails.css'

function HotelsDetails() {
    const HotelsDetails = [
        {
            HotelsName: 'Best Western Grant Park Hotel',
            HotelsLocation: '124 E Huron St, Chicago',
            RatingsNumber: '4.4',
            Reviews: '30',
            Price: '2000'
        },
        {
            HotelsName: 'Best Western Grant Park Hotel',
            HotelsLocation: '124 E Huron St, Chicago',
            RatingsNumber: '4.4',
            Reviews: '30',
            Price: '2000'
        },
        {
            HotelsName: 'Best Western Grant Park Hotel',
            HotelsLocation: '124 E Huron St, Chicago',
            RatingsNumber: '4.4',
            Reviews: '30',
            Price: '2000'
        },
        {
            HotelsName: 'Best Western Grant Park Hotel',
            HotelsLocation: '124 E Huron St, Chicago',
            RatingsNumber: '4.4',
            Reviews: '30',
            Price: '2000'
        },
        {
            HotelsName: 'Best Western Grant Park Hotel',
            HotelsLocation: '124 E Huron St, Chicago',
            RatingsNumber: '4.4',
            Reviews: '30',
            Price: '2000'
        },
        {
            HotelsName: 'Best Western Grant Park Hotel',
            HotelsLocation: '124 E Huron St, Chicago',
            RatingsNumber: '4.4',
            Reviews: '30',
            Price: '2000'
        },
        {
            HotelsName: 'Best Western Grant Park Hotel',
            HotelsLocation: '124 E Huron St, Chicago',
            RatingsNumber: '4.4',
            Reviews: '30',
            Price: '2000'
        },
        {
            HotelsName: 'Best Western Grant Park Hotel',
            HotelsLocation: '124 E Huron St, Chicago',
            RatingsNumber: '4.4',
            Reviews: '30',
            Price: '2000'
        }
    ]
    return (
        <div>
            {
                HotelsDetails.map(
                    (item, i) => (
                        <div key={i} className="HotelsDetailsDiv">
                            <div className='Image'>
                                <img src='./Hotels.jpg' />
                            </div>
                            <div className='HotelsInfo'>
                                <div className='HotelsName'>
                                    <p>{item.HotelsName}</p>
                                    <p>{item.HotelsLocation}</p>
                                </div>
                                <div className='HotelsRatings'>
                                    <p>{item.RatingsNumber}/5</p>
                                    <p>Average</p>
                                    <p>({item.Reviews} Reviews)</p>
                                </div>
                                <div className='HotelsPrice'>
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

export default HotelsDetails