import { useState } from "react";

function Main() {
    // const ingredients = ["coffee", "chai", "briyani"];
    const [ingredients, setIngredients] = useState([]);

    const items = ingredients.map((ing) => {
        return <li key={ing}>{ing}</li>
    })
    

    const handeForm = (event) => {
       event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredients = formData.get("ingredients")
        console.log(newIngredients)
        // ingredients.push(newIngredients)  // react dont push 
        setIngredients(newIngredients)
        console.log(newIngredients)
    }


  return (
   <main>
    <form className="add-ingredients" onSubmit={handeForm}>
        <input type="text"
        placeholder="e.g. coffee"
        aria-level="Add ingredient"
        name="ingredients"
        />
        <button>Add ingredients</button>
    </form>
        <ul>
            {items}
        </ul>
   </main>
  )
}

export default Main