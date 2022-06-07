import React from 'react';
import Avatar from '../../assets/images/avatar.jpeg';
import ProfilePicture from '../../assets/images/profile-picture.jpeg';

function About() {
  return (

    <section className='about-section flex-wrap flex justify-center align-center bg-cyan-600 h-full'>

      <h1 id="about" className="about-title text-lg p-5">About Me</h1>

      <div className='flex justify-evenly align-center p-5'>

      <img src={ProfilePicture} className='h-48'/>

      <p className='flex flex-wrap w-1/2'>
      Full stack developer proficient in building websites from a user story, preparing a minimally viable product, and then fine- tuning the small details into an efficiently running complete site. 
      Able to efficiently work in a group as well as independently in order to complete tasks on time. 
      Prior experience gained through working as a Dog Trainer allows the delegation of tasks if necessary, while also multitasking across various duties. 
      Excel in solving unique and complex issues.
      </p>


      </div>

      
    </section>
  );
}

export default About;
