import React from 'react';
import './HomePage.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    return (
        <div className="container">
            <header>
                <h1>Inspire Curiosity.</h1>
                <p>We bring quality education to the masses using smart art, design, and technology.</p>
                <button>Support Us</button>
            </header>
        </div>
    );
}

export default HomePage;
