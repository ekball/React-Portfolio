import React, { useState } from 'react';
import NavTabs from '../NavTabs';
import Projects from '../Projects';
import About from '../About';
import Resume from '../Resume';
import Contact from '../Contact';

 function Portfolio() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {

    if (currentPage === 'About') {
        return <About />;
    }

    // if the user clicks on the projects button, render the projects page component
    if (currentPage === 'Projects') {
      return <Projects />;
    }

    // if the user clicks on the resume button, render the about resume component
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    
    // if the user clicks on the contact button, render the contact page component
    if (currentPage === 'Contact') {
      return <Contact />;
    }

    // otherwise, default the page to the about section
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

        {renderPage()}

    </div>
  );
}

export default Portfolio;