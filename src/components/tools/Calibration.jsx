import gsDB from "../../data/gsDB";

import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import ScrollIntoView from "react-scroll-into-view";
import ResultZone from "../ResultZone";
import SelectorGS from "../SelectorGS";

function Calibration() {
  const [selectedGS, selectedGSChange] = useState("empty");

  let param = "tables";
  const gs = {
    gsId: selectedGS,
  };

  console.log(gs);
  return (
    <Container>
      <SelectorGS param={param} selectedGS={gs} />
    </Container>
  );
}

export default Calibration;
