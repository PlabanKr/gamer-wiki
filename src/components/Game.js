import '../styles/Game.css'
import { BsSearch } from 'react-icons/bs'
import GameCard from './GameCard'

const Game = () => {
    return (
    <div className='mainGameBody'>
        <form>
            <input type='text' className='searchInput' placeholder='Enter name of the game' />
            <button className='search'><BsSearch /></button>
        </form>
        <div className='result'>
            <GameCard/>
            <GameCard/>
        </div>
    </div>
    )
}

export default Game