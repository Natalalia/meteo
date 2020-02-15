import axios from "axios";

const url = "https://meteo-api.herokuapp.com/api";

/**
 * Connects with the API to get the correspondent value to the query passed in
 */
export const getLifeValues = () => {
  return axios
    .get(`${url}/values`, {
      params: {
        currentTime: new Date().toLocaleTimeString("en-US", { hour12: false })
      }
    })
    .then(({ data: { closestValues } }) => {
      return closestValues;
    })
    .catch(err => {
      console.log(err, "<<<err");
    });
};

/**
 * Connects with the API to get the correspondent values to the previous hour to the one specified in the query
 * @param {string} info - determines the type of information is being required. Ex.: temperatures, power
 */
export const getValues = info => {
  return axios
    .get(`${url}/${info}`, {
      params: {
        currentTime: new Date().toLocaleTimeString("en-US", { hour12: false })
      }
    })
    .then(({ data: { averageValues } }) => {
      return averageValues;
    })
    .catch(err => console.log(err));
};
