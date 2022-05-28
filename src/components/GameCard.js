import '../styles/GameCard.css'

const GameCard = () => {
    return (
    <div className='gameCardMain'>
        <h2>Title</h2>
        <p>Short Description</p>
        <p>Platform</p>
        <p>Publisher</p>
        <p>Developer</p>
        <p>Release Date</p>
        <button className='getBtn'>Get Now!</button>
    </div>
    )
}

export default GameCard