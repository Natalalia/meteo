import { deciKelvinToCelsius, mWTokW, kWTokWh } from "./changeUnit";

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
