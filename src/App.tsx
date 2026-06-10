import './App.css'
import folder from './assets/images/folder.png';
import computer from './assets/images/computer.png';
import harddrive from './assets/images/hard-drive.png';
import storage from './assets/images/storage.png';

function App() {

  return (
    <>
      <div>
        <div className='container'>
            <div className='folderContainer'>
                <img src={folder} alt='Folder Icon' className='icon'/>
                <p className='folderName'>Projects</p>
            </div>
            
            <div className='folderContainer'>
                <img src={computer} alt='Computer Icon' className='icon'/>
                <p className='folderName'>My Computer</p>
            </div>

            <div className='folderContainer'>
                <img src={harddrive} alt='Hard Drive Icon' className='icon'/>
                <p className='folderName'>Media</p>
            </div>

            <div className='folderContainer'>
                <img src={storage} alt='Storage Icon' className='icon'/>
                <p className='folderName'>Resume</p>
            </div>
            

        </div>

        <div>
            <div className='taskbar'>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
