import {postData} from './functions'

describe("Test for the 'postData' function", () => {
    it("tests if the function returns an object with keys 'x','y' and 'direction'", async () => {
      let url = "https://credere-backend.herokuapp.com/resetPosition";
      let data = {};
      // mock function
      let setResponse = jest.fn();
      let response = await postData(url, data, setResponse);
      let responseKeys = Object.keys(response);
      expect(responseKeys.includes("x")).toBe(true);
      expect(responseKeys.includes("y")).toBe(true);
      expect(responseKeys.includes("direction")).toBe(true);
    });
  });