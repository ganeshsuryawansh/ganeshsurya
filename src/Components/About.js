import React from 'react'
import img from './Static/coder-image.png';
import Button from '@mui/material/Button';
import DownloadForOfflineSharpIcon from '@mui/icons-material/DownloadForOfflineSharp';
import resume from './Static/Ganesh_ResumeV3.00.pdf';


const About = () => {
    return (
        <>
            <div className='px-5 sm:px-28 my-32' id='About'>
                <h1 className='text-3xl font-bold text-center '>About Me</h1>
                <p className='text-center'>My introduction</p>
                <div className='flex sm:flex-row flex-col justify-center'>
                    <div>
                        <img src={img} />
                    </div>
                    <div className='sm:w-96 text-xl sm:pt-20'>
                        <p>A passionate Full Stack Software Developer
                            having an good knowleage of building Web Applications with JavaScript / Reactjs / Nodejs / Expressjs / MongoDB and some other cool libraries and frameworks.
                        </p>
                        <br/>
                        <p>
                            I Have Youtube Channel With 1K+ Subscriber Where I Provide Programming Related Content.
                            <svg stroke="currentColor" fill="red" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                            </svg>
                        </p>
                        <Button className='text-white' href={resume} download={resume} variant="contained" >
                          Download Resume <DownloadForOfflineSharpIcon/>
                        </Button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;