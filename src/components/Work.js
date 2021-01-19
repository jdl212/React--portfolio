import React, { Component } from 'react';
import Project from './project';
import data from '../data/projects';

class Work extends Component {
    state = {  }
    render() { 
        return (<div className="mt-5">
        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                        title = {project.title}
                        description = {project.description}
                        imageSrc = {project.imageSrc}
                        url={project.url}
                        />
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;