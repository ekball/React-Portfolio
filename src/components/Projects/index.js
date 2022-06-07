import React from 'react';
import MovieMatchPhoto from "../../assets/images/movie-match-screenshot.png";
import MediaGemsPhoto from "../../assets/images/media-gems-screenshot.png";
import WeatherDashboardPhoto from "../../assets/images/weather-dashboard-screenshot.png";
import READMEGeneratorPhoto from "../../assets/images/README-generator-screenshot.png";
import NotetakerPhoto from "../../assets/images/notetaker-screenshot.png";
import PasswordGeneratorPhoto from "../../assets/images/password-generator-screenshot.png";
import PokeBuffPhoto from "../../assets/images/pokebuff-screenshot.png";



function Projects () {

        return (
        
        <section className='projects-section bg-cyan-600'>
            
            <h1 className='projects-title flex justify-center text-xl p-5'>Projects</h1>

            <div className='flex flex-wrap justify-evenly p-5'>

                    <div className='projects-one p-5 flex-column flex-wrap w-1/2 '>

                        <h2 className='flex flex-wrap justify-center text-lg underline decoration-wavy decoration-1 underline-offset-2 mb-2'>Movie Match</h2>
                        <p className='flex flex-wrap justify-center mb-2'>
                            A game utilizing APIs that tests the user's knowledge of random movies. 
                            It tallies the user's score and saves the results with initials within local storage. 
                            Users can replay an unlimited number of times.
                        </p>

                        {/* buttons to project 1 (deployed site + github) */}
                        <a href='https://gabrielandrews.github.io/Group-project-movie-/'>
                            <button 
                                className='projects-button-one-site transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-orange-500 underline decoration-solid decoration-1 underline-offset-2 font-bold font-mono'
                                style={{ 
                                    backgroundImage: `url("${MovieMatchPhoto}")`,
                                    backgroundPosition: "left 25.7% center",
                                    backgroundSize: "65vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderRight: "none"
                                }}
                            >
                                Deployed Site
                            </button>

                        </a> 

                        <a  href='https://github.com/gabrielandrews/Group-project-movie-'>
                            <button 
                                className='projects-button-one-repo transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-orange-500 underline decoration-solid decoration-1 underline-offset-2 font-bold font-mono'
                                style={{ 
                                    backgroundImage: `url("${MovieMatchPhoto}")`,
                                    backgroundPosition: "right 30% center",
                                    backgroundSize: "65vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderLeft: "none"
                                }}
                            >
                                Github Repo
                            </button>
                        </a>

                    </div>

                    <div className='projects-two p-5 flex-column flex-wrap w-1/2'>

                        <div className=''>
                            <h2 className='flex flex-wrap justify-center text-lg underline decoration-wavy decoration-1 underline-offset-2 mb-2'>Media Gems</h2>
                            <p className='flex flex-wrap justify-center mb-2'>An application that provides the user with a place to look up reviews to shows
                                on popular streaming services posted by other users. Users can also save and 
                                edit reviews when logged in.
                            </p>
                        </div>


                        {/* buttons to project 2 (deployed site + github) */}
                        <a  href='https://gentle-dusk-15958.herokuapp.com/'>
                            <button 
                                className='projects-button-two-site transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-orange-500 underline decoration-solid decoration-1 underline-offset-2 font-bold font-mono'
                                style={{ 
                                    backgroundImage: `url("${MediaGemsPhoto}")`,
                                    backgroundPosition: "left 0% center",
                                    backgroundSize: "40vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderRight: "none"
                                }}
                            >
                                Deployed Site
                            </button>                        
                        </a>

                        <a href='https://github.com/KrisSmith7/media-gems'>
                            <button 
                                className='projects-button-two-repo transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-orange-500 underline decoration-solid decoration-1 underline-offset-2 font-bold font-mono'
                                style={{ 
                                    backgroundImage: `url("${MediaGemsPhoto}")`,
                                    backgroundPosition: "right 0% center",
                                    backgroundSize: "40vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderLeft: "none"
                                }}
                            >
                                Github Repo
                            </button>                        
                        </a>

                    </div>
            </div>

            <div className='flex flex-wrap justify-evenly p-5'>

                    <div className='projects-three p-5 flex-column flex-wrap w-1/2'>

                        <div className='flex-column flex-wrap justify-center'>
                            <h2 className='flex flex-wrap justify-center text-lg underline decoration-wavy decoration-1 underline-offset-2 mb-2'>Weather Dashboard</h2>
                            <p className='flex flex-wrap justify-center mb-2'>An application that allows the user to type in a desired location in the search bar
                                and see current detailed weather information on the location. When users search for a location, 
                                a history log of past searces is automatically created to quickly find the weather data again.
                            </p>
                        </div>
                        
                        {/* buttons to project 3 (deployed site + github) */}
                        <a href='https://ekball.github.io/C6-Weather-Dashboard/'>
                            <button 
                                className='projects-button-three-site transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-orange-500 underline decoration-solid decoration-1 underline-offset-2 font-bold font-mono'
                                style={{ 
                                    backgroundImage: `url("${WeatherDashboardPhoto}")`,
                                    backgroundPosition: "left 30% top",
                                    backgroundSize: "79.5vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderRight: "none"
                                }}
                            >
                                Deployed Site
                            </button>                        
                        </a>

                        <a href='https://github.com/ekball/C6-Weather-Dashboard'>
                            <button 
                                className='projects-button-three-repo transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-orange-500 underline decoration-solid decoration-1 underline-offset-2 font-bold font-mono'
                                style={{ 
                                    backgroundImage: `url("${WeatherDashboardPhoto}")`,
                                    backgroundPosition: "right 37% top",
                                    backgroundSize: "79.5vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderLeft: "none"
                                }}
                            >
                                Github Repo
                            </button>                        
                        </a>
                    </div>

                    <div className='projects-four p-5 flex-column flex-wrap w-1/2'>

                    <div className='flex-column flex-wrap justify-center'>
                        <h2 className='flex flex-wrap justify-center text-lg underline decoration-wavy decoration-1 underline-offset-2 mb-2'>README Generator</h2>
                        <p className='flex flex-wrap justify-center mb-2'>
                            This application will generate an official README document for projects. 
                            It is created as the user provides answers to prompts, which are then formatted into sections
                            with a table of contents. The document is created in a secondary folder within the project.
                        </p>
                    </div>

                        {/* buttons to project 4 (deployed site + github) */}
                        <a href='https://watch.screencastify.com/v/9nnkvfNLQ3FvrwhAjYeZ'>
                            <button 
                                className='projects-button-four-site transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-orange-500 underline decoration-solid decoration-1 underline-offset-2 font-bold font-mono'
                                style={{ 
                                    backgroundImage: `url("${READMEGeneratorPhoto}")`,
                                    backgroundPosition: "left top",
                                    backgroundSize: "80vw",
                                    width: "20vw",
                                    height: "33vw" 
                                }}
                            >
                                Deployed Site
                            </button>                        
                        </a>
                        
                        <a href='https://github.com/ekball/C9-README-Generator'>
                            <button 
                                className='projects-button-four-repo transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-orange-500 underline decoration-solid decoration-1 underline-offset-2 font-bold font-mono'
                                style={{ 
                                    backgroundImage: `url("${READMEGeneratorPhoto}")`,
                                    backgroundPosition: "right 35% top",
                                    backgroundSize: "80vw",
                                    width: "20vw",
                                    height: "33vw" 
                                }}
                            >
                                Github Repo
                            </button>                        
                        </a>
                    </div>
                </div>

                <div className='flex flex-wrap justify-evenly p-5'>

                    <div className='projects-five p-5 flex-column flex-wrap w-1/2'>

                        <div className='flex-column flex-wrap justify-center'>
                            <h2 className='flex flex-wrap justify-center text-lg underline decoration-wavy decoration-1 underline-offset-2 mb-2'>PokeBuff</h2>
                            <p className='flex flex-wrap justify-center mb-2'>
                                An website that allows Pokémon fans to learn more about the franchise.
                                There are 3 main pages currently: a Pokédex page that will link the user to a site with more detailed info,
                                an upcoming releases page that lists future game title release dates, and a chatroom page.
                            </p>
                        </div>

                        {/* buttons to project 5 (deployed site + github) */}
                        <a href='https://fierce-mesa-57913.herokuapp.com/'>
                            <button 
                                className='projects-button-five-site transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-orange-500 underline decoration-solid decoration-1 underline-offset-2 font-bold font-mono'
                                style={{ 
                                    backgroundImage: `url("${PokeBuffPhoto}")`,
                                    backgroundPosition: "left 27% top",
                                    backgroundSize: "67vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderRight: "none"
                                }}
                            >
                                Deployed Site
                            </button>                       
                        </a>
                        
                        <a href='https://github.com/ekball/poke-buff'>
                            <button 
                                className='projects-button-five-repo transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-orange-500 underline decoration-solid decoration-1 underline-offset-2 font-bold font-mono'
                                style={{ 
                                    backgroundImage: `url("${PokeBuffPhoto}")`,
                                    backgroundPosition: "right 30.5% top",
                                    backgroundSize: "67vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderLeft: "none"
                                }}
                            >
                                Github Repo
                            </button>                         
                        </a>
                    </div>

                    <div className='projects-six p-5 flex-column flex-wrap w-1/2'>

                        <div className='flex-column flex-wrap justify-center'>
                            <h2 className='flex flex-wrap justify-center text-lg underline decoration-wavy decoration-1 underline-offset-2 mb-2'>Password Generator</h2>
                            <p className='flex flex-wrap justify-center mb-2'>
                                This application will create a new, random password. The user will be prompted for desired length of password
                                and which types of characters the user would like to be included in the password. The generated password can then be 
                                copy and pasted.
                            </p>
                        </div>

                        {/* buttons to project 6 (deployed site + github) */}
                        <a  href='https://ekball.github.io/C3-Password-Generator/'>
                            <button 
                                className='projects-button-six-site transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-orange-500 underline decoration-solid decoration-1 underline-offset-2 font-bold font-mono'
                                style={{ 
                                    backgroundImage: `url("${PasswordGeneratorPhoto}")`,
                                    backgroundPosition: "left 30% top",
                                    backgroundSize: "70vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderRight: "none"

                                }}
                            >
                                Deployed Site
                            </button>                       
                        </a>
                        
                        <a href='https://github.com/ekball/C3-Password-Generator'>
                            <button 
                                className='projects-button-six-repo transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 text-orange-500 underline decoration-solid decoration-1 underline-offset-2 font-bold font-mono'
                                style={{ 
                                    backgroundImage: `url("${PasswordGeneratorPhoto}")`,
                                    backgroundPosition: "right 30.5% top",
                                    backgroundSize: "70vw",
                                    width: "20vw",
                                    height: "33vw",
                                    borderLeft: "none" 
                                }}
                            >
                                Github Repo
                            </button>                        
                        </a>
                    </div>

                </div>
            
        </section>


    );

}



export default Projects;