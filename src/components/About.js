import React, { Component } from 'react';


class About extends Component {
    state = {  }
    render() { 
        return (
            <section className="about section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">About Me</h2>
                    <div className="content">
                        <p>
                           I am a student.
                        </p>

                    </div>
                </div>

            <aside className="skills aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Skills</h2>
                    <div className="content">
                        <p className="intro">
                            Software Developer with a demonstrated history of working in the information technology and services industry. Skilled in Java, Spring, Python, SQL, NODE JS , HTML , JS . Strong information technology professional with a Bachelor's Degree focused in Computer Science
                           </p>

                        <div className="skillset">

                            <div className="item">
                                <h3 className="level-title">Node JS &amp;  Express </h3>
                                <div className="progress" style={{innerHeight: 20 + 'px'}}>
                                    <div className="progress-bar" style={{width: 90 +'%'}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>

                            <div className="item">
                                <h3 className="level-title">Javascript &amp; jQuery</h3>
                                <div className="progress" style={{innerHeight: 20 + 'px'}}>
                                    <div className="progress-bar" style={{width: 90 +'%'}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>

                            <div className="item">
                                <h3 className="level-title">HTML5, CSS3, SASS &amp; LESS</h3>
                                <div className="progress" style={{innerHeight: 20 + 'px'}}>
                                    <div className="progress-bar" style={{width: 90 +'%'}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>

                            <div className="item">
                                <h3 className="level-title">REST APIs</h3>
                                <div className="progress" style={{innerHeight: 20 + 'px'}}>
                                    <div className="progress-bar" style={{width: 90 +'%'}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <aside className="education aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Education</h2>
                    <div className="content">
                        <div className="item">
                            <h3 className="title"><i className="fas fa-graduation-cap"/>MSc Computer Science</h3>
                            <h4 className="university">University College <span className="year">(2020-2024)</span></h4>
                        </div>
                    </div>
                </div>
            </aside>

            <aside className="languages aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Languages</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li className="item">
                                <span className="title"><strong>English:</strong></span>
                                <span className="level">Native Speaker <br className="visible-xs"/><i
    className="fas fa-star"/><i className="fas fa-star"/><i
    className="fas fa-star"/><i className="fas fa-star"/><i
                                    className="fas fa-star"></i></span>
                            </li>
                            <li className="item">
                                <span className="title"><strong>Spanish:</strong></span>
                                <span className="level">Professional Proficiency <br className="visible-sm visible-xs"/><i
    className="fas fa-star"/><i className="fas fa-star"/><i
    className="fas fa-star"/><i className="fas fa-star-half"/></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
            </section>
        );
    }
}
 
export default About;