import React from 'react';
import './HomePage.css';
import { Helmet } from 'react-helmet';

function HomePage() {
    return (
        <div className="container">
            <Helmet>
                <title>Home | KnowSnack Foundation</title>
            </Helmet>
            <header>
                <h1><span>inspire</span><br /><span>curiosity.</span></h1>
                <div className="caption-container">
                    <p className="caption">We bring quality education to the masses using smart art, design, and technology.</p>
                </div>
                <button>Support Us</button>
            </header>
        </div>
    );
}

export default HomePage;
