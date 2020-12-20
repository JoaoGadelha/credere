import React, { useState, useEffect } from "react";
import Controls from "./Controls/Controls";
import Grid from "./Grid/Grid";
import MovementsInputBox from "./MovementsInputBox/MovementsInputBox";
import MovementsOutputBox from "./MovementsOutputBox/MovementsOutputBox";
import { setInitialProbeData } from "./functions";

// renders the space probe control page.
const ControlPage = () => {
  // stores the position and direction of the space probe.
  let [probeData, setProbeData] = useState({});
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
  // stores the response message from the probe.

  useEffect(() => {
    setInitialProbeData(setProbeData);
  }, []);

  let [probeResponse, setProbeResponse] = useState({});
  return (
    <div>
      <Controls
        NLmovements={NLmovements}
        setNLmovements={setNLmovements}
        instructions={instructions}
        setInstructions={setInstructions}
        setProbeData={setProbeData}
      />
      <Grid probeData={probeData} probeResponse={probeResponse} />
      <div className="movementsBox">
        <MovementsInputBox
          NLmovements={NLmovements}
          setNLmovements={setNLmovements}
          instructions={instructions}
        />
        <MovementsOutputBox
          probeResponse={probeResponse}
          instructions={instructions}
        />
      </div>
    </div>
  );
};
export default ControlPage;
