import React, { Component } from 'react';

class Header extends Component {
    state = {}

    render() {
        return (
            <header className="header">
                <div className="container clearfix">
                    <img className="profile-image img-fluid float-left rounded-circle" src="/img/profile.png"
                         alt="profile image" width="250px" height="250px"/>
                    <div className="profile-content float-right">
                        <h1 className="name">Josh Lerman</h1>
                        <h2 className="desc">Web App Developer / Frontend Developer</h2>
                        <ul className="social list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li className="list-inline-item"><a href="#https://github.com/jdl212"><i className="fab fa-github-alt"></i></a></li>
                        </ul>
                            <a className="btn btn-cta-primary " href="/contact">
                            <i className="fas fa-paper-plane"></i>Contact Me</a>
                            <a className="btn btn-cta-primary " href="/resume.pdf" target="_blank">
                            <i className="fas fa-paper-plane"></i>Resume</a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;