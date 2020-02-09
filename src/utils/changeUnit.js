export const deciKelvinToCelsius = temperature => {
  return parseFloat((temperature / 10 - 273).toFixed(2));
};

export const mWTokWh = power => {
  return power * 1000;
};
