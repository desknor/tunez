import React from 'react';

import './../styling/Landing.css';

const Landing = () => (
    <section className="landing">
        <h1 className="hero-title">Turn that music up!</h1>
    <section className="selling-points">
        <div className="point">
            <h2 className="point-title">Choose Your Music</h2>
            <p className="point-description">The world is full of music; why listen to music that someone else chose?!</p>
        </div>
        <div className="point">
            <h2 className="point-title">Unlimited, streaming, ad-free</h2>
            <p className="point-description">No arbitrary limits. No distractions.</p>
        </div>
        <div className="point">
            <h2 className="point-title">Mobile Enabled</h2>
            <p className="point-description">Listen to your music on the go.</p>
        </div>
    </section>
    </section>
);

export default Landing;