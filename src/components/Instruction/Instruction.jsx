import React from "react";
import styles from "./instruction.module.css";
// BsLightning;
import { BsLightning } from "react-icons/bs";

const Instruction = () => {
  return (
    <div className={styles["instruction-wrapper"]}>
      <div className={styles["instruction-icon-wrapper"]}>
        <BsLightning/>
        
      </div>
      Please input all the ingredients you have in a comma separated line
    </div>
  );
};

export default Instruction;
