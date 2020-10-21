import React from 'react';
import './Hompeage.scss';




function HomePage() {
    return (
        <div className="homepage">
            <div className="directory-menu">
                {/* Item--1 */}
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS 🐣 </h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                {/* Item--2 */}
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS  </h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                {/* Item--3 */}
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS </h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                {/* Item--4 */}
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WOMENS </h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                {/* Item--5*/}
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">MEN </h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
