const turnProbe = (
  turnDirection,
  NLmovements,
  setNLmovements,
  instructions,
  setInstructions
) => {
  let NLM_AuxArray = [...NLmovements];
  let inst_auxArray = [...instructions];
  if (turnDirection === "right") {
    NLM_AuxArray.push("Turn probe to the right.");
    inst_auxArray.push("GD");
  } else {
    NLM_AuxArray.push("Turn probe to the left.");
    inst_auxArray.push("GE");
  }

  setNLmovements(NLM_AuxArray);
  setInstructions(inst_auxArray);
};

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
