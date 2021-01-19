import React, { Component } from 'react';

class Project extends Component {
    state = {  }
    render() { 
        return (
                    <div className="container">
                        <div className="item row">
                            <a className="col-md-6 " href={this.props.url} target="_blank">
                                <img className="img-fluid project-image rounded shadow-sm"
                                     src={this.props.imageSrc} alt={this.props.title}/>
                            </a>
                            <div className="desc col-md-6 ">
                                <h3 className="title"><a href="#" target="_blank">{this.props.title}</a></h3>
                                <p className="mb-2">{this.props.description}</p>
                                <p><a className="more-link" href={this.props.url} target="_blank">
                                    <i className="fas fa-external-link-alt"></i>Github Link</a></p>
                            </div>
                        </div><hr className="divider"/>
                    </div>
        );
    }
}
 
export default Project;