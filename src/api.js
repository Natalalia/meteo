import axios from "axios";

const url = "https://meteo-api.herokuapp.com/api";

export const getLifeValues = () => {
  return axios
    .get(`${url}/values`, {
      params: {
        currentTime: new Date().toLocaleTimeString("en-US", { hour12: false })
      }
    })
    .then(({ data }) => {
      return data.currentValues;
    })
    .catch(err => {
      console.log(err, "<<<err");
    });
};
