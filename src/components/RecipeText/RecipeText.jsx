import React from "react";
import styles from "./recipeText.module.css";

function RecipeText({ text }) {
  const lines = text.split("\n");

  return (
    <div className={styles["recipeText-wrapper"]}>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

export default RecipeText;
