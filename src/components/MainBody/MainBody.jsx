import React, { useState, useRef } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import styles from "./mainBody.module.css";
import { Button } from "@mui/material";
import RecipeText from "./../RecipeText/RecipeText";
import Instruction from "../Instruction/Instruction";
function MainBody() {
  const inputRef = useRef(null);
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState(
    "Tomato, Potato and Rice Bowl Recipe\n\nIngredients:\n- 1 cup uncooked white rice\n- 2 cups water\n- 1 tablespoon olive oil\n- 1 large potato, diced\n- 1 large tomato, diced\n- 1 garlic clove, minced\n- 1/2 teaspoon dried oregano\n- Salt and pepper to taste\n\nInstructions:\n\n1. Rinse the rice thoroughly and add it to a pot with 2 cups of water. Bring to a boil, then reduce the heat to low, cover with a lid and simmer for 20 minutes or until the rice is fully cooked.\n\n2. Meanwhile, heat the olive oil in a large skillet over medium-high heat. Add the diced potatoes and season with salt and pepper. Sauté for about 5 minutes or until golden brown.\n\n3. Add the diced tomato, minced garlic and dried oregano to the skillet. Continue to cook for another 5 minutes or until the tomato has broken down and the potatoes are fully cooked.\n\n4. Combine the rice with the potato and tomato mixture in the skillet. Stir until fully combined and heated through.\n\n5. Serve the rice, tomato and potato bowl immediately, garnished with additional seasoning if desired. Enjoy!"
  );
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
        "https://chef-gpt-zctn.onrender.com/getrecipe",
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
