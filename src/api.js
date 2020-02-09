import axios from "axios";

//const url = "https://meteo-api.herokuapp.com/api";

const url = "http://localhost:9090/api";

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
