import React from 'react';
import '../css/Bio.css';
import '../css/Slide.css';

const Bio = () => {

    const birthDate = 1998;
    const today = new Date()
    const year = today.getFullYear()
    const age = (year) - (birthDate);

    return (
        <div className="bio">
            <div className="title">Hi, i'm Misa.</div>
            <div className="shenanigans">
                <p>I have {age} years, currently living in Brazil. I'm a fullstack developer with some experience in React. I also enjoy Muay Thai and Chess.</p>
                <p>This is my personal page, feel free to browse through, here you will be able to find my portfolio and a few shenanigans..</p>
            </div>
            <button type="button" class="slide">
                <div>Github</div>
                <i class="icon-arrow-right"></i>
            </button>
        </div>
    );
};

export default Bio;