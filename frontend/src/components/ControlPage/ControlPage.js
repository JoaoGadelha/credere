import React, { useState } from "react";
import Controls from "./Controls/Controls";
import Grid from "./Grid/Grid";
import MovementsInputBox from "./MovementsInputBox/MovementsInputBox";

// renderiza a pagina de controle da sonda
const ControlPage = () => {
  // stores the position and direction of the space probe
  let [probeData, setProbeData] = useState({ x: 0, y: 0, direction: "right" });
  // NLmovements - natural languages movements.
  // stores the movements for the space probe
  // in natural language instructions such as
  // 'move forward' and 'turn left'.
  let [NLmovements, setNLmovements] = useState([]);
  // instructions - state that stores an array
  // with codes for the movement of the space probe.
  // the movement codes are:
  // GE - turn space probe left
  // GD - turn space probe to the right
  // M - move forward
  let [instructions, setInstructions] = useState([]);
  return (
    <div>
      <Controls
        NLmovements={NLmovements}
        setNLmovements={setNLmovements}
        instructions={instructions}
        setInstructions={setInstructions}
      />
      <Grid probeData={probeData}/>
      <MovementsInputBox
        NLmovements={NLmovements}
        instructions={instructions}
      />
    </div>
  );
};
export default ControlPage;
