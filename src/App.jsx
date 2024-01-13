import './App.css'
import Options from './Components/Options/Options'
import Portfolio from './Components/Portfolio/Portfolio'
import Profile from './Components/Profile/Profile'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <div className="container">
      <div className="app__sidebar">
        <Sidebar />
      </div>
      <div className="app__profile">
        <Profile />
      </div>
      <div className="app__portfolio">
        <Portfolio />
      </div>
      <div className="app__options">
        <Options />
      </div>
    </div>
  )
}

export default App
