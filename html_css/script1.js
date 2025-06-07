// <!DOCTYPE html>
/* <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Search</title>
    <style>
   
    </style>
</head>
<body>
    <h1>Search for a Recipe</h1>
    <input type="text" id="foodInput" placeholder="Enter food name">
    <button onclick="getRecipe()">Search</button>
    <div class="recipe" id="recipeContainer"></div>

    // <script> */
    //     function getRecipe() {
    //         const food = document.getElementById('foodInput').value;
    //         const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
            
    //         fetch(url)
    //             .then(response => response.json())
    //             .then(data => {
    //                 const meal = data.meals ? data.meals[0] : null;
    //                 if (meal) {
    //                     document.getElementById('recipeContainer').innerHTML = `
    //                         <h2>${meal.strMeal}</h2>
    //                         <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200">
    //                         <p><strong>Category:</strong> ${meal.strCategory}</p>
    //                         <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
    //                     `;
    //                 } else {
    //                     document.getElementById('recipeContainer').innerHTML = `<p>No recipe found!</p>`;
    //                 }
    //             })
    //             .catch(error => console.error('Error fetching recipe:', error));
    //     }
//     </script>
// </body>
// </html>
function getRecipe() {
    const food = document.getElementById('foodInput').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;

    const topVegetables = ["Potato", "Tomato", "Onion", "Cauliflower", "Okra", "Cabbage", "Bitter Gourd", "Spinach", "Eggplant", "Green Peas"];

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const meal = data.meals ? data.meals[0] : null;
            if (meal) {
                let foundVegetables = topVegetables.filter(veg => meal.strInstructions.toLowerCase().includes(veg.toLowerCase()));

                document.getElementById('recipeContainer').innerHTML = `
                    <h2>${meal.strMeal}</h2>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200">
                    <p><strong>Category:</strong> ${meal.strCategory}</p>
                    <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
                    <p><strong>Vegetables Found:</strong> ${foundVegetables.length > 0 ? foundVegetables.join(", ") : "None of the top vegetables"}</p>
                `;
            } else {
                document.getElementById('recipeContainer').innerHTML = `<p>No recipe found!</p>`;
            }
        })
        .catch(error => console.error('Error fetching recipe:', error));
}