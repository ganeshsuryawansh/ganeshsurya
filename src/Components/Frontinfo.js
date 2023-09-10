import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import img2 from './Static/Office-PNG-Photo.png';



const Frontinfo = () => {
  return (
    <div className='flex sm:flex-row flex-col px-5 my-20 justify-center'>
            
            <div className='sm:mt-48 mr-20'>
                <a href='#'><GitHubIcon/></a>
            </div>
            
            <div className='lg:mt-28  sm:mr-28'>
                <p className='text-xl font-bold'>Hi, I am</p>
                <p className='text-xl font-bold'>Ganesh  ✋</p>
                <p>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'React Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Frontend Developer',
                            2000,
                            'Backend Developer',
                            2000,
                            'MERN Developer',
                            2000,
                            'Looking for Opportunity...',
                            2000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </p>
                <p className='mb-2'> A passionate Full Stack Software Developer 🚀</p>
                <Button className='' variant="contained" endIcon={<SendIcon />}>
                  Say hello
                </Button>
            </div>
            
            <div className=''>
                <img className='w-96 h-96' src={img2} />
            </div>
        
        </div>
  )
}

export default Frontinfo;