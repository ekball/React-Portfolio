import React from "react";

function Resume() {

    const skills = [
        'React',
        'Javascript', 
        'GraphQL',
        'MERN Stack',
        'Node.js',
        'MongoDB',
        'Express.js',
        'NoSQL', 
        'GitHub', 
        'CSS', 
        'DRY Methods',
        'OOP', 
        'MVC Paradigm',
        'Progressive Web Applications',
    ]


    return(
        <div className="resume-section bg-cyan-600">
            <div>
                <h1 className="resume-title flex justify-center text-xl p-5">Resume</h1>

                <a href='../assets/docs/resume.pdf' download className="resume-link flex justify-center underline decoration-solid hover:text-orange-500 p-5">Click here to download a copy of my resume</a>
            </div>

            <div className="flex justify-center">
                <h1 className="underline decoration-solid decoration-1 underline-offset-2 flex justify-center p-5">Skills: </h1>

                <ul className="list-disc p-5">
                        {skills.map(skill => {
                            return <li>{skill}</li>
                        })}
                </ul>
            </div>
        </div>
    );
}

export default Resume;