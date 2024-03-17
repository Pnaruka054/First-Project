import './Cars.css'
import React, { useRef } from 'react';
import CarsDetails from './CarsDetails'

function Cars() {
    function showButton() {
        if (scroll1Ref.current.scrollLeft >= 200) {
            let leftButton = document.querySelector('#leftButton')
            leftButton.classList = 'leftContentShow'
            let rightButton = document.querySelector('#rightButton')
            rightButton.classList = 'rightContentShow'
        } else {
            let rightButton = document.querySelector('#rightButton')
            rightButton.classList = 'rightContentShow'
        }
    }

    function hideButton() {
        let rightButton = document.querySelector('#rightButton')
        rightButton.classList = 'rightContent'
        let leftButton = document.querySelector('#leftButton')
        leftButton.classList = 'leftContent'
    }

    const scroll1Ref = useRef(null);
    function scrollRight() {
        scroll1Ref.current.scrollBy({
            left: 550,
            behavior: 'smooth',
        });

        let leftButton = document.querySelector('#leftButton')
        leftButton.classList = 'leftContentShow'
    }

    function scrollLeft() {
        scroll1Ref.current.scrollBy({
            left: -550,
            behavior: 'smooth',
        });
    }

    function leftScrolled() {
        if (scroll1Ref.current.scrollLeft <= 20) {
            let leftButton = document.querySelector('#leftButton')
            leftButton.classList = 'leftContent'
        } else {
            let leftButton = document.querySelector('#leftButton')
            leftButton.classList = 'leftContentShow'
        }
    }

    function rightScrolled() {
        if (scroll1Ref.current.scrollLeft >= 500) {
            let rightButton = document.querySelector('#rightButton')
            rightButton.classList = 'rightContentShow'
        } else {
            let rightButton = document.querySelector('#rightButton')
            rightButton.classList = 'rightContent'
        }
    }
    return (
        <div id='Cars' className='CarsHeaderMainDiv'>
            <div className='CarsHeaderDiv'>
                <h1>Trending Used Cars</h1>
            </div>
            <div className='contentDivParant'>
                <div className='contentDiv' ref={scroll1Ref} style={{ overflowX: 'auto' }} onMouseEnter={showButton} onMouseLeave={hideButton} onScroll={leftScrolled} >
                    <button id='leftButton' className='leftContent' onClick={scrollLeft}>
                        <i className='fa-solid fa-caret-left'></i>
                    </button>
                    <CarsDetails />
                    <button id='rightButton' className='rightContent' onClick={scrollRight} onScroll={rightScrolled}>
                        <i className='fa-solid fa-caret-right'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cars