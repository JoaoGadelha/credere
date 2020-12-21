// turns the probe left or right
// turnDirection: indicates the direction the probing must be turned to,
// assumes values 'GD' or 'GE'.
// NLmovements: array that stores the instructions for the probe in natural language,
// such as 'turn probe to the right'.
// setNLmovements: modifies NLmovements
// instructions: array that stores the instructions for the probe in code, such as
// 'GD' for turning the probe right.
const turnProbe = (
  turnDirection,
  NLmovements,
  setNLmovements,
  instructions,
  setInstructions
) => {
  let NLM_AuxArray = [...NLmovements];
  let inst_auxArray = [...instructions];
  if (turnDirection === "GD") {
    NLM_AuxArray.push("Turn probe to the right.");
    inst_auxArray.push("GD");
  } else {
    NLM_AuxArray.push("Turn probe to the left.");
    inst_auxArray.push("GE");
  }

  setNLmovements(NLM_AuxArray);
  setInstructions(inst_auxArray);

  return { NLmovements: NLM_AuxArray, instructions: inst_auxArray };
};

// move the probe forward
// NLmovements: array that stores the instructions for the probe in natural language,
// such as 'turn probe to the right'.
// setNLmovements: modifies NLmovements
// instructions: array that stores the instructions for the probe in code, such as
// 'GD' for turning the probe right.
const moveForward = (
  NLmovements,
  setNLmovements,
  instructions,
  setInstructions
) => {
  let NLM_AuxArray = [...NLmovements];
  NLM_AuxArray.push("Move forward.");
  let inst_auxArray = [...instructions];
  inst_auxArray.push("M");

  setNLmovements(NLM_AuxArray);
  setInstructions(inst_auxArray);

  return { NLmovements: NLM_AuxArray, instructions: inst_auxArray };
};

// used to send a POST message to the server
const postData = async (url, data) => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      //'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  let jsonResponse = await response.json(); // parses JSON response into native JavaScript objects

  return jsonResponse;
};

export { turnProbe, moveForward, postData };
