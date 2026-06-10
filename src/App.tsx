import './App.css'
import folder from './assets/images/folder.png';
import computer from './assets/images/computer.png';
import harddrive from './assets/images/hard-drive.png';
import storage from './assets/images/storage.png';
import internet from './assets/images/internet.png';
import { useState, useEffect } from 'react';


function getLocalTime(){
    const timeNow = new Date();

  return timeNow.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function App() {
    const [time, setTime] = useState("");

    useEffect (() => {
       const updateTime = () => {
            setTime(getLocalTime());
       };

       updateTime();
       
       const intervalId = setInterval(updateTime, 60000);
       return () => clearInterval(intervalId);
    }, []);

  return (
    <>
      {/* Home page components */}
      <div>

        {/* Icons */}
        <div className='container'>

            {/*Projects*/}
            <div className='folderContainer'>
                <img src={folder} alt='Folder Icon' className='icon'/>
                <p className='folderName'>Projects</p>
            </div>
            
            {/*Biography about me*/}
            <div className='folderContainer'>
                <img src={computer} alt='Computer Icon' className='icon'/>
                <p className='folderName'>My Computer</p>
            </div>

            {/*Media and Hobbies*/}
            <div className='folderContainer'>
                <img src={harddrive} alt='Hard Drive Icon' className='icon'/>
                <p className='folderName'>Media</p>
            </div>

            {/*Resume*/}
            <div className='folderContainer'>
                <img src={storage} alt='Storage Icon' className='icon'/>
                <p className='folderName'>Resume</p>
            </div>

            {/*Contact me*/}
            <div className='folderContainer'>
                <img src={internet} alt='Internet Explorer Icon' className='icon'/>
                <p className='folderName'>Contact Me</p>
            </div>
            
        </div>

        {/*Taskbar*/}
        <div>
            <div className='taskbar'>
                {/*Start Button*/}
                <div className='start'>
                    <p className='taskbarText'>Start</p>
                </div>

                {/*Clock*/}
                <div className='clock'>
                    <p className='taskbarText'>{time}</p>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default App
