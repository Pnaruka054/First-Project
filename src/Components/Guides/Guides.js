import './Guides.css'
import React, { useRef } from 'react';
import GuidesDetails from './GuidesDetails';

function Guides() {
    const scroll1Ref = useRef(null);

    function showButton() {
        if (scroll1Ref.current.scrollLeft >= 200) {
            let leftButton = document.querySelector('#GuidesReftButton')
            leftButton.classList = 'GuidesLeftContentShow'
            let rightButton = document.querySelector('#GuidesRightButton')
            rightButton.classList = 'GuidesRightContentShow'
        } else {
            let rightButton = document.querySelector('#GuidesRightButton')
            rightButton.classList = 'GuidesRightContentShow'
        }
    }

    function hideButton() {
        let rightButton = document.querySelector('#GuidesRightButton')
        rightButton.classList = 'GuidesRightContent'
        let leftButton = document.querySelector('#GuidesLeftButton')
        leftButton.classList = 'GuidesLeftContent'
    }

    function scrollRight() {
        scroll1Ref.current.scrollBy({
            left: 550,
            behavior: 'smooth',
        });

        let leftButton = document.querySelector('#GuidesLeftButton')
        leftButton.classList = 'GuidesLeftContentShow'
    }

    function scrollLeft() {
        scroll1Ref.current.scrollBy({
            left: -550,
            behavior: 'smooth',
        });
    }

    function leftScrolled() {
        if (scroll1Ref.current.scrollLeft <= 20) {
            let leftButton = document.querySelector('#GuidesLeftButton')
            leftButton.classList = 'GuidesLeftContent'
        } else {
            let leftButton = document.querySelector('#GuidesLeftButton')
            leftButton.classList = 'GuidesLeftContentShow'
        }
    }

    function rightScrolled() {
        if (scroll1Ref.current.scrollLeft >= 500) {
            let rightButton = document.querySelector('#GuidesRightButton')
            rightButton.classList = 'GuidesRightContentShow'
        } else {
            let rightButton = document.querySelector('#GuidesRightButton')
            rightButton.classList = 'GuidesRightContent'
        }
    }
    return (
        <div id='Guides' className='GuidesHeaderMainDiv'>
            <div className='GuidesHeaderDiv'>
                <h1>Recommended Guides</h1>
            </div>
            <div className='GuidesContentDivParant'>
                <div className='GuidesContentDiv' ref={scroll1Ref} style={{ overflowX: 'auto' }} onMouseEnter={showButton} onMouseLeave={hideButton} onScroll={leftScrolled} >
                    <button id='GuidesLeftButton' className='GuidesLeftContent' onClick={scrollLeft}>
                        <i className='fa-solid fa-caret-left'></i>
                    </button>
                    <GuidesDetails />
                    <button id='GuidesRightButton' className='GuidesRightContent' onClick={scrollRight} onScroll={rightScrolled}>
                        <i className='fa-solid fa-caret-right'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Guides