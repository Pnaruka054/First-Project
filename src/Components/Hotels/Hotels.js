import './Hotels.css'
import React, { useRef } from 'react';
import HotelsDetails from './HotelsDetails'

function Hotels() {
    function showButton() {
        if (scroll1Ref.current.scrollLeft >= 200) {
            let leftButton = document.querySelector('#HotelsReftButton')
            leftButton.classList = 'HotelsLeftContentShow'
            let rightButton = document.querySelector('#HotelsRightButton')
            rightButton.classList = 'HotelsRightContentShow'
        } else {
            let rightButton = document.querySelector('#HotelsRightButton')
            rightButton.classList = 'HotelsRightContentShow'
        }
    }

    function hideButton() {
        let rightButton = document.querySelector('#HotelsRightButton')
        rightButton.classList = 'HotelsRightContent'
        let leftButton = document.querySelector('#HotelsLeftButton')
        leftButton.classList = 'HotelsLeftContent'
    }

    const scroll1Ref = useRef(null);
    function scrollRight() {
        scroll1Ref.current.scrollBy({
            left: 550,
            behavior: 'smooth',
        });

        let leftButton = document.querySelector('#HotelsLeftButton')
        leftButton.classList = 'HotelsLeftContentShow'
    }

    function scrollLeft() {
        scroll1Ref.current.scrollBy({
            left: -550,
            behavior: 'smooth',
        });
    }

    function leftScrolled() {
        if (scroll1Ref.current.scrollLeft <= 20) {
            let leftButton = document.querySelector('#HotelsLeftButton')
            leftButton.classList = 'HotelsLeftContent'
        } else {
            let leftButton = document.querySelector('#HotelsLeftButton')
            leftButton.classList = 'HotelsLeftContentShow'
        }
    }

    function rightScrolled() {
        if (scroll1Ref.current.scrollLeft >= 500) {
            let rightButton = document.querySelector('#HotelsRightButton')
            rightButton.classList = 'HotelsRightContentShow'
        } else {
            let rightButton = document.querySelector('#HotelsRightButton')
            rightButton.classList = 'HotelsRightContent'
        }
    }
    return (
        <div id='Hotels' className='HotelsHeaderMainDiv'>
            <div className='HotelsHeaderDiv'>
                <h1>Most Popular Hotel <br /> Destinations</h1>
            </div>
            <div className='HotelsContentDivParant'>
                <div className='HotelsContentDiv' ref={scroll1Ref} style={{ overflowX: 'auto' }} onMouseEnter={showButton} onMouseLeave={hideButton} onScroll={leftScrolled} >
                    <button id='HotelsLeftButton' className='HotelsLeftContent' onClick={scrollLeft}>
                        <i className='fa-solid fa-caret-left'></i>
                    </button>
                    <HotelsDetails />
                    <button id='HotelsRightButton' className='HotelsRightContent' onClick={scrollRight} onScroll={rightScrolled}>
                        <i className='fa-solid fa-caret-right'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hotels