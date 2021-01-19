import React, { Component } from 'react';
class Contact extends Component {
    state = {  }
    render() { 
        return (
            <aside className="info aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading sr-only">Basic Information</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li><i className="fas fa-map-marker-alt"></i><span className="sr-only">Location:</span>New
                                York, NY
                            </li>
                            <li><i className="fas fa-envelope"></i><span className="sr-only">Email:</span><a
                                href="#">lerman.joshua.d@gmail.com</a></li>
                            <li><i className="fas fa-link"></i><span className="sr-only">Github:</span><a
                                href="#">https://github.com/jdl212</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
            );
    }
}
 
export default Contact;