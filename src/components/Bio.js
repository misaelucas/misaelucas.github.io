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
            <div className="title">Hi, i'm Misa. </div>
            <div className="shenanigans">
                <p>I am {age} years old, currently living in Brazil and studying fullstack development at <a href="https://betrybe.com/" className="trybe-link">Trybe</a>. I also enjoy playing Chess and Muay Thai.</p>
                <p>This is my personal page, feel free to browse through, here you will be able to find my portfolio and a few shenanigans..</p>
            </div>
            <button type="button" className="slide">
                <div><a href="https://github.com/misaelucas" className="github-link">Github</a></div>
                <i className="icon-arrow-right"></i>
            </button>
        </div>
    );
};

export default Bio;