
import "./project-showcase.styles.scss";
import { Element } from "react-scroll";
import React from 'react';

function ProjectShowcase() {
    return (
        <Element name="projectShowcase" id="projectShowcase">
            <div className="element">
                <h2>Personal Projects</h2>
                <p>Content for Section 1...</p>
            </div>
        </Element>
    );
}

export default ProjectShowcase;
