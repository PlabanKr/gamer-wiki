import axios from "axios";

export const searchByCategory = async (category) => {
  let result;
  const options = {
    method: "GET",
    url: process.env.REACT_APP_FREE_TO_GAME,
    params: { category: category },
    headers: {
      "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return result;
};

export const searchByYear = async (year) => {
  let result;

  const options = {
    method: "GET",
    url: process.env.REACT_APP_FREE_TO_GAME,
    params: { platform: "all", "sort-by": year },
    headers: {
      "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    },
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return result;
};
