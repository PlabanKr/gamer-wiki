import '../styles/Game.css'
import { searchByCategory } from '../api/api'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import GameCard from './GameCard'

const Game = () => {
    const [categoryName, setCategoryName] = useState('')
    const [searchResult, setSearchResult] = useState(null)

    const handleGameName = (e) => {
        setCategoryName(e.target.value)
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        setSearchResult(null)
        let res = await searchByCategory(categoryName)
        setSearchResult(res)
    }

    return (
    <div className='mainGameBody'>
        <form>
            <span
            className='info'
            data-tool-tip='All categories:
            mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, 
            zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, 
            mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts'
            >
                <AiOutlineInfoCircle/>
            </span>
            <input type='text' className='searchInput' placeholder='Enter category (eg. shooter, strategy)' onChange={handleGameName} />
            <button className='search' onClick={handleSearch}><BsSearch /></button>
        </form>
        <div className='result'>
            {   searchResult == null  ?
                    <p>No Results</p> 
                    :
                    searchResult.map((data) => {
                    return <GameCard data={data} key={data.id} />
                    })
                
            }
        </div>
    </div>
    )
}

export default Game