import gsDB from "../../data/gsDB";
import { useState } from "react";
import SelectorGS from "../SelectorGS";
import GSCard from "../UI/GSCard";
import BackButton from "../UI/BackButton";

const PhoneBook = () => {
  const [gsId, changeGsId] = useState("empty");

  const [selectedGS] = gsDB.filter((gs) => gs.gsId === gsId);

  const changeGsIdHandler = (id) => {
    changeGsId(id);
  };
  return (
    <>
      <BackButton />
      <SelectorGS
        confirmButton={false}
        param={"address"}
        changerId={changeGsIdHandler}
      />
      {selectedGS ? <GSCard id="gsCard" gs={selectedGS} /> : ""}
    </>
  );
};

export default PhoneBook;
