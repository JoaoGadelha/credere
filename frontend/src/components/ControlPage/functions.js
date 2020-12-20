const setInitialProbeData = async (setProbeData) => {
  let fetchData = await fetch(
    "https://credere-backend.herokuapp.com/getPosition"
  );
  let jsonData = await fetchData.json();
  setProbeData({ x: jsonData.x, y: jsonData.y, direction: jsonData.direction });
  return jsonData;
};

export { setInitialProbeData };
