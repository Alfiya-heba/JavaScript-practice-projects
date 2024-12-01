
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('input_search');
const recipeContainer = document.getElementById('recipe-container');
const singleRecipe = document.getElementById('single-recipe');
const recipeDetails = document.getElementById('recipe-details');
const backButton = document.getElementById('back-button');

//  API URL
const API_URL = "https://api.spoonacular.com/recipes/complexSearch";  
const API_KEY = "***";

// Event listener for the search button
searchButton.addEventListener('click', function () {
    const query = searchInput.value.trim();
    if (query) {
        fetchRecipes(query);
    }
});

// Event listener for the back button
backButton.addEventListener('click', function () {
    // Show the recipe list and hide the single recipe view
    recipeContainer.style.display = "block";
    singleRecipe.style.display = "none"; 
    recipeDetails.innerHTML = "";  // Clear any recipe details that might be displayed
});


async function fetchRecipes(query) {
    recipeContainer.innerHTML = "<p>Loading...</p>"; // Show loading text
    try {
        const response = await fetch(`${API_URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await response.json();
        displayRecipes(data.results);
    } catch (error) {
        recipeContainer.innerHTML = "<p>Failed to load the Recipes. Please try again.</p>";
        console.error("Error fetching recipes:", error);
    }
}

// Display the list of recipes in the container
function displayRecipes(recipes) {
    if (!recipes || recipes.length === 0) {
        recipeContainer.innerHTML = "<p>No Recipes found! Try Searching Again.</p>";
        return;
    }
    recipeContainer.innerHTML = recipes
        .map(recipe => `
            <div class="recipe-card" onclick="viewRecipe(${recipe.id})">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
            </div>
        `)
        .join('');
}

// Fetch single recipe details from Spoonacular API
function viewRecipe(id) {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const recipe = data;
            // Hide the recipe list and show the single recipe view
            recipeContainer.style.display = "none";
            singleRecipe.style.display = "block";

            // Update the single recipe content
            recipeDetails.innerHTML = `
                <h1>${recipe.title}</h1>
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>Ingredients</h3>
                <ul>
                    ${recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
                </ul>
                <h3>Instructions</h3>
                <p>${recipe.instructions || 'No instructions available.'}</p>
            `;
        })
        .catch(error => console.error("Error fetching recipe details:", error));
}
