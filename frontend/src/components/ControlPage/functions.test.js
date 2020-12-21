import { setInitialProbeData } from "./functions";

describe("Tests for the function 'setInitialProbeData'", () => {
  it("tests if the response from the server contains an object with keys 'x', 'y' and 'direction'", async () => {
    // mocks the 'setProbeData' function
    // that changes the 'probeData' state
    let setProbeData = jest.fn();

    let response = await setInitialProbeData(setProbeData);
    let responseKeys = Object.keys(response);
    expect(responseKeys.includes("x")).toBe(true);
    expect(responseKeys.includes("y")).toBe(true);
    expect(responseKeys.includes("direction")).toBe(true);
  });
});
