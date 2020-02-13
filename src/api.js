import axios from "axios";

const url = "https://meteo-api.herokuapp.com/api";

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
