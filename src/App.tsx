import './App.css'
import folder from './assets/images/folder.png';

function App() {

  return (
    <>
      <div>
        <div>
            <div className='folderContainer'>
                <img src={folder} alt='Folder Icon' className='icon'/>
                <p className='folderName'>Projects</p>
            </div>
        </div>

        <div>

        </div>
      </div>
    </>
  )
}

export default App
