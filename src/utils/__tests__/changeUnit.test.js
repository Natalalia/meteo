import { deciKelvinToCelsius, mWTokW } from "../changeUnit";

describe("changeKelvinToCelsius", () => {
  it("returns null if null is passed in", () => {
    const temperature = null;
    const result = null;
    expect(deciKelvinToCelsius(temperature)).toEqual(result);
  });
  it("returns the temperature in Celsius when 0dK is passed", () => {
    const temperature = 0;
    const result = -273;
    expect(deciKelvinToCelsius(temperature)).toEqual(result);
  });
  it("returns the temperature in Celsius when any value is passed", () => {
    const temperature = 2987.6;
    const result = 25.76;
    expect(deciKelvinToCelsius(temperature)).toEqual(result);
  });
});

describe("changemWTokWh", () => {
  it("returns the power in kWh when 0 mW is passed", () => {
    const power = 0;
    const result = 0;
    expect(mWTokW(power)).toEqual(result);
  });
  it("returns the power in kWh when 1 is passed ", () => {
    const power = 1;
    const result = 1000;
    expect(mWTokW(power)).toEqual(result);
  });
  it("returns the power in kWh when any value is passed", () => {
    const power = 64.717;
    const result = 64717;
    expect(mWTokW(power)).toEqual(result);
  });
});
