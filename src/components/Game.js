import '../styles/Game.css'
import { searchByCategory } from '../api/api'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import GameCard from './GameCard'

const Game = () => {
    const [categoryName, setCategoryName] = useState('')
    const [searchResult, setSearchResult] = useState(null)

    const handleGameName = (e) => {
        setCategoryName(e.target.value)
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        let res = await searchByCategory(categoryName)
        setSearchResult(res)
    }

    return (
    <div className='mainGameBody'>
        <form>
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