import { deciKelvinToCelsius, mWTokW, kWTokWh } from "./changeUnit";

/**
 * This function place in an object the final values to render, after invoke the correspondent functions to change units
 * @param {array} values - Array with the time-value pairs
 * @param {string} type - Type of the value, either temperatures or power
 */
export const storeValues = (values, type) => {
  const valuesToUse = values.slice(1);
  return valuesToUse.reduce(
    (storage, currentValue) => {
      storage.times.push(currentValue.time);
      if (type === "temperatures") {
        storage.valuesToRender.push(deciKelvinToCelsius(currentValue.average));
      } else if (type === "power") {
        const kW = mWTokW(currentValue.average);
        const kWh = kWTokWh(kW);
        storage.valuesToRender.push(kWh);
      }
      return storage;
    },
    { times: [], valuesToRender: [] }
  );
};
