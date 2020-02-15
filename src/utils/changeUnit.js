/**
 * This function changes the units of the temperature passed in
 * @param {number} temperature - The temperature value
 */
export const deciKelvinToCelsius = temperature => {
  if (temperature === null) return null;
  return parseFloat((temperature / 10 - 273).toFixed(2));
};

/**
 * This function changes the units of the power passed in
 * @param {number} power - The power value
 */
export const mWTokW = power => {
  return Math.round(power * 1000);
};

/**
 * This function fixes to two the amount of decimal numbers
 * @param {number} power - The power value with n decimal numbers
 */
export const kWTokWh = power => {
  return parseFloat((power / 60).toFixed(2));
};
