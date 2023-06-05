import React from 'react'
import Lottie from "lottie-react";
import chefThinking from './../../assets/chefThinking.json'
import styles from './chefThinkingLoading.module.css'
const ChefThinkingLoading = () => {
  return (
    <div className={styles["chefThinking-wrapper"]}>
      <Lottie animationData={chefThinking} loop={true} />{" "}
      <div className={styles["chefThinking-text"]}>
        ChefGPT is thinking.. Please wait..{" "}
      </div>
    </div>
  );
}

export default ChefThinkingLoading