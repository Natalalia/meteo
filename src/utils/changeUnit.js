export const deciKelvinToCelsius = temperature => {
  return parseFloat((temperature / 10 - 273).toFixed(2));
};

export const mWTokW = power => {
  return Math.round(power * 1000);
};

export const kWTokWh = power => {
  return parseFloat((power / 60).toFixed(2));
};
