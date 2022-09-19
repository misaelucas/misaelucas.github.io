import React, { useContext } from 'react';
import '../css/Bio.css';
import '../css/Slide.css';
import duck from '../img/duck.png';

const Bio = () => {

    const birthDate = 1998;
    const today = new Date()
    const year = today.getFullYear()
    const age = (year) - (birthDate);

    return (
        <div className="bio" >
                <div className="title">Hi, i'm Misa. </div>
                <div className="shenanigans">
                    <p>I am {age} years old, currently living in Brazil and studying fullstack development at <a href="https://betrybe.com/" className="trybe-link">Trybe</a>. I also enjoy playing Chess and Muay Thai.</p>
                    <p>This is my personal page, feel free to browse through, here you will be able to find my portfolio and a few shenanigans..</p>
                </div>
            <button type="button" className="slide">
                <div><a href="https://github.com/misaelucas" target="_blank" rel="noreferrer" className="github-link" >Github</a></div>
                <i className="icon-arrow-right"></i>
            </button>
            <img src={duck} alt="a drawing of a duck with a variety of swords in his back, and he's also using an armor, which display his name: DUCK" className="responsive" />
        </div>
    );
};

export default Bio;