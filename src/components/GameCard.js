import "../styles/GameCard.css";

const GameCard = ({ data }) => {
  const handleBtnClick = () => {
    window.open(data.game_url, "_blank");
  };

  return (
    <div className="gameCardMain">
      <h2>{data.title}</h2>
      <img src={data.thumbnail} alt={data.title} />
      <div>
        <p>Description: {data.short_description}</p>
        <p>Platform: {data.platform}</p>
        <p>Publisher: {data.publisher}</p>
        <p>Developer: {data.developer}</p>
        {/* <p>Release Date: {data.release_date}</p> */}
      </div>
      <button className="getBtn" onClick={handleBtnClick}>
        Get Now!
      </button>
    </div>
  );
};

export default GameCard;
