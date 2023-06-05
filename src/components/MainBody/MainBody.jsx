import React, { useState, useRef } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import styles from "./mainBody.module.css";
import { Button } from "@mui/material";
import RecipeText from "./../RecipeText/RecipeText";
import Instruction from "../Instruction/Instruction";
import ChefThinkingLoading from "../ChefThinkingLoading/ChefThinkingLoading";
function MainBody() {
  const inputRef = useRef(null);
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      // Trigger button click event
      const button = document.getElementById("myButton");
      button.click();
    }
  };

  const fetchRecipeData = async () => {
    setSubmitLoading(true);
    console.log(ingredients.split(","));
    console.log("requ gelo");
    setRecipe(null);
    setError(null);
    try {
      const response = await axios.post(
        "https://chef-gptv2.onrender.com/getrecipe",
        // "https://chef-gpt-zctn.onrender.com/getrecipe",
        {
          // Add your request payload here
          //   ingredients: '["rice", "potato", "tomato"]',
          // ingredients: ingredients.split(","),
          ingredients: "[" + ingredients.split(",").join(", ") + "]",
        }
      );
      console.log(response);
      setRecipe(response.data.choices[0].message.content);
    } catch (error) {
      setError(error);
    }

    setSubmitLoading(false);
  };

  return (
    <div>
      {submitLoading ? (
        <div>
          <ChefThinkingLoading />
        </div>
      ) : null}

      <div className={styles["input-rules-box-wrapper"]}>
        <Instruction />
      </div>
      <div className={styles["search-box-wrapper"]}>
        <TextField
          id="outlined-basic"
          label="Ingredients"
          variant="outlined"
          type="search"
          placeholder="Example: rice, tomato, potato"
          fullWidth
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          id="myButton"
          onClick={fetchRecipeData}
          disabled={submitLoading || !ingredients}
        >
          {submitLoading === true
            ? "Creating your recipe"
            : ingredients
            ? "Create my recipe"
            : "Input your ingredients"}
          {/* {submitLoading === true ? "Creating your recipe" : "Get my recipes"} */}
        </Button>
      </div>
      <div>
        {/* {recipe && <p>{JSON.stringify(recipe)}</p>} */}
        {recipe && <RecipeText text={recipe} />}
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
}

export default MainBody;
