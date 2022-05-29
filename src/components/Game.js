import "../styles/Game.css";
import { searchByCategory, searchByYear } from "../api/api";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import GameCard from "./GameCard";

const Game = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [selectValue, setSelectValue] = useState("category");
  const [placeholderVal, setPlaceholderVal] = useState(
    "Enter category (eg. shooter, strategy)"
  );

  useEffect(() => {
    const cate = "Enter category (eg. shooter, strategy)";
    const year = "Enter year (eg. 2012, 2013)";
    if (selectValue == "category") {
      setPlaceholderVal(cate);
    } else {
      setPlaceholderVal(year);
    }
  });

  const handleGameName = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    //debug
    // console.log(searchValue);
    // console.log(searchResult);
    // console.log(selectValue);

    let res;
    setSearchResult(null);
    if (selectValue == "category") {
      res = await searchByCategory(searchValue);
    } else {
      res = await searchByYear(searchValue);
    }
    setSearchResult(res);
  };

  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="mainGameBody">
      <form>
        <div className="select-parent">
          <select
            name="search-option"
            className="search-option"
            onChange={handleSelect}
          >
            <option value="category">Category</option>
            <option value="year">Year</option>
          </select>
          <span className="custom-arrow"></span>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder={placeholderVal}
          onChange={handleGameName}
        />
        <button className="search" onClick={handleSearch}>
          <BsSearch />
        </button>
      </form>
      <div className="result">
        {searchResult == null ? (
          <p>No Results</p>
        ) : (
          searchResult.map((data) => {
            return <GameCard data={data} key={data.id} />;
          })
        )}
      </div>
      <div className="info-container">
        <span
          className="info"
          data-tool-tip="All categories: \n
            mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, 
            zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, 
            mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts"
        >
          <AiOutlineInfoCircle />
        </span>
      </div>
    </div>
  );
};

export default Game;
