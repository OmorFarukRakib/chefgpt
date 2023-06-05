import React from "react";
import styles from "./instruction.module.css";
// BsLightning;
import { BsLightning } from "react-icons/bs";
// import Lottie from "lottie-react";
// import instruction from './../../assets/instruction.json'
const Instruction = () => {
  return (
    <div className={styles["instruction-wrapper"]}>
      <div className={styles["instruction-icon-wrapper"]}>
        <BsLightning/>
        {/* <Lottie animationData={instruction} loop={true} /> */}
      </div>
      Please input all the ingredients you have in a comma separated line
    </div>
  );
};

export default Instruction;
