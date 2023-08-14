import './banner.css'
import React from 'react'

const Banner = () => {
    return (
        <div className="banner-wrapper">
            <div className="banner-container">
                <div className="banner-content">
                    <div className="banner-text">
                        <p className='first-text'>It's <strong>your</strong> business.</p>
                        <p>We're here to help it grow.</p>
                    </div>
                    <div className="banner-button">
                        <a href="/">Start Free</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner