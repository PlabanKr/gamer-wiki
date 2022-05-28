import './styles/App.css'
import Game from './components/Game'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Game />
    </div>
  );
}

export default App
