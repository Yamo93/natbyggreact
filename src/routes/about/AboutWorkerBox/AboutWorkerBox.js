import React from 'react';
import ImgOne from '../../../img/worker1.jpg';
import ImgTwo from '../../../img/worker2.jpg';
import ImgThree from '../../../img/worker3.jpg';

import './AboutWorkerBox.scss';

const AboutWorkerBox = (props) => {
    let profileImage = null;
    let socialMediaIcons = null;
    console.log(props.img);
    switch (props.img) {
        case "one": 
            profileImage = ImgOne;
            socialMediaIcons = (
            <div className="social">
                <i className="fab fa-linkedin-in social-icon"></i>
                <i className="fab fa-instagram social-icon"></i>
            </div>
            );
            break;
        case "two":
            profileImage = ImgTwo;
            socialMediaIcons = (
            <div className="social">
                <i className="fab fa-linkedin-in social-icon"></i>
                <i className="fab fa-github social-icon"></i>
            </div>
            );
            break;
        case "three":
            profileImage = ImgThree;
            socialMediaIcons = (
            <div className="social">
                <i className="fab fa-twitter social-icon"></i>
                <i className="fab fa-github social-icon"></i>
            </div>
            );
            break;
        default: 
            profileImage = ImgOne;
            socialMediaIcons = (
            <div className="social">
                <i className="fab fa-linkedin-in social-icon"></i>
                <i className="fab fa-instagram social-icon"></i>
            </div>
            );
            break;
    }
    return (
        <div className="about__wrapper-box">
                <img src={profileImage} alt="Bild på utvecklare" title="Bild på utvecklare" className="about__wrapper-box--img" />
                <h3 className="about__wrapper-box--name">{props.fullname}</h3>
                <p className="about__wrapper-box--desc">{props.profession}</p>
                <p className="about__wrapper-box--info">{props.description}</p>
                {socialMediaIcons}
        </div>
    );
};

export default AboutWorkerBox;